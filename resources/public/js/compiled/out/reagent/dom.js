// Compiled by ClojureScript 1.9.562 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__34439__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__34439__auto__)){
return or__34439__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_37349 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_37349){
return (function (){
var _STAR_always_update_STAR_37350 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_37350;
}});})(_STAR_always_update_STAR_37349))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_37349;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args37351 = [];
var len__35552__auto___37354 = arguments.length;
var i__35553__auto___37355 = (0);
while(true){
if((i__35553__auto___37355 < len__35552__auto___37354)){
args37351.push((arguments[i__35553__auto___37355]));

var G__37356 = (i__35553__auto___37355 + (1));
i__35553__auto___37355 = G__37356;
continue;
} else {
}
break;
}

var G__37353 = args37351.length;
switch (G__37353) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37351.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__37362_37366 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__37363_37367 = null;
var count__37364_37368 = (0);
var i__37365_37369 = (0);
while(true){
if((i__37365_37369 < count__37364_37368)){
var v_37370 = cljs.core._nth.call(null,chunk__37363_37367,i__37365_37369);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_37370);

var G__37371 = seq__37362_37366;
var G__37372 = chunk__37363_37367;
var G__37373 = count__37364_37368;
var G__37374 = (i__37365_37369 + (1));
seq__37362_37366 = G__37371;
chunk__37363_37367 = G__37372;
count__37364_37368 = G__37373;
i__37365_37369 = G__37374;
continue;
} else {
var temp__4657__auto___37375 = cljs.core.seq.call(null,seq__37362_37366);
if(temp__4657__auto___37375){
var seq__37362_37376__$1 = temp__4657__auto___37375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37362_37376__$1)){
var c__35258__auto___37377 = cljs.core.chunk_first.call(null,seq__37362_37376__$1);
var G__37378 = cljs.core.chunk_rest.call(null,seq__37362_37376__$1);
var G__37379 = c__35258__auto___37377;
var G__37380 = cljs.core.count.call(null,c__35258__auto___37377);
var G__37381 = (0);
seq__37362_37366 = G__37378;
chunk__37363_37367 = G__37379;
count__37364_37368 = G__37380;
i__37365_37369 = G__37381;
continue;
} else {
var v_37382 = cljs.core.first.call(null,seq__37362_37376__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_37382);

var G__37383 = cljs.core.next.call(null,seq__37362_37376__$1);
var G__37384 = null;
var G__37385 = (0);
var G__37386 = (0);
seq__37362_37366 = G__37383;
chunk__37363_37367 = G__37384;
count__37364_37368 = G__37385;
i__37365_37369 = G__37386;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1536657137669