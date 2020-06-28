"use strict";var __awaiter=function(e,s,i,c){return new(i||(i=Promise))(function(r,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function a(e){try{o(c.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(n,a)}o((c=c.apply(e,s||[])).next())})},__generator=function(r,n){var a,o,s,e,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,o=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(s=0<(s=i.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){i.label=t[1];break}if(6===t[0]&&i.label<s[1]){i.label=s[1],s=t;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(t);break}s[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(r,i)}catch(e){t=[6,e],o=0}finally{a=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},_this=void 0;document.addEventListener("DOMContentLoaded",function(){var c="ScoutID-JWT-Token",t=document.getElementById("main"),u=document.getElementById("whoami"),l="Inte inloggad",i=location.origin+"/api/",h=null,f=!1,d=!1,g=function(r,n){return __awaiter(_this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,fetch(r,n)];case 1:if(!(t=e.sent()).ok)throw t;return[4,t.json()];case 2:return[2,e.sent()]}})})},m=function(a,o,s){return __awaiter(_this,void 0,void 0,function(){var t,r,n;return __generator(this,function(e){switch(e.label){case 0:return t=i+a,o||(o={}),o.headers||(o.headers={}),o.headers.Authorization="Bearer "+(s||localStorage.getItem(c)),[4,fetch(t,o)];case 1:return(r=e.sent()).ok?[4,r.json()]:[3,3];case 2:return[2,e.sent()];case 3:if(498!==r.status)throw r;if(s)throw r;return[4,_(!1)];case 4:if(!e.sent())throw r;return o.headers.Authorization="Bearer "+localStorage.getItem(c),[4,fetch(t,o)];case 5:if(!(n=e.sent()).ok)throw n;return[4,n.json()];case 6:return[2,e.sent()]}})})},w=function(s){return __awaiter(_this,void 0,void 0,function(){var t,r,n,a,o;return __generator(this,function(e){switch(e.label){case 0:f=!1,u.innerText=l,t=m("jwt/verify_token",{},s),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,t];case 2:return e.sent(),[3,4];case 3:throw r=e.sent(),console.error(r),r;case 4:return[4,t];case 5:if(!1===(n=e.sent()).user)throw new Error("No user");return a=n.data.karer?Object.values(n.data.karer):[],o=null,2<a.length?o=a.slice(0,a.length-1).join(", ")+" och "+a[a.length-1]:0<a.length&&(o=a.join(" och ")),u.innerText="Inloggad som "+n.data.name+(o?" från "+o:""),f=!0,d=n.admin,[2,!0]}})})},_=function(i){return __awaiter(_this,void 0,void 0,function(){var t,r,n,a,o,s;return __generator(this,function(e){switch(e.label){case 0:if(!(t=localStorage.getItem(c)))return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,w(t)];case 2:return e.sent(),[3,4];case 3:return e.sent(),localStorage.removeItem(c),[3,4];case 4:if(f)return[3,19];if(!h)return console.error("Loggin failed, as no config was received"),[2,!1];if(!h.jwturl)return console.error("Loggin failed, as there is no jwturl in the received config"),[2,!1];r=g(h.jwturl,{credentials:"include"}),e.label=5;case 5:return e.trys.push([5,7,,12]),[4,r];case 6:return e.sent(),[3,12];case 7:if(!(n=e.sent()).json)return console.error(n),[2,!(u.innerText=l)];r=n.json(),e.label=8;case 8:return e.trys.push([8,10,,11]),[4,r];case 9:return e.sent(),[3,11];case 10:return a=e.sent(),console.error(a),[2,!(u.innerText=l)];case 11:return[3,12];case 12:return[4,r];case 13:if(!(o=e.sent()).ok)return[3,18];e.label=14;case 14:return e.trys.push([14,16,,17]),[4,w(o.token)];case 15:return e.sent(),[3,17];case 16:return s=e.sent(),console.error(s),[2,!(u.innerText=l)];case 17:localStorage.setItem(c,o.token),e.label=18;case 18:!f&&i&&(location.href=o.url),e.label=19;case 19:return f&&("#!/login/"===location.hash.substr(0,9)?location.hash="#!/"+location.hash.substr(9):"#!/login"===location.hash?location.hash="#!/":i&&v()),[2,f]}})})},p=function(e){t.setAttribute("data-section",e)},r=function(){return p("mainmenu")},v=function(){return __awaiter(_this,void 0,void 0,function(){return __generator(this,function(e){if(document.body.classList.toggle("guest",!f),document.body.classList.toggle("admin",d),p(""),!f){switch(location.hash){case"#!/login":return[2,_(!0)];case"#!/":case"":return[2,r()]}return"#!/login/"===location.hash.substr(0,9)?[2,_(!0)]:[2,r()]}switch(location.hash){case"#!/":case"":return[2,r()];case"#!/import":p("import");break;case"#!/logout":return localStorage.removeItem(c),f=!1,u.innerText=l,location.hash="#!/",[2]}return[2]})})};window.addEventListener("hashchange",v);var b=function(o){return __awaiter(_this,void 0,void 0,function(){var r,n,a;return __generator(this,function(e){switch(e.label){case 0:if(!o.ok)throw o;if((r=document.getElementById("ajax-content")).innerHTML=o.html,p("ajax-loaded"),!o.refrechUrl)return[3,5];n=o,e.label=1;case 1:return n.refrechUrl?n.delay?[4,(t=1e3*n.delay,new Promise(function(e){return setTimeout(e,t)}))]:[3,3]:[3,5];case 2:e.sent(),e.label=3;case 3:return[4,m(n.refrechUrl)];case 4:if(!(n=e.sent()).ok)throw n;return n.html?r.innerHTML=n.html:n.append&&((a=document.createElement("div")).innerHTML=n.append,r.append(a)),[3,1];case 5:return[2]}var t})})},n=function(){return __awaiter(_this,void 0,void 0,function(){var n,a,o,s,i,c,u,l,h,f,d,g;return __generator(this,function(e){switch(e.label){case 0:if(n=document.getElementById("import_kar_id"),a=document.getElementById("import_kar_api_key"),o=+n.value,"https://"===(s=a.value.trim()).substr(0,8)){for(i=null,c=[new RegExp("^https://([1-9][0-9]*):([0-9a-f]+)@www.scoutnet.se/api/group/memberlist$"),new RegExp("^https://www.scoutnet.se/api/group/memberlist?id=([1-9][0-9]*)&(?:amp;)?key=([0-9a-f]+)(?:&|$)")],u=0,l=c;u<l.length&&!(i=l[u].exec(s));u++);if(i){if(0<o&&o!==+i[1])return alert("Du angav kar-id: "+o+", men urln innehåll kår-id: "+i[1]),[2];o=+i[1],s=i[2]}}if(o<1)return alert("Kår-id saknas"),[2];if(s.length<1)return alert("Api-nyckel saknas"),[2];p("loading"),t="import",r={karId:o,apiKey:s},h=__awaiter(_this,void 0,void 0,function(){return __generator(this,function(e){return[2,m(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})]})}),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,h];case 2:return e.sent(),[3,4];case 3:return f=e.sent(),console.error(f),alert(f.error||f),p("import"),[3,4];case 4:return[4,h];case 5:d=e.sent(),e.label=6;case 6:return e.trys.push([6,8,,9]),[4,b(d)];case 7:return e.sent(),[3,9];case 8:return!1===(g=e.sent()).ok&&g.error?(console.error(g.error),alert(g.error),p("import")):console.error(g),[3,9];case 9:return location.hash="!#/kar/"+o,[2]}var t,r})})};__awaiter(_this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return document.getElementById("login-button").addEventListener("click",function(e){3<location.hash.length&&"#!/"===location.hash.substr(0,3)&&(e.preventDefault(),location.hash="#!/login/"+location.hash.substr(3))}),document.getElementById("import_kar_button").addEventListener("click",n),"skojjt.webservices.scouterna.net"!==location.hostname&&("skojjt-staging.webservices.scouterna.net"===location.hostname?document.title+=" Stage":document.title+=" Dev"),[4,g("/api/config")];case 1:return h=e.sent(),[4,_(!1)];case 2:return e.sent(),[4,v()];case 3:return e.sent(),[2]}})})});
//# sourceMappingURL=es5.js.map
