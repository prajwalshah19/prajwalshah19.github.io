import{n as e}from"./useRequest-v96Hhzu6.js";var t=async()=>e.fetch(`*[_type == "project"] | order(date desc, _id asc) {
    _id, name, slug, description, dates
  }`);function n(e){return{...e,tags:Array.isArray(e.tags)?e.tags.filter(e=>typeof e==`string`):[],content:typeof e.content==`string`?e.content:``}}var r=async t=>{let r=await e.fetch(`*[_type == "project" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      link,
      description,
      dates,
      date,
      tags,
      content
    }`,{slug:t});return r?n(r):null};export{t as n,r as t};