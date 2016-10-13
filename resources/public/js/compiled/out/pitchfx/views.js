// Compiled by ClojureScript 1.9.229 {}
goog.provide('pitchfx.views');
goog.require('cljs.core');
goog.require('re_com.tabs');
goog.require('re_com.core');
goog.require('pitchfx.charts');
goog.require('re_com.text');
goog.require('re_com.box');
goog.require('re_com.dropdown');
goog.require('re_com.typeahead');
goog.require('pitchfx.data_table');
goog.require('clojure.string');
goog.require('re_com.misc');
goog.require('re_frame.core');
pitchfx.views.autocomplete = (function pitchfx$views$autocomplete(){
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113)], null));
var cluster_choice = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104)], null));
var filter_pitchers_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pitchers?","filter-pitchers?",-1661908086)], null));
var chosen_pitcher = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873)], null));
var pitcher_sugg = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pitcher-sugg","pitcher-sugg",-1462016315)], null));
var id__GT_name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->name","id->name",249122446)], null));
return ((function (data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,data))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.checkbox,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,filter_pitchers_QMARK_),new cljs.core.Keyword(null,"label","label",1718410804),"Enable Pitcher Filtering",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-filter-pitchers","set-filter-pitchers",465985811),cljs.core.not.call(null,cljs.core.deref.call(null,filter_pitchers_QMARK_))], null));
});})(data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.typeahead.typeahead,new cljs.core.Keyword(null,"data-source","data-source",-658934676),((function (data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (str){
return cljs.core.take.call(null,(10),cljs.core.filter.call(null,((function (data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (d){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)),clojure.string.lower_case.call(null,str));
});})(data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
,cljs.core.map.call(null,((function (data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (p1__17879_SHARP_){
return cljs.core.select_keys.call(null,p1__17879_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mlb_id","mlb_id",185401033),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"year","year",335913393)], null));
});})(data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
,cljs.core.deref.call(null,data))));
});})(data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),((function (data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str(")")].join('')], null);
});})(data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),((function (data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (d){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d))].join('');
});})(data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"width","width",-384071477),"250px",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not.call(null,cljs.core.deref.call(null,filter_pitchers_QMARK_)),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mlb_id","mlb_id",185401033),(12345),new cljs.core.Keyword(null,"name","name",1843675177),"Filter by Pitcher ...",new cljs.core.Keyword(null,"year","year",335913393),(1234)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (p1__17880_SHARP_){
var pitcher = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mlb_id","mlb_id",185401033).cljs$core$IFn$_invoke$arity$1(p1__17880_SHARP_),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__17880_SHARP_)], null);
var kw = cljs.core.keyword.call(null,[cljs.core.str("c"),cljs.core.str(cljs.core.deref.call(null,cluster_choice))].join(''));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-pitcher","change-pitcher",753261798),pitcher], null));

if(cljs.core.truth_((function (){var and__5729__auto__ = cljs.core.deref.call(null,cluster_choice);
if(cljs.core.truth_(and__5729__auto__)){
return cljs.core.deref.call(null,filter_pitchers_QMARK_);
} else {
return and__5729__auto__;
}
})())){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chosen-group","set-chosen-group",956629297),(kw.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (pitcher,kw,data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name){
return (function (d){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mlb_id","mlb_id",185401033).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(d)], null),pitcher);
});})(pitcher,kw,data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
,cljs.core.deref.call(null,data)))) + (1))], null));
} else {
return null;
}
});})(data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
], null)], null)], null);
} else {
return null;
}
});
;})(data,cluster_choice,filter_pitchers_QMARK_,chosen_pitcher,pitcher_sugg,id__GT_name))
});
pitchfx.views.view_tabs = (function pitchfx$views$view_tabs(){
var view = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null));
return ((function (view){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.tabs.horizontal_pill_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"label","label",1718410804),"data"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"graphs","graphs",-1584479112),new cljs.core.Keyword(null,"label","label",1718410804),"graphs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pitches","pitches",-2052174929),new cljs.core.Keyword(null,"label","label",1718410804),"pitches"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,view),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (view){
return (function (p1__17881_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),p1__17881_SHARP_], null));
});})(view))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(((250) / (3))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null);
});
;})(view))
});
pitchfx.views.cluster_labels = (function pitchfx$views$cluster_labels(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"125px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"# of Clusters"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"125px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Group Number"], null)], null)], null)], null);
});
pitchfx.views.clusters = (function pitchfx$views$clusters(){
var chosen_group = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927)], null));
var cluster_choice = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104)], null));
var cluster_choices = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster-choices","cluster-choices",703806104)], null));
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113)], null));
var chosen_pitcher = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873)], null));
var pitcher_chosen_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046)], null));
return ((function (chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.cluster_labels], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.deref.call(null,cluster_choices),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,cluster_choice),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Choose Number of Clusters",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function (p1__17882_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-cluster-choice","set-cluster-choice",1424755059),p1__17882_SHARP_], null));

var kw = cljs.core.keyword.call(null,[cljs.core.str("c"),cljs.core.str(p1__17882_SHARP_)].join(''));
if(cljs.core.truth_(cljs.core.deref.call(null,pitcher_chosen_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chosen-group","set-chosen-group",956629297),(kw.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (kw,chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function (d){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mlb_id","mlb_id",185401033).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(d)], null),cljs.core.deref.call(null,chosen_pitcher));
});})(kw,chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
,cljs.core.deref.call(null,data)))) + (1))], null));
} else {
return null;
}
});})(chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
,new cljs.core.Keyword(null,"width","width",-384071477),"125px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__6521__auto__ = ((function (chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function pitchfx$views$clusters_$_iter__17888(s__17889){
return (new cljs.core.LazySeq(null,((function (chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function (){
var s__17889__$1 = s__17889;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17889__$1);
if(temp__4657__auto__){
var s__17889__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17889__$2)){
var c__6519__auto__ = cljs.core.chunk_first.call(null,s__17889__$2);
var size__6520__auto__ = cljs.core.count.call(null,c__6519__auto__);
var b__17891 = cljs.core.chunk_buffer.call(null,size__6520__auto__);
if((function (){var i__17890 = (0);
while(true){
if((i__17890 < size__6520__auto__)){
var i = cljs.core._nth.call(null,c__6519__auto__,i__17890);
cljs.core.chunk_append.call(null,b__17891,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(i)].join('')], null));

var G__17892 = (i__17890 + (1));
i__17890 = G__17892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17891),pitchfx$views$clusters_$_iter__17888.call(null,cljs.core.chunk_rest.call(null,s__17889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17891),null);
}
} else {
var i = cljs.core.first.call(null,s__17889__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(i)].join('')], null),pitchfx$views$clusters_$_iter__17888.call(null,cljs.core.rest.call(null,s__17889__$2)));
}
} else {
return null;
}
break;
}
});})(chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
,null,null));
});})(chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
;
return iter__6521__auto__.call(null,cljs.core.range.call(null,(1),(cljs.core.deref.call(null,cluster_choice) + (1))));
})()),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,chosen_group),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Pick Cluster Number",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function (p1__17883_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chosen-group","set-chosen-group",956629297),p1__17883_SHARP_], null));
});})(chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
,new cljs.core.Keyword(null,"width","width",-384071477),"125px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Previous Group",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function (){
if((cljs.core.deref.call(null,chosen_group) > (1))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-chosen-group","dec-chosen-group",1675426850),cljs.core.deref.call(null,chosen_group)], null));
} else {
return null;
}
});})(chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"125px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Next Group",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function (){
if((cljs.core.deref.call(null,chosen_group) < cljs.core.deref.call(null,cluster_choice))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-chosen-group","inc-chosen-group",1549930790),cljs.core.deref.call(null,chosen_group)], null));
} else {
return null;
}
});})(chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"125px"], null)], null)], null)], null)], null)], null)], null);
});
;})(chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
});
pitchfx.views.side_panel = (function pitchfx$views$side_panel(){
var chosen_group = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927)], null));
var cluster_choice = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104)], null));
var cluster_choices = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster-choices","cluster-choices",703806104)], null));
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113)], null));
var chosen_pitcher = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873)], null));
var pitcher_chosen_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046)], null));
return ((function (chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.view_tabs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.clusters], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.autocomplete], null)], null)], null)], null);
} else {
return null;
}
});
;})(chosen_group,cluster_choice,cluster_choices,data,chosen_pitcher,pitcher_chosen_QMARK_))
});
pitchfx.views.stats = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbf","tbf",-1077045770),new cljs.core.Keyword(null,"k9","k9",-2088035575),new cljs.core.Keyword(null,"bb9","bb9",-1917007572),new cljs.core.Keyword(null,"hr9","hr9",1307170064),new cljs.core.Keyword(null,"hr_fb","hr_fb",-1897421540),new cljs.core.Keyword(null,"gb_pct","gb_pct",-1666190637),new cljs.core.Keyword(null,"fb_pct","fb_pct",-690252127),new cljs.core.Keyword(null,"fip","fip",1697607107),new cljs.core.Keyword(null,"war","war",1114150282)], null);
pitchfx.views.titles = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total Batters Faced","Strikeouts Per 9","Walks Per 9","Homeruns per 9","Homeruns per Flyball","Groundball Percent","Flyball Percent","FIP","Fangraphs WAR"], null);
pitchfx.views.tabs = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TBF","K/9","BB/9","HR/9","HR/FB","GB %","FB %","FIP","FWAR"], null);
pitchfx.views.stat__GT_title = cljs.core.zipmap.call(null,pitchfx.views.stats,pitchfx.views.titles);
pitchfx.views.stat__GT_domain = cljs.core.zipmap.call(null,pitchfx.views.stats,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(1100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(50)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(10)], null)], null));
pitchfx.views.stat__GT_tab = cljs.core.zipmap.call(null,pitchfx.views.stats,pitchfx.views.tabs);
pitchfx.views.chart_area = (function pitchfx$views$chart_area(data){
var chosen_stat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-stat","chosen-stat",600682629)], null));
var window_dims = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-dims","window-dims",1026323105)], null));
return ((function (chosen_stat,window_dims){
return (function (data__$1){
var vec__17901 = cljs.core.deref.call(null,window_dims);
var w = cljs.core.nth.call(null,vec__17901,(0),null);
var h = cljs.core.nth.call(null,vec__17901,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.charts.histogram,data__$1,pitchfx.views.stat__GT_title.call(null,cljs.core.deref.call(null,chosen_stat)),cljs.core.deref.call(null,chosen_stat),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(h * 0.75),new cljs.core.Keyword(null,"width","width",-384071477),(w - (600)),new cljs.core.Keyword(null,"x-lim","x-lim",-1330340299),pitchfx.views.stat__GT_domain.call(null,cljs.core.deref.call(null,chosen_stat))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.tabs.vertical_pill_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__6521__auto__ = ((function (vec__17901,w,h,chosen_stat,window_dims){
return (function pitchfx$views$chart_area_$_iter__17904(s__17905){
return (new cljs.core.LazySeq(null,((function (vec__17901,w,h,chosen_stat,window_dims){
return (function (){
var s__17905__$1 = s__17905;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17905__$1);
if(temp__4657__auto__){
var s__17905__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17905__$2)){
var c__6519__auto__ = cljs.core.chunk_first.call(null,s__17905__$2);
var size__6520__auto__ = cljs.core.count.call(null,c__6519__auto__);
var b__17907 = cljs.core.chunk_buffer.call(null,size__6520__auto__);
if((function (){var i__17906 = (0);
while(true){
if((i__17906 < size__6520__auto__)){
var stat = cljs.core._nth.call(null,c__6519__auto__,i__17906);
cljs.core.chunk_append.call(null,b__17907,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),stat,new cljs.core.Keyword(null,"label","label",1718410804),pitchfx.views.stat__GT_tab.call(null,stat)], null));

var G__17908 = (i__17906 + (1));
i__17906 = G__17908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17907),pitchfx$views$chart_area_$_iter__17904.call(null,cljs.core.chunk_rest.call(null,s__17905__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17907),null);
}
} else {
var stat = cljs.core.first.call(null,s__17905__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),stat,new cljs.core.Keyword(null,"label","label",1718410804),pitchfx.views.stat__GT_tab.call(null,stat)], null),pitchfx$views$chart_area_$_iter__17904.call(null,cljs.core.rest.call(null,s__17905__$2)));
}
} else {
return null;
}
break;
}
});})(vec__17901,w,h,chosen_stat,window_dims))
,null,null));
});})(vec__17901,w,h,chosen_stat,window_dims))
;
return iter__6521__auto__.call(null,pitchfx.views.stats);
})()),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,chosen_stat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__17901,w,h,chosen_stat,window_dims){
return (function (p1__17893_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chosen-stat","set-chosen-stat",-1401003015),p1__17893_SHARP_], null));
});})(vec__17901,w,h,chosen_stat,window_dims))
], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str((w - (400))),cljs.core.str("px")].join('')], null)], null);
});
;})(chosen_stat,window_dims))
});
pitchfx.views.cluster_count_area = (function pitchfx$views$cluster_count_area(data,class_name){
var window_dims = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-dims","window-dims",1026323105)], null));
return ((function (window_dims){
return (function (data__$1,class_name__$1){
var vec__17912 = cljs.core.deref.call(null,window_dims);
var w = cljs.core.nth.call(null,vec__17912,(0),null);
var h = cljs.core.nth.call(null,vec__17912,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.charts.cluster_counts,data__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(h * 0.8),new cljs.core.Keyword(null,"width","width",-384071477),(w - (800))], null),class_name__$1], null)], null)], null)], null);
});
;})(window_dims))
});
pitchfx.views.data_area = (function pitchfx$views$data_area(){
var view = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null));
var filtered = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered","filtered",-437499761)], null));
var pitcher_pitches = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pitcher-pitches","pitcher-pitches",-2085991631)], null));
var window_dims = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-dims","window-dims",1026323105)], null));
return ((function (view,filtered,pitcher_pitches,window_dims){
return (function (){
var pred__17918 = cljs.core._EQ_;
var expr__17919 = cljs.core.deref.call(null,view);
if(cljs.core.truth_(pred__17918.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__17919))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.data_table.data_grid], null);
} else {
if(cljs.core.truth_(pred__17918.call(null,new cljs.core.Keyword(null,"graphs","graphs",-1584479112),expr__17919))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.chart_area,filtered], null);
} else {
if(cljs.core.truth_(pred__17918.call(null,new cljs.core.Keyword(null,"pitches","pitches",-2052174929),expr__17919))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.cluster_count_area,pitcher_pitches,"chart-1"], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17919)].join('')));
}
}
}
});
;})(view,filtered,pitcher_pitches,window_dims))
});
pitchfx.views.main_panel = (function pitchfx$views$main_panel(){
var loaded_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206)], null));
return ((function (loaded_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,loaded_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.side_panel], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null),new cljs.core.Keyword(null,"width","width",-384071477),"300px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.data_area], null)], null)], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"30px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"color","color",1011675173),"steelblue"], null)], null)], null)], null);
}
});
;})(loaded_QMARK_))
});

//# sourceMappingURL=views.js.map?rel=1476331732127