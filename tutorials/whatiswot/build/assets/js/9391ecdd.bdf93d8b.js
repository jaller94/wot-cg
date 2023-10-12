"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_position:2},r="JSON in Practice",o={unversionedId:"json-tutorial/JSON in Practice",id:"json-tutorial/JSON in Practice",title:"JSON in Practice",description:"In the previous section, we showed mostly primitive types of JSON. In this section, we will focus on first arrays and objects, and then we will mention common mistakes when writing JSON. At the end, we will demonstrate the usage of JSON generation and parsing.",source:"@site/docs/json-tutorial/JSON in Practice.md",sourceDirName:"json-tutorial",slug:"/json-tutorial/JSON in Practice",permalink:"/wot-cg/tutorials/whatiswot/docs/json-tutorial/JSON in Practice",draft:!1,editUrl:"https://github.com/w3c/wot-cg/docs/json-tutorial/JSON in Practice.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/wot-cg/tutorials/whatiswot/docs/json-tutorial/JSON"},next:{title:"JSON Schema",permalink:"/wot-cg/tutorials/whatiswot/docs/json-tutorial/JSON Schema"}},l={},c=[{value:"JSON Array",id:"json-array",level:3},{value:"Nested objects",id:"nested-objects",level:3},{value:"Common Mistakes",id:"common-mistakes",level:2},{value:"Space character",id:"space-character",level:4},{value:"Case sensitiveness",id:"case-sensitiveness",level:4},{value:"Quotation marks",id:"quotation-marks",level:4},{value:"Comments",id:"comments",level:3},{value:"Trailing Commas",id:"trailing-commas",level:3},{value:"Programming Language Syntax",id:"programming-language-syntax",level:3},{value:"Exercise",id:"exercise",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...s}=e;return(0,i.kt)(p,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"json-in-practice"},"JSON in Practice"),(0,i.kt)("p",null,"In the previous section, we showed mostly primitive types of JSON. In this section, we will focus on first arrays and objects, and then we will mention common mistakes when writing JSON. At the end, we will demonstrate the usage of JSON generation and parsing."),(0,i.kt)("h3",{id:"json-array"},"JSON Array"),(0,i.kt)("p",null,"In JSON, each value in an array is called an item.\nArrays with items of different types are also allowed."),(0,i.kt)("p",null,"Accepted types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Number"),(0,i.kt)("li",{parentName:"ul"},"String"),(0,i.kt)("li",{parentName:"ul"},"Boolean"),(0,i.kt)("li",{parentName:"ul"},"Null")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"json array",src:n(1466).Z,width:"1066",height:"612"})),(0,i.kt)("h3",{id:"nested-objects"},"Nested objects"),(0,i.kt)("p",null,"Nested objects are allowed in JSON. \u201cmeasurement\u201d keyword is an example of this."),(0,i.kt)("p",null,"Objects start and end with a curly brackets. It is basically defining keywords and mapping these keywords to values.\nIn this example, we define the name and value pairs to describe the data sent by sensors."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nested object",src:n(2956).Z,width:"1226",height:"692"})),(0,i.kt)("p",null,"There is a JSON array of JSON Objects which means all items are JSON objects in that array."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"json object array",src:n(704).Z,width:"1498",height:"842"})),(0,i.kt)("h2",{id:"common-mistakes"},"Common Mistakes"),(0,i.kt)("p",null,"Now we will talk about common mistakes while writing JSON files."),(0,i.kt)("h4",{id:"space-character"},"Space character"),(0,i.kt)("p",null,"Let's start with the space character which frequently overlooked.\nSpace is a character too."),(0,i.kt)("p",null,"So \u201cisActive\u201d is not the same as \u201cisActive \u201d."),(0,i.kt)("h4",{id:"case-sensitiveness"},"Case sensitiveness"),(0,i.kt)("p",null,'Also JSON is case sensitive. Thus, "isActive" with upper case "A" is not the same as \u201cisactive\u201d with lower case "a".'),(0,i.kt)("p",null,"Paying attention to this is important to make sure that object assignments and comparisons work."),(0,i.kt)("h4",{id:"quotation-marks"},"Quotation marks"),(0,i.kt)("p",null,"Lets continue with the mistakes about quotation marks."),(0,i.kt)("p",null,"Forgetting quotation marks is wrong, it will show validation errors everywhere."),(0,i.kt)("p",null,"Also putting them when you should not cause unwanted results."),(0,i.kt)("p",null,"For example \u2192 \u201cname\u201d:\u201dtrue\u201d is not the same as \u201cname\u201d:true without quotation marks."),(0,i.kt)("p",null,"The first one is not a boolean but a string; so it will be interpreted as a string. The same problem happens with numbers too."),(0,i.kt)("p",null,'"value": "90"\xa0would be interpreted as string because of the unnecessary quotation marks.'),(0,i.kt)("p",null,"We should always pay attention to the type we want to use and use quotation marks when necessary.\nThis way, the types will be correctly interpreted by your programming language."),(0,i.kt)("h3",{id:"comments"},"Comments"),(0,i.kt)("p",null,"Putting comments inside JSON documents is not valid contrast to most of the programming languages."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"comment",src:n(738).Z,width:"1272",height:"578"})),(0,i.kt)("h3",{id:"trailing-commas"},"Trailing Commas"),(0,i.kt)("p",null,"Commas should not be used at the final name-value pair.\nThat is why the first one is not valid but difficult to see if you are using it inside of a Javascript editor rather than a JSON editor."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"json js",src:n(2587).Z,width:"1506",height:"650"})),(0,i.kt)("h3",{id:"programming-language-syntax"},"Programming Language Syntax"),(0,i.kt)("p",null,"Similar to the previous one depending on the programming language that you use syntax might differ. Since JSON will be the object of that programming language before it is parsed and serialized as JSON."),(0,i.kt)("p",null,"For example, in JSON key-value pairs have to be with quotation marks whereas in JavaScript files it is not necessary to have quotation marks, both work."),(0,i.kt)("p",null,"The syntax of the keywords might differ as well. For example, true false keywords in JSON, Rust, JavaScript, and Golang are written lowercase while in Python the first letter of these keywords needs to be capitalized."),(0,i.kt)("p",null,"Similar to the previous one, the null keyword differs in JSON and Python. In JSON and JavaScript it is null with lowercase while in Python, the same meaning is given with the \xabNone\xbb keyword."),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("p",null,"Open a code editor. In this example, we used VS Code. Write a JSON file of your choice and save it by giving a file name and adding a .json extension. Then the editor will recognize the file as a JSON document."),(0,i.kt)("p",null,"Now we will read a JSON file from the file system using a JSON library in Python. We open the JSON file that we have previously saved to the file system with open-as-file key words. Then, we can load that JSON file with the load function into the data object. We can also print it to see what is inside the JSON file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import json\n\nwith open('JSON_example.json') as file:\n    data: json.load(file)\n\nprint(data)\n")),(0,i.kt)("p",null,"Printing the data object in console can look like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"[{'name': 'Temperature sensor', \u2018sensorID': '20014\u2019,\n'type': 'Temperature', 'unit': 'Celsius', 'value': 42}]\n")),(0,i.kt)("p",null,"There are many ways to send a JSON file via different protocols, one of them is using Python and its request library for sending an HTTP request. With this library, you can use the post function to send an HTTP POST request with a JSON Payload. As a parameter, it takes the URL to send to and the JSON object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import requests\n\nurl = 'https://example.com/myResource'\njsonObj = {'someKey': 'someValue'}\n\nx = requests.post(url, json = jsonObj)\n\nprint(x.text)\n")))}m.isMDXComponent=!0},738:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/comment-0703df62a9891bfe98964b44abf1d69d.png"},1466:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/json-array-d18cfa2d719efbc32c9330f7d0b66288.png"},2587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/json-js-236f5b2eebf9167cbaf89b9942541a8d.png"},704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/json-object-array-59ae10e557607872af1247b9a4f46db9.png"},2956:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nested-object-e36147b3de950dcd738f6fcb0fee7833.png"}}]);