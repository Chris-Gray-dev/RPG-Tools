(this["webpackJsonprpg-tools"]=this["webpackJsonprpg-tools"]||[]).push([[0],{10:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e.n(r),c=e(3),l=e.n(c),u=(e(9),e(10),e(4));function s(){for(var t=[0,0,0,0],n=0;n<4;n++)t[n]=Math.floor(6*Math.random())+1;return t.sort((function(t,n){return n-t})),t[t.length-1]=0,t.reduce((function(t,n){return t+n}),0)}function i(){for(var t=[0,0,0,0,0,0],n=0;n<6;n++)t[n]=s();return t}function a(){for(var t,n=[0,0,0,0,0,0],e=!1;!e;)n=i(),(t=n).sort((function(t,n){return n-t})),e=!(t.reduce((function(t,n){return t+n}),0)<75)&&!(t[t.length-1]>9)&&!(t[1]<14);return n}var d=e(0);var f=function(t){var n=t.SetStats,e=t.RollStats;return Object(d.jsx)("button",{onClick:function(){n(e())},children:"Roll!"})};function h(t,n){!function(t){var n=document.createElement("textarea");n.style.position="fixed",n.style.top=0,n.style.left=0,n.style.width="2em",n.style.height="2em",n.style.padding=0,n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value=t,document.body.appendChild(n),n.focus(),n.select();try{var e=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copying text command was "+e)}catch(r){console.log("Oops, unable to copy")}document.body.removeChild(n)}(function(t,n){for(var e="@everyone here are my stats!\n",r=0;r<t.length;r++)e+=String.format("{0} : {1}",t[r],n[t[r]]),r!==t.length-1&&(e+="\n");return e}(t,n))}String.format||(String.format=function(t){var n=Array.prototype.slice.call(arguments,1);return t.replace(/{(\d+)}/g,(function(t,e){return"undefined"!=typeof n[e]?n[e]:t}))});var j=function(t){var n=t.Stats,e=t.Modifiers;return null===n[0]?null:Object(d.jsx)("button",{onClick:function(){h(n,e)},children:"Copy"})};var b=function(t){var n=[null,"-5","-4","-4","-3","-3","-2","-2","-1","-1","0","0","+1","+1","+2","+2","+3","+3","+4","+4","+5"],e=Object(r.useState)([null,null,null,null,null,null]),o=Object(u.a)(e,2),c=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Combly Stat Roller"}),Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsxs)("p",{children:[t,",[",n[t],"]"]})}))}),Object(d.jsx)(f,{RollStats:a,SetStats:l})," ",Object(d.jsx)(j,{Stats:c,Modifiers:n}),Object(d.jsx)("p",{children:"Parameters: ...."})]})};var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"\ud83d\udea7RPG Toolkit\ud83d\udea7"}),Object(d.jsx)(b,{})]})},y=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,14)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,l=n.getTTFB;e(t),r(t),o(t),c(t),l(t)}))};e(12);l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),y()},9:function(t,n,e){}},[[13,1,2]]]);
//# sourceMappingURL=main.b37e1a23.chunk.js.map