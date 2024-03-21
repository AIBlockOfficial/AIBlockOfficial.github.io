"use strict";(self.webpackChunkaiblock_dev=self.webpackChunkaiblock_dev||[]).push([[2380],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(96540),a=r(20053),i=r(84142),o=r(75489),l=r(16654),s=r(21312);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(o.A,{href:t,className:(0,a.A)("card padding--lg",c.cardContainer)},r)}function u(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.A)("text--truncate",c.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.A)("text--truncate",c.cardDescription),title:o},o))}function d(e){let{item:t}=e;const r=(0,i._o)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.cC)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.$S)();return n.createElement(f,{items:r.items,className:t})}function f(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,i.d1)(t);return n.createElement("section",{className:(0,a.A)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},72831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(58168),a=(r(96540),r(15680)),i=r(3514),o=r(84142);const l={sidebar_position:1,hide_title:!0,sidebar_label:"Tutorials",title:"Tutorials",tags:["2Way.js","valence","getting started"]},s="Tutorials",c={unversionedId:"tutorials-overview",id:"tutorials-overview",title:"Tutorials",description:"The following sections serves as your comprehensive guide to understanding and implementing the powerful features and functionalities of AIBlock.",source:"@site/docs/tutorials-overview.mdx",sourceDirName:".",slug:"/tutorials-overview",permalink:"/docs/tutorials-overview",draft:!1,tags:[{label:"2Way.js",permalink:"/docs/tags/2-way-js"},{label:"valence",permalink:"/docs/tags/valence"},{label:"getting started",permalink:"/docs/tags/getting-started"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_title:!0,sidebar_label:"Tutorials",title:"Tutorials",tags:["2Way.js","valence","getting started"]},sidebar:"docsSidebar",previous:{title:"2 Way Transaction",permalink:"/docs/network-wiki/two-way-transaction"},next:{title:"2Way.js Tutorials",permalink:"/docs/2wayjs-tutorials"}},p={},u=[{value:"\ud83d\ude80 Ready to Dive In?",id:"-ready-to-dive-in",level:2}],d={toc:u},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tutorials"},"Tutorials"),(0,a.yg)("p",null,"The following sections serves as your comprehensive guide to ",(0,a.yg)("strong",{parentName:"p"},"understanding and implementing the powerful features and functionalities of AIBlock"),"."),(0,a.yg)("p",null,"\u26a1\ufe0f ",(0,a.yg)("strong",{parentName:"p"},"2Way.js")," will help you ship a wallet applications that interact with the AIBlock network ",(0,a.yg)("strong",{parentName:"p"},"in no time"),"."),(0,a.yg)("p",null,"\ud83d\udcb8 Building smart contracts can be challenging and unreliable. ",(0,a.yg)("strong",{parentName:"p"},"No smart contracts")," with ",(0,a.yg)("strong",{parentName:"p"},"AIBlock"),"! Instead, ",(0,a.yg)("strong",{parentName:"p"},"integrate new or existing applications")," to the AIBlock ecosystem by simply using our ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/overview"},"API"),"."),(0,a.yg)("p",null,"\ud83d\udca5 Ready for more? Use ",(0,a.yg)("strong",{parentName:"p"},"Valence")," and it's ",(0,a.yg)("strong",{parentName:"p"},"available plugins")," for easy web3 application implementations."),(0,a.yg)("h2",{id:"-ready-to-dive-in"},"\ud83d\ude80 Ready to Dive In?"),(0,a.yg)(i.A,{items:(0,o.$S)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);