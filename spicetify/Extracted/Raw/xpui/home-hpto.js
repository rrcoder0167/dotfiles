"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9694],{53748:(e,a,s)=>{s.r(a),s.d(a,{HptoContainer:()=>Ce,default:()=>we});var t=s(50959),r=s(92389),l=s(29611),i=s(81468),n=s(94665),c=s(73953),d=s(84875),o=s.n(d),h=s(10750),m=s(55699),g=s(96886);const u="WiPggcPDzbwGxoxwLWFf",x="tqFRRnWu7DgTNKYlCl6x",j="MnW5SczTcbdFHxLZ_Z8j",v="YZtgNJaLuYjhGWHuN2zN";var f=s(11527);const p=({children:e,fetchingState:a,hideHpto:s})=>{const l=(0,r.v9)(m.W3),i=(0,r.I0)(),n=(0,t.useRef)(null);(0,t.useEffect)((()=>(n.current&&i((0,c.az)(n.current)),()=>{i((0,c.MJ)(!0))})),[i]),(0,t.useEffect)((()=>{a===g.Y.FETCHED&&i((0,c.Fw)())}),[a,i]);const d=(0,t.useCallback)((e=>{i((0,c.lT)(e.message))}),[i]);return(0,f.jsx)(h.L,{onError:d,children:(0,f.jsx)("div",{"data-testid":"hpto-parent-container",className:o()(u,"contentSpacing",{[x]:a===g.Y.FAILED||!l||s}),children:(0,f.jsx)("div",{"data-testid":"test-hpto-ref",ref:n,className:o()(j,{[v]:a===g.Y.FETCHING||s}),children:e})})})};var k=s(60820),b=s(78308),M=s(5701),N=s(15853);const y="JRpZEVSn5LfbA9fwwOqQ",C=({isPremium:e})=>{const a=(0,r.I0)();return(0,f.jsx)("div",{className:y,children:e?(0,f.jsx)(k.D,{size:"small",colorSet:"overMedia",onClick:()=>a((0,N.xG)()),children:M.ag.get("ad-formats.hideAnnouncements")}):(0,f.jsx)(b.V,{colorSet:"overMedia",children:M.ag.get("ad-formats.sponsored")})})},w="iVAZDcTm1XGjxwKlQisz",I="_I_1HMbDnNlNAaViEnbp",S=({isPremium:e,backgroundColor:a,backgroundImage:s,backgroundUrl:l,bannerMode:i,html:n})=>{const d=(0,r.I0)(),[o,h]=(0,t.useState)(!1),g=(0,r.v9)(m.t4)?.media,u=n||g;return(0,t.useEffect)((()=>{if("html"===i){h(!0);const e=document.querySelectorAll('[data-testid="html-hpto-iframe"]')[0];e instanceof HTMLIFrameElement&&e.contentWindow?.postMessage({name:"fireHptoViewEvent"},"*")}}),[i]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("a",{draggable:!1,href:l||"",className:w,onClick:()=>{l&&d((0,c.kh)("event_clicked"))},style:{backgroundColor:a,backgroundImage:o?`url(${s})`:"none",backgroundSize:"cover"},children:(0,f.jsx)("iframe",{"data-testid":"html-hpto-iframe",className:I,srcDoc:u,scrolling:"no",marginWidth:0,marginHeight:0,style:{display:o?"":"none"},"aria-hidden":!0})}),(0,f.jsx)(C,{isPremium:e})]})},V="xXj7eFQ8SoDKYXy6L3E1",z="F68SsPm8lZFktQ1lWsQz",F=({isPremium:e,backgroundColor:a,backgroundImage:s,clickThroughUrl:l})=>{(0,t.useEffect)((()=>{if(!s)throw Error("[Image HPTO] Missing background image")}),[s]);const i=(0,r.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("a",{"data-testid":"hpto-image",draggable:!1,onClick:()=>{i((0,c.kh)("event_clicked"))},className:V,style:{backgroundColor:a},href:l,children:(0,f.jsx)("img",{draggable:!1,className:z,alt:"",src:s})}),(0,f.jsx)(C,{isPremium:e})]})};s(55330);var L=s(88798),T=s(90880),A=s(65537),E=s(95018),P=s(74069),B=s(6243),H=s(54878),_=s(35628),J=s(73366),D=s(57735),Y=s(42057),O=s(51537),R=s(75317),K=s(10473),U=s(16254),W=s(22038),Q=s(28528);const X="x8e0kqJPS0bM4dVK7ESH",q="gZ2Nla3mdRREDCwybK6X",G="SChMe0Tert7lmc5jqH01",Z="AwF4EfqLOIJ2xO7CjHoX",$="UlkNeRDFoia4UDWtrOr4",ee="k_RKSQxa2u5_6KmcOoSw",ae="_mWmycP_WIvMNQdKoAFb",se="O3UuqEx6ibrxyOJIdpdg",te="akCwgJVf4B4ep6KYwrk5",re="bIA4qeTh_LSwQJuVxDzl",le="ajr9pah2nj_5cXrAofU_",ie="gvn0k6QI7Yl_A0u46hKn",ne="obTnuSx7ZKIIY1_fwJhe",ce="IiLMLyxs074DwmEH4x5b",de="RJjM91y1EBycwhT_wH59",oe="mxn5B5ceO2ksvMlI1bYz",he="l8wtkGVi89_AsA3nXDSR",me="Th1XPPdXMnxNCDrYsnwb",ge="SJMBltbXfqUiByDAkUN_",ue="Nayn_JfAUsSO0EFapLuY",xe="YqlFpeC9yMVhGmd84Gdo",je="HksuyUyj1n3aTnB4nHLd",ve="DT8FJnRKoRVWo77CPQbQ",fe=(e,a)=>{switch(e){case T.JM.ALBUM:case T.JM.TRACK:case T.JM.EPISODE:case T.JM.PLAYLIST:return a?M.ag.get("ad-formats.remove"):M.ag.get("ad-formats.save");default:return a?M.ag.get("unfollow"):M.ag.get("follow")}},pe=({playBtnUri:e,uri:a,uriType:s})=>{const l=(0,r.I0)(),[i,n]=(0,U.Z)(a),d=(0,Q.o)(),h="SMALL"===(0,K.jh)()?"small":"medium",{togglePlay:m,isPlaying:g}=(0,W.n)({uri:e},{featureIdentifier:"hpto"}),u=(0,t.useCallback)((()=>{m(),l((0,c.kh)("event_clicked","ne-play-button"))}),[l,m]),x=(0,t.useCallback)((async()=>{try{await n(!i)}catch{(0,c.lT)(`invalid button uri type ${a}`)}d({targetUri:a,intent:i?"unsave":"save",type:"click"})}),[i,n,a,d]),j=(0,t.useCallback)((()=>{l((0,c.kh)("event_clicked","ne-more-button"))}),[l]);let v=null;return v=(0,T.YF)(a)?(0,f.jsx)(P.Y,{uri:a}):(0,T.OB)(a)?(0,f.jsx)(B.m,{uri:a}):(0,T.nK)(a)?(0,f.jsx)(D.X,{uri:a}):(0,T.RS)(a)?(0,f.jsx)(Y.M,{uri:a}):(0,T.wj)(a)?(0,f.jsx)(O.$,{uri:a}):(0,T.hn)(a)?(0,f.jsx)(H.k,{uri:a}):(0,T.dB)(a)?(0,f.jsx)(J.N,{uri:a}):(0,f.jsx)(_.o,{uri:a}),(0,f.jsxs)("div",{className:me,"data-testid":"hpto-native-buttons",children:[(0,f.jsx)(k.D,{onClick:u,size:h,children:g?M.ag.get("pause"):M.ag.get("play")}),(0,f.jsx)(A.P,{className:o()({[ve]:i}),onClick:x,size:h,children:fe(s,i)}),(0,f.jsx)(R.y,{menu:v,children:(0,f.jsx)(E.z,{onClick:j,size:h,className:ge})})]})},ke=({className:e})=>(0,f.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"150",height:"20",viewBox:"0 0 147 20",children:(0,f.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:[(0,f.jsx)("path",{fill:"#FFF",d:"M70 5H71V16H70z"}),(0,f.jsxs)("g",{children:[(0,f.jsx)("path",{fill:"#84BD00",d:"M10.001.045C4.489.045.02 4.49.02 9.975c0 5.486 4.469 9.932 9.981 9.932 5.513 0 9.981-4.446 9.981-9.931 0-5.485-4.468-9.931-9.981-9.931"}),(0,f.jsx)("path",{fill:"#000",d:"M15.544 10.6C12.463 8.717 7.956 8.186 4.33 9.28a.775.775 0 00-.519.967.78.78 0 00.972.515c3.173-.958 7.263-.483 9.945 1.158a.78.78 0 001.07-.255.772.772 0 00-.255-1.065"}),(0,f.jsx)("path",{fill:"#000",d:"M16.858 7.251c-3.704-2.187-9.565-2.393-13.09-1.328A.928.928 0 104.31 7.7c3.07-.927 8.378-.752 11.595 1.149a.936.936 0 001.28-.325.926.926 0 00-.327-1.273"}),(0,f.jsx)("path",{fill:"#000",d:"M14.372 13.518c-2.63-1.6-5.892-1.972-9.694-1.107a.618.618 0 10.277 1.206c3.474-.79 6.424-.467 8.768.958a.624.624 0 00.855-.206.617.617 0 00-.206-.851"})]}),(0,f.jsxs)("g",{fill:"#FFF",transform:"translate(25 5)",children:[(0,f.jsx)("path",{d:"M3.806 4.194C2.23 3.822 1.95 3.56 1.95 3.013c0-.518.493-.867 1.226-.867.711 0 1.416.265 2.156.81a.104.104 0 00.146-.023l.77-1.073a.102.102 0 00-.02-.139C5.347 1.023 4.357.684 3.199.684 1.496.684.307 1.694.307 3.14c0 1.55 1.026 2.099 2.799 2.522 1.508.344 1.763.632 1.763 1.147 0 .57-.515.924-1.343.924-.92 0-1.672-.306-2.511-1.025a.109.109 0 00-.076-.025.103.103 0 00-.071.036L.005 7.734a.1.1 0 00.01.142 5.18 5.18 0 003.476 1.318c1.834 0 3.02-.991 3.02-2.525 0-1.297-.784-2.014-2.705-2.475"}),(0,f.jsx)("path",{d:"M10.661 2.656c-.795 0-1.447.31-1.985.944v-.714a.103.103 0 00-.103-.102H7.16a.103.103 0 00-.103.102v7.935c0 .057.046.102.103.102h1.412a.103.103 0 00.103-.102V8.316c.538.597 1.19.889 1.985.889 1.478 0 2.973-1.125 2.973-3.274 0-2.15-1.495-3.275-2.973-3.275zm1.332 3.275c0 1.094-.682 1.858-1.659 1.858-.965 0-1.693-.798-1.693-1.858s.728-1.858 1.693-1.858c.961 0 1.659.78 1.659 1.858z"}),(0,f.jsx)("path",{d:"M17.468 2.656c-1.903 0-3.393 1.449-3.393 3.298 0 1.83 1.48 3.263 3.37 3.263 1.91 0 3.405-1.444 3.405-3.286 0-1.836-1.485-3.275-3.382-3.275zm0 5.145c-1.012 0-1.775-.804-1.775-1.87 0-1.07.737-1.847 1.752-1.847 1.019 0 1.787.804 1.787 1.87 0 1.07-.742 1.847-1.764 1.847z"}),(0,f.jsx)("path",{d:"M24.913 2.784H23.36v-1.57a.103.103 0 00-.104-.103h-1.411a.103.103 0 00-.104.102v1.57h-.679a.103.103 0 00-.102.103v1.2c0 .056.046.102.102.102h.68v3.104c0 1.254.63 1.89 1.876 1.89.507 0 .927-.103 1.323-.325a.102.102 0 00.052-.089V7.626a.102.102 0 00-.049-.087.104.104 0 00-.1-.004 1.797 1.797 0 01-.83.197c-.452 0-.654-.203-.654-.659V4.188h1.553a.103.103 0 00.103-.102v-1.2a.103.103 0 00-.103-.102"}),(0,f.jsx)("path",{d:"M30.326 2.79v-.193c0-.567.22-.82.714-.82.294 0 .53.057.795.145.033.01.067.005.093-.014a.101.101 0 00.043-.083V.648a.102.102 0 00-.073-.098 3.916 3.916 0 00-1.173-.166c-1.305 0-1.994.726-1.994 2.098v.296h-.678a.103.103 0 00-.104.102v1.206c0 .056.047.102.104.102h.678v4.788c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102V4.188h1.319l2.019 4.787c-.23.502-.455.603-.762.603-.25 0-.511-.074-.779-.219a.107.107 0 00-.082-.007.104.104 0 00-.061.055l-.479 1.038a.1.1 0 00.045.132 3 3 0 001.507.381c1.043 0 1.62-.48 2.127-1.771l2.45-6.258a.1.1 0 00-.011-.095.103.103 0 00-.085-.044h-1.47a.104.104 0 00-.098.068L34.483 7.11l-1.649-4.254a.103.103 0 00-.096-.066h-2.412"}),(0,f.jsx)("path",{d:"M27.188 2.784h-1.412a.103.103 0 00-.103.102v6.09c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102v-6.09a.103.103 0 00-.103-.102"}),(0,f.jsx)("path",{d:"M26.49.011c-.56 0-1.014.448-1.014 1 0 .554.454 1.002 1.013 1.002.56 0 1.013-.448 1.013-1.001 0-.553-.454-1-1.013-1"}),(0,f.jsx)("path",{d:"M38.858 4.742a.984.984 0 01-.994-.983c0-.538.44-.987 1-.987a.984.984 0 11-.006 1.97zm.005-1.872c-.509 0-.894.4-.894.89 0 .489.382.884.889.884.509 0 .894-.4.894-.89a.876.876 0 00-.889-.884zm.22.985l.281.389h-.237l-.253-.357h-.217v.357h-.198V3.213h.465c.242 0 .401.122.401.329 0 .169-.098.272-.242.313zm-.167-.465h-.26v.326h.26c.129 0 .206-.063.206-.163 0-.107-.077-.163-.206-.163z"})]}),(0,f.jsx)("path",{fill:"#FFF",d:"M79.9 13.12c1.8 0 2.37-1.03 2.37-1.89 0-2.49-4-1.55-4-3.26 0-.72.67-1.23 1.56-1.23.75 0 1.43.26 1.91.84l.38-.42c-.52-.59-1.26-.94-2.26-.94-1.21 0-2.19.69-2.19 1.78 0 2.33 4 1.31 4 3.27 0 .57-.39 1.33-1.76 1.33-.95 0-1.65-.47-2.08-.97l-.37.43c.51.62 1.34 1.06 2.44 1.06zm6.61-.12v-2.77h1.93c1.27 0 2.01-.9 2.01-1.95 0-1.05-.73-1.95-2.01-1.95h-2.5V13h.57zm1.87-3.29h-1.87V6.85h1.87c.88 0 1.47.59 1.47 1.43s-.59 1.43-1.47 1.43zm8.56 3.41c1.95 0 3.24-1.5 3.24-3.45 0-1.95-1.29-3.45-3.24-3.45-1.96 0-3.24 1.5-3.24 3.45 0 1.95 1.28 3.45 3.24 3.45zm0-.52c-1.62 0-2.64-1.25-2.64-2.93 0-1.7 1.02-2.93 2.64-2.93 1.6 0 2.64 1.23 2.64 2.93 0 1.68-1.04 2.93-2.64 2.93zm8.94.4V6.85h2.18v-.52h-4.94v.52h2.18V13h.58zm9.46 0v-.52h-3.23V6.33h-.57V13h3.8zm4.11 0V6.33h-.57V13h.57zm7.09.13c1.05 0 1.94-.45 2.53-1.11V9.69h-3.09v.51h2.52v1.6c-.37.37-1.07.81-1.96.81-1.57 0-2.78-1.22-2.78-2.94 0-1.74 1.21-2.93 2.78-2.93.85 0 1.61.37 2.08.93l.43-.31c-.61-.7-1.41-1.14-2.51-1.14-1.87 0-3.38 1.39-3.38 3.45 0 2.06 1.51 3.46 3.38 3.46zM138.2 13V6.33h-.58v2.98h-4.23V6.33h-.57V13h.57V9.83h4.23V13h.58zm6.23 0V6.85h2.18v-.52h-4.94v.52h2.18V13h.58z"})]})}),be=e=>{switch(e){case T.JM.ALBUM:return M.ag.get("card.tag.album");case T.JM.TRACK:return M.ag.get("card.tag.track");case T.JM.ARTIST:return M.ag.get("card.tag.artist");case T.JM.EPISODE:return M.ag.get("card.tag.episode");case T.JM.SHOW:return M.ag.get("card.tag.show");case T.JM.PLAYLIST:case T.JM.PLAYLIST_V2:return M.ag.get("card.tag.playlist");default:return""}},Me=(e,a)=>"spotlight"===e?(0,f.jsx)(ke,{className:ne}):"exclusive"===e?(0,f.jsx)("p",{dir:"auto",className:o()(ne,ce),children:M.ag.get("ad-formats.exclusive")}):(0,f.jsx)(L.x,{as:"p",dir:"auto",variant:"bodySmallBold",semanticColor:"textBase",className:ne,children:be(a)}),Ne=({name:e,uri:a,playBtnUri:s,description:t,smallImage:l,isSponsored:i,backgroundImage:n,sponsoredLogo:d,uriType:h,logoBlurb:m,isPremium:g,artists:u,badgeType:x})=>{const j=(0,r.I0)(),v=u.length>0,p=!g&&i;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{"data-testid":"hpto-native",className:o()(i?q:X,{[$]:i}),children:[i&&(0,f.jsx)("div",{className:ee,children:(0,f.jsxs)("div",{children:[(0,f.jsx)(L.x,{as:"p",variant:"marginalBold",className:ie,semanticColor:"textBase",children:M.ag.get("ad-formats.presentedBy")}),(0,f.jsx)("img",{draggable:!1,className:re,src:d,alt:""}),(0,f.jsx)(L.x,{as:"p",semanticColor:"textBase",variant:"bodySmall",className:le,children:m})]})}),(0,f.jsx)("div",{className:i?Z:G,children:(0,f.jsx)("a",{"data-testid":"ne-image-link-test",onClick:()=>{j((0,c.kh)("event_clicked","ne-image-link"))},className:te,href:a,children:(0,f.jsx)("img",{className:se,alt:"",src:l})})}),(0,f.jsxs)("div",{className:ae,children:[Me(x,h),(0,f.jsx)(L.x,{as:"a",variant:"titleLarge","data-testid":"ne-name-link-test",onClick:()=>{j((0,c.kh)("event_clicked","ne-name-link"))},href:a,dir:"auto",semanticColor:"textBase",className:i?oe:de,children:e}),v&&(0,f.jsx)("div",{children:u.map(((e,s)=>(0,f.jsxs)("span",{children:[s?M.ag.getSeparator():"",(0,f.jsx)(L.x,{as:"a",semanticColor:"textBase",variant:"bodyMedium","data-testid":`ne-attrib-link-${s}-test`,onClick:()=>{j((0,c.kh)("event_clicked","ne-attrib-link"))},draggable:!1,href:e.uri,children:e.name})]},`${a}-${s}`)))}),(0,f.jsx)(L.x,{variant:"bodyMedium",dir:"auto",className:he,semanticColor:"textBase",children:t}),(0,f.jsx)(pe,{playBtnUri:s,uri:a,uriType:h})]})]}),(0,f.jsx)("div",{draggable:!1,className:o()(i?xe:ue,{[je]:!i}),style:{backgroundImage:`url(${n})`}}),!p&&(0,f.jsx)(C,{isPremium:g})]})};var ye=s(90343);const Ce=()=>{const e=(0,r.I0)(),a=(0,r.v9)(m.LA),s=(0,r.v9)(m.sp),d=(0,r.v9)(m.PA),o=(0,r.v9)(m.Jk),h=(0,r.v9)(m.vK),u=(0,r.v9)(m.oN),x=(0,l.W6)(ye.YMI),j=(0,i.Y)(n.B8),v={[g.O.NATIVE]:Ne,[g.O.IMAGE]:F,[g.O.HTML]:S},k=u&&j&&x;if((0,t.useEffect)((()=>{e((0,c.fm)())}),[e,h,k]),k)return null;if(h){if(!a)return(0,f.jsx)(p,{hideHpto:k,fetchingState:s,children:(0,f.jsx)(S,{isPremium:o})});if(a&&d){const e=v[a.bannerMode];return(0,f.jsx)(p,{hideHpto:k,fetchingState:s,children:(0,f.jsx)(e,{...a,isPremium:o})})}}return null},we=Ce}}]);
//# sourceMappingURL=home-hpto.js.map