// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23528){
var map__23529 = p__23528;
var map__23529__$1 = ((((!((map__23529 == null)))?(((((map__23529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23529):map__23529);
var m = map__23529__$1;
var n = cljs.core.get.call(null,map__23529__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23529__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23531_23553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23532_23554 = null;
var count__23533_23555 = (0);
var i__23534_23556 = (0);
while(true){
if((i__23534_23556 < count__23533_23555)){
var f_23557 = cljs.core._nth.call(null,chunk__23532_23554,i__23534_23556);
cljs.core.println.call(null,"  ",f_23557);


var G__23558 = seq__23531_23553;
var G__23559 = chunk__23532_23554;
var G__23560 = count__23533_23555;
var G__23561 = (i__23534_23556 + (1));
seq__23531_23553 = G__23558;
chunk__23532_23554 = G__23559;
count__23533_23555 = G__23560;
i__23534_23556 = G__23561;
continue;
} else {
var temp__5457__auto___23562 = cljs.core.seq.call(null,seq__23531_23553);
if(temp__5457__auto___23562){
var seq__23531_23563__$1 = temp__5457__auto___23562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23531_23563__$1)){
var c__4351__auto___23564 = cljs.core.chunk_first.call(null,seq__23531_23563__$1);
var G__23565 = cljs.core.chunk_rest.call(null,seq__23531_23563__$1);
var G__23566 = c__4351__auto___23564;
var G__23567 = cljs.core.count.call(null,c__4351__auto___23564);
var G__23568 = (0);
seq__23531_23553 = G__23565;
chunk__23532_23554 = G__23566;
count__23533_23555 = G__23567;
i__23534_23556 = G__23568;
continue;
} else {
var f_23569 = cljs.core.first.call(null,seq__23531_23563__$1);
cljs.core.println.call(null,"  ",f_23569);


var G__23570 = cljs.core.next.call(null,seq__23531_23563__$1);
var G__23571 = null;
var G__23572 = (0);
var G__23573 = (0);
seq__23531_23553 = G__23570;
chunk__23532_23554 = G__23571;
count__23533_23555 = G__23572;
i__23534_23556 = G__23573;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23574 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23574);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23574)))?cljs.core.second.call(null,arglists_23574):arglists_23574));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23535_23575 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23536_23576 = null;
var count__23537_23577 = (0);
var i__23538_23578 = (0);
while(true){
if((i__23538_23578 < count__23537_23577)){
var vec__23539_23579 = cljs.core._nth.call(null,chunk__23536_23576,i__23538_23578);
var name_23580 = cljs.core.nth.call(null,vec__23539_23579,(0),null);
var map__23542_23581 = cljs.core.nth.call(null,vec__23539_23579,(1),null);
var map__23542_23582__$1 = ((((!((map__23542_23581 == null)))?(((((map__23542_23581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23542_23581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23542_23581):map__23542_23581);
var doc_23583 = cljs.core.get.call(null,map__23542_23582__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23584 = cljs.core.get.call(null,map__23542_23582__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23580);

cljs.core.println.call(null," ",arglists_23584);

if(cljs.core.truth_(doc_23583)){
cljs.core.println.call(null," ",doc_23583);
} else {
}


var G__23585 = seq__23535_23575;
var G__23586 = chunk__23536_23576;
var G__23587 = count__23537_23577;
var G__23588 = (i__23538_23578 + (1));
seq__23535_23575 = G__23585;
chunk__23536_23576 = G__23586;
count__23537_23577 = G__23587;
i__23538_23578 = G__23588;
continue;
} else {
var temp__5457__auto___23589 = cljs.core.seq.call(null,seq__23535_23575);
if(temp__5457__auto___23589){
var seq__23535_23590__$1 = temp__5457__auto___23589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23535_23590__$1)){
var c__4351__auto___23591 = cljs.core.chunk_first.call(null,seq__23535_23590__$1);
var G__23592 = cljs.core.chunk_rest.call(null,seq__23535_23590__$1);
var G__23593 = c__4351__auto___23591;
var G__23594 = cljs.core.count.call(null,c__4351__auto___23591);
var G__23595 = (0);
seq__23535_23575 = G__23592;
chunk__23536_23576 = G__23593;
count__23537_23577 = G__23594;
i__23538_23578 = G__23595;
continue;
} else {
var vec__23544_23596 = cljs.core.first.call(null,seq__23535_23590__$1);
var name_23597 = cljs.core.nth.call(null,vec__23544_23596,(0),null);
var map__23547_23598 = cljs.core.nth.call(null,vec__23544_23596,(1),null);
var map__23547_23599__$1 = ((((!((map__23547_23598 == null)))?(((((map__23547_23598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23547_23598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23547_23598):map__23547_23598);
var doc_23600 = cljs.core.get.call(null,map__23547_23599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23601 = cljs.core.get.call(null,map__23547_23599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23597);

cljs.core.println.call(null," ",arglists_23601);

if(cljs.core.truth_(doc_23600)){
cljs.core.println.call(null," ",doc_23600);
} else {
}


var G__23602 = cljs.core.next.call(null,seq__23535_23590__$1);
var G__23603 = null;
var G__23604 = (0);
var G__23605 = (0);
seq__23535_23575 = G__23602;
chunk__23536_23576 = G__23603;
count__23537_23577 = G__23604;
i__23538_23578 = G__23605;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__23549 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23550 = null;
var count__23551 = (0);
var i__23552 = (0);
while(true){
if((i__23552 < count__23551)){
var role = cljs.core._nth.call(null,chunk__23550,i__23552);
var temp__5457__auto___23606__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23606__$1)){
var spec_23607 = temp__5457__auto___23606__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23607));
} else {
}


var G__23608 = seq__23549;
var G__23609 = chunk__23550;
var G__23610 = count__23551;
var G__23611 = (i__23552 + (1));
seq__23549 = G__23608;
chunk__23550 = G__23609;
count__23551 = G__23610;
i__23552 = G__23611;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__23549);
if(temp__5457__auto____$1){
var seq__23549__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23549__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__23549__$1);
var G__23612 = cljs.core.chunk_rest.call(null,seq__23549__$1);
var G__23613 = c__4351__auto__;
var G__23614 = cljs.core.count.call(null,c__4351__auto__);
var G__23615 = (0);
seq__23549 = G__23612;
chunk__23550 = G__23613;
count__23551 = G__23614;
i__23552 = G__23615;
continue;
} else {
var role = cljs.core.first.call(null,seq__23549__$1);
var temp__5457__auto___23616__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23616__$2)){
var spec_23617 = temp__5457__auto___23616__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23617));
} else {
}


var G__23618 = cljs.core.next.call(null,seq__23549__$1);
var G__23619 = null;
var G__23620 = (0);
var G__23621 = (0);
seq__23549 = G__23618;
chunk__23550 = G__23619;
count__23551 = G__23620;
i__23552 = G__23621;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
