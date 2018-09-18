// Compiled by ClojureScript 1.10.339 {}
goog.provide('fullstack.main');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof fullstack !== 'undefined') && (typeof fullstack.main !== 'undefined') && (typeof fullstack.main.state !== 'undefined')){
} else {
fullstack.main.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Okayish",new cljs.core.Keyword(null,"body","body",-2049205669),"some body text to change..."], null));
}
fullstack.main.main = (function fullstack$main$main(name){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fullstack.main.state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,fullstack.main.state,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),"Test title..");
})], null),"push me"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hi, I am asdasd!"], null)], null);
});
fullstack.main.run = (function fullstack$main$run(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fullstack.main.main], null),document.getElementById("app"));
});
fullstack.main.run.call(null);

//# sourceMappingURL=main.js.map
