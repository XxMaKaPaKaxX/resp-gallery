(this["webpackJsonpresp-gallery"]=this["webpackJsonpresp-gallery"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(7),i=c.n(s),r=c(2),o=c(0),l=function(e){var t=e.id,c=e.url,n=(e.apiUrl,e.activateImg);return Object(o.jsx)("div",{size:"12",md:"6",lg:"4",className:"mb-3 col-12 col-md-6 col-lg-4",children:Object(o.jsx)("img",{className:"img-fluid",onClick:function(e){return n(e)},src:c,alt:"image_".concat(t),"data-id":t})})},m=function(e){var t=e.data,c=e.apiUrl,n=e.activateImg,a=t.map((function(e){return Object(o.jsx)(l,{id:e.id,url:e.url,apiUrl:c,activateImg:n},e.id)}));return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row text-center",children:a})})},j=function(e){var t=e.url;return Object(o.jsx)("div",{className:"img-container w-100 d-flex align-items-center justify-content-center",children:t?Object(o.jsx)("img",{src:t,className:"img-fluid",alt:""}):Object(o.jsx)("div",{className:"spinner-border",role:"status",children:Object(o.jsx)("span",{className:"visually-hidden"})})})},u=c(5),d=function(e){var t=e.comments;if(console.log(void 0===t||0===Object(u.a)(t).length),void 0===t||0===Object(u.a)(t).length)return Object(o.jsx)("div",{children:"brak kommentarzy"});var c=Object(u.a)(t).map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:new Date(e.date).toLocaleString()}),Object(o.jsx)("p",{children:e.text})]},e.id)}));return Object(o.jsx)("div",{children:c})},b=function(e){var t=e.imgId,c=e.apiUrl,a=e.deactivateImg,s=Object(n.useState)(""),i=Object(r.a)(s,2),l=i[0],m=i[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),O=b[0],f=b[1],h=Object(n.useState)(""),p=Object(r.a)(h,2),g=p[0],x=p[1];Object(n.useEffect)((function(){fetch("".concat(c,"/").concat(t)).then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]);var v=function(e){switch(e.target.id){case"form-comment":x(e.target.value);break;case"form-name":f(e.target.value);break;default:console.log("smth go wrong!")}};return Object(o.jsxs)("div",{className:"img-modal-window",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-7",children:[Object(o.jsx)(j,{url:l.url}),Object(o.jsx)("div",{className:"post-comment",children:Object(o.jsxs)("form",{className:"text-center",onSubmit:function(e){return function(e){e.preventDefault();var n={name:O,comment:g};console.log("wys\u0142ane"),console.log("".concat(c,"/").concat(t,"/comments")),fetch("".concat(c,"/").concat(t,"/comments"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then(f("")).then(x("")).catch((function(e){return console.error(e)}))}(e)},children:[Object(o.jsx)("input",{value:O,onChange:function(e){return v(e)},type:"text",id:"form-name",className:"form-control my-3",placeholder:"Twoje imi\u0119"}),Object(o.jsx)("input",{value:g,onChange:function(e){return v(e)},type:"text",id:"form-comment",className:"form-control my-3",placeholder:"Tw\xf3j kommentarz"}),Object(o.jsx)("input",{type:"submit",className:"btn btn-primary w-100 mx-0",value:"Wy\u015blij"})]})})]}),Object(o.jsxs)("div",{className:"col-md-5",children:[Object(o.jsx)("h3",{className:"comments-title my-3",children:"Komentarze:"}),Object(o.jsx)(d,{comments:l.comments})]})]}),Object(o.jsx)("button",{className:"btn btn-outline-primary closing_btn",onClick:a,children:Object(o.jsx)("i",{className:"fas fa-times"})})]})};c(13);var O=function(){var e="https://boiling-refuge-66454.herokuapp.com/images",t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(null),l=Object(r.a)(i,2),j=l[0],u=l[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"app-title",children:"Test app"}),Object(o.jsx)(m,{data:a,apiUrl:e,activateImg:function(e){u(e.target.getAttribute("data-id")),window.scroll(0,0)}}),null!==j&&Object(o.jsx)(b,{imgId:j,apiUrl:e,deactivateImg:function(){u(null)}})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e503d0e5.chunk.js.map