// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__6404__auto__ = (((value == null))?null:value);
var m__6405__auto__ = (devtools.format._header[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,value);
} else {
var m__6405__auto____$1 = (devtools.format._header["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__6404__auto__ = (((value == null))?null:value);
var m__6405__auto__ = (devtools.format._has_body[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,value);
} else {
var m__6405__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__6404__auto__ = (((value == null))?null:value);
var m__6405__auto__ = (devtools.format._body[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,value);
} else {
var m__6405__auto____$1 = (devtools.format._body["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__7605__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__7605__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__7605__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__7605__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__7604__auto__ = temp__4657__auto____$2;
return goog.object.get(o__7604__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__7605__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__7605__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__7605__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__7605__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__7604__auto__ = temp__4657__auto____$2;
return goog.object.get(o__7604__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__7605__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__7605__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__7605__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__7605__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__7604__auto__ = temp__4657__auto____$2;
return goog.object.get(o__7604__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__7605__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__7605__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__7605__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__7605__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__7604__auto__ = temp__4657__auto____$2;
return goog.object.get(o__7604__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__7605__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__7605__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__7605__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__7605__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__7604__auto__ = temp__4657__auto____$2;
return goog.object.get(o__7604__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__7605__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__7605__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__7605__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__7605__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__7604__auto__ = temp__4657__auto____$2;
return goog.object.get(o__7604__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__7605__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__7605__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__7605__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__7605__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__7604__auto__ = temp__4657__auto____$2;
return goog.object.get(o__7604__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7626 = arguments.length;
var i__6817__auto___7627 = (0);
while(true){
if((i__6817__auto___7627 < len__6816__auto___7626)){
args__6823__auto__.push((arguments[i__6817__auto___7627]));

var G__7628 = (i__6817__auto___7627 + (1));
i__6817__auto___7627 = G__7628;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq7625){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7625));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7630 = arguments.length;
var i__6817__auto___7631 = (0);
while(true){
if((i__6817__auto___7631 < len__6816__auto___7630)){
args__6823__auto__.push((arguments[i__6817__auto___7631]));

var G__7632 = (i__6817__auto___7631 + (1));
i__6817__auto___7631 = G__7632;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq7629){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7629));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7634 = arguments.length;
var i__6817__auto___7635 = (0);
while(true){
if((i__6817__auto___7635 < len__6816__auto___7634)){
args__6823__auto__.push((arguments[i__6817__auto___7635]));

var G__7636 = (i__6817__auto___7635 + (1));
i__6817__auto___7635 = G__7636;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq7633){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7633));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7638 = arguments.length;
var i__6817__auto___7639 = (0);
while(true){
if((i__6817__auto___7639 < len__6816__auto___7638)){
args__6823__auto__.push((arguments[i__6817__auto___7639]));

var G__7640 = (i__6817__auto___7639 + (1));
i__6817__auto___7639 = G__7640;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq7637){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7637));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7642 = arguments.length;
var i__6817__auto___7643 = (0);
while(true){
if((i__6817__auto___7643 < len__6816__auto___7642)){
args__6823__auto__.push((arguments[i__6817__auto___7643]));

var G__7644 = (i__6817__auto___7643 + (1));
i__6817__auto___7643 = G__7644;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq7641){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7641));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7646 = arguments.length;
var i__6817__auto___7647 = (0);
while(true){
if((i__6817__auto___7647 < len__6816__auto___7646)){
args__6823__auto__.push((arguments[i__6817__auto___7647]));

var G__7648 = (i__6817__auto___7647 + (1));
i__6817__auto___7647 = G__7648;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq7645){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7645));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7650 = arguments.length;
var i__6817__auto___7651 = (0);
while(true){
if((i__6817__auto___7651 < len__6816__auto___7650)){
args__6823__auto__.push((arguments[i__6817__auto___7651]));

var G__7652 = (i__6817__auto___7651 + (1));
i__6817__auto___7651 = G__7652;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq7649){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7649));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7660 = arguments.length;
var i__6817__auto___7661 = (0);
while(true){
if((i__6817__auto___7661 < len__6816__auto___7660)){
args__6823__auto__.push((arguments[i__6817__auto___7661]));

var G__7662 = (i__6817__auto___7661 + (1));
i__6817__auto___7661 = G__7662;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__7656){
var vec__7657 = p__7656;
var state_override = cljs.core.nth.call(null,vec__7657,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__7657,state_override){
return (function (p1__7653_SHARP_){
return cljs.core.merge.call(null,p1__7653_SHARP_,state_override);
});})(vec__7657,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq7654){
var G__7655 = cljs.core.first.call(null,seq7654);
var seq7654__$1 = cljs.core.next.call(null,seq7654);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__7655,seq7654__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7664 = arguments.length;
var i__6817__auto___7665 = (0);
while(true){
if((i__6817__auto___7665 < len__6816__auto___7664)){
args__6823__auto__.push((arguments[i__6817__auto___7665]));

var G__7666 = (i__6817__auto___7665 + (1));
i__6817__auto___7665 = G__7666;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq7663){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7663));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__6823__auto__ = [];
var len__6816__auto___7669 = arguments.length;
var i__6817__auto___7670 = (0);
while(true){
if((i__6817__auto___7670 < len__6816__auto___7669)){
args__6823__auto__.push((arguments[i__6817__auto___7670]));

var G__7671 = (i__6817__auto___7670 + (1));
i__6817__auto___7670 = G__7671;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq7667){
var G__7668 = cljs.core.first.call(null,seq7667);
var seq7667__$1 = cljs.core.next.call(null,seq7667);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__7668,seq7667__$1);
});


//# sourceMappingURL=format.js.map?rel=1476331706596