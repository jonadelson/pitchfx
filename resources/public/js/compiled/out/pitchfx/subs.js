// Compiled by ClojureScript 1.9.229 {}
goog.provide('pitchfx.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
pitchfx.subs.cluster_cols = cljs.core.map.call(null,(function (p1__17788_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str("cluster_"),cljs.core.str(p1__17788_SHARP_)].join(''));
}),cljs.core.range.call(null,(500)));
pitchfx.subs.pitch_types = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fa","fa",484981183),new cljs.core.Keyword(null,"ff","ff",661227429),new cljs.core.Keyword(null,"ft","ft",-1338480042),new cljs.core.Keyword(null,"fc","fc",-148376321),new cljs.core.Keyword(null,"fs","fs",-2122926244),new cljs.core.Keyword(null,"si","si",793409822),new cljs.core.Keyword(null,"sl","sl",1007549161),new cljs.core.Keyword(null,"cu","cu",-2139295352),new cljs.core.Keyword(null,"kc","kc",1980951700),new cljs.core.Keyword(null,"ep","ep",1282828958),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"sc","sc",1148023032),new cljs.core.Keyword(null,"kn","kn",837886604)], null);
pitchfx.subs.cluster_props = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start_speed","start_speed",-483274394),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pz","pz",-1707640674),new cljs.core.Keyword(null,"pfx_x","pfx_x",-2072024315),new cljs.core.Keyword(null,"pfx_z","pfx_z",-1745059974),new cljs.core.Keyword(null,"break_length","break_length",958242568)], null);
pitchfx.subs.app_data = (function pitchfx$subs$app_data(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"app-data","app-data",1586751113));
});
pitchfx.subs.chosen_group = (function pitchfx$subs$chosen_group(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927));
});
pitchfx.subs.cluster_choices = (function pitchfx$subs$cluster_choices(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cluster-choices","cluster-choices",703806104));
});
pitchfx.subs.cluster_choice = (function pitchfx$subs$cluster_choice(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104));
});
pitchfx.subs.filtered = (function pitchfx$subs$filtered(db,_){
var app_data = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"app-data","app-data",1586751113));
var cluster_choice = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104));
var group_choice = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927));
var pitcher_chosen_QMARK_ = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046));
var chosen_pitcher = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873));
if(cljs.core.truth_((function (){var and__5729__auto__ = cluster_choice;
if(cljs.core.truth_(and__5729__auto__)){
return group_choice;
} else {
return and__5729__auto__;
}
})())){
return cljs.core.filter.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher){
return (function (p1__17789_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,p1__17789_SHARP_,cljs.core.keyword.call(null,[cljs.core.str("c"),cljs.core.str(cluster_choice)].join(''))),(group_choice - (1)));
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher))
,app_data);
} else {
return null;
}
});
pitchfx.subs.view = (function pitchfx$subs$view(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"view","view",1247994814));
});
pitchfx.subs.chosen_pitcher = (function pitchfx$subs$chosen_pitcher(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873));
});
pitchfx.subs.chosen_pitcher_2 = (function pitchfx$subs$chosen_pitcher_2(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-pitcher-2","chosen-pitcher-2",1671000929));
});
pitchfx.subs.pitcher_chosen_QMARK_ = (function pitchfx$subs$pitcher_chosen_QMARK_(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046));
});
pitchfx.subs.chosen_stat = (function pitchfx$subs$chosen_stat(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-stat","chosen-stat",600682629));
});
pitchfx.subs.loaded_QMARK_ = (function pitchfx$subs$loaded_QMARK_(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206));
});
pitchfx.subs.window_dims = (function pitchfx$subs$window_dims(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"window-dims","window-dims",1026323105));
});
pitchfx.subs.pitch_cluster = (function pitchfx$subs$pitch_cluster(db,_){
var pitch_cluster__$1 = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"pitch-cluster","pitch-cluster",-1652468437));
var cluster_attrs = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cluster-attrs","cluster-attrs",-709692153));
if(cljs.core.truth_(pitch_cluster__$1)){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (pitch_cluster__$1,cluster_attrs){
return (function (p1__17790_SHARP_){
return cljs.core._EQ_.call(null,pitch_cluster__$1,new cljs.core.Keyword(null,"cluster","cluster",535175621).cljs$core$IFn$_invoke$arity$1(p1__17790_SHARP_));
});})(pitch_cluster__$1,cluster_attrs))
,cluster_attrs));
} else {
return null;
}
});
pitchfx.subs.pitch_counts = (function pitchfx$subs$pitch_counts(db,_){
var app_data = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"app-data","app-data",1586751113));
var cluster_choice = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104));
var group_choice = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927));
var pitcher_chosen_QMARK_ = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046));
var chosen_pitcher = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873));
var filtered = (cljs.core.truth_((function (){var and__5729__auto__ = cluster_choice;
if(cljs.core.truth_(and__5729__auto__)){
return group_choice;
} else {
return and__5729__auto__;
}
})())?cljs.core.filter.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher){
return (function (p1__17791_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,p1__17791_SHARP_,cljs.core.keyword.call(null,[cljs.core.str("c"),cljs.core.str(cluster_choice)].join(''))),(group_choice - (1)));
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher))
,app_data):null);
var cluster_attrs = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cluster-attrs","cluster-attrs",-709692153));
var pitch_counts__$1 = cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs){
return (function (p_map){
return cljs.core.reduce.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs){
return (function (p,p__17803){
var vec__17804 = p__17803;
var k = cljs.core.nth.call(null,vec__17804,(0),null);
var v = cljs.core.nth.call(null,vec__17804,(1),null);
if((v > p_map.call(null,p))){
return k;
} else {
return p;
}
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs))
,p_map);
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs))
,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs){
return (function (p1__17792_SHARP_){
return cljs.core.select_keys.call(null,p1__17792_SHARP_,pitchfx.subs.pitch_types);
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs))
,cluster_attrs));
var pitch_attrs = cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1){
return (function (p1__17793_SHARP_){
return cljs.core.select_keys.call(null,p1__17793_SHARP_,pitchfx.subs.cluster_props);
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1))
,cluster_attrs);
return cljs.core.mapv.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs){
return (function (p1__17797_SHARP_,p2__17798_SHARP_){
return cljs.core.merge.call(null,p1__17797_SHARP_,p2__17798_SHARP_);
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs))
,pitch_attrs,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs){
return (function (p1__17795_SHARP_,p2__17796_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-pitch","the-pitch",-636409284),p1__17795_SHARP_], null),p2__17796_SHARP_);
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs))
,pitch_counts__$1,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs){
return (function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),c], null);
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs))
,cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs){
return (function (c){
return cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs){
return (function (p1__17794_SHARP_){
if(cljs.core.truth_(p1__17794_SHARP_)){
return p1__17794_SHARP_;
} else {
return (0);
}
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs))
,c);
});})(app_data,cluster_choice,group_choice,pitcher_chosen_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts__$1,pitch_attrs))
,cljs.core.map.call(null,cljs.core.apply.call(null,cljs.core.juxt,pitchfx.subs.cluster_cols),filtered))))));
});
pitchfx.subs.pitcher_pitches = (function pitchfx$subs$pitcher_pitches(db,_){
var app_data = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"app-data","app-data",1586751113));
var cluster_choice = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104));
var group_choice = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927));
var filter_pitchers_QMARK_ = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"filter-pitchers?","filter-pitchers?",-1661908086));
var chosen_pitcher = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873));
var filtered = (cljs.core.truth_((function (){var and__5729__auto__ = cluster_choice;
if(cljs.core.truth_(and__5729__auto__)){
return filter_pitchers_QMARK_;
} else {
return and__5729__auto__;
}
})())?cljs.core.first.call(null,cljs.core.filter.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher){
return (function (p1__17807_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mlb_id","mlb_id",185401033).cljs$core$IFn$_invoke$arity$1(p1__17807_SHARP_),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(p1__17807_SHARP_)], null),chosen_pitcher);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher))
,app_data)):cljs.core.filter.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher){
return (function (p1__17808_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,p1__17808_SHARP_,cljs.core.keyword.call(null,[cljs.core.str("c"),cljs.core.str(cluster_choice)].join(''))),(group_choice - (1)));
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher))
,app_data));
var cluster_attrs = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cluster-attrs","cluster-attrs",-709692153));
var pitch_counts = cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs){
return (function (p_map){
return cljs.core.reduce.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs){
return (function (p,p__17825){
var vec__17826 = p__17825;
var k = cljs.core.nth.call(null,vec__17826,(0),null);
var v = cljs.core.nth.call(null,vec__17826,(1),null);
if((v > p_map.call(null,p))){
return k;
} else {
return p;
}
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs))
,p_map);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs))
,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs){
return (function (p1__17809_SHARP_){
return cljs.core.select_keys.call(null,p1__17809_SHARP_,pitchfx.subs.pitch_types);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs))
,cluster_attrs));
var pitch_attrs = cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts){
return (function (p1__17810_SHARP_){
return cljs.core.select_keys.call(null,p1__17810_SHARP_,pitchfx.subs.cluster_props);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts))
,cluster_attrs);
if(cljs.core.truth_(filter_pitchers_QMARK_)){
return cljs.core.mapv.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (p1__17814_SHARP_,p2__17815_SHARP_){
return cljs.core.merge.call(null,p1__17814_SHARP_,p2__17815_SHARP_);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,pitch_attrs,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (p1__17812_SHARP_,p2__17813_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-pitch","the-pitch",-636409284),p1__17812_SHARP_], null),p2__17813_SHARP_);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,pitch_counts,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),c], null);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (p1__17811_SHARP_){
if(cljs.core.truth_(p1__17811_SHARP_)){
return p1__17811_SHARP_;
} else {
return (0);
}
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,cljs.core.apply.call(null,cljs.core.juxt,pitchfx.subs.cluster_cols).call(null,filtered)))));
} else {
return cljs.core.mapv.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (p1__17819_SHARP_,p2__17820_SHARP_){
return cljs.core.merge.call(null,p1__17819_SHARP_,p2__17820_SHARP_);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,pitch_attrs,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (p1__17817_SHARP_,p2__17818_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-pitch","the-pitch",-636409284),p1__17817_SHARP_], null),p2__17818_SHARP_);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,pitch_counts,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),c], null);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (c){
return cljs.core.map.call(null,((function (app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs){
return (function (p1__17816_SHARP_){
if(cljs.core.truth_(p1__17816_SHARP_)){
return p1__17816_SHARP_;
} else {
return (0);
}
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,c);
});})(app_data,cluster_choice,group_choice,filter_pitchers_QMARK_,chosen_pitcher,filtered,cluster_attrs,pitch_counts,pitch_attrs))
,cljs.core.map.call(null,cljs.core.apply.call(null,cljs.core.juxt,pitchfx.subs.cluster_cols),filtered))))));
}
});
pitchfx.subs.filter_pitchers_QMARK_ = (function pitchfx$subs$filter_pitchers_QMARK_(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"filter-pitchers?","filter-pitchers?",-1661908086));
});
pitchfx.subs.pitcher_sugg = (function pitchfx$subs$pitcher_sugg(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"pitcher-sugg","pitcher-sugg",-1462016315));
});
pitchfx.subs.pitcher_chosen_2_QMARK_ = (function pitchfx$subs$pitcher_chosen_2_QMARK_(db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"pitcher-chosen-2?","pitcher-chosen-2?",1228056811));
});
pitchfx.subs.id__GT_name = (function pitchfx$subs$id__GT_name(db,_){
var app_data = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"app-data","app-data",1586751113));
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"mlb_id","mlb_id",185401033),app_data),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),app_data));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927),pitchfx.subs.chosen_group);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"app-data","app-data",1586751113),pitchfx.subs.app_data);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cluster-choices","cluster-choices",703806104),pitchfx.subs.cluster_choices);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104),pitchfx.subs.cluster_choice);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"filtered","filtered",-437499761),pitchfx.subs.filtered);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"view","view",1247994814),pitchfx.subs.view);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873),pitchfx.subs.chosen_pitcher);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046),pitchfx.subs.pitcher_chosen_QMARK_);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"chosen-stat","chosen-stat",600682629),pitchfx.subs.chosen_stat);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),pitchfx.subs.loaded_QMARK_);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"window-dims","window-dims",1026323105),pitchfx.subs.window_dims);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pitch-cluster","pitch-cluster",-1652468437),pitchfx.subs.pitch_cluster);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pitch-counts","pitch-counts",-421998714),pitchfx.subs.pitch_counts);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pitcher-pitches","pitcher-pitches",-2085991631),pitchfx.subs.pitcher_pitches);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"filter-pitchers?","filter-pitchers?",-1661908086),pitchfx.subs.filter_pitchers_QMARK_);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pitcher-sugg","pitcher-sugg",-1462016315),pitchfx.subs.pitcher_sugg);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"chosen-pitcher-2","chosen-pitcher-2",1671000929),pitchfx.subs.chosen_pitcher_2);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pitcher-chosen-2?","pitcher-chosen-2?",1228056811),pitchfx.subs.pitcher_chosen_2_QMARK_);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->name","id->name",249122446),pitchfx.subs.id__GT_name);

//# sourceMappingURL=subs.js.map?rel=1476331731679