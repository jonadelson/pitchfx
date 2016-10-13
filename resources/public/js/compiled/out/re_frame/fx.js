// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__15451){
var vec__15452 = p__15451;
var k = cljs.core.nth.call(null,vec__15452,(0),null);
var value = cljs.core.nth.call(null,vec__15452,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__15455 = cljs.core.seq.call(null,value);
var chunk__15456 = null;
var count__15457 = (0);
var i__15458 = (0);
while(true){
if((i__15458 < count__15457)){
var map__15459 = cljs.core._nth.call(null,chunk__15456,i__15458);
var map__15459__$1 = ((((!((map__15459 == null)))?((((map__15459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15459):map__15459);
var effect = map__15459__$1;
var ms = cljs.core.get.call(null,map__15459__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__15459__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__15455,chunk__15456,count__15457,i__15458,map__15459,map__15459__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__15455,chunk__15456,count__15457,i__15458,map__15459,map__15459__$1,effect,ms,dispatch))
,ms);
}

var G__15463 = seq__15455;
var G__15464 = chunk__15456;
var G__15465 = count__15457;
var G__15466 = (i__15458 + (1));
seq__15455 = G__15463;
chunk__15456 = G__15464;
count__15457 = G__15465;
i__15458 = G__15466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15455);
if(temp__4657__auto__){
var seq__15455__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15455__$1)){
var c__6552__auto__ = cljs.core.chunk_first.call(null,seq__15455__$1);
var G__15467 = cljs.core.chunk_rest.call(null,seq__15455__$1);
var G__15468 = c__6552__auto__;
var G__15469 = cljs.core.count.call(null,c__6552__auto__);
var G__15470 = (0);
seq__15455 = G__15467;
chunk__15456 = G__15468;
count__15457 = G__15469;
i__15458 = G__15470;
continue;
} else {
var map__15461 = cljs.core.first.call(null,seq__15455__$1);
var map__15461__$1 = ((((!((map__15461 == null)))?((((map__15461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15461):map__15461);
var effect = map__15461__$1;
var ms = cljs.core.get.call(null,map__15461__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__15461__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__15455,chunk__15456,count__15457,i__15458,map__15461,map__15461__$1,effect,ms,dispatch,seq__15455__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__15455,chunk__15456,count__15457,i__15458,map__15461,map__15461__$1,effect,ms,dispatch,seq__15455__$1,temp__4657__auto__))
,ms);
}

var G__15471 = cljs.core.next.call(null,seq__15455__$1);
var G__15472 = null;
var G__15473 = (0);
var G__15474 = (0);
seq__15455 = G__15471;
chunk__15456 = G__15472;
count__15457 = G__15473;
i__15458 = G__15474;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__15475 = cljs.core.seq.call(null,value);
var chunk__15476 = null;
var count__15477 = (0);
var i__15478 = (0);
while(true){
if((i__15478 < count__15477)){
var event = cljs.core._nth.call(null,chunk__15476,i__15478);
re_frame.router.dispatch.call(null,event);

var G__15479 = seq__15475;
var G__15480 = chunk__15476;
var G__15481 = count__15477;
var G__15482 = (i__15478 + (1));
seq__15475 = G__15479;
chunk__15476 = G__15480;
count__15477 = G__15481;
i__15478 = G__15482;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15475);
if(temp__4657__auto__){
var seq__15475__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15475__$1)){
var c__6552__auto__ = cljs.core.chunk_first.call(null,seq__15475__$1);
var G__15483 = cljs.core.chunk_rest.call(null,seq__15475__$1);
var G__15484 = c__6552__auto__;
var G__15485 = cljs.core.count.call(null,c__6552__auto__);
var G__15486 = (0);
seq__15475 = G__15483;
chunk__15476 = G__15484;
count__15477 = G__15485;
i__15478 = G__15486;
continue;
} else {
var event = cljs.core.first.call(null,seq__15475__$1);
re_frame.router.dispatch.call(null,event);

var G__15487 = cljs.core.next.call(null,seq__15475__$1);
var G__15488 = null;
var G__15489 = (0);
var G__15490 = (0);
seq__15475 = G__15487;
chunk__15476 = G__15488;
count__15477 = G__15489;
i__15478 = G__15490;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1476331720802