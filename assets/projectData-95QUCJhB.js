import{t as e}from"./sanity-CUzrt_uQ.js";var t=async()=>await e.fetch(`*[_type == "project"] | order(date desc) {
      _id,
      name,
      slug,
      link,
      description,
      dates,
      date,
      tags,
      content
    }`),n=async t=>await e.fetch(`*[_type == "project" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      link,
      description,
      dates,
      date,
      tags,
      content
    }`,{slug:t});export{t as n,n as t};