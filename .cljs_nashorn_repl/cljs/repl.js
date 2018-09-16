// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__8992){
var map__8993 = p__8992;
var map__8993__$1 = ((((!((map__8993 == null)))?(((((map__8993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8993):map__8993);
var m = map__8993__$1;
var n = cljs.core.get.call(null,map__8993__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__8993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__8995_9017 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8996_9018 = null;
var count__8997_9019 = (0);
var i__8998_9020 = (0);
while(true){
if((i__8998_9020 < count__8997_9019)){
var f_9021 = cljs.core._nth.call(null,chunk__8996_9018,i__8998_9020);
cljs.core.println.call(null,"  ",f_9021);


var G__9022 = seq__8995_9017;
var G__9023 = chunk__8996_9018;
var G__9024 = count__8997_9019;
var G__9025 = (i__8998_9020 + (1));
seq__8995_9017 = G__9022;
chunk__8996_9018 = G__9023;
count__8997_9019 = G__9024;
i__8998_9020 = G__9025;
continue;
} else {
var temp__5457__auto___9026 = cljs.core.seq.call(null,seq__8995_9017);
if(temp__5457__auto___9026){
var seq__8995_9027__$1 = temp__5457__auto___9026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8995_9027__$1)){
var c__4351__auto___9028 = cljs.core.chunk_first.call(null,seq__8995_9027__$1);
var G__9029 = cljs.core.chunk_rest.call(null,seq__8995_9027__$1);
var G__9030 = c__4351__auto___9028;
var G__9031 = cljs.core.count.call(null,c__4351__auto___9028);
var G__9032 = (0);
seq__8995_9017 = G__9029;
chunk__8996_9018 = G__9030;
count__8997_9019 = G__9031;
i__8998_9020 = G__9032;
continue;
} else {
var f_9033 = cljs.core.first.call(null,seq__8995_9027__$1);
cljs.core.println.call(null,"  ",f_9033);


var G__9034 = cljs.core.next.call(null,seq__8995_9027__$1);
var G__9035 = null;
var G__9036 = (0);
var G__9037 = (0);
seq__8995_9017 = G__9034;
chunk__8996_9018 = G__9035;
count__8997_9019 = G__9036;
i__8998_9020 = G__9037;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9038 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9038);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9038)))?cljs.core.second.call(null,arglists_9038):arglists_9038));
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
var seq__8999_9039 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9000_9040 = null;
var count__9001_9041 = (0);
var i__9002_9042 = (0);
while(true){
if((i__9002_9042 < count__9001_9041)){
var vec__9003_9043 = cljs.core._nth.call(null,chunk__9000_9040,i__9002_9042);
var name_9044 = cljs.core.nth.call(null,vec__9003_9043,(0),null);
var map__9006_9045 = cljs.core.nth.call(null,vec__9003_9043,(1),null);
var map__9006_9046__$1 = ((((!((map__9006_9045 == null)))?(((((map__9006_9045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9006_9045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9006_9045):map__9006_9045);
var doc_9047 = cljs.core.get.call(null,map__9006_9046__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9048 = cljs.core.get.call(null,map__9006_9046__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9044);

cljs.core.println.call(null," ",arglists_9048);

if(cljs.core.truth_(doc_9047)){
cljs.core.println.call(null," ",doc_9047);
} else {
}


var G__9049 = seq__8999_9039;
var G__9050 = chunk__9000_9040;
var G__9051 = count__9001_9041;
var G__9052 = (i__9002_9042 + (1));
seq__8999_9039 = G__9049;
chunk__9000_9040 = G__9050;
count__9001_9041 = G__9051;
i__9002_9042 = G__9052;
continue;
} else {
var temp__5457__auto___9053 = cljs.core.seq.call(null,seq__8999_9039);
if(temp__5457__auto___9053){
var seq__8999_9054__$1 = temp__5457__auto___9053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8999_9054__$1)){
var c__4351__auto___9055 = cljs.core.chunk_first.call(null,seq__8999_9054__$1);
var G__9056 = cljs.core.chunk_rest.call(null,seq__8999_9054__$1);
var G__9057 = c__4351__auto___9055;
var G__9058 = cljs.core.count.call(null,c__4351__auto___9055);
var G__9059 = (0);
seq__8999_9039 = G__9056;
chunk__9000_9040 = G__9057;
count__9001_9041 = G__9058;
i__9002_9042 = G__9059;
continue;
} else {
var vec__9008_9060 = cljs.core.first.call(null,seq__8999_9054__$1);
var name_9061 = cljs.core.nth.call(null,vec__9008_9060,(0),null);
var map__9011_9062 = cljs.core.nth.call(null,vec__9008_9060,(1),null);
var map__9011_9063__$1 = ((((!((map__9011_9062 == null)))?(((((map__9011_9062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9011_9062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9011_9062):map__9011_9062);
var doc_9064 = cljs.core.get.call(null,map__9011_9063__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9065 = cljs.core.get.call(null,map__9011_9063__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9061);

cljs.core.println.call(null," ",arglists_9065);

if(cljs.core.truth_(doc_9064)){
cljs.core.println.call(null," ",doc_9064);
} else {
}


var G__9066 = cljs.core.next.call(null,seq__8999_9054__$1);
var G__9067 = null;
var G__9068 = (0);
var G__9069 = (0);
seq__8999_9039 = G__9066;
chunk__9000_9040 = G__9067;
count__9001_9041 = G__9068;
i__9002_9042 = G__9069;
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

var seq__9013 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9014 = null;
var count__9015 = (0);
var i__9016 = (0);
while(true){
if((i__9016 < count__9015)){
var role = cljs.core._nth.call(null,chunk__9014,i__9016);
var temp__5457__auto___9070__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___9070__$1)){
var spec_9071 = temp__5457__auto___9070__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9071));
} else {
}


var G__9072 = seq__9013;
var G__9073 = chunk__9014;
var G__9074 = count__9015;
var G__9075 = (i__9016 + (1));
seq__9013 = G__9072;
chunk__9014 = G__9073;
count__9015 = G__9074;
i__9016 = G__9075;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__9013);
if(temp__5457__auto____$1){
var seq__9013__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9013__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9013__$1);
var G__9076 = cljs.core.chunk_rest.call(null,seq__9013__$1);
var G__9077 = c__4351__auto__;
var G__9078 = cljs.core.count.call(null,c__4351__auto__);
var G__9079 = (0);
seq__9013 = G__9076;
chunk__9014 = G__9077;
count__9015 = G__9078;
i__9016 = G__9079;
continue;
} else {
var role = cljs.core.first.call(null,seq__9013__$1);
var temp__5457__auto___9080__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___9080__$2)){
var spec_9081 = temp__5457__auto___9080__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9081));
} else {
}


var G__9082 = cljs.core.next.call(null,seq__9013__$1);
var G__9083 = null;
var G__9084 = (0);
var G__9085 = (0);
seq__9013 = G__9082;
chunk__9014 = G__9083;
count__9015 = G__9084;
i__9016 = G__9085;
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
