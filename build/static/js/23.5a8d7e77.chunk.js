(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[23],{1486:function(e,t,n){"use strict";n.r(t);var r,c,i,a,s,o,u,d,b,l,j,f,O,p,h,x=n(10),m=n(0),v=n(5),g=n(2),k=n(13),w=n(235),y=n(254),C=n.n(y),S=n(36),N=n(148),I=n(67),F=n(359),T=n(765),P=n(3),B=n.n(P),A=n(12),X=n(11),D=n(233),E=v.e.div(r||(r=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),V=n(63),J=n(238),L=n(92),R=n(41),W=n(1),z=Object(v.e)(g.Xb)(c||(c=Object(x.a)(["\n  font-weight: 600;\n"]))),H=v.e.div(i||(i=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),M=v.e.div(a||(a=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),Q=v.e.label(s||(s=Object(x.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),U=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,i=Object(m.useState)(!1),a=Object(X.a)(i,2),s=a[0],o=a[1],u=Object(m.useState)(""),d=Object(X.a)(u,2),b=d[0],l=d[1],j=Object(m.useState)(null),f=Object(X.a)(j,2),O=f[0],p=f[1],h=Object(k.b)().t,x=Object(S.c)().account,v=Object(R.i)(Object(J.a)(t.type)),w=Object(L.a)().toastSuccess,y=function(){var e=Object(A.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,V.a.utils.isAddress(b)){e.next=6;break}p(h("Please enter a valid wallet address")),e.next=14;break;case 6:return e.next=8,v.transferFrom(x,b,n[0]);case 8:return t=e.sent,o(!0),e.next=12,t.wait();case 12:e.sent.status?(c(),r(),w(h("NFT successfully transferred!"))):(p(h("Unable to transfer NFT")),o(!1));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(W.jsxs)(g.rb,{title:h("Transfer NFT"),onDismiss:c,children:[Object(W.jsxs)(H,{children:[O&&Object(W.jsx)(g.Xb,{color:"failure",mb:"8px",children:O}),Object(W.jsxs)(E,{children:[Object(W.jsxs)(g.Xb,{children:[h("Transferring"),":"]}),Object(W.jsx)(z,{children:h("1x %nftName% NFT",{nftName:t.name})})]}),Object(W.jsxs)(Q,{htmlFor:"transferAddress",children:[h("Receiving address"),":"]}),Object(W.jsx)(g.bb,{id:"transferAddress",name:"address",type:"text",placeholder:h("Paste address"),value:b,onChange:function(e){var t=e.target.value;l(t)},isWarning:O,disabled:s})]}),Object(W.jsxs)(M,{children:[Object(W.jsx)(g.r,{width:"100%",variant:"secondary",onClick:c,children:h("Cancel")}),Object(W.jsx)(g.r,{width:"100%",onClick:y,disabled:!x||s||!b,children:h("Confirm")})]})]})},_=v.e.div(o||(o=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),q=v.e.div(u||(u=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),G=function(e){var t=e.nft,n=e.onSuccess,r=e.onClaim,c=e.onDismiss,i=Object(m.useState)(!1),a=Object(X.a)(i,2),s=a[0],o=a[1],u=Object(k.b)().t,d=Object(S.c)().account,b=Object(L.a)(),l=b.toastError,j=b.toastSuccess,f=function(){var e=Object(A.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,o(!0),e.next=6,t.wait();case 6:e.sent.status?(j(u("Successfully claimed!")),c(),n()):(l(u("Error"),u("Please try again. Confirm the transaction and make sure you are paying enough gas!")),o(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(W.jsxs)(g.rb,{title:u("Claim Collectible"),onDismiss:c,children:[Object(W.jsx)(_,{children:Object(W.jsxs)(g.T,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(W.jsxs)(g.Xb,{children:[u("You will receive"),":"]}),Object(W.jsx)(g.Xb,{bold:!0,children:u("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(W.jsxs)(q,{children:[Object(W.jsx)(g.r,{width:"100%",variant:"secondary",onClick:c,children:u("Cancel")}),Object(W.jsx)(g.r,{width:"100%",onClick:f,disabled:!d,isLoading:s,endIcon:s?Object(W.jsx)(g.h,{color:"currentColor",spin:!0}):null,children:u("Confirm")})]})]})},Y=v.e.div(d||(d=Object(x.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),K=v.e.img(b||(b=Object(x.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 24px 24px 0 0;\n"]))),Z=v.e.video(l||(l=Object(x.a)(["\n  height: 100%;\n  width: 100%;\n"]))),$=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,i=t.name,a=t.video,s="/images/nfts/".concat(c.lg);if(a){var o=Object(W.jsxs)(Z,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:s,children:[Object(W.jsx)("source",{src:a.webm,type:"video/webm"}),Object(W.jsx)("source",{src:a.mp4,type:"video/mp4"})]});return r?Object(W.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var u=Object(W.jsx)(K,{src:s,alt:i});return Object(W.jsx)(Y,{children:r?Object(W.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:u}):u})},ee=Object(v.e)(E)(j||(j=Object(x.a)(["\n  min-height: 28px;\n"]))),te=Object(v.e)(g.r).attrs({variant:"text"})(f||(f=Object(x.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),ne=v.e.div(O||(O=Object(x.a)(["\n  padding: 24px;\n"]))),re=function(e){var t,n=e.nft,r=e.canClaim,c=void 0!==r&&r,i=e.tokenIds,a=void 0===i?[]:i,s=e.onClaim,o=e.refresh,u=Object(m.useState)(!1),d=Object(X.a)(u,2),b=d[0],l=d[1],j=Object(k.b)().t,f=Object(D.b)().profile,O=n.identifier,p=n.name,h=n.description,x=a.length>0,v=b?g.J:g.G,w=function(){var e=Object(A.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!b);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){o()},C=Object(g.sc)(Object(W.jsx)(U,{nft:n,tokenIds:a,onSuccess:y})),S=Object(X.a)(C,1)[0],N=Object(g.sc)(Object(W.jsx)(G,{nft:n,onSuccess:y,onClaim:s})),I=Object(X.a)(N,1)[0];return Object(W.jsxs)(g.v,{isActive:x,children:[Object(W.jsx)($,{nft:n,isOwned:x}),Object(W.jsxs)(g.w,{children:[Object(W.jsxs)(ee,{children:[Object(W.jsx)(g.V,{children:p}),x&&Object(W.jsx)(g.Vb,{outline:!0,variant:"secondary",children:j("In Wallet")}),(null===f||void 0===f||null===(t=f.nft)||void 0===t?void 0:t.identifier)===O&&Object(W.jsx)(g.Vb,{outline:!0,variant:"success",children:j("Profile Pic")})]}),c&&Object(W.jsx)(g.r,{width:"100%",mt:"24px",onClick:I,children:j("Claim this NFT")}),x&&Object(W.jsx)(g.r,{width:"100%",variant:"secondary",mt:"24px",onClick:S,children:j("Transfer")})]}),Object(W.jsxs)(g.x,{p:"0",children:[Object(W.jsx)(te,{width:"100%",endIcon:Object(W.jsx)(v,{width:"24px",color:"primary"}),onClick:w,children:j("Details")}),b&&Object(W.jsx)(ne,{children:Object(W.jsx)(g.Xb,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:j(h)})})]})]})},ce=v.e.div(p||(p=Object(x.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),ie=n(6),ae=n(52),se=["nft"],oe={"easter-storm":1,"easter-flipper":2,"easter-caker":3},ue=function(e){var t=e.nft,n=Object(ae.a)(e,se),r=Object(m.useState)(!1),c=Object(X.a)(r,2),i=c[0],a=c[1],s=Object(S.c)().account,o=Object(D.b)().profile,u=t.identifier,d=(null!==o&&void 0!==o?o:{}).team,b=Object(R.j)(),l=function(){var e=Object(A.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.mintNFT();case 2:return t=e.sent,e.next=5,t.wait();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){s&&d&&function(){var e=Object(A.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.canClaim(s);case 2:t=e.sent,a(!!t&&d.id===oe[u]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,u,d,b,a]),Object(W.jsx)(re,Object(ie.a)(Object(ie.a)({nft:t},n),{},{canClaim:i,onClaim:l}))},de={"easter-storm":ue,"easter-flipper":ue,"easter-caker":ue},be=function(){var e=Object(T.b)().tokenIds,t=Object(I.b)(),n=Object(S.c)().account,r=function(){t(Object(F.b)(n))};return Object(W.jsx)(ce,{children:C()(N.b,"sortOrder").map((function(t){var n=de[t.identifier]||re;return Object(W.jsx)("div",{children:Object(W.jsx)(n,{nft:t,tokenIds:e[t.identifier],refresh:r})},t.name)}))})},le=v.e.div(h||(h=Object(x.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(k.b)().t;return Object(W.jsxs)(w.a,{children:[Object(W.jsx)(le,{children:Object(W.jsx)(g.V,{as:"h1",scale:"xxl",color:"secondary",children:e("Pancake Collectibles")})}),Object(W.jsx)(be,{})]})}},765:function(e,t,n){"use strict";n.d(t,"o",(function(){return f})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"r",(function(){return x})),n.d(t,"q",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"h",(function(){return g})),n.d(t,"p",(function(){return k})),n.d(t,"m",(function(){return w})),n.d(t,"g",(function(){return y})),n.d(t,"d",(function(){return C})),n.d(t,"l",(function(){return S})),n.d(t,"n",(function(){return N})),n.d(t,"j",(function(){return I})),n.d(t,"f",(function(){return F})),n.d(t,"k",(function(){return T})),n.d(t,"b",(function(){return P}));var r=n(18),c=n(6),i=n(0),a=n(36),s=n(34),o=n(63),u=n(176),d=n(67),b=n(148),l=n(359),j=n(89),f=function(){var e=function(){var e=Object(s.c)((function(e){return e.predictions.rounds}));return Object.keys(e).reduce((function(t,n){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},n,Object(j.l)(e[n])))}),{})}();return Object(u.orderBy)(Object.values(e),["epoch"],["asc"])},O=function(e,t){var n=Object(s.c)((function(e){return e.predictions.ledgers}));return n[e]&&n[e][t]?Object(j.l)(n[e][t]):null},p=function(e){return Object(s.c)((function(e){return e.predictions.claimableStatuses}))[e]||!1},h=function(){return Object(s.c)((function(e){var t=Object(u.minBy)(Object.values(e.predictions.rounds),"epoch");return null===t||void 0===t?void 0:t.epoch}))},x=function(){return Object(s.c)((function(e){return e.predictions.isHistoryPaneOpen}))},m=function(){return Object(s.c)((function(e){return e.predictions.isChartPaneOpen}))},v=function(){return Object(s.c)((function(e){return e.predictions.currentEpoch}))},g=function(){return Object(s.c)((function(e){return e.predictions.intervalBlocks}))},k=function(){return g()+Object(s.c)((function(e){return e.predictions.bufferBlocks}))},w=function(){return Object(s.c)((function(e){return e.predictions.status}))},y=function(){return Object(s.c)((function(e){return e.predictions.historyFilter}))},C=function(){return Object(s.c)((function(e){return e.predictions.currentRoundStartBlockNumber}))},S=function(){var e=Object(s.c)((function(e){return e.predictions.minBetAmount}));return Object(i.useMemo)((function(){return o.a.BigNumber.from(e)}),[e])},N=function(){return Object(s.c)((function(e){return e.predictions.rewardRate}))/100},I=function(){return Object(s.c)((function(e){return e.predictions.isFetchingHistory}))},F=function(e){var t=Object(s.c)((function(e){return e.predictions.history}));return t?t[e]:[]},T=function(){var e=Object(s.c)((function(e){return e.predictions.lastOraclePrice}));return Object(i.useMemo)((function(){return o.a.BigNumber.from(e)}),[e])},P=function(){var e=Object(a.c)().account,t=Object(d.b)(),n=Object(s.c)((function(e){return e.collectibles})),r=n.isInitialized,c=n.isLoading,o=n.data,u=Object.keys(o);return Object(i.useEffect)((function(){r||t(Object(l.b)(e))}),[r,e,t]),{isInitialized:r,isLoading:c,tokenIds:o,nftsInWallet:b.b.filter((function(e){return u.includes(e.identifier)}))}}}}]);
//# sourceMappingURL=23.5a8d7e77.chunk.js.map