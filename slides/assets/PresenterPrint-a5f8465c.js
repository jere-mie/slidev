import{d,u as _,a as h,c as m,b as p,e as n,f as t,t as s,g as a,F as u,r as f,n as g,h as v,o as r,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-10b76cac.js";import{N as P}from"./NoteDisplay-e00db6bd.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=p(()=>v.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:g(a(N))},[t("div",V,[t("div",L,[t("h1",S,s(a(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(r(!0),n(u,null,f(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),j])]),b(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/runner/work/slidev/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
