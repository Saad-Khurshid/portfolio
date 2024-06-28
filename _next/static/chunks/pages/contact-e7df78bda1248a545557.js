_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{AFxQ:function(e,t,r){"use strict";var a=r("nKUr"),n=r("q1tI"),i=r("rePB"),s=r("ATyU"),o=r("xHNR"),l=r.n(o),c=r("YAAd");function d(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(){var e=Object(n.useState)({data:{firstName:"",lastName:"",contact:"",email:"",message:""},errors:{}}),t=e[0],r=e[1],o=Object(n.useState)({submitting:!1,status:null}),u=o[0],m=o[1],g={firstName:l.a.string().alphanum().min(3).max(30).required().label("First Name"),lastName:l.a.string().alphanum().min(3).max(30).required().label("Last Name"),contact:l.a.string().allow("").label("Contact"),email:l.a.string().email({minDomainSegments:2,tlds:{allow:["com","net","org","edu"]}}).required().label("Email"),message:l.a.string().min(5).max(1e3).required().label("Message")},f=function(e){var a=e.currentTarget,n=b({},t.errors),i=x(a);i?n[a.name]=i:delete n[a.name];var s=b({},t.data);s[a.name]=a.value,r({data:s,errors:n})},j=function(){var e=t.data,r=l.a.validate(e,g,{abortEarly:!1}).error;if(!r)return null;var a,n={},i=d(r.details);try{for(i.s();!(a=i.n()).done;){var s=a.value;n[s.path[0]]=s.message}}catch(o){i.e(o)}finally{i.f()}return n},x=function(e){var t=e.name,r=e.value,a=Object(i.a)({},t,g[t]),n=Object(i.a)({},t,r),s=l.a.validate(n,a).error;return s?s.details[0].message:null},h=function(e,t){m({submitting:!1,status:{ok:e,msg:t}}),e&&r({data:{firstName:"",lastName:"",contact:"",email:"",message:""},errors:{}})},p=function(e){e.preventDefault(),m({submitting:!0,status:""}),fetch("https://formspree.io/f/xqkwadzr",{method:"POST",mode:"no-cors",body:JSON.stringify(t.data)}).then((function(e){h(!0,"Thanks for reaching out!")})).catch((function(e){h(!1,"Something went wrong!")}))};return Object(a.jsx)(s.a.section,{initial:"initial",animate:"animate",exit:{x:"-100vW",opacity:0,transition:{duration:.3}},style:{width:"99vw",minHeight:"86vh"},children:Object(a.jsxs)("div",{className:"container px-5  mx-auto",children:[Object(a.jsxs)("div",{className:"flex flex-col text-center w-full mb-12 pt-24",children:[Object(a.jsx)("h1",{className:"sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-800",children:"Contact Me"}),Object(a.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed md:px-24 md:py-4 font-medium",children:"Have any questions or concerns? I am here to help. Feel free to reach out and I will get back to you shortly!"})]}),Object(a.jsx)("div",{className:"lg:w-1/2 md:w-2/3 mx-auto",children:Object(a.jsxs)("div",{className:"flex flex-wrap -m-2",children:[Object(a.jsx)("div",{className:"p-2 w-1/2",children:Object(a.jsxs)("div",{className:"relative",children:[Object(a.jsx)("label",{htmlFor:"firstName",className:"leading-7 text-gray-800 font-medium",children:"First Name"}),Object(a.jsx)("input",{type:"text",id:"firstName",name:"firstName",value:t.data.firstName,onChange:f,className:"w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}),t.errors.firstName&&Object(a.jsx)("div",{className:"bg-red-400 border-red-700 rounded-md text-black",children:t.errors.firstName})]})}),Object(a.jsx)("div",{className:"p-2 w-1/2",children:Object(a.jsxs)("div",{className:"relative",children:[Object(a.jsx)("label",{htmlFor:"lastName",className:"leading-7 text-gray-800 font-medium",children:"Last Name"}),Object(a.jsx)("input",{type:"text",id:"lastName",name:"lastName",value:t.data.lastName,onChange:f,className:"w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}),t.errors.lastName&&Object(a.jsx)("div",{className:"bg-red-400 border-red-700 rounded-md text-black",children:t.errors.lastName})]})}),Object(a.jsx)("div",{className:"p-2 w-1/2",children:Object(a.jsxs)("div",{className:"relative",children:[Object(a.jsxs)("label",{htmlFor:"contact",className:"leading-7 text-gray-800 font-medium",children:["Contact Number"," ",Object(a.jsx)("span",{className:"font-light text-sm",children:"(optional)"})]}),Object(a.jsx)("input",{type:"text",id:"contact",name:"contact",value:t.data.contact,onChange:f,className:"w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}),t.errors.contact&&Object(a.jsx)("div",{className:"bg-red-400 border-red-700 rounded-md text-black",children:t.errors.contact})]})}),Object(a.jsx)("div",{className:"p-2 w-1/2",children:Object(a.jsxs)("div",{className:"relative",children:[Object(a.jsx)("label",{htmlFor:"email",className:"leading-7 text-gray-800 font-medium",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",name:"email",value:t.data.email,onChange:f,className:"w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}),t.errors.email&&Object(a.jsx)("div",{className:"bg-red-400 border-red-700 rounded-md text-black",children:t.errors.email})]})}),Object(a.jsx)("div",{className:"p-2 w-full",children:Object(a.jsxs)("div",{className:"relative",children:[Object(a.jsx)("label",{htmlFor:"message",className:"leading-7 text-gray-800 font-medium",children:"Message"}),Object(a.jsx)("textarea",{id:"message",name:"message",value:t.data.message,onChange:f,className:"w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}),t.errors.message&&Object(a.jsx)("div",{className:"bg-red-400 border-red-700 rounded-md text-black",children:t.errors.message})]})}),Object(a.jsxs)("div",{className:"p-2 w-full",children:[Object(a.jsxs)("button",{disabled:u.submitting,onClick:function(e){e.preventDefault();var a=j();if(r({data:t.data,errors:a||{}}),a)return null;p(e)},className:"flex items-center justify-center w-full m-auto text-white border-0 py-4 px-8 focus:outline-none bg-blue-500 hover:bg-primary-dark rounded text-lg font-medium tracking-wide "+(j()?"active:bg-red-700 ":"active:bg-green-700 "),children:[Object(a.jsx)("img",{src:"./spinner.svg",alt:"spin",className:"h-8 w-8 mr-3"+(u.submitting?" inline-block":" hidden")}),"Send"]}),u.status&&u.status.ok&&Object(a.jsx)(s.a.div,{variants:Object(c.a)("x",0,0,1,1,0,"easeIn",4,1,0),className:"rounded mt-2 p-2 bg-green-400 text-gray-900 text-center",children:u.status.msg}),u.status&&!u.status.ok&&Object(a.jsx)(s.a.div,{variants:Object(c.a)("x",0,0,1,1,0,"easeIn",4,1,0),className:"rounded mt-2 p-2 bg-red-400 text-gray-900 text-center",children:u.status.msg})]})]})})]})})};t.a=function(){return Object(a.jsx)(g,{})}},QLSJ:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r("qARc")}])},Qetd:function(e,t,r){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},YAAd:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("rePB"),n=function(e,t,r,n,i,s){var o,l,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"linear",d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1,m=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1;return{initial:(o={},Object(a.a)(o,e,t),Object(a.a)(o,"opacity",i),Object(a.a)(o,"scale",u),o),animate:(l={},Object(a.a)(l,e,r),Object(a.a)(l,"opacity",s),Object(a.a)(l,"scale",m),Object(a.a)(l,"transition",{duration:n,delay:d,ease:c}),l)}}},qARc:function(e,t,r){"use strict";r.r(t);var a=r("nKUr"),n=(r("q1tI"),r("AFxQ"));t.default=function(){return Object(a.jsx)(n.a,{})}}},[["QLSJ",0,1,5,2,4]]]);