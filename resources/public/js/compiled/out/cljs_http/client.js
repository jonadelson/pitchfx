// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__5729__auto__ = v;
if(cljs.core.truth_(and__5729__auto__)){
return (v > (0));
} else {
return and__5729__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__15136_SHARP_,p2__15135_SHARP_){
var vec__15140 = clojure.string.split.call(null,p2__15135_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__15140,(0),null);
var v = cljs.core.nth.call(null,vec__15140,(1),null);
return cljs.core.assoc.call(null,p1__15136_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__15143_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__15143_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__15144){
var vec__15148 = p__15144;
var k = cljs.core.nth.call(null,vec__15148,(0),null);
var v = cljs.core.nth.call(null,vec__15148,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__15151_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__15151_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__5729__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__5729__auto__){
var and__5729__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__5729__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__5729__auto____$1;
}
} else {
return and__5729__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__15152_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15152_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15159 = arguments.length;
var i__6817__auto___15160 = (0);
while(true){
if((i__6817__auto___15160 < len__6816__auto___15159)){
args__6823__auto__.push((arguments[i__6817__auto___15160]));

var G__15161 = (i__6817__auto___15160 + (1));
i__6817__auto___15160 = G__15161;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15155){
var vec__15156 = p__15155;
var default_headers = cljs.core.nth.call(null,vec__15156,(0),null);
return ((function (vec__15156,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__5741__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__15156,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq15153){
var G__15154 = cljs.core.first.call(null,seq15153);
var seq15153__$1 = cljs.core.next.call(null,seq15153);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__15154,seq15153__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15168 = arguments.length;
var i__6817__auto___15169 = (0);
while(true){
if((i__6817__auto___15169 < len__6816__auto___15168)){
args__6823__auto__.push((arguments[i__6817__auto___15169]));

var G__15170 = (i__6817__auto___15169 + (1));
i__6817__auto___15169 = G__15170;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15164){
var vec__15165 = p__15164;
var accept = cljs.core.nth.call(null,vec__15165,(0),null);
return ((function (vec__15165,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__5741__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__15165,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq15162){
var G__15163 = cljs.core.first.call(null,seq15162);
var seq15162__$1 = cljs.core.next.call(null,seq15162);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__15163,seq15162__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15177 = arguments.length;
var i__6817__auto___15178 = (0);
while(true){
if((i__6817__auto___15178 < len__6816__auto___15177)){
args__6823__auto__.push((arguments[i__6817__auto___15178]));

var G__15179 = (i__6817__auto___15178 + (1));
i__6817__auto___15178 = G__15179;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15173){
var vec__15174 = p__15173;
var content_type = cljs.core.nth.call(null,vec__15174,(0),null);
return ((function (vec__15174,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__5741__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__15174,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq15171){
var G__15172 = cljs.core.first.call(null,seq15171);
var seq15171__$1 = cljs.core.next.call(null,seq15171);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__15172,seq15171__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__15182 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__15182__$1 = ((((!((map__15182 == null)))?((((map__15182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15182):map__15182);
var encoding = cljs.core.get.call(null,map__15182__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__15182__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__15188 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__15188__$1 = ((((!((map__15188 == null)))?((((map__15188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15188):map__15188);
var decoding = cljs.core.get.call(null,map__15188__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__15188__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__15188,map__15188__$1,decoding,decoding_opts){
return (function (p1__15184_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__15184_SHARP_,decoding,decoding_opts);
});})(map__15188,map__15188__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__15188,map__15188__$1,decoding,decoding_opts,transit_decode){
return (function (p1__15185_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15185_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__15188,map__15188__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__15190_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15190_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__15194){
var map__15195 = p__15194;
var map__15195__$1 = ((((!((map__15195 == null)))?((((map__15195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15195):map__15195);
var req = map__15195__$1;
var query_params = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__15200){
var map__15201 = p__15200;
var map__15201__$1 = ((((!((map__15201 == null)))?((((map__15201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15201):map__15201);
var request = map__15201__$1;
var form_params = cljs.core.get.call(null,map__15201__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__15201__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__15201__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__5729__auto__ = form_params;
if(cljs.core.truth_(and__5729__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__5729__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__15213_15223 = cljs.core.seq.call(null,params);
var chunk__15214_15224 = null;
var count__15215_15225 = (0);
var i__15216_15226 = (0);
while(true){
if((i__15216_15226 < count__15215_15225)){
var vec__15217_15227 = cljs.core._nth.call(null,chunk__15214_15224,i__15216_15226);
var k_15228 = cljs.core.nth.call(null,vec__15217_15227,(0),null);
var v_15229 = cljs.core.nth.call(null,vec__15217_15227,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_15229)){
form_data.append(cljs.core.name.call(null,k_15228),cljs.core.first.call(null,v_15229),cljs.core.second.call(null,v_15229));
} else {
form_data.append(cljs.core.name.call(null,k_15228),v_15229);
}

var G__15230 = seq__15213_15223;
var G__15231 = chunk__15214_15224;
var G__15232 = count__15215_15225;
var G__15233 = (i__15216_15226 + (1));
seq__15213_15223 = G__15230;
chunk__15214_15224 = G__15231;
count__15215_15225 = G__15232;
i__15216_15226 = G__15233;
continue;
} else {
var temp__4657__auto___15234 = cljs.core.seq.call(null,seq__15213_15223);
if(temp__4657__auto___15234){
var seq__15213_15235__$1 = temp__4657__auto___15234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15213_15235__$1)){
var c__6552__auto___15236 = cljs.core.chunk_first.call(null,seq__15213_15235__$1);
var G__15237 = cljs.core.chunk_rest.call(null,seq__15213_15235__$1);
var G__15238 = c__6552__auto___15236;
var G__15239 = cljs.core.count.call(null,c__6552__auto___15236);
var G__15240 = (0);
seq__15213_15223 = G__15237;
chunk__15214_15224 = G__15238;
count__15215_15225 = G__15239;
i__15216_15226 = G__15240;
continue;
} else {
var vec__15220_15241 = cljs.core.first.call(null,seq__15213_15235__$1);
var k_15242 = cljs.core.nth.call(null,vec__15220_15241,(0),null);
var v_15243 = cljs.core.nth.call(null,vec__15220_15241,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_15243)){
form_data.append(cljs.core.name.call(null,k_15242),cljs.core.first.call(null,v_15243),cljs.core.second.call(null,v_15243));
} else {
form_data.append(cljs.core.name.call(null,k_15242),v_15243);
}

var G__15244 = cljs.core.next.call(null,seq__15213_15235__$1);
var G__15245 = null;
var G__15246 = (0);
var G__15247 = (0);
seq__15213_15223 = G__15244;
chunk__15214_15224 = G__15245;
count__15215_15225 = G__15246;
i__15216_15226 = G__15247;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__15251){
var map__15252 = p__15251;
var map__15252__$1 = ((((!((map__15252 == null)))?((((map__15252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15252):map__15252);
var request = map__15252__$1;
var multipart_params = cljs.core.get.call(null,map__15252__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__15252__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__5729__auto__ = multipart_params;
if(cljs.core.truth_(and__5729__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__5729__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__15254_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__15254_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__15259){
var map__15260 = p__15259;
var map__15260__$1 = ((((!((map__15260 == null)))?((((map__15260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15260):map__15260);
var req = map__15260__$1;
var query_params = cljs.core.get.call(null,map__15260__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__15260,map__15260__$1,req,query_params){
return (function (p1__15255_SHARP_){
return cljs.core.merge.call(null,p1__15255_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__15260,map__15260__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15268 = arguments.length;
var i__6817__auto___15269 = (0);
while(true){
if((i__6817__auto___15269 < len__6816__auto___15268)){
args__6823__auto__.push((arguments[i__6817__auto___15269]));

var G__15270 = (i__6817__auto___15269 + (1));
i__6817__auto___15269 = G__15270;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15264){
var vec__15265 = p__15264;
var credentials = cljs.core.nth.call(null,vec__15265,(0),null);
return ((function (vec__15265,credentials){
return (function (req){
var credentials__$1 = (function (){var or__5741__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__15265,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq15262){
var G__15263 = cljs.core.first.call(null,seq15262);
var seq15262__$1 = cljs.core.next.call(null,seq15262);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__15263,seq15262__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15277 = arguments.length;
var i__6817__auto___15278 = (0);
while(true){
if((i__6817__auto___15278 < len__6816__auto___15277)){
args__6823__auto__.push((arguments[i__6817__auto___15278]));

var G__15279 = (i__6817__auto___15278 + (1));
i__6817__auto___15278 = G__15279;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15273){
var vec__15274 = p__15273;
var req = cljs.core.nth.call(null,vec__15274,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq15271){
var G__15272 = cljs.core.first.call(null,seq15271);
var seq15271__$1 = cljs.core.next.call(null,seq15271);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__15272,seq15271__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15286 = arguments.length;
var i__6817__auto___15287 = (0);
while(true){
if((i__6817__auto___15287 < len__6816__auto___15286)){
args__6823__auto__.push((arguments[i__6817__auto___15287]));

var G__15288 = (i__6817__auto___15287 + (1));
i__6817__auto___15287 = G__15288;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15282){
var vec__15283 = p__15282;
var req = cljs.core.nth.call(null,vec__15283,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq15280){
var G__15281 = cljs.core.first.call(null,seq15280);
var seq15280__$1 = cljs.core.next.call(null,seq15280);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__15281,seq15280__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15295 = arguments.length;
var i__6817__auto___15296 = (0);
while(true){
if((i__6817__auto___15296 < len__6816__auto___15295)){
args__6823__auto__.push((arguments[i__6817__auto___15296]));

var G__15297 = (i__6817__auto___15296 + (1));
i__6817__auto___15296 = G__15297;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15291){
var vec__15292 = p__15291;
var req = cljs.core.nth.call(null,vec__15292,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq15289){
var G__15290 = cljs.core.first.call(null,seq15289);
var seq15289__$1 = cljs.core.next.call(null,seq15289);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__15290,seq15289__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15304 = arguments.length;
var i__6817__auto___15305 = (0);
while(true){
if((i__6817__auto___15305 < len__6816__auto___15304)){
args__6823__auto__.push((arguments[i__6817__auto___15305]));

var G__15306 = (i__6817__auto___15305 + (1));
i__6817__auto___15305 = G__15306;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15300){
var vec__15301 = p__15300;
var req = cljs.core.nth.call(null,vec__15301,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq15298){
var G__15299 = cljs.core.first.call(null,seq15298);
var seq15298__$1 = cljs.core.next.call(null,seq15298);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__15299,seq15298__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15313 = arguments.length;
var i__6817__auto___15314 = (0);
while(true){
if((i__6817__auto___15314 < len__6816__auto___15313)){
args__6823__auto__.push((arguments[i__6817__auto___15314]));

var G__15315 = (i__6817__auto___15314 + (1));
i__6817__auto___15314 = G__15315;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15309){
var vec__15310 = p__15309;
var req = cljs.core.nth.call(null,vec__15310,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq15307){
var G__15308 = cljs.core.first.call(null,seq15307);
var seq15307__$1 = cljs.core.next.call(null,seq15307);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__15308,seq15307__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15322 = arguments.length;
var i__6817__auto___15323 = (0);
while(true){
if((i__6817__auto___15323 < len__6816__auto___15322)){
args__6823__auto__.push((arguments[i__6817__auto___15323]));

var G__15324 = (i__6817__auto___15323 + (1));
i__6817__auto___15323 = G__15324;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15318){
var vec__15319 = p__15318;
var req = cljs.core.nth.call(null,vec__15319,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq15316){
var G__15317 = cljs.core.first.call(null,seq15316);
var seq15316__$1 = cljs.core.next.call(null,seq15316);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__15317,seq15316__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15331 = arguments.length;
var i__6817__auto___15332 = (0);
while(true){
if((i__6817__auto___15332 < len__6816__auto___15331)){
args__6823__auto__.push((arguments[i__6817__auto___15332]));

var G__15333 = (i__6817__auto___15332 + (1));
i__6817__auto___15332 = G__15333;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15327){
var vec__15328 = p__15327;
var req = cljs.core.nth.call(null,vec__15328,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq15325){
var G__15326 = cljs.core.first.call(null,seq15325);
var seq15325__$1 = cljs.core.next.call(null,seq15325);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__15326,seq15325__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15340 = arguments.length;
var i__6817__auto___15341 = (0);
while(true){
if((i__6817__auto___15341 < len__6816__auto___15340)){
args__6823__auto__.push((arguments[i__6817__auto___15341]));

var G__15342 = (i__6817__auto___15341 + (1));
i__6817__auto___15341 = G__15342;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15336){
var vec__15337 = p__15336;
var req = cljs.core.nth.call(null,vec__15337,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq15334){
var G__15335 = cljs.core.first.call(null,seq15334);
var seq15334__$1 = cljs.core.next.call(null,seq15334);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__15335,seq15334__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__6823__auto__ = [];
var len__6816__auto___15349 = arguments.length;
var i__6817__auto___15350 = (0);
while(true){
if((i__6817__auto___15350 < len__6816__auto___15349)){
args__6823__auto__.push((arguments[i__6817__auto___15350]));

var G__15351 = (i__6817__auto___15350 + (1));
i__6817__auto___15350 = G__15351;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15345){
var vec__15346 = p__15345;
var req = cljs.core.nth.call(null,vec__15346,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq15343){
var G__15344 = cljs.core.first.call(null,seq15343);
var seq15343__$1 = cljs.core.next.call(null,seq15343);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__15344,seq15343__$1);
});


//# sourceMappingURL=client.js.map?rel=1476331720092