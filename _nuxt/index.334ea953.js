import{o as n,a as i,A as s,y as d,a0 as m,C as h,Z as y,u as o,c as g,z as b,Q as x}from"./entry.deab03ee.js";import k from"./MapboxBox.36186b80.js";import v from"./NavList.cbf99911.js";import"./_commonjsHelpers.28e086c5.js";const C={class:"relative inline-flex items-center mr-5 mt-5 cursor-pointer"},w=s("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"},null,-1),B={class:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"},N={__name:"Toggles",props:{label:{type:String,default:""}},emits:{toggleChange:{type:"change",default:()=>{}}},setup(l,{emit:e}){const a=l,r=t=>{e("toggleChange",t.target.checked)};return(t,c)=>(n(),i("label",C,[s("input",{type:"checkbox",value:"",class:"sr-only peer",onInput:r},null,32),w,s("span",B,d(a.label),1)]))}},q={__name:"index",async setup(l){let e,a;const r=([e,a]=m(()=>x("travel").find()),e=await e,a(),e),t=h({toggle:!1}),c=p=>{t.toggle=p};return(p,T)=>{const _=N,f=k,u=v;return n(),i("main",null,[y(_,{label:"地圖顯示",onToggleChange:c}),o(t).toggle?(n(),g(f,{key:0})):o(r)?(n(),g(u,{key:1,navs:o(r)},null,8,["navs"])):b("",!0)])}}};export{q as default};
