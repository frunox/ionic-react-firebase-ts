(this.webpackJsonpmemories=this.webpackJsonpmemories||[]).push([[9],{152:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),l=a(11),c=a(34),o=a(0),u=a.n(o),i=a(2),m=a(16),s=a(26),p=a(12),f=(a(152),a(21)),E=f.e.Camera,v=function(e){var t=Object(o.useState)(),a=Object(c.a)(t,2),n=a[0],m=a[1],s=Object(o.useRef)(null),v=function(){s.current.click()},d=function(){var t=Object(l.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f.c.isPluginAvailable("Camera")){t.next=3;break}return v(),t.abrupt("return");case 3:return t.prev=3,t.next=6,E.getPhoto({resultType:f.a.Uri,source:f.b.Camera,quality:80,width:500});case 6:if((a=t.sent)&&a.webPath){t.next=9;break}return t.abrupt("return");case 9:n={path:a.path,preview:a.webPath},m(n),e.onImagePick(n),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),v();case 17:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(){return t.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"image-preview"},!n&&u.a.createElement("h3",null,"No photo chosen"),n&&u.a.createElement("img",{src:n.preview,alt:"Preview"})),u.a.createElement(i.c,{fill:"clear",onClick:d},u.a.createElement(i.n,{icon:p.c,slot:"start"}),u.a.createElement(i.q,null,"Take Photo")),u.a.createElement("input",{type:"file",hidden:!0,ref:s,onChange:function(t){var a=t.target.files[0],n=new FileReader;n.onload=function(){var t={path:void 0,preview:n.result.toString()};m(t),e.onImagePick(t)},n.readAsDataURL(a)}}))};t.default=function(){var e=Object(o.useState)(),t=Object(c.a)(e,2),a=t[0],n=t[1],p=Object(o.useState)("good"),f=Object(c.a)(p,2),E=f[0],d=f[1],h=Object(o.useContext)(s.a),b=Object(o.useRef)(null),g=Object(m.e)(),w=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=null===(t=b.current)||void 0===t?void 0:t.value)&&0!==n.toString().trim().length&&a&&E){e.next=4;break}return console.log("Invalid input"),e.abrupt("return");case 4:console.log("memoriesCtx",h),h.addMemory(a,n.toString(),E),console.log("history",g),g.length>0?g.goBack():g.replace("/good-memories");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(i.r,null,u.a.createElement(i.m,null,u.a.createElement(i.C,null,u.a.createElement(i.d,{slot:"start"},u.a.createElement(i.b,{defaultHref:"good-memories"})),u.a.createElement(i.B,null,"Add New Memory"))),u.a.createElement(i.i,null,u.a.createElement(i.l,null,u.a.createElement(i.u,null,u.a.createElement(i.h,null,u.a.createElement(i.p,null,u.a.createElement(i.q,{position:"floating"},"Memory Title"),u.a.createElement(i.o,{type:"text",ref:b})))),u.a.createElement(i.u,null,u.a.createElement(i.h,null,u.a.createElement(i.v,{onIonChange:function(e){var t=e.detail.value;d(t)},value:E},u.a.createElement(i.w,{value:"good"},"Good Memory"),u.a.createElement(i.w,{value:"bad"},"Bad Memory")))),u.a.createElement(i.u,{className:"ion-text-center"},u.a.createElement(i.h,null,u.a.createElement(v,{onImagePick:function(e){n(e)}}))),u.a.createElement(i.u,{className:"ion-margin-top"},u.a.createElement(i.h,{className:"ion-text-center"},u.a.createElement(i.c,{onClick:w},"Add Memory"))))))}}}]);
//# sourceMappingURL=9.28521a36.chunk.js.map