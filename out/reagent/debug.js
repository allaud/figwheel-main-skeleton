// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__14467__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14468__i = 0, G__14468__a = new Array(arguments.length -  0);
while (G__14468__i < G__14468__a.length) {G__14468__a[G__14468__i] = arguments[G__14468__i + 0]; ++G__14468__i;}
  args = new cljs.core.IndexedSeq(G__14468__a,0,null);
} 
return G__14467__delegate.call(this,args);};
G__14467.cljs$lang$maxFixedArity = 0;
G__14467.cljs$lang$applyTo = (function (arglist__14469){
var args = cljs.core.seq(arglist__14469);
return G__14467__delegate(args);
});
G__14467.cljs$core$IFn$_invoke$arity$variadic = G__14467__delegate;
return G__14467;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__14470__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14471__i = 0, G__14471__a = new Array(arguments.length -  0);
while (G__14471__i < G__14471__a.length) {G__14471__a[G__14471__i] = arguments[G__14471__i + 0]; ++G__14471__i;}
  args = new cljs.core.IndexedSeq(G__14471__a,0,null);
} 
return G__14470__delegate.call(this,args);};
G__14470.cljs$lang$maxFixedArity = 0;
G__14470.cljs$lang$applyTo = (function (arglist__14472){
var args = cljs.core.seq(arglist__14472);
return G__14470__delegate(args);
});
G__14470.cljs$core$IFn$_invoke$arity$variadic = G__14470__delegate;
return G__14470;
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

//# sourceMappingURL=debug.js.map
