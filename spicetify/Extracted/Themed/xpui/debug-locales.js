"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6658],{86863:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});a(55330);var s=a(50959),i=a(5701),l=a(89144),n=a(57485),o=a(57044),r=a(88798),c=a(24039);const d="SsxBZ9Nwxg30ZcXUcUcJ",h="HVN1FVVriodEnWgn1GZ4",u="legiK6gOuEtSJvxYKoXc",p="N6dpLHX_oZBYC1FQy8SA",g="krXyPxbq59r39DlZdHzv",x="_o0S4kMO8jLyHmiTwjxg",m="yuK7YlDkSnTHzZph5sQq";var j=a(11527);function y(){const[e,t]=(0,s.useState)(o.ZP.isEnabled());return(0,j.jsxs)("div",{children:[" ",(0,j.jsx)(r.x,{as:"h4",variant:"titleSmall",semanticColor:"textBase",children:"Pseudo localization"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(r.x,{variant:"bodyMedium",children:["Perform"," ",(0,j.jsx)("a",{href:"https://en.wikipedia.org/wiki/Pseudolocalization",children:"pseudolocalization"})," ","against the DOM.",(0,j.jsx)("br",{})]}),(0,j.jsx)(r.x,{variant:"bodySmall",children:"In Accented English all Latin letters are replaced by accented Unicode counterparts which don't impair the readability of the content. This allows developers to quickly test if any given string is being correctly displayed in its 'translated' form. Additionally, simple heuristics are used to make certain words longer to better simulate the experience of international users."})]}),(0,j.jsx)("br",{}),(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)(r.x,{as:"label",htmlFor:"pseudo-localization",variant:"bodyMedium",children:"Toggle pseudo-localization"}),(0,j.jsx)(c.Z,{id:"pseudo-localization",value:e,onSelected:e=>{e?(t(!0),o.ZP.start()):(t(!1),o.ZP.stop(),window.location.reload())}})]})]})}var b=a(24472),f=a(43132);const v=()=>{const{settings:e}=(0,f.rV)(),t=(0,b.getIsEmployeeDesktopSettings)(e.values),a=(0,s.useMemo)((()=>({localeForTranslation:i.ag.getLocaleForTranslation(),localeForFormatting:i.ag.getLocaleForTranslation(),translations:i.ag.getTranslations()})),[]),[o,r]=(0,s.useState)(null);(0,s.useEffect)((()=>{const e={};return Promise.all(Object.keys(n.k1).map((async t=>{e[t]=await(0,l.q)(t)}))).then((()=>{r(e)})),()=>{i.ag.initialize(a)}}),[a]);const[c,m]=(0,s.useState)(null),v=i.ag.get.bind(i.ag);return t?(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("h1",{className:h,children:"Locales"}),(0,j.jsx)("h3",{children:"You can use this tool to test if the Desktop client is able to properly render every locale with correct font-family within Desktop UI."}),(0,j.jsx)(y,{}),o?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("p",{children:"Choose a string key from the dropdown to test it"}),(0,j.jsxs)("select",{onChange:e=>{m(e.target.value)},children:[(0,j.jsx)("option",{selected:null===c,children:"Select a key"}),Object.keys(o[i.go.en]||{}).map((e=>(0,j.jsx)("option",{selected:c===e,children:e},e)))]})]}),(0,j.jsx)("div",{className:u,children:Object.entries(n.k1).map((([e,{displayName:t,displayNameEn:a}])=>(e in o&&i.ag.initialize({localeForTranslation:e,localeForFormatting:e,translations:o[e]}),(0,j.jsxs)("div",{className:p,children:[(0,j.jsxs)("h3",{children:[a," (",e,") (",t,")"]}),c?(0,j.jsx)("p",{className:g,children:e in o?v(c):"💥 Can't load dictionary 💥 "}):null]},e))))})]}):(0,j.jsx)("p",{children:"Please wait until we fetch all dictionaries"})]}):null}}}]);
//# sourceMappingURL=debug-locales.js.map