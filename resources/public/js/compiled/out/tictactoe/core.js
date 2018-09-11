// Compiled by ClojureScript 1.9.562 {}
goog.provide('tictactoe.core');
goog.require('cljs.core');
goog.require('historian.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tictactoe.core.board_size !== 'undefined'){
} else {
tictactoe.core.board_size = (9);
}
if(typeof tictactoe.core.row_count !== 'undefined'){
} else {
tictactoe.core.row_count = (3);
}
if(typeof tictactoe.core.app_state !== 'undefined'){
} else {
tictactoe.core.app_state = (function (){
historian.core.replace_library_BANG_.call(null,reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY));

historian.core.replace_prophecy_BANG_.call(null,reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY));

var G__37549 = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move","move",-2110884309),(0),new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"squares","squares",-888257629),cljs.core.vec.call(null,cljs.core.repeat.call(null,tictactoe.core.board_size,null))], null));
historian.core.record_BANG_.call(null,G__37549,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));

return G__37549;
})()
;
}
tictactoe.core.move = (function tictactoe$core$move(app_state,i){
var jump_to_move = (function tictactoe$core$move_$_jump_to_move(i__$1){
return (function (){
var move = new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var distance = (i__$1 - move);
if((distance > (0))){
var n__35362__auto__ = distance;
var _ = (0);
while(true){
if((_ < n__35362__auto__)){
historian.core.redo_BANG_.call(null);

var G__37550 = (_ + (1));
_ = G__37550;
continue;
} else {
return null;
}
break;
}
} else {
var n__35362__auto__ = (- distance);
var _ = (0);
while(true){
if((_ < n__35362__auto__)){
historian.core.undo_BANG_.call(null);

var G__37551 = (_ + (1));
_ = G__37551;
continue;
} else {
return null;
}
break;
}
}
});
});
var description = (((i === (0)))?"Game start":[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Move #"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("move-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),jump_to_move.call(null,i)], null),((cljs.core._EQ_.call(null,i,new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),description], null):description)], null)], null);
});
tictactoe.core.moves = (function tictactoe$core$moves(app_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,tictactoe.core.move,app_state),cljs.core.range.call(null,(cljs.core.count.call(null,cljs.core.deref.call(null,historian.core.get_library_atom.call(null))) + cljs.core.count.call(null,cljs.core.deref.call(null,historian.core.get_prophecy_atom.call(null)))))))], null);
});
tictactoe.core.all_squares_filled_QMARK_ = (function tictactoe$core$all_squares_filled_QMARK_(state){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(state));
});
tictactoe.core.winner_for_line = (function tictactoe$core$winner_for_line(squares,line){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get,squares),line)))){
return cljs.core.get.call(null,squares,cljs.core.first.call(null,line));
} else {
return null;
}
});
tictactoe.core.winning_lines = (function tictactoe$core$winning_lines(state){
var lines = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null)], null);
var iter__35227__auto__ = ((function (lines){
return (function tictactoe$core$winning_lines_$_iter__37556(s__37557){
return (new cljs.core.LazySeq(null,((function (lines){
return (function (){
var s__37557__$1 = s__37557;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37557__$1);
if(temp__4657__auto__){
var s__37557__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37557__$2)){
var c__35225__auto__ = cljs.core.chunk_first.call(null,s__37557__$2);
var size__35226__auto__ = cljs.core.count.call(null,c__35225__auto__);
var b__37559 = cljs.core.chunk_buffer.call(null,size__35226__auto__);
if((function (){var i__37558 = (0);
while(true){
if((i__37558 < size__35226__auto__)){
var line = cljs.core._nth.call(null,c__35225__auto__,i__37558);
if(cljs.core.truth_(tictactoe.core.winner_for_line.call(null,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(state),line))){
cljs.core.chunk_append.call(null,b__37559,line);

var G__37560 = (i__37558 + (1));
i__37558 = G__37560;
continue;
} else {
var G__37561 = (i__37558 + (1));
i__37558 = G__37561;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37559),tictactoe$core$winning_lines_$_iter__37556.call(null,cljs.core.chunk_rest.call(null,s__37557__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37559),null);
}
} else {
var line = cljs.core.first.call(null,s__37557__$2);
if(cljs.core.truth_(tictactoe.core.winner_for_line.call(null,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(state),line))){
return cljs.core.cons.call(null,line,tictactoe$core$winning_lines_$_iter__37556.call(null,cljs.core.rest.call(null,s__37557__$2)));
} else {
var G__37562 = cljs.core.rest.call(null,s__37557__$2);
s__37557__$1 = G__37562;
continue;
}
}
} else {
return null;
}
break;
}
});})(lines))
,null,null));
});})(lines))
;
return iter__35227__auto__.call(null,lines);
});
tictactoe.core.winning_positions = (function tictactoe$core$winning_positions(state){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.flatten.call(null,tictactoe.core.winning_lines.call(null,state)));
});
tictactoe.core.winner = (function tictactoe$core$winner(state){
var winning_line = cljs.core.first.call(null,tictactoe.core.winning_lines.call(null,state));
return tictactoe.core.winner_for_line.call(null,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(state),winning_line);
});
tictactoe.core.status = (function tictactoe$core$status(app_state){
var temp__4655__auto__ = tictactoe.core.winner.call(null,cljs.core.deref.call(null,app_state));
if(cljs.core.truth_(temp__4655__auto__)){
var winner = temp__4655__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Winner: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner)].join('');
} else {
if(cljs.core.truth_(tictactoe.core.all_squares_filled_QMARK_.call(null,cljs.core.deref.call(null,app_state)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("It's a draw")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Next player: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))].join('');
}
}
});
tictactoe.core.info = (function tictactoe$core$info(app_state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"game-info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tictactoe.core.status.call(null,app_state)], null),tictactoe.core.moves.call(null,app_state)], null);
});
tictactoe.core.square = (function tictactoe$core$square(app_state,i){
var next_player = (function tictactoe$core$square_$_next_player(player){
var G__37582 = player;
switch (G__37582) {
case "X":
return "O";

break;
case "O":
return "X";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37582)].join('')));

}
});
var toggle_player = (function tictactoe$core$square_$_toggle_player(state,player){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player","player",-97687400),next_player.call(null,player));
});
var record_move = (function tictactoe$core$square_$_record_move(state,player,i__$1){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"squares","squares",-888257629),i__$1], null),player),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309)], null),cljs.core.inc);
});
var square_on_click = (function tictactoe$core$square_$_square_on_click(){
return (function (){
return cljs.core.swap_BANG_.call(null,app_state,(function (state){
var map__37585 = state;
var map__37585__$1 = ((((!((map__37585 == null)))?((((map__37585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37585):map__37585);
var player = cljs.core.get.call(null,map__37585__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var squares = cljs.core.get.call(null,map__37585__$1,new cljs.core.Keyword(null,"squares","squares",-888257629));
if(cljs.core.not.call(null,(function (){var or__34439__auto__ = cljs.core.get.call(null,squares,i);
if(cljs.core.truth_(or__34439__auto__)){
return or__34439__auto__;
} else {
return tictactoe.core.winner.call(null,state);
}
})())){
return toggle_player.call(null,record_move.call(null,state,player,i),player);
} else {
return state;
}
}));
});
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.square","button.square",-355523450),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("square-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),square_on_click.call(null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([i]),tictactoe.core.winning_positions.call(null,cljs.core.deref.call(null,app_state))))?"winning":null)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"squares","squares",-888257629),i], null))], null);
});
tictactoe.core.row = (function tictactoe$core$row(app_state,i,xs){
var square = cljs.core.partial.call(null,tictactoe.core.square,app_state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("row-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (square){
return (function (p1__37588_SHARP_){
return square.call(null,p1__37588_SHARP_);
});})(square))
,xs))], null);
});
tictactoe.core.board = (function tictactoe$core$board(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"game-board"], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (p1__37589_SHARP_,p2__37590_SHARP_){
return tictactoe.core.row.call(null,app_state,p1__37589_SHARP_,p2__37590_SHARP_);
}),cljs.core.partition.call(null,tictactoe.core.row_count,cljs.core.range.call(null,tictactoe.core.board_size))))], null);
});
tictactoe.core.game = (function tictactoe$core$game(app_state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"game"], null),tictactoe.core.board.call(null,app_state),tictactoe.core.info.call(null,app_state)], null);
});
tictactoe.core.render = (function tictactoe$core$render(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.game,tictactoe.core.app_state], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map?rel=1536657138004