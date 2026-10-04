import"./chunk-BEqpzyXh.js";import{d as e,t}from"./jsx-runtime-BFHTAqYS.js";import{n,r,t as i}from"./useRequest-v96Hhzu6.js";import{t as a}from"./RequestError-bcH4I7TN.js";import{t as o}from"./dist-CPndh5kw.js";import{t as s}from"./ExperienceList-BkMYrVtr.js";e();var c=async()=>n.fetch(`*[_type == "richText" && label == "about"][0]{
      _id,
      label,
      content
    }`),l=async()=>n.fetch(`*[_type == "plainText" && label == "githubLink"][0]{
      _id,
      label,
      content
    }`),u=async()=>n.fetch(`*[_type == "plainText" && label == "linkedinLink"][0]{
      _id,
      label,
      content
    }`),d=t(),f={block:{normal:({children:e})=>Array.isArray(e)&&e.length===1&&typeof e[0]==`string`&&e[0].trim()===``?(0,d.jsx)(`div`,{className:`h-2`}):(0,d.jsx)(`p`,{className:`mb-4`,children:e})}},p=()=>{let e=i(`about`,c),t=i(`github`,l),n=i(`linkedin`,u),p=e.status===`ready`?e.data:null,m=t.status===`ready`?t.data:null,h=n.status===`ready`?n.data:null,g=[{label:`GitHub`,url:m?.content},{label:`LinkedIn`,url:h?.content}].filter(e=>e.url);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(`div`,{className:`w-full max-w-2xl mx-auto px-6 pb-24`,children:[e.status===`loading`&&(0,d.jsx)(`p`,{role:`status`,children:`Loading about…`}),e.status===`error`&&(0,d.jsx)(a,{label:`the about section`}),e.status===`ready`&&!p?.content?.length&&(0,d.jsx)(`p`,{role:`status`,children:`About information is not available yet.`}),(t.status===`error`||n.status===`error`)&&(0,d.jsx)(a,{label:`some social links`}),(0,d.jsx)(`div`,{className:`text-sm text-primary dark:text-secondary leading-relaxed`,children:p?.content&&(0,d.jsx)(o,{value:p.content,components:f})}),g.length>0&&(0,d.jsx)(`div`,{className:`flex gap-4 mt-2 mb-4`,children:g.map(e=>(0,d.jsxs)(`a`,{href:e.url||void 0,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1 text-sm text-primary dark:text-secondary opacity-70 hover:opacity-100 hover:underline underline-offset-4 transition-opacity`,children:[e.label,(0,d.jsx)(r,{className:`w-3.5 h-3.5`,"aria-hidden":`true`})]},e.label))}),(0,d.jsx)(`h2`,{className:`text-sm font-semibold text-primary dark:text-secondary mt-12 mb-2`,children:`Experience`}),(0,d.jsx)(s,{})]})})};export{p as default};