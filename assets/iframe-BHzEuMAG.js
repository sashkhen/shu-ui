const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Button.stories-Ba0sJmvu.js","./jsx-runtime-CkxqCPlQ.js","./index-DJO9vBfz.js","./Loader-DRSetZHN.js","./Loader-CBbN_Q7T.css","./Button-DvTzE7p3.css","./Loader.stories-BXInmSNr.js","./entry-preview-CBvjGUOp.js","./chunk-XP5HYGXS-BGCqD1aY.js","./index-DJdX7xnk.js","./entry-preview-docs-CoUKQ3i9.js","./index-j_8AUxV0.js","./preview-D77C14du.js","./index-DrFu-skq.js","./preview-BWzBA1C2.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const R="modulepreload",L=function(e,n){return new URL(e,n).href},p={},o=function(n,l,u){let t=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),d=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));t=Promise.allSettled(l.map(s=>{if(s=L(s,u),s in p)return;p[s]=!0;const a=s.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(!!u)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===s&&(!a||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":R,a||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),a)return new Promise((m,E)=>{c.addEventListener("load",m),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=i,window.dispatchEvent(_),!_.defaultPrevented)throw i}return t.then(i=>{for(const _ of i||[])_.status==="rejected"&&r(_.reason);return n().catch(r)})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,O=T({page:"preview"});P.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const S={"./src/components/Button/Button.stories.tsx":async()=>o(()=>import("./Button.stories-Ba0sJmvu.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/components/Loader/Loader.stories.tsx":async()=>o(()=>import("./Loader.stories-BXInmSNr.js"),__vite__mapDeps([6,3,1,2,4]),import.meta.url)};async function y(e){return S[e]()}const{composeConfigs:I,PreviewWeb:V,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(e=[])=>{const n=await Promise.all([e[0]??o(()=>import("./entry-preview-CBvjGUOp.js"),__vite__mapDeps([7,8,2,9]),import.meta.url),e[1]??o(()=>import("./entry-preview-docs-CoUKQ3i9.js"),__vite__mapDeps([10,8,11,2]),import.meta.url),e[2]??o(()=>import("./preview-bAry8KZa.js"),[],import.meta.url),e[3]??o(()=>import("./preview-DcRM9yLx.js"),[],import.meta.url),e[4]??o(()=>import("./preview-aVwhiz9X.js"),[],import.meta.url),e[5]??o(()=>import("./preview-D77C14du.js"),__vite__mapDeps([12,13]),import.meta.url),e[6]??o(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),e[7]??o(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),e[8]??o(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([14,13]),import.meta.url),e[9]??o(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),e[10]??o(()=>import("./preview-BJ6EHSBF.js"),[],import.meta.url),e[11]??o(()=>import("./preview-CADA8DHW.js"),[],import.meta.url)]);return I(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(y,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};