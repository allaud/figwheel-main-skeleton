// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16549){
var map__16550 = p__16549;
var map__16550__$1 = ((((!((map__16550 == null)))?(((((map__16550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16550):map__16550);
var m = map__16550__$1;
var n = cljs.core.get.call(null,map__16550__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__16552_16574 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16553_16575 = null;
var count__16554_16576 = (0);
var i__16555_16577 = (0);
while(true){
if((i__16555_16577 < count__16554_16576)){
var f_16578 = cljs.core._nth.call(null,chunk__16553_16575,i__16555_16577);
cljs.core.println.call(null,"  ",f_16578);


var G__16579 = seq__16552_16574;
var G__16580 = chunk__16553_16575;
var G__16581 = count__16554_16576;
var G__16582 = (i__16555_16577 + (1));
seq__16552_16574 = G__16579;
chunk__16553_16575 = G__16580;
count__16554_16576 = G__16581;
i__16555_16577 = G__16582;
continue;
} else {
var temp__5457__auto___16583 = cljs.core.seq.call(null,seq__16552_16574);
if(temp__5457__auto___16583){
var seq__16552_16584__$1 = temp__5457__auto___16583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16552_16584__$1)){
var c__4351__auto___16585 = cljs.core.chunk_first.call(null,seq__16552_16584__$1);
var G__16586 = cljs.core.chunk_rest.call(null,seq__16552_16584__$1);
var G__16587 = c__4351__auto___16585;
var G__16588 = cljs.core.count.call(null,c__4351__auto___16585);
var G__16589 = (0);
seq__16552_16574 = G__16586;
chunk__16553_16575 = G__16587;
count__16554_16576 = G__16588;
i__16555_16577 = G__16589;
continue;
} else {
var f_16590 = cljs.core.first.call(null,seq__16552_16584__$1);
cljs.core.println.call(null,"  ",f_16590);


var G__16591 = cljs.core.next.call(null,seq__16552_16584__$1);
var G__16592 = null;
var G__16593 = (0);
var G__16594 = (0);
seq__16552_16574 = G__16591;
chunk__16553_16575 = G__16592;
count__16554_16576 = G__16593;
i__16555_16577 = G__16594;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16595 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16595);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16595)))?cljs.core.second.call(null,arglists_16595):arglists_16595));
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
var seq__16556_16596 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16557_16597 = null;
var count__16558_16598 = (0);
var i__16559_16599 = (0);
while(true){
if((i__16559_16599 < count__16558_16598)){
var vec__16560_16600 = cljs.core._nth.call(null,chunk__16557_16597,i__16559_16599);
var name_16601 = cljs.core.nth.call(null,vec__16560_16600,(0),null);
var map__16563_16602 = cljs.core.nth.call(null,vec__16560_16600,(1),null);
var map__16563_16603__$1 = ((((!((map__16563_16602 == null)))?(((((map__16563_16602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16563_16602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16563_16602):map__16563_16602);
var doc_16604 = cljs.core.get.call(null,map__16563_16603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16605 = cljs.core.get.call(null,map__16563_16603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16601);

cljs.core.println.call(null," ",arglists_16605);

if(cljs.core.truth_(doc_16604)){
cljs.core.println.call(null," ",doc_16604);
} else {
}


var G__16606 = seq__16556_16596;
var G__16607 = chunk__16557_16597;
var G__16608 = count__16558_16598;
var G__16609 = (i__16559_16599 + (1));
seq__16556_16596 = G__16606;
chunk__16557_16597 = G__16607;
count__16558_16598 = G__16608;
i__16559_16599 = G__16609;
continue;
} else {
var temp__5457__auto___16610 = cljs.core.seq.call(null,seq__16556_16596);
if(temp__5457__auto___16610){
var seq__16556_16611__$1 = temp__5457__auto___16610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16556_16611__$1)){
var c__4351__auto___16612 = cljs.core.chunk_first.call(null,seq__16556_16611__$1);
var G__16613 = cljs.core.chunk_rest.call(null,seq__16556_16611__$1);
var G__16614 = c__4351__auto___16612;
var G__16615 = cljs.core.count.call(null,c__4351__auto___16612);
var G__16616 = (0);
seq__16556_16596 = G__16613;
chunk__16557_16597 = G__16614;
count__16558_16598 = G__16615;
i__16559_16599 = G__16616;
continue;
} else {
var vec__16565_16617 = cljs.core.first.call(null,seq__16556_16611__$1);
var name_16618 = cljs.core.nth.call(null,vec__16565_16617,(0),null);
var map__16568_16619 = cljs.core.nth.call(null,vec__16565_16617,(1),null);
var map__16568_16620__$1 = ((((!((map__16568_16619 == null)))?(((((map__16568_16619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16568_16619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16568_16619):map__16568_16619);
var doc_16621 = cljs.core.get.call(null,map__16568_16620__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16622 = cljs.core.get.call(null,map__16568_16620__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16618);

cljs.core.println.call(null," ",arglists_16622);

if(cljs.core.truth_(doc_16621)){
cljs.core.println.call(null," ",doc_16621);
} else {
}


var G__16623 = cljs.core.next.call(null,seq__16556_16611__$1);
var G__16624 = null;
var G__16625 = (0);
var G__16626 = (0);
seq__16556_16596 = G__16623;
chunk__16557_16597 = G__16624;
count__16558_16598 = G__16625;
i__16559_16599 = G__16626;
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

var seq__16570 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16571 = null;
var count__16572 = (0);
var i__16573 = (0);
while(true){
if((i__16573 < count__16572)){
var role = cljs.core._nth.call(null,chunk__16571,i__16573);
var temp__5457__auto___16627__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___16627__$1)){
var spec_16628 = temp__5457__auto___16627__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16628));
} else {
}


var G__16629 = seq__16570;
var G__16630 = chunk__16571;
var G__16631 = count__16572;
var G__16632 = (i__16573 + (1));
seq__16570 = G__16629;
chunk__16571 = G__16630;
count__16572 = G__16631;
i__16573 = G__16632;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__16570);
if(temp__5457__auto____$1){
var seq__16570__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16570__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__16570__$1);
var G__16633 = cljs.core.chunk_rest.call(null,seq__16570__$1);
var G__16634 = c__4351__auto__;
var G__16635 = cljs.core.count.call(null,c__4351__auto__);
var G__16636 = (0);
seq__16570 = G__16633;
chunk__16571 = G__16634;
count__16572 = G__16635;
i__16573 = G__16636;
continue;
} else {
var role = cljs.core.first.call(null,seq__16570__$1);
var temp__5457__auto___16637__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___16637__$2)){
var spec_16638 = temp__5457__auto___16637__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16638));
} else {
}


var G__16639 = cljs.core.next.call(null,seq__16570__$1);
var G__16640 = null;
var G__16641 = (0);
var G__16642 = (0);
seq__16570 = G__16639;
chunk__16571 = G__16640;
count__16572 = G__16641;
i__16573 = G__16642;
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
