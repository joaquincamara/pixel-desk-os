(this["webpackJsonppixel-desk-os"]=this["webpackJsonppixel-desk-os"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/pixel-desk-logo.b8b0651d.svg"},function(e,t,n){e.exports=n.p+"static/media/zelda.35e5073a.mp3"},function(e,t,n){e.exports=n.p+"static/media/castlevania.b084d6a5.mp3"},function(e,t,n){e.exports=n.p+"static/media/pokemon.ad18d75f.mp3"},,function(e,t,n){e.exports=n(37)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),l=(n(25),n(7)),i=n(1),s=(n(26),n(5)),u=n(15),m=n.n(u),p=n(16),d=n.n(p),f=n(17),E=n.n(f),v=n(18),b=n.n(v),h=function(e){var t=e.predicate,n=e.children;return t?r.a.createElement(r.a.Fragment,null,n):r.a.createElement(r.a.Fragment,null)},g=(n(27),[d.a,E.a,b.a].map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))),k=function(){var e=Object(i.e)(),t=Object(a.useState)(0),n=Object(s.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)((function(){return c<100&&setTimeout((function(){o(c+1)}),30),clearTimeout(void 0)}),[c,void 0]);return r.a.createElement("div",{className:"init-system"},r.a.createElement("img",{src:m.a,alt:"Pixel-Desk-Logo"}),r.a.createElement("progress",{max:"100",value:c}),r.a.createElement(h,{predicate:100===c},r.a.createElement("input",{autoFocus:!0,readOnly:!0,onKeyPress:function(t){return function(t){"Enter"===t.key&&e.push("/home")}(t)},className:"blinking",value:"Press ENTER to Log-in"}),r.a.createElement("audio",{hidden:!0,src:g[0],controls:!0,autoPlay:!0})))},x=n(11),N=n.n(x),O=(n(34),n(35),function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(N()().format("MM/DD/YY h:mm:ss a")),l=Object(s.a)(o,2),i=l[0],u=l[1];return Object(a.useEffect)((function(){var e=setInterval((function(){u(N()().format("MM / DD / YY h:mm:ss a"))}),1e3);return function(){clearInterval(e)}}),[i]),r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar__dropup"},r.a.createElement("button",{onClick:function(){return c(!n)},className:"navbar__dropbtn"},"Start"),r.a.createElement("div",{hidden:n,className:n?"":"navbar__dropup-content"},r.a.createElement("p",null,"System info"),r.a.createElement("p",null,"Music player"),r.a.createElement("p",null,"Video game console"),r.a.createElement("p",null,"Documents"),r.a.createElement("p",null,"Settings"),r.a.createElement("p",null,"Notepad"),r.a.createElement("p",null,"Shut Down"))),r.a.createElement("button",{disabled:!0,className:"navbar__dropbtn-active"},i))}),j=(n(36),function(){return r.a.createElement(O,null)});var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{basename:"/"},r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{path:"/home",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.647b1158.chunk.js.map