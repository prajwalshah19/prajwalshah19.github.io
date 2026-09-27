import{t as e}from"./sanity-DTiNofc_.js";var t=`{
  _id,
  title,
  slug,
  type,
  "imageAssetRef": image.asset._ref,
  creator,
  caption,
  body,
  markdown,
  link,
  date,
  featured
}`,n=async()=>{let n=`*[_type == "boardItem"] | order(featured desc, date desc) ${t}`;return await e.fetch(n)},r=async n=>{let r=`*[_type == "boardItem" && slug.current == $slug][0] ${t}`;return await e.fetch(r,{slug:n})},i=`kp6s20e6`,a=`production`;function o(e){if(!e)return null;let t=e.match(/^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/);if(!t)return null;let[,n,r,o]=t;return`https://cdn.sanity.io/images/${i}/${a}/${n}-${r}.${o}`}export{n,o as r,r as t};