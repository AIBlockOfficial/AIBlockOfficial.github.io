"use strict";(self.webpackChunkaiblock_dev=self.webpackChunkaiblock_dev||[]).push([[8934],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(r),p=o,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),o=r(20053),i=r(84142),c=r(75489),a=r(16654),l=r(21312);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,o.A)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.A)("text--truncate",s.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.A)("text--truncate",s.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,i._o)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.cC)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.$S)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,i.d1)(t);return n.createElement("section",{className:(0,o.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},23822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(58168),o=(r(96540),r(15680)),i=r(3514),c=r(84142);const a={sidebar_position:1,hide_title:!0,sidebar_label:"Welcome",slug:"/",title:"Welcome - getting started"},l="Welcome to AIBlock",s={unversionedId:"welcome",id:"welcome",title:"Welcome - getting started",description:"Here you can find everything you need to get started in the AIBlock development environment.",source:"@site/docs/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_title:!0,sidebar_label:"Welcome",slug:"/",title:"Welcome - getting started"},sidebar:"docsSidebar",next:{title:"The AIBlock Network",permalink:"/docs/network-wiki"}},d={},u=[{value:"\ud83d\ude80 Ready to Dive In?",id:"-ready-to-dive-in",level:2}],m={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"welcome-to-aiblock"},"Welcome to AIBlock"),(0,o.yg)("p",null,"Here you can find everything you need to get started in the AIBlock development environment. "),(0,o.yg)("p",null,"Whether you're a developer exploring its capabilities or an enthusiast eager to delve into the world of blockchain technology,\nthis resource will provide you with insights, tutorials, and best practices to leverage the full potential of AIBlock. "),(0,o.yg)("p",null,"Discover how this innovative technology redefines the landscape of transactions and unlocks new possibilities in the realm of decentralized systems."),(0,o.yg)("h2",{id:"-ready-to-dive-in"},"\ud83d\ude80 Ready to Dive In?"),(0,o.yg)(i.A,{items:(0,c.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);