"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),u=r,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||s;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_label:"JSON Schema in Practice - Validators"},i="JSON Schema in Practice - Validators",o={unversionedId:"preliminary/json-schema/practice-validators",id:"preliminary/json-schema/practice-validators",title:"JSON Schema in Practice - Validators",description:"Click here if YouTube does not work go to our GitHub.",source:"@site/docs/preliminary/json-schema/practice-validators.md",sourceDirName:"preliminary/json-schema",slug:"/preliminary/json-schema/practice-validators",permalink:"/wot-cg/tutorials/whatiswot/docs/preliminary/json-schema/practice-validators",draft:!1,editUrl:"https://github.com/w3c/wot-cg/docs/preliminary/json-schema/practice-validators.md",tags:[],version:"current",frontMatter:{sidebar_label:"JSON Schema in Practice - Validators"},sidebar:"tutorialSidebar",previous:{title:"JSON Schema in Practice - Advanced Topics",permalink:"/wot-cg/tutorials/whatiswot/docs/preliminary/json-schema/practice-advanced"},next:{title:"OSI Layers and Network Topologies",permalink:"/wot-cg/tutorials/whatiswot/docs/preliminary/osi-layers"}},l={},c=[{value:"Validator Examples",id:"validator-examples",level:2},{value:"json-everything",id:"json-everything",level:3},{value:"json-schema-validator",id:"json-schema-validator",level:3},{value:"gojsonschema",id:"gojsonschema",level:3},{value:"jsonschema-rs",id:"jsonschema-rs",level:3},{value:"json-kotlin-schema",id:"json-kotlin-schema",level:3},{value:"Basic Validation Flow",id:"basic-validation-flow",level:2},{value:"Javascript AJV",id:"javascript-ajv",level:2},{value:"Python - jsonschema",id:"python---jsonschema",level:2}],p={toc:c},h="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(h,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-schema-in-practice---validators"},"JSON Schema in Practice - Validators"),(0,r.kt)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/ZKoWLyaWuaw?si=Qo-mBPkp8-J33o7C",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,r.kt)("a",{href:"https://github.com/w3c/wot-cg/blob/main/Tutorials/whatiswot/8-JSON_Schema_in_Practice_3/8-JSON-Schema-3.mp4"},"Click here if YouTube does not work go to our GitHub."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"In the previous tutorials of JSON Schema, we have shown the features and basic implementations of JSON Schema.\nIn this tutorial, we will deliver the actual validation process with libraries and examples."),(0,r.kt)("p",null,"Throughout this tutorial, we will mainly focus on validation with the JavaScript library AJV (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv"},"https://github.com/ajv-validator/ajv"),") and the Python library jsonschema(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/python-jsonschema/jsonschema"},"https://github.com/python-jsonschema/jsonschema"),") but there are many other libraries in different programming languages and tools to validate JSON Schema."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ajv and jsonschema",src:a(6958).Z,width:"4044",height:"527"})),(0,r.kt)("h2",{id:"validator-examples"},"Validator Examples"),(0,r.kt)("p",null,"Here are some of the most popular validators in different programming languages."),(0,r.kt)("p",null,"However, numerous other validators exist. For further information, you can check out the JSON Schema website (",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/implementations.html#validator-rust"},"https://json-schema.org/implementations.html#validator-rust"),")."),(0,r.kt)("h3",{id:"json-everything"},"json-everything"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gregsdennis/json-everything"},"https://github.com/gregsdennis/json-everything")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"json-everything",src:a(2276).Z,width:"2131",height:"398"})),(0,r.kt)("h3",{id:"json-schema-validator"},"json-schema-validator"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pboettch/json-schema-validator"},"https://github.com/pboettch/json-schema-validator")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"json-schema-validator",src:a(4756).Z,width:"2662",height:"481"})),(0,r.kt)("h3",{id:"gojsonschema"},"gojsonschema"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/xeipuuv/gojsonschema"},"https://github.com/xeipuuv/gojsonschema")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gojsonschema",src:a(8501).Z,width:"2456",height:"311"})),(0,r.kt)("h3",{id:"jsonschema-rs"},"jsonschema-rs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Stranger6667/jsonschema-rs"},"https://github.com/Stranger6667/jsonschema-rs")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jsonschema-rs",src:a(6966).Z,width:"2012",height:"508"})),(0,r.kt)("h3",{id:"json-kotlin-schema"},"json-kotlin-schema"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pwall567/json-kotlin-schema"},"https://github.com/pwall567/json-kotlin-schema")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"json-kotlin-schema",src:a(1952).Z,width:"2346",height:"472"})),(0,r.kt)("h2",{id:"basic-validation-flow"},"Basic Validation Flow"),(0,r.kt)("p",null,"This is the basic validation flow that all libraries follow.\nThe library takes a schema for your JSON data and validates your data according to the schema. Outputs the validation result as a boolean."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"basic validation flow",src:a(8972).Z,width:"4349",height:"1737"})),(0,r.kt)("h2",{id:"javascript-ajv"},"Javascript AJV"),(0,r.kt)("p",null,"So, let\u2019s start with AJV! It is a JavaScript library."),(0,r.kt)("p",null,"This is the same temperature sensor example we used before. Let\u2019s examine it in JavaScript code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const Ajv = require("ajv");\nconst ajv = new Ajv();\n\nconst schema = {\n  type: "object",\n  properties: {\n    temperature: { type: "number" },\n    unit: { type: "string" },\n    temperatureOf: { type: "string" },\n  },\n  required: ["temperature", "unit"],\n  additionalProperties: false,\n};\nconst validate = ajv.compile(schema);\nconst data = {\n  temperature: 15.7,\n  unit: "Celsius",\n  temperatureOf: "weather",\n};\nconst valid = validate(data);\nif (valid) {\n  console.log("JSON SCHEMA is valid");\n} else {\n  console.log("JSON SCHEMA is invalid");\n  console.log(validate.errors);\n}\n')),(0,r.kt)("p",null,"These lines allow us to import the AJV:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Ajv = require("ajv");\nconst ajv = new Ajv();\n')),(0,r.kt)("p",null,"This is the Schema that describes the JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const schema = {\n  type: "object",\n  properties: {\n    temperature: { type: "number" },\n    unit: { type: "string" },\n    temperatureOf: { type: "string" },\n  },\n  required: ["temperature", "unit"],\n  additionalProperties: false,\n};\n')),(0,r.kt)("p",null,"With this line of code, AJV takes schema as a parameter compiles it to function, and caches it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const validate = ajv.compile(schema);\n")),(0,r.kt)("p",null,"This is the data to be validated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const data = {\n  temperature: 15.7,\n  unit: "Celsius",\n  temperatureOf: "weather",\n};\n')),(0,r.kt)("p",null,"This step actually validates the data and writes the results into a valid boolean."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const valid = validate(data);\n")),(0,r.kt)("p",null,"This step is for printing the result of the validation. If valid is true then, it prints \xabJSON Schema is valid.\xbb.\nOtherwise, it prints the \xabJSON Schema is not valid.\xbb sentence and the error message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if (valid) {\n  console.log("JSON Schema is valid");\n} else {\n  console.log("JSON Schema is invalid");\n  console.log(validate.errors);\n}\n')),(0,r.kt)("p",null,"It outputs that schema is valid since the data that we enter suits the predefined schema.\nThe output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"JSON Schema is valid"\n')),(0,r.kt)("h2",{id:"python---jsonschema"},"Python - jsonschema"),(0,r.kt)("p",null,"Now let's take a look at the same JSON Schema example in Python jsonschema. It is an implementation of the\xa0JSON Schema specification for Python."),(0,r.kt)("p",null,"We will use the same temperature example that we used for AJV but in Python this time."),(0,r.kt)("p",null,"Let's take a look at the code in detail."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"showLineNumbers",showLineNumbers:!0},'from\xa0jsonschema\xa0import\xa0validate\n\xa0\nschema\xa0=\xa0{\xa0\n\xa0\xa0\xa0\xa0"type":\xa0"object",\xa0\n\xa0\xa0\xa0\xa0"properties":\xa0\xa0\xa0\xa0{\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"temperature":\xa0{"type":"number"},\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"unit":\xa0{"type":\xa0"string"},\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"temperatureOf": {"type":\xa0"string"}\xa0\n\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0"required":\xa0\xa0["temperature",\xa0"unit"],\n\xa0\xa0\xa0\xa0"additionalProperties":\xa0False\xa0\n}\n\ndata\xa0=\xa0{\xa0\n\xa0\xa0\xa0\xa0"temperature":\xa015.7,\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0"unit":\xa0"Celsius",\xa0\n\xa0\xa0\xa0\xa0"temperatureOf":\xa034\n}\xa0\n\nvalidate(instance =\xa0data,\xa0schema = schema)\xa0\n')),(0,r.kt)("p",null,"With this line of code, we are importing the function from the library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from\xa0jsonschema\xa0import\xa0validate\n")),(0,r.kt)("p",null,"This is the same schema from the previous example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'schema\xa0=\xa0{\xa0\n\xa0\xa0\xa0\xa0"type":\xa0"object",\xa0\n\xa0\xa0\xa0\xa0"properties":\xa0\xa0\xa0\xa0{\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"temperature":\xa0{"type":"number"},\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"unit":\xa0{"type":\xa0"string"},\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"temperatureOf": {"type":\xa0"string"}\xa0\n\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0"required":\xa0\xa0["temperature",\xa0"unit"],\n\xa0\xa0\xa0\xa0"additionalProperties":\xa0False\xa0\n}\n')),(0,r.kt)("p",null,"This is the data to be validated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'data\xa0=\xa0{\xa0\n\xa0\xa0\xa0\xa0"temperature":\xa015.7,\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0"unit":\xa0"Celsius",\xa0\n\xa0\xa0\xa0\xa0"temperatureOf":\xa034\n}\xa0\n')),(0,r.kt)("p",null,"This validate function takes the data and the schema validates it and prints the result. If the data is valid, it does not print anything. Otherwise, it prints the error message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"validate(instance =\xa0data,\xa0schema = schema)\xa0\n")),(0,r.kt)("p",null,"The code outputs that the data is not valid since the property \xabtemperatureOf\xbb needs to be a string. However, in the given data it is an integer.\nTherefore the output is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"jsonschema.exceptions.ValidationError:\n34 is not of type 'string'\n\nFailed validating 'type' in schema['properties\u2019]\n['temperatureOf']: {'type': 'string'}\n\nOn instance['temperatureOf\u2019]: 34\n")))}m.isMDXComponent=!0},6958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ajv-python-combined-4f701bb3562f617dea69eb3ea9fd4955.png"},8972:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/basic-validation-0b61d17563efc615ba291740938bb0bf.png"},8501:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gojsonschema-4e415765a40797dd277ec035f9547f30.png"},2276:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/json-everything-2047b689d071e4666bde9025ba80336a.png"},1952:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/json-kotlin-schema-ba07ae6736d8921943861be94e748b85.png"},4756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/json-schema-validator-22eb36a4d0a30c43b8d2e673977296e6.png"},6966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jsonschema-rs-01669ee44d8410e8cc70935ccdf72905.png"}}]);