"use strict";(self.webpackChunkudon_sharp=self.webpackChunkudon_sharp||[]).push([[778],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7238:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"class-exposure-tree",title:"Class Exposure Tree",hide_title:!0},l="Class Exposure Tree",p={unversionedId:"class-exposure-tree",id:"class-exposure-tree",title:"Class Exposure Tree",description:"The Class Exposure Tree will tell you what classes and methods that are available in Udon.",source:"@site/docs/Class-Exposure-Tree.md",sourceDirName:".",slug:"/class-exposure-tree",permalink:"/class-exposure-tree",editUrl:"https://github.com/vrchat-community/UdonSharp/edit/main/Docs/Source/Class-Exposure-Tree.md",tags:[],version:"current",frontMatter:{id:"class-exposure-tree",title:"Class Exposure Tree",hide_title:!0},sidebar:"mainSidebar",previous:{title:"Runtime Exception Debugging",permalink:"/runtime-exception-debugging"},next:{title:"Networking Tips & Tricks",permalink:"/networking-tips-&-tricks"}},u={},c=[],d={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-exposure-tree"},"Class Exposure Tree"),(0,i.kt)("p",null,"The Class Exposure Tree will tell you what classes and methods that are available in Udon."),(0,i.kt)("p",null,"You can open the window by going to ",(0,i.kt)("inlineCode",{parentName:"p"},"Window > Udon Sharp > Class Exposure Tree")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Red = Not exposed to Udon"),(0,i.kt)("li",{parentName:"ul"},"Green = Exposed to Udon")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Udon Type Exposure Tree",src:r(434).Z,width:"875",height:"468"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Show base members")," toggle will show methods inherited from base classes that are exposed, for instance on things inheriting from ",(0,i.kt)("inlineCode",{parentName:"p"},"UnityEngine.Component"),", this will show the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetComponent<T>()")," functions since they're defined on the base class."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Hide whitelisted accessors")," option is mostly there for VRChat if they decide to move away from using the secure heap. This will only show any functions that may return any type of ",(0,i.kt)("inlineCode",{parentName:"p"},"UnityEngine.Object")," through a method return, method parameter, property, or field. This operates recursively so it will catch things that return structs that may contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"UnityEngine.Object")," as well."))}m.isMDXComponent=!0},434:function(e,t,r){t.Z=r.p+"assets/images/type-exposure-tree-c4007a984b7e4ff85294536709d690b1.png"}}]);