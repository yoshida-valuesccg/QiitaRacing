(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{197:function(e,t,a){e.exports=a(315)},202:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(202),a(123),a(47)),u=(a(204),a(164)),s=(a(206),a(166)),l=(a(207),a(162)),p=a(163),f=(a(209),a(89)),d=a(22),m=a(12),h=a.n(m),b=a(165),v=a(26),g=a(48),x=a.n(g),y=a(63),k=a.n(y),j=(a(229),a(153)),O=(a(316),a(161)),E=(a(233),a(9)),w=a(16),C=a(150),_=a(151),S=a(167),B=a(152),A=a(60),N=a(168),L=a(40),R=a.n(L),D=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(S.a)(this,Object(B.a)(t).call(this,e))).moveToDate=function(e){var t=Object(A.a)(a),n=t.width,r=t.height,c=t.svg,o=t.yScale,i=t.user2Color;return new Promise((function(t){var a=w.j().duration(100).on("end",t),u=Object.keys(e).map((function(t){return{name:t,value:e[t]||0}})).sort((function(e,t){return w.a(e.value,t.value)})),s=w.e(u,(function(e){return e.value})),l=w.g().range([0,n]).domain([0,s<10?10:s]);o.domain(u.map((function(e){return e.name})));var p=c.select(".x.axis");p.empty()&&(p=c.append("g").attr("class","x axis").attr("transform","translate(0,".concat(r,")"))),p.transition(a).call(w.b(l)).selectAll("g");var f=c.select(".y.axis");f.empty()&&(f=c.append("g").attr("class","y axis"));var d=c.select(".bars-g");d.empty()&&(d=c.append("g").attr("class","bars-g"));var m=d.selectAll(".bar").data(u,(function(e){return e.name}));m.exit().remove(),m.enter().append("rect").attr("class","bar").attr("x",0).merge(m).style("fill",(function(e){return i[e.name]||"#333"})).transition(a).attr("height",(function(){return o.bandwidth()})).attr("y",(function(e){return o(e.name)})).attr("width",(function(e){return l(e.value)}));var h=d.selectAll(".label").data(u,(function(e){return e.name}));h.exit().remove(),h.enter().append("text").attr("class","label").attr("x",(function(e){return 0})).merge(h).transition(a).attr("y",(function(e){return o(e.name)+o.bandwidth()/2+4})).attr("x",(function(e){return l(e.value)+3})).tween("text",(function(e){var t=w.i(this),a=w.i(this).text(),n=e.value,r=w.d(a,n);return function(e){t.text(Math.round(r(e)))}})),f.transition(a).call(w.c(o)).selectAll("g")}))},a.chart=r.a.createRef(),a.user2Color={},a}return Object(N.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=0,t=40,a=30,n=120,r=this.chart.current.parentNode.clientWidth-n-t,c=this.chart.current.parentNode.clientHeight-e-a;this.width=r,this.height=c,this.svg=w.i(this.chart.current).attr("width",r+n+t).attr("height",c+e+a).append("g").attr("transform","translate(".concat(n,",").concat(e,")")),this.yScale=w.f().rangeRound([c,0],.1).padding(.4),console.log(this)}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:400},className:R.a.racingBarChart},r.a.createElement("svg",{ref:this.chart}))}}]),t}(r.a.Component),T=function(e){var t=e.data,a=e.users,c=e.loading,o=Object(n.useRef)(null),i=Object(n.useRef)(0),u=Object(n.useState)(0),s=Object(d.a)(u,2),l=s[0],p=s[1],f=Object(n.useState)(!1),m=Object(d.a)(f,2),b=m[0],g=m[1];Object(n.useEffect)((function(){if(a){var e={};a.forEach((function(t,a){e[t]=w.h[a]})),o.current.user2Color=e}}),[a]),Object(n.useEffect)((function(){o.current&&o.current.moveToDate({})}),[o]),Object(n.useEffect)((function(){if(!b&&t){var e=t[l].likeCounts;o.current.moveToDate(e)}}),[l]);var x=Object(n.useCallback)(Object(v.a)(h.a.mark((function e(){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:g(!0),a=++i.current,(n=l)===t.length-1&&(n=0);case 6:if(!(n<t.length)){e.next=17;break}if(a===i.current){e.next=10;break}return g(!1),e.abrupt("return");case 10:return r=t[n].likeCounts,p(n),e.next=14,o.current.moveToDate(r);case 14:n++,e.next=6;break;case 17:g(!1);case 18:case"end":return e.stop()}}),e)}))),[t,l]);return Object(n.useEffect)((function(){p(0),t&&c&&x()}),[t,c]),r.a.createElement(j.a,{spinning:c},r.a.createElement("div",{style:{background:"#fff",padding:16,marginTop:16}},r.a.createElement("h2",{style:{textAlign:"center"}},t&&t[l]&&t[l].date),r.a.createElement(D,{ref:o}),r.a.createElement("div",{className:R.a.iconWrapper},!b&&r.a.createElement(E.a,{className:R.a.play,type:"caret-right",onClick:x,disabled:!t}),b&&r.a.createElement(E.a,{className:R.a.play,type:"pause",onClick:Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:i.current++,g(!1);case 4:case"end":return e.stop()}}),e)}))),disabled:!t}),r.a.createElement(O.a,{min:0,max:t?t.length-1:0,value:l,onChange:function(e){i.current++,p(e)},tipFormatter:function(e){return t?t[e].date:null}}))))},q=(a(302),a(49)),I=a(88),M=a.n(I),W=q.a.Header,Y=q.a.Content,z=q.a.Footer,H=function(e){var t=e.children;return r.a.createElement(q.a,null,r.a.createElement(W,{className:M.a.header},r.a.createElement("div",{className:M.a.title},"Qiita Racer")),r.a.createElement(Y,{style:{padding:"0 50px"}},r.a.createElement("div",{style:{padding:24,minHeight:"calc(100vh - 64px  - 69px)"}},t)),r.a.createElement(z,{style:{textAlign:"center"}},"\xa9React App"))},J="6ab1aebe3d1999c206ae14ddbb366f6a65759bf2",F="190fe6a7296c449bf9af82e3d25132e765ad8f3e";function P(){return(P=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://qiita.com/api/v2/items",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){return G.apply(this,arguments)}function G(){return(G=Object(v.a)(h.a.mark((function e(t,a){var n,r,c,o,i,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=100,r=1,c=[];case 3:return e.next=5,x.a.get("https://qiita.com/api/v2/users/".concat(t,"/items?page=").concat(r,"&per_page=").concat(n),{headers:{Authorization:"Bearer ".concat(a)}});case 5:if(i=e.sent,u=0,i.data.forEach((function(e){var t=e.likes_count;u+=t})),!(u>1e3)){e.next=10;break}throw new Error("Over1000LikesCount");case 10:o=Number(i.headers["total-count"]),c=c.concat(i.data);case 12:if(r++*n<o){e.next=3;break}case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e,t){return U.apply(this,arguments)}function U(){return(U=Object(v.a)(h.a.mark((function e(t,a){var n,r,c,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=100,r=1,c=[];case 3:return e.next=5,x.a.get("https://qiita.com/api/v2/items/".concat(t,"/likes?page=").concat(r,"&per_page=").concat(n),{headers:{Authorization:"Bearer ".concat(a)}});case 5:i=e.sent,o=Number(i.headers["total-count"]),c=c.concat(i.data);case 8:if(r++*n<o){e.next=3;break}case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(){var e=Object(v.a)(h.a.mark((function e(t,a){var n,r,c,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},r=h.a.mark((function e(r){var c,o,i,u,s,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t[r],e.next=3,Z(c,a);case 3:o=e.sent,i=[],u=0;case 6:if(!(u<o.length)){e.next=15;break}return s=o[u],e.next=10,Q(s.id,a);case 10:l=e.sent,i=i.concat(l);case 12:u++,e.next=6;break;case 15:i.forEach((function(e){var t=e.created_at,a=k()(t).format("YYYY-MM-DD");n[a]||(n[a]={}),n[a][c]||(n[a][c]=0),n[a][c]++}));case 16:case"end":return e.stop()}}),e)})),c=0;case 3:if(!(c<t.length)){e.next=8;break}return e.delegateYield(r(c),"t0",5);case 5:c++,e.next=3;break;case 8:return o={},t.forEach((function(e){o[e]=0})),i=[],Object.keys(n).forEach((function(e){i.push({date:e,likeCounts:Object(b.a)({},o,{},n[e])})})),i.sort((function(e,t){return k()(e.date)-k()(t.date)})),i=i.map((function(e,a){return i[a-1]?(t.forEach((function(t){e.likeCounts[t]=e.likeCounts[t]||0,e.likeCounts[t]+=i[a-1].likeCounts[t]})),e):e})),e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function K(){return(K=Object(v.a)(h.a.mark((function e(t){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://qiita.com/api/v2/access_tokens",{method:"post",headers:{"Content-Type":"application/json"},data:{client_id:J,client_secret:F,code:t}});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.next=7,a.json();case 7:return n=e.sent,r=n.token,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){window.location.href="https://qiita.com/api/v2/oauth/authorize?client_id=".concat(J,"&scope=read_qiita")}var $=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),m=Object(d.a)(o,2),h=m[0],b=m[1],v=Object(n.useState)(null),g=Object(d.a)(v,2),x=g[0],y=g[1],k=Object(n.useState)(null),j=Object(d.a)(k,2),O=j[0],E=j[1],w=Object(n.useState)(null),C=Object(d.a)(w,2),_=C[0],S=C[1],B=Object(n.useState)(!1),A=Object(d.a)(B,2),N=A[0],L=A[1],R=Object(n.useState)(!1),D=Object(d.a)(R,2),q=D[0],I=D[1];return Object(n.useEffect)((function(){try{var e=JSON.parse(localStorage.getItem("users"));b(e||[])}catch(t){}}),[]),Object(n.useEffect)((function(){var e=new URL(window.location.href),t=e.searchParams.get("token")||localStorage.getItem("token"),a=e.searchParams.get("code");t?function(e){return P.apply(this,arguments)}(t).then((function(){S(t)})).catch((function(){X()})):a?function(e){return K.apply(this,arguments)}(a).then((function(e){localStorage.setItem("token",e),S(e)})).catch((function(){X()})):X()}),[]),_?r.a.createElement(H,null,r.a.createElement("div",{style:{background:"#fff",padding:16}},N&&r.a.createElement(f.a,{type:"error",message:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002",style:{marginBottom:8}}),q&&r.a.createElement(f.a,{type:"error",message:"LGMT\u304c1000\u3092\u8d85\u3048\u308b\u30e6\u30fc\u30b6\u30fc\u306f\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3002",style:{marginBottom:8}}),r.a.createElement(u.a,{gutter:8},Array(8).fill(null).map((function(e,t){var a=h[t];return r.a.createElement(s.a,{key:t,span:6,style:{marginBottom:8}},r.a.createElement(l.a,{placeholder:"\u30e6\u30fc\u30b6\u30fcID\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",value:a,onChange:function(e){var a=Object(p.a)(h);a[t]=e.target.value,b(a)}}))}))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(i.a,{type:"primary",block:!0,onClick:function(){var e=h.filter((function(e){return e}));0!==e.length&&(y(null),L(!1),I(!1),E(null),c(!0),V(e,_).then((function(t){y(t),E(e),c(!1)})).catch((function(e){console.log(e),"Over1000LikesCount"===e.message&&I(!0),c(!1),L(!0)})))},disabled:!_,loading:a},"\u30c7\u30fc\u30bf\u53d6\u5f97"))),r.a.createElement(T,{data:x,loading:a,users:O})):r.a.createElement(H,null,r.a.createElement("div",null,"\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"))};var ee=function(){return r.a.createElement($,null)};o.a.render(r.a.createElement(ee,null),document.getElementById("root"))},40:function(e,t,a){e.exports={iconWrapper:"src-components-index-module__iconWrapper--J5FWB",play:"src-components-index-module__play--2x7ZR",stop:"src-components-index-module__stop--3RwOC",racingBarChart:"src-components-index-module__racingBarChart--1Zk1V"}},88:function(e,t,a){e.exports={header:"src-layouts-BasicLayout-index-module__header--2S57j",title:"src-layouts-BasicLayout-index-module__title--321a5",logo:"src-layouts-BasicLayout-index-module__logo--1Hx4w",spacer:"src-layouts-BasicLayout-index-module__spacer--1sAL6"}}},[[197,1,2]]]);
//# sourceMappingURL=main.fe8f3b72.chunk.js.map