(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),l=n(7),u=n(6),h=(n(13),n(0)),d=function(e){var t=e.monister;return Object(h.jsxs)("div",{className:"card-cotainer",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set2")}),Object(h.jsx)("h2",{children:t.name},t.id),Object(h.jsx)("span",{children:t.email})]})},j=(n(15),function(e){return Object(h.jsx)("div",{className:"cardlist",children:e.monisters.map((function(e){return Object(h.jsx)(d,{monister:e},e.id)}))})}),f=(n(16),function(e){var t=e.onChangeHandeler,n=e.placeholder;return Object(h.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),m=(n.p,n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onChangeHandeler=function(t){e.setState({searchFeald:t.target.value}),console.log("e.target.value",t.target.value)},e.state={monisters:[],searchFeald:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({monisters:t})})).catch()}},{key:"render",value:function(){var e=this.state,t=e.monisters,n=e.searchFeald,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Monisters Rolodex"}),Object(h.jsx)(f,{onChangeHandeler:this.onChangeHandeler,placeholder:"Search Monisters"}),Object(h.jsx)(j,{monisters:c})]})}}]),n}(c.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.f9790ba7.chunk.js.map