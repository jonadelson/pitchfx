// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__6988__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6989__i = 0, G__6989__a = new Array(arguments.length -  0);
while (G__6989__i < G__6989__a.length) {G__6989__a[G__6989__i] = arguments[G__6989__i + 0]; ++G__6989__i;}
  args = new cljs.core.IndexedSeq(G__6989__a,0);
} 
return G__6988__delegate.call(this,args);};
G__6988.cljs$lang$maxFixedArity = 0;
G__6988.cljs$lang$applyTo = (function (arglist__6990){
var args = cljs.core.seq(arglist__6990);
return G__6988__delegate(args);
});
G__6988.cljs$core$IFn$_invoke$arity$variadic = G__6988__delegate;
return G__6988;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6991__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6992__i = 0, G__6992__a = new Array(arguments.length -  0);
while (G__6992__i < G__6992__a.length) {G__6992__a[G__6992__i] = arguments[G__6992__i + 0]; ++G__6992__i;}
  args = new cljs.core.IndexedSeq(G__6992__a,0);
} 
return G__6991__delegate.call(this,args);};
G__6991.cljs$lang$maxFixedArity = 0;
G__6991.cljs$lang$applyTo = (function (arglist__6993){
var args = cljs.core.seq(arglist__6993);
return G__6991__delegate(args);
});
G__6991.cljs$core$IFn$_invoke$arity$variadic = G__6991__delegate;
return G__6991;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1476331703218