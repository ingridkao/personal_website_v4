import n from"./ContentQuery.1402c8c1.js";import{a as c,b as h,h as r}from"./entry.5bc028e1.js";import"./asyncData.17d46655.js";const C=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(f){const t=h(),{path:p,query:o}=f,m={...o||{},path:p||(o==null?void 0:o.path)||"/"},u=(e,a)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return r(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>u("default",e),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):u("not-found",e==null?void 0:e.data)}})}});export{C as default};
