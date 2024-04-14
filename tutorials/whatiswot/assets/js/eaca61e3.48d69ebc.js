"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[247],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={id:"json3"},i="JSON Schema",o={unversionedId:"json-tutorial/json3",id:"json-tutorial/json3",title:"JSON Schema",description:"We will now briefly explain Schema Languages and then move on to JSON Schema. JSON Schema is particularly important in the Web of Things context as it describes and validates JSON data.",source:"@site/docs/json-tutorial/JSON Schema.md",sourceDirName:"json-tutorial",slug:"/json-tutorial/json3",permalink:"/wot-cg/tutorials/whatiswot/docs/json-tutorial/json3",draft:!1,editUrl:"https://github.com/w3c/wot-cg/docs/json-tutorial/JSON Schema.md",tags:[],version:"current",frontMatter:{id:"json3"},sidebar:"tutorialSidebar",previous:{title:"JSON in Practice",permalink:"/wot-cg/tutorials/whatiswot/docs/json-tutorial/json2"},next:{title:"JSON Schema in Practice",permalink:"/wot-cg/tutorials/whatiswot/docs/json-tutorial/JSON Schema in Practice"}},s={},c=[{value:"Schema",id:"schema",level:2},{value:"JSON Schema",id:"json-schema-1",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-schema"},"JSON Schema"),(0,r.kt)("p",null,"We will now briefly explain Schema Languages and then move on to JSON Schema. JSON Schema is particularly important in the Web of Things context as it describes and validates JSON data."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Many payload formats offer a way to describe what a payload instance should look like. Generally, these are called Schema Languages."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON Schema"),(0,r.kt)("li",{parentName:"ul"},"XML Schema"),(0,r.kt)("li",{parentName:"ul"},"PDF Schema")),(0,r.kt)("h2",{id:"json-schema-1"},"JSON Schema"),(0,r.kt)("p",null,"JSON Schema serves as a JSON document that describes and validates the structure of a JSON payload instance."),(0,r.kt)("p",null,"Its main purpose is to provide guidance to senders, such as clients, on the expected format of their requests, while enabling receivers to automatically validate incoming payloads. Despite being JSON itself, JSON Schema serves as metadata."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"json schema diagram",src:a(6739).Z,width:"1280",height:"720"})),(0,r.kt)("p",null,'For instance, a basic JSON Schema like "type": "array" specifies that it accepts an array type in other JSON documents. Similar specifications can be defined for other data types in JSON, such as:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"string"),(0,r.kt)("li",{parentName:"ul"},"number"),(0,r.kt)("li",{parentName:"ul"},"boolean"),(0,r.kt)("li",{parentName:"ul"},"null")),(0,r.kt)("p",null,"During the validation process on the receiver's end, this schema ensures that the incoming data conforms to the specified structure. Below is an example of how such validation can be implemented in JavaScript:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"js-schema",src:a(5951).Z,width:"1490",height:"484"})),(0,r.kt)("p",null,"It can look different in other programming languages.\nFor instance in Python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'validate(instance={"name" : "Eggs", "price" : 34.99}, schema=schema)\n')),(0,r.kt)("p",null,"Java:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Set<ValidationMessage> errors = schema.validate(node);\n")),(0,r.kt)("p",null,"C++:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"jsonschema::json_validator<json> validator(sch);\n// Will call reporter for each schema violation\nvalidator.validate(data, reporter);\n")),(0,r.kt)("p",null,"Of course, way more advanced validations can be possible with JSON Schema such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Length of a String"),(0,r.kt)("li",{parentName:"ul"},"Regular expressions"),(0,r.kt)("li",{parentName:"ul"},"URIs"),(0,r.kt)("li",{parentName:"ul"},"Email addresses"),(0,r.kt)("li",{parentName:"ul"},"IP addresses"),(0,r.kt)("li",{parentName:"ul"},"Max/min for numbers")),(0,r.kt)("p",null,"In Arrays:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How many items"),(0,r.kt)("li",{parentName:"ul"},"Allowed types")),(0,r.kt)("p",null,"In Objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Required properties"),(0,r.kt)("li",{parentName:"ul"},"Amount of properties")))}m.isMDXComponent=!0},5951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/js-schema-e211ad6050ca1e16954ec6f2ff86167d.png"},6739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema-f318a4344ff14e4b4cd2eec88ba6e8a3.png"}}]);