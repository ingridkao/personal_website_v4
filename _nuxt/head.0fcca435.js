import{u as o,v as f,A as p,z as l,B as g}from"./entry.75cd8c2d.js";import{u as h}from"./composables.303ca8d5.js";const x=(n,c=l())=>{const r=o(n),m=f();p(()=>o(n),(i=r)=>{if(!c.path||!i)return;const e=Object.assign({},(i==null?void 0:i.head)||{});e.meta=[...e.meta||[]],e.link=[...e.link||[]];const s=e.title||(i==null?void 0:i.title);s&&(e.title=s),m.public.content.host;const t=(e==null?void 0:e.description)||(i==null?void 0:i.description);t&&e.meta.filter(u=>u.name==="description").length===0&&e.meta.push({name:"description",content:t}),e!=null&&e.image||(i==null||i.image),g(()=>h(e))},{immediate:!0})};export{x as u};
