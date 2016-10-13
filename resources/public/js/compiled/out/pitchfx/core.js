// Compiled by ClojureScript 1.9.229 {}
goog.provide('pitchfx.core');
goog.require('cljs.core');
goog.require('pitchfx.handlers');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('pitchfx.views');
goog.require('cljs_http.client');
goog.require('pitchfx.subs');
goog.require('cljs.core.async');
goog.require('pitchfx.config');
goog.require('devtools.core');
goog.require('re_frame.core');
pitchfx.core.dev_setup = (function pitchfx$core$dev_setup(){
if(cljs.core.truth_(pitchfx.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

cljs.core.println.call(null,"dev mode");

return devtools.core.install_BANG_.call(null);
} else {
return null;
}
});
pitchfx.core.mount_root = (function pitchfx$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pitchfx.views.main_panel], null),document.getElementById("app"));
});
pitchfx.core.init = (function pitchfx$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

var c__12214__auto___18060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___18060){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___18060){
return (function (state_18049){
var state_val_18050 = (state_18049[(1)]);
if((state_val_18050 === (1))){
var inst_18019 = cljs_http.client.get.call(null,"/all_data");
var state_18049__$1 = state_18049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18049__$1,(2),inst_18019);
} else {
if((state_val_18050 === (2))){
var inst_18021 = (state_18049[(2)]);
var inst_18022 = cljs_http.client.get.call(null,"/cluster_attrs");
var state_18049__$1 = (function (){var statearr_18051 = state_18049;
(statearr_18051[(7)] = inst_18021);

return statearr_18051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18049__$1,(3),inst_18022);
} else {
if((state_val_18050 === (3))){
var inst_18021 = (state_18049[(7)]);
var inst_18024 = (state_18049[(2)]);
var inst_18025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18026 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_18021);
var inst_18027 = cljs.reader.read_string.call(null,inst_18026);
var inst_18028 = [new cljs.core.Keyword(null,"set-app-data","set-app-data",1581910750),inst_18027];
var inst_18029 = (new cljs.core.PersistentVector(null,2,(5),inst_18025,inst_18028,null));
var inst_18030 = re_frame.core.dispatch.call(null,inst_18029);
var inst_18031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18032 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_18024);
var inst_18033 = cljs.reader.read_string.call(null,inst_18032);
var inst_18034 = [new cljs.core.Keyword(null,"set-cluster-attrs","set-cluster-attrs",-2145676239),inst_18033];
var inst_18035 = (new cljs.core.PersistentVector(null,2,(5),inst_18031,inst_18034,null));
var inst_18036 = re_frame.core.dispatch.call(null,inst_18035);
var inst_18037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18038 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18039 = [window.innerWidth,window.innerHeight];
var inst_18040 = (new cljs.core.PersistentVector(null,2,(5),inst_18038,inst_18039,null));
var inst_18041 = [new cljs.core.Keyword(null,"set-window-dims","set-window-dims",2077261574),inst_18040];
var inst_18042 = (new cljs.core.PersistentVector(null,2,(5),inst_18037,inst_18041,null));
var inst_18043 = re_frame.core.dispatch.call(null,inst_18042);
var inst_18044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18045 = [new cljs.core.Keyword(null,"set-loaded","set-loaded",-161103429),true];
var inst_18046 = (new cljs.core.PersistentVector(null,2,(5),inst_18044,inst_18045,null));
var inst_18047 = re_frame.core.dispatch.call(null,inst_18046);
var state_18049__$1 = (function (){var statearr_18052 = state_18049;
(statearr_18052[(8)] = inst_18043);

(statearr_18052[(9)] = inst_18030);

(statearr_18052[(10)] = inst_18036);

return statearr_18052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18049__$1,inst_18047);
} else {
return null;
}
}
}
});})(c__12214__auto___18060))
;
return ((function (switch__12102__auto__,c__12214__auto___18060){
return (function() {
var pitchfx$core$init_$_state_machine__12103__auto__ = null;
var pitchfx$core$init_$_state_machine__12103__auto____0 = (function (){
var statearr_18056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18056[(0)] = pitchfx$core$init_$_state_machine__12103__auto__);

(statearr_18056[(1)] = (1));

return statearr_18056;
});
var pitchfx$core$init_$_state_machine__12103__auto____1 = (function (state_18049){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_18049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e18057){if((e18057 instanceof Object)){
var ex__12106__auto__ = e18057;
var statearr_18058_18061 = state_18049;
(statearr_18058_18061[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18062 = state_18049;
state_18049 = G__18062;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
pitchfx$core$init_$_state_machine__12103__auto__ = function(state_18049){
switch(arguments.length){
case 0:
return pitchfx$core$init_$_state_machine__12103__auto____0.call(this);
case 1:
return pitchfx$core$init_$_state_machine__12103__auto____1.call(this,state_18049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pitchfx$core$init_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = pitchfx$core$init_$_state_machine__12103__auto____0;
pitchfx$core$init_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = pitchfx$core$init_$_state_machine__12103__auto____1;
return pitchfx$core$init_$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___18060))
})();
var state__12216__auto__ = (function (){var statearr_18059 = f__12215__auto__.call(null);
(statearr_18059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___18060);

return statearr_18059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___18060))
);


pitchfx.core.dev_setup.call(null);

return pitchfx.core.mount_root.call(null);
});
goog.exportSymbol('pitchfx.core.init', pitchfx.core.init);

//# sourceMappingURL=core.js.map?rel=1476331732697