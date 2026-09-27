import{a as e}from"./chunk-BEqpzyXh.js";import{n as t,u as n}from"./createLucideIcon-Bicn8FPk.js";import{n as r,r as i,t as a}from"./sanity-DTiNofc_.js";import{t as o}from"./dist-BjWBvII9.js";import{t as s}from"./ExperienceList-BonmAa5G.js";var c=e(n(),1),l=async()=>a.fetch(`*[_type == "richText" && label == "about"][0]{
      _id,
      label,
      content
    }`),u=async()=>a.fetch(`*[_type == "plainText" && label == "githubLink"][0]{
      _id,
      label,
      content
    }`),d=async()=>a.fetch(`*[_type == "plainText" && label == "linkedinLink"][0]{
      _id,
      label,
      content
    }`),f=t(),p={block:{normal:({children:e})=>Array.isArray(e)&&e.length===1&&typeof e[0]==`string`&&e[0].trim()===``?(0,f.jsx)(`div`,{className:`h-2`}):(0,f.jsx)(`p`,{className:`mb-4`,children:e})}},m=()=>{let[e,t]=(0,c.useState)(null),[n,a]=(0,c.useState)(null),[m,h]=(0,c.useState)(null);(0,c.useEffect)(()=>{l().then(t).catch(console.error),u().then(a).catch(console.error),d().then(h).catch(console.error)},[]);let g=[{label:`GitHub`,url:n?.content},{label:`LinkedIn`,url:m?.content}].filter(e=>e.url);return(0,f.jsx)(r,{children:(0,f.jsxs)(`div`,{className:`w-full max-w-2xl mx-auto px-6 pb-24`,children:[(0,f.jsx)(`div`,{className:`text-sm text-primary dark:text-secondary leading-relaxed`,children:e?.content&&(0,f.jsx)(o,{value:e.content,components:p})}),g.length>0&&(0,f.jsx)(`div`,{className:`flex gap-4 mt-2 mb-4`,children:g.map(e=>(0,f.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1 text-sm text-primary dark:text-secondary opacity-70 hover:opacity-100 hover:underline underline-offset-4 transition-opacity`,children:[e.label,(0,f.jsx)(i,{className:`w-3.5 h-3.5`,"aria-hidden":`true`})]},e.label))}),(0,f.jsx)(`h2`,{className:`text-sm font-semibold text-primary dark:text-secondary mt-12 mb-2`,children:`Experience`}),(0,f.jsx)(s,{})]})})};export{m as default};