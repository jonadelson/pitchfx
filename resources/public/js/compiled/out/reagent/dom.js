// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__5741__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_7454 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_7454){
return (function (){
var _STAR_always_update_STAR_7455 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7455;
}});})(_STAR_always_update_STAR_7454))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7454;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args7456 = [];
var len__6816__auto___7459 = arguments.length;
var i__6817__auto___7460 = (0);
while(true){
if((i__6817__auto___7460 < len__6816__auto___7459)){
args7456.push((arguments[i__6817__auto___7460]));

var G__7461 = (i__6817__auto___7460 + (1));
i__6817__auto___7460 = G__7461;
continue;
} else {
}
break;
}

var G__7458 = args7456.length;
switch (G__7458) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7456.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__7467_7471 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__7468_7472 = null;
var count__7469_7473 = (0);
var i__7470_7474 = (0);
while(true){
if((i__7470_7474 < count__7469_7473)){
var v_7475 = cljs.core._nth.call(null,chunk__7468_7472,i__7470_7474);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7475);

var G__7476 = seq__7467_7471;
var G__7477 = chunk__7468_7472;
var G__7478 = count__7469_7473;
var G__7479 = (i__7470_7474 + (1));
seq__7467_7471 = G__7476;
chunk__7468_7472 = G__7477;
count__7469_7473 = G__7478;
i__7470_7474 = G__7479;
continue;
} else {
var temp__4657__auto___7480 = cljs.core.seq.call(null,seq__7467_7471);
if(temp__4657__auto___7480){
var seq__7467_7481__$1 = temp__4657__auto___7480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7467_7481__$1)){
var c__6552__auto___7482 = cljs.core.chunk_first.call(null,seq__7467_7481__$1);
var G__7483 = cljs.core.chunk_rest.call(null,seq__7467_7481__$1);
var G__7484 = c__6552__auto___7482;
var G__7485 = cljs.core.count.call(null,c__6552__auto___7482);
var G__7486 = (0);
seq__7467_7471 = G__7483;
chunk__7468_7472 = G__7484;
count__7469_7473 = G__7485;
i__7470_7474 = G__7486;
continue;
} else {
var v_7487 = cljs.core.first.call(null,seq__7467_7481__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7487);

var G__7488 = cljs.core.next.call(null,seq__7467_7481__$1);
var G__7489 = null;
var G__7490 = (0);
var G__7491 = (0);
seq__7467_7471 = G__7488;
chunk__7468_7472 = G__7489;
count__7469_7473 = G__7490;
i__7470_7474 = G__7491;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1476331706024