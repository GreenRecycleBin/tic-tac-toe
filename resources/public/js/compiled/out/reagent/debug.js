// Compiled by ClojureScript 1.9.562 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36881__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36882__i = 0, G__36882__a = new Array(arguments.length -  0);
while (G__36882__i < G__36882__a.length) {G__36882__a[G__36882__i] = arguments[G__36882__i + 0]; ++G__36882__i;}
  args = new cljs.core.IndexedSeq(G__36882__a,0,null);
} 
return G__36881__delegate.call(this,args);};
G__36881.cljs$lang$maxFixedArity = 0;
G__36881.cljs$lang$applyTo = (function (arglist__36883){
var args = cljs.core.seq(arglist__36883);
return G__36881__delegate(args);
});
G__36881.cljs$core$IFn$_invoke$arity$variadic = G__36881__delegate;
return G__36881;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36884__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36885__i = 0, G__36885__a = new Array(arguments.length -  0);
while (G__36885__i < G__36885__a.length) {G__36885__a[G__36885__i] = arguments[G__36885__i + 0]; ++G__36885__i;}
  args = new cljs.core.IndexedSeq(G__36885__a,0,null);
} 
return G__36884__delegate.call(this,args);};
G__36884.cljs$lang$maxFixedArity = 0;
G__36884.cljs$lang$applyTo = (function (arglist__36886){
var args = cljs.core.seq(arglist__36886);
return G__36884__delegate(args);
});
G__36884.cljs$core$IFn$_invoke$arity$variadic = G__36884__delegate;
return G__36884;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1536657136472