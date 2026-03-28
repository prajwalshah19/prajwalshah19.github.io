import{t as e}from"./sanity-CUzrt_uQ.js";var t=async()=>await e.fetch(`*[_type == "article"] | order(date desc) {
      _id,
      title,
      slug,
      excerpt,
      date,
      link,
      content
    }`),n=async t=>await e.fetch(`*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      date,
      link,
      content
    }`,{slug:t});export{t as n,n as t};