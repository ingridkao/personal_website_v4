import{b as d,t as l,f,i as p,j as v,k as _,e as m,l as g,h as u,m as y}from"./entry.946d6c57.js";import{u as h}from"./asyncData.c9089c30.js";/* empty css                      */const x=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:t}=l(r),a=f(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&p("dd-navigation").value){const{navigation:e}=v();return{navigation:e}}const{data:o}=await h(`content-navigation-${_(a.value)}`,()=>g(a.value));return{navigation:o}},render(r){const t=m(),{navigation:a}=r,o=n=>u(y,{to:n._path},()=>n.title),e=(n,i)=>u("ul",i?{"data-level":i}:null,n.map(s=>s.children?u("li",null,[o(s),e(s.children,i+1)]):u("li",null,o(s)))),c=n=>e(n,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{x as default};
