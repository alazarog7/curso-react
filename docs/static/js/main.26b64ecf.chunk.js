(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(7),r=n.n(c),i=n(9),s=n(2),u=n(1),o=function(t){var e=t.setcategory,n=Object(u.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r.length>0&&e([r])},children:[Object(a.jsx)("h1",{children:r}),Object(a.jsx)("input",{type:"text",value:r,onChange:function(t){i(t.target.value)}})]})},j=n(10),d=n(6),f=n.n(d),l=n(8),p=function(){var t=Object(l.a)(f.a.mark((function t(e){var n,a,c,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=e1F8FYqV6yxP9gwAXkCkewVA0HGhSCaI&q=".concat(encodeURI(e),"&limit=10&offset=0"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.id;var e=t.title,n=t.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__bounce animate__delay-2s",children:[Object(a.jsx)("img",{src:n,alt:e,width:"100px",height:"100px"}),Object(a.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(u.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],c=n[1];return Object(u.useEffect)((function(){p(t).then((function(t){c({data:t,loading:!1})})).catch((function(){c({data:[],loading:!0})}))}),[t]),a}(e),c=n.data,r=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__zoomInLeft",children:e}),r&&"Cargando ...",Object(a.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(a.jsx)(b,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(u.useState)(["OK"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)("hr",{}),Object(a.jsx)(o,{setcategory:function(t){c([t].concat(Object(i.a)(n)))}}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(h,{category:t},t)}))})]})};n(17);r.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.26b64ecf.chunk.js.map