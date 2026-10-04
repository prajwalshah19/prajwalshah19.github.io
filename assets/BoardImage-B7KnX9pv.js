import{t as e}from"./jsx-runtime-BFHTAqYS.js";import{n as t}from"./useRequest-v96Hhzu6.js";var n=`
  _id,
  title,
  slug,
  type,
  "imageAssetRef": image.asset._ref,
  creator,
  caption,
  body,
  link,
  date,
  featured`,r=async()=>{let e=`*[_type == "boardItem"] | order(featured desc, date desc, _id asc) {
    ${n},
    "hasDetail": coalesce(length(markdown) > 0 || count(body) > 0, false)
  }`;return await t.fetch(e)},i=async e=>{let r=`*[_type == "boardItem" && slug.current == $slug][0] {
    ${n},
    markdown
  }`;return await t.fetch(r,{slug:e})},a=`kp6s20e6`,o=`production`;function s(e){if(!e)return null;let t=e.match(/^image-([a-zA-Z0-9]+)-(\d+)x(\d+)-(\w+)$/);if(!t)return null;let[,n,r,i,s]=t,c=Number(r),l=Number(i);return!Number.isSafeInteger(c)||!Number.isSafeInteger(l)||c<=0||l<=0?null:{width:c,height:l,transformable:[`jpg`,`jpeg`,`pjpg`,`png`,`webp`,`tif`,`tiff`,`avif`,`gif`].includes(s.toLowerCase()),url:`https://cdn.sanity.io/images/${a}/${o}/${n}-${r}x${i}.${s}`}}function c(e,t=640){let n=s(e);return!n||!Number.isSafeInteger(t)||t<=0?null:n.transformable?`${n.url}?w=${Math.min(t,n.width)}&fit=max&auto=format&q=80`:n.url}function l(e,t=!1){let n=s(e);if(!n)return null;if(!n.transformable)return{src:n.url,width:n.width,height:n.height};let r=[...new Set((t?[640,960,1280,1920]:[320,640,960,1280]).map(e=>Math.min(e,n.width)))];return{src:c(e,t?1280:640),srcSet:r.map(t=>`${c(e,t)} ${t}w`).join(`, `),sizes:t?`(min-width: 672px) 624px, calc(100vw - 48px)`:`(min-width: 640px) 280px, calc(100vw - 74px)`,width:n.width,height:n.height}}var u=e();function d({assetRef:e,alt:t,detail:n=!1,className:r}){let i=l(e,n);return i?(0,u.jsx)(`img`,{...i,alt:t,className:r,loading:`lazy`,decoding:`async`}):null}export{i as n,r,d as t};