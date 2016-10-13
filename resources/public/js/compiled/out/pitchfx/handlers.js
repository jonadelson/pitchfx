// Compiled by ClojureScript 1.9.229 {}
goog.provide('pitchfx.handlers');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('pitchfx.db');
goog.require('re_frame.core');
pitchfx.handlers.app_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"window-dims","window-dims",1026323105),new cljs.core.Keyword(null,"chosen-pitcher-2","chosen-pitcher-2",1671000929),new cljs.core.Keyword(null,"chosen-stat","chosen-stat",600682629),new cljs.core.Keyword(null,"pitcher-sugg","pitcher-sugg",-1462016315),new cljs.core.Keyword(null,"cluster-attrs","cluster-attrs",-709692153),new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"filter-pitchers?","filter-pitchers?",-1661908086),new cljs.core.Keyword(null,"pitcher-chosen-2?","pitcher-chosen-2?",1228056811),new cljs.core.Keyword(null,"pitch-cluster","pitch-cluster",-1652468437),new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104),new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873),new cljs.core.Keyword(null,"cluster-choices","cluster-choices",703806104),new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927),new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046),new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),new cljs.core.Keyword(null,"view","view",1247994814)],[null,null,new cljs.core.Keyword(null,"war","war",1114150282),null,null,null,false,false,null,(50),null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__6521__auto__ = (function pitchfx$handlers$iter__15639(s__15640){
return (new cljs.core.LazySeq(null,(function (){
var s__15640__$1 = s__15640;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15640__$1);
if(temp__4657__auto__){
var s__15640__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15640__$2)){
var c__6519__auto__ = cljs.core.chunk_first.call(null,s__15640__$2);
var size__6520__auto__ = cljs.core.count.call(null,c__6519__auto__);
var b__15642 = cljs.core.chunk_buffer.call(null,size__6520__auto__);
if((function (){var i__15641 = (0);
while(true){
if((i__15641 < size__6520__auto__)){
var i = cljs.core._nth.call(null,c__6519__auto__,i__15641);
cljs.core.chunk_append.call(null,b__15642,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(i)].join('')], null));

var G__15643 = (i__15641 + (1));
i__15641 = G__15643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15642),pitchfx$handlers$iter__15639.call(null,cljs.core.chunk_rest.call(null,s__15640__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15642),null);
}
} else {
var i = cljs.core.first.call(null,s__15640__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(i)].join('')], null),pitchfx$handlers$iter__15639.call(null,cljs.core.rest.call(null,s__15640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6521__auto__.call(null,cljs.core.range.call(null,(10),(210),(10)));
})()),(1),false,false,new cljs.core.Keyword(null,"data","data",-232669377)]);
pitchfx.handlers.set_app_data = (function pitchfx$handlers$set_app_data(db,p__15644){
var vec__15648 = p__15644;
var _ = cljs.core.nth.call(null,vec__15648,(0),null);
var response = cljs.core.nth.call(null,vec__15648,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"app-data","app-data",1586751113),response);
});
pitchfx.handlers.set_cluster_choice = (function pitchfx$handlers$set_cluster_choice(db,p__15651){
var vec__15655 = p__15651;
var _ = cljs.core.nth.call(null,vec__15655,(0),null);
var n = cljs.core.nth.call(null,vec__15655,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cluster-choice","cluster-choice",-2103665104),n);
});
pitchfx.handlers.set_chosen_group = (function pitchfx$handlers$set_chosen_group(db,p__15658){
var vec__15662 = p__15658;
var _ = cljs.core.nth.call(null,vec__15662,(0),null);
var n = cljs.core.nth.call(null,vec__15662,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927),n);
});
pitchfx.handlers.dec_chosen_group = (function pitchfx$handlers$dec_chosen_group(db,p__15665){
var vec__15669 = p__15665;
var _ = cljs.core.nth.call(null,vec__15669,(0),null);
var n = cljs.core.nth.call(null,vec__15669,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927),(n - (1)));
});
pitchfx.handlers.inc_chosen_group = (function pitchfx$handlers$inc_chosen_group(db,p__15672){
var vec__15676 = p__15672;
var _ = cljs.core.nth.call(null,vec__15676,(0),null);
var n = cljs.core.nth.call(null,vec__15676,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chosen-group","chosen-group",-261045927),(n + (1)));
});
pitchfx.handlers.change_view = (function pitchfx$handlers$change_view(db,p__15679){
var vec__15683 = p__15679;
var _ = cljs.core.nth.call(null,vec__15683,(0),null);
var v = cljs.core.nth.call(null,vec__15683,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"view","view",1247994814),v);
});
pitchfx.handlers.change_pitcher = (function pitchfx$handlers$change_pitcher(db,p__15686){
var vec__15690 = p__15686;
var _ = cljs.core.nth.call(null,vec__15690,(0),null);
var p = cljs.core.nth.call(null,vec__15690,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chosen-pitcher","chosen-pitcher",2061233873),p);
});
pitchfx.handlers.set_pitcher_chosen = (function pitchfx$handlers$set_pitcher_chosen(db,p__15693){
var vec__15697 = p__15693;
var _ = cljs.core.nth.call(null,vec__15697,(0),null);
var t = cljs.core.nth.call(null,vec__15697,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pitcher-chosen?","pitcher-chosen?",-2042571046),t);
});
pitchfx.handlers.set_chosen_stat = (function pitchfx$handlers$set_chosen_stat(db,p__15700){
var vec__15704 = p__15700;
var _ = cljs.core.nth.call(null,vec__15704,(0),null);
var s = cljs.core.nth.call(null,vec__15704,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chosen-stat","chosen-stat",600682629),s);
});
pitchfx.handlers.set_loaded = (function pitchfx$handlers$set_loaded(db,p__15707){
var vec__15711 = p__15707;
var _ = cljs.core.nth.call(null,vec__15711,(0),null);
var t = cljs.core.nth.call(null,vec__15711,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),t);
});
pitchfx.handlers.set_window_dims = (function pitchfx$handlers$set_window_dims(db,p__15714){
var vec__15718 = p__15714;
var _ = cljs.core.nth.call(null,vec__15718,(0),null);
var d = cljs.core.nth.call(null,vec__15718,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"window-dims","window-dims",1026323105),d);
});
pitchfx.handlers.set_cluster_attrs = (function pitchfx$handlers$set_cluster_attrs(db,p__15721){
var vec__15725 = p__15721;
var _ = cljs.core.nth.call(null,vec__15725,(0),null);
var d = cljs.core.nth.call(null,vec__15725,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cluster-attrs","cluster-attrs",-709692153),d);
});
pitchfx.handlers.set_pitch_cluster = (function pitchfx$handlers$set_pitch_cluster(db,p__15728){
var vec__15732 = p__15728;
var _ = cljs.core.nth.call(null,vec__15732,(0),null);
var c = cljs.core.nth.call(null,vec__15732,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pitch-cluster","pitch-cluster",-1652468437),c);
});
pitchfx.handlers.change_pitcher_2 = (function pitchfx$handlers$change_pitcher_2(db,p__15735){
var vec__15739 = p__15735;
var _ = cljs.core.nth.call(null,vec__15739,(0),null);
var p = cljs.core.nth.call(null,vec__15739,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chosen-pitcher-2","chosen-pitcher-2",1671000929),p);
});
pitchfx.handlers.set_pitcher_chosen_2 = (function pitchfx$handlers$set_pitcher_chosen_2(db,p__15742){
var vec__15746 = p__15742;
var _ = cljs.core.nth.call(null,vec__15746,(0),null);
var t = cljs.core.nth.call(null,vec__15746,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pitcher-chosen-2?","pitcher-chosen-2?",1228056811),t);
});
pitchfx.handlers.set_filter_pitchers = (function pitchfx$handlers$set_filter_pitchers(db,p__15749){
var vec__15753 = p__15749;
var _ = cljs.core.nth.call(null,vec__15753,(0),null);
var t = cljs.core.nth.call(null,vec__15753,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-pitchers?","filter-pitchers?",-1661908086),t);
});
pitchfx.handlers.set_pitcher_sugg = (function pitchfx$handlers$set_pitcher_sugg(db,p__15756){
var vec__15760 = p__15756;
var _ = cljs.core.nth.call(null,vec__15760,(0),null);
var p = cljs.core.nth.call(null,vec__15760,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pitcher-sugg","pitcher-sugg",-1462016315),p);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_){
return pitchfx.handlers.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-app-data","set-app-data",1581910750),pitchfx.handlers.set_app_data);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cluster-choice","set-cluster-choice",1424755059),pitchfx.handlers.set_cluster_choice);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-chosen-group","set-chosen-group",956629297),pitchfx.handlers.set_chosen_group);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dec-chosen-group","dec-chosen-group",1675426850),pitchfx.handlers.dec_chosen_group);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-chosen-group","inc-chosen-group",1549930790),pitchfx.handlers.inc_chosen_group);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-view","change-view",-1206699831),pitchfx.handlers.change_view);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-pitcher","change-pitcher",753261798),pitchfx.handlers.change_pitcher);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-pitcher-chosen","set-pitcher-chosen",-1561399917),pitchfx.handlers.set_pitcher_chosen);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-chosen-stat","set-chosen-stat",-1401003015),pitchfx.handlers.set_chosen_stat);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loaded","set-loaded",-161103429),pitchfx.handlers.set_loaded);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-window-dims","set-window-dims",2077261574),pitchfx.handlers.set_window_dims);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cluster-attrs","set-cluster-attrs",-2145676239),pitchfx.handlers.set_cluster_attrs);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-pitch-cluster","set-pitch-cluster",2132956628),pitchfx.handlers.set_pitch_cluster);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-pitcher-2","change-pitcher-2",1378633631),pitchfx.handlers.change_pitcher_2);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-pitcher-chosen-2","set-pitcher-chosen-2",604461761),pitchfx.handlers.set_pitcher_chosen_2);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-filter-pitchers","set-filter-pitchers",465985811),pitchfx.handlers.set_filter_pitchers);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-pitcher-sugg","set-pitcher-sugg",414029129),pitchfx.handlers.set_pitcher_sugg);

//# sourceMappingURL=handlers.js.map?rel=1476331721523