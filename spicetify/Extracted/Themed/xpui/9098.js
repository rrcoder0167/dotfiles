"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9098,2304],{69098:(e,s,o)=>{o.r(s),o.d(s,{EPISODE_SPONSORS_SHELF_TESTID:()=>E,EpisodeSponsorsWrapper:()=>D,SEE_ALL_EPISODE_SPONSORS_TESTID:()=>v,default:()=>b});var n=o(50959);o(55330);var t=o(79932),r=o(11527);const i=(0,n.lazy)((()=>o.e(4734).then(o.bind(o,54734))));function a({fetchedEpisodeSponsorsData:e,fireTrackingEvent:s,numberOfSponsorsToDisplay:o,firedViewedEvents:a,version:d,reason:p,uri:c}){const{displayedEpisodeSponsorsData:u}=function({fetchedEpisodeSponsorsData:e,numberOfSponsorsToDisplay:s}){return(0,n.useMemo)((()=>({displayedEpisodeSponsorsData:e.slice(0,s)})),[e,s])}({fetchedEpisodeSponsorsData:e,numberOfSponsorsToDisplay:o}),f=(0,t.X)({displayedEpisodeSponsorsData:u,uri:c,reason:p}),l=(0,n.useMemo)((()=>u.map(((e,o)=>(0,r.jsx)(i,{fireTrackingEvent:s,firedViewedEvents:a,version:d,onClick:()=>f({ui_navigate:u.map((({clickthrough:e},s)=>o===s?e:"")),navigate_to_external_uri:u.map(((...[,e])=>o===e))}),...e},`${e.metadata.lineitem_id}-${o}`)))),[u,s,a,d,f]);return{displayedEpisodeSponsorsData:u,displayedSponsors:l}}var d=o(10975),p=o(90880);var c=o(87990);o(44267),o(29746),o(29593),o(18974),o(7340),o(28220),o(80628);function u({firedViewedEvents:e}){const s=(0,n.useRef)();return{firedViewedEvents:s.current=e??s.current??new Set}}function f({uri:e,getEpisodeSponsors:s,fireTrackingEvent:o,numberOfSponsorsToDisplay:t,version:r,reason:i}){const{state:f}=(0,d.b)(),l=function({uri:e,episodeBase62Id:s}){return(0,n.useMemo)((()=>{const o=(0,p.EC)(e),n=s||o?.id;return{uri:(0,p.YD)(n).toURI(),episodeBase62Id:n}}),[e,s])}({...f?.[d.H],uri:e}),{fetchedEpisodeSponsorsData:S}=(0,c.m)({...f,...l,getEpisodeSponsors:s,version:r}),{firedViewedEvents:E}=u({...f?.[d.H]}),v=a({fetchedEpisodeSponsorsData:S,fireTrackingEvent:o,numberOfSponsorsToDisplay:t,firedViewedEvents:E,version:r,reason:i,...l});return{...l,fetchedEpisodeSponsorsData:S,...v,firedViewedEvents:E,reason:i}}const l=3;const S=(0,n.lazy)((()=>o.e(7390).then(o.bind(o,7390)))),E="episode-sponsors-shelf",v="see-all-episode-sponsors";function D(e){const{numberOfSponsorsToDisplay:s}=function({numberOfSponsorsToDisplay:e=l}){return{numberOfSponsorsToDisplay:e}}(e),o=f({...e,numberOfSponsorsToDisplay:s});return o.episodeBase62Id&&o.displayedSponsors.length?(0,r.jsx)(n.Suspense,{fallback:!0,children:(0,r.jsx)(S,{...e,numberOfSponsorsToDisplay:s,state:o})}):null}const b=D},10975:(e,s,o)=>{o.d(s,{H:()=>t,b:()=>r});var n=o(76917);const t="episodeSponsorsStateWithRequiredProps";function r(){return(0,n.TH)()}},87990:(e,s,o)=>{o.d(s,{F:()=>i,m:()=>a});var n=o(50959),t=o(49857),r=o(81704);const i=420;function a({episodeBase62Id:e,getEpisodeSponsors:s,fetchedEpisodeSponsorsData:a=[],version:d}){const[p,c]=(0,n.useState)(a),u=(0,n.useCallback)((async()=>{try{if(!e)throw new Error("episodeBase62Id is required to fetch episode sponsors");const n=s??(await Promise.resolve().then(o.bind(o,50109))).getEpisodeSponsors;c(await n(e,{version:d}))}catch(e){c([])}}),[e,s,d]),f=(0,t.y1)(u,i);(0,n.useEffect)((function(){a.length||f()}),[f,a.length]);const l=(0,n.useCallback)((()=>({effectCallback:f})),[f]);return(0,r.H)(l),{fetchedEpisodeSponsorsData:p}}},79932:(e,s,o)=>{o.d(s,{X:()=>r});o(55330);var n=o(50959),t=o(43206);function r({uri:e,reason:s,displayedEpisodeSponsorsData:r}){const i=(0,t.s4)(),a=(0,n.useCallback)((async n=>{const{createPodcastAdCtaCardEvent:t}=await o.e(1814).then(o.bind(o,42054));return i.send(t({uri:e,reason:s,lineitem_id:r.map((e=>e.metadata.lineitemId)),...n}))}),[e,r,s,i]);return(0,n.useEffect)((function(){a()}),[a]),a}},81704:(e,s,o)=>{o.d(s,{H:()=>p});var n=o(50959),t=o(29611),r=o(90343),i=o(46268),a=o(81468),d=o(8801);function p(e){const s=(0,t.W6)(r.oFA),o=(0,a.Y)((e=>{const s=e?.item??void 0;return(0,d.k6)(s)&&s.isPodcastAd?s.id??void 0:void 0})),p=(0,i.D)(o);(0,n.useEffect)((function(){const{effectCallback:n,destructor:t}=e();return o!==p&&Boolean(o)&&setTimeout(n,s),t}),[e,o,p,s])}}}]);
//# sourceMappingURL=9098.js.map