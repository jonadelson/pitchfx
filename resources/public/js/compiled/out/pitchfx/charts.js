// Compiled by ClojureScript 1.9.229 {}
goog.provide('pitchfx.charts');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('re_com.text');
goog.require('re_com.box');
goog.require('goog.string.format');
goog.require('re_frame.core');
goog.require('cljsjs.d3');
pitchfx.charts.draw_histogram = (function pitchfx$charts$draw_histogram(data,stat,props){
var stat_name_year = cljs.core.map.call(null,(function (p1__17486_SHARP_){
return cljs.core.juxt.call(null,stat,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"year","year",335913393)).call(null,p1__17486_SHARP_);
}),cljs.core.deref.call(null,data));
var stat__GT_name_year = cljs.core.reduce.call(null,((function (stat_name_year){
return (function (acc,p__17492){
var vec__17493 = p__17492;
var s = cljs.core.nth.call(null,vec__17493,(0),null);
var n = cljs.core.nth.call(null,vec__17493,(1),null);
var y = cljs.core.nth.call(null,vec__17493,(2),null);
var temp__4655__auto__ = cljs.core.get.call(null,acc,s);
if(cljs.core.truth_(temp__4655__auto__)){
var ny = temp__4655__auto__;
return cljs.core.assoc.call(null,acc,s,cljs.core.conj.call(null,ny,[cljs.core.str(n),cljs.core.str(" "),cljs.core.str(y)].join('')));
} else {
return cljs.core.assoc.call(null,acc,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(n),cljs.core.str(" "),cljs.core.str(y)].join('')], null));
}
});})(stat_name_year))
,cljs.core.PersistentArrayMap.EMPTY,stat_name_year);
var data__$1 = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,stat,cljs.core.deref.call(null,data)));
var formatCount = d3.format(",.0f");
var margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"right","right",-452581833),(30),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(30),new cljs.core.Keyword(null,"left","left",-399115937),(30)], null);
var width = ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin));
var height = ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin));
var x = d3.scaleLinear().domain(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"x-lim","x-lim",-1330340299).cljs$core$IFn$_invoke$arity$1(props))).range([(0),width]);
var bins = d3.histogram().domain(x.domain()).thresholds(x.ticks((50)));
var bins__$1 = bins.call(null,data__$1);
var clj_bins = cljs.core.js__GT_clj.call(null,bins__$1);
var y = d3.scaleLinear().domain([(0),d3.max(bins__$1,((function (stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins){
return (function (d){
return d.length;
});})(stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins))
)]).range([height,(0)]);
var svg = d3.select(".chart-area").append("svg").attr("width",((width + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) + new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin))).attr("height",((height + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) + new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin))).append("g").attr("transform",[cljs.core.str("translate("),cljs.core.str(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(")")].join(''));
var tip = d3.select(".chart-area").append("div").attr("class","tooltip").style("opacity",(0));
var bar = svg.selectAll(".bar").data(bins__$1).enter().append("g").attr("class","bar").attr("transform",((function (stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip){
return (function (d){
return [cljs.core.str("translate("),cljs.core.str(x.call(null,d.x0)),cljs.core.str(","),cljs.core.str(y.call(null,d.length)),cljs.core.str(")")].join('');
});})(stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip))
);
var bar__$1 = bar.append("rect").attr("x",(1)).attr("width",((x.call(null,(bins__$1[(0)]).x1) - x.call(null,(bins__$1[(0)]).x0)) - (1))).attr("height",((function (stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip,bar){
return (function (d){
return (height - y.call(null,d.length));
});})(stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip,bar))
).on("mouseover",((function (stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip,bar){
return (function (d){
var this$ = this;
var transition = tip.transition().duration((200)).style("opacity",0.9);
var ny = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,stat__GT_name_year,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,d)));
d3.select(this$).style("fill","red");

return tip.html([cljs.core.str("<div>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (transition,ny,this$,stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip,bar){
return (function (p1__17487_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__17487_SHARP_),cljs.core.str("</div>")].join('');
});})(transition,ny,this$,stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip,bar))
,ny))),cljs.core.str("</div>")].join('')).style("left",[cljs.core.str(d3.event.pageX),cljs.core.str("px")].join('')).style("top",[cljs.core.str((d3.event.pageY - (50))),cljs.core.str("px")].join(''));
});})(stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip,bar))
).on("mouseout",((function (stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip,bar){
return (function (d){
var this$ = this;
d3.select(this$).style("fill","steelblue");

return tip.transition().duration((500)).style("opacity",(0));
});})(stat_name_year,stat__GT_name_year,data__$1,formatCount,margin,width,height,x,bins,bins__$1,clj_bins,y,svg,tip,bar))
);
var svg__$1 = svg.append("g").attr("class","axis axis--x").attr("transform",[cljs.core.str("translate(0,"),cljs.core.str(height),cljs.core.str(")")].join('')).call(d3.axisBottom(x));
var svg__$2 = svg__$1.append("g").attr("class","axis axis--y").attr("transform",[cljs.core.str("translate(0,"),cljs.core.str((- height)),cljs.core.str(")")].join('')).call(d3.axisLeft(y));
return null;
});
pitchfx.charts.cluster_cols = cljs.core.map.call(null,(function (p1__17496_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str("cluster_"),cljs.core.str(p1__17496_SHARP_)].join(''));
}),cljs.core.range.call(null,(500)));
pitchfx.charts.pitch_types = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fa","fa",484981183),new cljs.core.Keyword(null,"ff","ff",661227429),new cljs.core.Keyword(null,"ft","ft",-1338480042),new cljs.core.Keyword(null,"fc","fc",-148376321),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"si","si",793409822),new cljs.core.Keyword(null,"sl","sl",1007549161),new cljs.core.Keyword(null,"cu","cu",-2139295352),new cljs.core.Keyword(null,"kc","kc",1980951700),new cljs.core.Keyword(null,"ep","ep",1282828958),new cljs.core.Keyword(null,"fs","fs",-2122926244),new cljs.core.Keyword(null,"sc","sc",1148023032),new cljs.core.Keyword(null,"kn","kn",837886604)], null);
pitchfx.charts.pitch_names = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fastball","4-Seam Fastball","2-Seam Fastball","Cut Fastball","Change-up","Sinker","Slider","Curveball","Knuckle Curve","Ephuus","Split-finger Fastball","Screwball","Knuckleball"], null);
pitchfx.charts.pitch_type__GT_name = cljs.core.zipmap.call(null,pitchfx.charts.pitch_types,pitchfx.charts.pitch_names);
pitchfx.charts.draw_cluster_counts = (function pitchfx$charts$draw_cluster_counts(data,props,class_name){
var data__$1 = cljs.core.deref.call(null,data);
var data__$2 = cljs.core.sort_by.call(null,((function (data__$1){
return (function (p1__17498_SHARP_){
return (- new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(p1__17498_SHARP_));
});})(data__$1))
,cljs.core.filter.call(null,((function (data__$1){
return (function (p1__17497_SHARP_){
return (new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(p1__17497_SHARP_) > (0));
});})(data__$1))
,data__$1));
var margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"right","right",-452581833),(30),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(30),new cljs.core.Keyword(null,"left","left",-399115937),(70)], null);
var width = ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin));
var height = ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin));
var x = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"px","px",281329899),data__$2));
var y = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"pz","pz",-1707640674),data__$2));
var num_lines = (function (){var x__6079__auto__ = cljs.core.count.call(null,x);
var y__6080__auto__ = (20);
return ((x__6079__auto__ < y__6080__auto__) ? x__6079__auto__ : y__6080__auto__);
})();
var c20 = d3.scaleOrdinal(d3.schemeCategory10);
var colors = cljs.core.map.call(null,((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20){
return (function (p1__17499_SHARP_){
return c20.call(null,p1__17499_SHARP_);
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20))
,cljs.core.range.call(null,(20)));
var the_pitches = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"the-pitch","the-pitch",-636409284),data__$2);
var color_map = cljs.core.zipmap.call(null,pitchfx.charts.pitch_types,colors);
var pfx_x = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"pfx_x","pfx_x",-2072024315),data__$2));
var pfx_z = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"pfx_z","pfx_z",-1745059974),data__$2));
var counts = cljs.core.map.call(null,new cljs.core.Keyword(null,"count","count",2139924085),data__$2);
var sum_counts = cljs.core.apply.call(null,cljs.core._PLUS_,counts);
var count_pcts = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts){
return (function (p1__17500_SHARP_){
return (p1__17500_SHARP_ / sum_counts);
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts))
,counts));
var velos = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"start_speed","start_speed",-483274394),data__$2));
var x_value = ((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos){
return (function (i){
return (x[i]);
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos))
;
var x_scale = d3.scaleLinear().domain([-1.5,1.5]).range([(0),width]);
var x_map = ((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale){
return (function (i){
return x_scale.call(null,x_value.call(null,i));
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale))
;
var x_axis = d3.axisBottom().scale(x_scale);
var y_value = ((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis){
return (function (i){
return (y[i]);
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis))
;
var y_scale = d3.scaleLinear().domain([(1),(4)]).range([height,(0)]);
var y_map = ((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale){
return (function (i){
return y_scale.call(null,y_value.call(null,i));
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale))
;
var y_axis = d3.axisLeft().scale(y_scale);
var svg = d3.select(".chart-area").append("svg").attr("class",class_name).attr("width",((width + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) + new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin))).attr("height",((height + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) + new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin))).append("g").attr("transform",[cljs.core.str("translate("),cljs.core.str(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(")")].join(''));
var tip = d3.select(".chart-area").append("div").attr("class","tooltip").style("opacity",(0));
var svg__$1 = svg.selectAll("circle").data(d3.range(cljs.core.count.call(null,x))).enter().append("circle").attr("cx",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip){
return (function (d){
return x_map.call(null,d);
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip))
).attr("cy",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip){
return (function (d){
return y_map.call(null,d);
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip))
).attr("r",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip){
return (function (d){
return [cljs.core.str(((200) * (count_pcts[d]))),cljs.core.str("px")].join('');
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip))
).style("fill",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip){
return (function (d){
return color_map.call(null,cljs.core.get.call(null,the_pitches,d));
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip))
).on("mouseover",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip){
return (function (d){
var this$ = this;
var transition = tip.transition().duration((200)).style("opacity",0.9);
var h_move = [cljs.core.str("pfx_x: "),cljs.core.str(goog.string.format("%.2f",(pfx_x[d])))].join('');
var v_move = [cljs.core.str("pfx_z: "),cljs.core.str(goog.string.format("%.2f",(pfx_z[d])))].join('');
var p_type = [cljs.core.str("pitch: "),cljs.core.str(pitchfx.charts.pitch_type__GT_name.call(null,cljs.core.get.call(null,the_pitches,d)))].join('');
var p_speed = [cljs.core.str("speed: "),cljs.core.str(goog.string.format("%.2f",(velos[d])))].join('');
var text = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_type,p_speed,h_move,v_move], null);
return tip.html([cljs.core.str("<div>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (transition,h_move,v_move,p_type,p_speed,text,this$,data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip){
return (function (p1__17501_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__17501_SHARP_),cljs.core.str("</div>")].join('');
});})(transition,h_move,v_move,p_type,p_speed,text,this$,data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip))
,text))),cljs.core.str("</div>")].join('')).style("left",[cljs.core.str(d3.event.pageX),cljs.core.str("px")].join('')).style("top",[cljs.core.str((d3.event.pageY - (50))),cljs.core.str("px")].join(''));
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip))
).on("mouseout",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip){
return (function (d){
var this$ = this;
return tip.transition().duration((500)).style("opacity",(0));
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip))
);
var svg__$2 = d3.select([cljs.core.str("."),cljs.core.str(class_name)].join('')).append("g").attr("transform",[cljs.core.str("translate("),cljs.core.str(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(")")].join('')).selectAll("line").data(d3.range(num_lines)).enter().append("line").style("stroke",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1){
return (function (d){
if(((pfx_z[d]) > (0))){
return "green";
} else {
return "red";
}
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1))
).style("opacity",0.5).attr("x1",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1){
return (function (d){
return x_map.call(null,d);
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1))
).attr("y1",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1){
return (function (d){
return y_map.call(null,d);
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1))
).attr("x2",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1){
return (function (d){
return x_scale.call(null,(x_value.call(null,d) - ((pfx_x[d]) / (16))));
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1))
).attr("y2",((function (data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1){
return (function (d){
return y_scale.call(null,(y_value.call(null,d) - ((pfx_z[d]) / (16))));
});})(data__$1,data__$2,margin,width,height,x,y,num_lines,c20,colors,the_pitches,color_map,pfx_x,pfx_z,counts,sum_counts,count_pcts,velos,x_value,x_scale,x_map,x_axis,y_value,y_scale,y_map,y_axis,svg,tip,svg__$1))
);
var svg__$3 = d3.select([cljs.core.str("."),cljs.core.str(class_name)].join('')).append("rect").attr("x",x_scale.call(null,(- (1)))).attr("y",y_scale.call(null,3.417)).attr("width",(x_scale.call(null,(1)) - x_scale.call(null,(-1)))).attr("height",(y_scale.call(null,1.59) - y_scale.call(null,3.417))).style("fill","none").style("stroke","black").attr("transform",[cljs.core.str("translate("),cljs.core.str(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)),cljs.core.str(")")].join(''));
return null;
});
pitchfx.charts.render_histogram = (function pitchfx$charts$render_histogram(data,stat,props){
d3.select("svg").remove();

return pitchfx.charts.draw_histogram.call(null,data,stat,props);
});
pitchfx.charts.render_cluster_counts = (function pitchfx$charts$render_cluster_counts(data,props,class_name){
d3.select([cljs.core.str("."),cljs.core.str(class_name)].join('')).remove();

return pitchfx.charts.draw_cluster_counts.call(null,data,props,class_name);
});
pitchfx.charts.histogram = (function pitchfx$charts$histogram(args){
var dom_node = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (dom_node){
return (function (this$,old_argv){
var vec__17505 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__17505,(0),null);
var data = cljs.core.nth.call(null,vec__17505,(1),null);
var title = cljs.core.nth.call(null,vec__17505,(2),null);
var stat = cljs.core.nth.call(null,vec__17505,(3),null);
var props = cljs.core.nth.call(null,vec__17505,(4),null);
return pitchfx.charts.render_histogram.call(null,data,stat,props);
});})(dom_node))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (dom_node){
return (function (this$){
var node = reagent.core.dom_node.call(null,this$);
return cljs.core.reset_BANG_.call(null,dom_node,node);
});})(dom_node))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (dom_node){
return (function (data,title,stat,props,_DOT__DOT_){
cljs.core.deref.call(null,dom_node);

cljs.core.deref.call(null,data);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.title,new cljs.core.Keyword(null,"label","label",1718410804),title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-area","div.chart-area",897308598)], null)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null);
});})(dom_node))
], null));
});
pitchfx.charts.cluster_counts = (function pitchfx$charts$cluster_counts(args){
var dom_node = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (dom_node){
return (function (this$,old_argv){
var vec__17511 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__17511,(0),null);
var data = cljs.core.nth.call(null,vec__17511,(1),null);
var props = cljs.core.nth.call(null,vec__17511,(2),null);
var class_name = cljs.core.nth.call(null,vec__17511,(3),null);
return pitchfx.charts.render_cluster_counts.call(null,data,props,class_name);
});})(dom_node))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (dom_node){
return (function (this$){
var node = reagent.core.dom_node.call(null,this$);
return cljs.core.reset_BANG_.call(null,dom_node,node);
});})(dom_node))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (dom_node){
return (function (data,props,class_name,_DOT__DOT_){
cljs.core.deref.call(null,dom_node);

cljs.core.deref.call(null,data);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.title,new cljs.core.Keyword(null,"label","label",1718410804),"Cluster Counts",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-area","div.chart-area",897308598)], null)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null);
});})(dom_node))
], null));
});

//# sourceMappingURL=charts.js.map?rel=1476331730721