(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(21),l=n.n(i),o=n(11),a=n.n(o),s=n(14),u=n(2),d=n(19),j=n.n(d),b=(n(41),n(59),n(43),j.a.initializeApp({apiKey:"AIzaSyDttnqtkHqI6kYwHYtIB27___9xksJ8uHI",authDomain:"gallery-dev-3f3e7.firebaseapp.com",databaseURL:"https://gallery-dev-3f3e7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"gallery-dev-3f3e7",storageBucket:"gallery-dev-3f3e7.appspot.com",messagingSenderId:"63650886380",appId:"1:63650886380:web:7b777528a44730f1e86bc9"}).auth()),f=j.a.storage(),p=j.a.firestore(),O=j.a.firestore.FieldValue.serverTimestamp,x=n(0),m=c.a.createContext();function h(){return Object(r.useContext)(m)}function g(e){var t=e.children,n=Object(r.useState)("loading"),c=Object(u.a)(n,2),i=c[0],l=c[1];Object(r.useEffect)((function(){return b.onAuthStateChanged((function(e){l(e)}))}),[]);var o={currentUser:i,signup:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()}};return Object(x.jsx)(m.Provider,{value:o,children:t})}var v=n(4),w=n(13);function y(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),c=h().signup,i=Object(r.useState)(""),l=Object(u.a)(i,2),o=l[0],d=l[1],j=Object(r.useState)(!1),b=Object(u.a)(j,2),f=b[0],p=b[1],O=Object(v.g)();function m(){return(m=Object(s.a)(a.a.mark((function r(i){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i.preventDefault(),console.log("passwordRef",t),console.log("passwordRef.current",t.current),console.log("passwordRef.current.value",t.current.value),t.current.value===n.current.value){r.next=6;break}return r.abrupt("return",d("Passwords do not match"));case 6:return r.prev=6,d(""),p(!0),r.next=11,c(e.current.value,t.current.value);case 11:O.push("/dashboard"),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(6),d("Failed to create an account");case 17:p(!1);case 18:case"end":return r.stop()}}),r,null,[[6,14]])})))).apply(this,arguments)}return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"small-container",children:[Object(x.jsx)("div",{className:"back-of-house-background"}),Object(x.jsx)("h2",{children:"Sign Up"}),Object(x.jsxs)("form",{className:"user-form",onSubmit:function(e){return m.apply(this,arguments)},children:[o&&Object(x.jsx)("div",{className:"error-msg",children:o}),Object(x.jsx)("label",{for:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",id:"email",ref:e,required:!0,style:{marginBottom:"1em"}}),Object(x.jsx)("label",{for:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",id:"password",ref:t,required:!0,style:{marginBottom:"1em"}}),Object(x.jsx)("label",{for:"confirm",children:"Confirm Password"}),Object(x.jsx)("input",{type:"password",id:"confirm",ref:n,required:!0}),Object(x.jsx)("button",{className:"user-form__btn",type:"submit",disabled:f,style:{marginTop:"1em"},children:"Sign Up"})]}),Object(x.jsx)("div",{children:"Already have an account?"}),Object(x.jsx)(w.b,{to:"/login",children:"Log In"})]})})}function _(e){return Object(x.jsxs)("div",{className:"nav-bar",children:[Object(x.jsx)("h2",{children:"Dashboard"}),e.error&&Object(x.jsx)("div",{className:"error-msg",children:e.error}),Object(x.jsx)("div",{className:"nav-bar__email",children:e.currentUser.email}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"nav-bar__logout",onClick:e.handleLogout,children:"Log Out"})})]})}var k=n(10),F=function(e,t,n){var c=Object(r.useState)(0),i=Object(u.a)(c,2),l=i[0],o=i[1],d=Object(r.useState)(null),j=Object(u.a)(d,2),b=j[0],x=j[1],m=Object(r.useState)(null),h=Object(u.a)(m,2),g=h[0],v=h[1];return Object(r.useEffect)((function(){var r,c="".concat((new Date).toLocaleString().replace(/\/|:|,|\s/gi,""),"_").concat(e.name),i=f.ref(c),l=p.collection(t),u=[];p.collection("00_admin").doc("register").get().then((function(e){e.exists?u=S(e.data().collections,t)?Object(k.a)(e.data().collections):[].concat(Object(k.a)(e.data().collections),[JSON.stringify({title:t,front:c,description:n})]):u.push(JSON.stringify({title:t,front:c,description:n}))})).catch((function(e){console.log("Error: ",e)})),i.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;o(t),r=e.totalBytes}),(function(e){x(e)}),Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getDownloadURL();case 2:t=e.sent,n=O(),l.add({refString:c,url:t,createdAt:n,bytes:r}),p.collection("00_admin").doc("register").set({collections:u},{merge:!0}),v(t);case 7:case"end":return e.stop()}}),e)}))))}),[e,t,n]),{progress:l,url:g,error:b}},S=function(e,t){return e.some((function(e){return JSON.parse(e).title===t}))};function N(e){var t=e.file,n=e.setFile,c=e.collection,i=e.description,l=F(t,c,i),o=l.url,a=l.progress;return Object(r.useEffect)((function(){o&&n(null)}),[o,n]),console.log(a,o),Object(x.jsx)("div",{className:"progress-bar",style:{width:a+"%"},children:a&&Math.round(a)})}function E(e){var t=Object(r.useState)(null),n=Object(u.a)(t,2),c=n[0],i=n[1],l=Object(r.useState)(null),o=Object(u.a)(l,2),a=o[0],s=o[1],d=["image/png","image/jpeg"];var j=e.style?e.style:{marginBottom:"1em"};return Object(x.jsxs)("form",{children:[Object(x.jsx)("label",{for:"file-upload",class:"file-upload",children:Object(x.jsx)("div",{className:"faux-btn",style:{marginBottom:"1em"},children:"Upload Image"})}),Object(x.jsx)("input",{id:"file-upload",type:"file",onChange:function(e){var t=e.target.files[0];console.log(t),t&&t.size>5242880?s("File size must not exceed 5 MB"):t&&d.includes(t.type)?(i(t),s("")):(i(null),s("Please select an image file (png or jpeg)"))},style:j}),Object(x.jsxs)("div",{children:[a&&Object(x.jsx)("div",{className:"error-msg",style:{margin:"0.5em 0"},children:a}),c&&Object(x.jsx)("div",{children:c.name}),c&&Object(x.jsx)(N,{file:c,setFile:i,collection:e.collection,description:e.description})]})]})}var L,I,C,B=n(12);function P(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","asc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(B.a)(Object(B.a)({},e.data()),{},{id:e.id}))})),i(t)}));return function(){return t()}}),[e]),{docs:c}}var R=["title","titleId"];function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function D(e,t){var n=e.title,c=e.titleId,i=M(e,R);return r.createElement("svg",T({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,L||(L=r.createElement("g",{id:"Layer_1_1_"})),I||(I=r.createElement("g",{id:"Layer_2"},r.createElement("circle",{fill:"none",stroke:"#FFFFFF",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,cx:50,cy:50,r:40.064}))),C||(C=r.createElement("rect",{fill:"none",width:100,height:100})))}var A,U,W,X,q=r.forwardRef(D),J=(n.p,["title","titleId"]);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function K(e,t){var n=e.title,c=e.titleId,i=H(e,J);return r.createElement("svg",z({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,A||(A=r.createElement("g",{id:"Layer_1_1_"})),U||(U=r.createElement("circle",{fill:"none",stroke:"#FFFFFF",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,cx:50,cy:50,r:40.064})),W||(W=r.createElement("circle",{fill:"#FFFFFF",cx:50,cy:50,r:30.803})),X||(X=r.createElement("rect",{fill:"none",width:100,height:100})))}var V=r.forwardRef(K),Y=(n.p,function(e){var t=e.color;return Object(x.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100",children:[Object(x.jsx)("g",{id:"Layer_1_1_"}),Object(x.jsx)("g",{id:"Layer_2",children:Object(x.jsxs)("g",{children:[Object(x.jsx)("line",{fill:"none",stroke:t||"#FFFFFF","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",x1:"13.256",y1:"19.757",x2:"87.256",y2:"19.757"}),Object(x.jsx)("polyline",{fill:"none",stroke:t||"#FFFFFF","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"\r 18.384,19.757 24.745,92.757 74.745,92.757 81.881,19.757 \t\t"}),Object(x.jsx)("polyline",{fill:"none",stroke:t||"#FFFFFF","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"\r 33.911,19.5 38.745,7.757 60.745,7.757 65.577,19.628 \t\t"}),Object(x.jsx)("line",{fill:"none",stroke:t||"#FFFFFF","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",x1:"33.911",y1:"33.743",x2:"36.745",y2:"76.743"}),Object(x.jsx)("line",{fill:"none",stroke:t||"#FFFFFF","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",x1:"49.756",y1:"34.257",x2:"49.756",y2:"77.257"}),Object(x.jsx)("line",{fill:"none",stroke:t||"#FFFFFF","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",x1:"65.577",y1:"33.743",x2:"62.745",y2:"76.743"})]})}),Object(x.jsx)("rect",{fill:"none",width:"100",height:"100"})]})}),G=n(9);function Q(e){var t=e.projectStorage,n=e.projectFirestore,r=e.collectionTitle,c=e.refString,i=e.id;t.ref(c).delete().then((function(){n.collection(r).doc(i).delete().then((function(){console.log("Document deleted")}))})).catch((function(e){console.error("Error removing document: ",e)}))}var Z,$=function(e){return{type:"SET_NEW_COLLECTION",payload:e}};function ee(e){var t=e.collectionTitle,n=e.refString,c=e.id,i=Object(G.c)((function(e){return e.collectionsModel})),l=Object(r.useState)(!1),o=Object(u.a)(l,2),a=o[0],s=o[1],d=Object(G.b)();return Object(r.useEffect)((function(){i.some((function(e){return e.front===n}))?s(!0):s(!1)}),[i,n]),Object(x.jsx)("div",{className:"image-overlay",children:a?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(V,{}),Object(x.jsx)(Y,{color:"#ffffff55"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(q,{onClick:function(){console.log("new front image"),d(function(e,t){return console.log("Hello from actions",t),{type:"MARK_FRONT",payload:{collectionTitle:e,refString:t}}}(t,n))}}),Object(x.jsx)("div",{onClick:function(){return Q({projectStorage:f,projectFirestore:p,collectionTitle:t,refString:n,id:c})},children:Object(x.jsx)(Y,{})})]})})}function te(e){var t=P(e.collection).docs;return Object(x.jsx)("div",{className:"img-grid",children:t&&t.map((function(t){return Object(x.jsxs)("div",{className:"img-grid__wrap",children:[e.noOverlay?null:Object(x.jsx)(ee,{refString:t.refString,id:t.id,collectionTitle:e.collection}),Object(x.jsx)("img",{src:t.url,alt:"uploaded-pic"})]},t.id)}))})}function ne(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(""),i=Object(u.a)(c,2),l=i[0],o=i[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),d=s[0],j=s[1],b=Object(r.useState)(0),f=Object(u.a)(b,2),p=f[0],O=f[1],m=Object(G.b)(),h=function(){console.log("Start new collection"),O(1)},g=function(){O(0)},v=function(e){e.preventDefault(),t.current.value&&(o(t.current.value),m($(t.current.value)),O(2))},w=function(e){e.preventDefault(),j(n.current.value),O(3)},y=function(){m($(null)),O(0)},_=function(){switch(p){case 0:return Object(x.jsx)("button",{className:"new-collection__start-btn",onClick:h,children:"Create New Collection"});case 1:return Object(x.jsx)("div",{className:"new-collection__container",children:Object(x.jsxs)("form",{className:"new-collection__form-container",children:[Object(x.jsx)("label",{for:"title",children:"Collection Title"}),Object(x.jsx)("input",{type:"text",id:"title",ref:t,required:!0,style:{marginBottom:"1em"}}),Object(x.jsxs)("div",{className:"new-collection__btn-panel",children:[Object(x.jsx)("button",{className:"new-collection__start-btn",onClick:v,type:"submit",children:"OK"}),Object(x.jsx)("button",{className:"new-collection__start-btn",onClick:g,children:"Cancel"})]})]})});case 2:return Object(x.jsx)("div",{className:"new-collection__container",children:Object(x.jsxs)("div",{className:"new-collection__form-container",children:[Object(x.jsx)("label",{for:"description",children:"Enter a Description"}),Object(x.jsx)("textarea",{type:"text",id:"description",ref:n,required:!0,style:{marginBottom:"1em"},rows:"4",cols:"50"}),Object(x.jsx)("div",{className:"new-collection__btn-panel",children:Object(x.jsx)("button",{className:"new-collection__start-btn",onClick:w,children:"Done"})})]})});case 3:return Object(x.jsx)("div",{className:"new-collection__container",children:Object(x.jsxs)("div",{className:"new-collection__form-container",children:[Object(x.jsx)("h3",{children:l}),Object(x.jsx)(E,{collection:l,description:d}),Object(x.jsx)(te,{collection:l,noOverlay:"true"}),Object(x.jsx)("div",{className:"new-collection__btn-panel",children:Object(x.jsx)("button",{className:"new-collection__start-btn",onClick:y,children:"Done"})})]})});default:return null}};return Object(x.jsx)("div",{className:"new-collection",children:Object(x.jsx)(_,{})})}var re=["title","titleId"];function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function le(e,t){var n=e.title,c=e.titleId,i=ie(e,re);return r.createElement("svg",ce({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"606px",height:"828px",viewBox:"44.5 -15.5 606 828",enableBackground:"new 44.5 -15.5 606 828",xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,Z||(Z=r.createElement("g",{className:"svg-btn"},r.createElement("rect",{fill:"#00000000",width:"606px",height:"828px"}),r.createElement("path",{d:"M429.007,0.064c-29.083,1.213-56.633,12.309-71.938,36.663l-34.72,55.273 c-0.249,0.385-0.587,0.719-0.835,1.11L86.811,466.692l-3.056,5l-0.275,6.111L69.037,759.166l-1.945,40.832l35.553-19.443 l247.483-135.27l5.278-2.777l3.332-5l270.255-429.965c17.493-27.834,12.521-62.189-3.61-91.655 c-16.133-29.471-43.799-57.112-78.883-79.16C511.416,14.678,475.059,2.095,441.504,0.341c-4.193-0.22-8.344-0.451-12.499-0.276 H429.007z M430.674,45.616c2.615-0.071,5.413,0.125,8.332,0.276c23.358,1.221,53.824,11.179,83.327,29.721 c29.503,18.54,51.542,41.423,62.773,61.939c9.481,17.323,11.079,30.668,7.499,40.553c-0.951-1.955-1.729-3.917-2.777-5.833 c-16.133-29.471-43.521-57.11-78.605-79.16c-35.084-22.049-71.719-34.632-105.271-36.386c-2.145-0.111-4.249-0.268-6.388-0.276 c6.271-6.267,16.248-10.417,31.107-10.833L430.674,45.616z M395.121,102.277c2.615-0.07,5.413-0.151,8.332,0 c23.359,1.222,53.824,11.18,83.327,29.722c29.503,18.541,51.541,41.7,62.772,62.218c10.853,19.824,11.609,34.24,5.833,44.439 l-19.166,30.832c-1.424-3.188-3.02-6.334-4.722-9.443c-15.545-28.396-42.248-55.312-76.661-76.938 c-34.414-21.628-70.44-34.141-102.766-35.83c-3.57-0.187-7.037-0.104-10.555,0l18.609-29.721h0.275l0.561-1.111 c5.839-8.312,16.648-13.675,34.163-14.165L395.121,102.277z M341.513,181.716c2.801-0.089,5.815,0.117,8.888,0.277 c23.163,1.211,52.025,10.307,80.551,27.22L268.467,467.807c-42.367,25.225-82.207,22.146-119.155,14.166l-15.832-3.334 l182.759-291.364c6.665-3.274,15.084-5.247,25.275-5.556L341.513,181.716z M267.075,486.412 c-1.271,53.684,24.74,92.1,49.719,122.764l1.388,1.668l-158.317,86.381c-7.82-15.133-20.877-23.244-40.553-25.275l9.167-178.875 l6.388,1.666c38.44,9.199,84.428,16.039,132.212-8.332L267.075,486.412z"}))))}var oe,ae,se,ue=r.forwardRef(le),de=(n.p,["title","titleId"]);function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function fe(e,t){var n=e.title,c=e.titleId,i=be(e,de);return r.createElement("svg",je({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 30 30",enableBackground:"new 0 0 30 30",xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,oe||(oe=r.createElement("g",{id:"Layer_1_1_"})),ae||(ae=r.createElement("rect",{fill:"none",width:30,height:30})),se||(se=r.createElement("polyline",{fill:"none",stroke:"#000000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,points:" 3.209,13.167 15,21 26.791,13.167 "})))}var pe=r.forwardRef(fe);n.p;function Oe(e){var t=e.title,n=e.frontRef,c=e.description,i=P(t).docs,l=Object(r.useState)(!1),o=Object(u.a)(l,2),a=o[0],s=o[1],d=Object(r.useState)(!1),j=Object(u.a)(d,2),b=j[0],O=j[1],m=Object(r.useState)(""),h=Object(u.a)(m,2),g=h[0],v=h[1],w=Object(G.c)((function(e){return e.collectionsModel})),y=Object(G.c)((function(e){return e.newCollection}));Object(r.useEffect)((function(){v(c)}),[c]);var _=function(e){if(e||i){var t=i.findIndex((function(t){return t.refString===e}));return-1===t?null:i[t].url}},F=function(e){!0===a?(s(!1),v(c),O(!1)):s(!0)},S=function(e){return e.newCollection===t?null:Object(x.jsxs)("div",{className:"collection-tile",children:[Object(x.jsx)("div",{className:"collection-tile__img-wrapper",children:Object(x.jsx)("img",{className:"collection-tile__img",src:_(n),alt:n})}),Object(x.jsxs)("div",{className:"collection-tile__info",children:[Object(x.jsxs)("h3",{className:"collection-tile__title",children:[t," "]}),Object(x.jsx)("div",{children:c})]}),Object(x.jsx)("div",{className:"collection-tile__expand-btn",onClick:F,children:Object(x.jsx)(pe,{})})]})};return Object(x.jsx)("div",{children:a?Object(x.jsxs)("div",{className:"collection-tile__expanded",children:[Object(x.jsxs)("div",{className:"collection-tile__expanded__left",children:[Object(x.jsx)(te,{collection:t}),Object(x.jsx)(E,{collection:t,style:{marginBottom:"0"}})]}),Object(x.jsxs)("div",{className:"collection-tile__expanded__right",children:[Object(x.jsxs)("h2",{className:"collection-tile__title",children:[t," "]}),Object(x.jsx)("div",{className:"collection-tile__edit-btn"}),b?Object(x.jsx)("textarea",{type:"text",id:"description",value:g,required:!0,style:{marginBottom:"1em"},rows:"4",cols:"50",onChange:function(e){v(e.target.value)}}):Object(x.jsx)("div",{children:c}),Object(x.jsx)("div",{className:"collection-tile__edit-btn",children:Object(x.jsx)(ue,{style:{height:"20px",width:"20px"},onClick:function(){O(!b),v(c)}})}),Object(x.jsxs)("div",{className:"collection-tile__btn-panel",children:[Object(x.jsx)("button",{className:"new-collection__start-btn collection-tile__btn btn-danger",onClick:function(){s(!1),p.collection(t).get().then((function(e){e.forEach((function(e){Q({projectStorage:f,projectFirestore:p,collectionTitle:t,refString:e.data().refString,id:e.id})}))})).catch((function(e){console.log("Error: ",e)})),p.collection("00_admin").doc("register").get().then((function(e){var n=Object(k.a)(e.data().collections),r=e.data().collections.findIndex((function(e){return JSON.parse(e).title===t}));n.splice(r,1),p.collection("00_admin").doc("register").set({collections:n},{merge:!0})}))},style:{marginLeft:"0",marginRight:"auto"},children:"Delete Collection"}),Object(x.jsx)("button",{className:"new-collection__start-btn collection-tile__btn",onClick:F,children:"Cancel"}),Object(x.jsx)("button",{className:"new-collection__start-btn collection-tile__btn",onClick:function(e){F();var n=Object(k.a)(w),r=n.findIndex((function(e){return e.title===t}));n[r].description=g;var c=n.map((function(e){return JSON.stringify(e)}));p.collection("00_admin").doc("register").update({collections:c.reverse()})},children:"Save"})]})]})]}):Object(x.jsx)(S,{newCollection:y})})}function xe(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],i=h().currentUser,l=Object(r.useState)([]),o=Object(u.a)(l,2),d=o[0],j=o[1],b=h().logout,f=Object(v.g)(),O=Object(G.b)();function m(){return(m=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,b();case 4:f.pushState("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){O({type:"SET",payload:d})}),[d]),Object(r.useEffect)((function(){var e=p.collection("00_admin").doc("register").onSnapshot((function(e){console.log(e.data());var t=e.data().collections.map((function(e){return JSON.parse(e)}));j(t.reverse())}));return function(){return e()}}),[]),Object(x.jsxs)("div",{className:"app-body",children:[Object(x.jsx)("div",{className:"back-of-house-background"}),Object(x.jsx)(_,{error:n,currentUser:i,handleLogout:function(){return m.apply(this,arguments)}}),Object(x.jsx)(ne,{}),d.map((function(e){return Object(x.jsx)(Oe,{title:e.title,frontRef:e.front,description:e.description})}))]})}function me(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=h().login,c=Object(r.useState)(""),i=Object(u.a)(c,2),l=i[0],o=i[1],d=Object(r.useState)(!1),j=Object(u.a)(d,2),b=j[0],f=j[1],p=Object(v.g)();function O(){return(O=Object(s.a)(a.a.mark((function r(c){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,o(""),f(!0),r.next=6,n(e.current.value,t.current.value);case 6:p.push("/dashboard"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),o("Failed to sign in");case 12:f(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"back-of-house-background"}),Object(x.jsxs)("div",{className:"small-container",children:[Object(x.jsx)("h2",{children:"Log In"}),Object(x.jsxs)("form",{className:"user-form",onSubmit:function(e){return O.apply(this,arguments)},children:[l&&Object(x.jsx)("div",{className:"error-msg",children:l}),Object(x.jsx)("label",{for:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",id:"email",ref:e,required:!0,style:{marginBottom:"1em"}}),Object(x.jsx)("label",{for:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",id:"password",ref:t,required:!0,style:{marginBottom:"1em"}}),Object(x.jsx)("button",{className:"user-form__btn",type:"submit",disabled:b,style:{marginTop:"1em"},children:"Log In"})]}),Object(x.jsx)(w.b,{to:"/signup",children:"Sign Up"})]})]})}var he,ge,ve,we,ye=n(32),_e=["component"];function ke(e){var t=e.component,n=Object(ye.a)(e,_e),r=h().currentUser;return Object(x.jsx)("div",{children:"loading"!==r?Object(x.jsx)(v.b,Object(B.a)(Object(B.a)({},n),{},{render:function(e){return r?Object(x.jsx)(t,Object(B.a)({},e)):Object(x.jsx)(v.a,{to:"/login"})}})):null})}function Fe(e){var t=e.title;return Object(x.jsxs)("div",{className:"nav-bar-front",children:[Object(x.jsx)("h1",{className:"nav-bar-front__title",children:t}),Object(x.jsxs)("div",{className:"nav-bar-front__links",children:[Object(x.jsx)("h4",{className:"nav-bar-front__link",children:"About"}),Object(x.jsx)("h4",{className:"nav-bar-front__link",children:"Contact"}),Object(x.jsx)("h4",{className:"nav-bar-front__link",children:"Basket"})]})]})}var Se=["title","titleId"];function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Le(e,t){var n=e.title,c=e.titleId,i=Ee(e,Se);return r.createElement("svg",Ne({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 30 30",enableBackground:"new 0 0 30 30",xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,he||(he=r.createElement("g",{id:"Layer_1_1_"})),ge||(ge=r.createElement("rect",{fill:"none",width:30,height:30})),ve||(ve=r.createElement("line",{fill:"none",stroke:"#FFFFFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:9.375,y1:9.375,x2:20.625,y2:20.625})),we||(we=r.createElement("line",{fill:"none",stroke:"#FFFFFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:20.625,y1:9.375,x2:9.375,y2:20.625})))}var Ie,Ce,Be,Pe=r.forwardRef(Le),Re=(n.p,["title","titleId"]);function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Me(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function De(e,t){var n=e.title,c=e.titleId,i=Me(e,Re);return r.createElement("svg",Te({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 30 30",enableBackground:"new 0 0 30 30",xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,Ie||(Ie=r.createElement("g",{id:"Layer_1_1_"})),Ce||(Ce=r.createElement("rect",{fill:"none",width:30,height:30})),Be||(Be=r.createElement("polyline",{fill:"none",stroke:"#FFFFFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,points:" 18.917,3.209 11.083,15 18.917,26.791 "})))}var Ae,Ue,We,Xe=r.forwardRef(De),qe=(n.p,["title","titleId"]);function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function He(e,t){var n=e.title,c=e.titleId,i=ze(e,qe);return r.createElement("svg",Je({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 30 30",enableBackground:"new 0 0 30 30",xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,Ae||(Ae=r.createElement("g",{id:"Layer_1_1_"})),Ue||(Ue=r.createElement("rect",{fill:"none",width:30,height:30})),We||(We=r.createElement("polyline",{fill:"none",stroke:"#FFFFFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,points:" 11.083,26.791 18.917,15 11.083,3.209 "})))}var Ke=r.forwardRef(He),Ve=(n.p,function(e){var t=e.current?"#FFFFFF":"#555555";return Object(x.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"19.583px",height:"19.583px",viewBox:"2.833 7.583 19.583 19.583","enable-background":"new 2.833 7.583 19.583 19.583",children:[Object(x.jsx)("g",{id:"Layer_1_1_"}),Object(x.jsx)("rect",{x:"2.833",y:"7.583",fill:"none",width:"19.583",height:"19.583"}),Object(x.jsx)("circle",{fill:t,cx:"12.625",cy:"17.374",r:"3.75"})]})});function Ye(e){var t=e.current,n=e.length;return Object(x.jsx)(x.Fragment,{children:Object(k.a)(Array(n)).map((function(e,n){return Object(x.jsx)("div",{children:Object(x.jsx)(Ve,{current:t===n})})}))})}function Ge(e){var t=e.expandHandler,n=e.docs,c=e.collection,i=Object(r.useState)([]),l=Object(u.a)(i,2),o=l[0],a=l[1],s=Object(r.useState)(!1),d=Object(u.a)(s,2),j=d[0],b=d[1],f=Object(r.useState)(0),p=Object(u.a)(f,2),O=p[0],m=p[1];Object(r.useEffect)((function(){var e=Object(k.a)(n);e.sort((function(e,t){return e.refString===c.front?-1:t.refString===c.front?1:0})),b(!0),a(e)}),[n,c.front]),Object(r.useEffect)((function(){console.log(o)}),[o]),Object(r.useEffect)((function(){console.log("".concat(O+1," of ").concat(o.length))}),[O,o]);return Object(x.jsxs)("div",{className:"img-expand-wrapper-front",children:[Object(x.jsxs)("div",{className:"img-expand-wrapper-front__left-container",children:[Object(x.jsx)("div",{className:"img-expand-wrapper-front__exit-symbol",onClick:t,children:Object(x.jsx)(Pe,{})}),o.length>1?Object(x.jsx)("div",{className:"img-expand-wrapper-front__left-symbol",onClick:function(){m(0===O?o.length-1:O-1)},children:Object(x.jsx)(Xe,{})}):null,o.length>1?Object(x.jsx)("div",{className:"img-expand-wrapper-front__right-symbol",onClick:function(){O===o.length-1?m(0):m(O+1)},children:Object(x.jsx)(Ke,{})}):null,o.length>1?Object(x.jsx)("div",{className:"img-expand-wrapper-front__bottom-panel",children:Object(x.jsx)(Ye,{current:O,length:o.length})}):null,Object(x.jsx)("div",{className:"img-expand-wrapper-front__img-container",children:j&&Object(x.jsx)("img",{className:"img-expand-wrapper-front__img",src:o[O].url,alt:c.front})})]}),Object(x.jsx)("div",{className:"img-expand-wrapper-front__right-container",children:Object(x.jsxs)("div",{className:"img-expand-wrapper-front__right-container__inner",children:[Object(x.jsx)("h3",{className:"img-expand-wrapper-front__right-container__title",children:c.title}),Object(x.jsx)("div",{className:"img-expand-wrapper-front__right-container__description",children:c.description})]})})]})}function Qe(e){var t=e.collection,n=P(t.title).docs,c=Object(r.useState)(!1),i=Object(u.a)(c,2),l=i[0],o=i[1],a=function(){o(!l)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"img-grid-front__img-wrapper",onClick:a,children:Object(x.jsx)("img",{className:"img-grid-front__img",src:function(e){if(e||n){var t=n.findIndex((function(t){return t.refString===e}));return-1===t?null:n[t].url}}(t.front),alt:t.front})}),l&&Object(x.jsx)(Ge,{expandHandler:a,docs:n,collection:t})]})}function Ze(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),l=Object(u.a)(i,2),o=l[0],a=l[1];return Object(r.useEffect)((function(){p.collection("00_admin").doc("register").get().then((function(e){if(e.exists){var t=e.data().collections.map((function(e){return JSON.parse(e)}));c(t.reverse()),a(!0)}}))}),[]),Object(r.useEffect)((function(){console.log(n)}),[n]),Object(x.jsxs)("div",{children:[Object(x.jsx)(Fe,{title:"Artist Gallery & Shop"}),Object(x.jsx)("div",{className:"img-grid-front",children:o&&n.map((function(e){return Object(x.jsx)(Qe,{collection:e})}))})]})}var $e=n(6),et=Object($e.a)();var tt=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(w.a,{history:et,basename:"/gallery-app",children:Object(x.jsx)(g,{children:Object(x.jsxs)(v.d,{children:[Object(x.jsx)(v.b,{exact:!0,path:"/",component:Ze}),Object(x.jsx)(ke,{exact:!0,path:"/dashboard",component:xe}),Object(x.jsx)(v.b,{path:"/signup",component:y}),Object(x.jsx)(v.b,{path:"/login",component:me}),Object(x.jsx)(v.b,{component:function(){return Object(x.jsx)("div",{children:"404 Not found"})}})]})})})})},nt=(n(57),n(24)),rt=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTIVE":return!e;default:return e}},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return t.payload;case"MARK_FRONT":var n=Object(k.a)(e),r=n.findIndex((function(e){return e.title===t.payload.collectionTitle}));return n[r].front=t.payload.refString,n;default:return e}},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_COLLECTION":return t.payload;default:return e}},lt=Object(nt.a)({descriptionPanel:rt,collectionsModel:ct,newCollection:it}),ot=Object(nt.b)(lt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(G.a,{store:ot,children:Object(x.jsx)(tt,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2a48c40d.chunk.js.map