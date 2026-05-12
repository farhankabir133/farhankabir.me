const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-C3Mp-vXk.js","assets/Navbar-X2avxonV.js","assets/reactThree-DyfZtITj.js","assets/three-C_WO-bK_.js","assets/ScrollTrigger-D1XJUMov.js","assets/gsap-C8pce-KX.js","assets/Navbar-BcyspXoC.css","assets/index-Dqx6xo2n.js","assets/basePath-DN4bDQHi.js","assets/MainContainer-D__ycBHV.js","assets/MainContainer-ZHDrSQk7.css"])))=>i.map(i=>d[i]);
var Z=Object.defineProperty;var J=(n,e,a)=>e in n?Z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var $=(n,e,a)=>J(n,typeof e!="symbol"?e+"":e,a);import{r as l,_ as q,j as t,R as Q,c as H}from"./reactThree-DyfZtITj.js";import"./three-C_WO-bK_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();var k={};function ee(n){if(typeof window>"u")return;const e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}Object.defineProperty(k,"__esModule",{value:!0});var o=l;function te(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var h=te(o);ee(`.rfm-marquee-container {
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
}`);const ne=o.forwardRef(function({style:e={},className:a="",autoFill:i=!1,play:r=!0,pauseOnHover:s=!1,pauseOnClick:f=!1,direction:c="left",speed:x=50,delay:d=0,loop:m=0,gradient:b=!1,gradientColor:E="white",gradientWidth:y=200,onFinish:W,onCycleComplete:V,onMount:C,children:_},X){const[S,B]=o.useState(0),[M,G]=o.useState(0),[N,P]=o.useState(1),[L,F]=o.useState(!1),U=o.useRef(null),v=X||U,j=o.useRef(null),w=o.useCallback(()=>{if(j.current&&v.current){const u=v.current.getBoundingClientRect(),R=j.current.getBoundingClientRect();let g=u.width,p=R.width;(c==="up"||c==="down")&&(g=u.height,p=R.height),P(i&&g&&p&&p<g?Math.ceil(g/p):1),B(g),G(p)}},[i,v,c]);o.useEffect(()=>{if(L&&(w(),j.current&&v.current)){const u=new ResizeObserver(()=>w());return u.observe(v.current),u.observe(j.current),()=>{u&&u.disconnect()}}},[w,v,L]),o.useEffect(()=>{w()},[w,_]),o.useEffect(()=>{F(!0)},[]),o.useEffect(()=>{typeof C=="function"&&C()},[]);const T=o.useMemo(()=>i?M*N/x:M<S?S/x:M/x,[i,S,M,N,x]),K=o.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!r||s?"paused":"running","--pause-on-click":!r||s&&!f||f?"paused":"running","--width":c==="up"||c==="down"?"100vh":"100%","--transform":c==="up"?"rotate(-90deg)":c==="down"?"rotate(90deg)":"none"}),[e,r,s,f,c]),Y=o.useMemo(()=>({"--gradient-color":E,"--gradient-width":typeof y=="number"?`${y}px`:y}),[E,y]),O=o.useMemo(()=>({"--play":r?"running":"paused","--direction":c==="left"?"normal":"reverse","--duration":`${T}s`,"--delay":`${d}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":i?"auto":"100%"}),[r,c,T,d,m,i]),I=o.useMemo(()=>({"--transform":c==="up"?"rotate(90deg)":c==="down"?"rotate(-90deg)":"none"}),[c]),A=o.useCallback(u=>[...Array(Number.isFinite(u)&&u>=0?u:0)].map((R,g)=>h.default.createElement(o.Fragment,{key:g},o.Children.map(_,p=>h.default.createElement("div",{style:I,className:"rfm-child"},p)))),[I,_]);return L?h.default.createElement("div",{ref:v,style:K,className:"rfm-marquee-container "+a},b&&h.default.createElement("div",{style:Y,className:"rfm-overlay"}),h.default.createElement("div",{className:"rfm-marquee",style:O,onAnimationIteration:V,onAnimationEnd:W},h.default.createElement("div",{className:"rfm-initial-child-container",ref:j},o.Children.map(_,u=>h.default.createElement("div",{style:I,className:"rfm-child"},u))),A(N-1)),h.default.createElement("div",{className:"rfm-marquee",style:O},A(N))):null});var re=k.default=ne;const se=({percent:n})=>{const{setIsLoading:e}=D(),[a,i]=l.useState(!1),[r,s]=l.useState(!1),[f,c]=l.useState(!1);l.useEffect(()=>{const d=setTimeout(()=>{n<90&&(console.warn("Loading timeout - forcing completion for better UX"),r||(i(!0),setTimeout(()=>{s(!0)},1e3)))},8e3);return()=>clearTimeout(d)},[n,r]),n>=100&&setTimeout(()=>{i(!0),setTimeout(()=>{s(!0)},1e3)},600),l.useEffect(()=>{q(()=>import("./initialFX-C3Mp-vXk.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(d=>{r&&(c(!0),setTimeout(()=>{d.initialFX&&d.initialFX(),e(!1)},900))})},[r,e]);function x(d){const{currentTarget:m}=d,b=m.getBoundingClientRect(),E=d.clientX-b.left,y=d.clientY-b.top;m.style.setProperty("--mouse-x",`${E}px`),m.style.setProperty("--mouse-y",`${y}px`)}return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"loading-header",children:[t.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:"AM"}),t.jsx("div",{className:`loaderGame ${f&&"loader-out"}`,children:t.jsxs("div",{className:"loaderGame-container",children:[t.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((d,m)=>t.jsx("div",{className:"loaderGame-line"},m))}),t.jsx("div",{className:"loaderGame-ball"})]})})]}),t.jsxs("div",{className:"loading-screen",children:[t.jsx("div",{className:"loading-marquee",children:t.jsxs(re,{children:[t.jsx("span",{children:" Full Stack Developer"})," ",t.jsx("span",{children:"Software Engineer"}),t.jsx("span",{children:" Full Stack Developer"})," ",t.jsx("span",{children:"Software Engineer"})]})}),t.jsxs("div",{className:`loading-wrap ${f&&"loading-clicked"}`,onMouseMove:d=>x(d),children:[t.jsx("div",{className:"loading-hover"}),t.jsxs("div",{className:`loading-button ${a&&"loading-complete"}`,children:[t.jsxs("div",{className:"loading-container",children:[t.jsx("div",{className:"loading-content",children:t.jsxs("div",{className:"loading-content-in",children:["Loading ",t.jsxs("span",{children:[n,"%"]})]})}),t.jsx("div",{className:"loading-box"})]}),t.jsx("div",{className:"loading-content2",children:t.jsx("span",{children:"Welcome"})})]})]})]})]})},ve=n=>{let e=0,a=setInterval(()=>{if(e<=50){let s=Math.round(Math.random()*5);e=e+s,n(e)}else clearInterval(a),a=setInterval(()=>{e=e+Math.round(Math.random()),n(e),e>91&&clearInterval(a)},2e3)},100);function i(){clearInterval(a),n(100)}function r(){return new Promise(s=>{clearInterval(a),a=setInterval(()=>{e<100?(e++,n(e)):(s(e),clearInterval(a))},2)})}return{loaded:r,percent:e,clear:i}},z=l.createContext(null),ae=({children:n})=>{const[e,a]=l.useState(!0),[i,r]=l.useState(0),s={isLoading:e,setIsLoading:a,setLoading:r};return l.useEffect(()=>{},[i]),t.jsxs(z.Provider,{value:s,children:[e&&t.jsx(se,{percent:i}),t.jsx("main",{className:"main-body",children:n})]})},D=()=>{const n=l.useContext(z);if(!n)throw new Error("useLoading must be used within a LoadingProvider");return n};class ie extends l.Component{constructor(){super(...arguments);$(this,"state",{hasError:!1})}static getDerivedStateFromError(a){return{hasError:!0}}componentDidCatch(a,i){console.error("Uncaught error:",a,i)}render(){return this.state.hasError?this.props.fallback||t.jsx("h1",{children:"Something went wrong."}):this.props.children}}const oe=(n,e)=>{const[a,i]=l.useState(!1);return l.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&(i(!0),r.unobserve(s.target))},e);return n.current&&r.observe(n.current),()=>{n.current&&r.unobserve(n.current)}},[n,e]),a},le=Q.lazy(()=>q(()=>import("./index-Dqx6xo2n.js"),__vite__mapDeps([7,2,3,8,5,4]))),ce=()=>{const n=l.useRef(null),e=oe(n,{threshold:.1,rootMargin:"200px"}),[a,i]=l.useState(window.innerWidth<1024),{setIsLoading:r}=D();return l.useEffect(()=>{const s=()=>{i(window.innerWidth<1024)};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),l.useEffect(()=>{if(a){const s=setTimeout(()=>{r(!1)},1500);return()=>clearTimeout(s)}},[a,r]),a?t.jsx("div",{style:{height:"100vh"}}):t.jsx("div",{ref:n,children:e?t.jsx(l.Suspense,{fallback:null,children:t.jsx(le,{})}):t.jsx("div",{style:{height:"100vh"}})})},de=l.lazy(()=>q(()=>import("./MainContainer-D__ycBHV.js"),__vite__mapDeps([9,2,3,1,4,5,6,10])));function ue(){return t.jsx("main",{children:t.jsx(ae,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(de,{children:t.jsx(ie,{fallback:t.jsx("p",{children:"Something went wrong with the 3D model."}),children:t.jsx(ce,{})})})})})})}H(document.getElementById("root")).render(t.jsx(l.StrictMode,{children:t.jsx(ue,{})}));export{ie as E,ve as s,D as u};
