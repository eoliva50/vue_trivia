import{_ as E,o as u,c as l,t as j,n as h,u as G,a as H,r as v,b as K,d as x,w as Q,B as W,e as $,F as w,f as X,g as J,h as Y,i as Z,j as z,k as ee,l as te}from"./index-f712c975.js";var re=typeof global=="object"&&global&&global.Object===Object&&global;const M=re;var ne=typeof self=="object"&&self&&self.Object===Object&&self,oe=M||ne||Function("return this")();const F=oe;var ae=F.Symbol;const _=ae;var L=Object.prototype,se=L.hasOwnProperty,ce=L.toString,g=_?_.toStringTag:void 0;function ie(e){var t=se.call(e,g),r=e[g];try{e[g]=void 0;var o=!0}catch{}var s=ce.call(e);return o&&(t?e[g]=r:delete e[g]),s}var ue=Object.prototype,le=ue.toString;function fe(e){return le.call(e)}var pe="[object Null]",ge="[object Undefined]",O=_?_.toStringTag:void 0;function m(e){return e==null?e===void 0?ge:pe:O&&O in Object(e)?ie(e):fe(e)}function A(e){return e!=null&&typeof e=="object"}function de(e,t){for(var r=-1,o=e==null?0:e.length,s=Array(o);++r<o;)s[r]=t(e[r],r,e);return s}var ye=Array.isArray;const N=ye;function be(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ve="[object AsyncFunction]",_e="[object Function]",Te="[object GeneratorFunction]",je="[object Proxy]";function he(e){if(!be(e))return!1;var t=m(e);return t==_e||t==Te||t==ve||t==je}function me(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}var Ae=9007199254740991,xe=/^(?:0|[1-9]\d*)$/;function $e(e,t){var r=typeof e;return t=t??Ae,!!t&&(r=="number"||r!="symbol"&&xe.test(e))&&e>-1&&e%1==0&&e<t}var we=9007199254740991;function U(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=we}function Oe(e){return e!=null&&U(e.length)&&!he(e)}var Se=Object.prototype;function Pe(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Se;return e===r}function Ie(e,t){for(var r=-1,o=Array(e);++r<e;)o[r]=t(r);return o}var Be="[object Arguments]";function S(e){return A(e)&&m(e)==Be}var k=Object.prototype,Ce=k.hasOwnProperty,Ee=k.propertyIsEnumerable,Me=S(function(){return arguments}())?S:function(e){return A(e)&&Ce.call(e,"callee")&&!Ee.call(e,"callee")};const Fe=Me;function Le(){return!1}var q=typeof exports=="object"&&exports&&!exports.nodeType&&exports,P=q&&typeof module=="object"&&module&&!module.nodeType&&module,Ne=P&&P.exports===q,I=Ne?F.Buffer:void 0,Ue=I?I.isBuffer:void 0,ke=Ue||Le;const qe=ke;var Re="[object Arguments]",Ve="[object Array]",De="[object Boolean]",Ge="[object Date]",He="[object Error]",Ke="[object Function]",Qe="[object Map]",We="[object Number]",Xe="[object Object]",Je="[object RegExp]",Ye="[object Set]",Ze="[object String]",ze="[object WeakMap]",et="[object ArrayBuffer]",tt="[object DataView]",rt="[object Float32Array]",nt="[object Float64Array]",ot="[object Int8Array]",at="[object Int16Array]",st="[object Int32Array]",ct="[object Uint8Array]",it="[object Uint8ClampedArray]",ut="[object Uint16Array]",lt="[object Uint32Array]",n={};n[rt]=n[nt]=n[ot]=n[at]=n[st]=n[ct]=n[it]=n[ut]=n[lt]=!0;n[Re]=n[Ve]=n[et]=n[De]=n[tt]=n[Ge]=n[He]=n[Ke]=n[Qe]=n[We]=n[Xe]=n[Je]=n[Ye]=n[Ze]=n[ze]=!1;function ft(e){return A(e)&&U(e.length)&&!!n[m(e)]}function pt(e){return function(t){return e(t)}}var R=typeof exports=="object"&&exports&&!exports.nodeType&&exports,d=R&&typeof module=="object"&&module&&!module.nodeType&&module,gt=d&&d.exports===R,T=gt&&M.process,dt=function(){try{var e=d&&d.require&&d.require("util").types;return e||T&&T.binding&&T.binding("util")}catch{}}();const B=dt;var C=B&&B.isTypedArray,yt=C?pt(C):ft;const bt=yt;var vt=Object.prototype,_t=vt.hasOwnProperty;function Tt(e,t){var r=N(e),o=!r&&Fe(e),s=!r&&!o&&qe(e),a=!r&&!o&&!s&&bt(e),c=r||o||s||a,f=c?Ie(e.length,String):[],y=f.length;for(var i in e)(t||_t.call(e,i))&&!(c&&(i=="length"||s&&(i=="offset"||i=="parent")||a&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||$e(i,y)))&&f.push(i);return f}function jt(e,t){return function(r){return e(t(r))}}var ht=jt(Object.keys,Object);const mt=ht;var At=Object.prototype,xt=At.hasOwnProperty;function $t(e){if(!Pe(e))return mt(e);var t=[];for(var r in Object(e))xt.call(e,r)&&r!="constructor"&&t.push(r);return t}function wt(e){return Oe(e)?Tt(e):$t(e)}function Ot(e,t){return de(t,function(r){return e[r]})}function St(e){return e==null?[]:Ot(e,wt(e))}var Pt=Math.floor,It=Math.random;function Bt(e,t){return e+Pt(It()*(t-e+1))}function V(e,t){var r=-1,o=e.length,s=o-1;for(t=t===void 0?o:t;++r<t;){var a=Bt(r,s),c=e[a];e[a]=e[r],e[r]=c}return e.length=t,e}function Ct(e){return V(me(e))}function Et(e){return V(St(e))}function Mt(e){var t=N(e)?Ct:Et;return t(e)}const Ft=()=>{const e=["bg-green-500","bg-red-500","bg-blue-500","bg-yellow-500"];return{getColor:r=>e[r%e.length]}};const Lt={__name:"DifficultyChip",props:{difficulty:{type:String,required:!0}},setup(e){const t=e;return(r,o)=>(u(),l("p",{class:h(["difficulty",t.difficulty==="easy"?"bg-green-600":t.difficulty==="medium"?"bg-yellow-600":"bg-red-600"])},j(t.difficulty),3))}},Nt=E(Lt,[["__scopeId","data-v-354605de"]]);const Ut={__name:"NotificationAnswers",props:{correct:{type:Boolean,required:!0}},setup(e){const t=e;return(r,o)=>(u(),l("div",{class:h(["notification",t.correct?"bg-green-500":"bg-red-500"])},j(t.correct?"Correct":"Wrong"),3))}};const kt={key:0,class:"question-container"},qt=["innerHTML"],Rt={class:"answers"},Vt=["onClick","innerHTML"],Dt={key:1,class:"loading"},Gt={__name:"QuestionPage",setup(e){const t=G(),r=H(),o=Ft(),s=Z(),a=v(null),c=v([]),f=v(!1),y=v(!1),{changeScore:i}=te(),D=p=>{y.value=p>0,f.value=!0,setTimeout(()=>{i(p),r.push("/vue_trivia/")},1e3)};return K(async()=>{a.value=await s.getQuestion(t.params.id),c.value.push({id:c.value.length,correct:!0,answer:a.value.correct_answer,points:a.value.difficulty==="easy"?10:a.value.difficulty==="medium"?20:30}),a.value.incorrect_answers.map(p=>{c.value.push({id:c.value.length,correct:!1,answer:p,points:-5})}),c.value=Mt(c.value)}),(p,Ht)=>(u(),l(w,null,[a.value?(u(),l("div",kt,[x(W,null,{default:Q(()=>[z(j(a.value.category),1)]),_:1}),$("div",{class:"question",innerHTML:a.value.question},null,8,qt),$("div",Rt,[(u(!0),l(w,null,X(c.value,b=>(u(),l("div",{key:b.id,class:h([ee(o).getColor(b.id),"answer"]),onClick:Kt=>D(b.points),innerHTML:b.answer},null,10,Vt))),128))]),x(Nt,{difficulty:a.value.difficulty},null,8,["difficulty"])])):(u(),l("div",Dt,"Loading...")),f.value?(u(),J(Ut,{key:2,correct:y.value},null,8,["correct"])):Y("",!0)],64))}},Wt=E(Gt,[["__scopeId","data-v-c1a73651"]]);export{Wt as default};