// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__10657_10661 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__10658_10662 = null;
var count__10659_10663 = (0);
var i__10660_10664 = (0);
while(true){
if((i__10660_10664 < count__10659_10663)){
var k_10665 = cljs.core._nth.call(null,chunk__10658_10662,i__10660_10664);
var v_10666 = (b[k_10665]);
(a[k_10665] = v_10666);

var G__10667 = seq__10657_10661;
var G__10668 = chunk__10658_10662;
var G__10669 = count__10659_10663;
var G__10670 = (i__10660_10664 + (1));
seq__10657_10661 = G__10667;
chunk__10658_10662 = G__10668;
count__10659_10663 = G__10669;
i__10660_10664 = G__10670;
continue;
} else {
var temp__4657__auto___10671 = cljs.core.seq.call(null,seq__10657_10661);
if(temp__4657__auto___10671){
var seq__10657_10672__$1 = temp__4657__auto___10671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10657_10672__$1)){
var c__6552__auto___10673 = cljs.core.chunk_first.call(null,seq__10657_10672__$1);
var G__10674 = cljs.core.chunk_rest.call(null,seq__10657_10672__$1);
var G__10675 = c__6552__auto___10673;
var G__10676 = cljs.core.count.call(null,c__6552__auto___10673);
var G__10677 = (0);
seq__10657_10661 = G__10674;
chunk__10658_10662 = G__10675;
count__10659_10663 = G__10676;
i__10660_10664 = G__10677;
continue;
} else {
var k_10678 = cljs.core.first.call(null,seq__10657_10672__$1);
var v_10679 = (b[k_10678]);
(a[k_10678] = v_10679);

var G__10680 = cljs.core.next.call(null,seq__10657_10672__$1);
var G__10681 = null;
var G__10682 = (0);
var G__10683 = (0);
seq__10657_10661 = G__10680;
chunk__10658_10662 = G__10681;
count__10659_10663 = G__10682;
i__10660_10664 = G__10683;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args10684 = [];
var len__6816__auto___10687 = arguments.length;
var i__6817__auto___10688 = (0);
while(true){
if((i__6817__auto___10688 < len__6816__auto___10687)){
args10684.push((arguments[i__6817__auto___10688]));

var G__10689 = (i__6817__auto___10688 + (1));
i__6817__auto___10688 = G__10689;
continue;
} else {
}
break;
}

var G__10686 = args10684.length;
switch (G__10686) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10684.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__10691 = (i + (2));
var G__10692 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__10691;
ret = G__10692;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10693_10697 = cljs.core.seq.call(null,v);
var chunk__10694_10698 = null;
var count__10695_10699 = (0);
var i__10696_10700 = (0);
while(true){
if((i__10696_10700 < count__10695_10699)){
var x_10701 = cljs.core._nth.call(null,chunk__10694_10698,i__10696_10700);
ret.push(x_10701);

var G__10702 = seq__10693_10697;
var G__10703 = chunk__10694_10698;
var G__10704 = count__10695_10699;
var G__10705 = (i__10696_10700 + (1));
seq__10693_10697 = G__10702;
chunk__10694_10698 = G__10703;
count__10695_10699 = G__10704;
i__10696_10700 = G__10705;
continue;
} else {
var temp__4657__auto___10706 = cljs.core.seq.call(null,seq__10693_10697);
if(temp__4657__auto___10706){
var seq__10693_10707__$1 = temp__4657__auto___10706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10693_10707__$1)){
var c__6552__auto___10708 = cljs.core.chunk_first.call(null,seq__10693_10707__$1);
var G__10709 = cljs.core.chunk_rest.call(null,seq__10693_10707__$1);
var G__10710 = c__6552__auto___10708;
var G__10711 = cljs.core.count.call(null,c__6552__auto___10708);
var G__10712 = (0);
seq__10693_10697 = G__10709;
chunk__10694_10698 = G__10710;
count__10695_10699 = G__10711;
i__10696_10700 = G__10712;
continue;
} else {
var x_10713 = cljs.core.first.call(null,seq__10693_10707__$1);
ret.push(x_10713);

var G__10714 = cljs.core.next.call(null,seq__10693_10707__$1);
var G__10715 = null;
var G__10716 = (0);
var G__10717 = (0);
seq__10693_10697 = G__10714;
chunk__10694_10698 = G__10715;
count__10695_10699 = G__10716;
i__10696_10700 = G__10717;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10718_10722 = cljs.core.seq.call(null,v);
var chunk__10719_10723 = null;
var count__10720_10724 = (0);
var i__10721_10725 = (0);
while(true){
if((i__10721_10725 < count__10720_10724)){
var x_10726 = cljs.core._nth.call(null,chunk__10719_10723,i__10721_10725);
ret.push(x_10726);

var G__10727 = seq__10718_10722;
var G__10728 = chunk__10719_10723;
var G__10729 = count__10720_10724;
var G__10730 = (i__10721_10725 + (1));
seq__10718_10722 = G__10727;
chunk__10719_10723 = G__10728;
count__10720_10724 = G__10729;
i__10721_10725 = G__10730;
continue;
} else {
var temp__4657__auto___10731 = cljs.core.seq.call(null,seq__10718_10722);
if(temp__4657__auto___10731){
var seq__10718_10732__$1 = temp__4657__auto___10731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10718_10732__$1)){
var c__6552__auto___10733 = cljs.core.chunk_first.call(null,seq__10718_10732__$1);
var G__10734 = cljs.core.chunk_rest.call(null,seq__10718_10732__$1);
var G__10735 = c__6552__auto___10733;
var G__10736 = cljs.core.count.call(null,c__6552__auto___10733);
var G__10737 = (0);
seq__10718_10722 = G__10734;
chunk__10719_10723 = G__10735;
count__10720_10724 = G__10736;
i__10721_10725 = G__10737;
continue;
} else {
var x_10738 = cljs.core.first.call(null,seq__10718_10732__$1);
ret.push(x_10738);

var G__10739 = cljs.core.next.call(null,seq__10718_10732__$1);
var G__10740 = null;
var G__10741 = (0);
var G__10742 = (0);
seq__10718_10722 = G__10739;
chunk__10719_10723 = G__10740;
count__10720_10724 = G__10741;
i__10721_10725 = G__10742;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10743_10747 = cljs.core.seq.call(null,v);
var chunk__10744_10748 = null;
var count__10745_10749 = (0);
var i__10746_10750 = (0);
while(true){
if((i__10746_10750 < count__10745_10749)){
var x_10751 = cljs.core._nth.call(null,chunk__10744_10748,i__10746_10750);
ret.push(x_10751);

var G__10752 = seq__10743_10747;
var G__10753 = chunk__10744_10748;
var G__10754 = count__10745_10749;
var G__10755 = (i__10746_10750 + (1));
seq__10743_10747 = G__10752;
chunk__10744_10748 = G__10753;
count__10745_10749 = G__10754;
i__10746_10750 = G__10755;
continue;
} else {
var temp__4657__auto___10756 = cljs.core.seq.call(null,seq__10743_10747);
if(temp__4657__auto___10756){
var seq__10743_10757__$1 = temp__4657__auto___10756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10743_10757__$1)){
var c__6552__auto___10758 = cljs.core.chunk_first.call(null,seq__10743_10757__$1);
var G__10759 = cljs.core.chunk_rest.call(null,seq__10743_10757__$1);
var G__10760 = c__6552__auto___10758;
var G__10761 = cljs.core.count.call(null,c__6552__auto___10758);
var G__10762 = (0);
seq__10743_10747 = G__10759;
chunk__10744_10748 = G__10760;
count__10745_10749 = G__10761;
i__10746_10750 = G__10762;
continue;
} else {
var x_10763 = cljs.core.first.call(null,seq__10743_10757__$1);
ret.push(x_10763);

var G__10764 = cljs.core.next.call(null,seq__10743_10757__$1);
var G__10765 = null;
var G__10766 = (0);
var G__10767 = (0);
seq__10743_10747 = G__10764;
chunk__10744_10748 = G__10765;
count__10745_10749 = G__10766;
i__10746_10750 = G__10767;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args10768 = [];
var len__6816__auto___10783 = arguments.length;
var i__6817__auto___10784 = (0);
while(true){
if((i__6817__auto___10784 < len__6816__auto___10783)){
args10768.push((arguments[i__6817__auto___10784]));

var G__10785 = (i__6817__auto___10784 + (1));
i__6817__auto___10784 = G__10785;
continue;
} else {
}
break;
}

var G__10770 = args10768.length;
switch (G__10770) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10768.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__10771 = obj;
G__10771.push(kfn.call(null,k),vfn.call(null,v));

return G__10771;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x10772 = cljs.core.clone.call(null,handlers);
x10772.forEach = ((function (x10772,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__10773 = cljs.core.seq.call(null,coll);
var chunk__10774 = null;
var count__10775 = (0);
var i__10776 = (0);
while(true){
if((i__10776 < count__10775)){
var vec__10777 = cljs.core._nth.call(null,chunk__10774,i__10776);
var k = cljs.core.nth.call(null,vec__10777,(0),null);
var v = cljs.core.nth.call(null,vec__10777,(1),null);
f.call(null,v,k);

var G__10787 = seq__10773;
var G__10788 = chunk__10774;
var G__10789 = count__10775;
var G__10790 = (i__10776 + (1));
seq__10773 = G__10787;
chunk__10774 = G__10788;
count__10775 = G__10789;
i__10776 = G__10790;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10773);
if(temp__4657__auto__){
var seq__10773__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10773__$1)){
var c__6552__auto__ = cljs.core.chunk_first.call(null,seq__10773__$1);
var G__10791 = cljs.core.chunk_rest.call(null,seq__10773__$1);
var G__10792 = c__6552__auto__;
var G__10793 = cljs.core.count.call(null,c__6552__auto__);
var G__10794 = (0);
seq__10773 = G__10791;
chunk__10774 = G__10792;
count__10775 = G__10793;
i__10776 = G__10794;
continue;
} else {
var vec__10780 = cljs.core.first.call(null,seq__10773__$1);
var k = cljs.core.nth.call(null,vec__10780,(0),null);
var v = cljs.core.nth.call(null,vec__10780,(1),null);
f.call(null,v,k);

var G__10795 = cljs.core.next.call(null,seq__10773__$1);
var G__10796 = null;
var G__10797 = (0);
var G__10798 = (0);
seq__10773 = G__10795;
chunk__10774 = G__10796;
count__10775 = G__10797;
i__10776 = G__10798;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10772,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x10772;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args10799 = [];
var len__6816__auto___10805 = arguments.length;
var i__6817__auto___10806 = (0);
while(true){
if((i__6817__auto___10806 < len__6816__auto___10805)){
args10799.push((arguments[i__6817__auto___10806]));

var G__10807 = (i__6817__auto___10806 + (1));
i__6817__auto___10806 = G__10807;
continue;
} else {
}
break;
}

var G__10801 = args10799.length;
switch (G__10801) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10799.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit10802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit10802 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta10803){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta10803 = meta10803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit10802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10804,meta10803__$1){
var self__ = this;
var _10804__$1 = this;
return (new cognitect.transit.t_cognitect$transit10802(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta10803__$1));
});

cognitect.transit.t_cognitect$transit10802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10804){
var self__ = this;
var _10804__$1 = this;
return self__.meta10803;
});

cognitect.transit.t_cognitect$transit10802.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10802.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10802.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10802.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta10803","meta10803",78250054,null)], null);
});

cognitect.transit.t_cognitect$transit10802.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit10802.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit10802";

cognitect.transit.t_cognitect$transit10802.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cognitect.transit/t_cognitect$transit10802");
});

cognitect.transit.__GT_t_cognitect$transit10802 = (function cognitect$transit$__GT_t_cognitect$transit10802(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10803){
return (new cognitect.transit.t_cognitect$transit10802(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10803));
});

}

return (new cognitect.transit.t_cognitect$transit10802(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__5741__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1476331714215