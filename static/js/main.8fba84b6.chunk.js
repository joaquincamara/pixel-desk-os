(this["webpackJsonppixel-desk-os"]=this["webpackJsonppixel-desk-os"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/pixel-desk-logo.b8b0651d.svg"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/zelda.35e5073a.mp3"},function(e,t,a){e.exports=a.p+"static/media/castlevania.b084d6a5.mp3"},function(e,t,a){e.exports=a.p+"static/media/pokemon.ad18d75f.mp3"},,function(e,t,a){e.exports=a.p+"static/media/pixel-desk-icon.1294995d.svg"},function(e,t,a){e.exports=a.p+"static/media/shut_down_normal.d4604b5a.ico"},function(e,t,a){e.exports=a.p+"static/media/notepad.37e3ef92.ico"},function(e,t,a){e.exports=a.p+"static/media/settings_gear.744bf98b.ico"},function(e,t,a){e.exports=a.p+"static/media/directory_closed.dba9793e.ico"},function(e,t,a){e.exports=a.p+"static/media/game_mine_2.7ee9e4ff.ico"},function(e,t,a){e.exports=a.p+"static/media/multimedia.263f7fc7.ico"},function(e,t,a){e.exports=a.p+"static/media/system-infor.72c57337.ico"},function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(16),i=a.n(c),r=(a(34),a(6)),l=a(1),s=(a(35),a(5)),m=a(7),u=a.n(m),d=a(17),p=a.n(d),f=a(18),v=a.n(f),E=a(19),b=a.n(E),g=function(e){var t=e.predicate,a=e.children;return t?o.a.createElement(o.a.Fragment,null,a):o.a.createElement(o.a.Fragment,null)},_=(a(36),[p.a,v.a,b.a].map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))),h=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(l.e)();Object(n.useEffect)((function(){return a<100&&setTimeout((function(){c(a+1)}),30),clearTimeout(void 0)}),[a,void 0]);var r=function(e){if("Enter"===e.key)return i.push("/home")};return o.a.useEffect((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[]),o.a.createElement("div",{className:"init-system"},o.a.createElement("img",{src:u.a,alt:"Pixel-Desk-Logo"}),o.a.createElement("progress",{max:"100",value:a}),o.a.createElement(g,{predicate:100===a},o.a.createElement("p",{className:"blinking"},"Press ENTER to Log-in"),o.a.createElement("audio",{hidden:!0,src:_[0],controls:!0,autoPlay:!0})))},w=a(12),y=a.n(w),x=a(21),N=a.n(x),k=a(22),D=a.n(k),O=a(23),j=a.n(O),S=a(24),I=a.n(S),M=a(25),P=a.n(M),Y=a(26),L=a.n(Y),B=a(27),C=a.n(B),T=a(28),z=a.n(T),F=(a(15),a(43),function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(y()().format("MM/DD/YY h:mm:ss a")),r=Object(s.a)(i,2),m=r[0],u=r[1],d=Object(l.e)();return Object(n.useEffect)((function(){var e=setInterval((function(){u(y()().format("h:mm:ss a--MM / DD / YY"))}),1e3);return function(){clearInterval(e)}}),[m]),o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"navbar__dropup"},o.a.createElement("button",{onClick:function(){return c(!a)},className:"navbar__dropbtn"},o.a.createElement("img",{src:N.a,alt:"Shut-down"})),o.a.createElement("div",{hidden:a,className:a?"":"navbar__dropup-content"},o.a.createElement("div",{className:"navbar__dropup-content__action"},o.a.createElement("img",{src:z.a,alt:"system-infor"}),o.a.createElement("p",null,"System info")),o.a.createElement("div",{className:"navbar__dropup-content__action"},o.a.createElement("img",{src:C.a,alt:"musicPlayerIcon"}),o.a.createElement("p",null,"Music player")),o.a.createElement("div",{className:"navbar__dropup-content__action"},o.a.createElement("img",{src:L.a,alt:"gameIcon"}),o.a.createElement("p",null,"Video game console")),o.a.createElement("div",{className:"navbar__dropup-content__action"},o.a.createElement("img",{src:P.a,alt:"documents"}),o.a.createElement("p",null,"Documents")),o.a.createElement("div",{className:"navbar__dropup-content__action"},o.a.createElement("img",{src:I.a,alt:"Setting-Icon"}),o.a.createElement("p",null,"Settings")),o.a.createElement("div",{className:"navbar__dropup-content__action"},o.a.createElement("img",{src:j.a,alt:"note-Pad"}),o.a.createElement("p",null,"Notepad")),o.a.createElement("div",{onClick:function(){return d.push("/")},className:"navbar__dropup-content__action-shut-down"},o.a.createElement("img",{src:D.a,alt:"shut-Down"}),o.a.createElement("p",null,"Shut Down")))),o.a.createElement("button",{disabled:!0,className:"navbar__dropbtn-active"},m))}),H=(a(44),function(e){var t=e.title,a=e.children;return Object(n.useEffect)((function(){!function(e){var t=0,a=0,n=0,o=0;document.getElementById(e.id+"Header")?document.getElementById(e.id+"Header").onmousedown=c:e.onmousedown=c;function c(e){(e=e||window.event).preventDefault(),n=e.clientX,o=e.clientY,document.onmouseup=r,document.onmousemove=i}function i(c){(c=c||window.event).preventDefault(),t=n-c.clientX,a=o-c.clientY,n=c.clientX,o=c.clientY,e.style.top=e.offsetTop-a+"px",e.style.left=e.offsetLeft-t+"px"}function r(){document.onmouseup=null,document.onmousemove=null}}(document.getElementById("draggableDiv"))})),o.a.createElement("div",{id:"draggableDiv",className:"window"},o.a.createElement("div",{id:"draggableDivHeader",className:"title-bar"},o.a.createElement("div",{className:"title-bar-text"},t),o.a.createElement("div",{className:"title-bar-controls"},o.a.createElement("button",{"aria-label":"Minimize"}),o.a.createElement("button",{"aria-label":"Maximize"}),o.a.createElement("button",{"aria-label":"Close"}))),o.a.createElement("div",{className:"window-body"},o.a.createElement("p",null,a)))}),J=(a(45),function(){return o.a.createElement(H,null,o.a.createElement("div",{className:"system-info"},o.a.createElement("img",{src:u.a,alt:"Logo"}),o.a.createElement("p",null,"Pixel Desk Os"),o.a.createElement("p",null,"Copyright c 2020"),o.a.createElement("p",null,'Started as a way to improve Front-end skills and motivated by "Stay in home" of the Coronavirus Pandemic, Pixel Desk Os is taking the shape of a little Os in you browser to listen you favorite play list, taking some notes o why not ? play a old arcade video game. Just the time will tell us the future of Pixel Desk Os')))}),X=(a(46),function(){return o.a.createElement("div",{className:"home-desk"},o.a.createElement(J,null),o.a.createElement(F,null))});var W=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r.a,{basename:"/"},o.a.createElement(l.a,{exact:!0,path:"/",component:h}),o.a.createElement(l.a,{path:"/home",component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.8fba84b6.chunk.js.map