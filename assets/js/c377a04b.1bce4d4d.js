"use strict";(self.webpackChunkudon_sharp=self.webpackChunkudon_sharp||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"index",title:"UdonSharp",hide_title:!0,sidebar_position:0},s="UdonSharp",p={unversionedId:"index",id:"index",title:"UdonSharp",description:"A compiler for compiling C to Udon assembly",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/vrchat-community/UdonSharp/edit/master/Docs/Source/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"UdonSharp",hide_title:!0,sidebar_position:0},sidebar:"mainSidebar",next:{title:"Setup",permalink:"/setup"}},u={},d=[{value:"A compiler for compiling C# to Udon assembly",id:"a-compiler-for-compiling-c-to-udon-assembly",level:2},{value:"Features that Udon supports which are currently not supported by U#",id:"features-that-udon-supports-which-are-currently-not-supported-by-u",level:2},{value:"C# features supported",id:"c-features-supported",level:2},{value:"Differences from regular Unity C# to note",id:"differences-from-regular-unity-c-to-note",level:2},{value:"Udon bugs that affect U#",id:"udon-bugs-that-affect-u",level:2},{value:"Setup",id:"setup",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Asset explorer asset creation",id:"asset-explorer-asset-creation",level:4},{value:"Example scripts",id:"example-scripts",level:3},{value:"The rotating cube demo",id:"the-rotating-cube-demo",level:4},{value:"Other examples",id:"other-examples",level:4},{value:"Credits",id:"credits",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"udonsharp"},"UdonSharp"),(0,i.kt)("h2",{id:"a-compiler-for-compiling-c-to-udon-assembly"},"A compiler for compiling C# to Udon assembly"),(0,i.kt)("p",null,"UdonSharp is a compiler that compiles C# to Udon assembly. UdonSharp is not currently conformant to any version of the C# language specification, so there are many things that are not implemented or will not work."),(0,i.kt)("h2",{id:"features-that-udon-supports-which-are-currently-not-supported-by-u"},"Features that Udon supports which are currently not supported by U#"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UdonSharp is currently at feature parity with the Udon graph as far as I am aware. Please message me or make an issue if you find something that should be supported, but is not.")),(0,i.kt)("h2",{id:"c-features-supported"},"C# features supported"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flow control",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Supports: ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," ",(0,i.kt)("inlineCode",{parentName:"li"},"while")," ",(0,i.kt)("inlineCode",{parentName:"li"},"for")," ",(0,i.kt)("inlineCode",{parentName:"li"},"do")," ",(0,i.kt)("inlineCode",{parentName:"li"},"foreach")," ",(0,i.kt)("inlineCode",{parentName:"li"},"switch")," ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," ",(0,i.kt)("inlineCode",{parentName:"li"},"break")," ",(0,i.kt)("inlineCode",{parentName:"li"},"continue")," ",(0,i.kt)("inlineCode",{parentName:"li"},"ternary operator (condition ? true : false)")," ",(0,i.kt)("inlineCode",{parentName:"li"},"??")))),(0,i.kt)("li",{parentName:"ul"},"Implicit and explicit type conversions"),(0,i.kt)("li",{parentName:"ul"},"Arrays and array indexers"),(0,i.kt)("li",{parentName:"ul"},"All builtin arithmetic operators"),(0,i.kt)("li",{parentName:"ul"},"Conditional short circuiting ",(0,i.kt)("inlineCode",{parentName:"li"},"(true || CheckIfTrue())")," will not execute CheckIfTrue()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"typeof()")),(0,i.kt)("li",{parentName:"ul"},"Extern methods with out or ref parameters (such as many variants of ",(0,i.kt)("inlineCode",{parentName:"li"},"Physics.Raycast()"),")"),(0,i.kt)("li",{parentName:"ul"},"User defined methods with parameters and return values, supports out/ref, extension methods, and ",(0,i.kt)("inlineCode",{parentName:"li"},"params")),(0,i.kt)("li",{parentName:"ul"},"User defined properties"),(0,i.kt)("li",{parentName:"ul"},"Static user methods"),(0,i.kt)("li",{parentName:"ul"},"UdonSharpBehaviour inheritence, virtual methods, etc."),(0,i.kt)("li",{parentName:"ul"},"Unity/Udon event callbacks with arguments. For instance, registering a OnPlayerJoined event with a VRCPlayerApi argument is valid."),(0,i.kt)("li",{parentName:"ul"},"String interpolation"),(0,i.kt)("li",{parentName:"ul"},"Field initializers"),(0,i.kt)("li",{parentName:"ul"},"Jagged arrays"),(0,i.kt)("li",{parentName:"ul"},"Referencing other custom UdonSharpBehaviour classes, accessing fields, and calling methods on them"),(0,i.kt)("li",{parentName:"ul"},"Recursive method calls are supported via the ",(0,i.kt)("inlineCode",{parentName:"li"},"[RecursiveMethod]")," attribute")),(0,i.kt)("h2",{id:"differences-from-regular-unity-c-to-note"},"Differences from regular Unity C# to note"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the best experience making UdonSharp scripts, make your scripts inherit from ",(0,i.kt)("inlineCode",{parentName:"li"},"UdonSharpBehaviour")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"MonoBehaviour")),(0,i.kt)("li",{parentName:"ul"},"If you need to call ",(0,i.kt)("inlineCode",{parentName:"li"},"GetComponent<UdonBehaviour>()")," you will need to use ",(0,i.kt)("inlineCode",{parentName:"li"},"(UdonBehaviour)GetComponent(typeof(UdonBehaviour))")," at the moment since the generic get component is not exposed for UdonBehaviour yet. ",(0,i.kt)("inlineCode",{parentName:"li"},"GetComponent<T>()")," works for other Unity component types though."),(0,i.kt)("li",{parentName:"ul"},"Udon currently only supports array ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")," collections and by extension UdonSharp only supports arrays at the moment. It looks like they might support ",(0,i.kt)("inlineCode",{parentName:"li"},"List<T>")," at some point, but it is not there yet."),(0,i.kt)("li",{parentName:"ul"},"Field initilizers are evaluated at compile time, if you have any init logic that depends on other objects in the scene you should use Start for this."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"UdonSynced")," attribute on fields that you want to sync."),(0,i.kt)("li",{parentName:"ul"},"Numeric casts are checked for overflow due to UdonVM limitations"),(0,i.kt)("li",{parentName:"ul"},"The internal type of variables returned by ",(0,i.kt)("inlineCode",{parentName:"li"},".GetType()")," will not always match what you may expect since U# abstracts some types in order to make them work in Udon. For instance, any jagged array type will return a type of ",(0,i.kt)("inlineCode",{parentName:"li"},"object[]")," instead of something like ",(0,i.kt)("inlineCode",{parentName:"li"},"int[][]")," for a 2D int jagged array.")),(0,i.kt)("h2",{id:"udon-bugs-that-affect-u"},"Udon bugs that affect U#"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutating methods on structs do not modify the struct (this can be seen on things like calling Normalize() on a Vector3) ",(0,i.kt)("a",{parentName:"li",href:"https://vrchat.canny.io/vrchat-udon-closed-alpha-bugs/p/raysetorigin-and-raysetdirection-not-working"},"https://vrchat.canny.io/vrchat-udon-closed-alpha-bugs/p/raysetorigin-and-raysetdirection-not-working"))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unity 2019.4.31f1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vrchat.com/home/download"},"VRCSDK3 + UdonSDK")),(0,i.kt)("li",{parentName:"ul"},"The latest ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/vrchat-community/UdonSharp/releases/latest"},"release")," of UdonSharp")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Read the getting started with Udon doc page ",(0,i.kt)("a",{parentName:"li",href:"https://docs.vrchat.com/docs/getting-started-with-udon"},"https://docs.vrchat.com/docs/getting-started-with-udon")," this has basic installation instructions for Udon."),(0,i.kt)("li",{parentName:"ol"},"Install the latest version of the VRCSDK3 linked on the getting started."),(0,i.kt)("li",{parentName:"ol"},"Get the latest release of UdonSharp from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/vrchat-community/UdonSharp/releases/latest"},"here")," and install it to your project.")),(0,i.kt)("h3",{id:"getting-started"},"Getting started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make a new object in your scene"),(0,i.kt)("li",{parentName:"ol"},"Add an ",(0,i.kt)("inlineCode",{parentName:"li"},"Udon Behaviour")," component to your object"),(0,i.kt)("li",{parentName:"ol"},'Below the "New Program" button click the dropdown and select "Udon C# Program Asset"'),(0,i.kt)("li",{parentName:"ol"},"Now click the New Program button, this will create a new UdonSharp program asset for you"),(0,i.kt)("li",{parentName:"ol"},"Click the Create Script button and choose a save destination and name for the script."),(0,i.kt)("li",{parentName:"ol"},"This will create a template script that's ready for you to start working on, open the script in your editor of choice and start programming")),(0,i.kt)("h4",{id:"asset-explorer-asset-creation"},"Asset explorer asset creation"),(0,i.kt)("p",null,"Instead of creating assets from an UdonBehaviour you can also do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Right-click in your project asset explorer"),(0,i.kt)("li",{parentName:"ol"},"Navigate to Create > U# script"),(0,i.kt)("li",{parentName:"ol"},"Click U# script, this will open a create file dialog"),(0,i.kt)("li",{parentName:"ol"},"Choose a name for your script and click Save"),(0,i.kt)("li",{parentName:"ol"},"This will create a .cs script file and an UdonSharp program asset that's set up for the script in the same directory")),(0,i.kt)("h3",{id:"example-scripts"},"Example scripts"),(0,i.kt)("h4",{id:"the-rotating-cube-demo"},"The rotating cube demo"),(0,i.kt)("p",null,"This rotates the object that it's attached to by 90 degrees every second"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using UnityEngine;\nusing UdonSharp;\n\npublic class RotatingCubeBehaviour : UdonSharpBehaviour\n{\n    private void Update()\n    {\n        transform.Rotate(Vector3.up, 90f * Time.deltaTime);\n    }\n}\n")),(0,i.kt)("h4",{id:"other-examples"},"Other examples"),(0,i.kt)("p",null,"For more example scripts take a look at the wiki page for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Merlin-san/UdonSharp/wiki/examples"},"examples"),", the Examples folder included with U#, or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Merlin-san/UdonSharp/wiki/community-resources"},"community resources")," page on the wiki."),(0,i.kt)("h2",{id:"credits"},"Credits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/vrchat-community/UdonSharp/blob/master/CONTRIBUTORS.md"},"CONTRIBUTORS.md")," for people who have helped provide improvments to UdonSharp"),(0,i.kt)("li",{parentName:"ul"},"The open source project ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pardeike/Harmony"},"Harmony")," helps Udonsharp provide a better editor experience")),(0,i.kt)("h1",{id:""}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/Ub2n8ZA"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Discord-Merlin%27s%20Discord%20Server-blueviolet?logo=discord",alt:"Discord"}))))}m.isMDXComponent=!0}}]);