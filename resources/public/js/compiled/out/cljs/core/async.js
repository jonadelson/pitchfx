// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args12259 = [];
var len__6816__auto___12265 = arguments.length;
var i__6817__auto___12266 = (0);
while(true){
if((i__6817__auto___12266 < len__6816__auto___12265)){
args12259.push((arguments[i__6817__auto___12266]));

var G__12267 = (i__6817__auto___12266 + (1));
i__6817__auto___12266 = G__12267;
continue;
} else {
}
break;
}

var G__12261 = args12259.length;
switch (G__12261) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12259.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12262 = (function (f,blockable,meta12263){
this.f = f;
this.blockable = blockable;
this.meta12263 = meta12263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12264,meta12263__$1){
var self__ = this;
var _12264__$1 = this;
return (new cljs.core.async.t_cljs$core$async12262(self__.f,self__.blockable,meta12263__$1));
});

cljs.core.async.t_cljs$core$async12262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12264){
var self__ = this;
var _12264__$1 = this;
return self__.meta12263;
});

cljs.core.async.t_cljs$core$async12262.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12262.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12263","meta12263",-1486015793,null)], null);
});

cljs.core.async.t_cljs$core$async12262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12262";

cljs.core.async.t_cljs$core$async12262.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async12262");
});

cljs.core.async.__GT_t_cljs$core$async12262 = (function cljs$core$async$__GT_t_cljs$core$async12262(f__$1,blockable__$1,meta12263){
return (new cljs.core.async.t_cljs$core$async12262(f__$1,blockable__$1,meta12263));
});

}

return (new cljs.core.async.t_cljs$core$async12262(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args12271 = [];
var len__6816__auto___12274 = arguments.length;
var i__6817__auto___12275 = (0);
while(true){
if((i__6817__auto___12275 < len__6816__auto___12274)){
args12271.push((arguments[i__6817__auto___12275]));

var G__12276 = (i__6817__auto___12275 + (1));
i__6817__auto___12275 = G__12276;
continue;
} else {
}
break;
}

var G__12273 = args12271.length;
switch (G__12273) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12271.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args12278 = [];
var len__6816__auto___12281 = arguments.length;
var i__6817__auto___12282 = (0);
while(true){
if((i__6817__auto___12282 < len__6816__auto___12281)){
args12278.push((arguments[i__6817__auto___12282]));

var G__12283 = (i__6817__auto___12282 + (1));
i__6817__auto___12282 = G__12283;
continue;
} else {
}
break;
}

var G__12280 = args12278.length;
switch (G__12280) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12278.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args12285 = [];
var len__6816__auto___12288 = arguments.length;
var i__6817__auto___12289 = (0);
while(true){
if((i__6817__auto___12289 < len__6816__auto___12288)){
args12285.push((arguments[i__6817__auto___12289]));

var G__12290 = (i__6817__auto___12289 + (1));
i__6817__auto___12289 = G__12290;
continue;
} else {
}
break;
}

var G__12287 = args12285.length;
switch (G__12287) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12285.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12292 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12292);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12292,ret){
return (function (){
return fn1.call(null,val_12292);
});})(val_12292,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args12293 = [];
var len__6816__auto___12296 = arguments.length;
var i__6817__auto___12297 = (0);
while(true){
if((i__6817__auto___12297 < len__6816__auto___12296)){
args12293.push((arguments[i__6817__auto___12297]));

var G__12298 = (i__6817__auto___12297 + (1));
i__6817__auto___12297 = G__12298;
continue;
} else {
}
break;
}

var G__12295 = args12293.length;
switch (G__12295) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12293.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6656__auto___12300 = n;
var x_12301 = (0);
while(true){
if((x_12301 < n__6656__auto___12300)){
(a[x_12301] = (0));

var G__12302 = (x_12301 + (1));
x_12301 = G__12302;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12303 = (i + (1));
i = G__12303;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12307 = (function (alt_flag,flag,meta12308){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12308 = meta12308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12309,meta12308__$1){
var self__ = this;
var _12309__$1 = this;
return (new cljs.core.async.t_cljs$core$async12307(self__.alt_flag,self__.flag,meta12308__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12309){
var self__ = this;
var _12309__$1 = this;
return self__.meta12308;
});})(flag))
;

cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12307.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12308","meta12308",-1235980114,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12307";

cljs.core.async.t_cljs$core$async12307.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async12307");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12307 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12307(alt_flag__$1,flag__$1,meta12308){
return (new cljs.core.async.t_cljs$core$async12307(alt_flag__$1,flag__$1,meta12308));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12307(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12313 = (function (alt_handler,flag,cb,meta12314){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12314 = meta12314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12315,meta12314__$1){
var self__ = this;
var _12315__$1 = this;
return (new cljs.core.async.t_cljs$core$async12313(self__.alt_handler,self__.flag,self__.cb,meta12314__$1));
});

cljs.core.async.t_cljs$core$async12313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12315){
var self__ = this;
var _12315__$1 = this;
return self__.meta12314;
});

cljs.core.async.t_cljs$core$async12313.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12314","meta12314",-570036113,null)], null);
});

cljs.core.async.t_cljs$core$async12313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12313";

cljs.core.async.t_cljs$core$async12313.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async12313");
});

cljs.core.async.__GT_t_cljs$core$async12313 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12313(alt_handler__$1,flag__$1,cb__$1,meta12314){
return (new cljs.core.async.t_cljs$core$async12313(alt_handler__$1,flag__$1,cb__$1,meta12314));
});

}

return (new cljs.core.async.t_cljs$core$async12313(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12316_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12316_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12317_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12317_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5741__auto__ = wport;
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12318 = (i + (1));
i = G__12318;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5741__auto__ = ret;
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__5729__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5729__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5729__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6823__auto__ = [];
var len__6816__auto___12324 = arguments.length;
var i__6817__auto___12325 = (0);
while(true){
if((i__6817__auto___12325 < len__6816__auto___12324)){
args__6823__auto__.push((arguments[i__6817__auto___12325]));

var G__12326 = (i__6817__auto___12325 + (1));
i__6817__auto___12325 = G__12326;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((1) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6824__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12321){
var map__12322 = p__12321;
var map__12322__$1 = ((((!((map__12322 == null)))?((((map__12322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12322):map__12322);
var opts = map__12322__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12319){
var G__12320 = cljs.core.first.call(null,seq12319);
var seq12319__$1 = cljs.core.next.call(null,seq12319);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12320,seq12319__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12327 = [];
var len__6816__auto___12377 = arguments.length;
var i__6817__auto___12378 = (0);
while(true){
if((i__6817__auto___12378 < len__6816__auto___12377)){
args12327.push((arguments[i__6817__auto___12378]));

var G__12379 = (i__6817__auto___12378 + (1));
i__6817__auto___12378 = G__12379;
continue;
} else {
}
break;
}

var G__12329 = args12327.length;
switch (G__12329) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12327.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12214__auto___12381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___12381){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___12381){
return (function (state_12353){
var state_val_12354 = (state_12353[(1)]);
if((state_val_12354 === (7))){
var inst_12349 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
var statearr_12355_12382 = state_12353__$1;
(statearr_12355_12382[(2)] = inst_12349);

(statearr_12355_12382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (1))){
var state_12353__$1 = state_12353;
var statearr_12356_12383 = state_12353__$1;
(statearr_12356_12383[(2)] = null);

(statearr_12356_12383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (4))){
var inst_12332 = (state_12353[(7)]);
var inst_12332__$1 = (state_12353[(2)]);
var inst_12333 = (inst_12332__$1 == null);
var state_12353__$1 = (function (){var statearr_12357 = state_12353;
(statearr_12357[(7)] = inst_12332__$1);

return statearr_12357;
})();
if(cljs.core.truth_(inst_12333)){
var statearr_12358_12384 = state_12353__$1;
(statearr_12358_12384[(1)] = (5));

} else {
var statearr_12359_12385 = state_12353__$1;
(statearr_12359_12385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (13))){
var state_12353__$1 = state_12353;
var statearr_12360_12386 = state_12353__$1;
(statearr_12360_12386[(2)] = null);

(statearr_12360_12386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (6))){
var inst_12332 = (state_12353[(7)]);
var state_12353__$1 = state_12353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12353__$1,(11),to,inst_12332);
} else {
if((state_val_12354 === (3))){
var inst_12351 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12353__$1,inst_12351);
} else {
if((state_val_12354 === (12))){
var state_12353__$1 = state_12353;
var statearr_12361_12387 = state_12353__$1;
(statearr_12361_12387[(2)] = null);

(statearr_12361_12387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (2))){
var state_12353__$1 = state_12353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12353__$1,(4),from);
} else {
if((state_val_12354 === (11))){
var inst_12342 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
if(cljs.core.truth_(inst_12342)){
var statearr_12362_12388 = state_12353__$1;
(statearr_12362_12388[(1)] = (12));

} else {
var statearr_12363_12389 = state_12353__$1;
(statearr_12363_12389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (9))){
var state_12353__$1 = state_12353;
var statearr_12364_12390 = state_12353__$1;
(statearr_12364_12390[(2)] = null);

(statearr_12364_12390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (5))){
var state_12353__$1 = state_12353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12365_12391 = state_12353__$1;
(statearr_12365_12391[(1)] = (8));

} else {
var statearr_12366_12392 = state_12353__$1;
(statearr_12366_12392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (14))){
var inst_12347 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
var statearr_12367_12393 = state_12353__$1;
(statearr_12367_12393[(2)] = inst_12347);

(statearr_12367_12393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (10))){
var inst_12339 = (state_12353[(2)]);
var state_12353__$1 = state_12353;
var statearr_12368_12394 = state_12353__$1;
(statearr_12368_12394[(2)] = inst_12339);

(statearr_12368_12394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12354 === (8))){
var inst_12336 = cljs.core.async.close_BANG_.call(null,to);
var state_12353__$1 = state_12353;
var statearr_12369_12395 = state_12353__$1;
(statearr_12369_12395[(2)] = inst_12336);

(statearr_12369_12395[(1)] = (10));


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
});})(c__12214__auto___12381))
;
return ((function (switch__12102__auto__,c__12214__auto___12381){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_12373 = [null,null,null,null,null,null,null,null];
(statearr_12373[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_12373[(1)] = (1));

return statearr_12373;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_12353){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_12353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e12374){if((e12374 instanceof Object)){
var ex__12106__auto__ = e12374;
var statearr_12375_12396 = state_12353;
(statearr_12375_12396[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12397 = state_12353;
state_12353 = G__12397;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_12353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_12353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___12381))
})();
var state__12216__auto__ = (function (){var statearr_12376 = f__12215__auto__.call(null);
(statearr_12376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___12381);

return statearr_12376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___12381))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12585){
var vec__12586 = p__12585;
var v = cljs.core.nth.call(null,vec__12586,(0),null);
var p = cljs.core.nth.call(null,vec__12586,(1),null);
var job = vec__12586;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12214__auto___12772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___12772,res,vec__12586,v,p,job,jobs,results){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___12772,res,vec__12586,v,p,job,jobs,results){
return (function (state_12593){
var state_val_12594 = (state_12593[(1)]);
if((state_val_12594 === (1))){
var state_12593__$1 = state_12593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12593__$1,(2),res,v);
} else {
if((state_val_12594 === (2))){
var inst_12590 = (state_12593[(2)]);
var inst_12591 = cljs.core.async.close_BANG_.call(null,res);
var state_12593__$1 = (function (){var statearr_12595 = state_12593;
(statearr_12595[(7)] = inst_12590);

return statearr_12595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12593__$1,inst_12591);
} else {
return null;
}
}
});})(c__12214__auto___12772,res,vec__12586,v,p,job,jobs,results))
;
return ((function (switch__12102__auto__,c__12214__auto___12772,res,vec__12586,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0 = (function (){
var statearr_12599 = [null,null,null,null,null,null,null,null];
(statearr_12599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__);

(statearr_12599[(1)] = (1));

return statearr_12599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1 = (function (state_12593){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_12593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e12600){if((e12600 instanceof Object)){
var ex__12106__auto__ = e12600;
var statearr_12601_12773 = state_12593;
(statearr_12601_12773[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12774 = state_12593;
state_12593 = G__12774;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = function(state_12593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1.call(this,state_12593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___12772,res,vec__12586,v,p,job,jobs,results))
})();
var state__12216__auto__ = (function (){var statearr_12602 = f__12215__auto__.call(null);
(statearr_12602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___12772);

return statearr_12602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___12772,res,vec__12586,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12603){
var vec__12604 = p__12603;
var v = cljs.core.nth.call(null,vec__12604,(0),null);
var p = cljs.core.nth.call(null,vec__12604,(1),null);
var job = vec__12604;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__6656__auto___12775 = n;
var __12776 = (0);
while(true){
if((__12776 < n__6656__auto___12775)){
var G__12607_12777 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12607_12777) {
case "compute":
var c__12214__auto___12779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12776,c__12214__auto___12779,G__12607_12777,n__6656__auto___12775,jobs,results,process,async){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (__12776,c__12214__auto___12779,G__12607_12777,n__6656__auto___12775,jobs,results,process,async){
return (function (state_12620){
var state_val_12621 = (state_12620[(1)]);
if((state_val_12621 === (1))){
var state_12620__$1 = state_12620;
var statearr_12622_12780 = state_12620__$1;
(statearr_12622_12780[(2)] = null);

(statearr_12622_12780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (2))){
var state_12620__$1 = state_12620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12620__$1,(4),jobs);
} else {
if((state_val_12621 === (3))){
var inst_12618 = (state_12620[(2)]);
var state_12620__$1 = state_12620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12620__$1,inst_12618);
} else {
if((state_val_12621 === (4))){
var inst_12610 = (state_12620[(2)]);
var inst_12611 = process.call(null,inst_12610);
var state_12620__$1 = state_12620;
if(cljs.core.truth_(inst_12611)){
var statearr_12623_12781 = state_12620__$1;
(statearr_12623_12781[(1)] = (5));

} else {
var statearr_12624_12782 = state_12620__$1;
(statearr_12624_12782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (5))){
var state_12620__$1 = state_12620;
var statearr_12625_12783 = state_12620__$1;
(statearr_12625_12783[(2)] = null);

(statearr_12625_12783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (6))){
var state_12620__$1 = state_12620;
var statearr_12626_12784 = state_12620__$1;
(statearr_12626_12784[(2)] = null);

(statearr_12626_12784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (7))){
var inst_12616 = (state_12620[(2)]);
var state_12620__$1 = state_12620;
var statearr_12627_12785 = state_12620__$1;
(statearr_12627_12785[(2)] = inst_12616);

(statearr_12627_12785[(1)] = (3));


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
});})(__12776,c__12214__auto___12779,G__12607_12777,n__6656__auto___12775,jobs,results,process,async))
;
return ((function (__12776,switch__12102__auto__,c__12214__auto___12779,G__12607_12777,n__6656__auto___12775,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0 = (function (){
var statearr_12631 = [null,null,null,null,null,null,null];
(statearr_12631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__);

(statearr_12631[(1)] = (1));

return statearr_12631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1 = (function (state_12620){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_12620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e12632){if((e12632 instanceof Object)){
var ex__12106__auto__ = e12632;
var statearr_12633_12786 = state_12620;
(statearr_12633_12786[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12787 = state_12620;
state_12620 = G__12787;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = function(state_12620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1.call(this,state_12620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__;
})()
;})(__12776,switch__12102__auto__,c__12214__auto___12779,G__12607_12777,n__6656__auto___12775,jobs,results,process,async))
})();
var state__12216__auto__ = (function (){var statearr_12634 = f__12215__auto__.call(null);
(statearr_12634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___12779);

return statearr_12634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(__12776,c__12214__auto___12779,G__12607_12777,n__6656__auto___12775,jobs,results,process,async))
);


break;
case "async":
var c__12214__auto___12788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12776,c__12214__auto___12788,G__12607_12777,n__6656__auto___12775,jobs,results,process,async){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (__12776,c__12214__auto___12788,G__12607_12777,n__6656__auto___12775,jobs,results,process,async){
return (function (state_12647){
var state_val_12648 = (state_12647[(1)]);
if((state_val_12648 === (1))){
var state_12647__$1 = state_12647;
var statearr_12649_12789 = state_12647__$1;
(statearr_12649_12789[(2)] = null);

(statearr_12649_12789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (2))){
var state_12647__$1 = state_12647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12647__$1,(4),jobs);
} else {
if((state_val_12648 === (3))){
var inst_12645 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12647__$1,inst_12645);
} else {
if((state_val_12648 === (4))){
var inst_12637 = (state_12647[(2)]);
var inst_12638 = async.call(null,inst_12637);
var state_12647__$1 = state_12647;
if(cljs.core.truth_(inst_12638)){
var statearr_12650_12790 = state_12647__$1;
(statearr_12650_12790[(1)] = (5));

} else {
var statearr_12651_12791 = state_12647__$1;
(statearr_12651_12791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (5))){
var state_12647__$1 = state_12647;
var statearr_12652_12792 = state_12647__$1;
(statearr_12652_12792[(2)] = null);

(statearr_12652_12792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (6))){
var state_12647__$1 = state_12647;
var statearr_12653_12793 = state_12647__$1;
(statearr_12653_12793[(2)] = null);

(statearr_12653_12793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (7))){
var inst_12643 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
var statearr_12654_12794 = state_12647__$1;
(statearr_12654_12794[(2)] = inst_12643);

(statearr_12654_12794[(1)] = (3));


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
});})(__12776,c__12214__auto___12788,G__12607_12777,n__6656__auto___12775,jobs,results,process,async))
;
return ((function (__12776,switch__12102__auto__,c__12214__auto___12788,G__12607_12777,n__6656__auto___12775,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0 = (function (){
var statearr_12658 = [null,null,null,null,null,null,null];
(statearr_12658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__);

(statearr_12658[(1)] = (1));

return statearr_12658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1 = (function (state_12647){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_12647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e12659){if((e12659 instanceof Object)){
var ex__12106__auto__ = e12659;
var statearr_12660_12795 = state_12647;
(statearr_12660_12795[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12796 = state_12647;
state_12647 = G__12796;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = function(state_12647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1.call(this,state_12647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__;
})()
;})(__12776,switch__12102__auto__,c__12214__auto___12788,G__12607_12777,n__6656__auto___12775,jobs,results,process,async))
})();
var state__12216__auto__ = (function (){var statearr_12661 = f__12215__auto__.call(null);
(statearr_12661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___12788);

return statearr_12661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(__12776,c__12214__auto___12788,G__12607_12777,n__6656__auto___12775,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12797 = (__12776 + (1));
__12776 = G__12797;
continue;
} else {
}
break;
}

var c__12214__auto___12798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___12798,jobs,results,process,async){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___12798,jobs,results,process,async){
return (function (state_12683){
var state_val_12684 = (state_12683[(1)]);
if((state_val_12684 === (1))){
var state_12683__$1 = state_12683;
var statearr_12685_12799 = state_12683__$1;
(statearr_12685_12799[(2)] = null);

(statearr_12685_12799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12684 === (2))){
var state_12683__$1 = state_12683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12683__$1,(4),from);
} else {
if((state_val_12684 === (3))){
var inst_12681 = (state_12683[(2)]);
var state_12683__$1 = state_12683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12683__$1,inst_12681);
} else {
if((state_val_12684 === (4))){
var inst_12664 = (state_12683[(7)]);
var inst_12664__$1 = (state_12683[(2)]);
var inst_12665 = (inst_12664__$1 == null);
var state_12683__$1 = (function (){var statearr_12686 = state_12683;
(statearr_12686[(7)] = inst_12664__$1);

return statearr_12686;
})();
if(cljs.core.truth_(inst_12665)){
var statearr_12687_12800 = state_12683__$1;
(statearr_12687_12800[(1)] = (5));

} else {
var statearr_12688_12801 = state_12683__$1;
(statearr_12688_12801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12684 === (5))){
var inst_12667 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12683__$1 = state_12683;
var statearr_12689_12802 = state_12683__$1;
(statearr_12689_12802[(2)] = inst_12667);

(statearr_12689_12802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12684 === (6))){
var inst_12669 = (state_12683[(8)]);
var inst_12664 = (state_12683[(7)]);
var inst_12669__$1 = cljs.core.async.chan.call(null,(1));
var inst_12670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12671 = [inst_12664,inst_12669__$1];
var inst_12672 = (new cljs.core.PersistentVector(null,2,(5),inst_12670,inst_12671,null));
var state_12683__$1 = (function (){var statearr_12690 = state_12683;
(statearr_12690[(8)] = inst_12669__$1);

return statearr_12690;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12683__$1,(8),jobs,inst_12672);
} else {
if((state_val_12684 === (7))){
var inst_12679 = (state_12683[(2)]);
var state_12683__$1 = state_12683;
var statearr_12691_12803 = state_12683__$1;
(statearr_12691_12803[(2)] = inst_12679);

(statearr_12691_12803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12684 === (8))){
var inst_12669 = (state_12683[(8)]);
var inst_12674 = (state_12683[(2)]);
var state_12683__$1 = (function (){var statearr_12692 = state_12683;
(statearr_12692[(9)] = inst_12674);

return statearr_12692;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12683__$1,(9),results,inst_12669);
} else {
if((state_val_12684 === (9))){
var inst_12676 = (state_12683[(2)]);
var state_12683__$1 = (function (){var statearr_12693 = state_12683;
(statearr_12693[(10)] = inst_12676);

return statearr_12693;
})();
var statearr_12694_12804 = state_12683__$1;
(statearr_12694_12804[(2)] = null);

(statearr_12694_12804[(1)] = (2));


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
});})(c__12214__auto___12798,jobs,results,process,async))
;
return ((function (switch__12102__auto__,c__12214__auto___12798,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0 = (function (){
var statearr_12698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__);

(statearr_12698[(1)] = (1));

return statearr_12698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1 = (function (state_12683){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_12683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e12699){if((e12699 instanceof Object)){
var ex__12106__auto__ = e12699;
var statearr_12700_12805 = state_12683;
(statearr_12700_12805[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12806 = state_12683;
state_12683 = G__12806;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = function(state_12683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1.call(this,state_12683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___12798,jobs,results,process,async))
})();
var state__12216__auto__ = (function (){var statearr_12701 = f__12215__auto__.call(null);
(statearr_12701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___12798);

return statearr_12701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___12798,jobs,results,process,async))
);


var c__12214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto__,jobs,results,process,async){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto__,jobs,results,process,async){
return (function (state_12739){
var state_val_12740 = (state_12739[(1)]);
if((state_val_12740 === (7))){
var inst_12735 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12741_12807 = state_12739__$1;
(statearr_12741_12807[(2)] = inst_12735);

(statearr_12741_12807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (20))){
var state_12739__$1 = state_12739;
var statearr_12742_12808 = state_12739__$1;
(statearr_12742_12808[(2)] = null);

(statearr_12742_12808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (1))){
var state_12739__$1 = state_12739;
var statearr_12743_12809 = state_12739__$1;
(statearr_12743_12809[(2)] = null);

(statearr_12743_12809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (4))){
var inst_12704 = (state_12739[(7)]);
var inst_12704__$1 = (state_12739[(2)]);
var inst_12705 = (inst_12704__$1 == null);
var state_12739__$1 = (function (){var statearr_12744 = state_12739;
(statearr_12744[(7)] = inst_12704__$1);

return statearr_12744;
})();
if(cljs.core.truth_(inst_12705)){
var statearr_12745_12810 = state_12739__$1;
(statearr_12745_12810[(1)] = (5));

} else {
var statearr_12746_12811 = state_12739__$1;
(statearr_12746_12811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (15))){
var inst_12717 = (state_12739[(8)]);
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12739__$1,(18),to,inst_12717);
} else {
if((state_val_12740 === (21))){
var inst_12730 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12747_12812 = state_12739__$1;
(statearr_12747_12812[(2)] = inst_12730);

(statearr_12747_12812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (13))){
var inst_12732 = (state_12739[(2)]);
var state_12739__$1 = (function (){var statearr_12748 = state_12739;
(statearr_12748[(9)] = inst_12732);

return statearr_12748;
})();
var statearr_12749_12813 = state_12739__$1;
(statearr_12749_12813[(2)] = null);

(statearr_12749_12813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (6))){
var inst_12704 = (state_12739[(7)]);
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12739__$1,(11),inst_12704);
} else {
if((state_val_12740 === (17))){
var inst_12725 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
if(cljs.core.truth_(inst_12725)){
var statearr_12750_12814 = state_12739__$1;
(statearr_12750_12814[(1)] = (19));

} else {
var statearr_12751_12815 = state_12739__$1;
(statearr_12751_12815[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (3))){
var inst_12737 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12739__$1,inst_12737);
} else {
if((state_val_12740 === (12))){
var inst_12714 = (state_12739[(10)]);
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12739__$1,(14),inst_12714);
} else {
if((state_val_12740 === (2))){
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12739__$1,(4),results);
} else {
if((state_val_12740 === (19))){
var state_12739__$1 = state_12739;
var statearr_12752_12816 = state_12739__$1;
(statearr_12752_12816[(2)] = null);

(statearr_12752_12816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (11))){
var inst_12714 = (state_12739[(2)]);
var state_12739__$1 = (function (){var statearr_12753 = state_12739;
(statearr_12753[(10)] = inst_12714);

return statearr_12753;
})();
var statearr_12754_12817 = state_12739__$1;
(statearr_12754_12817[(2)] = null);

(statearr_12754_12817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (9))){
var state_12739__$1 = state_12739;
var statearr_12755_12818 = state_12739__$1;
(statearr_12755_12818[(2)] = null);

(statearr_12755_12818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (5))){
var state_12739__$1 = state_12739;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12756_12819 = state_12739__$1;
(statearr_12756_12819[(1)] = (8));

} else {
var statearr_12757_12820 = state_12739__$1;
(statearr_12757_12820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (14))){
var inst_12717 = (state_12739[(8)]);
var inst_12719 = (state_12739[(11)]);
var inst_12717__$1 = (state_12739[(2)]);
var inst_12718 = (inst_12717__$1 == null);
var inst_12719__$1 = cljs.core.not.call(null,inst_12718);
var state_12739__$1 = (function (){var statearr_12758 = state_12739;
(statearr_12758[(8)] = inst_12717__$1);

(statearr_12758[(11)] = inst_12719__$1);

return statearr_12758;
})();
if(inst_12719__$1){
var statearr_12759_12821 = state_12739__$1;
(statearr_12759_12821[(1)] = (15));

} else {
var statearr_12760_12822 = state_12739__$1;
(statearr_12760_12822[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (16))){
var inst_12719 = (state_12739[(11)]);
var state_12739__$1 = state_12739;
var statearr_12761_12823 = state_12739__$1;
(statearr_12761_12823[(2)] = inst_12719);

(statearr_12761_12823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (10))){
var inst_12711 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12762_12824 = state_12739__$1;
(statearr_12762_12824[(2)] = inst_12711);

(statearr_12762_12824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (18))){
var inst_12722 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12763_12825 = state_12739__$1;
(statearr_12763_12825[(2)] = inst_12722);

(statearr_12763_12825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (8))){
var inst_12708 = cljs.core.async.close_BANG_.call(null,to);
var state_12739__$1 = state_12739;
var statearr_12764_12826 = state_12739__$1;
(statearr_12764_12826[(2)] = inst_12708);

(statearr_12764_12826[(1)] = (10));


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
}
}
}
});})(c__12214__auto__,jobs,results,process,async))
;
return ((function (switch__12102__auto__,c__12214__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0 = (function (){
var statearr_12768 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12768[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__);

(statearr_12768[(1)] = (1));

return statearr_12768;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1 = (function (state_12739){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_12739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e12769){if((e12769 instanceof Object)){
var ex__12106__auto__ = e12769;
var statearr_12770_12827 = state_12739;
(statearr_12770_12827[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12828 = state_12739;
state_12739 = G__12828;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__ = function(state_12739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1.call(this,state_12739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto__,jobs,results,process,async))
})();
var state__12216__auto__ = (function (){var statearr_12771 = f__12215__auto__.call(null);
(statearr_12771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto__);

return statearr_12771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto__,jobs,results,process,async))
);

return c__12214__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args12829 = [];
var len__6816__auto___12832 = arguments.length;
var i__6817__auto___12833 = (0);
while(true){
if((i__6817__auto___12833 < len__6816__auto___12832)){
args12829.push((arguments[i__6817__auto___12833]));

var G__12834 = (i__6817__auto___12833 + (1));
i__6817__auto___12833 = G__12834;
continue;
} else {
}
break;
}

var G__12831 = args12829.length;
switch (G__12831) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12829.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args12836 = [];
var len__6816__auto___12839 = arguments.length;
var i__6817__auto___12840 = (0);
while(true){
if((i__6817__auto___12840 < len__6816__auto___12839)){
args12836.push((arguments[i__6817__auto___12840]));

var G__12841 = (i__6817__auto___12840 + (1));
i__6817__auto___12840 = G__12841;
continue;
} else {
}
break;
}

var G__12838 = args12836.length;
switch (G__12838) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12836.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args12843 = [];
var len__6816__auto___12896 = arguments.length;
var i__6817__auto___12897 = (0);
while(true){
if((i__6817__auto___12897 < len__6816__auto___12896)){
args12843.push((arguments[i__6817__auto___12897]));

var G__12898 = (i__6817__auto___12897 + (1));
i__6817__auto___12897 = G__12898;
continue;
} else {
}
break;
}

var G__12845 = args12843.length;
switch (G__12845) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12843.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12214__auto___12900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___12900,tc,fc){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___12900,tc,fc){
return (function (state_12871){
var state_val_12872 = (state_12871[(1)]);
if((state_val_12872 === (7))){
var inst_12867 = (state_12871[(2)]);
var state_12871__$1 = state_12871;
var statearr_12873_12901 = state_12871__$1;
(statearr_12873_12901[(2)] = inst_12867);

(statearr_12873_12901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (1))){
var state_12871__$1 = state_12871;
var statearr_12874_12902 = state_12871__$1;
(statearr_12874_12902[(2)] = null);

(statearr_12874_12902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (4))){
var inst_12848 = (state_12871[(7)]);
var inst_12848__$1 = (state_12871[(2)]);
var inst_12849 = (inst_12848__$1 == null);
var state_12871__$1 = (function (){var statearr_12875 = state_12871;
(statearr_12875[(7)] = inst_12848__$1);

return statearr_12875;
})();
if(cljs.core.truth_(inst_12849)){
var statearr_12876_12903 = state_12871__$1;
(statearr_12876_12903[(1)] = (5));

} else {
var statearr_12877_12904 = state_12871__$1;
(statearr_12877_12904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (13))){
var state_12871__$1 = state_12871;
var statearr_12878_12905 = state_12871__$1;
(statearr_12878_12905[(2)] = null);

(statearr_12878_12905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (6))){
var inst_12848 = (state_12871[(7)]);
var inst_12854 = p.call(null,inst_12848);
var state_12871__$1 = state_12871;
if(cljs.core.truth_(inst_12854)){
var statearr_12879_12906 = state_12871__$1;
(statearr_12879_12906[(1)] = (9));

} else {
var statearr_12880_12907 = state_12871__$1;
(statearr_12880_12907[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (3))){
var inst_12869 = (state_12871[(2)]);
var state_12871__$1 = state_12871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12871__$1,inst_12869);
} else {
if((state_val_12872 === (12))){
var state_12871__$1 = state_12871;
var statearr_12881_12908 = state_12871__$1;
(statearr_12881_12908[(2)] = null);

(statearr_12881_12908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (2))){
var state_12871__$1 = state_12871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12871__$1,(4),ch);
} else {
if((state_val_12872 === (11))){
var inst_12848 = (state_12871[(7)]);
var inst_12858 = (state_12871[(2)]);
var state_12871__$1 = state_12871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12871__$1,(8),inst_12858,inst_12848);
} else {
if((state_val_12872 === (9))){
var state_12871__$1 = state_12871;
var statearr_12882_12909 = state_12871__$1;
(statearr_12882_12909[(2)] = tc);

(statearr_12882_12909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (5))){
var inst_12851 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12852 = cljs.core.async.close_BANG_.call(null,fc);
var state_12871__$1 = (function (){var statearr_12883 = state_12871;
(statearr_12883[(8)] = inst_12851);

return statearr_12883;
})();
var statearr_12884_12910 = state_12871__$1;
(statearr_12884_12910[(2)] = inst_12852);

(statearr_12884_12910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (14))){
var inst_12865 = (state_12871[(2)]);
var state_12871__$1 = state_12871;
var statearr_12885_12911 = state_12871__$1;
(statearr_12885_12911[(2)] = inst_12865);

(statearr_12885_12911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (10))){
var state_12871__$1 = state_12871;
var statearr_12886_12912 = state_12871__$1;
(statearr_12886_12912[(2)] = fc);

(statearr_12886_12912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12872 === (8))){
var inst_12860 = (state_12871[(2)]);
var state_12871__$1 = state_12871;
if(cljs.core.truth_(inst_12860)){
var statearr_12887_12913 = state_12871__$1;
(statearr_12887_12913[(1)] = (12));

} else {
var statearr_12888_12914 = state_12871__$1;
(statearr_12888_12914[(1)] = (13));

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
});})(c__12214__auto___12900,tc,fc))
;
return ((function (switch__12102__auto__,c__12214__auto___12900,tc,fc){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_12892 = [null,null,null,null,null,null,null,null,null];
(statearr_12892[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_12892[(1)] = (1));

return statearr_12892;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_12871){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_12871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e12893){if((e12893 instanceof Object)){
var ex__12106__auto__ = e12893;
var statearr_12894_12915 = state_12871;
(statearr_12894_12915[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12916 = state_12871;
state_12871 = G__12916;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_12871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_12871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___12900,tc,fc))
})();
var state__12216__auto__ = (function (){var statearr_12895 = f__12215__auto__.call(null);
(statearr_12895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___12900);

return statearr_12895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___12900,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto__){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto__){
return (function (state_12980){
var state_val_12981 = (state_12980[(1)]);
if((state_val_12981 === (7))){
var inst_12976 = (state_12980[(2)]);
var state_12980__$1 = state_12980;
var statearr_12982_13003 = state_12980__$1;
(statearr_12982_13003[(2)] = inst_12976);

(statearr_12982_13003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (1))){
var inst_12960 = init;
var state_12980__$1 = (function (){var statearr_12983 = state_12980;
(statearr_12983[(7)] = inst_12960);

return statearr_12983;
})();
var statearr_12984_13004 = state_12980__$1;
(statearr_12984_13004[(2)] = null);

(statearr_12984_13004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (4))){
var inst_12963 = (state_12980[(8)]);
var inst_12963__$1 = (state_12980[(2)]);
var inst_12964 = (inst_12963__$1 == null);
var state_12980__$1 = (function (){var statearr_12985 = state_12980;
(statearr_12985[(8)] = inst_12963__$1);

return statearr_12985;
})();
if(cljs.core.truth_(inst_12964)){
var statearr_12986_13005 = state_12980__$1;
(statearr_12986_13005[(1)] = (5));

} else {
var statearr_12987_13006 = state_12980__$1;
(statearr_12987_13006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (6))){
var inst_12960 = (state_12980[(7)]);
var inst_12963 = (state_12980[(8)]);
var inst_12967 = (state_12980[(9)]);
var inst_12967__$1 = f.call(null,inst_12960,inst_12963);
var inst_12968 = cljs.core.reduced_QMARK_.call(null,inst_12967__$1);
var state_12980__$1 = (function (){var statearr_12988 = state_12980;
(statearr_12988[(9)] = inst_12967__$1);

return statearr_12988;
})();
if(inst_12968){
var statearr_12989_13007 = state_12980__$1;
(statearr_12989_13007[(1)] = (8));

} else {
var statearr_12990_13008 = state_12980__$1;
(statearr_12990_13008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (3))){
var inst_12978 = (state_12980[(2)]);
var state_12980__$1 = state_12980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12980__$1,inst_12978);
} else {
if((state_val_12981 === (2))){
var state_12980__$1 = state_12980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12980__$1,(4),ch);
} else {
if((state_val_12981 === (9))){
var inst_12967 = (state_12980[(9)]);
var inst_12960 = inst_12967;
var state_12980__$1 = (function (){var statearr_12991 = state_12980;
(statearr_12991[(7)] = inst_12960);

return statearr_12991;
})();
var statearr_12992_13009 = state_12980__$1;
(statearr_12992_13009[(2)] = null);

(statearr_12992_13009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (5))){
var inst_12960 = (state_12980[(7)]);
var state_12980__$1 = state_12980;
var statearr_12993_13010 = state_12980__$1;
(statearr_12993_13010[(2)] = inst_12960);

(statearr_12993_13010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (10))){
var inst_12974 = (state_12980[(2)]);
var state_12980__$1 = state_12980;
var statearr_12994_13011 = state_12980__$1;
(statearr_12994_13011[(2)] = inst_12974);

(statearr_12994_13011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (8))){
var inst_12967 = (state_12980[(9)]);
var inst_12970 = cljs.core.deref.call(null,inst_12967);
var state_12980__$1 = state_12980;
var statearr_12995_13012 = state_12980__$1;
(statearr_12995_13012[(2)] = inst_12970);

(statearr_12995_13012[(1)] = (10));


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
});})(c__12214__auto__))
;
return ((function (switch__12102__auto__,c__12214__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12103__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12103__auto____0 = (function (){
var statearr_12999 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12999[(0)] = cljs$core$async$reduce_$_state_machine__12103__auto__);

(statearr_12999[(1)] = (1));

return statearr_12999;
});
var cljs$core$async$reduce_$_state_machine__12103__auto____1 = (function (state_12980){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_12980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e13000){if((e13000 instanceof Object)){
var ex__12106__auto__ = e13000;
var statearr_13001_13013 = state_12980;
(statearr_13001_13013[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13014 = state_12980;
state_12980 = G__13014;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12103__auto__ = function(state_12980){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12103__auto____1.call(this,state_12980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12103__auto____0;
cljs$core$async$reduce_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12103__auto____1;
return cljs$core$async$reduce_$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto__))
})();
var state__12216__auto__ = (function (){var statearr_13002 = f__12215__auto__.call(null);
(statearr_13002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto__);

return statearr_13002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto__))
);

return c__12214__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13015 = [];
var len__6816__auto___13067 = arguments.length;
var i__6817__auto___13068 = (0);
while(true){
if((i__6817__auto___13068 < len__6816__auto___13067)){
args13015.push((arguments[i__6817__auto___13068]));

var G__13069 = (i__6817__auto___13068 + (1));
i__6817__auto___13068 = G__13069;
continue;
} else {
}
break;
}

var G__13017 = args13015.length;
switch (G__13017) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13015.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto__){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto__){
return (function (state_13042){
var state_val_13043 = (state_13042[(1)]);
if((state_val_13043 === (7))){
var inst_13024 = (state_13042[(2)]);
var state_13042__$1 = state_13042;
var statearr_13044_13071 = state_13042__$1;
(statearr_13044_13071[(2)] = inst_13024);

(statearr_13044_13071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (1))){
var inst_13018 = cljs.core.seq.call(null,coll);
var inst_13019 = inst_13018;
var state_13042__$1 = (function (){var statearr_13045 = state_13042;
(statearr_13045[(7)] = inst_13019);

return statearr_13045;
})();
var statearr_13046_13072 = state_13042__$1;
(statearr_13046_13072[(2)] = null);

(statearr_13046_13072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (4))){
var inst_13019 = (state_13042[(7)]);
var inst_13022 = cljs.core.first.call(null,inst_13019);
var state_13042__$1 = state_13042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13042__$1,(7),ch,inst_13022);
} else {
if((state_val_13043 === (13))){
var inst_13036 = (state_13042[(2)]);
var state_13042__$1 = state_13042;
var statearr_13047_13073 = state_13042__$1;
(statearr_13047_13073[(2)] = inst_13036);

(statearr_13047_13073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (6))){
var inst_13027 = (state_13042[(2)]);
var state_13042__$1 = state_13042;
if(cljs.core.truth_(inst_13027)){
var statearr_13048_13074 = state_13042__$1;
(statearr_13048_13074[(1)] = (8));

} else {
var statearr_13049_13075 = state_13042__$1;
(statearr_13049_13075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (3))){
var inst_13040 = (state_13042[(2)]);
var state_13042__$1 = state_13042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13042__$1,inst_13040);
} else {
if((state_val_13043 === (12))){
var state_13042__$1 = state_13042;
var statearr_13050_13076 = state_13042__$1;
(statearr_13050_13076[(2)] = null);

(statearr_13050_13076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (2))){
var inst_13019 = (state_13042[(7)]);
var state_13042__$1 = state_13042;
if(cljs.core.truth_(inst_13019)){
var statearr_13051_13077 = state_13042__$1;
(statearr_13051_13077[(1)] = (4));

} else {
var statearr_13052_13078 = state_13042__$1;
(statearr_13052_13078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (11))){
var inst_13033 = cljs.core.async.close_BANG_.call(null,ch);
var state_13042__$1 = state_13042;
var statearr_13053_13079 = state_13042__$1;
(statearr_13053_13079[(2)] = inst_13033);

(statearr_13053_13079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (9))){
var state_13042__$1 = state_13042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13054_13080 = state_13042__$1;
(statearr_13054_13080[(1)] = (11));

} else {
var statearr_13055_13081 = state_13042__$1;
(statearr_13055_13081[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (5))){
var inst_13019 = (state_13042[(7)]);
var state_13042__$1 = state_13042;
var statearr_13056_13082 = state_13042__$1;
(statearr_13056_13082[(2)] = inst_13019);

(statearr_13056_13082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (10))){
var inst_13038 = (state_13042[(2)]);
var state_13042__$1 = state_13042;
var statearr_13057_13083 = state_13042__$1;
(statearr_13057_13083[(2)] = inst_13038);

(statearr_13057_13083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13043 === (8))){
var inst_13019 = (state_13042[(7)]);
var inst_13029 = cljs.core.next.call(null,inst_13019);
var inst_13019__$1 = inst_13029;
var state_13042__$1 = (function (){var statearr_13058 = state_13042;
(statearr_13058[(7)] = inst_13019__$1);

return statearr_13058;
})();
var statearr_13059_13084 = state_13042__$1;
(statearr_13059_13084[(2)] = null);

(statearr_13059_13084[(1)] = (2));


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
});})(c__12214__auto__))
;
return ((function (switch__12102__auto__,c__12214__auto__){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_13063 = [null,null,null,null,null,null,null,null];
(statearr_13063[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_13063[(1)] = (1));

return statearr_13063;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_13042){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_13042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e13064){if((e13064 instanceof Object)){
var ex__12106__auto__ = e13064;
var statearr_13065_13085 = state_13042;
(statearr_13065_13085[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13086 = state_13042;
state_13042 = G__13086;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_13042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_13042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto__))
})();
var state__12216__auto__ = (function (){var statearr_13066 = f__12215__auto__.call(null);
(statearr_13066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto__);

return statearr_13066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto__))
);

return c__12214__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6404__auto__ = (((_ == null))?null:_);
var m__6405__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,_);
} else {
var m__6405__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6404__auto__ = (((m == null))?null:m);
var m__6405__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6405__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6404__auto__ = (((m == null))?null:m);
var m__6405__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,m,ch);
} else {
var m__6405__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6404__auto__ = (((m == null))?null:m);
var m__6405__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,m);
} else {
var m__6405__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13312 = (function (mult,ch,cs,meta13313){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13313 = meta13313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13314,meta13313__$1){
var self__ = this;
var _13314__$1 = this;
return (new cljs.core.async.t_cljs$core$async13312(self__.mult,self__.ch,self__.cs,meta13313__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13314){
var self__ = this;
var _13314__$1 = this;
return self__.meta13313;
});})(cs))
;

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13312.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13313","meta13313",-1639726482,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13312";

cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async13312");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13312 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13312(mult__$1,ch__$1,cs__$1,meta13313){
return (new cljs.core.async.t_cljs$core$async13312(mult__$1,ch__$1,cs__$1,meta13313));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13312(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12214__auto___13537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___13537,cs,m,dchan,dctr,done){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___13537,cs,m,dchan,dctr,done){
return (function (state_13449){
var state_val_13450 = (state_13449[(1)]);
if((state_val_13450 === (7))){
var inst_13445 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13451_13538 = state_13449__$1;
(statearr_13451_13538[(2)] = inst_13445);

(statearr_13451_13538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (20))){
var inst_13348 = (state_13449[(7)]);
var inst_13360 = cljs.core.first.call(null,inst_13348);
var inst_13361 = cljs.core.nth.call(null,inst_13360,(0),null);
var inst_13362 = cljs.core.nth.call(null,inst_13360,(1),null);
var state_13449__$1 = (function (){var statearr_13452 = state_13449;
(statearr_13452[(8)] = inst_13361);

return statearr_13452;
})();
if(cljs.core.truth_(inst_13362)){
var statearr_13453_13539 = state_13449__$1;
(statearr_13453_13539[(1)] = (22));

} else {
var statearr_13454_13540 = state_13449__$1;
(statearr_13454_13540[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (27))){
var inst_13397 = (state_13449[(9)]);
var inst_13317 = (state_13449[(10)]);
var inst_13390 = (state_13449[(11)]);
var inst_13392 = (state_13449[(12)]);
var inst_13397__$1 = cljs.core._nth.call(null,inst_13390,inst_13392);
var inst_13398 = cljs.core.async.put_BANG_.call(null,inst_13397__$1,inst_13317,done);
var state_13449__$1 = (function (){var statearr_13455 = state_13449;
(statearr_13455[(9)] = inst_13397__$1);

return statearr_13455;
})();
if(cljs.core.truth_(inst_13398)){
var statearr_13456_13541 = state_13449__$1;
(statearr_13456_13541[(1)] = (30));

} else {
var statearr_13457_13542 = state_13449__$1;
(statearr_13457_13542[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (1))){
var state_13449__$1 = state_13449;
var statearr_13458_13543 = state_13449__$1;
(statearr_13458_13543[(2)] = null);

(statearr_13458_13543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (24))){
var inst_13348 = (state_13449[(7)]);
var inst_13367 = (state_13449[(2)]);
var inst_13368 = cljs.core.next.call(null,inst_13348);
var inst_13326 = inst_13368;
var inst_13327 = null;
var inst_13328 = (0);
var inst_13329 = (0);
var state_13449__$1 = (function (){var statearr_13459 = state_13449;
(statearr_13459[(13)] = inst_13328);

(statearr_13459[(14)] = inst_13367);

(statearr_13459[(15)] = inst_13329);

(statearr_13459[(16)] = inst_13327);

(statearr_13459[(17)] = inst_13326);

return statearr_13459;
})();
var statearr_13460_13544 = state_13449__$1;
(statearr_13460_13544[(2)] = null);

(statearr_13460_13544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (39))){
var state_13449__$1 = state_13449;
var statearr_13464_13545 = state_13449__$1;
(statearr_13464_13545[(2)] = null);

(statearr_13464_13545[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (4))){
var inst_13317 = (state_13449[(10)]);
var inst_13317__$1 = (state_13449[(2)]);
var inst_13318 = (inst_13317__$1 == null);
var state_13449__$1 = (function (){var statearr_13465 = state_13449;
(statearr_13465[(10)] = inst_13317__$1);

return statearr_13465;
})();
if(cljs.core.truth_(inst_13318)){
var statearr_13466_13546 = state_13449__$1;
(statearr_13466_13546[(1)] = (5));

} else {
var statearr_13467_13547 = state_13449__$1;
(statearr_13467_13547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (15))){
var inst_13328 = (state_13449[(13)]);
var inst_13329 = (state_13449[(15)]);
var inst_13327 = (state_13449[(16)]);
var inst_13326 = (state_13449[(17)]);
var inst_13344 = (state_13449[(2)]);
var inst_13345 = (inst_13329 + (1));
var tmp13461 = inst_13328;
var tmp13462 = inst_13327;
var tmp13463 = inst_13326;
var inst_13326__$1 = tmp13463;
var inst_13327__$1 = tmp13462;
var inst_13328__$1 = tmp13461;
var inst_13329__$1 = inst_13345;
var state_13449__$1 = (function (){var statearr_13468 = state_13449;
(statearr_13468[(18)] = inst_13344);

(statearr_13468[(13)] = inst_13328__$1);

(statearr_13468[(15)] = inst_13329__$1);

(statearr_13468[(16)] = inst_13327__$1);

(statearr_13468[(17)] = inst_13326__$1);

return statearr_13468;
})();
var statearr_13469_13548 = state_13449__$1;
(statearr_13469_13548[(2)] = null);

(statearr_13469_13548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (21))){
var inst_13371 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13473_13549 = state_13449__$1;
(statearr_13473_13549[(2)] = inst_13371);

(statearr_13473_13549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (31))){
var inst_13397 = (state_13449[(9)]);
var inst_13401 = done.call(null,null);
var inst_13402 = cljs.core.async.untap_STAR_.call(null,m,inst_13397);
var state_13449__$1 = (function (){var statearr_13474 = state_13449;
(statearr_13474[(19)] = inst_13401);

return statearr_13474;
})();
var statearr_13475_13550 = state_13449__$1;
(statearr_13475_13550[(2)] = inst_13402);

(statearr_13475_13550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (32))){
var inst_13391 = (state_13449[(20)]);
var inst_13390 = (state_13449[(11)]);
var inst_13389 = (state_13449[(21)]);
var inst_13392 = (state_13449[(12)]);
var inst_13404 = (state_13449[(2)]);
var inst_13405 = (inst_13392 + (1));
var tmp13470 = inst_13391;
var tmp13471 = inst_13390;
var tmp13472 = inst_13389;
var inst_13389__$1 = tmp13472;
var inst_13390__$1 = tmp13471;
var inst_13391__$1 = tmp13470;
var inst_13392__$1 = inst_13405;
var state_13449__$1 = (function (){var statearr_13476 = state_13449;
(statearr_13476[(20)] = inst_13391__$1);

(statearr_13476[(22)] = inst_13404);

(statearr_13476[(11)] = inst_13390__$1);

(statearr_13476[(21)] = inst_13389__$1);

(statearr_13476[(12)] = inst_13392__$1);

return statearr_13476;
})();
var statearr_13477_13551 = state_13449__$1;
(statearr_13477_13551[(2)] = null);

(statearr_13477_13551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (40))){
var inst_13417 = (state_13449[(23)]);
var inst_13421 = done.call(null,null);
var inst_13422 = cljs.core.async.untap_STAR_.call(null,m,inst_13417);
var state_13449__$1 = (function (){var statearr_13478 = state_13449;
(statearr_13478[(24)] = inst_13421);

return statearr_13478;
})();
var statearr_13479_13552 = state_13449__$1;
(statearr_13479_13552[(2)] = inst_13422);

(statearr_13479_13552[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (33))){
var inst_13408 = (state_13449[(25)]);
var inst_13410 = cljs.core.chunked_seq_QMARK_.call(null,inst_13408);
var state_13449__$1 = state_13449;
if(inst_13410){
var statearr_13480_13553 = state_13449__$1;
(statearr_13480_13553[(1)] = (36));

} else {
var statearr_13481_13554 = state_13449__$1;
(statearr_13481_13554[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (13))){
var inst_13338 = (state_13449[(26)]);
var inst_13341 = cljs.core.async.close_BANG_.call(null,inst_13338);
var state_13449__$1 = state_13449;
var statearr_13482_13555 = state_13449__$1;
(statearr_13482_13555[(2)] = inst_13341);

(statearr_13482_13555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (22))){
var inst_13361 = (state_13449[(8)]);
var inst_13364 = cljs.core.async.close_BANG_.call(null,inst_13361);
var state_13449__$1 = state_13449;
var statearr_13483_13556 = state_13449__$1;
(statearr_13483_13556[(2)] = inst_13364);

(statearr_13483_13556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (36))){
var inst_13408 = (state_13449[(25)]);
var inst_13412 = cljs.core.chunk_first.call(null,inst_13408);
var inst_13413 = cljs.core.chunk_rest.call(null,inst_13408);
var inst_13414 = cljs.core.count.call(null,inst_13412);
var inst_13389 = inst_13413;
var inst_13390 = inst_13412;
var inst_13391 = inst_13414;
var inst_13392 = (0);
var state_13449__$1 = (function (){var statearr_13484 = state_13449;
(statearr_13484[(20)] = inst_13391);

(statearr_13484[(11)] = inst_13390);

(statearr_13484[(21)] = inst_13389);

(statearr_13484[(12)] = inst_13392);

return statearr_13484;
})();
var statearr_13485_13557 = state_13449__$1;
(statearr_13485_13557[(2)] = null);

(statearr_13485_13557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (41))){
var inst_13408 = (state_13449[(25)]);
var inst_13424 = (state_13449[(2)]);
var inst_13425 = cljs.core.next.call(null,inst_13408);
var inst_13389 = inst_13425;
var inst_13390 = null;
var inst_13391 = (0);
var inst_13392 = (0);
var state_13449__$1 = (function (){var statearr_13486 = state_13449;
(statearr_13486[(20)] = inst_13391);

(statearr_13486[(27)] = inst_13424);

(statearr_13486[(11)] = inst_13390);

(statearr_13486[(21)] = inst_13389);

(statearr_13486[(12)] = inst_13392);

return statearr_13486;
})();
var statearr_13487_13558 = state_13449__$1;
(statearr_13487_13558[(2)] = null);

(statearr_13487_13558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (43))){
var state_13449__$1 = state_13449;
var statearr_13488_13559 = state_13449__$1;
(statearr_13488_13559[(2)] = null);

(statearr_13488_13559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (29))){
var inst_13433 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13489_13560 = state_13449__$1;
(statearr_13489_13560[(2)] = inst_13433);

(statearr_13489_13560[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (44))){
var inst_13442 = (state_13449[(2)]);
var state_13449__$1 = (function (){var statearr_13490 = state_13449;
(statearr_13490[(28)] = inst_13442);

return statearr_13490;
})();
var statearr_13491_13561 = state_13449__$1;
(statearr_13491_13561[(2)] = null);

(statearr_13491_13561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (6))){
var inst_13381 = (state_13449[(29)]);
var inst_13380 = cljs.core.deref.call(null,cs);
var inst_13381__$1 = cljs.core.keys.call(null,inst_13380);
var inst_13382 = cljs.core.count.call(null,inst_13381__$1);
var inst_13383 = cljs.core.reset_BANG_.call(null,dctr,inst_13382);
var inst_13388 = cljs.core.seq.call(null,inst_13381__$1);
var inst_13389 = inst_13388;
var inst_13390 = null;
var inst_13391 = (0);
var inst_13392 = (0);
var state_13449__$1 = (function (){var statearr_13492 = state_13449;
(statearr_13492[(30)] = inst_13383);

(statearr_13492[(20)] = inst_13391);

(statearr_13492[(29)] = inst_13381__$1);

(statearr_13492[(11)] = inst_13390);

(statearr_13492[(21)] = inst_13389);

(statearr_13492[(12)] = inst_13392);

return statearr_13492;
})();
var statearr_13493_13562 = state_13449__$1;
(statearr_13493_13562[(2)] = null);

(statearr_13493_13562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (28))){
var inst_13408 = (state_13449[(25)]);
var inst_13389 = (state_13449[(21)]);
var inst_13408__$1 = cljs.core.seq.call(null,inst_13389);
var state_13449__$1 = (function (){var statearr_13494 = state_13449;
(statearr_13494[(25)] = inst_13408__$1);

return statearr_13494;
})();
if(inst_13408__$1){
var statearr_13495_13563 = state_13449__$1;
(statearr_13495_13563[(1)] = (33));

} else {
var statearr_13496_13564 = state_13449__$1;
(statearr_13496_13564[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (25))){
var inst_13391 = (state_13449[(20)]);
var inst_13392 = (state_13449[(12)]);
var inst_13394 = (inst_13392 < inst_13391);
var inst_13395 = inst_13394;
var state_13449__$1 = state_13449;
if(cljs.core.truth_(inst_13395)){
var statearr_13497_13565 = state_13449__$1;
(statearr_13497_13565[(1)] = (27));

} else {
var statearr_13498_13566 = state_13449__$1;
(statearr_13498_13566[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (34))){
var state_13449__$1 = state_13449;
var statearr_13499_13567 = state_13449__$1;
(statearr_13499_13567[(2)] = null);

(statearr_13499_13567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (17))){
var state_13449__$1 = state_13449;
var statearr_13500_13568 = state_13449__$1;
(statearr_13500_13568[(2)] = null);

(statearr_13500_13568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (3))){
var inst_13447 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13449__$1,inst_13447);
} else {
if((state_val_13450 === (12))){
var inst_13376 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13501_13569 = state_13449__$1;
(statearr_13501_13569[(2)] = inst_13376);

(statearr_13501_13569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (2))){
var state_13449__$1 = state_13449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13449__$1,(4),ch);
} else {
if((state_val_13450 === (23))){
var state_13449__$1 = state_13449;
var statearr_13502_13570 = state_13449__$1;
(statearr_13502_13570[(2)] = null);

(statearr_13502_13570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (35))){
var inst_13431 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13503_13571 = state_13449__$1;
(statearr_13503_13571[(2)] = inst_13431);

(statearr_13503_13571[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (19))){
var inst_13348 = (state_13449[(7)]);
var inst_13352 = cljs.core.chunk_first.call(null,inst_13348);
var inst_13353 = cljs.core.chunk_rest.call(null,inst_13348);
var inst_13354 = cljs.core.count.call(null,inst_13352);
var inst_13326 = inst_13353;
var inst_13327 = inst_13352;
var inst_13328 = inst_13354;
var inst_13329 = (0);
var state_13449__$1 = (function (){var statearr_13504 = state_13449;
(statearr_13504[(13)] = inst_13328);

(statearr_13504[(15)] = inst_13329);

(statearr_13504[(16)] = inst_13327);

(statearr_13504[(17)] = inst_13326);

return statearr_13504;
})();
var statearr_13505_13572 = state_13449__$1;
(statearr_13505_13572[(2)] = null);

(statearr_13505_13572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (11))){
var inst_13348 = (state_13449[(7)]);
var inst_13326 = (state_13449[(17)]);
var inst_13348__$1 = cljs.core.seq.call(null,inst_13326);
var state_13449__$1 = (function (){var statearr_13506 = state_13449;
(statearr_13506[(7)] = inst_13348__$1);

return statearr_13506;
})();
if(inst_13348__$1){
var statearr_13507_13573 = state_13449__$1;
(statearr_13507_13573[(1)] = (16));

} else {
var statearr_13508_13574 = state_13449__$1;
(statearr_13508_13574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (9))){
var inst_13378 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13509_13575 = state_13449__$1;
(statearr_13509_13575[(2)] = inst_13378);

(statearr_13509_13575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (5))){
var inst_13324 = cljs.core.deref.call(null,cs);
var inst_13325 = cljs.core.seq.call(null,inst_13324);
var inst_13326 = inst_13325;
var inst_13327 = null;
var inst_13328 = (0);
var inst_13329 = (0);
var state_13449__$1 = (function (){var statearr_13510 = state_13449;
(statearr_13510[(13)] = inst_13328);

(statearr_13510[(15)] = inst_13329);

(statearr_13510[(16)] = inst_13327);

(statearr_13510[(17)] = inst_13326);

return statearr_13510;
})();
var statearr_13511_13576 = state_13449__$1;
(statearr_13511_13576[(2)] = null);

(statearr_13511_13576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (14))){
var state_13449__$1 = state_13449;
var statearr_13512_13577 = state_13449__$1;
(statearr_13512_13577[(2)] = null);

(statearr_13512_13577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (45))){
var inst_13439 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13513_13578 = state_13449__$1;
(statearr_13513_13578[(2)] = inst_13439);

(statearr_13513_13578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (26))){
var inst_13381 = (state_13449[(29)]);
var inst_13435 = (state_13449[(2)]);
var inst_13436 = cljs.core.seq.call(null,inst_13381);
var state_13449__$1 = (function (){var statearr_13514 = state_13449;
(statearr_13514[(31)] = inst_13435);

return statearr_13514;
})();
if(inst_13436){
var statearr_13515_13579 = state_13449__$1;
(statearr_13515_13579[(1)] = (42));

} else {
var statearr_13516_13580 = state_13449__$1;
(statearr_13516_13580[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (16))){
var inst_13348 = (state_13449[(7)]);
var inst_13350 = cljs.core.chunked_seq_QMARK_.call(null,inst_13348);
var state_13449__$1 = state_13449;
if(inst_13350){
var statearr_13517_13581 = state_13449__$1;
(statearr_13517_13581[(1)] = (19));

} else {
var statearr_13518_13582 = state_13449__$1;
(statearr_13518_13582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (38))){
var inst_13428 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13519_13583 = state_13449__$1;
(statearr_13519_13583[(2)] = inst_13428);

(statearr_13519_13583[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (30))){
var state_13449__$1 = state_13449;
var statearr_13520_13584 = state_13449__$1;
(statearr_13520_13584[(2)] = null);

(statearr_13520_13584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (10))){
var inst_13329 = (state_13449[(15)]);
var inst_13327 = (state_13449[(16)]);
var inst_13337 = cljs.core._nth.call(null,inst_13327,inst_13329);
var inst_13338 = cljs.core.nth.call(null,inst_13337,(0),null);
var inst_13339 = cljs.core.nth.call(null,inst_13337,(1),null);
var state_13449__$1 = (function (){var statearr_13521 = state_13449;
(statearr_13521[(26)] = inst_13338);

return statearr_13521;
})();
if(cljs.core.truth_(inst_13339)){
var statearr_13522_13585 = state_13449__$1;
(statearr_13522_13585[(1)] = (13));

} else {
var statearr_13523_13586 = state_13449__$1;
(statearr_13523_13586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (18))){
var inst_13374 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13524_13587 = state_13449__$1;
(statearr_13524_13587[(2)] = inst_13374);

(statearr_13524_13587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (42))){
var state_13449__$1 = state_13449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13449__$1,(45),dchan);
} else {
if((state_val_13450 === (37))){
var inst_13408 = (state_13449[(25)]);
var inst_13317 = (state_13449[(10)]);
var inst_13417 = (state_13449[(23)]);
var inst_13417__$1 = cljs.core.first.call(null,inst_13408);
var inst_13418 = cljs.core.async.put_BANG_.call(null,inst_13417__$1,inst_13317,done);
var state_13449__$1 = (function (){var statearr_13525 = state_13449;
(statearr_13525[(23)] = inst_13417__$1);

return statearr_13525;
})();
if(cljs.core.truth_(inst_13418)){
var statearr_13526_13588 = state_13449__$1;
(statearr_13526_13588[(1)] = (39));

} else {
var statearr_13527_13589 = state_13449__$1;
(statearr_13527_13589[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (8))){
var inst_13328 = (state_13449[(13)]);
var inst_13329 = (state_13449[(15)]);
var inst_13331 = (inst_13329 < inst_13328);
var inst_13332 = inst_13331;
var state_13449__$1 = state_13449;
if(cljs.core.truth_(inst_13332)){
var statearr_13528_13590 = state_13449__$1;
(statearr_13528_13590[(1)] = (10));

} else {
var statearr_13529_13591 = state_13449__$1;
(statearr_13529_13591[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__12214__auto___13537,cs,m,dchan,dctr,done))
;
return ((function (switch__12102__auto__,c__12214__auto___13537,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12103__auto__ = null;
var cljs$core$async$mult_$_state_machine__12103__auto____0 = (function (){
var statearr_13533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13533[(0)] = cljs$core$async$mult_$_state_machine__12103__auto__);

(statearr_13533[(1)] = (1));

return statearr_13533;
});
var cljs$core$async$mult_$_state_machine__12103__auto____1 = (function (state_13449){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_13449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e13534){if((e13534 instanceof Object)){
var ex__12106__auto__ = e13534;
var statearr_13535_13592 = state_13449;
(statearr_13535_13592[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13593 = state_13449;
state_13449 = G__13593;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12103__auto__ = function(state_13449){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12103__auto____1.call(this,state_13449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12103__auto____0;
cljs$core$async$mult_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12103__auto____1;
return cljs$core$async$mult_$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___13537,cs,m,dchan,dctr,done))
})();
var state__12216__auto__ = (function (){var statearr_13536 = f__12215__auto__.call(null);
(statearr_13536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___13537);

return statearr_13536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___13537,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args13594 = [];
var len__6816__auto___13597 = arguments.length;
var i__6817__auto___13598 = (0);
while(true){
if((i__6817__auto___13598 < len__6816__auto___13597)){
args13594.push((arguments[i__6817__auto___13598]));

var G__13599 = (i__6817__auto___13598 + (1));
i__6817__auto___13598 = G__13599;
continue;
} else {
}
break;
}

var G__13596 = args13594.length;
switch (G__13596) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13594.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6404__auto__ = (((m == null))?null:m);
var m__6405__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,m,ch);
} else {
var m__6405__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6404__auto__ = (((m == null))?null:m);
var m__6405__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,m,ch);
} else {
var m__6405__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6404__auto__ = (((m == null))?null:m);
var m__6405__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,m);
} else {
var m__6405__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6404__auto__ = (((m == null))?null:m);
var m__6405__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,m,state_map);
} else {
var m__6405__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6404__auto__ = (((m == null))?null:m);
var m__6405__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,m,mode);
} else {
var m__6405__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6823__auto__ = [];
var len__6816__auto___13611 = arguments.length;
var i__6817__auto___13612 = (0);
while(true){
if((i__6817__auto___13612 < len__6816__auto___13611)){
args__6823__auto__.push((arguments[i__6817__auto___13612]));

var G__13613 = (i__6817__auto___13612 + (1));
i__6817__auto___13612 = G__13613;
continue;
} else {
}
break;
}

var argseq__6824__auto__ = ((((3) < args__6823__auto__.length))?(new cljs.core.IndexedSeq(args__6823__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6824__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13605){
var map__13606 = p__13605;
var map__13606__$1 = ((((!((map__13606 == null)))?((((map__13606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13606):map__13606);
var opts = map__13606__$1;
var statearr_13608_13614 = state;
(statearr_13608_13614[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13606,map__13606__$1,opts){
return (function (val){
var statearr_13609_13615 = state;
(statearr_13609_13615[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13606,map__13606__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13610_13616 = state;
(statearr_13610_13616[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13601){
var G__13602 = cljs.core.first.call(null,seq13601);
var seq13601__$1 = cljs.core.next.call(null,seq13601);
var G__13603 = cljs.core.first.call(null,seq13601__$1);
var seq13601__$2 = cljs.core.next.call(null,seq13601__$1);
var G__13604 = cljs.core.first.call(null,seq13601__$2);
var seq13601__$3 = cljs.core.next.call(null,seq13601__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13602,G__13603,G__13604,seq13601__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13782 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13783){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13783 = meta13783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13784,meta13783__$1){
var self__ = this;
var _13784__$1 = this;
return (new cljs.core.async.t_cljs$core$async13782(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13783__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13784){
var self__ = this;
var _13784__$1 = this;
return self__.meta13783;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13783","meta13783",430629562,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13782";

cljs.core.async.t_cljs$core$async13782.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async13782");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13782 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13782(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13783){
return (new cljs.core.async.t_cljs$core$async13782(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13783));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13782(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12214__auto___13947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___13947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___13947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13884){
var state_val_13885 = (state_13884[(1)]);
if((state_val_13885 === (7))){
var inst_13800 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
var statearr_13886_13948 = state_13884__$1;
(statearr_13886_13948[(2)] = inst_13800);

(statearr_13886_13948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (20))){
var inst_13812 = (state_13884[(7)]);
var state_13884__$1 = state_13884;
var statearr_13887_13949 = state_13884__$1;
(statearr_13887_13949[(2)] = inst_13812);

(statearr_13887_13949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (27))){
var state_13884__$1 = state_13884;
var statearr_13888_13950 = state_13884__$1;
(statearr_13888_13950[(2)] = null);

(statearr_13888_13950[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (1))){
var inst_13788 = (state_13884[(8)]);
var inst_13788__$1 = calc_state.call(null);
var inst_13790 = (inst_13788__$1 == null);
var inst_13791 = cljs.core.not.call(null,inst_13790);
var state_13884__$1 = (function (){var statearr_13889 = state_13884;
(statearr_13889[(8)] = inst_13788__$1);

return statearr_13889;
})();
if(inst_13791){
var statearr_13890_13951 = state_13884__$1;
(statearr_13890_13951[(1)] = (2));

} else {
var statearr_13891_13952 = state_13884__$1;
(statearr_13891_13952[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (24))){
var inst_13844 = (state_13884[(9)]);
var inst_13835 = (state_13884[(10)]);
var inst_13858 = (state_13884[(11)]);
var inst_13858__$1 = inst_13835.call(null,inst_13844);
var state_13884__$1 = (function (){var statearr_13892 = state_13884;
(statearr_13892[(11)] = inst_13858__$1);

return statearr_13892;
})();
if(cljs.core.truth_(inst_13858__$1)){
var statearr_13893_13953 = state_13884__$1;
(statearr_13893_13953[(1)] = (29));

} else {
var statearr_13894_13954 = state_13884__$1;
(statearr_13894_13954[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (4))){
var inst_13803 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
if(cljs.core.truth_(inst_13803)){
var statearr_13895_13955 = state_13884__$1;
(statearr_13895_13955[(1)] = (8));

} else {
var statearr_13896_13956 = state_13884__$1;
(statearr_13896_13956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (15))){
var inst_13829 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
if(cljs.core.truth_(inst_13829)){
var statearr_13897_13957 = state_13884__$1;
(statearr_13897_13957[(1)] = (19));

} else {
var statearr_13898_13958 = state_13884__$1;
(statearr_13898_13958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (21))){
var inst_13834 = (state_13884[(12)]);
var inst_13834__$1 = (state_13884[(2)]);
var inst_13835 = cljs.core.get.call(null,inst_13834__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13836 = cljs.core.get.call(null,inst_13834__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13837 = cljs.core.get.call(null,inst_13834__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13884__$1 = (function (){var statearr_13899 = state_13884;
(statearr_13899[(12)] = inst_13834__$1);

(statearr_13899[(13)] = inst_13836);

(statearr_13899[(10)] = inst_13835);

return statearr_13899;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13884__$1,(22),inst_13837);
} else {
if((state_val_13885 === (31))){
var inst_13866 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
if(cljs.core.truth_(inst_13866)){
var statearr_13900_13959 = state_13884__$1;
(statearr_13900_13959[(1)] = (32));

} else {
var statearr_13901_13960 = state_13884__$1;
(statearr_13901_13960[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (32))){
var inst_13843 = (state_13884[(14)]);
var state_13884__$1 = state_13884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13884__$1,(35),out,inst_13843);
} else {
if((state_val_13885 === (33))){
var inst_13834 = (state_13884[(12)]);
var inst_13812 = inst_13834;
var state_13884__$1 = (function (){var statearr_13902 = state_13884;
(statearr_13902[(7)] = inst_13812);

return statearr_13902;
})();
var statearr_13903_13961 = state_13884__$1;
(statearr_13903_13961[(2)] = null);

(statearr_13903_13961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (13))){
var inst_13812 = (state_13884[(7)]);
var inst_13819 = inst_13812.cljs$lang$protocol_mask$partition0$;
var inst_13820 = (inst_13819 & (64));
var inst_13821 = inst_13812.cljs$core$ISeq$;
var inst_13822 = (inst_13820) || (inst_13821);
var state_13884__$1 = state_13884;
if(cljs.core.truth_(inst_13822)){
var statearr_13904_13962 = state_13884__$1;
(statearr_13904_13962[(1)] = (16));

} else {
var statearr_13905_13963 = state_13884__$1;
(statearr_13905_13963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (22))){
var inst_13844 = (state_13884[(9)]);
var inst_13843 = (state_13884[(14)]);
var inst_13842 = (state_13884[(2)]);
var inst_13843__$1 = cljs.core.nth.call(null,inst_13842,(0),null);
var inst_13844__$1 = cljs.core.nth.call(null,inst_13842,(1),null);
var inst_13845 = (inst_13843__$1 == null);
var inst_13846 = cljs.core._EQ_.call(null,inst_13844__$1,change);
var inst_13847 = (inst_13845) || (inst_13846);
var state_13884__$1 = (function (){var statearr_13906 = state_13884;
(statearr_13906[(9)] = inst_13844__$1);

(statearr_13906[(14)] = inst_13843__$1);

return statearr_13906;
})();
if(cljs.core.truth_(inst_13847)){
var statearr_13907_13964 = state_13884__$1;
(statearr_13907_13964[(1)] = (23));

} else {
var statearr_13908_13965 = state_13884__$1;
(statearr_13908_13965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (36))){
var inst_13834 = (state_13884[(12)]);
var inst_13812 = inst_13834;
var state_13884__$1 = (function (){var statearr_13909 = state_13884;
(statearr_13909[(7)] = inst_13812);

return statearr_13909;
})();
var statearr_13910_13966 = state_13884__$1;
(statearr_13910_13966[(2)] = null);

(statearr_13910_13966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (29))){
var inst_13858 = (state_13884[(11)]);
var state_13884__$1 = state_13884;
var statearr_13911_13967 = state_13884__$1;
(statearr_13911_13967[(2)] = inst_13858);

(statearr_13911_13967[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (6))){
var state_13884__$1 = state_13884;
var statearr_13912_13968 = state_13884__$1;
(statearr_13912_13968[(2)] = false);

(statearr_13912_13968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (28))){
var inst_13854 = (state_13884[(2)]);
var inst_13855 = calc_state.call(null);
var inst_13812 = inst_13855;
var state_13884__$1 = (function (){var statearr_13913 = state_13884;
(statearr_13913[(7)] = inst_13812);

(statearr_13913[(15)] = inst_13854);

return statearr_13913;
})();
var statearr_13914_13969 = state_13884__$1;
(statearr_13914_13969[(2)] = null);

(statearr_13914_13969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (25))){
var inst_13880 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
var statearr_13915_13970 = state_13884__$1;
(statearr_13915_13970[(2)] = inst_13880);

(statearr_13915_13970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (34))){
var inst_13878 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
var statearr_13916_13971 = state_13884__$1;
(statearr_13916_13971[(2)] = inst_13878);

(statearr_13916_13971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (17))){
var state_13884__$1 = state_13884;
var statearr_13917_13972 = state_13884__$1;
(statearr_13917_13972[(2)] = false);

(statearr_13917_13972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (3))){
var state_13884__$1 = state_13884;
var statearr_13918_13973 = state_13884__$1;
(statearr_13918_13973[(2)] = false);

(statearr_13918_13973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (12))){
var inst_13882 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13884__$1,inst_13882);
} else {
if((state_val_13885 === (2))){
var inst_13788 = (state_13884[(8)]);
var inst_13793 = inst_13788.cljs$lang$protocol_mask$partition0$;
var inst_13794 = (inst_13793 & (64));
var inst_13795 = inst_13788.cljs$core$ISeq$;
var inst_13796 = (inst_13794) || (inst_13795);
var state_13884__$1 = state_13884;
if(cljs.core.truth_(inst_13796)){
var statearr_13919_13974 = state_13884__$1;
(statearr_13919_13974[(1)] = (5));

} else {
var statearr_13920_13975 = state_13884__$1;
(statearr_13920_13975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (23))){
var inst_13843 = (state_13884[(14)]);
var inst_13849 = (inst_13843 == null);
var state_13884__$1 = state_13884;
if(cljs.core.truth_(inst_13849)){
var statearr_13921_13976 = state_13884__$1;
(statearr_13921_13976[(1)] = (26));

} else {
var statearr_13922_13977 = state_13884__$1;
(statearr_13922_13977[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (35))){
var inst_13869 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
if(cljs.core.truth_(inst_13869)){
var statearr_13923_13978 = state_13884__$1;
(statearr_13923_13978[(1)] = (36));

} else {
var statearr_13924_13979 = state_13884__$1;
(statearr_13924_13979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (19))){
var inst_13812 = (state_13884[(7)]);
var inst_13831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13812);
var state_13884__$1 = state_13884;
var statearr_13925_13980 = state_13884__$1;
(statearr_13925_13980[(2)] = inst_13831);

(statearr_13925_13980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (11))){
var inst_13812 = (state_13884[(7)]);
var inst_13816 = (inst_13812 == null);
var inst_13817 = cljs.core.not.call(null,inst_13816);
var state_13884__$1 = state_13884;
if(inst_13817){
var statearr_13926_13981 = state_13884__$1;
(statearr_13926_13981[(1)] = (13));

} else {
var statearr_13927_13982 = state_13884__$1;
(statearr_13927_13982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (9))){
var inst_13788 = (state_13884[(8)]);
var state_13884__$1 = state_13884;
var statearr_13928_13983 = state_13884__$1;
(statearr_13928_13983[(2)] = inst_13788);

(statearr_13928_13983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (5))){
var state_13884__$1 = state_13884;
var statearr_13929_13984 = state_13884__$1;
(statearr_13929_13984[(2)] = true);

(statearr_13929_13984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (14))){
var state_13884__$1 = state_13884;
var statearr_13930_13985 = state_13884__$1;
(statearr_13930_13985[(2)] = false);

(statearr_13930_13985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (26))){
var inst_13844 = (state_13884[(9)]);
var inst_13851 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13844);
var state_13884__$1 = state_13884;
var statearr_13931_13986 = state_13884__$1;
(statearr_13931_13986[(2)] = inst_13851);

(statearr_13931_13986[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (16))){
var state_13884__$1 = state_13884;
var statearr_13932_13987 = state_13884__$1;
(statearr_13932_13987[(2)] = true);

(statearr_13932_13987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (38))){
var inst_13874 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
var statearr_13933_13988 = state_13884__$1;
(statearr_13933_13988[(2)] = inst_13874);

(statearr_13933_13988[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (30))){
var inst_13844 = (state_13884[(9)]);
var inst_13836 = (state_13884[(13)]);
var inst_13835 = (state_13884[(10)]);
var inst_13861 = cljs.core.empty_QMARK_.call(null,inst_13835);
var inst_13862 = inst_13836.call(null,inst_13844);
var inst_13863 = cljs.core.not.call(null,inst_13862);
var inst_13864 = (inst_13861) && (inst_13863);
var state_13884__$1 = state_13884;
var statearr_13934_13989 = state_13884__$1;
(statearr_13934_13989[(2)] = inst_13864);

(statearr_13934_13989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (10))){
var inst_13788 = (state_13884[(8)]);
var inst_13808 = (state_13884[(2)]);
var inst_13809 = cljs.core.get.call(null,inst_13808,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13810 = cljs.core.get.call(null,inst_13808,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13811 = cljs.core.get.call(null,inst_13808,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13812 = inst_13788;
var state_13884__$1 = (function (){var statearr_13935 = state_13884;
(statearr_13935[(16)] = inst_13809);

(statearr_13935[(17)] = inst_13810);

(statearr_13935[(18)] = inst_13811);

(statearr_13935[(7)] = inst_13812);

return statearr_13935;
})();
var statearr_13936_13990 = state_13884__$1;
(statearr_13936_13990[(2)] = null);

(statearr_13936_13990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (18))){
var inst_13826 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
var statearr_13937_13991 = state_13884__$1;
(statearr_13937_13991[(2)] = inst_13826);

(statearr_13937_13991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (37))){
var state_13884__$1 = state_13884;
var statearr_13938_13992 = state_13884__$1;
(statearr_13938_13992[(2)] = null);

(statearr_13938_13992[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (8))){
var inst_13788 = (state_13884[(8)]);
var inst_13805 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13788);
var state_13884__$1 = state_13884;
var statearr_13939_13993 = state_13884__$1;
(statearr_13939_13993[(2)] = inst_13805);

(statearr_13939_13993[(1)] = (10));


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
}
}
});})(c__12214__auto___13947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12102__auto__,c__12214__auto___13947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12103__auto__ = null;
var cljs$core$async$mix_$_state_machine__12103__auto____0 = (function (){
var statearr_13943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13943[(0)] = cljs$core$async$mix_$_state_machine__12103__auto__);

(statearr_13943[(1)] = (1));

return statearr_13943;
});
var cljs$core$async$mix_$_state_machine__12103__auto____1 = (function (state_13884){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_13884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e13944){if((e13944 instanceof Object)){
var ex__12106__auto__ = e13944;
var statearr_13945_13994 = state_13884;
(statearr_13945_13994[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13995 = state_13884;
state_13884 = G__13995;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12103__auto__ = function(state_13884){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12103__auto____1.call(this,state_13884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12103__auto____0;
cljs$core$async$mix_$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12103__auto____1;
return cljs$core$async$mix_$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___13947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12216__auto__ = (function (){var statearr_13946 = f__12215__auto__.call(null);
(statearr_13946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___13947);

return statearr_13946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___13947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6404__auto__ = (((p == null))?null:p);
var m__6405__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6405__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6404__auto__ = (((p == null))?null:p);
var m__6405__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,p,v,ch);
} else {
var m__6405__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13996 = [];
var len__6816__auto___13999 = arguments.length;
var i__6817__auto___14000 = (0);
while(true){
if((i__6817__auto___14000 < len__6816__auto___13999)){
args13996.push((arguments[i__6817__auto___14000]));

var G__14001 = (i__6817__auto___14000 + (1));
i__6817__auto___14000 = G__14001;
continue;
} else {
}
break;
}

var G__13998 = args13996.length;
switch (G__13998) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13996.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6404__auto__ = (((p == null))?null:p);
var m__6405__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,p);
} else {
var m__6405__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6404__auto__ = (((p == null))?null:p);
var m__6405__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6404__auto__)]);
if(!((m__6405__auto__ == null))){
return m__6405__auto__.call(null,p,v);
} else {
var m__6405__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6405__auto____$1 == null))){
return m__6405__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14004 = [];
var len__6816__auto___14129 = arguments.length;
var i__6817__auto___14130 = (0);
while(true){
if((i__6817__auto___14130 < len__6816__auto___14129)){
args14004.push((arguments[i__6817__auto___14130]));

var G__14131 = (i__6817__auto___14130 + (1));
i__6817__auto___14130 = G__14131;
continue;
} else {
}
break;
}

var G__14006 = args14004.length;
switch (G__14006) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14004.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5741__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5741__auto__)){
return or__5741__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5741__auto__,mults){
return (function (p1__14003_SHARP_){
if(cljs.core.truth_(p1__14003_SHARP_.call(null,topic))){
return p1__14003_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14003_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5741__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14007 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14008){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14008 = meta14008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14009,meta14008__$1){
var self__ = this;
var _14009__$1 = this;
return (new cljs.core.async.t_cljs$core$async14007(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14008__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14009){
var self__ = this;
var _14009__$1 = this;
return self__.meta14008;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14007.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14008","meta14008",-247051359,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14007";

cljs.core.async.t_cljs$core$async14007.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async14007");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14007 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14007(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14008){
return (new cljs.core.async.t_cljs$core$async14007(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14008));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14007(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12214__auto___14133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___14133,mults,ensure_mult,p){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___14133,mults,ensure_mult,p){
return (function (state_14081){
var state_val_14082 = (state_14081[(1)]);
if((state_val_14082 === (7))){
var inst_14077 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14083_14134 = state_14081__$1;
(statearr_14083_14134[(2)] = inst_14077);

(statearr_14083_14134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (20))){
var state_14081__$1 = state_14081;
var statearr_14084_14135 = state_14081__$1;
(statearr_14084_14135[(2)] = null);

(statearr_14084_14135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (1))){
var state_14081__$1 = state_14081;
var statearr_14085_14136 = state_14081__$1;
(statearr_14085_14136[(2)] = null);

(statearr_14085_14136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (24))){
var inst_14060 = (state_14081[(7)]);
var inst_14069 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14060);
var state_14081__$1 = state_14081;
var statearr_14086_14137 = state_14081__$1;
(statearr_14086_14137[(2)] = inst_14069);

(statearr_14086_14137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (4))){
var inst_14012 = (state_14081[(8)]);
var inst_14012__$1 = (state_14081[(2)]);
var inst_14013 = (inst_14012__$1 == null);
var state_14081__$1 = (function (){var statearr_14087 = state_14081;
(statearr_14087[(8)] = inst_14012__$1);

return statearr_14087;
})();
if(cljs.core.truth_(inst_14013)){
var statearr_14088_14138 = state_14081__$1;
(statearr_14088_14138[(1)] = (5));

} else {
var statearr_14089_14139 = state_14081__$1;
(statearr_14089_14139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (15))){
var inst_14054 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14090_14140 = state_14081__$1;
(statearr_14090_14140[(2)] = inst_14054);

(statearr_14090_14140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (21))){
var inst_14074 = (state_14081[(2)]);
var state_14081__$1 = (function (){var statearr_14091 = state_14081;
(statearr_14091[(9)] = inst_14074);

return statearr_14091;
})();
var statearr_14092_14141 = state_14081__$1;
(statearr_14092_14141[(2)] = null);

(statearr_14092_14141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (13))){
var inst_14036 = (state_14081[(10)]);
var inst_14038 = cljs.core.chunked_seq_QMARK_.call(null,inst_14036);
var state_14081__$1 = state_14081;
if(inst_14038){
var statearr_14093_14142 = state_14081__$1;
(statearr_14093_14142[(1)] = (16));

} else {
var statearr_14094_14143 = state_14081__$1;
(statearr_14094_14143[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (22))){
var inst_14066 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
if(cljs.core.truth_(inst_14066)){
var statearr_14095_14144 = state_14081__$1;
(statearr_14095_14144[(1)] = (23));

} else {
var statearr_14096_14145 = state_14081__$1;
(statearr_14096_14145[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (6))){
var inst_14062 = (state_14081[(11)]);
var inst_14012 = (state_14081[(8)]);
var inst_14060 = (state_14081[(7)]);
var inst_14060__$1 = topic_fn.call(null,inst_14012);
var inst_14061 = cljs.core.deref.call(null,mults);
var inst_14062__$1 = cljs.core.get.call(null,inst_14061,inst_14060__$1);
var state_14081__$1 = (function (){var statearr_14097 = state_14081;
(statearr_14097[(11)] = inst_14062__$1);

(statearr_14097[(7)] = inst_14060__$1);

return statearr_14097;
})();
if(cljs.core.truth_(inst_14062__$1)){
var statearr_14098_14146 = state_14081__$1;
(statearr_14098_14146[(1)] = (19));

} else {
var statearr_14099_14147 = state_14081__$1;
(statearr_14099_14147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (25))){
var inst_14071 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14100_14148 = state_14081__$1;
(statearr_14100_14148[(2)] = inst_14071);

(statearr_14100_14148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (17))){
var inst_14036 = (state_14081[(10)]);
var inst_14045 = cljs.core.first.call(null,inst_14036);
var inst_14046 = cljs.core.async.muxch_STAR_.call(null,inst_14045);
var inst_14047 = cljs.core.async.close_BANG_.call(null,inst_14046);
var inst_14048 = cljs.core.next.call(null,inst_14036);
var inst_14022 = inst_14048;
var inst_14023 = null;
var inst_14024 = (0);
var inst_14025 = (0);
var state_14081__$1 = (function (){var statearr_14101 = state_14081;
(statearr_14101[(12)] = inst_14022);

(statearr_14101[(13)] = inst_14023);

(statearr_14101[(14)] = inst_14024);

(statearr_14101[(15)] = inst_14047);

(statearr_14101[(16)] = inst_14025);

return statearr_14101;
})();
var statearr_14102_14149 = state_14081__$1;
(statearr_14102_14149[(2)] = null);

(statearr_14102_14149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (3))){
var inst_14079 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14081__$1,inst_14079);
} else {
if((state_val_14082 === (12))){
var inst_14056 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14103_14150 = state_14081__$1;
(statearr_14103_14150[(2)] = inst_14056);

(statearr_14103_14150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (2))){
var state_14081__$1 = state_14081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14081__$1,(4),ch);
} else {
if((state_val_14082 === (23))){
var state_14081__$1 = state_14081;
var statearr_14104_14151 = state_14081__$1;
(statearr_14104_14151[(2)] = null);

(statearr_14104_14151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (19))){
var inst_14062 = (state_14081[(11)]);
var inst_14012 = (state_14081[(8)]);
var inst_14064 = cljs.core.async.muxch_STAR_.call(null,inst_14062);
var state_14081__$1 = state_14081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14081__$1,(22),inst_14064,inst_14012);
} else {
if((state_val_14082 === (11))){
var inst_14022 = (state_14081[(12)]);
var inst_14036 = (state_14081[(10)]);
var inst_14036__$1 = cljs.core.seq.call(null,inst_14022);
var state_14081__$1 = (function (){var statearr_14105 = state_14081;
(statearr_14105[(10)] = inst_14036__$1);

return statearr_14105;
})();
if(inst_14036__$1){
var statearr_14106_14152 = state_14081__$1;
(statearr_14106_14152[(1)] = (13));

} else {
var statearr_14107_14153 = state_14081__$1;
(statearr_14107_14153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (9))){
var inst_14058 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14108_14154 = state_14081__$1;
(statearr_14108_14154[(2)] = inst_14058);

(statearr_14108_14154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (5))){
var inst_14019 = cljs.core.deref.call(null,mults);
var inst_14020 = cljs.core.vals.call(null,inst_14019);
var inst_14021 = cljs.core.seq.call(null,inst_14020);
var inst_14022 = inst_14021;
var inst_14023 = null;
var inst_14024 = (0);
var inst_14025 = (0);
var state_14081__$1 = (function (){var statearr_14109 = state_14081;
(statearr_14109[(12)] = inst_14022);

(statearr_14109[(13)] = inst_14023);

(statearr_14109[(14)] = inst_14024);

(statearr_14109[(16)] = inst_14025);

return statearr_14109;
})();
var statearr_14110_14155 = state_14081__$1;
(statearr_14110_14155[(2)] = null);

(statearr_14110_14155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (14))){
var state_14081__$1 = state_14081;
var statearr_14114_14156 = state_14081__$1;
(statearr_14114_14156[(2)] = null);

(statearr_14114_14156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (16))){
var inst_14036 = (state_14081[(10)]);
var inst_14040 = cljs.core.chunk_first.call(null,inst_14036);
var inst_14041 = cljs.core.chunk_rest.call(null,inst_14036);
var inst_14042 = cljs.core.count.call(null,inst_14040);
var inst_14022 = inst_14041;
var inst_14023 = inst_14040;
var inst_14024 = inst_14042;
var inst_14025 = (0);
var state_14081__$1 = (function (){var statearr_14115 = state_14081;
(statearr_14115[(12)] = inst_14022);

(statearr_14115[(13)] = inst_14023);

(statearr_14115[(14)] = inst_14024);

(statearr_14115[(16)] = inst_14025);

return statearr_14115;
})();
var statearr_14116_14157 = state_14081__$1;
(statearr_14116_14157[(2)] = null);

(statearr_14116_14157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (10))){
var inst_14022 = (state_14081[(12)]);
var inst_14023 = (state_14081[(13)]);
var inst_14024 = (state_14081[(14)]);
var inst_14025 = (state_14081[(16)]);
var inst_14030 = cljs.core._nth.call(null,inst_14023,inst_14025);
var inst_14031 = cljs.core.async.muxch_STAR_.call(null,inst_14030);
var inst_14032 = cljs.core.async.close_BANG_.call(null,inst_14031);
var inst_14033 = (inst_14025 + (1));
var tmp14111 = inst_14022;
var tmp14112 = inst_14023;
var tmp14113 = inst_14024;
var inst_14022__$1 = tmp14111;
var inst_14023__$1 = tmp14112;
var inst_14024__$1 = tmp14113;
var inst_14025__$1 = inst_14033;
var state_14081__$1 = (function (){var statearr_14117 = state_14081;
(statearr_14117[(12)] = inst_14022__$1);

(statearr_14117[(13)] = inst_14023__$1);

(statearr_14117[(14)] = inst_14024__$1);

(statearr_14117[(17)] = inst_14032);

(statearr_14117[(16)] = inst_14025__$1);

return statearr_14117;
})();
var statearr_14118_14158 = state_14081__$1;
(statearr_14118_14158[(2)] = null);

(statearr_14118_14158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (18))){
var inst_14051 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14119_14159 = state_14081__$1;
(statearr_14119_14159[(2)] = inst_14051);

(statearr_14119_14159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (8))){
var inst_14024 = (state_14081[(14)]);
var inst_14025 = (state_14081[(16)]);
var inst_14027 = (inst_14025 < inst_14024);
var inst_14028 = inst_14027;
var state_14081__$1 = state_14081;
if(cljs.core.truth_(inst_14028)){
var statearr_14120_14160 = state_14081__$1;
(statearr_14120_14160[(1)] = (10));

} else {
var statearr_14121_14161 = state_14081__$1;
(statearr_14121_14161[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__12214__auto___14133,mults,ensure_mult,p))
;
return ((function (switch__12102__auto__,c__12214__auto___14133,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_14125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14125[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_14125[(1)] = (1));

return statearr_14125;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_14081){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14126){if((e14126 instanceof Object)){
var ex__12106__auto__ = e14126;
var statearr_14127_14162 = state_14081;
(statearr_14127_14162[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14163 = state_14081;
state_14081 = G__14163;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_14081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_14081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___14133,mults,ensure_mult,p))
})();
var state__12216__auto__ = (function (){var statearr_14128 = f__12215__auto__.call(null);
(statearr_14128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___14133);

return statearr_14128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___14133,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14164 = [];
var len__6816__auto___14167 = arguments.length;
var i__6817__auto___14168 = (0);
while(true){
if((i__6817__auto___14168 < len__6816__auto___14167)){
args14164.push((arguments[i__6817__auto___14168]));

var G__14169 = (i__6817__auto___14168 + (1));
i__6817__auto___14168 = G__14169;
continue;
} else {
}
break;
}

var G__14166 = args14164.length;
switch (G__14166) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14164.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14171 = [];
var len__6816__auto___14174 = arguments.length;
var i__6817__auto___14175 = (0);
while(true){
if((i__6817__auto___14175 < len__6816__auto___14174)){
args14171.push((arguments[i__6817__auto___14175]));

var G__14176 = (i__6817__auto___14175 + (1));
i__6817__auto___14175 = G__14176;
continue;
} else {
}
break;
}

var G__14173 = args14171.length;
switch (G__14173) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14171.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args14178 = [];
var len__6816__auto___14249 = arguments.length;
var i__6817__auto___14250 = (0);
while(true){
if((i__6817__auto___14250 < len__6816__auto___14249)){
args14178.push((arguments[i__6817__auto___14250]));

var G__14251 = (i__6817__auto___14250 + (1));
i__6817__auto___14250 = G__14251;
continue;
} else {
}
break;
}

var G__14180 = args14178.length;
switch (G__14180) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14178.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12214__auto___14253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___14253,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___14253,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14219){
var state_val_14220 = (state_14219[(1)]);
if((state_val_14220 === (7))){
var state_14219__$1 = state_14219;
var statearr_14221_14254 = state_14219__$1;
(statearr_14221_14254[(2)] = null);

(statearr_14221_14254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (1))){
var state_14219__$1 = state_14219;
var statearr_14222_14255 = state_14219__$1;
(statearr_14222_14255[(2)] = null);

(statearr_14222_14255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (4))){
var inst_14183 = (state_14219[(7)]);
var inst_14185 = (inst_14183 < cnt);
var state_14219__$1 = state_14219;
if(cljs.core.truth_(inst_14185)){
var statearr_14223_14256 = state_14219__$1;
(statearr_14223_14256[(1)] = (6));

} else {
var statearr_14224_14257 = state_14219__$1;
(statearr_14224_14257[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (15))){
var inst_14215 = (state_14219[(2)]);
var state_14219__$1 = state_14219;
var statearr_14225_14258 = state_14219__$1;
(statearr_14225_14258[(2)] = inst_14215);

(statearr_14225_14258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (13))){
var inst_14208 = cljs.core.async.close_BANG_.call(null,out);
var state_14219__$1 = state_14219;
var statearr_14226_14259 = state_14219__$1;
(statearr_14226_14259[(2)] = inst_14208);

(statearr_14226_14259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (6))){
var state_14219__$1 = state_14219;
var statearr_14227_14260 = state_14219__$1;
(statearr_14227_14260[(2)] = null);

(statearr_14227_14260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (3))){
var inst_14217 = (state_14219[(2)]);
var state_14219__$1 = state_14219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14219__$1,inst_14217);
} else {
if((state_val_14220 === (12))){
var inst_14205 = (state_14219[(8)]);
var inst_14205__$1 = (state_14219[(2)]);
var inst_14206 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14205__$1);
var state_14219__$1 = (function (){var statearr_14228 = state_14219;
(statearr_14228[(8)] = inst_14205__$1);

return statearr_14228;
})();
if(cljs.core.truth_(inst_14206)){
var statearr_14229_14261 = state_14219__$1;
(statearr_14229_14261[(1)] = (13));

} else {
var statearr_14230_14262 = state_14219__$1;
(statearr_14230_14262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (2))){
var inst_14182 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14183 = (0);
var state_14219__$1 = (function (){var statearr_14231 = state_14219;
(statearr_14231[(9)] = inst_14182);

(statearr_14231[(7)] = inst_14183);

return statearr_14231;
})();
var statearr_14232_14263 = state_14219__$1;
(statearr_14232_14263[(2)] = null);

(statearr_14232_14263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (11))){
var inst_14183 = (state_14219[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14219,(10),Object,null,(9));
var inst_14192 = chs__$1.call(null,inst_14183);
var inst_14193 = done.call(null,inst_14183);
var inst_14194 = cljs.core.async.take_BANG_.call(null,inst_14192,inst_14193);
var state_14219__$1 = state_14219;
var statearr_14233_14264 = state_14219__$1;
(statearr_14233_14264[(2)] = inst_14194);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (9))){
var inst_14183 = (state_14219[(7)]);
var inst_14196 = (state_14219[(2)]);
var inst_14197 = (inst_14183 + (1));
var inst_14183__$1 = inst_14197;
var state_14219__$1 = (function (){var statearr_14234 = state_14219;
(statearr_14234[(10)] = inst_14196);

(statearr_14234[(7)] = inst_14183__$1);

return statearr_14234;
})();
var statearr_14235_14265 = state_14219__$1;
(statearr_14235_14265[(2)] = null);

(statearr_14235_14265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (5))){
var inst_14203 = (state_14219[(2)]);
var state_14219__$1 = (function (){var statearr_14236 = state_14219;
(statearr_14236[(11)] = inst_14203);

return statearr_14236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14219__$1,(12),dchan);
} else {
if((state_val_14220 === (14))){
var inst_14205 = (state_14219[(8)]);
var inst_14210 = cljs.core.apply.call(null,f,inst_14205);
var state_14219__$1 = state_14219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14219__$1,(16),out,inst_14210);
} else {
if((state_val_14220 === (16))){
var inst_14212 = (state_14219[(2)]);
var state_14219__$1 = (function (){var statearr_14237 = state_14219;
(statearr_14237[(12)] = inst_14212);

return statearr_14237;
})();
var statearr_14238_14266 = state_14219__$1;
(statearr_14238_14266[(2)] = null);

(statearr_14238_14266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (10))){
var inst_14187 = (state_14219[(2)]);
var inst_14188 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14219__$1 = (function (){var statearr_14239 = state_14219;
(statearr_14239[(13)] = inst_14187);

return statearr_14239;
})();
var statearr_14240_14267 = state_14219__$1;
(statearr_14240_14267[(2)] = inst_14188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14220 === (8))){
var inst_14201 = (state_14219[(2)]);
var state_14219__$1 = state_14219;
var statearr_14241_14268 = state_14219__$1;
(statearr_14241_14268[(2)] = inst_14201);

(statearr_14241_14268[(1)] = (5));


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
});})(c__12214__auto___14253,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12102__auto__,c__12214__auto___14253,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_14245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14245[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_14245[(1)] = (1));

return statearr_14245;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_14219){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14246){if((e14246 instanceof Object)){
var ex__12106__auto__ = e14246;
var statearr_14247_14269 = state_14219;
(statearr_14247_14269[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14270 = state_14219;
state_14219 = G__14270;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_14219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_14219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___14253,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12216__auto__ = (function (){var statearr_14248 = f__12215__auto__.call(null);
(statearr_14248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___14253);

return statearr_14248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___14253,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14272 = [];
var len__6816__auto___14330 = arguments.length;
var i__6817__auto___14331 = (0);
while(true){
if((i__6817__auto___14331 < len__6816__auto___14330)){
args14272.push((arguments[i__6817__auto___14331]));

var G__14332 = (i__6817__auto___14331 + (1));
i__6817__auto___14331 = G__14332;
continue;
} else {
}
break;
}

var G__14274 = args14272.length;
switch (G__14274) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14272.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12214__auto___14334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___14334,out){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___14334,out){
return (function (state_14306){
var state_val_14307 = (state_14306[(1)]);
if((state_val_14307 === (7))){
var inst_14286 = (state_14306[(7)]);
var inst_14285 = (state_14306[(8)]);
var inst_14285__$1 = (state_14306[(2)]);
var inst_14286__$1 = cljs.core.nth.call(null,inst_14285__$1,(0),null);
var inst_14287 = cljs.core.nth.call(null,inst_14285__$1,(1),null);
var inst_14288 = (inst_14286__$1 == null);
var state_14306__$1 = (function (){var statearr_14308 = state_14306;
(statearr_14308[(9)] = inst_14287);

(statearr_14308[(7)] = inst_14286__$1);

(statearr_14308[(8)] = inst_14285__$1);

return statearr_14308;
})();
if(cljs.core.truth_(inst_14288)){
var statearr_14309_14335 = state_14306__$1;
(statearr_14309_14335[(1)] = (8));

} else {
var statearr_14310_14336 = state_14306__$1;
(statearr_14310_14336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (1))){
var inst_14275 = cljs.core.vec.call(null,chs);
var inst_14276 = inst_14275;
var state_14306__$1 = (function (){var statearr_14311 = state_14306;
(statearr_14311[(10)] = inst_14276);

return statearr_14311;
})();
var statearr_14312_14337 = state_14306__$1;
(statearr_14312_14337[(2)] = null);

(statearr_14312_14337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (4))){
var inst_14276 = (state_14306[(10)]);
var state_14306__$1 = state_14306;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14306__$1,(7),inst_14276);
} else {
if((state_val_14307 === (6))){
var inst_14302 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14313_14338 = state_14306__$1;
(statearr_14313_14338[(2)] = inst_14302);

(statearr_14313_14338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (3))){
var inst_14304 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14306__$1,inst_14304);
} else {
if((state_val_14307 === (2))){
var inst_14276 = (state_14306[(10)]);
var inst_14278 = cljs.core.count.call(null,inst_14276);
var inst_14279 = (inst_14278 > (0));
var state_14306__$1 = state_14306;
if(cljs.core.truth_(inst_14279)){
var statearr_14315_14339 = state_14306__$1;
(statearr_14315_14339[(1)] = (4));

} else {
var statearr_14316_14340 = state_14306__$1;
(statearr_14316_14340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (11))){
var inst_14276 = (state_14306[(10)]);
var inst_14295 = (state_14306[(2)]);
var tmp14314 = inst_14276;
var inst_14276__$1 = tmp14314;
var state_14306__$1 = (function (){var statearr_14317 = state_14306;
(statearr_14317[(10)] = inst_14276__$1);

(statearr_14317[(11)] = inst_14295);

return statearr_14317;
})();
var statearr_14318_14341 = state_14306__$1;
(statearr_14318_14341[(2)] = null);

(statearr_14318_14341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (9))){
var inst_14286 = (state_14306[(7)]);
var state_14306__$1 = state_14306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14306__$1,(11),out,inst_14286);
} else {
if((state_val_14307 === (5))){
var inst_14300 = cljs.core.async.close_BANG_.call(null,out);
var state_14306__$1 = state_14306;
var statearr_14319_14342 = state_14306__$1;
(statearr_14319_14342[(2)] = inst_14300);

(statearr_14319_14342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (10))){
var inst_14298 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14320_14343 = state_14306__$1;
(statearr_14320_14343[(2)] = inst_14298);

(statearr_14320_14343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (8))){
var inst_14276 = (state_14306[(10)]);
var inst_14287 = (state_14306[(9)]);
var inst_14286 = (state_14306[(7)]);
var inst_14285 = (state_14306[(8)]);
var inst_14290 = (function (){var cs = inst_14276;
var vec__14281 = inst_14285;
var v = inst_14286;
var c = inst_14287;
return ((function (cs,vec__14281,v,c,inst_14276,inst_14287,inst_14286,inst_14285,state_val_14307,c__12214__auto___14334,out){
return (function (p1__14271_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14271_SHARP_);
});
;})(cs,vec__14281,v,c,inst_14276,inst_14287,inst_14286,inst_14285,state_val_14307,c__12214__auto___14334,out))
})();
var inst_14291 = cljs.core.filterv.call(null,inst_14290,inst_14276);
var inst_14276__$1 = inst_14291;
var state_14306__$1 = (function (){var statearr_14321 = state_14306;
(statearr_14321[(10)] = inst_14276__$1);

return statearr_14321;
})();
var statearr_14322_14344 = state_14306__$1;
(statearr_14322_14344[(2)] = null);

(statearr_14322_14344[(1)] = (2));


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
});})(c__12214__auto___14334,out))
;
return ((function (switch__12102__auto__,c__12214__auto___14334,out){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_14326 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14326[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_14326[(1)] = (1));

return statearr_14326;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_14306){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14327){if((e14327 instanceof Object)){
var ex__12106__auto__ = e14327;
var statearr_14328_14345 = state_14306;
(statearr_14328_14345[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14346 = state_14306;
state_14306 = G__14346;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_14306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_14306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___14334,out))
})();
var state__12216__auto__ = (function (){var statearr_14329 = f__12215__auto__.call(null);
(statearr_14329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___14334);

return statearr_14329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___14334,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args14347 = [];
var len__6816__auto___14396 = arguments.length;
var i__6817__auto___14397 = (0);
while(true){
if((i__6817__auto___14397 < len__6816__auto___14396)){
args14347.push((arguments[i__6817__auto___14397]));

var G__14398 = (i__6817__auto___14397 + (1));
i__6817__auto___14397 = G__14398;
continue;
} else {
}
break;
}

var G__14349 = args14347.length;
switch (G__14349) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14347.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12214__auto___14400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___14400,out){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___14400,out){
return (function (state_14373){
var state_val_14374 = (state_14373[(1)]);
if((state_val_14374 === (7))){
var inst_14355 = (state_14373[(7)]);
var inst_14355__$1 = (state_14373[(2)]);
var inst_14356 = (inst_14355__$1 == null);
var inst_14357 = cljs.core.not.call(null,inst_14356);
var state_14373__$1 = (function (){var statearr_14375 = state_14373;
(statearr_14375[(7)] = inst_14355__$1);

return statearr_14375;
})();
if(inst_14357){
var statearr_14376_14401 = state_14373__$1;
(statearr_14376_14401[(1)] = (8));

} else {
var statearr_14377_14402 = state_14373__$1;
(statearr_14377_14402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (1))){
var inst_14350 = (0);
var state_14373__$1 = (function (){var statearr_14378 = state_14373;
(statearr_14378[(8)] = inst_14350);

return statearr_14378;
})();
var statearr_14379_14403 = state_14373__$1;
(statearr_14379_14403[(2)] = null);

(statearr_14379_14403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (4))){
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14373__$1,(7),ch);
} else {
if((state_val_14374 === (6))){
var inst_14368 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
var statearr_14380_14404 = state_14373__$1;
(statearr_14380_14404[(2)] = inst_14368);

(statearr_14380_14404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (3))){
var inst_14370 = (state_14373[(2)]);
var inst_14371 = cljs.core.async.close_BANG_.call(null,out);
var state_14373__$1 = (function (){var statearr_14381 = state_14373;
(statearr_14381[(9)] = inst_14370);

return statearr_14381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14373__$1,inst_14371);
} else {
if((state_val_14374 === (2))){
var inst_14350 = (state_14373[(8)]);
var inst_14352 = (inst_14350 < n);
var state_14373__$1 = state_14373;
if(cljs.core.truth_(inst_14352)){
var statearr_14382_14405 = state_14373__$1;
(statearr_14382_14405[(1)] = (4));

} else {
var statearr_14383_14406 = state_14373__$1;
(statearr_14383_14406[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (11))){
var inst_14350 = (state_14373[(8)]);
var inst_14360 = (state_14373[(2)]);
var inst_14361 = (inst_14350 + (1));
var inst_14350__$1 = inst_14361;
var state_14373__$1 = (function (){var statearr_14384 = state_14373;
(statearr_14384[(8)] = inst_14350__$1);

(statearr_14384[(10)] = inst_14360);

return statearr_14384;
})();
var statearr_14385_14407 = state_14373__$1;
(statearr_14385_14407[(2)] = null);

(statearr_14385_14407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (9))){
var state_14373__$1 = state_14373;
var statearr_14386_14408 = state_14373__$1;
(statearr_14386_14408[(2)] = null);

(statearr_14386_14408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (5))){
var state_14373__$1 = state_14373;
var statearr_14387_14409 = state_14373__$1;
(statearr_14387_14409[(2)] = null);

(statearr_14387_14409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (10))){
var inst_14365 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
var statearr_14388_14410 = state_14373__$1;
(statearr_14388_14410[(2)] = inst_14365);

(statearr_14388_14410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14374 === (8))){
var inst_14355 = (state_14373[(7)]);
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14373__$1,(11),out,inst_14355);
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
});})(c__12214__auto___14400,out))
;
return ((function (switch__12102__auto__,c__12214__auto___14400,out){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_14392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14392[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_14392[(1)] = (1));

return statearr_14392;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_14373){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14393){if((e14393 instanceof Object)){
var ex__12106__auto__ = e14393;
var statearr_14394_14411 = state_14373;
(statearr_14394_14411[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14412 = state_14373;
state_14373 = G__14412;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_14373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_14373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___14400,out))
})();
var state__12216__auto__ = (function (){var statearr_14395 = f__12215__auto__.call(null);
(statearr_14395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___14400);

return statearr_14395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___14400,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14420 = (function (map_LT_,f,ch,meta14421){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14421 = meta14421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14422,meta14421__$1){
var self__ = this;
var _14422__$1 = this;
return (new cljs.core.async.t_cljs$core$async14420(self__.map_LT_,self__.f,self__.ch,meta14421__$1));
});

cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14422){
var self__ = this;
var _14422__$1 = this;
return self__.meta14421;
});

cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14423 = (function (map_LT_,f,ch,meta14421,_,fn1,meta14424){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14421 = meta14421;
this._ = _;
this.fn1 = fn1;
this.meta14424 = meta14424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14425,meta14424__$1){
var self__ = this;
var _14425__$1 = this;
return (new cljs.core.async.t_cljs$core$async14423(self__.map_LT_,self__.f,self__.ch,self__.meta14421,self__._,self__.fn1,meta14424__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14425){
var self__ = this;
var _14425__$1 = this;
return self__.meta14424;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14423.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14423.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14413_SHARP_){
return f1.call(null,(((p1__14413_SHARP_ == null))?null:self__.f.call(null,p1__14413_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14423.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14421","meta14421",-1679468893,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14420","cljs.core.async/t_cljs$core$async14420",730848778,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14424","meta14424",777021280,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14423";

cljs.core.async.t_cljs$core$async14423.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async14423");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14423 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14423(map_LT___$1,f__$1,ch__$1,meta14421__$1,___$2,fn1__$1,meta14424){
return (new cljs.core.async.t_cljs$core$async14423(map_LT___$1,f__$1,ch__$1,meta14421__$1,___$2,fn1__$1,meta14424));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14423(self__.map_LT_,self__.f,self__.ch,self__.meta14421,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5729__auto__ = ret;
if(cljs.core.truth_(and__5729__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5729__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14421","meta14421",-1679468893,null)], null);
});

cljs.core.async.t_cljs$core$async14420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14420";

cljs.core.async.t_cljs$core$async14420.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async14420");
});

cljs.core.async.__GT_t_cljs$core$async14420 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14420(map_LT___$1,f__$1,ch__$1,meta14421){
return (new cljs.core.async.t_cljs$core$async14420(map_LT___$1,f__$1,ch__$1,meta14421));
});

}

return (new cljs.core.async.t_cljs$core$async14420(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14429 = (function (map_GT_,f,ch,meta14430){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14430 = meta14430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14431,meta14430__$1){
var self__ = this;
var _14431__$1 = this;
return (new cljs.core.async.t_cljs$core$async14429(self__.map_GT_,self__.f,self__.ch,meta14430__$1));
});

cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14431){
var self__ = this;
var _14431__$1 = this;
return self__.meta14430;
});

cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14430","meta14430",-334716151,null)], null);
});

cljs.core.async.t_cljs$core$async14429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14429";

cljs.core.async.t_cljs$core$async14429.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async14429");
});

cljs.core.async.__GT_t_cljs$core$async14429 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14429(map_GT___$1,f__$1,ch__$1,meta14430){
return (new cljs.core.async.t_cljs$core$async14429(map_GT___$1,f__$1,ch__$1,meta14430));
});

}

return (new cljs.core.async.t_cljs$core$async14429(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14435 = (function (filter_GT_,p,ch,meta14436){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14436 = meta14436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14437,meta14436__$1){
var self__ = this;
var _14437__$1 = this;
return (new cljs.core.async.t_cljs$core$async14435(self__.filter_GT_,self__.p,self__.ch,meta14436__$1));
});

cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14437){
var self__ = this;
var _14437__$1 = this;
return self__.meta14436;
});

cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14436","meta14436",2028835139,null)], null);
});

cljs.core.async.t_cljs$core$async14435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14435";

cljs.core.async.t_cljs$core$async14435.cljs$lang$ctorPrWriter = (function (this__6347__auto__,writer__6348__auto__,opt__6349__auto__){
return cljs.core._write.call(null,writer__6348__auto__,"cljs.core.async/t_cljs$core$async14435");
});

cljs.core.async.__GT_t_cljs$core$async14435 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14435(filter_GT___$1,p__$1,ch__$1,meta14436){
return (new cljs.core.async.t_cljs$core$async14435(filter_GT___$1,p__$1,ch__$1,meta14436));
});

}

return (new cljs.core.async.t_cljs$core$async14435(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args14438 = [];
var len__6816__auto___14482 = arguments.length;
var i__6817__auto___14483 = (0);
while(true){
if((i__6817__auto___14483 < len__6816__auto___14482)){
args14438.push((arguments[i__6817__auto___14483]));

var G__14484 = (i__6817__auto___14483 + (1));
i__6817__auto___14483 = G__14484;
continue;
} else {
}
break;
}

var G__14440 = args14438.length;
switch (G__14440) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14438.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12214__auto___14486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___14486,out){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___14486,out){
return (function (state_14461){
var state_val_14462 = (state_14461[(1)]);
if((state_val_14462 === (7))){
var inst_14457 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
var statearr_14463_14487 = state_14461__$1;
(statearr_14463_14487[(2)] = inst_14457);

(statearr_14463_14487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (1))){
var state_14461__$1 = state_14461;
var statearr_14464_14488 = state_14461__$1;
(statearr_14464_14488[(2)] = null);

(statearr_14464_14488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (4))){
var inst_14443 = (state_14461[(7)]);
var inst_14443__$1 = (state_14461[(2)]);
var inst_14444 = (inst_14443__$1 == null);
var state_14461__$1 = (function (){var statearr_14465 = state_14461;
(statearr_14465[(7)] = inst_14443__$1);

return statearr_14465;
})();
if(cljs.core.truth_(inst_14444)){
var statearr_14466_14489 = state_14461__$1;
(statearr_14466_14489[(1)] = (5));

} else {
var statearr_14467_14490 = state_14461__$1;
(statearr_14467_14490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (6))){
var inst_14443 = (state_14461[(7)]);
var inst_14448 = p.call(null,inst_14443);
var state_14461__$1 = state_14461;
if(cljs.core.truth_(inst_14448)){
var statearr_14468_14491 = state_14461__$1;
(statearr_14468_14491[(1)] = (8));

} else {
var statearr_14469_14492 = state_14461__$1;
(statearr_14469_14492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (3))){
var inst_14459 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14461__$1,inst_14459);
} else {
if((state_val_14462 === (2))){
var state_14461__$1 = state_14461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14461__$1,(4),ch);
} else {
if((state_val_14462 === (11))){
var inst_14451 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
var statearr_14470_14493 = state_14461__$1;
(statearr_14470_14493[(2)] = inst_14451);

(statearr_14470_14493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (9))){
var state_14461__$1 = state_14461;
var statearr_14471_14494 = state_14461__$1;
(statearr_14471_14494[(2)] = null);

(statearr_14471_14494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (5))){
var inst_14446 = cljs.core.async.close_BANG_.call(null,out);
var state_14461__$1 = state_14461;
var statearr_14472_14495 = state_14461__$1;
(statearr_14472_14495[(2)] = inst_14446);

(statearr_14472_14495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (10))){
var inst_14454 = (state_14461[(2)]);
var state_14461__$1 = (function (){var statearr_14473 = state_14461;
(statearr_14473[(8)] = inst_14454);

return statearr_14473;
})();
var statearr_14474_14496 = state_14461__$1;
(statearr_14474_14496[(2)] = null);

(statearr_14474_14496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (8))){
var inst_14443 = (state_14461[(7)]);
var state_14461__$1 = state_14461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14461__$1,(11),out,inst_14443);
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
});})(c__12214__auto___14486,out))
;
return ((function (switch__12102__auto__,c__12214__auto___14486,out){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_14478 = [null,null,null,null,null,null,null,null,null];
(statearr_14478[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_14478[(1)] = (1));

return statearr_14478;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_14461){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14479){if((e14479 instanceof Object)){
var ex__12106__auto__ = e14479;
var statearr_14480_14497 = state_14461;
(statearr_14480_14497[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14498 = state_14461;
state_14461 = G__14498;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_14461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_14461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___14486,out))
})();
var state__12216__auto__ = (function (){var statearr_14481 = f__12215__auto__.call(null);
(statearr_14481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___14486);

return statearr_14481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___14486,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14499 = [];
var len__6816__auto___14502 = arguments.length;
var i__6817__auto___14503 = (0);
while(true){
if((i__6817__auto___14503 < len__6816__auto___14502)){
args14499.push((arguments[i__6817__auto___14503]));

var G__14504 = (i__6817__auto___14503 + (1));
i__6817__auto___14503 = G__14504;
continue;
} else {
}
break;
}

var G__14501 = args14499.length;
switch (G__14501) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14499.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto__){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto__){
return (function (state_14671){
var state_val_14672 = (state_14671[(1)]);
if((state_val_14672 === (7))){
var inst_14667 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14673_14714 = state_14671__$1;
(statearr_14673_14714[(2)] = inst_14667);

(statearr_14673_14714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (20))){
var inst_14637 = (state_14671[(7)]);
var inst_14648 = (state_14671[(2)]);
var inst_14649 = cljs.core.next.call(null,inst_14637);
var inst_14623 = inst_14649;
var inst_14624 = null;
var inst_14625 = (0);
var inst_14626 = (0);
var state_14671__$1 = (function (){var statearr_14674 = state_14671;
(statearr_14674[(8)] = inst_14624);

(statearr_14674[(9)] = inst_14626);

(statearr_14674[(10)] = inst_14623);

(statearr_14674[(11)] = inst_14625);

(statearr_14674[(12)] = inst_14648);

return statearr_14674;
})();
var statearr_14675_14715 = state_14671__$1;
(statearr_14675_14715[(2)] = null);

(statearr_14675_14715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (1))){
var state_14671__$1 = state_14671;
var statearr_14676_14716 = state_14671__$1;
(statearr_14676_14716[(2)] = null);

(statearr_14676_14716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (4))){
var inst_14612 = (state_14671[(13)]);
var inst_14612__$1 = (state_14671[(2)]);
var inst_14613 = (inst_14612__$1 == null);
var state_14671__$1 = (function (){var statearr_14677 = state_14671;
(statearr_14677[(13)] = inst_14612__$1);

return statearr_14677;
})();
if(cljs.core.truth_(inst_14613)){
var statearr_14678_14717 = state_14671__$1;
(statearr_14678_14717[(1)] = (5));

} else {
var statearr_14679_14718 = state_14671__$1;
(statearr_14679_14718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (15))){
var state_14671__$1 = state_14671;
var statearr_14683_14719 = state_14671__$1;
(statearr_14683_14719[(2)] = null);

(statearr_14683_14719[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (21))){
var state_14671__$1 = state_14671;
var statearr_14684_14720 = state_14671__$1;
(statearr_14684_14720[(2)] = null);

(statearr_14684_14720[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (13))){
var inst_14624 = (state_14671[(8)]);
var inst_14626 = (state_14671[(9)]);
var inst_14623 = (state_14671[(10)]);
var inst_14625 = (state_14671[(11)]);
var inst_14633 = (state_14671[(2)]);
var inst_14634 = (inst_14626 + (1));
var tmp14680 = inst_14624;
var tmp14681 = inst_14623;
var tmp14682 = inst_14625;
var inst_14623__$1 = tmp14681;
var inst_14624__$1 = tmp14680;
var inst_14625__$1 = tmp14682;
var inst_14626__$1 = inst_14634;
var state_14671__$1 = (function (){var statearr_14685 = state_14671;
(statearr_14685[(8)] = inst_14624__$1);

(statearr_14685[(9)] = inst_14626__$1);

(statearr_14685[(10)] = inst_14623__$1);

(statearr_14685[(14)] = inst_14633);

(statearr_14685[(11)] = inst_14625__$1);

return statearr_14685;
})();
var statearr_14686_14721 = state_14671__$1;
(statearr_14686_14721[(2)] = null);

(statearr_14686_14721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (22))){
var state_14671__$1 = state_14671;
var statearr_14687_14722 = state_14671__$1;
(statearr_14687_14722[(2)] = null);

(statearr_14687_14722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (6))){
var inst_14612 = (state_14671[(13)]);
var inst_14621 = f.call(null,inst_14612);
var inst_14622 = cljs.core.seq.call(null,inst_14621);
var inst_14623 = inst_14622;
var inst_14624 = null;
var inst_14625 = (0);
var inst_14626 = (0);
var state_14671__$1 = (function (){var statearr_14688 = state_14671;
(statearr_14688[(8)] = inst_14624);

(statearr_14688[(9)] = inst_14626);

(statearr_14688[(10)] = inst_14623);

(statearr_14688[(11)] = inst_14625);

return statearr_14688;
})();
var statearr_14689_14723 = state_14671__$1;
(statearr_14689_14723[(2)] = null);

(statearr_14689_14723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (17))){
var inst_14637 = (state_14671[(7)]);
var inst_14641 = cljs.core.chunk_first.call(null,inst_14637);
var inst_14642 = cljs.core.chunk_rest.call(null,inst_14637);
var inst_14643 = cljs.core.count.call(null,inst_14641);
var inst_14623 = inst_14642;
var inst_14624 = inst_14641;
var inst_14625 = inst_14643;
var inst_14626 = (0);
var state_14671__$1 = (function (){var statearr_14690 = state_14671;
(statearr_14690[(8)] = inst_14624);

(statearr_14690[(9)] = inst_14626);

(statearr_14690[(10)] = inst_14623);

(statearr_14690[(11)] = inst_14625);

return statearr_14690;
})();
var statearr_14691_14724 = state_14671__$1;
(statearr_14691_14724[(2)] = null);

(statearr_14691_14724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (3))){
var inst_14669 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14671__$1,inst_14669);
} else {
if((state_val_14672 === (12))){
var inst_14657 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14692_14725 = state_14671__$1;
(statearr_14692_14725[(2)] = inst_14657);

(statearr_14692_14725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (2))){
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14671__$1,(4),in$);
} else {
if((state_val_14672 === (23))){
var inst_14665 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14693_14726 = state_14671__$1;
(statearr_14693_14726[(2)] = inst_14665);

(statearr_14693_14726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (19))){
var inst_14652 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14694_14727 = state_14671__$1;
(statearr_14694_14727[(2)] = inst_14652);

(statearr_14694_14727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (11))){
var inst_14623 = (state_14671[(10)]);
var inst_14637 = (state_14671[(7)]);
var inst_14637__$1 = cljs.core.seq.call(null,inst_14623);
var state_14671__$1 = (function (){var statearr_14695 = state_14671;
(statearr_14695[(7)] = inst_14637__$1);

return statearr_14695;
})();
if(inst_14637__$1){
var statearr_14696_14728 = state_14671__$1;
(statearr_14696_14728[(1)] = (14));

} else {
var statearr_14697_14729 = state_14671__$1;
(statearr_14697_14729[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (9))){
var inst_14659 = (state_14671[(2)]);
var inst_14660 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14671__$1 = (function (){var statearr_14698 = state_14671;
(statearr_14698[(15)] = inst_14659);

return statearr_14698;
})();
if(cljs.core.truth_(inst_14660)){
var statearr_14699_14730 = state_14671__$1;
(statearr_14699_14730[(1)] = (21));

} else {
var statearr_14700_14731 = state_14671__$1;
(statearr_14700_14731[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (5))){
var inst_14615 = cljs.core.async.close_BANG_.call(null,out);
var state_14671__$1 = state_14671;
var statearr_14701_14732 = state_14671__$1;
(statearr_14701_14732[(2)] = inst_14615);

(statearr_14701_14732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (14))){
var inst_14637 = (state_14671[(7)]);
var inst_14639 = cljs.core.chunked_seq_QMARK_.call(null,inst_14637);
var state_14671__$1 = state_14671;
if(inst_14639){
var statearr_14702_14733 = state_14671__$1;
(statearr_14702_14733[(1)] = (17));

} else {
var statearr_14703_14734 = state_14671__$1;
(statearr_14703_14734[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (16))){
var inst_14655 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14704_14735 = state_14671__$1;
(statearr_14704_14735[(2)] = inst_14655);

(statearr_14704_14735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (10))){
var inst_14624 = (state_14671[(8)]);
var inst_14626 = (state_14671[(9)]);
var inst_14631 = cljs.core._nth.call(null,inst_14624,inst_14626);
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14671__$1,(13),out,inst_14631);
} else {
if((state_val_14672 === (18))){
var inst_14637 = (state_14671[(7)]);
var inst_14646 = cljs.core.first.call(null,inst_14637);
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14671__$1,(20),out,inst_14646);
} else {
if((state_val_14672 === (8))){
var inst_14626 = (state_14671[(9)]);
var inst_14625 = (state_14671[(11)]);
var inst_14628 = (inst_14626 < inst_14625);
var inst_14629 = inst_14628;
var state_14671__$1 = state_14671;
if(cljs.core.truth_(inst_14629)){
var statearr_14705_14736 = state_14671__$1;
(statearr_14705_14736[(1)] = (10));

} else {
var statearr_14706_14737 = state_14671__$1;
(statearr_14706_14737[(1)] = (11));

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
}
}
}
}
}
});})(c__12214__auto__))
;
return ((function (switch__12102__auto__,c__12214__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12103__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12103__auto____0 = (function (){
var statearr_14710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14710[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12103__auto__);

(statearr_14710[(1)] = (1));

return statearr_14710;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12103__auto____1 = (function (state_14671){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14711){if((e14711 instanceof Object)){
var ex__12106__auto__ = e14711;
var statearr_14712_14738 = state_14671;
(statearr_14712_14738[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14739 = state_14671;
state_14671 = G__14739;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12103__auto__ = function(state_14671){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12103__auto____1.call(this,state_14671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12103__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12103__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto__))
})();
var state__12216__auto__ = (function (){var statearr_14713 = f__12215__auto__.call(null);
(statearr_14713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto__);

return statearr_14713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto__))
);

return c__12214__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14740 = [];
var len__6816__auto___14743 = arguments.length;
var i__6817__auto___14744 = (0);
while(true){
if((i__6817__auto___14744 < len__6816__auto___14743)){
args14740.push((arguments[i__6817__auto___14744]));

var G__14745 = (i__6817__auto___14744 + (1));
i__6817__auto___14744 = G__14745;
continue;
} else {
}
break;
}

var G__14742 = args14740.length;
switch (G__14742) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14740.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args14747 = [];
var len__6816__auto___14750 = arguments.length;
var i__6817__auto___14751 = (0);
while(true){
if((i__6817__auto___14751 < len__6816__auto___14750)){
args14747.push((arguments[i__6817__auto___14751]));

var G__14752 = (i__6817__auto___14751 + (1));
i__6817__auto___14751 = G__14752;
continue;
} else {
}
break;
}

var G__14749 = args14747.length;
switch (G__14749) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14747.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args14754 = [];
var len__6816__auto___14805 = arguments.length;
var i__6817__auto___14806 = (0);
while(true){
if((i__6817__auto___14806 < len__6816__auto___14805)){
args14754.push((arguments[i__6817__auto___14806]));

var G__14807 = (i__6817__auto___14806 + (1));
i__6817__auto___14806 = G__14807;
continue;
} else {
}
break;
}

var G__14756 = args14754.length;
switch (G__14756) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14754.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12214__auto___14809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___14809,out){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___14809,out){
return (function (state_14780){
var state_val_14781 = (state_14780[(1)]);
if((state_val_14781 === (7))){
var inst_14775 = (state_14780[(2)]);
var state_14780__$1 = state_14780;
var statearr_14782_14810 = state_14780__$1;
(statearr_14782_14810[(2)] = inst_14775);

(statearr_14782_14810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (1))){
var inst_14757 = null;
var state_14780__$1 = (function (){var statearr_14783 = state_14780;
(statearr_14783[(7)] = inst_14757);

return statearr_14783;
})();
var statearr_14784_14811 = state_14780__$1;
(statearr_14784_14811[(2)] = null);

(statearr_14784_14811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (4))){
var inst_14760 = (state_14780[(8)]);
var inst_14760__$1 = (state_14780[(2)]);
var inst_14761 = (inst_14760__$1 == null);
var inst_14762 = cljs.core.not.call(null,inst_14761);
var state_14780__$1 = (function (){var statearr_14785 = state_14780;
(statearr_14785[(8)] = inst_14760__$1);

return statearr_14785;
})();
if(inst_14762){
var statearr_14786_14812 = state_14780__$1;
(statearr_14786_14812[(1)] = (5));

} else {
var statearr_14787_14813 = state_14780__$1;
(statearr_14787_14813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (6))){
var state_14780__$1 = state_14780;
var statearr_14788_14814 = state_14780__$1;
(statearr_14788_14814[(2)] = null);

(statearr_14788_14814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (3))){
var inst_14777 = (state_14780[(2)]);
var inst_14778 = cljs.core.async.close_BANG_.call(null,out);
var state_14780__$1 = (function (){var statearr_14789 = state_14780;
(statearr_14789[(9)] = inst_14777);

return statearr_14789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14780__$1,inst_14778);
} else {
if((state_val_14781 === (2))){
var state_14780__$1 = state_14780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14780__$1,(4),ch);
} else {
if((state_val_14781 === (11))){
var inst_14760 = (state_14780[(8)]);
var inst_14769 = (state_14780[(2)]);
var inst_14757 = inst_14760;
var state_14780__$1 = (function (){var statearr_14790 = state_14780;
(statearr_14790[(10)] = inst_14769);

(statearr_14790[(7)] = inst_14757);

return statearr_14790;
})();
var statearr_14791_14815 = state_14780__$1;
(statearr_14791_14815[(2)] = null);

(statearr_14791_14815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (9))){
var inst_14760 = (state_14780[(8)]);
var state_14780__$1 = state_14780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14780__$1,(11),out,inst_14760);
} else {
if((state_val_14781 === (5))){
var inst_14760 = (state_14780[(8)]);
var inst_14757 = (state_14780[(7)]);
var inst_14764 = cljs.core._EQ_.call(null,inst_14760,inst_14757);
var state_14780__$1 = state_14780;
if(inst_14764){
var statearr_14793_14816 = state_14780__$1;
(statearr_14793_14816[(1)] = (8));

} else {
var statearr_14794_14817 = state_14780__$1;
(statearr_14794_14817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (10))){
var inst_14772 = (state_14780[(2)]);
var state_14780__$1 = state_14780;
var statearr_14795_14818 = state_14780__$1;
(statearr_14795_14818[(2)] = inst_14772);

(statearr_14795_14818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (8))){
var inst_14757 = (state_14780[(7)]);
var tmp14792 = inst_14757;
var inst_14757__$1 = tmp14792;
var state_14780__$1 = (function (){var statearr_14796 = state_14780;
(statearr_14796[(7)] = inst_14757__$1);

return statearr_14796;
})();
var statearr_14797_14819 = state_14780__$1;
(statearr_14797_14819[(2)] = null);

(statearr_14797_14819[(1)] = (2));


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
});})(c__12214__auto___14809,out))
;
return ((function (switch__12102__auto__,c__12214__auto___14809,out){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_14801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14801[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_14801[(1)] = (1));

return statearr_14801;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_14780){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14802){if((e14802 instanceof Object)){
var ex__12106__auto__ = e14802;
var statearr_14803_14820 = state_14780;
(statearr_14803_14820[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14821 = state_14780;
state_14780 = G__14821;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_14780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_14780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___14809,out))
})();
var state__12216__auto__ = (function (){var statearr_14804 = f__12215__auto__.call(null);
(statearr_14804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___14809);

return statearr_14804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___14809,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14822 = [];
var len__6816__auto___14892 = arguments.length;
var i__6817__auto___14893 = (0);
while(true){
if((i__6817__auto___14893 < len__6816__auto___14892)){
args14822.push((arguments[i__6817__auto___14893]));

var G__14894 = (i__6817__auto___14893 + (1));
i__6817__auto___14893 = G__14894;
continue;
} else {
}
break;
}

var G__14824 = args14822.length;
switch (G__14824) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14822.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12214__auto___14896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___14896,out){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___14896,out){
return (function (state_14862){
var state_val_14863 = (state_14862[(1)]);
if((state_val_14863 === (7))){
var inst_14858 = (state_14862[(2)]);
var state_14862__$1 = state_14862;
var statearr_14864_14897 = state_14862__$1;
(statearr_14864_14897[(2)] = inst_14858);

(statearr_14864_14897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (1))){
var inst_14825 = (new Array(n));
var inst_14826 = inst_14825;
var inst_14827 = (0);
var state_14862__$1 = (function (){var statearr_14865 = state_14862;
(statearr_14865[(7)] = inst_14827);

(statearr_14865[(8)] = inst_14826);

return statearr_14865;
})();
var statearr_14866_14898 = state_14862__$1;
(statearr_14866_14898[(2)] = null);

(statearr_14866_14898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (4))){
var inst_14830 = (state_14862[(9)]);
var inst_14830__$1 = (state_14862[(2)]);
var inst_14831 = (inst_14830__$1 == null);
var inst_14832 = cljs.core.not.call(null,inst_14831);
var state_14862__$1 = (function (){var statearr_14867 = state_14862;
(statearr_14867[(9)] = inst_14830__$1);

return statearr_14867;
})();
if(inst_14832){
var statearr_14868_14899 = state_14862__$1;
(statearr_14868_14899[(1)] = (5));

} else {
var statearr_14869_14900 = state_14862__$1;
(statearr_14869_14900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (15))){
var inst_14852 = (state_14862[(2)]);
var state_14862__$1 = state_14862;
var statearr_14870_14901 = state_14862__$1;
(statearr_14870_14901[(2)] = inst_14852);

(statearr_14870_14901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (13))){
var state_14862__$1 = state_14862;
var statearr_14871_14902 = state_14862__$1;
(statearr_14871_14902[(2)] = null);

(statearr_14871_14902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (6))){
var inst_14827 = (state_14862[(7)]);
var inst_14848 = (inst_14827 > (0));
var state_14862__$1 = state_14862;
if(cljs.core.truth_(inst_14848)){
var statearr_14872_14903 = state_14862__$1;
(statearr_14872_14903[(1)] = (12));

} else {
var statearr_14873_14904 = state_14862__$1;
(statearr_14873_14904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (3))){
var inst_14860 = (state_14862[(2)]);
var state_14862__$1 = state_14862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14862__$1,inst_14860);
} else {
if((state_val_14863 === (12))){
var inst_14826 = (state_14862[(8)]);
var inst_14850 = cljs.core.vec.call(null,inst_14826);
var state_14862__$1 = state_14862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14862__$1,(15),out,inst_14850);
} else {
if((state_val_14863 === (2))){
var state_14862__$1 = state_14862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14862__$1,(4),ch);
} else {
if((state_val_14863 === (11))){
var inst_14842 = (state_14862[(2)]);
var inst_14843 = (new Array(n));
var inst_14826 = inst_14843;
var inst_14827 = (0);
var state_14862__$1 = (function (){var statearr_14874 = state_14862;
(statearr_14874[(7)] = inst_14827);

(statearr_14874[(8)] = inst_14826);

(statearr_14874[(10)] = inst_14842);

return statearr_14874;
})();
var statearr_14875_14905 = state_14862__$1;
(statearr_14875_14905[(2)] = null);

(statearr_14875_14905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (9))){
var inst_14826 = (state_14862[(8)]);
var inst_14840 = cljs.core.vec.call(null,inst_14826);
var state_14862__$1 = state_14862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14862__$1,(11),out,inst_14840);
} else {
if((state_val_14863 === (5))){
var inst_14835 = (state_14862[(11)]);
var inst_14827 = (state_14862[(7)]);
var inst_14830 = (state_14862[(9)]);
var inst_14826 = (state_14862[(8)]);
var inst_14834 = (inst_14826[inst_14827] = inst_14830);
var inst_14835__$1 = (inst_14827 + (1));
var inst_14836 = (inst_14835__$1 < n);
var state_14862__$1 = (function (){var statearr_14876 = state_14862;
(statearr_14876[(11)] = inst_14835__$1);

(statearr_14876[(12)] = inst_14834);

return statearr_14876;
})();
if(cljs.core.truth_(inst_14836)){
var statearr_14877_14906 = state_14862__$1;
(statearr_14877_14906[(1)] = (8));

} else {
var statearr_14878_14907 = state_14862__$1;
(statearr_14878_14907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (14))){
var inst_14855 = (state_14862[(2)]);
var inst_14856 = cljs.core.async.close_BANG_.call(null,out);
var state_14862__$1 = (function (){var statearr_14880 = state_14862;
(statearr_14880[(13)] = inst_14855);

return statearr_14880;
})();
var statearr_14881_14908 = state_14862__$1;
(statearr_14881_14908[(2)] = inst_14856);

(statearr_14881_14908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (10))){
var inst_14846 = (state_14862[(2)]);
var state_14862__$1 = state_14862;
var statearr_14882_14909 = state_14862__$1;
(statearr_14882_14909[(2)] = inst_14846);

(statearr_14882_14909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14863 === (8))){
var inst_14835 = (state_14862[(11)]);
var inst_14826 = (state_14862[(8)]);
var tmp14879 = inst_14826;
var inst_14826__$1 = tmp14879;
var inst_14827 = inst_14835;
var state_14862__$1 = (function (){var statearr_14883 = state_14862;
(statearr_14883[(7)] = inst_14827);

(statearr_14883[(8)] = inst_14826__$1);

return statearr_14883;
})();
var statearr_14884_14910 = state_14862__$1;
(statearr_14884_14910[(2)] = null);

(statearr_14884_14910[(1)] = (2));


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
});})(c__12214__auto___14896,out))
;
return ((function (switch__12102__auto__,c__12214__auto___14896,out){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_14888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14888[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_14888[(1)] = (1));

return statearr_14888;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_14862){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14889){if((e14889 instanceof Object)){
var ex__12106__auto__ = e14889;
var statearr_14890_14911 = state_14862;
(statearr_14890_14911[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14912 = state_14862;
state_14862 = G__14912;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_14862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_14862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___14896,out))
})();
var state__12216__auto__ = (function (){var statearr_14891 = f__12215__auto__.call(null);
(statearr_14891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___14896);

return statearr_14891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___14896,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14913 = [];
var len__6816__auto___14987 = arguments.length;
var i__6817__auto___14988 = (0);
while(true){
if((i__6817__auto___14988 < len__6816__auto___14987)){
args14913.push((arguments[i__6817__auto___14988]));

var G__14989 = (i__6817__auto___14988 + (1));
i__6817__auto___14988 = G__14989;
continue;
} else {
}
break;
}

var G__14915 = args14913.length;
switch (G__14915) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14913.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12214__auto___14991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12214__auto___14991,out){
return (function (){
var f__12215__auto__ = (function (){var switch__12102__auto__ = ((function (c__12214__auto___14991,out){
return (function (state_14957){
var state_val_14958 = (state_14957[(1)]);
if((state_val_14958 === (7))){
var inst_14953 = (state_14957[(2)]);
var state_14957__$1 = state_14957;
var statearr_14959_14992 = state_14957__$1;
(statearr_14959_14992[(2)] = inst_14953);

(statearr_14959_14992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (1))){
var inst_14916 = [];
var inst_14917 = inst_14916;
var inst_14918 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14957__$1 = (function (){var statearr_14960 = state_14957;
(statearr_14960[(7)] = inst_14917);

(statearr_14960[(8)] = inst_14918);

return statearr_14960;
})();
var statearr_14961_14993 = state_14957__$1;
(statearr_14961_14993[(2)] = null);

(statearr_14961_14993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (4))){
var inst_14921 = (state_14957[(9)]);
var inst_14921__$1 = (state_14957[(2)]);
var inst_14922 = (inst_14921__$1 == null);
var inst_14923 = cljs.core.not.call(null,inst_14922);
var state_14957__$1 = (function (){var statearr_14962 = state_14957;
(statearr_14962[(9)] = inst_14921__$1);

return statearr_14962;
})();
if(inst_14923){
var statearr_14963_14994 = state_14957__$1;
(statearr_14963_14994[(1)] = (5));

} else {
var statearr_14964_14995 = state_14957__$1;
(statearr_14964_14995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (15))){
var inst_14947 = (state_14957[(2)]);
var state_14957__$1 = state_14957;
var statearr_14965_14996 = state_14957__$1;
(statearr_14965_14996[(2)] = inst_14947);

(statearr_14965_14996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (13))){
var state_14957__$1 = state_14957;
var statearr_14966_14997 = state_14957__$1;
(statearr_14966_14997[(2)] = null);

(statearr_14966_14997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (6))){
var inst_14917 = (state_14957[(7)]);
var inst_14942 = inst_14917.length;
var inst_14943 = (inst_14942 > (0));
var state_14957__$1 = state_14957;
if(cljs.core.truth_(inst_14943)){
var statearr_14967_14998 = state_14957__$1;
(statearr_14967_14998[(1)] = (12));

} else {
var statearr_14968_14999 = state_14957__$1;
(statearr_14968_14999[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (3))){
var inst_14955 = (state_14957[(2)]);
var state_14957__$1 = state_14957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14957__$1,inst_14955);
} else {
if((state_val_14958 === (12))){
var inst_14917 = (state_14957[(7)]);
var inst_14945 = cljs.core.vec.call(null,inst_14917);
var state_14957__$1 = state_14957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14957__$1,(15),out,inst_14945);
} else {
if((state_val_14958 === (2))){
var state_14957__$1 = state_14957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14957__$1,(4),ch);
} else {
if((state_val_14958 === (11))){
var inst_14925 = (state_14957[(10)]);
var inst_14921 = (state_14957[(9)]);
var inst_14935 = (state_14957[(2)]);
var inst_14936 = [];
var inst_14937 = inst_14936.push(inst_14921);
var inst_14917 = inst_14936;
var inst_14918 = inst_14925;
var state_14957__$1 = (function (){var statearr_14969 = state_14957;
(statearr_14969[(11)] = inst_14937);

(statearr_14969[(7)] = inst_14917);

(statearr_14969[(12)] = inst_14935);

(statearr_14969[(8)] = inst_14918);

return statearr_14969;
})();
var statearr_14970_15000 = state_14957__$1;
(statearr_14970_15000[(2)] = null);

(statearr_14970_15000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (9))){
var inst_14917 = (state_14957[(7)]);
var inst_14933 = cljs.core.vec.call(null,inst_14917);
var state_14957__$1 = state_14957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14957__$1,(11),out,inst_14933);
} else {
if((state_val_14958 === (5))){
var inst_14925 = (state_14957[(10)]);
var inst_14918 = (state_14957[(8)]);
var inst_14921 = (state_14957[(9)]);
var inst_14925__$1 = f.call(null,inst_14921);
var inst_14926 = cljs.core._EQ_.call(null,inst_14925__$1,inst_14918);
var inst_14927 = cljs.core.keyword_identical_QMARK_.call(null,inst_14918,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14928 = (inst_14926) || (inst_14927);
var state_14957__$1 = (function (){var statearr_14971 = state_14957;
(statearr_14971[(10)] = inst_14925__$1);

return statearr_14971;
})();
if(cljs.core.truth_(inst_14928)){
var statearr_14972_15001 = state_14957__$1;
(statearr_14972_15001[(1)] = (8));

} else {
var statearr_14973_15002 = state_14957__$1;
(statearr_14973_15002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (14))){
var inst_14950 = (state_14957[(2)]);
var inst_14951 = cljs.core.async.close_BANG_.call(null,out);
var state_14957__$1 = (function (){var statearr_14975 = state_14957;
(statearr_14975[(13)] = inst_14950);

return statearr_14975;
})();
var statearr_14976_15003 = state_14957__$1;
(statearr_14976_15003[(2)] = inst_14951);

(statearr_14976_15003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (10))){
var inst_14940 = (state_14957[(2)]);
var state_14957__$1 = state_14957;
var statearr_14977_15004 = state_14957__$1;
(statearr_14977_15004[(2)] = inst_14940);

(statearr_14977_15004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (8))){
var inst_14917 = (state_14957[(7)]);
var inst_14925 = (state_14957[(10)]);
var inst_14921 = (state_14957[(9)]);
var inst_14930 = inst_14917.push(inst_14921);
var tmp14974 = inst_14917;
var inst_14917__$1 = tmp14974;
var inst_14918 = inst_14925;
var state_14957__$1 = (function (){var statearr_14978 = state_14957;
(statearr_14978[(7)] = inst_14917__$1);

(statearr_14978[(8)] = inst_14918);

(statearr_14978[(14)] = inst_14930);

return statearr_14978;
})();
var statearr_14979_15005 = state_14957__$1;
(statearr_14979_15005[(2)] = null);

(statearr_14979_15005[(1)] = (2));


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
});})(c__12214__auto___14991,out))
;
return ((function (switch__12102__auto__,c__12214__auto___14991,out){
return (function() {
var cljs$core$async$state_machine__12103__auto__ = null;
var cljs$core$async$state_machine__12103__auto____0 = (function (){
var statearr_14983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14983[(0)] = cljs$core$async$state_machine__12103__auto__);

(statearr_14983[(1)] = (1));

return statearr_14983;
});
var cljs$core$async$state_machine__12103__auto____1 = (function (state_14957){
while(true){
var ret_value__12104__auto__ = (function (){try{while(true){
var result__12105__auto__ = switch__12102__auto__.call(null,state_14957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12105__auto__;
}
break;
}
}catch (e14984){if((e14984 instanceof Object)){
var ex__12106__auto__ = e14984;
var statearr_14985_15006 = state_14957;
(statearr_14985_15006[(5)] = ex__12106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15007 = state_14957;
state_14957 = G__15007;
continue;
} else {
return ret_value__12104__auto__;
}
break;
}
});
cljs$core$async$state_machine__12103__auto__ = function(state_14957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12103__auto____1.call(this,state_14957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12103__auto____0;
cljs$core$async$state_machine__12103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12103__auto____1;
return cljs$core$async$state_machine__12103__auto__;
})()
;})(switch__12102__auto__,c__12214__auto___14991,out))
})();
var state__12216__auto__ = (function (){var statearr_14986 = f__12215__auto__.call(null);
(statearr_14986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12214__auto___14991);

return statearr_14986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12216__auto__);
});})(c__12214__auto___14991,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1476331718946