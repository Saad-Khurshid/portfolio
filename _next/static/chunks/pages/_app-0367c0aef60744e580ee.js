_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),s=n("284h");t.__esModule=!0,t.default=void 0;var o=s(n("q1tI")),c=n("elyg"),a=n("nOHt"),l=n("vNVm"),i={};function d(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(s?"%"+s:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),s=n&&n.pathname||"/",u=o.default.useMemo((function(){var t=(0,c.resolveHref)(s,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,c.resolveHref)(s,e.as):a||o}}),[s,e.href,e.as]),p=u.href,f=u.as,h=e.children,j=e.replace,m=e.shallow,x=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var w=o.Children.only(h),C=w&&"object"===typeof w&&w.ref,v=(0,l.useIntersection)({rootMargin:"200px"}),k=r(v,2),O=k[0],g=k[1],y=o.default.useCallback((function(e){O(e),C&&("function"===typeof C?C(e):"object"===typeof C&&(C.current=e))}),[C,O]);(0,o.useEffect)((function(){var e=g&&t&&(0,c.isLocalURL)(p),r="undefined"!==typeof b?b:n&&n.locale,s=i[p+"%"+f+(r?"%"+r:"")];e&&!s&&d(n,p,f,{locale:r})}),[f,p,g,b,t,n]);var M={ref:y,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,o,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[s?"replace":"push"](n,r,{shallow:o,locale:l,scroll:a}))}(e,n,p,f,j,m,x,b)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(n,p,f,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var _="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(f,_,n&&n.locales,n&&n.domainLocales);M.href=E||(0,c.addBasePath)((0,c.addLocale)(f,_,n&&n.defaultLocale))}return o.default.cloneElement(w,M)};t.default=u},cha2:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),s=n("rePB"),o=n("q1tI"),c=function(e){return Object(r.jsxs)("footer",{className:"sticky bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:p-6 md:px-32 dark:bg-gray-800 justify-between",children:[Object(r.jsxs)("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400",children:["\xa9 2023 ",Object(r.jsx)("a",{href:"./",className:"hover:underline",children:"Saad Khurshid\u2122"}),". All Rights Reserved."]}),Object(r.jsxs)("ul",{className:"flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 gap-4 md:gap-12",children:[Object(r.jsx)("li",{children:Object(r.jsx)("div",{className:"pt-2 flex align-center",children:Object(r.jsxs)("a",{href:"mailto:saadkhurshid06@gmail.com",className:"flex items-center space-x-2",children:[Object(r.jsx)("svg",{className:"w-8 h-8 fill-current stroke-current mr-2",width:"64",height:"64",viewBox:"0 0 100.354 100.352",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462  c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029  c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02  c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465  c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125  c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011  c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061  c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059  c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018  c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117  c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121  c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071  c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03  c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z   M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472  L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481  l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"})}),"saadkhurshid06@gmail.com"]})})}),Object(r.jsx)("li",{children:Object(r.jsx)("div",{className:"pt-2 flex align-center",children:Object(r.jsxs)("a",{href:"tel:+61413247279",className:"flex items-center",children:[Object(r.jsxs)("svg",{className:"w-8 h-8 fill-current stroke-current mr-2",width:"64",height:"64",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z"}),Object(r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z"}),Object(r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z"})]}),"+61 413 247279"]})})}),Object(r.jsx)("li",{children:Object(r.jsx)("div",{className:"pt-2 flex align-center items-center",children:Object(r.jsxs)("a",{href:"https://maps.google.com/?q=Glenroy+VIC+3046,+Australia",target:"_blank",className:"flex align-center items-center",children:[Object(r.jsxs)("svg",{className:"w-8 h-8 fill-current stroke-current mr-2",width:"64",height:"64",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(r.jsx)("path",{d:"M15.92,15.23,18.35,11a7.27,7.27,0,0,0,0-7.35,7.35,7.35,0,0,0-12.72,0,7.27,7.27,0,0,0,0,7.35l2.43,4.21C4,15.71,0,17,0,19.5,0,22.59,6.22,24,12,24s12-1.41,12-4.5C24,17,20,15.71,15.92,15.23ZM7.37,4.67A5.34,5.34,0,1,1,16.62,10L12,18,7.38,10A5.31,5.31,0,0,1,7.37,4.67ZM12,22C5.4,22,2,20.25,2,19.5c0-.53,2.15-1.95,7.18-2.38l1.35,2.33a1.7,1.7,0,0,0,2.94,0l1.35-2.33C19.85,17.55,22,19,22,19.5,22,20.25,18.6,22,12,22Z"}),Object(r.jsx)("circle",{cx:"12",cy:"7",r:"2"})]}),"Glenroy, VIC 3046, Australia"]})})})]})]})},a=n("YFqc"),l=n.n(a),i="ml-2 text-xl text-white text-right hover:scale-125 hover:text-gray-800 hover:duration-500 ease-in-out transform transition ",d="mt-12 pl-4 text-xl w-min text-white hover:scale-125 hover:text-gray-800 hover:duration-500 ease-in-out transform transition ",u=" text-gray-800 underline",p="header bg-primary flex items-center px-2 py-4 sm:px-4 sm:py-8 lg:px-10 sticky top-0 transition-shadow duration-500 transform",f="z-40 shadow-navShadow duration-500 ease-in-out transform",h=function(e){var t=Object(o.useState)("/"),n=t[0],s=t[1],c=Object(o.useState)(p),a=c[0],h=c[1],j=Object(o.useRef)(a),m=Object(o.useState)(!1),x=m[0],b=m[1];Object(o.useEffect)((function(){if(window){var e=window.location.pathname;if(n!==e)switch(window.location.pathname){case"/":return s("/");default:return s("")}}return function(){}}));var w=function(){if(window){var e=window.scrollY;if(e>0&&!j.current.includes(f))return j.current="".concat(p," ").concat(f),h(j.current);if(e<=0&&j.current.includes(f))return j.current=p,h(j.current)}};return Object(o.useEffect)((function(){return window&&window.addEventListener("scroll",w,!1),function(){return window.removeEventListener("scroll",w,!1)}}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:a,children:[Object(r.jsx)(l.a,{href:"./",children:Object(r.jsxs)("a",{className:"text-white text-2xl text-end leading-normal tracking-wider hover:cursor-pointer hover:duration-500 ease-in-out transform transition break-words py-auto flex content-center",onClick:function(){x&&b(!1)},children:[Object(r.jsx)("div",{className:"mr-2 border-2 border-black rounded ring-2",children:Object(r.jsx)("img",{src:"/favicon-32x32.png",alt:"logo"})}),"Saad Khurshid"]})}),Object(r.jsx)("div",{className:"flex-1 px-2 hidden md:block",children:Object(r.jsxs)("ul",{className:"items-center space-y-2 ml-auto right-0 w-min md:flex md:space-y-0 md:space-x-4 lg:space-x-6",children:[Object(r.jsx)("li",{className:i,children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/saad-khurshid-a101a8126/",target:"_blank",children:Object(r.jsx)("svg",{viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-auto fill-current stroke-current",children:Object(r.jsx)("path",{d:"M87.316 0H8.68398C3.888 0 0 3.888 0 8.68398V87.3158C0 92.112 3.888 96 8.68398 96H87.3158C92.112 96 96 92.112 96 87.3158V8.68398C96 3.888 92.112 0 87.316 0ZM29.7065 82.8927C29.7065 84.2885 28.5751 85.4199 27.1793 85.4199H16.4218C15.026 85.4199 13.8946 84.2885 13.8946 82.8927V37.7976C13.8946 36.4018 15.026 35.2704 16.4218 35.2704H27.1793C28.5751 35.2704 29.7065 36.4018 29.7065 37.7976V82.8927ZM21.8005 31.0196C16.1564 31.0196 11.5808 26.444 11.5808 20.7998C11.5808 15.1557 16.1564 10.5801 21.8005 10.5801C27.4447 10.5801 32.0203 15.1557 32.0203 20.7998C32.0203 26.444 27.4449 31.0196 21.8005 31.0196ZM85.925 83.0963C85.925 84.3795 84.8846 85.4199 83.6014 85.4199H72.0578C70.7746 85.4199 69.7342 84.3795 69.7342 83.0963V61.9441C69.7342 58.7887 70.6598 48.1169 61.488 48.1169C54.3737 48.1169 52.9307 55.4214 52.6409 58.6995V83.0963C52.6409 84.3795 51.6007 85.4199 50.3173 85.4199H39.1527C37.8695 85.4199 36.8291 84.3795 36.8291 83.0963V37.5941C36.8291 36.3109 37.8695 35.2704 39.1527 35.2704H50.3173C51.6005 35.2704 52.6409 36.3109 52.6409 37.5941V41.5283C55.2789 37.5694 59.1993 34.5138 67.5465 34.5138C86.0308 34.5138 85.925 51.7827 85.925 61.2711V83.0963Z"})})})}),Object(r.jsx)("li",{className:i,children:Object(r.jsx)("a",{href:"https://github.com/saad-Khurshid",target:"_blank",className:"hover:text-gray-800",children:Object(r.jsx)("svg",{viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-auto fill-current stroke-current",children:Object(r.jsx)("path",{d:"M47.994 0.999176C21.492 0.999176 0 22.5752 0 49.1912C0 70.4792 13.752 88.5392 32.832 94.9172C35.232 95.3612 36.108 93.8732 36.108 92.5952C36.108 91.4492 36.066 88.4192 36.042 84.3992C22.692 87.3092 19.872 77.9372 19.872 77.9372C17.694 72.3692 14.544 70.8872 14.544 70.8872C10.182 67.8992 14.868 67.9592 14.868 67.9592C19.686 68.3012 22.218 72.9272 22.218 72.9272C26.502 80.2892 33.456 78.1652 36.192 76.9292C36.624 73.8152 37.866 71.6912 39.24 70.4852C28.584 69.2672 17.376 65.1332 17.376 46.6712C17.376 41.4092 19.248 37.1072 22.32 33.7352C21.822 32.5172 20.178 27.6152 22.788 20.9852C22.788 20.9852 26.82 19.6892 35.988 25.9232C39.816 24.8552 43.92 24.3212 48.006 24.3032C52.08 24.3272 56.19 24.8552 60.024 25.9292C69.186 19.6952 73.212 20.9912 73.212 20.9912C75.828 27.6272 74.184 32.5232 73.692 33.7412C76.77 37.1132 78.624 41.4152 78.624 46.6772C78.624 65.1872 67.404 69.2612 56.712 70.4552C58.434 71.9432 59.97 74.8832 59.97 79.3772C59.97 85.8212 59.91 91.0172 59.91 92.5952C59.91 93.8852 60.774 95.3852 63.21 94.9112C82.26 88.5272 96 70.4732 96 49.1912C96 22.5752 74.508 0.999176 47.994 0.999176Z"})})})})]})}),Object(r.jsxs)("div",{className:"block md:hidden ml-auto",onClick:function(){return b(!x)},children:[!x&&Object(r.jsxs)("svg",{className:"w-8 h-8 text-white hover:text-gray-800 fill-current",width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("path",{d:"M34.6679 64.6582H154.668C156.876 64.6582 158.668 61.8291 158.668 58.3291C158.668 54.8291 156.876 52 154.668 52H34.6679C32.4599 52 30.6679 54.8291 30.6679 58.3291C30.6679 61.8291 32.4559 64.6582 34.6679 64.6582Z"}),Object(r.jsx)("path",{d:"M34.6679 152.658H154.668C156.876 152.658 158.668 149.829 158.668 146.329C158.668 142.829 156.876 140 154.668 140H34.6679C32.4599 140 30.6679 142.829 30.6679 146.329C30.6679 149.829 32.4559 152.658 34.6679 152.658Z"}),Object(r.jsx)("path",{d:"M34.6679 108.658H154.668C156.876 108.658 158.668 105.829 158.668 102.329C158.668 98.8291 156.876 96 154.668 96H34.6679C32.4599 96 30.6679 98.8291 30.6679 102.329C30.6679 105.829 32.4559 108.658 34.6679 108.658Z"})]}),x&&Object(r.jsx)("svg",{className:"w-8 h-8 text-white hover:text-gray-800 fill-current",width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M149.281 126.211L98.0312 74.7656L149.398 23.9844C151.508 21.875 151.508 18.4375 149.398 16.3281L134.789 1.64062C133.773 0.624998 132.406 0.0781231 130.961 0.0781231C129.516 0.0781231 128.148 0.664061 127.133 1.64062L76 52.2656L24.7891 1.67969C23.7734 0.664063 22.4062 0.117188 20.9609 0.117188C19.5156 0.117188 18.1484 0.703125 17.1328 1.67969L2.5625 16.3672C0.453125 18.4766 0.453125 21.9141 2.5625 24.0234L53.9297 74.8047L2.71875 126.211C1.70313 127.227 1.11719 128.594 1.11719 130.039C1.11719 131.484 1.66406 132.852 2.71875 133.867L17.3281 148.555C18.3828 149.609 19.75 150.156 21.1562 150.156C22.5234 150.156 23.9297 149.648 24.9844 148.555L76 97.3047L127.055 148.516C128.109 149.57 129.477 150.117 130.883 150.117C132.25 150.117 133.656 149.609 134.711 148.516L149.32 133.828C150.336 132.813 150.922 131.445 150.922 130C150.883 128.594 150.297 127.227 149.281 126.211Z"})})]})]},"nav"),Object(r.jsx)("div",{className:"inset-0 fixed mt-16 z-50 w-full h-80 items-center bg-primary shadow-navShadow transition-shadow duration-500 transform md:hidden "+(x?"block":"hidden"),children:Object(r.jsxs)("ul",{className:"space-y-2 lef-5 w-min",children:[Object(r.jsx)("li",{className:d+("/"===n?u:""),children:Object(r.jsx)(l.a,{href:"./",children:Object(r.jsx)("a",{onClick:function(){x&&b(!1)},children:"About"})})}),Object(r.jsx)("li",{className:d+("/portfolio"===n?u:""),children:Object(r.jsx)(l.a,{href:"./portfolio",children:Object(r.jsx)("a",{onClick:function(){x&&b(!1)},children:"Portfolio"})})}),Object(r.jsx)("li",{className:d+("/contact"===n?u:""),children:Object(r.jsx)(l.a,{href:"./contact",children:Object(r.jsx)("a",{onClick:function(){x&&b(!1)},children:"Contact"})})}),Object(r.jsx)("li",{className:d,children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/saad-khurshid-a101a8126/",target:"_blank",children:Object(r.jsx)("svg",{onClick:function(){x&&b(!1)},viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg",className:"mt-4 w-5 h-5 fill-current stroke-current",children:Object(r.jsx)("path",{d:"M87.316 0H8.68398C3.888 0 0 3.888 0 8.68398V87.3158C0 92.112 3.888 96 8.68398 96H87.3158C92.112 96 96 92.112 96 87.3158V8.68398C96 3.888 92.112 0 87.316 0ZM29.7065 82.8927C29.7065 84.2885 28.5751 85.4199 27.1793 85.4199H16.4218C15.026 85.4199 13.8946 84.2885 13.8946 82.8927V37.7976C13.8946 36.4018 15.026 35.2704 16.4218 35.2704H27.1793C28.5751 35.2704 29.7065 36.4018 29.7065 37.7976V82.8927ZM21.8005 31.0196C16.1564 31.0196 11.5808 26.444 11.5808 20.7998C11.5808 15.1557 16.1564 10.5801 21.8005 10.5801C27.4447 10.5801 32.0203 15.1557 32.0203 20.7998C32.0203 26.444 27.4449 31.0196 21.8005 31.0196ZM85.925 83.0963C85.925 84.3795 84.8846 85.4199 83.6014 85.4199H72.0578C70.7746 85.4199 69.7342 84.3795 69.7342 83.0963V61.9441C69.7342 58.7887 70.6598 48.1169 61.488 48.1169C54.3737 48.1169 52.9307 55.4214 52.6409 58.6995V83.0963C52.6409 84.3795 51.6007 85.4199 50.3173 85.4199H39.1527C37.8695 85.4199 36.8291 84.3795 36.8291 83.0963V37.5941C36.8291 36.3109 37.8695 35.2704 39.1527 35.2704H50.3173C51.6005 35.2704 52.6409 36.3109 52.6409 37.5941V41.5283C55.2789 37.5694 59.1993 34.5138 67.5465 34.5138C86.0308 34.5138 85.925 51.7827 85.925 61.2711V83.0963Z"})})})}),Object(r.jsx)("li",{className:d,children:Object(r.jsx)("a",{href:"https://github.com/saad-Khurshid",target:"_blank",children:Object(r.jsx)("svg",{onClick:function(){x&&b(!1)},viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg",className:"mt-4 w-5 h-5 fill-current stroke-current",children:Object(r.jsx)("path",{d:"M47.994 0.999176C21.492 0.999176 0 22.5752 0 49.1912C0 70.4792 13.752 88.5392 32.832 94.9172C35.232 95.3612 36.108 93.8732 36.108 92.5952C36.108 91.4492 36.066 88.4192 36.042 84.3992C22.692 87.3092 19.872 77.9372 19.872 77.9372C17.694 72.3692 14.544 70.8872 14.544 70.8872C10.182 67.8992 14.868 67.9592 14.868 67.9592C19.686 68.3012 22.218 72.9272 22.218 72.9272C26.502 80.2892 33.456 78.1652 36.192 76.9292C36.624 73.8152 37.866 71.6912 39.24 70.4852C28.584 69.2672 17.376 65.1332 17.376 46.6712C17.376 41.4092 19.248 37.1072 22.32 33.7352C21.822 32.5172 20.178 27.6152 22.788 20.9852C22.788 20.9852 26.82 19.6892 35.988 25.9232C39.816 24.8552 43.92 24.3212 48.006 24.3032C52.08 24.3272 56.19 24.8552 60.024 25.9292C69.186 19.6952 73.212 20.9912 73.212 20.9912C75.828 27.6272 74.184 32.5232 73.692 33.7412C76.77 37.1132 78.624 41.4152 78.624 46.6772C78.624 65.1872 67.404 69.2612 56.712 70.4552C58.434 71.9432 59.97 74.8832 59.97 79.3772C59.97 85.8212 59.91 91.0172 59.91 92.5952C59.91 93.8852 60.774 95.3852 63.21 94.9112C82.26 88.5272 96 70.4732 96 49.1912C96 22.5752 74.508 0.999176 47.994 0.999176Z"})})})})]})})]})},j=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"font-body w-full h-full",children:[Object(r.jsx)(h,{}),Object(r.jsx)("main",{className:"main",children:t}),Object(r.jsx)(c,{})]})},m=n("mrSG"),x=n("2jHN");var b=n("c8Wq"),w=n("J4/h"),C=0;function v(){var e=C;return C++,e}var k=function(e){var t=e.children,n=e.initial,r=e.isPresent,s=e.onExitComplete,c=e.custom,a=e.presenceAffectsLayout,l=Object(w.a)(O),i=Object(w.a)(v),d=Object(o.useMemo)((function(){return{id:i,initial:n,isPresent:r,custom:c,onExitComplete:function(e){l.set(e,!0);var t=!0;l.forEach((function(e){e||(t=!1)})),t&&(null===s||void 0===s||s())},register:function(e){return l.set(e,!1),function(){return l.delete(e)}}}}),a?void 0:[r]);return Object(o.useMemo)((function(){l.forEach((function(e,t){return l.set(t,!1)}))}),[r]),o.useEffect((function(){!r&&!l.size&&(null===s||void 0===s||s())}),[r]),o.createElement(b.a.Provider,{value:d},t)};function O(){return new Map}var g=n("10wF");function y(e){return e.key||""}var M=function(e){var t=e.children,n=e.custom,r=e.initial,s=void 0===r||r,c=e.onExitComplete,a=e.exitBeforeEnter,l=e.presenceAffectsLayout,i=void 0===l||l,d=function(){var e=Object(o.useRef)(!1),t=Object(m.c)(Object(o.useState)(0),2),n=t[0],r=t[1];return Object(x.a)((function(){return e.current=!0})),Object(o.useCallback)((function(){!e.current&&r(n+1)}),[n])}(),u=Object(o.useContext)(g.b);Object(g.c)(u)&&(d=u.forceUpdate);var p=Object(o.useRef)(!0),f=function(e){var t=[];return o.Children.forEach(e,(function(e){Object(o.isValidElement)(e)&&t.push(e)})),t}(t),h=Object(o.useRef)(f),j=Object(o.useRef)(new Map).current,b=Object(o.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=y(e);t.set(n,e)}))}(f,j),p.current)return p.current=!1,o.createElement(o.Fragment,null,f.map((function(e){return o.createElement(k,{key:y(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:i},e)})));for(var w=Object(m.e)([],Object(m.c)(f)),C=h.current.map(y),v=f.map(y),O=C.length,M=0;M<O;M++){var _=C[M];-1===v.indexOf(_)?b.add(_):b.delete(_)}return a&&b.size&&(w=[]),b.forEach((function(e){if(-1===v.indexOf(e)){var t=j.get(e);if(t){var r=C.indexOf(e);w.splice(r,0,o.createElement(k,{key:y(t),isPresent:!1,onExitComplete:function(){j.delete(e),b.delete(e);var t=h.current.findIndex((function(t){return t.key===e}));h.current.splice(t,1),b.size||(h.current=f,d(),c&&c())},custom:n,presenceAffectsLayout:i},t))}}})),w=w.map((function(e){var t=e.key;return b.has(t)?e:o.createElement(k,{key:y(e),isPresent:!0,presenceAffectsLayout:i},e)})),h.current=w,o.createElement(o.Fragment,null,b.size?w:w.map((function(e){return Object(o.cloneElement)(e)})))};n("zPlV"),n("nwGX");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,s=e.router;return Object(r.jsx)(j,{children:Object(r.jsx)(M,{exitBeforeEnter:!0,children:Object(o.createElement)(t,E(E({},n),{},{key:s.route}))})})}},nwGX:function(e,t){throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/plugins/mini-css-extract-plugin/src/loader.js):\nModuleBuildError: Module build failed (from (webpack)/postcss-loader/cjs.js):\n/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/tailwind.config.js:1\n\\module.exports = {\n^\n\nSyntaxError: Invalid or unexpected token\n    at Object.compileFunction (node:vm:360:18)\n    at wrapSafe (node:internal/modules/cjs/loader:1126:15)\n    at Module._compile (node:internal/modules/cjs/loader:1162:27)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1252:10)\n    at Module.load (node:internal/modules/cjs/loader:1076:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:911:12)\n    at Module.require (node:internal/modules/cjs/loader:1100:19)\n    at require (node:internal/modules/cjs/helpers:119:18)\n    at /Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/tailwindcss/lib/index.js:78:107\n    at module.exports (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/tailwindcss/lib/index.js:88:36)\n    at Processor.normalize (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:167286)\n    at new Processor (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:166734)\n    at postcss (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:163064)\n    at Object.loader (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:125301)\n    at /Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/webpack/bundle4.js:63396:20\n    at /Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/webpack/bundle4.js:31938:11\n    at /Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/webpack/bundle4.js:31804:18\n    at context.callback (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/webpack/bundle4.js:31682:13)\n    at Object.loader (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:125423)")},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,l=(0,s.useRef)(),i=(0,s.useState)(!1),d=r(i,2),u=d[0],p=d[1],f=(0,s.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:s,elements:r}),n}(n),s=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),a.delete(s))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,u]);return(0,s.useEffect)((function(){if(!c&&!u){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[u]),[f,u]};var s=n("q1tI"),o=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var a=new Map},zPlV:function(e,t){throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/plugins/mini-css-extract-plugin/src/loader.js):\nModuleBuildError: Module build failed (from (webpack)/postcss-loader/cjs.js):\n/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/tailwind.config.js:1\n\\module.exports = {\n^\n\nSyntaxError: Invalid or unexpected token\n    at Object.compileFunction (node:vm:360:18)\n    at wrapSafe (node:internal/modules/cjs/loader:1126:15)\n    at Module._compile (node:internal/modules/cjs/loader:1162:27)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1252:10)\n    at Module.load (node:internal/modules/cjs/loader:1076:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:911:12)\n    at Module.require (node:internal/modules/cjs/loader:1100:19)\n    at require (node:internal/modules/cjs/helpers:119:18)\n    at /Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/tailwindcss/lib/index.js:78:107\n    at module.exports (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/tailwindcss/lib/index.js:88:36)\n    at Processor.normalize (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:167286)\n    at new Processor (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:166734)\n    at postcss (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:163064)\n    at Object.loader (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:125301)\n    at /Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/webpack/bundle4.js:63396:20\n    at /Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/webpack/bundle4.js:31938:11\n    at /Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/webpack/bundle4.js:31804:18\n    at context.callback (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/webpack/bundle4.js:31682:13)\n    at Object.loader (/Users/saadkhurshid/Desktop/personalWorkspace/portfolio/node_modules/next/dist/compiled/postcss-loader/cjs.js:1:125423)")}},[[0,0,1,3,2]]]);