"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(r),p=a,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"Architecture Patterns"},i=void 0,s={unversionedId:"Architecture Patterns",id:"Architecture Patterns",title:"Architecture Patterns",description:"In this section, we will introduce and discuss different architecture patterns and how devices interact with controllers, agents, and servers.",source:"@site/docs/Architecture Patterns.md",sourceDirName:".",slug:"/Architecture Patterns",permalink:"/wot-cg/tutorials/whatiswot/docs/Architecture Patterns",draft:!1,editUrl:"https://github.com/w3c/wot-cg/docs/Architecture Patterns.md",tags:[],version:"current",frontMatter:{id:"Architecture Patterns"},sidebar:"tutorialSidebar",previous:{title:"Application Domains",permalink:"/wot-cg/tutorials/whatiswot/docs/Application Domains"},next:{title:"Building Blocks",permalink:"/wot-cg/tutorials/whatiswot/docs/Building Blocks"}},c={},l=[{value:"Device Controllers",id:"device-controllers",level:2},{value:"Thing-to-Thing",id:"thing-to-thing",level:2},{value:"Gateways",id:"gateways",level:2},{value:"Digital Twins",id:"digital-twins",level:2},{value:"Cross-domain Collaboration",id:"cross-domain-collaboration",level:2}],d={toc:l},h="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, we will introduce and discuss different architecture patterns and how devices interact with controllers, agents, and servers. "),(0,a.kt)("p",null,"Before, we explained the server and client models and how they operate. Now, let's see how they're applied in WoT architectures."),(0,a.kt)("h2",{id:"device-controllers"},"Device Controllers"),(0,a.kt)("p",null,"A common deployment pattern is a local device controlled by a user-operated remote controller. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let\u2019s recall the smart house example from the previous section. A remote controller can interact with the electronic\xa0devices through the local home network. At least one electronic device acts as a server, capable of receiving and responding to requests, while the remote controller acts as a client, sending messages for actions like sensor readings or device activation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"smart-home-request",src:r(2609).Z,width:"1196",height:"363"})),(0,a.kt)("h2",{id:"thing-to-thing"},"Thing-to-Thing"),(0,a.kt)("p",null,"In this pattern devices communicate directly with each other."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let's take a heater and a temperature sensor. When the sensor detects a change in room condition, for example, as temperature drops below a set threshold, it sends a control message to the electronic device to turn on the heater.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"thing-to-thing",src:r(7956).Z,width:"582",height:"249"})),(0,a.kt)("h2",{id:"gateways"},"Gateways"),(0,a.kt)("p",null,"The smart home gateways pattern is achieved by placing a gateway between a home network and the internet to manage electronic devices inside the house. They can receive commands from a remote controller over the internet and serve as both clients and servers."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For instance, the remote controller - in this case a smartphone, turns on the electronic device - the security camera. Then gateway acts as a client for the camera has the client role and as a server for the smartphone.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Conversely, when the security camera sends a message to the smartphone, the gateway acts as a server for the security camera while it also acts as a client for the smartphone. If the camera plays the client role, it can bypass the firewalls easily.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gateway",src:r(5622).Z,width:"653",height:"320"})),(0,a.kt)("h2",{id:"digital-twins"},"Digital Twins"),(0,a.kt)("p",null,"Digital twins are models of real-world devices hosted on cloud servers or edge devices. They are useful for representing real-world devices that may not be continuously online or to test simulations and services before they are deployed to real devices."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"digital-twin",src:r(8557).Z,width:"535",height:"292"})),(0,a.kt)("p",null,"Digital twins can model one or more devices. Digital Twins can be categorized in different ways depending on whether the device is connected to the cloud or a gateway."),(0,a.kt)("h2",{id:"cross-domain-collaboration"},"Cross-domain Collaboration"),(0,a.kt)("p",null,"Lastly, in cross-domain collaborations, each system interacts with systems from other domains. In those models, this can occur directly in a peer-to-peer manner or indirectly through collaboration platforms."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, Smart Factory with Smart City, Smart City with Smart Home may collaborate to exchange information to optimize operations.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cross-domain-collab",src:r(4278).Z,width:"766",height:"463"})))}u.isMDXComponent=!0},4278:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cross-domain-collab-05f15ad2f937e691f22ec3a2f3120ff3.png"},8557:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/digital-twin-8d3243b12d24f3a6b726897e92460fea.png"},5622:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gateway-73f1139a0ee5744f004c640fe2016c9f.png"},2609:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/smart-home-request-response-29169b7a70843e1499f11955908e7b45.png"},7956:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/thing-to-thing-8909ec34f31cd3f1a660ba6b0185a10c.png"}}]);