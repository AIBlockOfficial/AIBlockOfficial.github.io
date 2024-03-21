"use strict";(self.webpackChunkaiblock_dev=self.webpackChunkaiblock_dev||[]).push([[4982],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,u=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return t?a.createElement(u,o(o({ref:n},g),{},{components:t})):a.createElement(u,o({ref:n},g))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(58168),i=(t(96540),t(15680));const r={title:"Managing a Node",description:"How to interact with a mining node",sidebar_label:"Managing a Node",sidebar_position:0,hide_title:!1,tags:["mining","miner managing","miner interaction"]},o=void 0,s={unversionedId:"mining/managing-a-node",id:"mining/managing-a-node",title:"Managing a Node",description:"How to interact with a mining node",source:"@site/docs/mining/managing-a-node.mdx",sourceDirName:"mining",slug:"/mining/managing-a-node",permalink:"/docs/mining/managing-a-node",draft:!1,tags:[{label:"mining",permalink:"/docs/tags/mining"},{label:"miner managing",permalink:"/docs/tags/miner-managing"},{label:"miner interaction",permalink:"/docs/tags/miner-interaction"}],version:"current",sidebarPosition:0,frontMatter:{title:"Managing a Node",description:"How to interact with a mining node",sidebar_label:"Managing a Node",sidebar_position:0,hide_title:!1,tags:["mining","miner managing","miner interaction"]},sidebar:"docsSidebar",previous:{title:"Installing a Node",permalink:"/docs/mining/installing-a-node"}},l={},d=[{value:"API Endpoints",id:"api-endpoints",level:2},{value:'<strong><img src="https://img.shields.io/badge/GET-2176FF" alt="GET"/> <code>wallet_info</code></strong>',id:"img-srchttpsimgshieldsiobadgeget-2176ff-altget-wallet_info",level:3},{value:'<strong><img src="https://img.shields.io/badge/GET-2176FF" alt="GET"/> <code>payment_address</code></strong>',id:"img-srchttpsimgshieldsiobadgeget-2176ff-altget-payment_address",level:3},{value:'<strong><img src="https://img.shields.io/badge/POST-07BEB8" alt="POST"/> <code>make_payment</code></strong>',id:"img-srchttpsimgshieldsiobadgepost-07beb8-altpost-make_payment",level:3}],g={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Mining nodes can be managed and interacted with through API calls directly. Miners, if started with the ",(0,i.yg)("inlineCode",{parentName:"p"},"--with_user_index")," flag, will provide\nthe full range of API endpoints needed to handle tokens and keypairs accrued over the course of mining."),(0,i.yg)("h2",{id:"api-endpoints"},"API Endpoints"),(0,i.yg)("h3",{id:"img-srchttpsimgshieldsiobadgeget-2176ff-altget-wallet_info"},(0,i.yg)("strong",{parentName:"h3"},(0,i.yg)("img",{src:"https://img.shields.io/badge/GET-2176FF",alt:"GET"})," ",(0,i.yg)("inlineCode",{parentName:"strong"},"wallet_info"))),(0,i.yg)("p",null,"This endpoint will provide full information on the currently running miner, in particular the amount of tokens (and items, if applicable) the miner's\nwallet has accrued."),(0,i.yg)("p",null,"Example response:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "b06991e6acc945288819aee3df8d40f5",\n    "status": "Success",\n    "reason": "Wallet info successfully fetched",\n    "route": "wallet_info",\n    "content": {\n        "running_total": 28752801.881904762,\n        "item_total": {},\n        "addresses": {\n            "00b15e53a4d1a33742bce48e4213a89633abeaf87d9116f9e96b83ea7440d122": [\n                {\n                    "out_point": {\n                        "t_hash": "g118ce84fe0f416b43f9af805cc914b0",\n                        "n": 0\n                    },\n                    "value": {\n                        "Token": 7488539\n                    }\n                }\n            ],\n        }\n    }\n}\n')),(0,i.yg)("p",null,".."),(0,i.yg)("h3",{id:"img-srchttpsimgshieldsiobadgeget-2176ff-altget-payment_address"},(0,i.yg)("strong",{parentName:"h3"},(0,i.yg)("img",{src:"https://img.shields.io/badge/GET-2176FF",alt:"GET"})," ",(0,i.yg)("inlineCode",{parentName:"strong"},"payment_address"))),(0,i.yg)("p",null,"This endpoint will generate a new address for the miner node to be paid to, including the construction of an associated public/private keypair."),(0,i.yg)("p",null,"Example response:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "33888339c1f74c5297833d8a87b38984",\n    "status": "Success",\n    "reason": "New payment address generated",\n    "route": "payment_address",\n    "content": "ca5314e0cadd38c40f6168e4c8a275a83750dbea1c34d034f024d35f66abc214"\n}\n')),(0,i.yg)("p",null,".."),(0,i.yg)("h3",{id:"img-srchttpsimgshieldsiobadgepost-07beb8-altpost-make_payment"},(0,i.yg)("strong",{parentName:"h3"},(0,i.yg)("img",{src:"https://img.shields.io/badge/POST-07BEB8",alt:"POST"})," ",(0,i.yg)("inlineCode",{parentName:"strong"},"make_payment"))),(0,i.yg)("p",null,"This endpoint can be called in order to make a payment from the miner node to an address on the AIBlock network. The body of the request will\nneed to conform to the following structure:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "61e7f2a8bdc89d16fb7e9e13a82845a588af71d7ce3d25a27fe526c91393fb6f",\n    "amount": 72072000,\n    "passphrase": ""\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE: The ",(0,i.yg)("inlineCode",{parentName:"strong"},"amount")," field will be the number of token subunits. The number of subunits in an AIBlock token is 72072000, so if ",(0,i.yg)("inlineCode",{parentName:"strong"},"amount")," is 72072000 then you'll be\nmaking a payment of 1 full token.")),(0,i.yg)("p",null,"Example response:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "ab6a6f83948548149302d8aa344bb292",\n    "status": "Success",\n    "reason": "Payment processing",\n    "route": "make_payment",\n    "content": {\n        "61e7f2a8bdc89d16fb7e9e13a82845a588af71d7ce3d25a27fe526c91393fb6f": {\n            "asset": {\n                "Token": 72072000\n            },\n            "extra_info": null\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);