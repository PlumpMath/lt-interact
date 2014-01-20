if(!lt.util.load.provided_QMARK_('lt.plugins.interact')) {
goog.provide('lt.plugins.interact');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');

lt.plugins.interact.__BEH__on_proc_out = (function __BEH__on_proc_out(this$,data){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null),cljs.core.str,data.toString());
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.interact","on-proc-out","lt.plugins.interact/on-proc-out",2687929707),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.interact.__BEH__on_proc_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.plugins.interact.__BEH__on_proc_error = (function __BEH__on_proc_error(this$,data){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"error","error",1110689146)], null),cljs.core.str,data.toString());
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.interact","on-proc-error","lt.plugins.interact/on-proc-error",1671911025),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.interact.__BEH__on_proc_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));

lt.plugins.interact.__BEH__on_proc_exit = (function __BEH__on_proc_exit(this$,data){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",2564688177)], null),cljs.core.constantly.call(null,false));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.interact","on-proc-exit","lt.plugins.interact/on-proc-exit",1175196713),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.interact.__BEH__on_proc_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.interact","runner","lt.plugins.interact/runner",2426861730),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.interact","on-proc-out","lt.plugins.interact/on-proc-out",2687929707),new cljs.core.Keyword("lt.plugins.interact","on-proc-error","lt.plugins.interact/on-proc-error",1671911025),new cljs.core.Keyword("lt.plugins.interact","on-proc-exit","lt.plugins.interact/on-proc-exit",1175196713)], null),new cljs.core.Keyword(null,"running","running",2564688177),true,new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"process","process",704385505),null,new cljs.core.Keyword(null,"out","out",1014014656),null,new cljs.core.Keyword(null,"error","error",1110689146),null], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,command,args,init_fn){var p = lt.objs.proc.simple_spawn_STAR_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"args","args",1016906831),args], null),null,cljs.core.PersistentArrayMap.EMPTY);if(cljs.core.truth_(init_fn))
{init_fn.call(null,p);
} else
{}
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"process","process",704385505)], null),(function (_,n){return n;
}),p);
lt.objs.notifos.done_working.call(null,[cljs.core.str(command),cljs.core.str(" started")].join(''));
return null;
}));

lt.plugins.interact.cmd_process = (function cmd_process(cmd,args,cb){var o = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.interact","runner","lt.plugins.interact/runner",2426861730),cmd,args);var k = cljs.core.gensym.call(null,cmd);cljs.core.add_watch.call(null,o,k,(function (_,___$1,old,new$){var old_out = cljs.core.get_in.call(null,old,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null));var new_out = cljs.core.get_in.call(null,new$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null));var err_out = cljs.core.get_in.call(null,new$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"error","error",1110689146)], null));if(cljs.core.truth_((function (){var and__6729__auto__ = new_out;if(cljs.core.truth_(and__6729__auto__))
{return cljs.core.not_EQ_.call(null,old_out,new_out);
} else
{return and__6729__auto__;
}
})()))
{return cb.call(null,new_out,err_out);
} else
{return null;
}
}));
return o;
});

lt.plugins.interact.cmd_input = (function cmd_input(cmd_obj,input){var stdin = cljs.core.get_in.call(null,cljs.core.deref.call(null,cmd_obj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"process","process",704385505)], null)).stdin;lt.object.update_BANG_.call(null,cmd_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928)], null),(function (p){return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"out","out",1014014656),null,new cljs.core.Keyword(null,"error","error",1110689146),null);
}));
return stdin.write(input);
});

lt.plugins.interact.get_cmd = (function get_cmd(editor){return new cljs.core.Keyword(null,"interact.client","interact.client",3083578869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
});

lt.plugins.interact.selection_info = (function selection_info(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos))));return info__$1;
});

lt.plugins.interact.text_input = (function text_input(default_value){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),default_value], null)], null));var seq__8177_8195 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8178_8196 = null;var count__8179_8197 = 0;var i__8180_8198 = 0;while(true){
if((i__8180_8198 < count__8179_8197))
{var vec__8181_8199 = cljs.core._nth.call(null,chunk__8178_8196,i__8180_8198);var ev__8088__auto___8200 = cljs.core.nth.call(null,vec__8181_8199,0,null);var func__8089__auto___8201 = cljs.core.nth.call(null,vec__8181_8199,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8200,func__8089__auto___8201);
{
var G__8202 = seq__8177_8195;
var G__8203 = chunk__8178_8196;
var G__8204 = count__8179_8197;
var G__8205 = (i__8180_8198 + 1);
seq__8177_8195 = G__8202;
chunk__8178_8196 = G__8203;
count__8179_8197 = G__8204;
i__8180_8198 = G__8205;
continue;
}
} else
{var temp__4092__auto___8206 = cljs.core.seq.call(null,seq__8177_8195);if(temp__4092__auto___8206)
{var seq__8177_8207__$1 = temp__4092__auto___8206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8177_8207__$1))
{var c__7470__auto___8208 = cljs.core.chunk_first.call(null,seq__8177_8207__$1);{
var G__8209 = cljs.core.chunk_rest.call(null,seq__8177_8207__$1);
var G__8210 = c__7470__auto___8208;
var G__8211 = cljs.core.count.call(null,c__7470__auto___8208);
var G__8212 = 0;
seq__8177_8195 = G__8209;
chunk__8178_8196 = G__8210;
count__8179_8197 = G__8211;
i__8180_8198 = G__8212;
continue;
}
} else
{var vec__8182_8213 = cljs.core.first.call(null,seq__8177_8207__$1);var ev__8088__auto___8214 = cljs.core.nth.call(null,vec__8182_8213,0,null);var func__8089__auto___8215 = cljs.core.nth.call(null,vec__8182_8213,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8214,func__8089__auto___8215);
{
var G__8216 = cljs.core.next.call(null,seq__8177_8207__$1);
var G__8217 = null;
var G__8218 = 0;
var G__8219 = 0;
seq__8177_8195 = G__8216;
chunk__8178_8196 = G__8217;
count__8179_8197 = G__8218;
i__8180_8198 = G__8219;
continue;
}
}
} else
{}
}
break;
}
return e__8087__auto__;
});

lt.plugins.interact.popup_set_cmd = (function popup_set_cmd(){var input = lt.plugins.interact.text_input.call(null,"zsh");return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Set the name of the command you want to interact with",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Name or path of command"], null),input], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"submit",new cljs.core.Keyword(null,"action","action",3885920680),(function (){var cmd = lt.util.dom.val.call(null,input);var editor = lt.objs.editor.pool.last_active.call(null);var cmd_obj = lt.plugins.interact.cmd_process.call(null,cmd,cljs.core.PersistentVector.EMPTY,((function (cmd,editor){
return (function (p1__8183_SHARP_,p2__8184_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.result-fn","interact.result-fn",4519767602)], null)).call(null,p1__8183_SHARP_,p2__8184_SHARP_);
});})(cmd,editor))
);lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.interactive","editor.interactive",2113003347)], null));
return lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.client","interact.client",3083578869)], null),(function (_,n){return n;
}),cmd_obj);
})], null)], null)], null));
});

lt.plugins.interact.append_result = (function append_result(editor){return (function (output,error_output){var last_line = lt.objs.editor.last_line.call(null,editor);var last_char = (cljs.core.count.call(null,lt.objs.editor.line.call(null,editor,last_line)) + 1);return lt.objs.editor.replace.call(null,editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),last_line,new cljs.core.Keyword(null,"ch","ch",1013907415),last_char], null),output);
});
});

lt.plugins.interact.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var info = lt.plugins.interact.selection_info.call(null,editor);var cmd = lt.plugins.interact.get_cmd.call(null,editor);if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info))))
{return null;
} else
{lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.result-fn","interact.result-fn",4519767602)], null),(function (_,n){return n;
}),lt.plugins.interact.append_result.call(null,editor));
return lt.plugins.interact.cmd_input.call(null,cmd,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.interact","on-eval.one","lt.plugins.interact/on-eval.one",1769479096),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.interact.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));

lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"interact-with","interact-with",3616842095),new cljs.core.Keyword(null,"desc","desc",1016984067),"Interact: Start interaction with a command.",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.interact.popup_set_cmd], null));

}

//# sourceMappingURL=