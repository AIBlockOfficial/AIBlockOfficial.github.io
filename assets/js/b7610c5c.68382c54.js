(self.webpackChunkaiblock_dev=self.webpackChunkaiblock_dev||[]).push([[9858],{86220:(e,o,t)=>{"use strict";t(96540),t(4213)},69509:(e,o,t)=>{"use strict";t(96540),t(86025),t(41653)},72763:(e,o,t)=>{"use strict";t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=t(58168),i=(t(96540),t(15680));t(69509),t(47335),t(19365),t(86220);const a={id:"mempool-api",title:"Mempool API",description:"\u26a0\ufe0f **Some sections may still be incomplete. We higly recommend getting started by downloading our [Postman collection](/docs/postman-collections)**.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},l=void 0,r={unversionedId:"api/mempool/mempool-api",id:"api/mempool/mempool-api",title:"Mempool API",description:"\u26a0\ufe0f **Some sections may still be incomplete. We higly recommend getting started by downloading our [Postman collection](/docs/postman-collections)**.",source:"@site/docs/api/mempool/mempool-api.info.mdx",sourceDirName:"api/mempool",slug:"/api/mempool/mempool-api",permalink:"/docs/api/mempool/mempool-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"mempool-api",title:"Mempool API",description:"\u26a0\ufe0f **Some sections may still be incomplete. We higly recommend getting started by downloading our [Postman collection](/docs/postman-collections)**.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Core Endpoints",permalink:"/docs/api/overview"},next:{title:"info",permalink:"/docs/api/mempool/info"}},s={},c=[],m={toc:c},p="wrapper";function d(e){let{components:o,...t}=e;return(0,i.yg)(p,(0,n.A)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,i.yg)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0.1"),(0,i.yg)("h1",{id:"mempool-api"},"Mempool API"),(0,i.yg)("p",null,"\u26a0\ufe0f ",(0,i.yg)("strong",{parentName:"p"},"Some sections may still be incomplete. We higly recommend getting started by downloading our ",(0,i.yg)("a",{parentName:"strong",href:"/docs/postman-collections"},"Postman collection")),"."),(0,i.yg)("p",null,"The Mempool node is a special type of node responsible for collecting transactions and bundling them into new blocks.\nThey also partition the mining network for mining and validate the blocks that these partitions mine.\nThere are only a limited number of Mempool nodes.  "),(0,i.yg)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,i.yg)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,i.yg)("span",null,(0,i.yg)("a",{href:"mailto:byron.houwens@a-block.ch"},"byron.houwens@a-block.ch"))),(0,i.yg)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,i.yg)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,i.yg)("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GPL-3.0")))}d.isMDXComponent=!0},4213:function(e,o,t){var n,i,a,l=t(96763);i=[],void 0===(a="function"==typeof(n=function(){"use strict";function o(e,o){return void 0===o?o={autoBom:!1}:"object"!=typeof o&&(l.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,o,t){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,o,t)},n.onerror=function(){l.error("could not download file")},n.send()}function i(e){var o=new XMLHttpRequest;o.open("HEAD",e,!1);try{o.send()}catch(e){}return 200<=o.status&&299>=o.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(o)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t.g&&t.g.global===t.g?t.g:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,o,t){var l=r.URL||r.webkitURL,s=document.createElement("a");o=o||e.name||"download",s.download=o,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):i(s.href)?n(e,o,t):a(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,t,l){if(t=t||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(o(e,l),t);else if(i(e))n(e,t,l);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){a(r)}))}}:function(e,o,t,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return n(e,o,t);var a="application/octet-stream"===e.type,l=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&l||s)&&"undefined"!=typeof FileReader){var m=new FileReader;m.onloadend=function(){var e=m.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},m.readAsDataURL(e)}else{var p=r.URL||r.webkitURL,d=p.createObjectURL(e);i?i.location=d:location.href=d,i=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?n.apply(o,i):n)||(e.exports=a)}}]);