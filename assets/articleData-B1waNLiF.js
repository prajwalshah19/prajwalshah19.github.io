import{n as e}from"./useRequest-v96Hhzu6.js";var t=async()=>await e.fetch(`*[_type == "article" && defined(slug.current)] | order(date desc, _id asc) {
    _id, title, slug, excerpt, date, comingSoon
  }`),n=async t=>await e.fetch(`*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      date,
      link,
      comingSoon,
      content
    }`,{slug:t});export{t as n,n as t};