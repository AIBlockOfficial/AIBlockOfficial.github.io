"use strict";(self.webpackChunkaiblock_dev=self.webpackChunkaiblock_dev||[]).push([[5146],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||c;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),a=r(20053),c=r(84142),i=r(75489),o=r(16654),s=r(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(i.A,{href:t,className:(0,a.A)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.A)("text--truncate",l.cardTitle),title:c},r," ",c),i&&n.createElement("p",{className:(0,a.A)("text--truncate",l.cardDescription),title:i},i))}function p(e){let{item:t}=e;const r=(0,c._o)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.cC)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.$S)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,c.d1)(t);return n.createElement("section",{className:(0,a.A)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},89685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(58168),a=(r(96540),r(15680)),c=r(3514),i=r(84142);const o={id:"address",title:"address",description:"address",custom_edit_url:null},s=void 0,l={unversionedId:"api/mempool/address",id:"api/mempool/address",title:"address",description:"address",source:"@site/docs/api/mempool/address.tag.mdx",sourceDirName:"api/mempool",slug:"/api/mempool/address",permalink:"/docs/api/mempool/address",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"address",title:"address",description:"address",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"create_item_asset",permalink:"/docs/api/mempool/create-item-asset"},next:{title:"fetch_balance",permalink:"/docs/api/mempool/fetch-balance"}},d={},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Checking and creating addresses"),(0,a.yg)(c.A,{items:(0,i.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);