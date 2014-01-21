(ns lt.plugins.interact
  "Interact with commandline programs from within Light Table"
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.objs.popup :as popup]
            [lt.objs.notifos :as notifos]
            [lt.objs.sidebar.command :as cmd]
            [lt.util.dom :as dom]
            [lt.util.load :as load]

            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior defui]]))

; command to start interaction
;  prompt for command to run
;  command output -> editor
;  enter on last line of editor -> send last new input to command
;  display output of command
;  repl

; need to pass through some characters (ctrl-c, ctrl-d), but only
; sometimes. need to detect what is output of cmd and what is input
; of user. possibly make some text undeletable?

; interpretation of terminfo characters for colors and other fancy
; things.

(behavior ::on-proc-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (object/update! this [:proc :out] (constantly (.toString data)))))

(behavior ::on-proc-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (object/update! this [:proc :error] (constantly (.toString data)))))

(behavior ::on-proc-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (object/update! this [:running] (constantly false))))

(object/object* ::runner
                :behaviors [::on-proc-out ::on-proc-error ::on-proc-exit]
                :running true
                :proc {:process nil :out nil :error nil}
                :init (fn [this command args init-fn]
                        (let [p (proc/simple-spawn* this {:command command, :args args} nil {})]
                          (when init-fn
                            (init-fn p))
                          (object/update! this [:proc :process] (fn [_ n] n) p)
                          (notifos/done-working (str command " started"))
                          nil)))

(defn cmd-process [cmd args cb]
  (let [o (object/create ::runner cmd args)
        k (gensym cmd)]
    (add-watch o k (fn [_ _ old new]
                     (let [old-out (get-in old [:proc :out])
                           new-out (get-in new [:proc :out])
                           err-out (get-in new [:proc :error])]
                       (if (and new-out
                                (not= old-out new-out))
                         (cb new-out err-out)))))
    o))

(defn cmd-input [cmd-obj input]
  (let [stdin (.-stdin (get-in @cmd-obj [:proc :process]))]
    (.write stdin input)))

(defn get-cmd [editor]
  (-> @editor :interact.client))

(defn selection-info [editor]
  (let [pos (ed/->cursor editor)
        info (:info @editor)
        info (if (ed/selection? editor)
               (assoc info
                 :meta {:start (-> (ed/->cursor editor "start") :line)
                        :end (-> (ed/->cursor editor "end") :line)}
                 :code (ed/selection editor))
               (assoc info
                 :pos pos
                 :code (ed/line editor (:line pos))))]
    info))

(defui text-input [default-value]
  [:input {:type "text", :value default-value}])

(defn popup-set-cmd []
  (let [input (text-input "zsh")]
    (popup/popup! {:header "Set the name of the command you want to interact with"
                   :body [:div
                          [:label "Name or path of command"]
                          input]
                   :buttons [{:label "cancel"}
                             {:label "submit"
                              :action (fn []
                                        (let [cmd (dom/val input)
                                              editor (pool/last-active)
                                              cmd-obj (cmd-process cmd [] #((get-in @editor [:interact.result-fn]) %1 %2))]
                                          (object/add-tags editor [:editor.interactive])
                                          (object/update! editor [:interact.client] (fn [_ n] n) cmd-obj)))}]})))

(defn last-pos [editor]
  (let [last-line (ed/last-line editor)
        last-char (inc (count (ed/line editor last-line)))]
    {:line last-line :ch last-char}))

(defn append-result [editor]
  (fn [output error-output]
    (ed/replace editor (last-pos editor) output)
    (ed/move-cursor editor (update-in (last-pos editor) [:ch] dec))))

(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (let [info (selection-info editor)
                            cmd (get-cmd editor)]
                          (when-not (string/blank? (:code info))
                            (object/update! editor [:interact.result-fn] (fn [_ n] n) (append-result editor))
                            (cmd-input cmd (:code info))))))


(cmd/command {:command :interact-with
              :desc "Interact: Start interaction with a command."
              :exec popup-set-cmd})