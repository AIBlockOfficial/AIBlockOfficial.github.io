(self.webpackChunkaiblock_dev=self.webpackChunkaiblock_dev||[]).push([[205],{86220:(e,t,o)=>{"use strict";o(96540),o(4213)},69509:(e,t,o)=>{"use strict";o(96540),o(86025),o(41653)},64995:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=o(58168),n=(o(96540),o(15680));o(69509),o(47335),o(19365),o(86220);const a={id:"miner-api",title:"Miner API",description:"\u26a0\ufe0f **This section is still a WIP and is incomplete.** The Miner node is most like the Bitcoin miner you may be familiar with. They are responsible for mining new blocks that they receive from the Mempool nodes and collect the associated block reward for their efforts. They are only able to mine a block if they manage to get into the partition for that round.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},r=void 0,s={unversionedId:"api/miner/miner-api",id:"api/miner/miner-api",title:"Miner API",description:"\u26a0\ufe0f **This section is still a WIP and is incomplete.** The Miner node is most like the Bitcoin miner you may be familiar with. They are responsible for mining new blocks that they receive from the Mempool nodes and collect the associated block reward for their efforts. They are only able to mine a block if they manage to get into the partition for that round.",source:"@site/docs/api/miner/miner-api.info.mdx",sourceDirName:"api/miner",slug:"/api/miner/miner-api",permalink:"/docs/api/miner/miner-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"miner-api",title:"Miner API",description:"\u26a0\ufe0f **This section is still a WIP and is incomplete.** The Miner node is most like the Bitcoin miner you may be familiar with. They are responsible for mining new blocks that they receive from the Mempool nodes and collect the associated block reward for their efforts. They are only able to mine a block if they manage to get into the partition for that round.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"blockchain_entry",permalink:"/docs/api/storage/blockchain-entry"},next:{title:"info",permalink:"/docs/api/miner/info"}},l={},c=[],d={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,n.yg)(m,(0,i.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0.0"),(0,n.yg)("h1",{id:"miner-api"},"Miner API"),(0,n.yg)("p",null,"\u26a0\ufe0f ",(0,n.yg)("strong",{parentName:"p"},"This section is still a WIP and is incomplete.")," The Miner node is most like the Bitcoin miner you may be familiar with. They are responsible for mining new blocks that they receive from the Mempool nodes and collect the associated block reward for their efforts. They are only able to mine a block if they manage to get into the partition for that round."),(0,n.yg)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.yg)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,n.yg)("span",null,(0,n.yg)("a",{href:"mailto:byron.houwens@a-block.net"},"byron.houwens@a-block.net"))),(0,n.yg)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.yg)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,n.yg)("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GPL-3.0")))}p.isMDXComponent=!0},4213:function(e,t,o){var i,n,a,r=o(96763);n=[],void 0===(a="function"==typeof(i=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function i(e,t,o){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){c(i.response,t,o)},i.onerror=function(){r.error("could not download file")},i.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(i){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var r=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):n(l.href)?i(e,t,o):a(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,r){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),o);else if(n(e))i(e,o,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return i(e,t,o);var a="application/octet-stream"===e.type,r=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&r||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},d.readAsDataURL(e)}else{var m=s.URL||s.webkitURL,p=m.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout((function(){m.revokeObjectURL(p)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?i.apply(t,n):i)||(e.exports=a)}}]);