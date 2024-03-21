"use strict";(self.webpackChunkaiblock_dev=self.webpackChunkaiblock_dev||[]).push([[6691],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>m});var a=n(96540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,y=r(e,["components","mdxType","originalType","parentName"]),d=l(n),h=s,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},y),{},{components:n})):a.createElement(m,o({ref:t},y))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(58168),s=(n(96540),n(15680));const i={title:"2-Way Payments",description:"Sending and receiving payments through 2Way.js is quick and simple",sidebar_label:"2-Way Payments",sidebar_position:2,hide_title:!0,tags:["2Way.js","getting started"]},o="2-Way Payments",r={unversionedId:"2wayjs-tutorials/two-way-payments",id:"2wayjs-tutorials/two-way-payments",title:"2-Way Payments",description:"Sending and receiving payments through 2Way.js is quick and simple",source:"@site/docs/2wayjs-tutorials/two-way-payments.mdx",sourceDirName:"2wayjs-tutorials",slug:"/2wayjs-tutorials/two-way-payments",permalink:"/docs/2wayjs-tutorials/two-way-payments",draft:!1,tags:[{label:"2Way.js",permalink:"/docs/tags/2-way-js"},{label:"getting started",permalink:"/docs/tags/getting-started"}],version:"current",sidebarPosition:2,frontMatter:{title:"2-Way Payments",description:"Sending and receiving payments through 2Way.js is quick and simple",sidebar_label:"2-Way Payments",sidebar_position:2,hide_title:!0,tags:["2Way.js","getting started"]},sidebar:"docsSidebar",previous:{title:"Send and Receive Payments",permalink:"/docs/2wayjs-tutorials/send-and-receive"},next:{title:"Create an Item",permalink:"/docs/2wayjs-tutorials/create-an-item"}},c={},l=[{value:"Send a Payment for an Item",id:"send-a-payment-for-an-item",level:2},{value:"Fetch Pending 2-Way Payments",id:"fetch-pending-2-way-payments",level:2},{value:"Accepting and Rejecting 2-Way Payments",id:"accepting-and-rejecting-2-way-payments",level:2}],y={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,s.yg)(d,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"2-way-payments"},"2-Way Payments"),(0,s.yg)("p",null,"The problem in every blockchain (other than AIBlock \ud83d\ude09) is that Alice pays Bob some coins, but the chain never records ",(0,s.yg)("em",{parentName:"p"},"why"),". Put another way, there's no record of trade where Alice pays Bob\nfor an item, and Bob sends Alice this item. Instead, payments on blockchain just look like charity, as though Alice felt sorry for Bob and decided to send him some coin for coffee (or maybe cocaine, the chain doesn't say).\nThe closest you can currently get is to create a smart contract that encapsulates this logic, but those take far too long to write and are prone to risky\nand expensive bugs. "),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"2-Way payments solve this problem.")," Alice can send Bob ",(0,s.yg)("inlineCode",{parentName:"p"},"10")," tokens, and Bob can send Alice ",(0,s.yg)("inlineCode",{parentName:"p"},"1")," item, and both events are recorded on the AIBlock chain with no smart contracts, no fuss!"),(0,s.yg)("br",null),(0,s.yg)("h2",{id:"send-a-payment-for-an-item"},"Send a Payment for an Item"),(0,s.yg)("p",null,"2-Way transactions on AIBlock are atomic, meaning that either both Alice and Bob get what they want, or the entire transaction is canceled. But they're also async, meaning that Alice and Bob don't need to be online\nat the same time in order for the transaction to go through. Let's test this as Alice, wanting to make a ",(0,s.yg)("inlineCode",{parentName:"p"},"10")," token payment to Bob for ",(0,s.yg)("inlineCode",{parentName:"p"},"1")," of his on-chain items"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'import { initIAssetToken, initIAssetItem, Wallet } from \'@2waychain/2wayjs\';\n\n// ... wallet initialization set up\n\n// The tokens we want to send\nconst tokensToSend = {"Token": 10};\n\n// The item we want to receive\nconst itemAliceWants = {\n  "Item": {\n      "amount": 10,                // The amount of the item we want\n      "drs_tx_hash": "default_drs_tx_hash" // The genesis transaction hash for the item, its identifier on-chain\n  }};\n\n// Make the 2-way payment as Alice\nconst paymentResult = await wallet.make2WayPayment(\n      bobAddress,       // Payment address\n      tokensToSend,     // Payment asset\n      itemAliceWants,   // Receiving asset\n      allKeypairs,      // Alice\'s keypairs\n      aliceAddress,     // Receive address\n  );\n')),(0,s.yg)("p",null,"This will complete Alice's side of the trade. ",(0,s.yg)("strong",{parentName:"p"},"NOTE: Alice will need to initialize her wallet with a Valence node to connect to.")," The Valence node is what allows this transaction to be asynchronous, because Bob will\nretrieve the transaction information from the Valence node before he can agree to the payment terms. This also means that Bob must be connected to the same Valence node in order to see the 2-way transaction from his side."),(0,s.yg)("p",null,"If Alice wants to save the response information from this 2-Way transaction, she can retrieve the DRUID and encrypted transaction values for storage as the result of the ",(0,s.yg)("inlineCode",{parentName:"p"},"make2WayPayment")," call:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"const { druid, encryptedTx } = paymentResult.content.make2WayPaymentResponse;\n")),(0,s.yg)("p",null,"The DRUID is the ",(0,s.yg)("inlineCode",{parentName:"p"},"string")," value that Alice and Bob agree on so that their trades can be matched on the blockchain. It's generated by 2Way.js automatically, so you don't have to think about this too much, but this value\ncan be absolutely anything. So long as both Alice and Bob use the same DRUID in their 2-Way transactions, the transactions will be matched by the chain successfully."),(0,s.yg)("br",null),(0,s.yg)("h2",{id:"fetch-pending-2-way-payments"},"Fetch Pending 2-Way Payments"),(0,s.yg)("p",null,"If Bob is connected to the same Valence node as Alice, he can retrieve her pending 2-Way payment and see if he likes the terms of the trade or not:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"// Fetch pending 2-Way payments\nconst pending2WayPaymentsResult = await wallet.fetchPending2WayPayments(\n      allKeypairs,      // All of Bob's keypairs, which the function will pull addresses from\n      allEncryptedTxs,  // Encrypted transactions, which are only required if they've been saved by Bob before\n  );\n\nconst pending2WayPayments: IResponseIntercom<IPending2WayTxDetails> = pending2WayPaymentsResult.content.fetchPending2WayPaymentsResponse;\n")),(0,s.yg)("p",null,"The result of this call might look something like the following:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "2a646...f8b98": {\n        "timestamp": 1655117144145,\n        "value": {\n            "druid": "DRUID0xd0f407436f7f1fc494d7aee22939090e",\n            "senderExpectation": {\n                "from": "",\n                "to": "2a646...f8b98",\n                "asset": {\n                    "Item": {\n                        "amount": 10,\n                        "drs_tx_hash": "default_drs_tx_hash"\n                    }\n                }\n            },\n            "receiverExpectation": {\n                "from": "295b2...8d4fa",\n                "to": "18f70...caeda",\n                "asset": {\n                    "Token": 25200\n                }\n            },\n            "status": "pending",\n            "computeHost": "http://127.0.0.1:3003"\n        }\n    }\n}\n')),(0,s.yg)("p",null,"Here we can see all kinds of information about the proposed 2-Way payment, including the DRUID, the item or asset that Alice expects in return from Bob, and the status of the transaction (in this case, ",(0,s.yg)("inlineCode",{parentName:"p"},'"pending"'),"). "),(0,s.yg)("p",null,"If Bob has the item that Alice wants, he now has 2 options: he can either ",(0,s.yg)("strong",{parentName:"p"},"accept the terms"),", in which case the transaction will be executed, or ",(0,s.yg)("strong",{parentName:"p"},"reject them"),", in which case nothing happens and Alice and Bob both keep their\nrespective assets."),(0,s.yg)("br",null),(0,s.yg)("h2",{id:"accepting-and-rejecting-2-way-payments"},"Accepting and Rejecting 2-Way Payments"),(0,s.yg)("p",null,"2Way.js provides built-in ways to accept and reject 2-Way payments, assuming that both parties are coordinating off the same Valence node. "),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},"const druid = 'DRUID0xd0f407436f7f1fc494d7aee22939090e';    // DRUID value that matches Alice and Bob's transactions\nconst pending2WTransactions = pending2WayTransactionsResult   // The response we received from fetching pending 2-Way payments\n    .content\n    .fetchPending2WayPaymentsResponse;   \n\n// Accept a 2-Way payment using its unique `DRUID` identifier\nawait wallet.accept2WayPayment(druid, pending2WayTransactions, allKeypairs);\n\n//-- --------------------------------- OR ---------------------------------- --//\n\n// Reject a 2-Way payment using its unique `DRUID` identifier\nawait wallet.reject2WayPayment(druid, pending2WayTransactions, allKeypairs);\n")),(0,s.yg)("p",null,"Once called, 2Way.js will automatically send the right response to the Valence node, and the entire 2-Way transaction can be executed on the AIBlock chain if accepted. Once executed on-chain,\nboth Alice and Bob will see the balances of their respective assets updated to reflect the trade."))}p.isMDXComponent=!0}}]);