// Compiled by ClojureScript 1.9.562 {}
goog.provide('tictactoe.system');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('tictactoe.components.ui');
tictactoe.system.new_system = (function tictactoe$system$new_system(){
return com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword(null,"app-root","app-root",1723856706),tictactoe.components.ui.new_ui_component.call(null));
});
tictactoe.system.init = (function tictactoe$system$init(){
return tictactoe.system.system = tictactoe.system.new_system.call(null);
});
tictactoe.system.start = (function tictactoe$system$start(){
return tictactoe.system.system = com.stuartsierra.component.start.call(null,tictactoe.system.system);
});
tictactoe.system.stop = (function tictactoe$system$stop(){
return tictactoe.system.system = com.stuartsierra.component.stop.call(null,tictactoe.system.system);
});
tictactoe.system.go = (function tictactoe$system$go(){
tictactoe.system.init.call(null);

return tictactoe.system.start.call(null);
});
goog.exportSymbol('tictactoe.system.go', tictactoe.system.go);
tictactoe.system.reset = (function tictactoe$system$reset(){
tictactoe.system.stop.call(null);

return tictactoe.system.go.call(null);
});

//# sourceMappingURL=system.js.map?rel=1536657138342