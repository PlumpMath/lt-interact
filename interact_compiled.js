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

lt.plugins.interact.new_val_in_QMARK_ = (function new_val_in_QMARK_(ks,old,new$){var old_val = cljs.core.get_in.call(null,old,ks);var new_val = cljs.core.get_in.call(null,new$,ks);if(cljs.core.truth_((function (){var and__6729__auto__ = new_val;if(cljs.core.truth_(and__6729__auto__))
{return cljs.core.not_EQ_.call(null,old_val,new_val);
} else
{return and__6729__auto__;
}
})()))
{return new_val;
} else
{return null;
}
});

lt.plugins.interact.cmd_process = (function cmd_process(cmd,args,cb){var o = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.interact","runner","lt.plugins.interact/runner",2426861730),cmd,args);var k = cljs.core.gensym.call(null,cmd);cljs.core.add_watch.call(null,o,k,(function (_,___$1,old,new$){var temp__4092__auto___8470 = lt.plugins.interact.new_val_in_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null),old,new$);if(cljs.core.truth_(temp__4092__auto___8470))
{var new_out_8471 = temp__4092__auto___8470;cb.call(null,new_out_8471,null);
lt.object.update_BANG_.call(null,o,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null),cljs.core.constantly.call(null,null));
} else
{}
var temp__4092__auto__ = lt.plugins.interact.new_val_in_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"error","error",1110689146)], null),old,new$);if(cljs.core.truth_(temp__4092__auto__))
{var new_err = temp__4092__auto__;cb.call(null,null,new_err);
return lt.object.update_BANG_.call(null,o,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"error","error",1110689146)], null),cljs.core.constantly.call(null,null));
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

lt.plugins.interact.text_input = (function text_input(default_value){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),default_value], null)], null));var seq__8458_8472 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8459_8473 = null;var count__8460_8474 = 0;var i__8461_8475 = 0;while(true){
if((i__8461_8475 < count__8460_8474))
{var vec__8462_8476 = cljs.core._nth.call(null,chunk__8459_8473,i__8461_8475);var ev__8088__auto___8477 = cljs.core.nth.call(null,vec__8462_8476,0,null);var func__8089__auto___8478 = cljs.core.nth.call(null,vec__8462_8476,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8477,func__8089__auto___8478);
{
var G__8479 = seq__8458_8472;
var G__8480 = chunk__8459_8473;
var G__8481 = count__8460_8474;
var G__8482 = (i__8461_8475 + 1);
seq__8458_8472 = G__8479;
chunk__8459_8473 = G__8480;
count__8460_8474 = G__8481;
i__8461_8475 = G__8482;
continue;
}
} else
{var temp__4092__auto___8483 = cljs.core.seq.call(null,seq__8458_8472);if(temp__4092__auto___8483)
{var seq__8458_8484__$1 = temp__4092__auto___8483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8458_8484__$1))
{var c__7470__auto___8485 = cljs.core.chunk_first.call(null,seq__8458_8484__$1);{
var G__8486 = cljs.core.chunk_rest.call(null,seq__8458_8484__$1);
var G__8487 = c__7470__auto___8485;
var G__8488 = cljs.core.count.call(null,c__7470__auto___8485);
var G__8489 = 0;
seq__8458_8472 = G__8486;
chunk__8459_8473 = G__8487;
count__8460_8474 = G__8488;
i__8461_8475 = G__8489;
continue;
}
} else
{var vec__8463_8490 = cljs.core.first.call(null,seq__8458_8484__$1);var ev__8088__auto___8491 = cljs.core.nth.call(null,vec__8463_8490,0,null);var func__8089__auto___8492 = cljs.core.nth.call(null,vec__8463_8490,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8491,func__8089__auto___8492);
{
var G__8493 = cljs.core.next.call(null,seq__8458_8484__$1);
var G__8494 = null;
var G__8495 = 0;
var G__8496 = 0;
seq__8458_8472 = G__8493;
chunk__8459_8473 = G__8494;
count__8460_8474 = G__8495;
i__8461_8475 = G__8496;
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

lt.plugins.interact.last_pos = (function last_pos(editor){var last_line = lt.objs.editor.last_line.call(null,editor);var last_char = (cljs.core.count.call(null,lt.objs.editor.line.call(null,editor,last_line)) + 1);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),last_line,new cljs.core.Keyword(null,"ch","ch",1013907415),last_char], null);
});

lt.plugins.interact.new_input = (function new_input(editor){var map__8466 = new cljs.core.Keyword(null,"interact.output-end","interact.output-end",1619479609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var map__8466__$1 = ((cljs.core.seq_QMARK_.call(null,map__8466))?cljs.core.apply.call(null,cljs.core.hash_map,map__8466):map__8466);var end = map__8466__$1;var ch = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var line = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"line","line",1017226086));var lline = lt.objs.editor.last_line.call(null,editor);var vec__8467 = (((cljs.core.not.call(null,end)) && (cljs.core.not_EQ_.call(null,line,lline)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lline,1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,ch], null));var line__$1 = cljs.core.nth.call(null,vec__8467,0,null);var ch__$1 = cljs.core.nth.call(null,vec__8467,1,null);var input = lt.objs.editor.line.call(null,editor,line__$1).slice((ch__$1 - 1));return input;
});

lt.plugins.interact.eval_on_last_line = (function eval_on_last_line(cm){var editor = lt.objs.editor.pool.last_active.call(null);var last_line = lt.objs.editor.last_line.call(null,editor);var cur_line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor));if(cljs.core._EQ_.call(null,cur_line,last_line))
{lt.plugins.interact.cmd_input.call(null,lt.plugins.interact.get_cmd.call(null,editor),[cljs.core.str(lt.plugins.interact.new_input.call(null,editor)),cljs.core.str("\n")].join(''));
} else
{}
return cm.execCommand("newlineAndIndent");
});

lt.plugins.interact.popup_set_cmd = (function popup_set_cmd(){var input = lt.plugins.interact.text_input.call(null,"zsh");return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Set the name of the command you want to interact with",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Name or path of command"], null),input], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"submit",new cljs.core.Keyword(null,"action","action",3885920680),(function (){var cmd = lt.util.dom.val.call(null,input);var editor = lt.objs.editor.pool.last_active.call(null);var cmd_obj = lt.plugins.interact.cmd_process.call(null,cmd,cljs.core.PersistentVector.EMPTY,((function (cmd,editor){
return (function (p1__8468_SHARP_,p2__8469_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.result-fn","interact.result-fn",4519767602)], null)).call(null,p1__8468_SHARP_,p2__8469_SHARP_);
});})(cmd,editor))
);lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.interactive","editor.interactive",2113003347)], null));
lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.result-fn","interact.result-fn",4519767602)], null),(function (_,n){return n;
}),lt.plugins.interact.append_result.call(null,editor));
lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.client","interact.client",3083578869)], null),(function (_,n){return n;
}),cmd_obj);
return new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)).addKeyMap({"Enter": lt.plugins.interact.eval_on_last_line});
})], null)], null)], null));
});

lt.plugins.interact.append_result = (function append_result(editor){return (function (output,error_output){lt.objs.editor.replace.call(null,editor,lt.plugins.interact.last_pos.call(null,editor),(function (){var or__6741__auto__ = output;if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return "";
}
})());
lt.objs.editor.replace.call(null,editor,lt.plugins.interact.last_pos.call(null,editor),(function (){var or__6741__auto__ = error_output;if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return "";
}
})());
lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interact.output-end","interact.output-end",1619479609)], null),(function (_,n){return n;
}),lt.plugins.interact.last_pos.call(null,editor));
return lt.objs.editor.move_cursor.call(null,editor,cljs.core.update_in.call(null,lt.plugins.interact.last_pos.call(null,editor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec));
});
});

lt.plugins.interact.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var info = lt.plugins.interact.selection_info.call(null,editor);var cmd = lt.plugins.interact.get_cmd.call(null,editor);if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info))))
{return null;
} else
{return lt.plugins.interact.cmd_input.call(null,cmd,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.interact","on-eval.one","lt.plugins.interact/on-eval.one",1769479096),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.interact.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));

lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"interact-with","interact-with",3616842095),new cljs.core.Keyword(null,"desc","desc",1016984067),"Interact: Start interaction with a command.",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.interact.popup_set_cmd], null));

}

//# sourceMappingURL=