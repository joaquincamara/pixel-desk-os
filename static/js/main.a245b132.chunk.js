(this["webpackJsonppixel-desk-os"]=this["webpackJsonppixel-desk-os"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/pixel-desk-logo.b8b0651d.svg"},function(e,t,n){e.exports=n.p+"static/media/zelda.35e5073a.mp3"},function(e,t,n){e.exports=n.p+"static/media/castlevania.b084d6a5.mp3"},function(e,t,n){e.exports=n.p+"static/media/pokemon.ad18d75f.mp3"},,function(e,t,n){e.exports=n.p+"static/media/pixel-desk-icon.1294995d.svg"},function(e,t,n){e.exports=n.p+"static/media/shut_down_normal.d4604b5a.ico"},function(e,t,n){e.exports=n.p+"static/media/notepad.37e3ef92.ico"},function(e,t,n){e.exports=n.p+"static/media/settings_gear.744bf98b.ico"},function(e,t,n){e.exports=n.p+"static/media/directory_closed.dba9793e.ico"},function(e,t,n){e.exports=n.p+"static/media/game_mine_2.7ee9e4ff.ico"},function(e,t,n){e.exports=n.p+"static/media/multimedia.263f7fc7.ico"},function(e,t,n){e.exports=n.p+"static/media/system-infor.72c57337.ico"},function(e,t,n){e.exports=n(46)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(15),r=n.n(o),i=(n(34),n(6)),l=n(1),m=(n(35),n(5)),s=n(16),u=n.n(s),d=n(17),p=n.n(d),f=n(18),E=n.n(f),v=n(19),b=n.n(v),_=function(e){var t=e.predicate,n=e.children;return t?c.a.createElement(c.a.Fragment,null,n):c.a.createElement(c.a.Fragment,null)},g=(n(36),[p.a,E.a,b.a].map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))),h=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),n=t[0],o=t[1],r=Object(l.e)();Object(a.useEffect)((function(){return n<100&&setTimeout((function(){o(n+1)}),30),clearTimeout(void 0)}),[n,void 0]);var i=function(e){if("Enter"===e.key)return r.push("/home")};return c.a.useEffect((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[]),c.a.createElement("div",{className:"init-system"},c.a.createElement("img",{src:u.a,alt:"Pixel-Desk-Logo"}),c.a.createElement("progress",{max:"100",value:n}),c.a.createElement(_,{predicate:100===n},c.a.createElement("p",{className:"blinking"},"Press ENTER to Log-in"),c.a.createElement("audio",{hidden:!0,src:g[0],controls:!0,autoPlay:!0})))},w=n(11),x=n.n(w),y=n(21),N=n.n(y),k=n(22),j=n.n(k),D=n(23),I=n.n(D),O=n(24),M=n.n(O),S=n(25),B=n.n(S),Y=n(26),L=n.n(Y),P=n(27),A=n.n(P),T=n(28),z=n.n(T),C=(n(14),n(43),function(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(x()().format("MM/DD/YY h:mm:ss a")),i=Object(m.a)(r,2),s=i[0],u=i[1],d=Object(l.e)();return Object(a.useEffect)((function(){var e=setInterval((function(){u(x()().format("h:mm:ss a--MM / DD / YY"))}),1e3);return function(){clearInterval(e)}}),[s]),c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar__dropup"},c.a.createElement("button",{onClick:function(){return o(!n)},className:"navbar__dropbtn"},c.a.createElement("img",{src:N.a,alt:"Shut-down"})),c.a.createElement("div",{hidden:n,className:n?"":"navbar__dropup-content"},c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:z.a,alt:"system-infor"}),c.a.createElement("p",null,"System info")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:A.a,alt:"musicPlayerIcon"}),c.a.createElement("p",null,"Music player")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:L.a,alt:"gameIcon"}),c.a.createElement("p",null,"Video game console")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:B.a,alt:"documents"}),c.a.createElement("p",null,"Documents")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:M.a,alt:"Setting-Icon"}),c.a.createElement("p",null,"Settings")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:I.a,alt:"note-Pad"}),c.a.createElement("p",null,"Notepad")),c.a.createElement("div",{onClick:function(){return d.push("/")},className:"navbar__dropup-content__action-shut-down"},c.a.createElement("img",{src:j.a,alt:"shut-Down"}),c.a.createElement("p",null,"Shut Down")))),c.a.createElement("button",{disabled:!0,className:"navbar__dropbtn-active"},s))}),X=(n(44),function(){return Object(a.useEffect)((function(){!function(e){var t=0,n=0,a=0,c=0;document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=o:e.onmousedown=o;function o(e){(e=e||window.event).preventDefault(),a=e.clientX,c=e.clientY,document.onmouseup=i,document.onmousemove=r}function r(o){(o=o||window.event).preventDefault(),t=a-o.clientX,n=c-o.clientY,a=o.clientX,c=o.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}}(document.getElementById("mydiv"))})),c.a.createElement("div",{id:"mydiv",className:"window"},c.a.createElement("div",{id:"mydivheader",className:"title-bar"},c.a.createElement("div",{className:"title-bar-text"},"System Info"),c.a.createElement("div",{className:"title-bar-controls"},c.a.createElement("button",{"aria-label":"Minimize"}),c.a.createElement("button",{"aria-label":"Maximize"}),c.a.createElement("button",{"aria-label":"Close"}))),c.a.createElement("div",{className:"window-body"},c.a.createElement("h3",null,"I AM DRAGABBLE")))}),F=(n(45),function(){return c.a.createElement("div",{className:"home-desk"},c.a.createElement(X,null),c.a.createElement(C,null))});var J=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,{basename:"/"},c.a.createElement(l.a,{exact:!0,path:"/",component:h}),c.a.createElement(l.a,{path:"/home",component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.a245b132.chunk.js.map