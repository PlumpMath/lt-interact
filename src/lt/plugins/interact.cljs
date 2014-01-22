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
                      (object/merge! this {:proc {:out (.toString data)}})))

(behavior ::on-proc-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (object/merge! this {:proc {:error (.toString data)}})))

(behavior ::on-proc-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (object/merge! this {:running false})))

(object/object* ::runner
                :behaviors [::on-proc-out ::on-proc-error ::on-proc-exit]
                :running true
                :proc {:process nil :out nil :error nil}
                :init (fn [this command args init-fn]
                        (let [p (proc/simple-spawn* this {:command command, :args args} nil {})]
                          (when init-fn
                            (init-fn p))
                          (object/merge! this {:proc {:process p}})
                          (notifos/done-working (str command " started"))
                          nil)))

(defn new-val-in? [ks old new]
  (let [old-val (get-in old ks)
        new-val (get-in new ks)]
    (if (and new-val
             (not= old-val new-val))
      new-val)))

(defn cmd-process [cmd args cb]
  (let [o (object/create ::runner cmd args)
        k (gensym cmd)]
    (add-watch o k (fn [_ _ old new]
                     (when-let [new-out (new-val-in? [:proc :out] old new)]
                       (cb new-out nil)
                       (object/merge! o {:proc {:out nil}}))
                     (when-let [new-err (new-val-in? [:proc :error] old new)]
                       (cb nil new-err)
                       (object/merge! o {:proc {:error nil}}))))
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

(defn last-pos [editor]
  (let [last-line (ed/last-line editor)
        last-char (inc (count (ed/line editor last-line)))]
    {:line last-line :ch last-char}))

(defn new-input [editor]
  (let [{:keys [line ch] :as end} (-> @editor :interact.output-end)
        lline (ed/last-line editor)
        [line ch] (if (and (not end) (not= line lline))
                    [lline 1]
                    [line ch])
        input (.slice (ed/line editor line) (dec ch))]
    input))

(defn eval-on-last-line [cm]
  (let [editor (pool/last-active)
        last-line (ed/last-line editor)
        cur-line (:line (ed/->cursor editor))]
    (when (= cur-line last-line)
      (cmd-input (get-cmd editor) (str (new-input editor) "\n")))
    (.execCommand cm "newlineAndIndent")))

(defn popup-set-command [default f]
  (let [input (text-input default)]
    (popup/popup! {:header "Set the name of the command you want to interact with"
                   :body [:div
                          [:label "Name or path of command"]
                          input]
                   :buttons [{:label "cancel"}
                             {:label "submit"
                              :action (fn []
                                        (f (dom/val input)))}]})
    (dom/focus input)))

(defn popup-set-cmd []
  (popup-set-command "zsh"
                     (fn [cmd]
                       (let [editor (pool/last-active)
                             cmd-obj (cmd-process cmd [] #((get-in @editor [:interact.result-fn]) %1 %2))]
                         (object/add-tags editor [:editor.interactive])
                         (object/merge! editor {:interact.client cmd-obj
                                                :interact.result-fn (append-result editor)})
                         (.addKeyMap (-> @editor :ed)
                                     #js {"Enter" eval-on-last-line})))))

(defn append-result [editor]
  (fn [output error-output]
    (ed/replace editor (last-pos editor) (or output ""))
    (ed/replace editor (last-pos editor) (or error-output ""))
    (object/merge! editor {:interact.output-end (last-pos editor)})
    (ed/move-cursor editor (update-in (last-pos editor) [:ch] dec))))

(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (let [info (selection-info editor)
                            cmd (get-cmd editor)]
                          (when-not (string/blank? (:code info))
                            (cmd-input cmd (:code info))))))

(cmd/command {:command :interact-with
              :desc "Interact: Start interaction with a command."
              :exec popup-set-cmd})