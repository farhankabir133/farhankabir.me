const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-B2X57Fn4.js","assets/Navbar-ChUrN_Zq.js","assets/reactThree-DVcGtMXo.js","assets/three-BS-Tm5g3.js","assets/ScrollTrigger-D1XJUMov.js","assets/gsap-C8pce-KX.js","assets/Navbar-BcyspXoC.css","assets/index-Dx0X47R1.js","assets/basePath-DN4bDQHi.js","assets/MainContainer-CB_nMoyZ.js","assets/MainContainer-DSlQw7Jl.css"])))=>i.map(i=>d[i]);
var Y=Object.defineProperty;var Z=(n,e,s)=>e in n?Y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var k=(n,e,s)=>Z(n,typeof e!="symbol"?e+"":e,s);import{r as l,_ as q,j as t,R as J,c as Q}from"./reactThree-DVcGtMXo.js";import"./three-BS-Tm5g3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();var D={};function H(n){if(typeof window>"u")return;const e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}Object.defineProperty(D,"__esModule",{value:!0});var i=l;function ee(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var h=ee(i);H(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const te=i.forwardRef(function({style:e={},className:s="",autoFill:o=!1,play:r=!0,pauseOnHover:a=!1,pauseOnClick:f=!1,direction:c="left",speed:x=50,delay:u=0,loop:m=0,gradient:w=!1,gradientColor:E="white",gradientWidth:y=200,onFinish:z,onCycleComplete:V,onMount:C,children:_},B){const[S,G]=i.useState(0),[N,W]=i.useState(0),[M,P]=i.useState(1),[I,X]=i.useState(!1),F=i.useRef(null),v=B||F,j=i.useRef(null),b=i.useCallback(()=>{if(j.current&&v.current){const d=v.current.getBoundingClientRect(),R=j.current.getBoundingClientRect();let g=d.width,p=R.width;(c==="up"||c==="down")&&(g=d.height,p=R.height),P(o&&g&&p&&p<g?Math.ceil(g/p):1),G(g),W(p)}},[o,v,c]);i.useEffect(()=>{if(I&&(b(),j.current&&v.current)){const d=new ResizeObserver(()=>b());return d.observe(v.current),d.observe(j.current),()=>{d&&d.disconnect()}}},[b,v,I]),i.useEffect(()=>{b()},[b,_]),i.useEffect(()=>{X(!0)},[]),i.useEffect(()=>{typeof C=="function"&&C()},[]);const O=i.useMemo(()=>o?N*M/x:N<S?S/x:N/x,[o,S,N,M,x]),K=i.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!r||a?"paused":"running","--pause-on-click":!r||a&&!f||f?"paused":"running","--width":c==="up"||c==="down"?"100vh":"100%","--transform":c==="up"?"rotate(-90deg)":c==="down"?"rotate(90deg)":"none"}),[e,r,a,f,c]),U=i.useMemo(()=>({"--gradient-color":E,"--gradient-width":typeof y=="number"?`${y}px`:y}),[E,y]),A=i.useMemo(()=>({"--play":r?"running":"paused","--direction":c==="left"?"normal":"reverse","--duration":`${O}s`,"--delay":`${u}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":o?"auto":"100%"}),[r,c,O,u,m,o]),L=i.useMemo(()=>({"--transform":c==="up"?"rotate(90deg)":c==="down"?"rotate(-90deg)":"none"}),[c]),$=i.useCallback(d=>[...Array(Number.isFinite(d)&&d>=0?d:0)].map((R,g)=>h.default.createElement(i.Fragment,{key:g},i.Children.map(_,p=>h.default.createElement("div",{style:L,className:"rfm-child"},p)))),[L,_]);return I?h.default.createElement("div",{ref:v,style:K,className:"rfm-marquee-container "+s},w&&h.default.createElement("div",{style:U,className:"rfm-overlay"}),h.default.createElement("div",{className:"rfm-marquee",style:A,onAnimationIteration:V,onAnimationEnd:z},h.default.createElement("div",{className:"rfm-initial-child-container",ref:j},i.Children.map(_,d=>h.default.createElement("div",{style:L,className:"rfm-child"},d))),$(M-1)),h.default.createElement("div",{className:"rfm-marquee",style:A},$(M))):null});var ne=D.default=te;const re=({percent:n})=>{const{setIsLoading:e}=se(),[s,o]=l.useState(!1),[r,a]=l.useState(!1),[f,c]=l.useState(!1);n>=100&&setTimeout(()=>{o(!0),setTimeout(()=>{a(!0)},1e3)},600),l.useEffect(()=>{q(()=>import("./initialFX-B2X57Fn4.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(u=>{r&&(c(!0),setTimeout(()=>{u.initialFX&&u.initialFX(),e(!1)},900))})},[r]);function x(u){const{currentTarget:m}=u,w=m.getBoundingClientRect(),E=u.clientX-w.left,y=u.clientY-w.top;m.style.setProperty("--mouse-x",`${E}px`),m.style.setProperty("--mouse-y",`${y}px`)}return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"loading-header",children:[t.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:"AM"}),t.jsx("div",{className:`loaderGame ${f&&"loader-out"}`,children:t.jsxs("div",{className:"loaderGame-container",children:[t.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((u,m)=>t.jsx("div",{className:"loaderGame-line"},m))}),t.jsx("div",{className:"loaderGame-ball"})]})})]}),t.jsxs("div",{className:"loading-screen",children:[t.jsx("div",{className:"loading-marquee",children:t.jsxs(ne,{children:[t.jsx("span",{children:" Full Stack Developer"})," ",t.jsx("span",{children:"Software Engineer"}),t.jsx("span",{children:" Full Stack Developer"})," ",t.jsx("span",{children:"Software Engineer"})]})}),t.jsxs("div",{className:`loading-wrap ${f&&"loading-clicked"}`,onMouseMove:u=>x(u),children:[t.jsx("div",{className:"loading-hover"}),t.jsxs("div",{className:`loading-button ${s&&"loading-complete"}`,children:[t.jsxs("div",{className:"loading-container",children:[t.jsx("div",{className:"loading-content",children:t.jsxs("div",{className:"loading-content-in",children:["Loading ",t.jsxs("span",{children:[n,"%"]})]})}),t.jsx("div",{className:"loading-box"})]}),t.jsx("div",{className:"loading-content2",children:t.jsx("span",{children:"Welcome"})})]})]})]})]})},ve=n=>{let e=0,s=setInterval(()=>{if(e<=50){let a=Math.round(Math.random()*5);e=e+a,n(e)}else clearInterval(s),s=setInterval(()=>{e=e+Math.round(Math.random()),n(e),e>91&&clearInterval(s)},2e3)},100);function o(){clearInterval(s),n(100)}function r(){return new Promise(a=>{clearInterval(s),s=setInterval(()=>{e<100?(e++,n(e)):(a(e),clearInterval(s))},2)})}return{loaded:r,percent:e,clear:o}},T=l.createContext(null),ae=({children:n})=>{const[e,s]=l.useState(!0),[o,r]=l.useState(0),a={isLoading:e,setIsLoading:s,setLoading:r};return l.useEffect(()=>{},[o]),t.jsxs(T.Provider,{value:a,children:[e&&t.jsx(re,{percent:o}),t.jsx("main",{className:"main-body",children:n})]})},se=()=>{const n=l.useContext(T);if(!n)throw new Error("useLoading must be used within a LoadingProvider");return n};class ie extends l.Component{constructor(){super(...arguments);k(this,"state",{hasError:!1})}static getDerivedStateFromError(s){return{hasError:!0}}componentDidCatch(s,o){console.error("Uncaught error:",s,o)}render(){return this.state.hasError?this.props.fallback||t.jsx("h1",{children:"Something went wrong."}):this.props.children}}const oe=(n,e)=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{const r=new IntersectionObserver(([a])=>{a.isIntersecting&&(o(!0),r.unobserve(a.target))},e);return n.current&&r.observe(n.current),()=>{n.current&&r.unobserve(n.current)}},[n,e]),s},le=J.lazy(()=>q(()=>import("./index-Dx0X47R1.js"),__vite__mapDeps([7,2,3,8,5,4]))),ce=()=>{const n=l.useRef(null),e=oe(n,{threshold:.1});return t.jsx("div",{ref:n,children:e?t.jsx(l.Suspense,{fallback:null,children:t.jsx(le,{})}):t.jsx("div",{style:{height:"100vh"}})})},de=l.lazy(()=>q(()=>import("./MainContainer-CB_nMoyZ.js"),__vite__mapDeps([9,2,3,1,4,5,6,10])));function ue(){return t.jsx("main",{children:t.jsx(ae,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(de,{children:t.jsx(ie,{fallback:t.jsx("p",{children:"Something went wrong with the 3D model."}),children:t.jsx(ce,{})})})})})})}Q(document.getElementById("root")).render(t.jsx(l.StrictMode,{children:t.jsx(ue,{})}));export{ie as E,ve as s,se as u};
