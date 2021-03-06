// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the use chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."], true, false),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__16165){
var map__16169 = p__16165;
var map__16169__$1 = ((((!((map__16169 == null)))?((((map__16169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16169):map__16169);
var args = map__16169__$1;
var on_change = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__16171 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__5741__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__16171,external_model_value);
} else {
return G__16171;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__16172,event){
var map__16176 = p__16172;
var map__16176__$1 = ((((!((map__16176 == null)))?((((map__16176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16176):map__16176);
var state = map__16176__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16176__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__16176__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__16178 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__16178) {
case "input-text-blurred":
var and__5729__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__5729__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__5729__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__5741__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__16180,event){
var map__16184 = p__16180;
var map__16184__$1 = ((((!((map__16184 == null)))?((((map__16184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16184):map__16184);
var state = map__16184__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__16186 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__16186) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__16188,new_value){
var map__16191 = p__16188;
var map__16191__$1 = ((((!((map__16191 == null)))?((((map__16191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16191):map__16191);
var state = map__16191__$1;
var on_change = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__16193,suggestion){
var map__16197 = p__16193;
var map__16197__$1 = ((((!((map__16197 == null)))?((((map__16197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16197):map__16197);
var state = map__16197__$1;
var suggestion_to_string = cljs.core.get.call(null,map__16197__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__16199 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__16199,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__16199;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__16200,index){
var map__16204 = p__16200;
var map__16204__$1 = ((((!((map__16204 == null)))?((((map__16204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16204):map__16204);
var state = map__16204__$1;
var suggestions = cljs.core.get.call(null,map__16204__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__16206 = state;
var G__16206__$1 = cljs.core.assoc.call(null,G__16206,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__16206__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__16206__$1,suggestion):G__16206__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__16206__$2,suggestion);
} else {
return G__16206__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__16207,index){
var map__16210 = p__16207;
var map__16210__$1 = ((((!((map__16210 == null)))?((((map__16210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16210):map__16210);
var state = map__16210__$1;
var suggestions = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__16212){
var map__16216 = p__16212;
var map__16216__$1 = ((((!((map__16216 == null)))?((((map__16216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16216):map__16216);
var state = map__16216__$1;
var suggestion_active_index = cljs.core.get.call(null,map__16216__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16218 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__16218,suggestion_active_index);
} else {
return G__16218;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__16219){
var map__16223 = p__16219;
var map__16223__$1 = ((((!((map__16223 == null)))?((((map__16223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16223):map__16223);
var state = map__16223__$1;
var suggestions = cljs.core.get.call(null,map__16223__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__16223__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16225 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__16225,re_com.typeahead.wrap.call(null,((function (){var or__5741__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__16225;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__16226){
var map__16230 = p__16226;
var map__16230__$1 = ((((!((map__16230 == null)))?((((map__16230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16230):map__16230);
var state = map__16230__$1;
var suggestions = cljs.core.get.call(null,map__16230__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__16230__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16232 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__16232,re_com.typeahead.wrap.call(null,((function (){var or__5741__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__16232;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__16234 = state;
var G__16234__$1 = re_com.typeahead.clear_suggestions.call(null,G__16234)
;
var G__16234__$2 = cljs.core.assoc.call(null,G__16234__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__16234__$2,null);
} else {
return G__16234__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__16235){
var map__16239 = p__16235;
var map__16239__$1 = ((((!((map__16239 == null)))?((((map__16239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16239):map__16239);
var state = map__16239__$1;
var input_text = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__16241 = state;
if(cljs.core.truth_((function (){var and__5729__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__5729__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__5729__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__16241,input_text);
} else {
return G__16241;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__16242_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__16242_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__12214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto__){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto__){
return (function (state_16292){
var state_val_16293 = (state_16292[(1)]);
if((state_val_16293 === (1))){
var state_16292__$1 = state_16292;
var statearr_16294_16309 = state_16292__$1;
(statearr_16294_16309[(2)] = null);

(statearr_16294_16309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (2))){
var state_16292__$1 = state_16292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16292__$1,(4),c_search);
} else {
if((state_val_16293 === (3))){
var inst_16290 = (state_16292[(2)]);
var state_16292__$1 = state_16292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16292__$1,inst_16290);
} else {
if((state_val_16293 === (4))){
var inst_16278 = (state_16292[(7)]);
var inst_16278__$1 = (state_16292[(2)]);
var inst_16279 = cljs.core.deref.call(null,state_atom);
var inst_16280 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_16279);
var inst_16281 = cljs.core._EQ_.call(null,"",inst_16278__$1);
var state_16292__$1 = (function (){var statearr_16295 = state_16292;
(statearr_16295[(8)] = inst_16280);

(statearr_16295[(7)] = inst_16278__$1);

return statearr_16295;
})();
if(inst_16281){
var statearr_16296_16310 = state_16292__$1;
(statearr_16296_16310[(1)] = (5));

} else {
var statearr_16297_16311 = state_16292__$1;
(statearr_16297_16311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (5))){
var inst_16283 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_16292__$1 = state_16292;
var statearr_16298_16312 = state_16292__$1;
(statearr_16298_16312[(2)] = inst_16283);

(statearr_16298_16312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (6))){
var inst_16280 = (state_16292[(8)]);
var inst_16278 = (state_16292[(7)]);
var inst_16285 = re_com.typeahead.search_data_source_BANG_.call(null,inst_16280,state_atom,inst_16278);
var state_16292__$1 = state_16292;
var statearr_16299_16313 = state_16292__$1;
(statearr_16299_16313[(2)] = inst_16285);

(statearr_16299_16313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (7))){
var inst_16287 = (state_16292[(2)]);
var state_16292__$1 = (function (){var statearr_16300 = state_16292;
(statearr_16300[(9)] = inst_16287);

return statearr_16300;
})();
var statearr_16301_16314 = state_16292__$1;
(statearr_16301_16314[(2)] = null);

(statearr_16301_16314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12214__auto__))
;
return ((function (switch__12102__auto__,c__12214__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto____0 = (function (){
var statearr_16305 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16305[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto__);

(statearr_16305[(1)] = (1));

return statearr_16305;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto____1 = (function (state_16292){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_16292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e16306){if((e16306 instanceof Object)){
var ex__12106__auto__ = e16306;
var statearr_16307_16315 = state_16292;
(statearr_16307_16315[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16316 = state_16292;
state_16292 = G__16316;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto__ = function(state_16292){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto____1.call(this,state_16292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto__))
})();
var state__12216__auto__ = (function (){var statearr_16308 = f__12215__auto__.call(null);
(statearr_16308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto__);

return statearr_16308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto__))
);

return c__12214__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__16321 = cljs.core.deref.call(null,state_atom);
var map__16321__$1 = ((((!((map__16321 == null)))?((((map__16321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16321):map__16321);
var state = map__16321__$1;
var input_text = cljs.core.get.call(null,map__16321__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__16321__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__16321,map__16321__$1,state,input_text,c_input){
return (function (p1__16317_SHARP_){
var G__16323 = p1__16317_SHARP_;
var G__16323__$1 = cljs.core.assoc.call(null,G__16323,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__16323__$1,new_text);
} else {
return G__16323__$1;
}
});})(map__16321,map__16321__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__16327 = cljs.core._EQ_;
var expr__16328 = event.which;
if(cljs.core.truth_(pred__16327.call(null,goog.events.KeyCodes.UP,expr__16328))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__16327.call(null,goog.events.KeyCodes.DOWN,expr__16328))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__16327.call(null,goog.events.KeyCodes.ENTER,expr__16328))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__16327.call(null,goog.events.KeyCodes.ESC,expr__16328))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__16327.call(null,goog.events.KeyCodes.TAB,expr__16328))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__6823__auto__ = [];
var len__6816__auto___16358 = arguments.length;
var i__6817__auto___16359 = (0);
while(true){
if((i__6817__auto___16359 < len__6816__auto___16358)){
args__6823__auto__.push((arguments[i__6817__auto___16359]));

var G__16360 = (i__6817__auto___16359 + (1));
i__6817__auto___16359 = G__16360;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((0) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__6824__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__16332){
var map__16333 = p__16332;
var map__16333__$1 = ((((!((map__16333 == null)))?((((map__16333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16333):map__16333);
var args = map__16333__$1;
var data_source = cljs.core.get.call(null,map__16333__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__16333__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__16333__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16333__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__16335 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__16335__$1 = ((((!((map__16335 == null)))?((((map__16335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16335):map__16335);
var state = map__16335__$1;
var c_search = cljs.core.get.call(null,map__16335__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__16335__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__16361__delegate = function (p__16337){
var map__16338 = p__16337;
var map__16338__$1 = ((((!((map__16338 == null)))?((((map__16338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16338):map__16338);
var args__$1 = map__16338__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__16338__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__16340 = cljs.core.deref.call(null,state_atom);
var map__16340__$1 = ((((!((map__16340 == null)))?((((map__16340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16340):map__16340);
var state__$1 = map__16340__$1;
var suggestions = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__5741__auto__ = width;
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source__$1)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source__$1);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__5741__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__6521__auto__ = ((function (map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__16342(s__16343){
return (new cljs.core.LazySeq(null,((function (map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__16343__$1 = s__16343;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16343__$1);
if(temp__4657__auto__){
var s__16343__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16343__$2)){
var c__6519__auto__ = cljs.core.chunk_first.call(null,s__16343__$2);
var size__6520__auto__ = cljs.core.count.call(null,c__6519__auto__);
var b__16345 = cljs.core.chunk_buffer.call(null,size__6520__auto__);
if((function (){var i__16344 = (0);
while(true){
if((i__16344 < size__6520__auto__)){
var vec__16352 = cljs.core._nth.call(null,c__6519__auto__,i__16344);
var i = cljs.core.nth.call(null,vec__16352,(0),null);
var s = cljs.core.nth.call(null,vec__16352,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__16345,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__16344,selected_QMARK_,vec__16352,i,s,c__6519__auto__,size__6520__auto__,b__16345,s__16343__$2,temp__4657__auto__,map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__16344,selected_QMARK_,vec__16352,i,s,c__6519__auto__,size__6520__auto__,b__16345,s__16343__$2,temp__4657__auto__,map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__16344,selected_QMARK_,vec__16352,i,s,c__6519__auto__,size__6520__auto__,b__16345,s__16343__$2,temp__4657__auto__,map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__16330_SHARP_){
p1__16330_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__16344,selected_QMARK_,vec__16352,i,s,c__6519__auto__,size__6520__auto__,b__16345,s__16343__$2,temp__4657__auto__,map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__16362 = (i__16344 + (1));
i__16344 = G__16362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16345),re_com$typeahead$iter__16342.call(null,cljs.core.chunk_rest.call(null,s__16343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16345),null);
}
} else {
var vec__16355 = cljs.core.first.call(null,s__16343__$2);
var i = cljs.core.nth.call(null,vec__16355,(0),null);
var s = cljs.core.nth.call(null,vec__16355,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__16355,i,s,s__16343__$2,temp__4657__auto__,map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__16355,i,s,s__16343__$2,temp__4657__auto__,map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__16355,i,s,s__16343__$2,temp__4657__auto__,map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__16330_SHARP_){
p1__16330_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__16355,i,s,s__16343__$2,temp__4657__auto__,map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__16342.call(null,cljs.core.rest.call(null,s__16343__$2)));
}
} else {
return null;
}
break;
}
});})(map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__16340,map__16340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16338,map__16338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__6521__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__16361 = function (var_args){
var p__16337 = null;
if (arguments.length > 0) {
var G__16363__i = 0, G__16363__a = new Array(arguments.length -  0);
while (G__16363__i < G__16363__a.length) {G__16363__a[G__16363__i] = arguments[G__16363__i + 0]; ++G__16363__i;}
  p__16337 = new cljs.core.IndexedSeq(G__16363__a,0);
} 
return G__16361__delegate.call(this,p__16337);};
G__16361.cljs$lang$maxFixedArity = 0;
G__16361.cljs$lang$applyTo = (function (arglist__16364){
var p__16337 = cljs.core.seq(arglist__16364);
return G__16361__delegate(p__16337);
});
G__16361.cljs$core$IFn$_invoke$arity$variadic = G__16361__delegate;
return G__16361;
})()
;
;})(map__16335,map__16335__$1,state,c_search,c_input,state_atom,input_text_model,map__16333,map__16333__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq16331){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16331));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__12214__auto___16531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___16531,out){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___16531,out){
return (function (state_16498){
var state_val_16499 = (state_16498[(1)]);
if((state_val_16499 === (7))){
var inst_16453 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16500_16532 = state_16498__$1;
(statearr_16500_16532[(2)] = inst_16453);

(statearr_16500_16532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (1))){
var inst_16448 = null;
var state_16498__$1 = (function (){var statearr_16501 = state_16498;
(statearr_16501[(7)] = inst_16448);

return statearr_16501;
})();
var statearr_16502_16533 = state_16498__$1;
(statearr_16502_16533[(2)] = null);

(statearr_16502_16533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (4))){
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16498__$1,(7),in$);
} else {
if((state_val_16499 === (15))){
var inst_16483 = (state_16498[(2)]);
var state_16498__$1 = (function (){var statearr_16503 = state_16498;
(statearr_16503[(8)] = inst_16483);

return statearr_16503;
})();
var statearr_16504_16534 = state_16498__$1;
(statearr_16504_16534[(2)] = null);

(statearr_16504_16534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (13))){
var inst_16471 = (state_16498[(9)]);
var inst_16485 = cljs.core._EQ_.call(null,inst_16471,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_16498__$1 = state_16498;
if(inst_16485){
var statearr_16505_16535 = state_16498__$1;
(statearr_16505_16535[(1)] = (16));

} else {
var statearr_16506_16536 = state_16498__$1;
(statearr_16506_16536[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (6))){
var inst_16457 = (state_16498[(10)]);
var inst_16456 = (state_16498[(2)]);
var inst_16457__$1 = cljs.core.async.timeout.call(null,ms);
var inst_16465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16466 = [in$,inst_16457__$1];
var inst_16467 = (new cljs.core.PersistentVector(null,2,(5),inst_16465,inst_16466,null));
var state_16498__$1 = (function (){var statearr_16507 = state_16498;
(statearr_16507[(10)] = inst_16457__$1);

(statearr_16507[(11)] = inst_16456);

return statearr_16507;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16498__$1,(8),inst_16467);
} else {
if((state_val_16499 === (17))){
var state_16498__$1 = state_16498;
var statearr_16508_16537 = state_16498__$1;
(statearr_16508_16537[(2)] = null);

(statearr_16508_16537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (3))){
var inst_16496 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16498__$1,inst_16496);
} else {
if((state_val_16499 === (12))){
var inst_16456 = (state_16498[(11)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16498__$1,(15),out,inst_16456);
} else {
if((state_val_16499 === (2))){
var inst_16448 = (state_16498[(7)]);
var inst_16450 = (inst_16448 == null);
var state_16498__$1 = state_16498;
if(cljs.core.truth_(inst_16450)){
var statearr_16509_16538 = state_16498__$1;
(statearr_16509_16538[(1)] = (4));

} else {
var statearr_16510_16539 = state_16498__$1;
(statearr_16510_16539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (11))){
var inst_16493 = (state_16498[(2)]);
var inst_16448 = inst_16493;
var state_16498__$1 = (function (){var statearr_16511 = state_16498;
(statearr_16511[(7)] = inst_16448);

return statearr_16511;
})();
var statearr_16512_16540 = state_16498__$1;
(statearr_16512_16540[(2)] = null);

(statearr_16512_16540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (9))){
var inst_16469 = (state_16498[(12)]);
var inst_16477 = cljs.core.nth.call(null,inst_16469,(0),null);
var inst_16478 = cljs.core.nth.call(null,inst_16469,(1),null);
var state_16498__$1 = (function (){var statearr_16513 = state_16498;
(statearr_16513[(13)] = inst_16478);

return statearr_16513;
})();
var statearr_16514_16541 = state_16498__$1;
(statearr_16514_16541[(2)] = inst_16477);

(statearr_16514_16541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (5))){
var inst_16448 = (state_16498[(7)]);
var state_16498__$1 = state_16498;
var statearr_16515_16542 = state_16498__$1;
(statearr_16515_16542[(2)] = inst_16448);

(statearr_16515_16542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (14))){
var inst_16491 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16516_16543 = state_16498__$1;
(statearr_16516_16543[(2)] = inst_16491);

(statearr_16516_16543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (16))){
var inst_16470 = (state_16498[(14)]);
var state_16498__$1 = state_16498;
var statearr_16517_16544 = state_16498__$1;
(statearr_16517_16544[(2)] = inst_16470);

(statearr_16517_16544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (10))){
var inst_16471 = (state_16498[(9)]);
var inst_16457 = (state_16498[(10)]);
var inst_16480 = cljs.core._EQ_.call(null,inst_16471,inst_16457);
var state_16498__$1 = state_16498;
if(inst_16480){
var statearr_16518_16545 = state_16498__$1;
(statearr_16518_16545[(1)] = (12));

} else {
var statearr_16519_16546 = state_16498__$1;
(statearr_16519_16546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (18))){
var inst_16489 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16520_16547 = state_16498__$1;
(statearr_16520_16547[(2)] = inst_16489);

(statearr_16520_16547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (8))){
var inst_16469 = (state_16498[(12)]);
var inst_16471 = (state_16498[(9)]);
var inst_16469__$1 = (state_16498[(2)]);
var inst_16470 = cljs.core.nth.call(null,inst_16469__$1,(0),null);
var inst_16471__$1 = cljs.core.nth.call(null,inst_16469__$1,(1),null);
var inst_16472 = cljs.core._EQ_.call(null,inst_16471__$1,in$);
var state_16498__$1 = (function (){var statearr_16521 = state_16498;
(statearr_16521[(12)] = inst_16469__$1);

(statearr_16521[(9)] = inst_16471__$1);

(statearr_16521[(14)] = inst_16470);

return statearr_16521;
})();
if(inst_16472){
var statearr_16522_16548 = state_16498__$1;
(statearr_16522_16548[(1)] = (9));

} else {
var statearr_16523_16549 = state_16498__$1;
(statearr_16523_16549[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12214__auto___16531,out))
;
return ((function (switch__12102__auto__,c__12214__auto___16531,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__12103__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__12103__auto____0 = (function (){
var statearr_16527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16527[(0)] = re_com$typeahead$debounce_$_state_machine__12103__auto__);

(statearr_16527[(1)] = (1));

return statearr_16527;
});
var re_com$typeahead$debounce_$_state_machine__12103__auto____1 = (function (state_16498){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_16498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e16528){if((e16528 instanceof Object)){
var ex__12106__auto__ = e16528;
var statearr_16529_16550 = state_16498;
(statearr_16529_16550[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16551 = state_16498;
state_16498 = G__16551;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__12103__auto__ = function(state_16498){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__12103__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__12103__auto____1.call(this,state_16498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__12103__auto____0;
re_com$typeahead$debounce_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__12103__auto____1;
return re_com$typeahead$debounce_$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___16531,out))
})();
var state__12216__auto__ = (function (){var statearr_16530 = f__12215__auto__.call(null);
(statearr_16530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___16531);

return statearr_16530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___16531,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1476331724441