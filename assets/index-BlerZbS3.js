const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-C3Mp-vXk.js","assets/Navbar-X2avxonV.js","assets/reactThree-DyfZtITj.js","assets/three-C_WO-bK_.js","assets/ScrollTrigger-D1XJUMov.js","assets/gsap-C8pce-KX.js","assets/Navbar-BcyspXoC.css","assets/index-Il4E75tY.js","assets/basePath-DN4bDQHi.js","assets/MainContainer-DJGXL_ql.js","assets/MainContainer-ZHDrSQk7.css"])))=>i.map(i=>d[i]);
var Z=Object.defineProperty;var J=(n,t,a)=>t in n?Z(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var z=(n,t,a)=>J(n,typeof t!="symbol"?t+"":t,a);import{r as l,_ as q,j as e,R as Q,c as H}from"./reactThree-DyfZtITj.js";import"./three-C_WO-bK_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();var T={};function ee(n){if(typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=n,document.head.appendChild(t),n}Object.defineProperty(T,"__esModule",{value:!0});var o=l;function te(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var h=te(o);ee(`.rfm-marquee-container {
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
}`);const ne=o.forwardRef(function({style:t={},className:a="",autoFill:i=!1,play:r=!0,pauseOnHover:s=!1,pauseOnClick:f=!1,direction:c="left",speed:x=50,delay:u=0,loop:m=0,gradient:b=!1,gradientColor:E="white",gradientWidth:y=200,onFinish:W,onCycleComplete:V,onMount:C,children:_},B){const[S,G]=o.useState(0),[N,X]=o.useState(0),[M,P]=o.useState(1),[L,F]=o.useState(!1),K=o.useRef(null),v=B||K,j=o.useRef(null),w=o.useCallback(()=>{if(j.current&&v.current){const d=v.current.getBoundingClientRect(),R=j.current.getBoundingClientRect();let g=d.width,p=R.width;(c==="up"||c==="down")&&(g=d.height,p=R.height),P(i&&g&&p&&p<g?Math.ceil(g/p):1),G(g),X(p)}},[i,v,c]);o.useEffect(()=>{if(L&&(w(),j.current&&v.current)){const d=new ResizeObserver(()=>w());return d.observe(v.current),d.observe(j.current),()=>{d&&d.disconnect()}}},[w,v,L]),o.useEffect(()=>{w()},[w,_]),o.useEffect(()=>{F(!0)},[]),o.useEffect(()=>{typeof C=="function"&&C()},[]);const O=o.useMemo(()=>i?N*M/x:N<S?S/x:N/x,[i,S,N,M,x]),U=o.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!r||s?"paused":"running","--pause-on-click":!r||s&&!f||f?"paused":"running","--width":c==="up"||c==="down"?"100vh":"100%","--transform":c==="up"?"rotate(-90deg)":c==="down"?"rotate(90deg)":"none"}),[t,r,s,f,c]),Y=o.useMemo(()=>({"--gradient-color":E,"--gradient-width":typeof y=="number"?`${y}px`:y}),[E,y]),A=o.useMemo(()=>({"--play":r?"running":"paused","--direction":c==="left"?"normal":"reverse","--duration":`${O}s`,"--delay":`${u}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":i?"auto":"100%"}),[r,c,O,u,m,i]),I=o.useMemo(()=>({"--transform":c==="up"?"rotate(90deg)":c==="down"?"rotate(-90deg)":"none"}),[c]),$=o.useCallback(d=>[...Array(Number.isFinite(d)&&d>=0?d:0)].map((R,g)=>h.default.createElement(o.Fragment,{key:g},o.Children.map(_,p=>h.default.createElement("div",{style:I,className:"rfm-child"},p)))),[I,_]);return L?h.default.createElement("div",{ref:v,style:U,className:"rfm-marquee-container "+a},b&&h.default.createElement("div",{style:Y,className:"rfm-overlay"}),h.default.createElement("div",{className:"rfm-marquee",style:A,onAnimationIteration:V,onAnimationEnd:W},h.default.createElement("div",{className:"rfm-initial-child-container",ref:j},o.Children.map(_,d=>h.default.createElement("div",{style:I,className:"rfm-child"},d))),$(M-1)),h.default.createElement("div",{className:"rfm-marquee",style:A},$(M))):null});var re=T.default=ne;const se=({percent:n})=>{const{setIsLoading:t}=D(),[a,i]=l.useState(!1),[r,s]=l.useState(!1),[f,c]=l.useState(!1);n>=100&&setTimeout(()=>{i(!0),setTimeout(()=>{s(!0)},1e3)},600),l.useEffect(()=>{q(()=>import("./initialFX-C3Mp-vXk.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(u=>{r&&(c(!0),setTimeout(()=>{u.initialFX&&u.initialFX(),t(!1)},900))})},[r]);function x(u){const{currentTarget:m}=u,b=m.getBoundingClientRect(),E=u.clientX-b.left,y=u.clientY-b.top;m.style.setProperty("--mouse-x",`${E}px`),m.style.setProperty("--mouse-y",`${y}px`)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"loading-header",children:[e.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:"AM"}),e.jsx("div",{className:`loaderGame ${f&&"loader-out"}`,children:e.jsxs("div",{className:"loaderGame-container",children:[e.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((u,m)=>e.jsx("div",{className:"loaderGame-line"},m))}),e.jsx("div",{className:"loaderGame-ball"})]})})]}),e.jsxs("div",{className:"loading-screen",children:[e.jsx("div",{className:"loading-marquee",children:e.jsxs(re,{children:[e.jsx("span",{children:" Full Stack Developer"})," ",e.jsx("span",{children:"Software Engineer"}),e.jsx("span",{children:" Full Stack Developer"})," ",e.jsx("span",{children:"Software Engineer"})]})}),e.jsxs("div",{className:`loading-wrap ${f&&"loading-clicked"}`,onMouseMove:u=>x(u),children:[e.jsx("div",{className:"loading-hover"}),e.jsxs("div",{className:`loading-button ${a&&"loading-complete"}`,children:[e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-content",children:e.jsxs("div",{className:"loading-content-in",children:["Loading ",e.jsxs("span",{children:[n,"%"]})]})}),e.jsx("div",{className:"loading-box"})]}),e.jsx("div",{className:"loading-content2",children:e.jsx("span",{children:"Welcome"})})]})]})]})]})},ve=n=>{let t=0,a=setInterval(()=>{if(t<=50){let s=Math.round(Math.random()*5);t=t+s,n(t)}else clearInterval(a),a=setInterval(()=>{t=t+Math.round(Math.random()),n(t),t>91&&clearInterval(a)},2e3)},100);function i(){clearInterval(a),n(100)}function r(){return new Promise(s=>{clearInterval(a),a=setInterval(()=>{t<100?(t++,n(t)):(s(t),clearInterval(a))},2)})}return{loaded:r,percent:t,clear:i}},k=l.createContext(null),ae=({children:n})=>{const[t,a]=l.useState(!0),[i,r]=l.useState(0),s={isLoading:t,setIsLoading:a,setLoading:r};return l.useEffect(()=>{},[i]),e.jsxs(k.Provider,{value:s,children:[t&&e.jsx(se,{percent:i}),e.jsx("main",{className:"main-body",children:n})]})},D=()=>{const n=l.useContext(k);if(!n)throw new Error("useLoading must be used within a LoadingProvider");return n};class ie extends l.Component{constructor(){super(...arguments);z(this,"state",{hasError:!1})}static getDerivedStateFromError(a){return{hasError:!0}}componentDidCatch(a,i){console.error("Uncaught error:",a,i)}render(){return this.state.hasError?this.props.fallback||e.jsx("h1",{children:"Something went wrong."}):this.props.children}}const oe=(n,t)=>{const[a,i]=l.useState(!1);return l.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&(i(!0),r.unobserve(s.target))},t);return n.current&&r.observe(n.current),()=>{n.current&&r.unobserve(n.current)}},[n,t]),a},le=Q.lazy(()=>q(()=>import("./index-Il4E75tY.js"),__vite__mapDeps([7,2,3,8,5,4]))),ce=()=>{const n=l.useRef(null),t=oe(n,{threshold:.1}),[a,i]=l.useState(window.innerWidth<1024),{setIsLoading:r}=D();return l.useEffect(()=>{const s=()=>{i(window.innerWidth<1024)};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),l.useEffect(()=>{if(a){const s=setTimeout(()=>{r(!1)},1500);return()=>clearTimeout(s)}},[a,r]),a?e.jsx("div",{style:{height:"100vh"}}):e.jsx("div",{ref:n,children:t?e.jsx(l.Suspense,{fallback:null,children:e.jsx(le,{})}):e.jsx("div",{style:{height:"100vh"}})})},de=l.lazy(()=>q(()=>import("./MainContainer-DJGXL_ql.js"),__vite__mapDeps([9,2,3,1,4,5,6,10])));function ue(){return e.jsx("main",{children:e.jsx(ae,{children:e.jsx(l.Suspense,{fallback:null,children:e.jsx(de,{children:e.jsx(ie,{fallback:e.jsx("p",{children:"Something went wrong with the 3D model."}),children:e.jsx(ce,{})})})})})})}H(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(ue,{})}));export{ie as E,ve as s,D as u};
