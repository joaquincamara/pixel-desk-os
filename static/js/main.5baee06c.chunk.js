(this["webpackJsonppixel-desk-os"]=this["webpackJsonppixel-desk-os"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/pixel-desk-logo.b8b0651d.svg"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/zelda.35e5073a.mp3"},function(e,t,a){e.exports=a.p+"static/media/castlevania.b084d6a5.mp3"},function(e,t,a){e.exports=a.p+"static/media/pokemon.ad18d75f.mp3"},,function(e,t,a){e.exports=a.p+"static/media/pixel-desk-icon.1294995d.svg"},function(e,t,a){e.exports=a.p+"static/media/shut_down_normal.d4604b5a.ico"},function(e,t,a){e.exports=a.p+"static/media/notepad.37e3ef92.ico"},function(e,t,a){e.exports=a.p+"static/media/settings_gear.744bf98b.ico"},function(e,t,a){e.exports=a.p+"static/media/directory_closed.dba9793e.ico"},function(e,t,a){e.exports=a.p+"static/media/game_mine_2.7ee9e4ff.ico"},function(e,t,a){e.exports=a.p+"static/media/multimedia.263f7fc7.ico"},function(e,t,a){e.exports=a.p+"static/media/system-infor.72c57337.ico"},function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),i=a.n(o),r=(a(34),a(6)),l=a(1),s=(a(35),a(4)),m=a(7),u=a.n(m),d=a(17),p=a.n(d),f=a(18),v=a.n(f),E=a(19),b=a.n(E),g=function(e){var t=e.predicate,a=e.children;return t?c.a.createElement(c.a.Fragment,null,a):c.a.createElement(c.a.Fragment,null)},_=(a(36),[p.a,v.a,b.a].map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))),h=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(l.e)();Object(n.useEffect)((function(){return a<100&&setTimeout((function(){o(a+1)}),30),clearTimeout(void 0)}),[a,void 0]);var r=function(e){if("Enter"===e.key)return i.push("/home")};return c.a.useEffect((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[]),c.a.createElement("div",{className:"init-system"},c.a.createElement("img",{src:u.a,alt:"Pixel-Desk-Logo"}),c.a.createElement("progress",{max:"100",value:a}),c.a.createElement(g,{predicate:100===a},c.a.createElement("p",{className:"blinking"},"Press ENTER to Log-in"),c.a.createElement("audio",{hidden:!0,src:_[0],controls:!0,autoPlay:!0})))},w=a(12),y=a.n(w),x=a(21),k=a.n(x),N=a(22),O=a.n(N),j=a(23),D=a.n(j),S=a(24),I=a.n(S),M=a(25),P=a.n(M),C=a(26),Y=a.n(C),L=a(27),B=a.n(L),z=a(28),T=a.n(z),F=(a(15),a(43),function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(y()().format("MM/DD/YY h:mm:ss a")),r=Object(s.a)(i,2),m=r[0],u=r[1],d=Object(l.e)();return Object(n.useEffect)((function(){var e=setInterval((function(){u(y()().format("h:mm:ss a--MM / DD / YY"))}),1e3);return function(){clearInterval(e)}}),[m]),c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar__dropup"},c.a.createElement("button",{onClick:function(){return o(!a)},className:"navbar__dropbtn"},c.a.createElement("img",{src:k.a,alt:"Shut-down"})),c.a.createElement("div",{hidden:a,className:a?"":"navbar__dropup-content"},c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:T.a,alt:"system-infor"}),c.a.createElement("p",null,"System info")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:B.a,alt:"musicPlayerIcon"}),c.a.createElement("p",null,"Music player")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:Y.a,alt:"gameIcon"}),c.a.createElement("p",null,"Video game console")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:P.a,alt:"documents"}),c.a.createElement("p",null,"Documents")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:I.a,alt:"Setting-Icon"}),c.a.createElement("p",null,"Settings")),c.a.createElement("div",{className:"navbar__dropup-content__action"},c.a.createElement("img",{src:D.a,alt:"note-Pad"}),c.a.createElement("p",null,"Notepad")),c.a.createElement("div",{onClick:function(){return d.push("/")},className:"navbar__dropup-content__action-shut-down"},c.a.createElement("img",{src:O.a,alt:"shut-Down"}),c.a.createElement("p",null,"Shut Down")))),c.a.createElement("button",{disabled:!0,className:"navbar__dropbtn-active"},m))}),H=(a(44),function(e){var t=e.title,a=e.children,o=Object(n.useState)(!1),i=Object(s.a)(o,2),r=i[0],l=i[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],p=u[1],f=Object(n.useState)(!1),v=Object(s.a)(f,2),E=v[0],b=v[1];return Object(n.useEffect)((function(){!function(e){var t=0,a=0,n=0,c=0;document.getElementById(e.id+"Header")?document.getElementById(e.id+"Header").onmousedown=o:e.onmousedown=o;function o(e){(e=e||window.event).preventDefault(),n=e.clientX,c=e.clientY,document.onmouseup=r,document.onmousemove=i}function i(o){(o=o||window.event).preventDefault(),t=n-o.clientX,a=c-o.clientY,n=o.clientX,c=o.clientY,e.style.top=e.offsetTop-a+"px",e.style.left=e.offsetLeft-t+"px"}function r(){document.onmouseup=null,document.onmousemove=null}}(document.getElementById("draggableDiv"))})),c.a.createElement("div",{hidden:E||d,id:"draggableDiv",className:r?"window__maximize ":"window"},c.a.createElement("div",{id:"draggableDivHeader",className:"title-bar"},c.a.createElement("div",{className:"title-bar-text"},t),c.a.createElement("div",{className:"title-bar-controls"},c.a.createElement("button",{onClick:function(){p(!d)},"aria-label":"Minimize"}),c.a.createElement("button",{onClick:function(){return l(!r)},"aria-label":"Maximize"}),c.a.createElement("button",{onClick:function(){return b(!E)},"aria-label":"Close"}))),c.a.createElement("div",{className:"window-body"},a))}),J=(a(45),function(){return c.a.createElement(H,{title:"System Info"},c.a.createElement("div",{className:"system-info"},c.a.createElement("img",{src:u.a,alt:"Logo"}),c.a.createElement("p",null,"Pixel Desk Os"),c.a.createElement("p",null,"Copyright c 2020"),c.a.createElement("p",null,'Started as a way to improve Front-end skills and motivated by "Stay in home" of the Coronavirus Pandemic, Pixel Desk Os is taking the shape of a little Os in you browser to listen you favorite play list, taking some notes o why not ? play a old arcade video game. Just the time will tell us the future of Pixel Desk Os')))}),X=(a(46),function(){return c.a.createElement("div",{className:"home-desk"},c.a.createElement(J,null),c.a.createElement(F,null))});var W=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(r.a,{basename:"/"},c.a.createElement(l.a,{exact:!0,path:"/",component:h}),c.a.createElement(l.a,{path:"/home",component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.5baee06c.chunk.js.map