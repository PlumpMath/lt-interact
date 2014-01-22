(ns lt.plugins.interact.inline
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.objs.sidebar.command :as cmd]
            [lt.util.load :as load]

            [clojure.string :as string]

            [lt.plugins.interact :as interact])
  (:require-macros [lt.macros :refer [behavior]]))

(behavior ::on-proc-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (object/update! this [:proc :out] str (.toString data))))

(behavior ::on-proc-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (object/update! this [:proc :error] str (.toString data))))

(behavior ::on-proc-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (object/update! this [:running] (constantly false))))

(object/object* ::runner
                :behaviors [::on-proc-out ::on-proc-error ::on-proc-exit]
                :proc {:process nil, :out nil, :error nil}
                :running true
                :init (fn [this command args init-fn]
                        (let [p (proc/simple-spawn* this {:command command, :args args} nil {})]
                          (when init-fn
                            (init-fn p))
                          (object/merge! this {:proc {:process p}})
                          (notifos/done-working (str command " started"))
                          nil)))

(defn cmd-process [cmd args initial-cmd separator cb]
  (let [o (object/create ::runner cmd args
                         (fn [p]
                           (.write (.-stdin p) (str initial-cmd "\n"))))
        k (gensym cmd)]
    (add-watch o k (fn [_ _ old new]
                     (let [new-out (interact/new-val-in? [:proc :out] old new)
                           new-err (interact/new-val-in? [:proc :error] old new)]
                       (when (and new-out (.contains new-out separator))
                         (let [res (string/split new-out separator)
                               res (peek res)
                               res (if (string/blank? res)
                                     "✓"
                                     res)]
                           (cb res nil)))
                       (when (and new-err (.contains new-err separator))
                         (cb nil new-err)))))
    o))

(defn cmd-input [cmd-obj input]
  (let [stdin (.-stdin (get-in @cmd-obj [:proc :process]))]
    (object/update! cmd-obj [:proc] (fn [p]
                                       (assoc p :out nil :error nil)))
    (notifos/working)
    (.write stdin (str input "\n"))))

(defn show-result [editor loc]
  (fn [output error-output]
    (notifos/done-working)
    (if error-output
      (object/raise editor :editor.exception error-output loc)
      (object/raise editor :editor.result output loc))))

(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (let [info (interact/selection-info editor)
                            loc {:line (or (get-in info [:meta :end])
                                           (get-in info [:pos :line]))}
                            cmd (interact/get-cmd editor)]
                        (when-not (string/blank? (:code info))
                          (object/merge! editor {:interact.result-fn (show-result editor loc)})
                          (cmd-input cmd (:code info))))))

; if we define :doc and :type commands, then we can support those things too
; commands are formatting strings: ":type %" => ":type putStrLn"

(defn popup-start-inline []
  (interact/popup-set-command "guile"
                              (fn [cmd]
                                (let [editor (pool/last-active)
                                      initial-cmd ",option prompt \";eval-finished\\n\""
                                      separator ";eval-finished\n"
                                      on-output (fn [out err]
                                                  ((get-in @editor [:interact.result-fn]) out err))
                                      cmd-obj (cmd-process cmd [] initial-cmd separator on-output)]
                                  (object/add-tags editor [:editor.interactive.inline])
                                  (object/merge! editor {:interact.client cmd-obj})))))

(cmd/command {:command :interact-inline
              :desc "Interact: Start inline interaction with a command."
              :exec popup-start-inline})