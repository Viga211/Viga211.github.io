import{S as x,i as S,s as g,k as _,q as h,a as k,l as d,m as v,r as E,h as m,c as y,b as f,E as $,u as b,F as q,$ as C}from"../chunks/index.3a5aa12c.js";import{p as F}from"../chunks/stores.df12d1ea.js";function H(n){var u;let a,t=n[0].status+"",r,o,l,i=((u=n[0].error)==null?void 0:u.message)+"",c;return{c(){a=_("h1"),r=h(t),o=k(),l=_("p"),c=h(i)},l(e){a=d(e,"H1",{});var s=v(a);r=E(s,t),s.forEach(m),o=y(e),l=d(e,"P",{});var p=v(l);c=E(p,i),p.forEach(m)},m(e,s){f(e,a,s),$(a,r),f(e,o,s),f(e,l,s),$(l,c)},p(e,[s]){var p;s&1&&t!==(t=e[0].status+"")&&b(r,t),s&1&&i!==(i=((p=e[0].error)==null?void 0:p.message)+"")&&b(c,i)},i:q,o:q,d(e){e&&m(a),e&&m(o),e&&m(l)}}}function P(n,a,t){let r;return C(n,F,o=>t(0,r=o)),[r]}class z extends x{constructor(a){super(),S(this,a,P,H,g,{})}}export{z as default};