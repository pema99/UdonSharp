"use strict";(self.webpackChunkudon_sharp=self.webpackChunkudon_sharp||[]).push([[342],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),h=r,m=s["".concat(d,".").concat(h)]||s[h]||c[h]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3126:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"udonsharp",title:"UdonSharp",hide_title:!0},d="UdonSharp",p={unversionedId:"udonsharp",id:"udonsharp",title:"UdonSharp",description:"* Attributes",source:"@site/docs/UdonSharp.md",sourceDirName:".",slug:"/udonsharp",permalink:"/udonsharp",editUrl:"https://github.com/vrchat-community/UdonSharp/edit/master/Docs/Source/UdonSharp.md",tags:[],version:"current",frontMatter:{id:"udonsharp",title:"UdonSharp",hide_title:!0},sidebar:"mainSidebar",previous:{title:"Frequently Asked Questions",permalink:"/frequently-asked-questions"},next:{title:"VRChat API",permalink:"/vrchat-api"}},u={},c=[{value:"UdonSynced",id:"udonsynced",level:2},{value:"Example",id:"example",level:3},{value:"UdonSyncMode",id:"udonsyncmode",level:3},{value:"UdonBehaviourSyncMode",id:"udonbehavioursyncmode",level:2},{value:"Example",id:"example-1",level:3},{value:"BehaviourSyncMode",id:"behavioursyncmode",level:3},{value:"DefaultExecutionOrder",id:"defaultexecutionorder",level:2},{value:"Example",id:"example-2",level:3},{value:"RecursiveMethod",id:"recursivemethod",level:2},{value:"Example",id:"example-3",level:3},{value:"FieldChangeCallback",id:"fieldchangecallback",level:2},{value:"Example",id:"example-4",level:3}],s={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"udonsharp"},"UdonSharp"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},"Attributes"))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"All supported attributes in UdonSharp\n| |Attribute| |\n| --- | --- | --- |\n|",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/HeaderAttribute.html"},"Header"),"|",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/HideInInspector.html"},"HideInInspector"),"|",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/dotnet/api/system.nonserializedattribute"},"NonSerialized"),"|\n|",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/SerializeField.html"},"SerializeField"),"|",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/SpaceAttribute.html"},"Space"),"|",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/TooltipAttribute.html"},"Tooltip"),"|\n|",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/ColorUsageAttribute.html"},"ColorUsage"),"|",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/GradientUsageAttribute.html"},"GradientUsage"),"|",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/TextAreaAttribute.html"},"TextArea"),"|\n|",(0,l.kt)("a",{parentName:"p",href:"#udonsynced"},"UdonSynced"),"|",(0,l.kt)("a",{parentName:"p",href:"#defaultexecutionorder"},"DefaultExecutionOrder"),"|",(0,l.kt)("a",{parentName:"p",href:"#udonbehavioursyncmode"},"UdonBehaviourSyncMode"),"|\n|",(0,l.kt)("a",{parentName:"p",href:"#recursivemethod"},"RecursiveMethod"),"|",(0,l.kt)("a",{parentName:"p",href:"#fieldchangecallback"},"FieldChangeCallback"),"|"),(0,l.kt)("h2",{id:"udonsynced"},"UdonSynced"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[UdonSynced]")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"[UdonSynced(UdonSyncMode)]")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/Merlin-san/UdonSharp/wiki/vrchat-api#synced-variables"},"Synced Variables"),"\xa0for variables that can be synced.")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public class Example : UdonSharpBehaviour \n{\n    [UdonSynced]\n    public bool synchronizedBoolean;\n\n    [UdonSynced(UdonSyncMode.Linear)]\n    // This float will be linearly interpolated\n    public float synchronizedFloat;\n}\n")),(0,l.kt)("h3",{id:"udonsyncmode"},"UdonSyncMode"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UdonSharp.UdonSyncMode")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NotSynced"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No interpolation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Linear"),(0,l.kt)("td",{parentName:"tr",align:null},"Lerp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Smooth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Some kind of smoothed syncing"))))),(0,l.kt)("h2",{id:"udonbehavioursyncmode"},"UdonBehaviourSyncMode"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[UdonBehaviourSyncMode]")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"[UdonBehaviourSyncMode(BehaviourSyncMode)]")),(0,l.kt)("p",null,"Enforces a chosen sync mode and performs additional validation on synced variables where appropriate."),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"[UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]\npublic class Example : UdonSharpBehaviour \n{ \n}\n")),(0,l.kt)("h3",{id:"behavioursyncmode"},"BehaviourSyncMode"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UdonSharp.BehaviourSyncMode")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"Nothing is enforced and the behaviours can be set to either sync type by the user. This is the default when no attribute is specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Enforces no synced variables on the behaviour and hides the selection dropdown in the UI for the sync mode. Nothing is synced and SendCustomNetworkEvent will not work on the behaviour.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Continuous"),(0,l.kt)("td",{parentName:"tr",align:null},"Synced variables will be updated automatically at a very frequent rate, but may not always reliably update to save bandwidth.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manual"),(0,l.kt)("td",{parentName:"tr",align:null},"Synced variables are updated manually by the user less frequently, but ensures that updates are reliable when requested.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoVariableSync"),(0,l.kt)("td",{parentName:"tr",align:null},"Enforces that there are no synced variables on the behaviour, hides the sync mode selection dropdown, and allows you to use the behaviours on GameObjects that use either Manual or Continuous sync.")))),(0,l.kt)("h2",{id:"defaultexecutionorder"},"DefaultExecutionOrder"),(0,l.kt)("p",null,"Specifies the order that Update, LateUpdate, and FixedUpdate happen in relative to other UdonSharpBehaviours with an int. All behaviours are at 0 by default, the lower the int, the earlier their update happens. The int can be negative."),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"[DefaultExecutionOrder(0)]\npublic class Example : UdonSharpBehaviour \n{ \n}\n")),(0,l.kt)("h2",{id:"recursivemethod"},"RecursiveMethod"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[RecursiveMethod]")),(0,l.kt)("p",null,"Marks a method as callable recursively. This means the marked method can safely call itself on the same behaviour without issues. This does have a performance overhead, so only use it on methods that you know may be called recursively."),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"[RecursiveMethod]\nint Factorial(int input)\n{\n    if (input == 1)\n        return 1;\n\n    return input * Factorial(input - 1);\n}\n")),(0,l.kt)("h2",{id:"fieldchangecallback"},"FieldChangeCallback"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[FieldChangeCallback(string)]")),(0,l.kt)("p",null,"This is an attribute that you may put on a field in order to receive Udon variable change events. This attribute takes a string parameter that points to a property name on the behaviour. When this attribute is set on a field, any modification to the field via network sync or SetProgramVariable will call the target property's setter instead of setting the field. The property is usually expected to set the field in this case."),(0,l.kt)("h3",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'using UdonSharp;\nusing UnityEngine;\nusing VRC.SDKBase;\nusing VRC.Udon;\n\n[UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]\npublic class ExampleOfFieldChangeCallback: UdonSharpBehaviour\n{\n    public GameObject toggleObject;\n\n    [UdonSynced, FieldChangeCallback(nameof(SyncedToggle))]\n    private bool _syncedToggle;\n\n    public bool SyncedToggle\n    {\n        set\n        {\n            Debug.Log("toggling the object...");\n            _syncedToggle = value;\n            toggleObject.SetActive(value);\n        }\n        get => _syncedToggle;\n    }\n\n    public override void Interact()\n    {\n        Networking.SetOwner(Networking.LocalPlayer, gameObject);\n        SyncedToggle = !SyncedToggle;\n        RequestSerialization();\n    }\n}\n')),(0,l.kt)("p",null,"Note that in the above example, the Interact performs ",(0,l.kt)("inlineCode",{parentName:"p"},"SyncedToggle = !SyncedToggle;")," rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"_syncedToggle = !_syncedToggle"),". The latter won't work (this would not actually trigger the FieldChangeCallback). FieldChangeCallback only will cause SyncedToggle's setter to fire when either SetProgramVariable or a network sync updates the value of syncedToggle. It will not fire when the variable is set directly from inside the same UdonBehaviour. The property should always be used directly. UdonSharp will deliberately fail to compile if you attempt to set ",(0,l.kt)("inlineCode",{parentName:"p"},"_syncedToggle")," from outside the UdonBehaviour. In this case, the property should be used or SetProgramVariable should be used explicitly."))}h.isMDXComponent=!0}}]);