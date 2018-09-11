// Compiled by ClojureScript 1.9.562 {}
goog.provide('tictactoe.components.ui');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('tictactoe.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tictactoe.components.ui.UIComponent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
tictactoe.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35066__auto__,k__35067__auto__){
var self__ = this;
var this__35066__auto____$1 = this;
return this__35066__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35067__auto__,null);
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35068__auto__,k37707,else__35069__auto__){
var self__ = this;
var this__35068__auto____$1 = this;
var G__37709 = k37707;
switch (G__37709) {
default:
return cljs.core.get.call(null,self__.__extmap,k37707,else__35069__auto__);

}
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35080__auto__,writer__35081__auto__,opts__35082__auto__){
var self__ = this;
var this__35080__auto____$1 = this;
var pr_pair__35083__auto__ = ((function (this__35080__auto____$1){
return (function (keyval__35084__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35081__auto__,cljs.core.pr_writer,""," ","",opts__35082__auto__,keyval__35084__auto__);
});})(this__35080__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35081__auto__,pr_pair__35083__auto__,"#tictactoe.components.ui.UIComponent{",", ","}",opts__35082__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

tictactoe.components.ui.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37706){
var self__ = this;
var G__37706__$1 = this;
return (new cljs.core.RecordIter((0),G__37706__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35064__auto__){
var self__ = this;
var this__35064__auto____$1 = this;
return self__.__meta;
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35060__auto__){
var self__ = this;
var this__35060__auto____$1 = this;
return (new tictactoe.components.ui.UIComponent(self__.__meta,self__.__extmap,self__.__hash));
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35070__auto__){
var self__ = this;
var this__35070__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35061__auto__){
var self__ = this;
var this__35061__auto____$1 = this;
var h__34879__auto__ = self__.__hash;
if(!((h__34879__auto__ == null))){
return h__34879__auto__;
} else {
var h__34879__auto____$1 = cljs.core.hash_imap.call(null,this__35061__auto____$1);
self__.__hash = h__34879__auto____$1;

return h__34879__auto____$1;
}
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35062__auto__,other__35063__auto__){
var self__ = this;
var this__35062__auto____$1 = this;
if(cljs.core.truth_((function (){var and__34427__auto__ = other__35063__auto__;
if(cljs.core.truth_(and__34427__auto__)){
return ((this__35062__auto____$1.constructor === other__35063__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__35062__auto____$1,other__35063__auto__));
} else {
return and__34427__auto__;
}
})())){
return true;
} else {
return false;
}
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35075__auto__,k__35076__auto__){
var self__ = this;
var this__35075__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__35076__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35075__auto____$1),self__.__meta),k__35076__auto__);
} else {
return (new tictactoe.components.ui.UIComponent(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35076__auto__)),null));
}
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35073__auto__,k__35074__auto__,G__37706){
var self__ = this;
var this__35073__auto____$1 = this;
var pred__37710 = cljs.core.keyword_identical_QMARK_;
var expr__37711 = k__35074__auto__;
return (new tictactoe.components.ui.UIComponent(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35074__auto__,G__37706),null));
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35078__auto__){
var self__ = this;
var this__35078__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35065__auto__,G__37706){
var self__ = this;
var this__35065__auto____$1 = this;
return (new tictactoe.components.ui.UIComponent(G__37706,self__.__extmap,self__.__hash));
});

tictactoe.components.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35071__auto__,entry__35072__auto__){
var self__ = this;
var this__35071__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35072__auto__)){
return this__35071__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35072__auto__,(0)),cljs.core._nth.call(null,entry__35072__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35071__auto____$1,entry__35072__auto__);
}
});

tictactoe.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

tictactoe.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
tictactoe.core.render.call(null);

return component__$1;
});

tictactoe.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

tictactoe.components.ui.UIComponent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

tictactoe.components.ui.UIComponent.cljs$lang$type = true;

tictactoe.components.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__35100__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"tictactoe.components.ui/UIComponent");
});

tictactoe.components.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__35100__auto__,writer__35101__auto__){
return cljs.core._write.call(null,writer__35101__auto__,"tictactoe.components.ui/UIComponent");
});

tictactoe.components.ui.__GT_UIComponent = (function tictactoe$components$ui$__GT_UIComponent(){
return (new tictactoe.components.ui.UIComponent(null,null,null));
});

tictactoe.components.ui.map__GT_UIComponent = (function tictactoe$components$ui$map__GT_UIComponent(G__37708){
return (new tictactoe.components.ui.UIComponent(null,cljs.core.dissoc.call(null,G__37708),null));
});

tictactoe.components.ui.new_ui_component = (function tictactoe$components$ui$new_ui_component(){
return tictactoe.components.ui.map__GT_UIComponent.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=ui.js.map?rel=1536657138330