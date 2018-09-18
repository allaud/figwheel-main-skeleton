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
var G__13441__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13442__i = 0, G__13442__a = new Array(arguments.length -  0);
while (G__13442__i < G__13442__a.length) {G__13442__a[G__13442__i] = arguments[G__13442__i + 0]; ++G__13442__i;}
  args = new cljs.core.IndexedSeq(G__13442__a,0,null);
} 
return G__13441__delegate.call(this,args);};
G__13441.cljs$lang$maxFixedArity = 0;
G__13441.cljs$lang$applyTo = (function (arglist__13443){
var args = cljs.core.seq(arglist__13443);
return G__13441__delegate(args);
});
G__13441.cljs$core$IFn$_invoke$arity$variadic = G__13441__delegate;
return G__13441;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13444__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13445__i = 0, G__13445__a = new Array(arguments.length -  0);
while (G__13445__i < G__13445__a.length) {G__13445__a[G__13445__i] = arguments[G__13445__i + 0]; ++G__13445__i;}
  args = new cljs.core.IndexedSeq(G__13445__a,0,null);
} 
return G__13444__delegate.call(this,args);};
G__13444.cljs$lang$maxFixedArity = 0;
G__13444.cljs$lang$applyTo = (function (arglist__13446){
var args = cljs.core.seq(arglist__13446);
return G__13444__delegate(args);
});
G__13444.cljs$core$IFn$_invoke$arity$variadic = G__13444__delegate;
return G__13444;
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
