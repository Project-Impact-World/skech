"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));const a=({href:e,name:a})=>t.default.createElement("a",{href:e,style:{color:"white"}},a);exports.List=({items:e})=>{let a;return a=null==e?[1,2,3,4]:e,t.default.createElement("div",{style:{padding:"10px",backgroundColor:"green"}},t.default.createElement("ul",null,a.map(((e,a)=>t.default.createElement("li",{key:a},e)))))},exports.NavLink=a,exports.Navbar=({links:e})=>{let l;return l=e||[{href:"/home",name:"Home"},{href:"/about",name:"About"},{href:"/about",name:"Blogs"},{href:"/about",name:"FAQs"}],t.default.createElement("nav",{style:{display:"flex",justifyContent:"end",backgroundColor:"#039dfc",height:"100px",width:"100vw",position:"absolute",top:"0px",right:"0px"}},t.default.createElement("div",{style:{height:"100%",width:10*l.length+"vw",display:"flex",flexFlow:"row wrap",alignItems:"center",justifyContent:"space-evenly"}},l.map(((e,l)=>t.default.createElement("div",{key:l},t.default.createElement(a,{href:e.href,name:e.name}))))))};
