// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22099){
var map__22100 = p__22099;
var map__22100__$1 = ((((!((map__22100 == null)))?(((((map__22100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22100):map__22100);
var m = map__22100__$1;
var n = cljs.core.get.call(null,map__22100__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22100__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__22102_22124 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22103_22125 = null;
var count__22104_22126 = (0);
var i__22105_22127 = (0);
while(true){
if((i__22105_22127 < count__22104_22126)){
var f_22128 = cljs.core._nth.call(null,chunk__22103_22125,i__22105_22127);
cljs.core.println.call(null,"  ",f_22128);


var G__22129 = seq__22102_22124;
var G__22130 = chunk__22103_22125;
var G__22131 = count__22104_22126;
var G__22132 = (i__22105_22127 + (1));
seq__22102_22124 = G__22129;
chunk__22103_22125 = G__22130;
count__22104_22126 = G__22131;
i__22105_22127 = G__22132;
continue;
} else {
var temp__5457__auto___22133 = cljs.core.seq.call(null,seq__22102_22124);
if(temp__5457__auto___22133){
var seq__22102_22134__$1 = temp__5457__auto___22133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22102_22134__$1)){
var c__4351__auto___22135 = cljs.core.chunk_first.call(null,seq__22102_22134__$1);
var G__22136 = cljs.core.chunk_rest.call(null,seq__22102_22134__$1);
var G__22137 = c__4351__auto___22135;
var G__22138 = cljs.core.count.call(null,c__4351__auto___22135);
var G__22139 = (0);
seq__22102_22124 = G__22136;
chunk__22103_22125 = G__22137;
count__22104_22126 = G__22138;
i__22105_22127 = G__22139;
continue;
} else {
var f_22140 = cljs.core.first.call(null,seq__22102_22134__$1);
cljs.core.println.call(null,"  ",f_22140);


var G__22141 = cljs.core.next.call(null,seq__22102_22134__$1);
var G__22142 = null;
var G__22143 = (0);
var G__22144 = (0);
seq__22102_22124 = G__22141;
chunk__22103_22125 = G__22142;
count__22104_22126 = G__22143;
i__22105_22127 = G__22144;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22145 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22145);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22145)))?cljs.core.second.call(null,arglists_22145):arglists_22145));
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
var seq__22106_22146 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22107_22147 = null;
var count__22108_22148 = (0);
var i__22109_22149 = (0);
while(true){
if((i__22109_22149 < count__22108_22148)){
var vec__22110_22150 = cljs.core._nth.call(null,chunk__22107_22147,i__22109_22149);
var name_22151 = cljs.core.nth.call(null,vec__22110_22150,(0),null);
var map__22113_22152 = cljs.core.nth.call(null,vec__22110_22150,(1),null);
var map__22113_22153__$1 = ((((!((map__22113_22152 == null)))?(((((map__22113_22152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22113_22152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22113_22152):map__22113_22152);
var doc_22154 = cljs.core.get.call(null,map__22113_22153__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22155 = cljs.core.get.call(null,map__22113_22153__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22151);

cljs.core.println.call(null," ",arglists_22155);

if(cljs.core.truth_(doc_22154)){
cljs.core.println.call(null," ",doc_22154);
} else {
}


var G__22156 = seq__22106_22146;
var G__22157 = chunk__22107_22147;
var G__22158 = count__22108_22148;
var G__22159 = (i__22109_22149 + (1));
seq__22106_22146 = G__22156;
chunk__22107_22147 = G__22157;
count__22108_22148 = G__22158;
i__22109_22149 = G__22159;
continue;
} else {
var temp__5457__auto___22160 = cljs.core.seq.call(null,seq__22106_22146);
if(temp__5457__auto___22160){
var seq__22106_22161__$1 = temp__5457__auto___22160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22106_22161__$1)){
var c__4351__auto___22162 = cljs.core.chunk_first.call(null,seq__22106_22161__$1);
var G__22163 = cljs.core.chunk_rest.call(null,seq__22106_22161__$1);
var G__22164 = c__4351__auto___22162;
var G__22165 = cljs.core.count.call(null,c__4351__auto___22162);
var G__22166 = (0);
seq__22106_22146 = G__22163;
chunk__22107_22147 = G__22164;
count__22108_22148 = G__22165;
i__22109_22149 = G__22166;
continue;
} else {
var vec__22115_22167 = cljs.core.first.call(null,seq__22106_22161__$1);
var name_22168 = cljs.core.nth.call(null,vec__22115_22167,(0),null);
var map__22118_22169 = cljs.core.nth.call(null,vec__22115_22167,(1),null);
var map__22118_22170__$1 = ((((!((map__22118_22169 == null)))?(((((map__22118_22169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22118_22169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22118_22169):map__22118_22169);
var doc_22171 = cljs.core.get.call(null,map__22118_22170__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22172 = cljs.core.get.call(null,map__22118_22170__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22168);

cljs.core.println.call(null," ",arglists_22172);

if(cljs.core.truth_(doc_22171)){
cljs.core.println.call(null," ",doc_22171);
} else {
}


var G__22173 = cljs.core.next.call(null,seq__22106_22161__$1);
var G__22174 = null;
var G__22175 = (0);
var G__22176 = (0);
seq__22106_22146 = G__22173;
chunk__22107_22147 = G__22174;
count__22108_22148 = G__22175;
i__22109_22149 = G__22176;
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

var seq__22120 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22121 = null;
var count__22122 = (0);
var i__22123 = (0);
while(true){
if((i__22123 < count__22122)){
var role = cljs.core._nth.call(null,chunk__22121,i__22123);
var temp__5457__auto___22177__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___22177__$1)){
var spec_22178 = temp__5457__auto___22177__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22178));
} else {
}


var G__22179 = seq__22120;
var G__22180 = chunk__22121;
var G__22181 = count__22122;
var G__22182 = (i__22123 + (1));
seq__22120 = G__22179;
chunk__22121 = G__22180;
count__22122 = G__22181;
i__22123 = G__22182;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__22120);
if(temp__5457__auto____$1){
var seq__22120__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22120__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22120__$1);
var G__22183 = cljs.core.chunk_rest.call(null,seq__22120__$1);
var G__22184 = c__4351__auto__;
var G__22185 = cljs.core.count.call(null,c__4351__auto__);
var G__22186 = (0);
seq__22120 = G__22183;
chunk__22121 = G__22184;
count__22122 = G__22185;
i__22123 = G__22186;
continue;
} else {
var role = cljs.core.first.call(null,seq__22120__$1);
var temp__5457__auto___22187__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___22187__$2)){
var spec_22188 = temp__5457__auto___22187__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22188));
} else {
}


var G__22189 = cljs.core.next.call(null,seq__22120__$1);
var G__22190 = null;
var G__22191 = (0);
var G__22192 = (0);
seq__22120 = G__22189;
chunk__22121 = G__22190;
count__22122 = G__22191;
i__22123 = G__22192;
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
