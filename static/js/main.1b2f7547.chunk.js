(this["webpackJsonprpg-tools"]=this["webpackJsonprpg-tools"]||[]).push([[0],{10:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(3),l=n.n(c),u=(n(9),n(10),n(4));function s(){for(var t=[0,0,0,0],e=0;e<4;e++)t[e]=Math.floor(6*Math.random())+1;return t.sort((function(t,e){return e-t})),t[t.length-1]=0,t.reduce((function(t,e){return t+e}),0)}function a(){for(var t=[0,0,0,0,0,0],e=0;e<6;e++)t[e]=s();return t}function i(){for(var t,e=[0,0,0,0,0,0],n=!1;!n;)e=a(),(t=e).sort((function(t,e){return e-t})),n=!(t.reduce((function(t,e){return t+e}),0)<75)&&!(t[t.length-1]>9)&&!(t[1]<14);return e}var d=n(0);var f=function(t){var e=t.SetStats,n=t.RollStats;return Object(d.jsx)("button",{onClick:function(){e(n())},children:"Roll!"})};function j(t,e){!function(t){var e=document.createElement("textarea");e.style.position="fixed",e.style.top=0,e.style.left=0,e.style.width="2em",e.style.height="2em",e.style.padding=0,e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent",e.value=t,document.body.appendChild(e),e.focus(),e.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copying text command was "+n)}catch(r){console.log("Oops, unable to copy")}document.body.removeChild(e)}(function(t,e){for(var n="@everyone here are my stats!\n",r=0;r<t.length;r++)n+=String.format("{0} : {1}",t[r],e[t[r]]),r!==t.length-1&&(n+="\n");return n}(t,e))}String.format||(String.format=function(t){var e=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,(function(t,n){return"undefined"!=typeof e[n]?e[n]:t}))});var h=function(t){var e=t.Stats,n=t.Modifiers;return null===e[0]?null:Object(d.jsx)("button",{onClick:function(){j(e,n)},children:"Copy"})};var b=function(t){var e=[null,"-5","-4","-4","-3","-3","-2","-2","-1","-1","0","0","+1","+1","+2","+2","+3","+3","+4","+4","+5"],n=Object(r.useState)([null,null,null,null,null,null]),o=Object(u.a)(n,2),c=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Combly Stat Roller"}),Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsxs)("p",{children:[t,",[",e[t],"]"]})}))}),Object(d.jsx)(f,{RollStats:i,SetStats:l})," ",Object(d.jsx)(h,{Stats:c,Modifiers:e}),Object(d.jsx)("p",{children:"Parameters: ...."})]})};var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"\ud83d\udea7RPG Toolkit\ud83d\udea7"}),Object(d.jsx)(b,{})]})};n(12);l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.1b2f7547.chunk.js.map