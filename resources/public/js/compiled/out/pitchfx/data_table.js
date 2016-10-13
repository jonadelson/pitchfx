// Compiled by ClojureScript 1.9.229 {}
goog.provide('pitchfx.data_table');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljsjs.fixed_data_table');
pitchfx.data_table.Table = reagent.core.adapt_react_class.call(null,FixedDataTable.Table);
pitchfx.data_table.Column = reagent.core.adapt_react_class.call(null,FixedDataTable.Column);
pitchfx.data_table.Cell = reagent.core.adapt_react_class.call(null,FixedDataTable.Cell);
pitchfx.data_table.col_kws = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"season","season",851675697),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"tbf","tbf",-1077045770),new cljs.core.Keyword(null,"war","war",1114150282),new cljs.core.Keyword(null,"fip","fip",1697607107),new cljs.core.Keyword(null,"k9","k9",-2088035575),new cljs.core.Keyword(null,"bb9","bb9",-1917007572),new cljs.core.Keyword(null,"hr9","hr9",1307170064),new cljs.core.Keyword(null,"hr_fb","hr_fb",-1897421540),new cljs.core.Keyword(null,"gb_pct","gb_pct",-1666190637),new cljs.core.Keyword(null,"fb_pct","fb_pct",-690252127)], null);
pitchfx.data_table.col_strs = cljs.core.map.call(null,cljs.core.name,pitchfx.data_table.col_kws);
pitchfx.data_table.col_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name","Season","Team","TBF","WAR","FIP","K/9","BB/9","HR/9","HR/FB","GB %","FB %"], null);
pitchfx.data_table.col_specs = cljs.core.mapv.call(null,(function (p1__17831_SHARP_,p2__17832_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__17831_SHARP_,p2__17832_SHARP_],null));
}),pitchfx.data_table.col_strs,pitchfx.data_table.col_names);
pitchfx.data_table.data_grid = (function pitchfx$data_table$data_grid(){
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered","filtered",-437499761)], null));
var pitcher_chosen_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046)], null));
var chosen_pitcher = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873)], null));
var window_dims = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-dims","window-dims",1026323105)], null));
return ((function (data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,data))){
var data__$1 = cljs.core.mapv.call(null,((function (data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims){
return (function (p1__17833_SHARP_){
return cljs.core.zipmap.call(null,pitchfx.data_table.col_strs,cljs.core.apply.call(null,cljs.core.juxt,pitchfx.data_table.col_kws).call(null,p1__17833_SHARP_));
});})(data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims))
,cljs.core.deref.call(null,data));
var vec__17855 = cljs.core.deref.call(null,window_dims);
var w = cljs.core.nth.call(null,vec__17855,(0),null);
var h = cljs.core.nth.call(null,vec__17855,(1),null);
var width = (w - (400));
var height = (0.9 * h);
var make_cell = ((function (data__$1,vec__17855,w,h,width,height,data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims){
return (function (args){
var map__17858 = cljs.core.js__GT_clj.call(null,args);
var map__17858__$1 = ((((!((map__17858 == null)))?((((map__17858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17858):map__17858);
var columnKey = cljs.core.get.call(null,map__17858__$1,"columnKey");
var rowIndex = cljs.core.get.call(null,map__17858__$1,"rowIndex");
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.data_table.Cell,cljs.core.get_in.call(null,data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rowIndex,columnKey], null))], null));
});})(data__$1,vec__17855,w,h,width,height,data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.data_table.Table,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244),(50),new cljs.core.Keyword(null,"rowsCount","rowsCount",1296562463),cljs.core.count.call(null,data__$1),new cljs.core.Keyword(null,"headerHeight","headerHeight",402252973),(50),new cljs.core.Keyword(null,"onRowClick","onRowClick",-1313028393),((function (data__$1,vec__17855,w,h,width,height,make_cell,data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims){
return (function (){
return cljs.core.println.call(null,"clicked");
});})(data__$1,vec__17855,w,h,width,height,make_cell,data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims))
], null),(function (){var iter__6521__auto__ = ((function (data__$1,vec__17855,w,h,width,height,make_cell,data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims){
return (function pitchfx$data_table$data_grid_$_iter__17860(s__17861){
return (new cljs.core.LazySeq(null,((function (data__$1,vec__17855,w,h,width,height,make_cell,data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims){
return (function (){
var s__17861__$1 = s__17861;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17861__$1);
if(temp__4657__auto__){
var s__17861__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17861__$2)){
var c__6519__auto__ = cljs.core.chunk_first.call(null,s__17861__$2);
var size__6520__auto__ = cljs.core.count.call(null,c__6519__auto__);
var b__17863 = cljs.core.chunk_buffer.call(null,size__6520__auto__);
if((function (){var i__17862 = (0);
while(true){
if((i__17862 < size__6520__auto__)){
var vec__17870 = cljs.core._nth.call(null,c__6519__auto__,i__17862);
var k = cljs.core.nth.call(null,vec__17870,(0),null);
var n = cljs.core.nth.call(null,vec__17870,(1),null);
cljs.core.chunk_append.call(null,b__17863,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.data_table.Column,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",119441134),n,new cljs.core.Keyword(null,"cell","cell",764245084),make_cell,new cljs.core.Keyword(null,"columnKey","columnKey",-249078693),k,new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17876 = (i__17862 + (1));
i__17862 = G__17876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17863),pitchfx$data_table$data_grid_$_iter__17860.call(null,cljs.core.chunk_rest.call(null,s__17861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17863),null);
}
} else {
var vec__17873 = cljs.core.first.call(null,s__17861__$2);
var k = cljs.core.nth.call(null,vec__17873,(0),null);
var n = cljs.core.nth.call(null,vec__17873,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.data_table.Column,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",119441134),n,new cljs.core.Keyword(null,"cell","cell",764245084),make_cell,new cljs.core.Keyword(null,"columnKey","columnKey",-249078693),k,new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),pitchfx$data_table$data_grid_$_iter__17860.call(null,cljs.core.rest.call(null,s__17861__$2)));
}
} else {
return null;
}
break;
}
});})(data__$1,vec__17855,w,h,width,height,make_cell,data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims))
,null,null));
});})(data__$1,vec__17855,w,h,width,height,make_cell,data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims))
;
return iter__6521__auto__.call(null,pitchfx.data_table.col_specs);
})()], null)], null);
} else {
return null;
}
});
;})(data,pitcher_chosen_QMARK_,chosen_pitcher,window_dims))
});

//# sourceMappingURL=data_table.js.map?rel=1476331731788