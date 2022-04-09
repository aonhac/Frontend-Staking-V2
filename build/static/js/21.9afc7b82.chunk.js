(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[21],{1474:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var c,o,i=n(11),r=n(10),j=n(0),a=n(7),l=n(2),d=n(5),b=n(13),s=n(104),O=n(29),x=n(55),u=n(363),p=n(20),h=n(428),g=n(127),f=n(28),v=n(57),y=n(96),m=n(867),T=n(154),I=n(212),X=n(186),k=n(242),E=n(1);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var N=Object(d.e)(l.r)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function S(){var e,t=Object(f.a)().account,n=Object(b.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),d=r[0],S=r[1],A=Object(j.useState)(a.d),C=Object(i.a)(A,2),w=C[0],K=C[1],q=Object(j.useState)(null),B=Object(i.a)(q,2),L=B[0],G=B[1],D=Object(g.b)(null!==w&&void 0!==w?w:void 0,null!==L&&void 0!==L?L:void 0),J=Object(i.a)(D,2),M=J[0],P=J[1],F=Object(v.f)();Object(j.useEffect)((function(){P&&F(P)}),[P,F]);var R=M===g.a.NOT_EXISTS||Boolean(M===g.a.EXISTS&&P&&a.e.equal(P.reserve0.raw,a.e.BigInt(0))&&a.e.equal(P.reserve1.raw,a.e.BigInt(0))),V=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===P||void 0===P?void 0:P.liquidityToken),W=Boolean(V&&a.e.greaterThan(V.raw,a.e.BigInt(0))),Y=Object(j.useCallback)((function(e){d===o.TOKEN0?K(e):G(e)}),[d]),_=Object(E.jsx)(s.b,{padding:"45px 10px",children:Object(E.jsx)(l.Xb,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),z=Object(l.sc)(Object(E.jsx)(h.a,{onCurrencySelect:Y,showCommonBases:!0,selectedCurrency:null!==(e=d===o.TOKEN0?L:w)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(z,1)[0];return Object(E.jsx)(k.a,{children:Object(E.jsxs)(X.a,{children:[Object(E.jsx)(X.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(E.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(E.jsx)(N,{endIcon:Object(E.jsx)(l.G,{}),onClick:function(){H(),S(o.TOKEN0)},children:w?Object(E.jsxs)(p.d,{children:[Object(E.jsx)(x.a,{currency:w}),Object(E.jsx)(l.Xb,{ml:"8px",children:w.symbol})]}):Object(E.jsx)(l.Xb,{ml:"8px",children:n("Select a Token")})}),Object(E.jsx)(O.b,{children:Object(E.jsx)(l.a,{})}),Object(E.jsx)(N,{endIcon:Object(E.jsx)(l.G,{}),onClick:function(){H(),S(o.TOKEN1)},children:L?Object(E.jsxs)(p.d,{children:[Object(E.jsx)(x.a,{currency:L}),Object(E.jsx)(l.Xb,{ml:"8px",children:L.symbol})]}):Object(E.jsx)(l.Xb,{as:p.d,children:n("Select a Token")})}),W&&Object(E.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(E.jsx)(l.Xb,{textAlign:"center",children:n("Pool Found!")}),Object(E.jsx)(m.a,{to:"/pool",children:Object(E.jsx)(l.Xb,{textAlign:"center",children:n("Manage this pool.")})})]}),w&&L?M===g.a.EXISTS?W&&P?Object(E.jsx)(u.a,{pair:P}):Object(E.jsx)(s.b,{padding:"45px 10px",children:Object(E.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(E.jsx)(l.Xb,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(E.jsx)(m.a,{to:"/add/".concat(Object(T.a)(w),"/").concat(Object(T.a)(L)),children:Object(E.jsx)(l.Xb,{textAlign:"center",children:n("Add Liquidity")})})]})}):R?Object(E.jsx)(s.b,{padding:"45px 10px",children:Object(E.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(E.jsx)(l.Xb,{textAlign:"center",children:n("No pool found.")}),Object(E.jsx)(m.a,{to:"/add/".concat(Object(T.a)(w),"/").concat(Object(T.a)(L)),children:n("Create pool.")})]})}):M===g.a.INVALID?Object(E.jsx)(s.b,{padding:"45px 10px",children:Object(E.jsx)(O.a,{gap:"sm",justify:"center",children:Object(E.jsx)(l.Xb,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):M===g.a.LOADING?Object(E.jsx)(s.b,{padding:"45px 10px",children:Object(E.jsx)(O.a,{gap:"sm",justify:"center",children:Object(E.jsxs)(l.Xb,{textAlign:"center",children:[n("Loading"),Object(E.jsx)(I.a,{})]})})}):null:_]})]})})}},867:function(e,t,n){"use strict";var c,o=n(10),i=n(82),r=n(5),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=21.9afc7b82.chunk.js.map