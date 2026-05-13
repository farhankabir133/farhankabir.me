const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-C3Mp-vXk.js","assets/Navbar-X2avxonV.js","assets/reactThree-DyfZtITj.js","assets/three-C_WO-bK_.js","assets/ScrollTrigger-D1XJUMov.js","assets/gsap-C8pce-KX.js","assets/Navbar-BcyspXoC.css","assets/index-dLJkSr4t.js","assets/basePath-DN4bDQHi.js","assets/MainContainer-DvepiVil.js","assets/MainContainer-ZHDrSQk7.css"])))=>i.map(i=>d[i]);
var Y=Object.defineProperty;var Z=(t,e,a)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var $=(t,e,a)=>Z(t,typeof e!="symbol"?e+"":e,a);import{r as l,_ as C,j as n,R as J,c as H}from"./reactThree-DyfZtITj.js";import"./three-C_WO-bK_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();var k={};function ee(t){if(typeof window>"u")return;const e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e),t}Object.defineProperty(k,"__esModule",{value:!0});var o=l;function te(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var h=te(o);ee(`.rfm-marquee-container {
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
}`);const ne=o.forwardRef(function({style:e={},className:a="",autoFill:s=!1,play:r=!0,pauseOnHover:i=!1,pauseOnClick:f=!1,direction:c="left",speed:x=50,delay:d=0,loop:m=0,gradient:b=!1,gradientColor:E="white",gradientWidth:y=200,onFinish:V,onCycleComplete:X,onMount:P,children:M},B){const[N,G]=o.useState(0),[_,W]=o.useState(0),[L,q]=o.useState(1),[S,F]=o.useState(!1),Q=o.useRef(null),v=B||Q,w=o.useRef(null),j=o.useCallback(()=>{if(w.current&&v.current){const u=v.current.getBoundingClientRect(),R=w.current.getBoundingClientRect();let g=u.width,p=R.width;(c==="up"||c==="down")&&(g=u.height,p=R.height),q(s&&g&&p&&p<g?Math.ceil(g/p):1),G(g),W(p)}},[s,v,c]);o.useEffect(()=>{if(S&&(j(),w.current&&v.current)){const u=new ResizeObserver(()=>j());return u.observe(v.current),u.observe(w.current),()=>{u&&u.disconnect()}}},[j,v,S]),o.useEffect(()=>{j()},[j,M]),o.useEffect(()=>{F(!0)},[]),o.useEffect(()=>{typeof P=="function"&&P()},[]);const T=o.useMemo(()=>s?_*L/x:_<N?N/x:_/x,[s,N,_,L,x]),U=o.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!r||i?"paused":"running","--pause-on-click":!r||i&&!f||f?"paused":"running","--width":c==="up"||c==="down"?"100vh":"100%","--transform":c==="up"?"rotate(-90deg)":c==="down"?"rotate(90deg)":"none"}),[e,r,i,f,c]),K=o.useMemo(()=>({"--gradient-color":E,"--gradient-width":typeof y=="number"?`${y}px`:y}),[E,y]),O=o.useMemo(()=>({"--play":r?"running":"paused","--direction":c==="left"?"normal":"reverse","--duration":`${T}s`,"--delay":`${d}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":s?"auto":"100%"}),[r,c,T,d,m,s]),I=o.useMemo(()=>({"--transform":c==="up"?"rotate(90deg)":c==="down"?"rotate(-90deg)":"none"}),[c]),A=o.useCallback(u=>[...Array(Number.isFinite(u)&&u>=0?u:0)].map((R,g)=>h.default.createElement(o.Fragment,{key:g},o.Children.map(M,p=>h.default.createElement("div",{style:I,className:"rfm-child"},p)))),[I,M]);return S?h.default.createElement("div",{ref:v,style:U,className:"rfm-marquee-container "+a},b&&h.default.createElement("div",{style:K,className:"rfm-overlay"}),h.default.createElement("div",{className:"rfm-marquee",style:O,onAnimationIteration:X,onAnimationEnd:V},h.default.createElement("div",{className:"rfm-initial-child-container",ref:w},o.Children.map(M,u=>h.default.createElement("div",{style:I,className:"rfm-child"},u))),A(L-1)),h.default.createElement("div",{className:"rfm-marquee",style:O},A(L))):null});var re=k.default=ne;const ae=({percent:t})=>{const{setIsLoading:e}=z(),[a,s]=l.useState(!1),[r,i]=l.useState(!1),[f,c]=l.useState(!1);l.useEffect(()=>{const d=setTimeout(()=>{t<90&&(console.warn("Loading timeout - forcing completion for better UX"),r||(s(!0),setTimeout(()=>{i(!0)},1e3)))},8e3);return()=>clearTimeout(d)},[t,r]),t>=100&&setTimeout(()=>{s(!0),setTimeout(()=>{i(!0)},1e3)},600),l.useEffect(()=>{C(()=>import("./initialFX-C3Mp-vXk.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(d=>{r&&(c(!0),setTimeout(()=>{d.initialFX&&d.initialFX(),e(!1)},900))})},[r,e]);function x(d){const{currentTarget:m}=d,b=m.getBoundingClientRect(),E=d.clientX-b.left,y=d.clientY-b.top;m.style.setProperty("--mouse-x",`${E}px`),m.style.setProperty("--mouse-y",`${y}px`)}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"loading-header",children:[n.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:"AM"}),n.jsx("div",{className:`loaderGame ${f&&"loader-out"}`,children:n.jsxs("div",{className:"loaderGame-container",children:[n.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((d,m)=>n.jsx("div",{className:"loaderGame-line"},m))}),n.jsx("div",{className:"loaderGame-ball"})]})})]}),n.jsxs("div",{className:"loading-screen",children:[n.jsx("div",{className:"loading-marquee",children:n.jsxs(re,{children:[n.jsx("span",{children:" Full Stack Developer"})," ",n.jsx("span",{children:"Software Engineer"}),n.jsx("span",{children:" Full Stack Developer"})," ",n.jsx("span",{children:"Software Engineer"})]})}),n.jsxs("div",{className:`loading-wrap ${f&&"loading-clicked"}`,onMouseMove:d=>x(d),children:[n.jsx("div",{className:"loading-hover"}),n.jsxs("div",{className:`loading-button ${a&&"loading-complete"}`,children:[n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-content",children:n.jsxs("div",{className:"loading-content-in",children:["Loading ",n.jsxs("span",{children:[t,"%"]})]})}),n.jsx("div",{className:"loading-box"})]}),n.jsx("div",{className:"loading-content2",children:n.jsx("span",{children:"Welcome"})})]})]})]})]})},ge=t=>{let e=0,a=setInterval(()=>{if(e<=50){let i=Math.round(Math.random()*5);e=e+i,t(e)}else clearInterval(a),a=setInterval(()=>{e=e+Math.round(Math.random()),t(e),e>91&&clearInterval(a)},2e3)},100);function s(){clearInterval(a),t(100)}function r(){return new Promise(i=>{clearInterval(a),a=setInterval(()=>{e<100?(e++,t(e)):(i(e),clearInterval(a))},2)})}return{loaded:r,percent:e,clear:s}},D=l.createContext(null),se=({children:t})=>{const[e,a]=l.useState(!0),[s,r]=l.useState(0),i={isLoading:e,setIsLoading:a,setLoading:r};return l.useEffect(()=>{},[s]),n.jsxs(D.Provider,{value:i,children:[e&&n.jsx(ae,{percent:s}),n.jsx("main",{className:"main-body",children:t})]})},z=()=>{const t=l.useContext(D);if(!t)throw new Error("useLoading must be used within a LoadingProvider");return t};class ie extends l.Component{constructor(){super(...arguments);$(this,"state",{hasError:!1})}static getDerivedStateFromError(a){return{hasError:!0}}componentDidCatch(a,s){console.error("Uncaught error:",a,s)}render(){return this.state.hasError?this.props.fallback||n.jsx("h1",{children:"Something went wrong."}):this.props.children}}const oe=(t,e)=>{const[a,s]=l.useState(!1);return l.useEffect(()=>{const r=new IntersectionObserver(([i])=>{i.isIntersecting&&(s(!0),r.unobserve(i.target))},e);return t.current&&r.observe(t.current),()=>{t.current&&r.unobserve(t.current)}},[t,e]),a},le=t=>{const[e,a]=l.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return l.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(t),r=i=>{a(i.matches)};return typeof s.addEventListener=="function"?(s.addEventListener("change",r),()=>s.removeEventListener("change",r)):(s.addListener(r),()=>s.removeListener(r))},[t]),e},ce=J.lazy(()=>C(()=>import("./index-dLJkSr4t.js"),__vite__mapDeps([7,2,3,8,5,4]))),de=()=>{const t=l.useRef(null),e=oe(t,{threshold:.1,rootMargin:"200px"}),a=le("(max-width: 1023px)"),{setIsLoading:s}=z();return l.useEffect(()=>{if(a){const r=setTimeout(()=>{s(!1)},1500);return()=>clearTimeout(r)}},[a,s]),a?n.jsx("div",{style:{height:"100vh"}}):n.jsx("div",{ref:t,children:e?n.jsx(l.Suspense,{fallback:null,children:n.jsx(ce,{})}):n.jsx("div",{style:{height:"100vh"}})})},ue=l.lazy(()=>C(()=>import("./MainContainer-DvepiVil.js"),__vite__mapDeps([9,2,3,1,4,5,6,10])));function fe(){return n.jsx("main",{children:n.jsx(se,{children:n.jsx(l.Suspense,{fallback:null,children:n.jsx(ue,{children:n.jsx(ie,{fallback:n.jsx("p",{children:"Something went wrong with the 3D model."}),children:n.jsx(de,{})})})})})})}H(document.getElementById("root")).render(n.jsx(l.StrictMode,{children:n.jsx(fe,{})}));export{ie as E,le as a,ge as s,z as u};
