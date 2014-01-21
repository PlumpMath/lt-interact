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

lt.plugins.interact.__BEH__on_proc_out = (function __BEH__on_proc_out(this$,data){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null),cljs.core.constantly.call(null,data.toString()));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.interact","on-proc-out","lt.plugins.interact/on-proc-out",2687929707),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.interact.__BEH__on_proc_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.plugins.interact.__BEH__on_proc_error = (function __BEH__on_proc_error(this$,data){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"error","error",1110689146)], null),cljs.core.constantly.call(null,data.toString()));
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

lt.plugins.interact.cmd_input = (function cmd_input(cmd_obj,input){var stdin = cljs.core.get_in.call(null,cljs.core.deref.call(null,cmd_obj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"process","process",704385505)], null)).stdin;return stdin.write(input);
});

lt.plugins.interact.get_cmd = (function get_cmd(editor){return new cljs.core.Keyword(null,"interact.client","interact.client",3083578869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
});

lt.plugins.interact.selection_info = (function selection_info(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos))));return info__$1;
});

lt.plugins.interact.text_input = (function text_input(default_value){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),default_value], null)], null));var seq__8306_8314 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8307_8315 = null;var count__8308_8316 = 0;var i__8309_8317 = 0;while(true){
if((i__8309_8317 < count__8308_8316))
{var vec__8310_8318 = cljs.core._nth.call(null,chunk__8307_8315,i__8309_8317);var ev__8088__auto___8319 = cljs.core.nth.call(null,vec__8310_8318,0,null);var func__8089__auto___8320 = cljs.core.nth.call(null,vec__8310_8318,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8319,func__8089__auto___8320);
{
var G__8321 = seq__8306_8314;
var G__8322 = chunk__8307_8315;
var G__8323 = count__8308_8316;
var G__8324 = (i__8309_8317 + 1);
seq__8306_8314 = G__8321;
chunk__8307_8315 = G__8322;
count__8308_8316 = G__8323;
i__8309_8317 = G__8324;
continue;
}
} else
{var temp__4092__auto___8325 = cljs.core.seq.call(null,seq__8306_8314);if(temp__4092__auto___8325)
{var seq__8306_8326__$1 = temp__4092__auto___8325;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8306_8326__$1))
{var c__7470__auto___8327 = cljs.core.chunk_first.call(null,seq__8306_8326__$1);{
var G__8328 = cljs.core.chunk_rest.call(null,seq__8306_8326__$1);
var G__8329 = c__7470__auto___8327;
var G__8330 = cljs.core.count.call(null,c__7470__auto___8327);
var G__8331 = 0;
seq__8306_8314 = G__8328;
chunk__8307_8315 = G__8329;
count__8308_8316 = G__8330;
i__8309_8317 = G__8331;
continue;
}
} else
{var vec__8311_8332 = cljs.core.first.call(null,seq__8306_8326__$1);var ev__8088__auto___8333 = cljs.core.nth.call(null,vec__8311_8332,0,null);var func__8089__auto___8334 = cljs.core.nth.call(null,vec__8311_8332,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8333,func__8089__auto___8334);
{
var G__8335 = cljs.core.next.call(null,seq__8306_8326__$1);
var G__8336 = null;
var G__8337 = 0;
var G__8338 = 0;
seq__8306_8314 = G__8335;
chunk__8307_8315 = G__8336;
count__8308_8316 = G__8337;
i__8309_8317 = G__8338;
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
return (function (p1__8312_SHARP_,p2__8313_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.result-fn","interact.result-fn",4519767602)], null)).call(null,p1__8312_SHARP_,p2__8313_SHARP_);
});})(cmd,editor))
);lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.interactive","editor.interactive",2113003347)], null));
return lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.client","interact.client",3083578869)], null),(function (_,n){return n;
}),cmd_obj);
})], null)], null)], null));
});

lt.plugins.interact.last_pos = (function last_pos(editor){var last_line = lt.objs.editor.last_line.call(null,editor);var last_char = (cljs.core.count.call(null,lt.objs.editor.line.call(null,editor,last_line)) + 1);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),last_line,new cljs.core.Keyword(null,"ch","ch",1013907415),last_char], null);
});

lt.plugins.interact.append_result = (function append_result(editor){return (function (output,error_output){lt.objs.editor.replace.call(null,editor,lt.plugins.interact.last_pos.call(null,editor),output);
return lt.objs.editor.move_cursor.call(null,editor,cljs.core.update_in.call(null,lt.plugins.interact.last_pos.call(null,editor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec));
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