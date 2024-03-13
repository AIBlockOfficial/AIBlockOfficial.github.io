(self.webpackChunkaiblock_dev=self.webpackChunkaiblock_dev||[]).push([[9067],{86220:(e,t,o)=>{"use strict";o(96540),o(4213)},69509:(e,t,o)=>{"use strict";o(96540),o(86025),o(41653)},76011:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(58168),a=(o(96540),o(15680));o(69509),o(47335),o(19365),o(86220);const i={id:"storage-api",title:"Storage API",description:"The Storage node is responsible for storing the full blockchain history.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},r=void 0,s={unversionedId:"api/storage/storage-api",id:"api/storage/storage-api",title:"Storage API",description:"The Storage node is responsible for storing the full blockchain history.",source:"@site/docs/api/storage/storage-api.info.mdx",sourceDirName:"api/storage",slug:"/api/storage/storage-api",permalink:"/docs/api/storage/storage-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"storage-api",title:"Storage API",description:"The Storage node is responsible for storing the full blockchain history.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"fetch_balance",permalink:"/docs/api/mempool/fetch-balance"},next:{title:"info",permalink:"/docs/api/storage/info"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0.0"),(0,a.yg)("h1",{id:"storage-api"},"Storage API"),(0,a.yg)("p",null,"The Storage node is responsible for storing the full blockchain history.\nOnce blocks are mined by the miners and sent to the Mempool nodes for validation, they are pushed on to the Storage nodes for long-term storage.\nAnybody is allowed to request a full history of the blockchain from the Storage nodes, but they are not required to keep such a history to participate in the network."),(0,a.yg)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,a.yg)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,a.yg)("span",null,(0,a.yg)("a",{href:"mailto:byron.houwens@a-block.net"},"byron.houwens@a-block.net"))),(0,a.yg)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,a.yg)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,a.yg)("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GPL-3.0")))}u.isMDXComponent=!0},4213:function(e,t,o){var n,a,i,r=o(96763);a=[],void 0===(i="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,o)},n.onerror=function(){r.error("could not download file")},n.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var r=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):a(l.href)?n(e,t,o):i(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,r){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),o);else if(a(e))n(e,o,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var i="application/octet-stream"===e.type,r=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&r||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var p=s.URL||s.webkitURL,u=p.createObjectURL(e);a?a.location=u:location.href=u,a=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,a):n)||(e.exports=i)}}]);