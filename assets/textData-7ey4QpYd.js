import{t as e}from"./sanity-CUzrt_uQ.js";var t=async()=>e.fetch(`*[_type == "richText" && label == "bio"][0]{
      _id,
      label,
      content
    }`),n=async()=>e.fetch(`*[_type == "richText" && label == "about"][0]{
      _id,
      label,
      content
    }`),r=async()=>e.fetch(`*[_type == "richText" && label == "experience"][0]{
      _id,
      label,
      content
    }`),i=async()=>e.fetch(`*[_type == "richText" && label == "more"][0]{
      _id,
      label,
      content
    }`),a=async()=>e.fetch(`*[_type == "plainText" && label == "githubLink"][0]{
      _id,
      label,
      content
    }`),o=async()=>e.fetch(`*[_type == "plainText" && label == "linkedinLink"][0]{
      _id,
      label,
      content
    }`);export{a,r as i,t as n,o,i as r,n as t};