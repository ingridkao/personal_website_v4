import{u as d}from"./asyncData.adb9fe7e.js";import{i as l,l as p,m as v,p as f,q as m,s as _,j as g,v as h,k as r,h as y}from"./entry.66795c36.js";import"./MapboxBox.b1b85144.js";/* empty css                      */import"./_commonjsHelpers.28e086c5.js";const j=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=p(i),e=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!e.value&&f("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${_(e.value)}`,()=>h(e.value));return{navigation:o}},render(i){const t=g(),{navigation:e}=i,o=n=>r(y,{to:n._path},()=>n.title),a=(n,u)=>r("ul",u?{"data-level":u}:null,n.map(s=>s.children?r("li",null,[o(s),a(s.children,u+1)]):r("li",null,o(s)))),c=n=>a(n,0);return t!=null&&t.default?t.default({navigation:e,...this.$attrs}):c(e)}});export{j as default};
