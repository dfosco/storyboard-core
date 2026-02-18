import{j as e,S as H,I as cs,T as L,U as pn,N as Ct,a as tt,b as Fn,C as ls,c as ds,B as X,d as us,F as O,A as we,e as pe,f as ps,g as hs,L as nt,h as hn,u as ms,i as gs,k as fs,l as bs}from"./vendor-primer-Cp2w2YFd.js";import{b,u as qn,O as Vn,f as Ut,g as xs,L as ge,h as vs,i as ys,j as js}from"./vendor-react-BQyrhFMj.js";import{C as ae,V as u,T as g,D as Q,R as Me,B as Be,a as ws,b as At,P as _s,S as mn,F as y,c as ye,d as ee,e as ve,A as gn,M as _e}from"./vendor-reshaped-DIoD2FDs.js";import{o as Ss,M as Wn,p as Ue,l as Ie,k as Fe,q as Ft,r as ht,s as qe,t as Ne,u as Ee,v as qt,w as Vt,x as Gn,H as Wt,y as mt,F as ks,z as Cs,m as Es,L as Is,B as Ns,R as gt,D as Jn,E as Yn,J as Ts,K as Ls,N as Ps,O as As,Q as Kn,U as Xn,V as Rs,W as $s,c as fn,Y as Os,Z as zs,b as Ds,_ as Ms,$ as bn,a0 as Ye}from"./vendor-octicons-CjKpnuJU.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function st(t,n){const r={...t};for(const o of Object.keys(n)){const s=n[o],a=t[o];s!==null&&typeof s=="object"&&!Array.isArray(s)&&a!==null&&typeof a=="object"&&!Array.isArray(a)?r[o]=st(a,s):r[o]=s}return r}let G={scenes:{},objects:{},records:{}};function Bs(t){if(!t||typeof t!="object")throw new Error("[storyboard-core] init() requires { scenes, objects, records }");G={scenes:t.scenes||{},objects:t.objects||{},records:t.records||{}}}function Rt(t,n){if(n&&G[n]?.[t]!=null)return G[n][t];if(!n){for(const r of["scenes","objects","records"])if(G[r]?.[t]!=null)return G[r][t]}if(n==="scenes"||!n){const r=t.toLowerCase();for(const o of Object.keys(G.scenes))if(o.toLowerCase()===r)return G.scenes[o]}throw new Error(`Data file not found: ${t}${n?` (type: ${n})`:""}`)}function Oe(t,n=new Set){if(t===null||typeof t!="object")return t;if(Array.isArray(t))return t.map(o=>Oe(o,n));if(t.$ref&&typeof t.$ref=="string"){const o=t.$ref;if(n.has(o))throw new Error(`Circular $ref detected: ${o}`);n.add(o);const s=Rt(o,"objects");return Oe(s,n)}const r={};for(const[o,s]of Object.entries(t))r[o]=Oe(s,n);return r}function Hs(t){if(G.scenes[t]!=null)return!0;const n=t.toLowerCase();for(const r of Object.keys(G.scenes))if(r.toLowerCase()===n)return!0;return!1}function Zn(t="default"){let n;try{n=Rt(t,"scenes")}catch{throw new Error(`Failed to load scene: ${t}`)}if(Array.isArray(n.$global)){const r=n.$global;delete n.$global;let o={};for(const s of r)try{let a=Rt(s);a=Oe(a),o=st(o,a)}catch(a){console.warn(`Failed to load $global: ${s}`,a)}n=st(o,n)}return n=Oe(n),structuredClone(n)}function Gt(t){const n=G.records[t];if(n==null)throw new Error(`Record not found: ${t}`);if(!Array.isArray(n))throw new Error(`Record "${t}" must be an array, got ${typeof n}`);return structuredClone(n)}function Us(t,n){return Gt(t).find(o=>o.id===n)??null}function Qn(t,n){if(t==null||typeof n!="string"||n==="")return;const r=n.split(".");let o=t;for(const s of r){if(o==null||typeof o!="object")return;o=o[s]}return o}function He(t){if(Array.isArray(t))return t.map(He);if(t!==null&&typeof t=="object"){const n={};for(const r of Object.keys(t))n[r]=He(t[r]);return n}return t}function ot(t,n,r){const o=n.split(".");let s=t;for(let a=0;a<o.length-1;a++){const i=o[a];(s[i]==null||typeof s[i]!="object")&&(s[i]=/^\d+$/.test(o[a+1])?[]:{}),s=s[i]}s[o[o.length-1]]=r}function ft(){const t=window.location.hash.replace(/^#/,"");return new URLSearchParams(t)}function er(t){const n=t.toString();window.location.hash=n}function tr(t){return ft().get(t)}function me(t,n){const r=ft();r.set(t,String(n)),er(r)}function nr(){const t=ft(),n={};for(const[r,o]of t.entries())n[r]=o;return n}function at(t){const n=ft();n.delete(t),er(n)}const bt="storyboard:";function xt(t){try{return localStorage.getItem(bt+t)}catch{return null}}function W(t,n){try{localStorage.setItem(bt+t,String(n)),Jt()}catch{}}function it(t){try{localStorage.removeItem(bt+t),Jt()}catch{}}function rr(t){const n=()=>{sr(),t()};return window.addEventListener("storage",n),window.addEventListener("storyboard-storage",n),()=>{window.removeEventListener("storage",n),window.removeEventListener("storyboard-storage",n)}}let $e=null;function sr(){$e=null}function or(){if($e!==null)return $e;try{const t=[];for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);r&&r.startsWith(bt)&&t.push(r+"="+localStorage.getItem(r))}return $e=t.sort().join("&"),$e}catch{return""}}function Jt(){sr(),window.dispatchEvent(new Event("storyboard-storage"))}const Yt="__hide__",ct="historyState",Se="currentState",je="nextState",xn=200;function ze(){return xt(Yt)==="1"}function Fs(){Ve(),W(Yt,"1");const t=new URL(window.location.href);t.searchParams.delete("hide"),t.hash="",window.history.replaceState(window.history.state,"",t.toString())}function qs(){const t=We();if(t){window.location.hash="";const n=new URLSearchParams(t);for(const[r,o]of n.entries())me(r,o)}it(Yt),Js("show")}function vt(){return window.location.pathname}function ar(){return new URLSearchParams(window.location.hash.replace(/^#/,"")).toString()}function Ve(t,n){const r=t!==void 0?t:ar(),o=n!==void 0?n:vt(),s=yt(),a=jt();if(a!==null&&s[a]){const[,c,h]=s[a];if(c===o&&h===r)return}const i=a!==null?s.slice(0,a+1):s,l=i.length,d=[l,o,r],p=[...i,d];if(p.length>xn){const c=p.slice(p.length-xn);for(let h=0;h<c.length;h++)c[h]=[h,c[h][1],c[h][2]];W(ct,JSON.stringify(c)),W(Se,String(c.length-1))}else W(ct,JSON.stringify(p)),W(Se,String(l));it(je)}function yt(){const t=xt(ct);if(!t)return[];try{const n=JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}}function jt(){const t=xt(Se);if(t===null)return null;const n=parseInt(t,10);return Number.isNaN(n)?null:n}function Vs(){const t=xt(je);if(t===null)return null;const n=parseInt(t,10);return Number.isNaN(n)?null:n}function We(){const t=jt();if(t===null)return null;const n=yt();return n[t]?n[t][2]:null}function ir(){const t=jt();if(t===null)return null;const n=yt();return n[t]?n[t][1]:null}function cr(t){const n=We();return n?new URLSearchParams(n).get(t):null}function vn(t,n){const r=We()||"",o=new URLSearchParams(r);o.set(t,String(n)),Ve(o.toString(),ir()||vt())}function yn(t){const n=We()||"",r=new URLSearchParams(n);r.delete(t),Ve(r.toString(),ir()||vt())}function Ws(){const t=We();if(!t)return{};const n=new URLSearchParams(t),r={};for(const[o,s]of n.entries())r[o]=s;return r}function jn(){if(ze())return;const t=vt(),n=ar(),r=yt(),o=jt();if(!n&&!t&&r.length===0)return;const s=r.findIndex(([,l,d])=>l===t&&d===n);if(s===-1){Ve(n,t);return}if(s===o)return;const a=o!==null?o-1:null,i=Vs();if(a!==null&&s===a)W(je,String(o)),W(Se,String(s));else if(i!==null&&s===i){const l=i+1;r[l]?W(je,String(l)):it(je),W(Se,String(s))}else{it(je),W(Se,String(s));const l=r.slice(0,s+1);W(ct,JSON.stringify(l))}Jt()}function Gs(){Ve(),window.addEventListener("hashchange",()=>jn()),window.addEventListener("popstate",()=>jn())}function Js(t){const n=new URL(window.location.href);n.searchParams.has(t)&&(n.searchParams.delete(t),window.history.replaceState(window.history.state,"",n.toString()))}function lt(){const t=new URL(window.location.href);if(t.searchParams.has("hide")){Fs();return}if(t.searchParams.has("show")){qs();return}}function Ys(){lt(),window.addEventListener("popstate",()=>lt())}function wt(t){return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)}function Kt(){return window.location.hash}const Ks="modulepreload",Xs=function(t){return"/storyboard/branch--comments-system/"+t},wn={},J=function(n,r,o){let s=Promise.resolve();if(r&&r.length>0){let d=function(p){return Promise.all(p.map(c=>Promise.resolve(c).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");s=d(r.map(p=>{if(p=Xs(p),p in wn)return;wn[p]=!0;const c=p.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${h}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Ks,c||(m.as="script"),m.crossOrigin="",m.href=p,l&&m.setAttribute("nonce",l),document.head.appendChild(m),c)return new Promise((x,E)=>{m.addEventListener("load",x),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&a(l.reason);return n().catch(a)})};let ke=null;function Zs(t){if(!t||!t.comments){ke=null;return}const n=t.comments;ke={repo:{owner:n.repo?.owner??"",name:n.repo?.name??""},discussions:{category:n.discussions?.category??"Storyboard Comments"}}}function lr(){return ke}function $t(){return ke!==null&&ke.repo.owner!==""&&ke.repo.name!==""}function Qs(t){let n=0;for(let r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return Math.abs(n)}function eo(t,n=[]){for(const r of n)if(r.toLowerCase()===t.toLowerCase())return`/${r}?scene=${encodeURIComponent(t)}`;try{const r=Zn(t);if(r?.route)return`${r.route.startsWith("/")?r.route:`/${r.route}`}?scene=${encodeURIComponent(t)}`}catch{}return`/?scene=${encodeURIComponent(t)}`}const to={navigation:{$ref:"navigation"},user:{name:"John Doe",username:"johndoe",role:"admin",avatar:"https://avatars.githubusercontent.com/u/1?v=4",profile:{bio:"Designer & developer",location:"San Francisco, CA"}},projects:[{id:1,name:"primer-react",description:"React components for the Primer Design System",owner:{name:"GitHub",avatar:"https://avatars.githubusercontent.com/u/9919?v=4"},stars:2500,issues:42},{id:2,name:"storyboard",description:"Prototyping meta-framework",owner:{name:"Jane Doe",avatar:"https://avatars.githubusercontent.com/u/1?v=4"},stars:128,issues:7}],settings:{theme:"dark_dimmed",notifications:!0,language:"en"}},no={user:{$ref:"jane-doe"},navigation:{$ref:"navigation"},projects:[{id:1,name:"primer-react",description:"React components for the Primer Design System",owner:{name:"GitHub",avatar:"https://avatars.githubusercontent.com/u/9919?v=4"},stars:2500,issues:42},{id:2,name:"storyboard",description:"Prototyping meta-framework",owner:{name:"Jane Doe",avatar:"https://avatars.githubusercontent.com/u/1?v=4"},stars:128,issues:7}],settings:{theme:"dark_dimmed",notifications:!0,language:"en"},signup:{fullName:"",email:"",password:"",organization:{name:"",size:"",role:""},workspace:{region:"",plan:"starter",newsletter:!1,agreeTerms:!1}}},ro={$global:["security-advisory-navigation"],advisory:{$ref:"security-advisory"}},so={$global:["finch-pearl-navigation"],repositories:{$ref:"finch-pearl-repositories"}},oo={id:10,title:"Remote code injection in Log4j",breadcrumb:"Dependabot alerts",state:"fixed",openedAgo:"4 years ago",fixedAgo:"3 years ago",package:{name:"org.apache.logging.log4j:log4j-core",ecosystem:"Maven",affectedVersions:">= 2.13.0, < 2.15.0",patchedVersion:"2.15.0"},severity:{level:"Critical",score:"10.0 / 10",cvssMetrics:[{label:"Attack vector",value:"Network"},{label:"Attack complexity",value:"Low"},{label:"Privileges required",value:"None"},{label:"User interaction",value:"None"},{label:"Scope",value:"Changed"},{label:"Confidentiality",value:"High"},{label:"Integrity",value:"High"},{label:"Availability",value:"High"}],cvssVector:"CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H/E:H"},epss:{score:"94.358%",percentile:"100th percentile"},tags:["Patch available"],weaknesses:["CWE-20","CWE-400","CWE-502","CWE-917"],cveId:"CVE-2021-44228",ghsaId:"GHSA-jfh8-c2jp-5v3q",timeline:[{actor:"dependabot",actorAvatar:"https://avatars.githubusercontent.com/in/29110?v=4",isBot:!0,action:"opened this",timeAgo:"4 years ago"},{actor:"dependabot",actorAvatar:"https://avatars.githubusercontent.com/in/29110?v=4",isBot:!0,action:"closed this as completed",timeAgo:"3 years ago"}]},ao={topnav:[{icon:"code",label:"Code",url:"#"},{icon:"issue-opened",label:"Issues",url:"#"},{icon:"git-pull-request",label:"Pull requests",url:"#"},{icon:"people",label:"Agents",url:"#"},{icon:"play",label:"Actions",url:"#"},{icon:"project",label:"Projects",url:"#"},{icon:"star",label:"Models",url:"#"},{icon:"book",label:"Wiki",url:"#"},{icon:"shield",label:"Security",url:"#",counter:95,current:!0},{icon:"graph",label:"Insights",url:"#"},{icon:"gear",label:"Settings",url:"#"}]},io={primary:[{label:"Overview",url:"/Overview",icon:"home"},{label:"Issues",url:"/Issues",icon:"issue-opened"},{label:"Pull Requests",url:"#",icon:"git-pull-request"},{label:"Discussions",url:"#",icon:"comment-discussion"}],secondary:[{label:"Settings",url:"#",icon:"gear"},{label:"Help",url:"#",icon:"question"}]},co={name:"Jane Doe",username:"janedoe",role:"admin",avatar:"https://avatars.githubusercontent.com/u/1?v=4",profile:{bio:"Designer & developer",location:"San Francisco, CA"}},lo=[{name:"test-webdriverio-update-copilot-issue",description:"",language:null,forks:0,stars:0,url:"#"},{name:"dependabot-copilot-autofix",description:"Testing Autofix using Copilot Workspaces",language:"JavaScript",forks:0,stars:0,url:"#"},{name:"alona-copilot",description:"",language:null,forks:0,stars:0,url:"#"},{name:"spike-dependabot-snapshot-action",description:"Copilot-driven spike into using Dependabot as a dependency detector",language:"JavaScript",forks:0,stars:0,url:"#"},{name:"ghas-copilot-geekmasher",description:"",language:"JavaScript",forks:0,stars:0,url:"#"},{name:"copilot-autofix-demo-by-ot",description:"",language:"JavaScript",forks:0,stars:0,url:"#"}],uo={topnav:[{icon:"home",label:"Overview",url:"/Overview"},{icon:"repo",label:"Repositories",url:"/Repositories",counter:"5k+",current:!0},{icon:"project",label:"Projects",url:"#",counter:25},{icon:"package",label:"Packages",url:"#",counter:21},{icon:"people",label:"Teams",url:"#",counter:132},{icon:"person",label:"People",url:"#",counter:571},{icon:"shield",label:"Security",url:"#"},{icon:"graph",label:"Insights",url:"#"},{icon:"gear",label:"Settings",url:"#"}],sidenav:[{label:"All",url:"#",icon:"repo",current:!0},{label:"Contributed by me",url:"#",icon:"git-pull-request"},{label:"Adminable by me",url:"#",icon:"person"},{label:"Public",url:"#",icon:"eye"},{label:"Internal",url:"#",icon:"lock"},{label:"Private",url:"#",icon:"lock"},{label:"Sources",url:"#",icon:"code"},{label:"Forks",url:"#",icon:"repo-forked"},{label:"Archived",url:"#",icon:"archive"},{label:"Templates",url:"#",icon:"repo-template"}]},po=[{id:"refactor-auth-sso",identifier:"FIL-10",title:"Refactor authentication flow to support SSO providers",description:"Our current auth flow only supports email/password login. We need to extend it to support SSO providers (Google, Okta, Azure AD) for enterprise customers.",status:"todo",priority:"high",labels:["Auth","Backend","Feature"],assignee:null,project:null,estimate:5,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-17T10:50:00Z",acceptanceCriteria:["Users can authenticate via Google OAuth 2.0","Users can authenticate via SAML-based SSO (Okta, Azure AD)","Existing email/password flow remains unchanged","Session tokens are issued consistently regardless of auth method","Admin panel includes SSO configuration settings"],technicalNotes:["Use the existing AuthService class as the base","Add a provider strategy pattern to abstract login methods","Store provider metadata in the identity_providers table","Redirect URI callback must handle both web and mobile clients"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"10min ago"}]},{id:"fix-rate-limiter-bypass",identifier:"FIL-9",title:"Fix rate limiter bypass on batch endpoints",description:"The rate limiter can be bypassed by splitting a large request into multiple smaller batch calls. Each sub-request is counted as a single hit instead of being weighted by payload size.",status:"in_progress",priority:"urgent",labels:["Bug","Security","Backend"],assignee:"danielfosco",assigneeAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",project:"Platform Infrastructure",estimate:3,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-16T14:20:00Z",acceptanceCriteria:["Batch endpoints count each item in the payload toward the rate limit","Rate limit headers reflect weighted counts","Existing single-request endpoints are unaffected"],technicalNotes:["Update RateLimiterMiddleware to accept a weight function","Batch controller should pass payload.length as weight","Add integration tests for weighted rate limiting"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"1 day ago"},{type:"comment",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"6 hours ago",body:"Started investigating — the middleware doesn't have access to parsed body at the point it runs. May need to restructure."}]},{id:"add-webhook-retry-logic",identifier:"FIL-8",title:"Add exponential backoff retry logic for webhook deliveries",description:"Webhook deliveries currently fail silently on timeout. We need retry logic with exponential backoff and a dead-letter queue for persistently failing endpoints.",status:"todo",priority:"medium",labels:["Feature","Backend"],assignee:null,project:"Platform Infrastructure",estimate:8,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-15T09:00:00Z",acceptanceCriteria:["Failed webhook deliveries are retried up to 5 times","Retry intervals follow exponential backoff (1s, 2s, 4s, 8s, 16s)","After all retries, the event is moved to a dead-letter queue","Delivery status is visible in the admin dashboard"],technicalNotes:["Use the existing job queue (BullMQ) for retry scheduling","Add a webhook_deliveries table to track attempts","Dead-letter events should be replayable from the admin UI"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"2 days ago"}]},{id:"dashboard-loading-skeleton",identifier:"FIL-7",title:"Add loading skeletons to dashboard widgets",description:"Dashboard widgets show a blank space while data is loading. Add skeleton loaders to improve perceived performance.",status:"done",priority:"low",labels:["Feature","Frontend"],assignee:"danielfosco",assigneeAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",project:"Dashboard",estimate:2,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-12T16:30:00Z",acceptanceCriteria:["All dashboard cards show skeleton loaders while fetching data","Skeleton matches the shape of the loaded content","Transition from skeleton to content is smooth"],technicalNotes:["Use Reshaped Skeleton component","Wrap each StatCard in a loading boundary"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"5 days ago"},{type:"comment",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"3 days ago",body:"Done — merged in FIL-7-skeletons branch."}]},{id:"migrate-env-config",identifier:"FIL-6",title:"Migrate environment config to typed schema validation",description:"Environment variables are currently accessed via raw process.env lookups with no validation. Migrate to a typed config schema using zod so missing or malformed values are caught at startup.",status:"todo",priority:"medium",labels:["Backend","DevEx"],assignee:null,project:null,estimate:3,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-10T11:00:00Z",acceptanceCriteria:["All environment variables are defined in a single config schema","Server fails fast on startup if required variables are missing","Types are inferred from the schema — no manual type assertions"],technicalNotes:["Use zod for schema definition and parsing","Create src/config.ts as the single source of truth","Replace all process.env.X references with config.X"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"1 week ago"}]}],ho=[{id:"welcome-to-storyboard",title:"Welcome to Storyboard",date:"2026-02-14",author:"Jane Doe",summary:"An introduction to building prototypes with Storyboard — the meta-framework for design system exploration.",body:`Storyboard is a prototyping meta-framework that lets you build interactive UI prototypes powered by real data. Instead of hard-coding sample content, you define data files that feed into your pages automatically.

Each page can load a scene (its data context), reference shared objects, and even render parameterized content from record collections — like this very blog post.

Get started by creating a \`.scene.json\` file and a page component. The data flows in, and you focus on the design.`},{id:"data-driven-prototyping",title:"Data-Driven Prototyping",date:"2026-02-13",author:"Jane Doe",summary:"How scenes, objects, and records work together to power realistic prototypes.",body:`Traditional prototyping tools force you to duplicate content across screens. Storyboard takes a different approach: your data lives in JSON files, and pages consume it through hooks.

**Scenes** provide the full data context for a page. **Objects** are reusable fragments — a user profile, a navigation config — that scenes reference via \`$ref\`. **Records** are collections that power parameterized pages, like blog posts or product listings.

This separation means you can swap data without touching UI code, test edge cases by editing JSON, and share data fragments across multiple pages.`},{id:"design-system-exploration",title:"Exploring Design Systems",date:"2026-02-12",author:"Jane Doe",summary:"Using Storyboard to explore and compare design systems like Primer and Reshaped.",body:`One of Storyboard's strengths is its design system agnosticism. While it ships with Primer React as the default, you can bring any design system — Reshaped, Radix, Chakra, or your own.

Each page is independent: one page can use Primer components while another uses Reshaped. This makes Storyboard ideal for comparing design systems side by side, exploring component APIs, and building proof-of-concept pages before committing to a system.

The key is that the data layer stays the same regardless of which components render it.`}],dr={"other-scene":to,default:no,SecurityAdvisory:ro,Repositories:so},mo={"security-advisory":oo,"security-advisory-navigation":ao,navigation:io,"jane-doe":co,"finch-pearl-repositories":lo,"finch-pearl-navigation":uo},go={issues:po,posts:ho};Bs({scenes:dr,objects:mo,records:go});const _t=b.createContext(null);function fo(){return new URLSearchParams(window.location.search).get("scene")}function bo(){const t=window.location.pathname.replace(/\/+$/,"")||"/";return t==="/"?"index":t.split("/").pop()||"index"}function xo({sceneName:t,recordName:n,recordParam:r,children:o}){const s=bo(),a=fo()||t||(Hs(s)?s:"default"),i=qn(),{data:l,error:d}=b.useMemo(()=>{try{let c=Zn(a);if(n&&r&&i[r]){const h=Us(n,i[r]);h&&(c=st(c,{record:h}))}return{data:c,error:null}}catch(c){return{data:null,error:c.message}}},[a,n,r,i]),p={data:l,error:d,loading:!1,sceneName:a};return d?e.jsxs("span",{style:{color:"var(--fgColor-danger, #f85149)"},children:["Error loading scene: ",d]}):e.jsx(_t.Provider,{value:p,children:o})}function z(t){const n=b.useContext(_t);if(n===null)throw new Error("useSceneData must be used within a <StoryboardProvider>");const{data:r,loading:o,error:s}=n,a=b.useSyncExternalStore(wt,Kt),i=b.useSyncExternalStore(rr,or);return b.useMemo(()=>{if(o||s||r==null)return;const d=ze(),p=d?cr:tr,c=d?Ws:nr;if(!t){const A=c(),M=Object.keys(A);if(M.length===0)return r;const D=He(r);for(const U of M)ot(D,U,A[U]);return D}const h=p(t);if(h!==null)return h;const m=t+".",x=c(),E=Object.keys(x).filter(A=>A.startsWith(m)),_=Qn(r,t);if(E.length>0&&_!==void 0){const A=He(_);for(const M of E){const D=M.slice(m.length);ot(A,D,x[M])}return A}return _===void 0?(console.warn(`[useSceneData] Path "${t}" not found in scene data.`),{}):_},[r,o,s,t,a,i])}function j(t){const n=b.useContext(_t);if(n===null)throw new Error("useOverride must be used within a <StoryboardProvider>");const{data:r}=n,o=ze(),s=r!=null?Qn(r,t):void 0,a=b.useCallback(()=>tr(t),[t]),i=b.useSyncExternalStore(wt,a);b.useSyncExternalStore(rr,or);let l;if(o){const c=cr(t);l=c!==null?c:s}else l=i!==null?i:s;const d=b.useCallback(c=>{ze()||me(t,c),vn(t,c)},[t]),p=b.useCallback(()=>{ze()||at(t),yn(t)},[t]);return[l,d,p]}function vo(){const t=b.useContext(_t);if(t===null)throw new Error("useScene must be used within a <StoryboardProvider>");const n=b.useCallback(r=>{const o=new URL(window.location.href);o.searchParams.set("scene",r),window.location.href=o.toString()},[]);return{sceneName:t.sceneName,switchScene:n}}function ur(t,n){const r=nr(),o=`record.${n}.`,s=Object.keys(r).filter(l=>l.startsWith(o));if(s.length===0)return t;const a=He(t),i={};for(const l of s){const d=l.slice(o.length),p=d.indexOf(".");if(p===-1)continue;const c=d.slice(0,p),h=d.slice(p+1);i[c]||(i[c]={}),i[c][h]=r[l]}for(const[l,d]of Object.entries(i)){const p=a.find(c=>c.id===l);if(p)for(const[c,h]of Object.entries(d))ot(p,c,h);else{const c={id:l};for(const[h,m]of Object.entries(d))ot(c,h,m);a.push(c)}}return a}function pr(t,n="id"){const o=qn()[n],s=b.useSyncExternalStore(wt,Kt);return b.useMemo(()=>{if(!o)return null;try{const a=Gt(t);return ur(a,t).find(l=>l[n]===o)??null}catch(a){return console.error(`[useRecord] ${a.message}`),null}},[t,n,o,s])}function hr(t){const n=b.useSyncExternalStore(wt,Kt);return b.useMemo(()=>{try{const r=Gt(t);return ur(r,t)}catch(r){return console.error(`[useRecords] ${r.message}`),[]}},[t,n])}function de(t,n,r){return j(`record.${t}.${n}.${r}`)}function yo(t,n=""){const r=n.replace(/\/+$/,"");document.addEventListener("click",s=>{if(s.metaKey||s.ctrlKey||s.shiftKey||s.altKey)return;const a=s.target.closest("a[href]");if(!a||a.target==="_blank")return;const i=new URL(a.href,window.location.origin);if(i.origin!==window.location.origin)return;const l=window.location.hash,d=l&&l!=="#",c=i.hash&&i.hash!=="#"?i.hash:d?l:"";let h=i.pathname;r&&h.startsWith(r)&&(h=h.slice(r.length)||"/"),s.preventDefault(),t.navigate(h+i.search+c),setTimeout(lt,0)});const o=t.navigate.bind(t);t.navigate=(s,a)=>{const i=window.location.hash;return i&&i!=="#"&&typeof s=="string"&&!s.includes("#")&&(s=s+i),o(s,a).then(d=>(lt(),d))}}const Ge=b.createContext(null);function jo(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",backgroundColor:"var(--bgColor-default, #0d1117)"},children:[e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",style:{animation:"spin 0.8s linear infinite"},children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"var(--fgColor-muted, #484f58)",strokeWidth:"2.5",opacity:"0.25"}),e.jsx("path",{d:"M12 2a10 10 0 0 1 10 10",stroke:"var(--fgColor-default, #e6edf3)",strokeWidth:"2.5",strokeLinecap:"round"})]}),e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg) } }"})]})}function wo(){return e.jsx(xo,{children:e.jsx(b.Suspense,{fallback:e.jsx(jo,{}),children:e.jsx(Vn,{})})})}const mr=Object.freeze(Object.defineProperty({__proto__:null,default:wo},Symbol.toStringTag,{value:"Module"})),_o="_navItem_ec50i_1",So="_active_ec50i_16",_n={navItem:_o,active:So},ko=[{label:"Overview",path:"/Dashboard"},{label:"Issues",path:"/issues"},{label:"Projects",path:"/Dashboard"},{label:"Views",path:"/Dashboard"}];function dt({orgName:t,activePage:n,userInfo:r}){const o=Ut();return e.jsx(ae,{padding:4,children:e.jsxs(u,{direction:"column",gap:2,children:[e.jsx(g,{variant:"featured-3",weight:"bold",children:t||"—"}),e.jsx(Q,{}),e.jsx("nav",{children:e.jsx(u,{direction:"column",gap:0,children:ko.map(s=>e.jsx("button",{type:"button",className:`${_n.navItem} ${n===s.label?_n.active:""}`,onClick:()=>o(s.path),children:e.jsx(g,{variant:"body-3",weight:n===s.label?"bold":"regular",children:s.label})},s.label))})}),r&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{}),e.jsxs(u,{direction:"column",gap:1,paddingTop:1,children:[e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:r.name||"—"}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:r.role||"—"})]})]})]})})}function be(t){return t==null||t===""?"—":String(t)}function Ke({label:t,value:n,change:r,color:o}){return e.jsx(ae,{padding:5,children:e.jsxs(u,{direction:"column",gap:2,children:[e.jsx(g,{variant:"body-3",color:"neutral-faded",children:t}),e.jsx(g,{variant:"featured-2",weight:"bold",children:n}),e.jsx(g,{variant:"caption-1",color:o||"positive",children:r})]})})}function Ae({label:t,value:n,max:r,color:o}){return e.jsxs(u,{direction:"column",gap:1,children:[e.jsxs(u,{direction:"row",justify:"space-between",children:[e.jsx(g,{variant:"body-3",children:t}),e.jsx(g,{variant:"body-3",weight:"medium",children:n})]}),e.jsx(_s,{value:typeof r=="number"?parseFloat(n)/r*100:parseFloat(n),color:o,size:"small",attributes:{"aria-label":t}})]})}const Co=[{label:"Team standup",time:"Today, 10:00"},{label:"Architecture review",time:"Today, 11:30"},{label:"Lunch",time:"Today, 12:30"},{label:"Sprint planning",time:"Today, 14:00"},{label:"Deploy v2.4",time:"Today, 17:00"}];function Eo(){const t=z("signup.fullName"),n=z("signup.organization.name"),r=z("signup.organization.size"),o=z("signup.organization.role"),s=z("signup.workspace.region"),a=z("signup.workspace.plan");return e.jsx(Me,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(u,{backgroundColor:"page",minHeight:"100vh",padding:12,children:e.jsxs(u,{direction:"row",align:"start",gap:8,wrap:"no-wrap",children:[e.jsx(u.Item,{columns:2,children:e.jsx(dt,{orgName:be(n),activePage:"Overview",userInfo:{name:be(t),role:be(o)}})}),e.jsx(u.Item,{columns:10,direction:"column",align:"center",justify:"center",children:e.jsxs(u,{direction:"column",maxWidth:"80%",gap:4,children:[e.jsxs(u,{direction:"row",justify:"space-between",align:"center",children:[e.jsx(g,{variant:"featured-2",weight:"bold",children:"Overview"}),e.jsxs(u,{direction:"row",gap:2,align:"center",children:[e.jsxs(Be,{color:"positive",children:[be(a)," plan"]}),e.jsx(Be,{variant:"faded",children:be(s)})]})]}),e.jsxs(u,{direction:"row",gap:3,children:[e.jsx(u.Item,{columns:3,children:e.jsx(Ke,{label:"Active Users",value:"0",change:"No data yet",color:"neutral-faded"})}),e.jsx(u.Item,{columns:3,children:e.jsx(Ke,{label:"Deployments",value:"0",change:"No data yet",color:"neutral-faded"})}),e.jsx(u.Item,{columns:3,children:e.jsx(Ke,{label:"New Members",value:"1",change:"That's you!",color:"primary"})}),e.jsx(u.Item,{columns:3,children:e.jsx(Ke,{label:"Team Size",value:be(r),change:"Current plan capacity",color:"primary"})})]}),e.jsxs(u,{direction:"row",gap:4,children:[e.jsx(u.Item,{columns:5,children:e.jsxs(u,{direction:"column",gap:4,children:[e.jsx(ae,{padding:4,children:e.jsx(ws,{})}),e.jsx(ae,{padding:5,children:e.jsxs(u,{direction:"column",gap:3,children:[e.jsx(g,{variant:"body-2",weight:"bold",children:"Schedule"}),e.jsx(u,{direction:"column",gap:2,children:Co.map(i=>e.jsx(At,{name:`schedule-${i.label}`,children:e.jsxs(u,{direction:"column",children:[e.jsx(g,{variant:"body-3",children:i.label}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:i.time})]})},i.label))})]})})]})}),e.jsx(u.Item,{grow:!0,children:e.jsxs(u,{direction:"column",gap:4,children:[e.jsx(ae,{padding:5,children:e.jsxs(u,{direction:"column",gap:4,children:[e.jsx(g,{variant:"body-2",weight:"bold",children:"Metrics"}),e.jsx(Ae,{label:"Performance",value:"0",max:100,color:"neutral-faded"}),e.jsx(Ae,{label:"Monthly revenue goal",value:"0",max:100,color:"neutral-faded"}),e.jsx(Ae,{label:"Error rate",value:"0",max:100,color:"neutral-faded"}),e.jsx(Ae,{label:"User acquisition",value:"0",max:100,color:"neutral-faded"}),e.jsx(Ae,{label:"Releases shipped",value:"0",max:100,color:"neutral-faded"})]})}),e.jsx(ae,{padding:5,children:e.jsxs(u,{direction:"column",gap:3,children:[e.jsx(g,{variant:"body-2",weight:"bold",children:"Recent activity"}),e.jsx(Q,{}),e.jsxs(u,{direction:"column",gap:4,align:"center",paddingBlock:6,children:[e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"No activity yet"}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"Deployments and events will appear here once your workspace is active."})]})]})})]})})]})]})})]})})})}const gr=Object.freeze(Object.defineProperty({__proto__:null,default:Eo},Symbol.toStringTag,{value:"Module"}));var Et={exports:{}},It,Sn;function Io(){if(Sn)return It;Sn=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return It=t,It}var Nt,kn;function No(){if(kn)return Nt;kn=1;var t=Io();function n(){}function r(){}return r.resetWarningCache=n,Nt=function(){function o(i,l,d,p,c,h){if(h!==t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}o.isRequired=o;function s(){return o}var a={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:s,element:o,elementType:o,instanceOf:s,node:o,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a},Nt}var Cn;function To(){return Cn||(Cn=1,Et.exports=No()()),Et.exports}var Lo=To();const Y=xs(Lo),Po="_header_1282e_1",Ao="_headerContent_1282e_8",Ro="_titleWrapper_1282e_17",$o="_separator_1282e_21",Oo="_subtitle_1282e_25",Re={header:Po,headerContent:Ao,titleWrapper:Ro,separator:$o,subtitle:Oo},zo=[{icon:Ue,label:"Code",current:!0},{icon:Ie,label:"Issues",counter:30},{icon:Fe,label:"Pull Requests",counter:3},{icon:Ft,label:"Discussions"},{icon:ht,label:"Actions"},{icon:qe,label:"Projects",counter:7},{icon:Ne,label:"Security",counter:12},{icon:Ee,label:"Insights"}];function fr({items:t=zo,title:n,subtitle:r}){return e.jsxs(H,{as:"header",className:Re.header,children:[e.jsxs("div",{className:Re.headerContent,children:[e.jsx(cs,{icon:Ss,"aria-label":"Open global navigation menu",unsafeDisableTooltip:!0}),e.jsx(Wn,{size:32}),e.jsxs(H,{direction:"horizontal",gap:"condensed",className:Re.titleWrapper,children:[e.jsx("span",{children:n||"title"}),r&&e.jsxs(e.Fragment,{children:[e.jsx(L,{className:Re.separator,children:"/"}),e.jsx(L,{className:Re.subtitle,children:r||"subtitle"})]})]})]}),e.jsx(pn,{"aria-label":"Repository",children:t.map(o=>e.jsx(pn.Item,{icon:o.icon,"aria-current":o.current?"page":void 0,counter:o.counter,href:o.url,children:o.label},o.label))})]})}fr.propTypes={items:Y.arrayOf(Y.shape({icon:Y.elementType,label:Y.string.isRequired,current:Y.bool,counter:Y.number,url:Y.string})),title:Y.string,subtitle:Y.string};const Do=[{icon:Ie,label:"Open issues",url:"#"},{icon:qt,label:"Your issues",url:"#"},{icon:Vt,label:"Assigned to you",url:"#",current:!0},{icon:Gn,label:"Mentioning you",url:"#"}];function Mo({items:t=Do}){return e.jsx(Ct,{"aria-label":"Navigation",children:t.map(n=>e.jsxs(Ct.Item,{href:n.url,"aria-current":n.current?"page":void 0,children:[n.icon&&e.jsx(Ct.LeadingVisual,{children:e.jsx(n.icon,{})}),n.label]},n.label))})}const Bo="_wrapper_74lhx_1",Ho="_navigation_74lhx_7",Uo="_main_74lhx_13",Fo="_container_74lhx_22",Xe={wrapper:Bo,navigation:Ho,main:Uo,container:Fo};function ie({children:t,title:n,subtitle:r,topnav:o,sidenav:s}){return e.jsxs(H,{className:Xe.container,children:[e.jsx(fr,{title:n,subtitle:r,items:o}),e.jsxs("div",{className:Xe.wrapper,children:[s&&e.jsx("aside",{className:Xe.navigation,children:e.jsx(Mo,{items:s})}),e.jsx("main",{className:Xe.main,children:t})]})]})}function De({name:t,onChange:n,value:r,...o}){const s=b.useContext(Ge),a=s?.prefix&&t?`${s.prefix}.${t}`:t,[i]=j(a||""),[l,d]=b.useState(i??""),p=!!s&&!!t;b.useEffect(()=>{if(p)return s.subscribe(t,m=>d(m))},[p,s,t]),b.useEffect(()=>{p&&i!=null&&(d(i),s.setDraft(t,i))},[]);const c=m=>{p&&(d(m.target.value),s.setDraft(t,m.target.value)),n&&n(m)},h=p?l:r;return e.jsx(tt,{name:t,value:h,onChange:c,...o})}function ue({name:t,onChange:n,value:r,children:o,...s}){const a=b.useContext(Ge),i=a?.prefix&&t?`${a.prefix}.${t}`:t,[l]=j(i||""),[d,p]=b.useState(l??""),c=!!a&&!!t;b.useEffect(()=>{if(c)return a.subscribe(t,x=>p(x))},[c,a,t]),b.useEffect(()=>{c&&l!=null&&(p(l),a.setDraft(t,l))},[]);const h=x=>{c&&(p(x.target.value),a.setDraft(t,x.target.value)),n&&n(x)},m=c?d:r;return e.jsx(Fn,{name:t,value:m,onChange:h,...s,children:o})}ue.Option=Fn.Option;function qo({name:t,onChange:n,checked:r,...o}){const s=b.useContext(Ge),a=s?.prefix&&t?`${s.prefix}.${t}`:t,[i]=j(a||""),l=i==="true"||i===!0,[d,p]=b.useState(l),c=!!s&&!!t;b.useEffect(()=>{if(c)return s.subscribe(t,x=>p(x==="true"||x===!0))},[c,s,t]),b.useEffect(()=>{if(c&&i!=null){const x=i==="true"||i===!0;p(x),s.setDraft(t,x?"true":"false")}},[]);const h=x=>{c&&(p(x.target.checked),s.setDraft(t,x.target.checked?"true":"false")),n&&n(x)},m=c?d:r;return e.jsx(ls,{name:t,checked:m,onChange:h,...o})}function br({name:t,onChange:n,value:r,...o}){const s=b.useContext(Ge),a=s?.prefix&&t?`${s.prefix}.${t}`:t,[i]=j(a||""),[l,d]=b.useState(i??""),p=!!s&&!!t;b.useEffect(()=>{if(p)return s.subscribe(t,m=>d(m))},[p,s,t]),b.useEffect(()=>{p&&i!=null&&(d(i),s.setDraft(t,i))},[]);const c=m=>{p&&(d(m.target.value),s.setDraft(t,m.target.value)),n&&n(m)},h=p?l:r;return e.jsx(ds,{name:t,value:h,onChange:c,...o})}function xr({data:t,onSubmit:n,children:r,...o}){const s=t||null,a=b.useRef({}),i=b.useRef({}),l=b.useCallback(m=>a.current[m],[]),d=b.useCallback((m,x)=>{a.current[m]=x;const E=i.current[m];E&&E(x)},[]),p=b.useCallback((m,x)=>(i.current[m]=x,()=>{delete i.current[m]}),[]),c=m=>{if(m.preventDefault(),s)for(const[x,E]of Object.entries(a.current))me(`${s}.${x}`,E);n&&n(m)},h={prefix:s,getDraft:l,setDraft:d,subscribe:p};return e.jsx(Ge.Provider,{value:h,children:e.jsx("form",{...o,onSubmit:c,children:r})})}const Vo="_container_1ykvj_1",Wo="_title_1ykvj_5",Go="_codeBlock_1ykvj_11",Jo="_form_1ykvj_38",xe={container:Vo,title:Wo,codeBlock:Go,form:Jo};function Yo(){const[t,n,r]=j("user.name"),[o,s,a]=j("user.username"),[i,,l]=j("user.profile.bio"),[d,,p]=j("user.profile.location"),{sceneName:c,switchScene:h}=vo(),m=c==="default"?"other-scene":"default",x=()=>{r(),a(),l(),p()};return e.jsxs("div",{className:xe.container,children:[e.jsx("h2",{className:xe.title,children:"useOverride Demo"}),e.jsxs("p",{children:["Add ",e.jsx("code",{children:"#user.name=Alice"})," to the URL hash to override any value."]}),e.jsxs("section",{children:[e.jsx(L,{as:"h3",fontWeight:"bold",children:"Scene"}),e.jsxs("pre",{className:xe.codeBlock,children:["current: ",c]}),e.jsxs(X,{size:"small",onClick:()=>h(m),children:['Switch to "',m,'"']})]}),e.jsxs("section",{children:[e.jsx(L,{as:"h3",fontWeight:"bold",children:"User"}),e.jsxs("pre",{className:xe.codeBlock,children:[t," (",o,")"]}),e.jsxs("pre",{className:xe.codeBlock,children:[i," · ",d]}),e.jsx(L,{as:"h4",fontWeight:"semibold",fontSize:1,children:"Switch User"}),e.jsxs(us,{children:[e.jsx(X,{size:"small",onClick:()=>n("Alice Chen"),children:"Update name"}),e.jsx(X,{size:"small",onClick:()=>s("alice123"),children:"Update username"})]}),e.jsx(X,{size:"small",variant:"danger",onClick:x,style:{marginLeft:"8px"},children:"Reset"})]}),e.jsx("a",{href:"/storyboard/Overview",children:"hello"}),e.jsxs("section",{children:[e.jsx(L,{as:"h3",fontWeight:"bold",children:"Edit User"}),e.jsxs(xr,{data:"user",className:xe.form,children:[e.jsxs(O,{children:[e.jsx(O.Label,{children:"Name"}),e.jsx(De,{name:"name",placeholder:"Name",size:"small"})]}),e.jsxs(O,{children:[e.jsx(O.Label,{children:"Username"}),e.jsx(De,{name:"username",placeholder:"Username",size:"small"})]}),e.jsxs(O,{children:[e.jsx(O.Label,{children:"Bio"}),e.jsx(br,{name:"profile.bio",placeholder:"Bio"})]}),e.jsxs(O,{children:[e.jsx(O.Label,{children:"Location"}),e.jsx(De,{name:"profile.location",placeholder:"Location",size:"small"})]}),e.jsx(X,{type:"submit",size:"small",children:"Save"})]})]})]})}const Ko=[{icon:Wt,label:"Home",url:"/"},{icon:mt,label:"Forms",url:"/Forms",current:!0}];function Xo(){const[,,t]=j("checkout");return e.jsxs(ie,{title:"Storyboard",subtitle:"Forms",topnav:Ko,children:[e.jsx(L,{as:"h1",fontSize:"larger",children:"Form Components Demo"}),e.jsx(L,{as:"p",color:"fg.muted",children:"Type in the fields below, then click Submit to persist values in the URL hash. Refresh the page or share the URL to restore state."}),e.jsx(xr,{data:"checkout",children:e.jsxs(H,{direction:"vertical",gap:"normal",padding:"normal",children:[e.jsxs(O,{children:[e.jsx(O.Label,{children:"Email"}),e.jsx(De,{name:"email",placeholder:"you@example.com"})]}),e.jsxs(O,{children:[e.jsx(O.Label,{children:"Full Name"}),e.jsx(De,{name:"name",placeholder:"Jane Doe"})]}),e.jsxs(O,{children:[e.jsx(O.Label,{children:"Shipping Address"}),e.jsx(br,{name:"address",placeholder:"123 Main St..."})]}),e.jsxs(O,{children:[e.jsx(O.Label,{children:"Country"}),e.jsxs(ue,{name:"country",children:[e.jsx(ue.Option,{value:"",children:"Select a country"}),e.jsx(ue.Option,{value:"us",children:"United States"}),e.jsx(ue.Option,{value:"ca",children:"Canada"}),e.jsx(ue.Option,{value:"uk",children:"United Kingdom"}),e.jsx(ue.Option,{value:"de",children:"Germany"})]})]}),e.jsxs(O,{children:[e.jsx(qo,{name:"newsletter"}),e.jsx(O.Label,{children:"Subscribe to newsletter"})]}),e.jsxs(H,{direction:"horizontal",gap:"condensed",children:[e.jsx(X,{type:"submit",variant:"primary",children:"Submit"}),e.jsx(X,{type:"button",variant:"danger",onClick:()=>t(),children:"Reset"})]})]})})]})}const vr=Object.freeze(Object.defineProperty({__proto__:null,default:Xo},Symbol.toStringTag,{value:"Module"})),Zo=[{icon:Ue,label:"Code",url:"/"},{icon:Ie,label:"Issues",counter:10,url:"#issues",current:!0},{icon:Fe,label:"Pull Requests",counter:3,url:"/overview"},{icon:Ft,label:"Discussions"},{icon:ht,label:"Actions"},{icon:qe,label:"Projects",counter:7},{icon:Ne,label:"Security",counter:12},{icon:Ee,label:"Insights"}],Qo=[{icon:Ie,label:"Open issues",url:""},{icon:qt,label:"Your issues",url:""},{icon:Vt,label:"Assigned to you",url:"",current:!0},{icon:Gn,label:"Mentioning you",url:""}];function ea(){return e.jsx(ie,{title:"Primer",subtitle:"React",topnav:Zo,sidenav:Qo,children:"This is the issues page"})}const yr=Object.freeze(Object.defineProperty({__proto__:null,default:ea},Symbol.toStringTag,{value:"Module"})),ta="_title_1bvkv_1",na="_card_1bvkv_4",ra="_cardText_1bvkv_12",Tt={title:ta,card:na,cardText:ra},sa=[{icon:Wt,label:"Overview",url:"/",current:!0},{icon:Ie,label:"Organizations",url:"#issues"},{icon:Fe,label:"People"},{icon:Ft,label:"Policies"},{icon:ht,label:"GitHub Connect"},{icon:qe,label:"Code Security",counter:7},{icon:Ne,label:"Billing & Licensing",counter:12},{icon:Ee,label:"Settings"},{icon:Ee,label:"Compliance"}];function oa(){return e.jsxs(ie,{title:"Primer",subtitle:"React",topnav:sa,children:[e.jsx(L,{as:"h1",className:Tt.title,fontSize:"larger",children:"Overview"}),e.jsxs("div",{className:Tt.card,children:[e.jsx(L,{as:"p",className:Tt.cardText,fontSize:"medium",children:"This is a card in the overview"}),e.jsx(X,{children:"Edit"})]})]})}const jr=Object.freeze(Object.defineProperty({__proto__:null,default:oa},Symbol.toStringTag,{value:"Module"})),aa="_content_qz2dt_1",ia="_pageHeader_qz2dt_6",ca="_pageTitle_qz2dt_13",la="_filterBar_qz2dt_19",da="_filterInput_qz2dt_26",ua="_searchAction_qz2dt_30",pa="_listHeader_qz2dt_34",ha="_repoCount_qz2dt_44",ma="_listControls_qz2dt_49",ga="_sortButton_qz2dt_55",fa="_viewToggle_qz2dt_59",ba="_viewButton_qz2dt_66",xa="_viewButtonActive_qz2dt_81",va="_repoList_qz2dt_86",ya="_repoItem_qz2dt_95",ja="_repoInfo_qz2dt_107",wa="_repoIcon_qz2dt_114",_a="_repoName_qz2dt_119",Sa="_repoDescription_qz2dt_131",ka="_repoMeta_qz2dt_139",Ca="_metaItem_qz2dt_148",Ea="_language_qz2dt_154",Ia="_languageDot_qz2dt_160",I={content:aa,pageHeader:ia,pageTitle:ca,filterBar:la,filterInput:da,searchAction:ua,listHeader:pa,repoCount:ha,listControls:ma,sortButton:ga,viewToggle:fa,viewButton:ba,viewButtonActive:xa,repoList:va,repoItem:ya,repoInfo:ja,repoIcon:wa,repoName:_a,repoDescription:Sa,repoMeta:ka,metaItem:Ca,language:Ea,languageDot:Ia},Na={home:Wt,repo:gt,project:qe,package:Xn,people:Kn,person:Vt,shield:Ne,graph:Ee,gear:mt,"git-pull-request":Fe,eye:As,lock:Ps,code:Ue,"repo-forked":Jn,archive:Ls,"repo-template":Ts};function En(t){return typeof t=="string"?Na[t]||gt:t}function Ta(){const t=z("topnav"),n=Array.isArray(t)?t.map(i=>({...i,icon:En(i.icon)})):[],r=z("sidenav"),o=Array.isArray(r)?r.map(i=>({...i,icon:En(i.icon)})):[],s=z("repositories"),a=Array.isArray(s)?s:[];return e.jsx(ie,{title:"dsp-testing",topnav:n,sidenav:o,children:e.jsxs("div",{className:I.content,children:[e.jsxs("header",{className:I.pageHeader,children:[e.jsx("h2",{className:I.pageTitle,children:"All"}),e.jsx(X,{variant:"primary",children:"New repository"})]}),e.jsxs("div",{className:I.filterBar,children:[e.jsx(tt,{leadingVisual:ks,placeholder:"Filter",value:"copilot",className:I.filterInput,trailingAction:e.jsx(tt.Action,{icon:Cs,"aria-label":"Clear filter"})}),e.jsx(tt,{leadingVisual:Es,placeholder:"","aria-label":"Search repositories",className:I.searchAction})]}),e.jsxs("div",{className:I.listHeader,children:[e.jsx("span",{className:I.repoCount,children:e.jsxs("strong",{children:[a.length," repositories"]})}),e.jsxs("div",{className:I.listControls,children:[e.jsxs(we,{children:[e.jsx(we.Button,{size:"small",className:I.sortButton,children:"Last pushed"}),e.jsx(we.Overlay,{children:e.jsxs(pe,{children:[e.jsx(pe.Item,{children:"Last pushed"}),e.jsx(pe.Item,{children:"Name"}),e.jsx(pe.Item,{children:"Stars"})]})})]}),e.jsxs("div",{className:I.viewToggle,children:[e.jsx("button",{className:`${I.viewButton} ${I.viewButtonActive}`,"aria-label":"List view",children:e.jsx(Is,{size:16})}),e.jsx("button",{className:I.viewButton,"aria-label":"Grid view",children:e.jsx(Ns,{size:16})})]})]})]}),e.jsx("ul",{className:I.repoList,children:a.map(i=>e.jsxs("li",{className:I.repoItem,children:[e.jsxs("div",{className:I.repoInfo,children:[e.jsx(gt,{size:16,className:I.repoIcon}),e.jsx("a",{href:i.url,className:I.repoName,children:i.name}),i.description&&e.jsx("span",{className:I.repoDescription,children:i.description})]}),e.jsxs("div",{className:I.repoMeta,children:[i.language&&e.jsxs("span",{className:I.language,children:[e.jsx("span",{className:I.languageDot}),i.language]}),e.jsx("span",{className:I.metaItem,children:e.jsx(mt,{size:16})}),e.jsxs("span",{className:I.metaItem,children:[e.jsx(Jn,{size:16})," ",i.forks]}),e.jsxs("span",{className:I.metaItem,children:[e.jsx(Yn,{size:16})," ",i.stars]})]})]},i.name))})]})})}const wr=Object.freeze(Object.defineProperty({__proto__:null,default:Ta},Symbol.toStringTag,{value:"Module"})),La="_pageWrapper_1x2wf_1",Pa="_breadcrumb_1x2wf_7",Aa="_breadcrumbLink_1x2wf_15",Ra="_breadcrumbSeparator_1x2wf_27",$a="_breadcrumbCurrent_1x2wf_31",Oa="_pageTitle_1x2wf_36",za="_issueNumber_1x2wf_42",Da="_stateMeta_1x2wf_48",Ma="_metaText_1x2wf_56",Ba="_contentLayout_1x2wf_66",Ha="_mainContent_1x2wf_73",Ua="_packageTable_1x2wf_78",Fa="_packageColumn_1x2wf_88",qa="_packageLabel_1x2wf_94",Va="_packageValue_1x2wf_99",Wa="_packageCode_1x2wf_107",Ga="_copyIcon_1x2wf_112",Ja="_advisoryBody_1x2wf_118",Ya="_timeline_1x2wf_165",Ka="_timelineItem_1x2wf_173",Xa="_timelineBadge_1x2wf_179",Za="_openedIcon_1x2wf_185",Qa="_closedIcon_1x2wf_189",ei="_timelineText_1x2wf_193",ti="_botLabel_1x2wf_205",ni="_sidebar_1x2wf_210",ri="_sidebarSection_1x2wf_216",si="_sidebarHeading_1x2wf_228",oi="_severityScore_1x2wf_234",ai="_criticalLabel_1x2wf_240",ii="_scoreText_1x2wf_244",ci="_metricsHeading_1x2wf_250",li="_metricsTable_1x2wf_257",di="_metricLabel_1x2wf_274",ui="_metricValue_1x2wf_278",pi="_learnMore_1x2wf_284",hi="_cvssVector_1x2wf_294",mi="_epssScore_1x2wf_301",gi="_tagList_1x2wf_308",fi="_tag_1x2wf_308",bi="_weaknessList_1x2wf_319",xi="_weaknessItem_1x2wf_328",vi="_sidebarValue_1x2wf_334",yi="_sidebarLink_1x2wf_340",ji="_contributeText_1x2wf_353",wi="_contributeLink_1x2wf_358",f={pageWrapper:La,breadcrumb:Pa,breadcrumbLink:Aa,breadcrumbSeparator:Ra,breadcrumbCurrent:$a,pageTitle:Oa,issueNumber:za,stateMeta:Da,metaText:Ma,contentLayout:Ba,mainContent:Ha,packageTable:Ua,packageColumn:Fa,packageLabel:qa,packageValue:Va,packageCode:Wa,copyIcon:Ga,advisoryBody:Ja,timeline:Ya,timelineItem:Ka,timelineBadge:Xa,openedIcon:Za,closedIcon:Qa,timelineText:ei,botLabel:ti,sidebar:ni,sidebarSection:ri,sidebarHeading:si,severityScore:oi,criticalLabel:ai,scoreText:ii,metricsHeading:ci,metricsTable:li,metricLabel:di,metricValue:ui,learnMore:pi,cvssVector:hi,epssScore:mi,tagList:gi,tag:fi,weaknessList:bi,weaknessItem:xi,sidebarValue:vi,sidebarLink:yi,contributeText:ji,contributeLink:wi},_i={code:Ue,"issue-opened":Ie,"git-pull-request":Fe,people:Kn,play:ht,project:qe,star:Yn,book:Rs,shield:Ne,graph:Ee,gear:mt};function Si(){const t=z("topnav"),n=Array.isArray(t)?t.map(c=>({...c,icon:_i[c.icon]||Ue})):[],r=z("advisory")||{},o=r.package||{},s=r.severity||{},a=Array.isArray(s.cvssMetrics)?s.cvssMetrics:[],i=Array.isArray(r.tags)?r.tags:[],l=Array.isArray(r.weaknesses)?r.weaknesses:[],d=Array.isArray(r.timeline)?r.timeline:[],p=r.epss||{};return e.jsx(ie,{title:"octodemo",subtitle:"test-se-fs-gitogether-repo",topnav:n,children:e.jsxs("div",{className:f.pageWrapper,children:[e.jsxs("nav",{className:f.breadcrumb,children:[e.jsxs("a",{href:"#",className:f.breadcrumbLink,children:[e.jsx($s,{size:16}),e.jsx("span",{children:r.breadcrumb})]}),e.jsx("span",{className:f.breadcrumbSeparator,children:"/"}),e.jsxs("span",{className:f.breadcrumbCurrent,children:["#",r.id]})]}),e.jsxs("h1",{className:f.pageTitle,children:[r.title," ",e.jsxs("span",{className:f.issueNumber,children:["#",r.id]})]}),e.jsxs("div",{className:f.stateMeta,children:[e.jsxs(ps,{status:"issueClosed",variant:"small",children:[e.jsx(fn,{size:16})," Fixed"]}),e.jsxs("span",{className:f.metaText,children:["Opened ",r.openedAgo," on ",e.jsx("strong",{children:o.name})," (",o.ecosystem,") · · · Fixed ",r.fixedAgo]})]}),e.jsxs("div",{className:f.contentLayout,children:[e.jsxs("div",{className:f.mainContent,children:[e.jsxs("div",{className:f.packageTable,children:[e.jsxs("div",{className:f.packageColumn,children:[e.jsx("span",{className:f.packageLabel,children:"Package"}),e.jsxs("span",{className:f.packageValue,children:[e.jsx(Xn,{size:16})," ",o.name," (",o.ecosystem,")"]})]}),e.jsxs("div",{className:f.packageColumn,children:[e.jsx("span",{className:f.packageLabel,children:"Affected versions"}),e.jsx("code",{className:f.packageCode,children:o.affectedVersions})]}),e.jsxs("div",{className:f.packageColumn,children:[e.jsx("span",{className:f.packageLabel,children:"Patched version"}),e.jsxs("span",{className:f.packageValue,children:[e.jsx("strong",{children:o.patchedVersion})," ",e.jsx(Os,{size:16,className:f.copyIcon})]})]})]}),e.jsxs("article",{className:f.advisoryBody,children:[e.jsx("h2",{children:"Summary"}),e.jsx("p",{children:"Log4j versions prior to 2.16.0 are subject to a remote code execution vulnerability via the ldap JNDI parser."}),e.jsxs("p",{children:["As per ",e.jsx("a",{href:"#",children:"Apache's Log4j security guide"}),": Apache Log4j2 <=2.14.1 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.16.0, this behavior has been disabled by default."]}),e.jsxs("p",{children:["Log4j version 2.15.0 contained an earlier fix for the vulnerability, but that patch did not disable attacker-controlled JNDI lookups in all situations. For more information, see the ",e.jsx("code",{children:"Updated advice for version 2.16.0"})," section of this advisory."]}),e.jsx("h2",{children:"Impact"}),e.jsx("p",{children:"Logging untrusted or user controlled data with a vulnerable version of Log4J may result in Remote Code Execution (RCE) against your application. This includes untrusted data included in logged errors such as exception traces, authentication failures, and other unexpected vectors of user controlled input."}),e.jsx("h2",{children:"Affected versions"}),e.jsx("p",{children:"Any Log4J version prior to v2.15.0 is affected to this specific issue."}),e.jsx("p",{children:"The v1 branch of Log4J which is considered End Of Life (EOL) is vulnerable to other RCE vectors so the recommendation is to still update to 2.16.0 where possible."}),e.jsx("h2",{children:"Security releases"}),e.jsx("p",{children:"Additional backports of this fix have been made available in versions 2.3.1, 2.12.2, and 2.12.3"}),e.jsx("h2",{children:"Affected packages"}),e.jsxs("p",{children:["Only the ",e.jsx("code",{children:"org.apache.logging.log4j:log4j-core"})," package is directly affected by this vulnerability. The ",e.jsx("code",{children:"org.apache.logging.log4j:log4j-api"})," should be kept at the same version as the ",e.jsx("code",{children:"org.apache.logging.log4j-core"})," package to ensure compatability if in use."]}),e.jsx("h2",{children:"Remediation Advice"}),e.jsx("h3",{children:"Updated advice for version 2.16.0"}),e.jsxs("p",{children:["The Apache Logging Services team provided updated mitigation advice upon the release of version 2.16.0, which ",e.jsx("a",{href:"#",children:"disables JNDI by default and completely removes support for message lookups"}),"."]}),e.jsxs("p",{children:["Even in version 2.15.0, lookups used in layouts to provide specific pieces of context information will still recursively resolve, possibly triggering JNDI lookups. This problem is being tracked as ",e.jsx("a",{href:"#",children:"CVE-2021-45046"}),". More information is available on the ",e.jsx("a",{href:"#",children:"GitHub Security Advisory for CVE-2021-45046"}),"."]}),e.jsxs("p",{children:["Users who want to avoid attacker-controlled JNDI lookups but cannot upgrade to 2.16.0 must ",e.jsx("a",{href:"#",children:"ensure that no such lookups resolve to attacker-provided data and ensure that the JndiLookup class is not loaded"}),"."]}),e.jsx("p",{children:"Please note that Log4J v1 is End Of Life (EOL) and will not receive patches for this issue. Log4J v1 is also vulnerable to other RCE vectors and we recommend you migrate to Log4J 2.16.0 where possible."})]}),e.jsx("div",{className:f.timeline,children:d.map((c,h)=>e.jsxs("div",{className:f.timelineItem,children:[e.jsx("div",{className:f.timelineBadge,children:c.action.includes("closed")?e.jsx(fn,{size:16,className:f.closedIcon}):e.jsx(Ne,{size:16,className:f.openedIcon})}),e.jsx(hs,{src:c.actorAvatar,size:20,alt:c.actor}),e.jsxs("span",{className:f.timelineText,children:[e.jsx("strong",{children:c.actor}),c.isBot&&e.jsx(nt,{size:"small",className:f.botLabel,children:"bot"})," ",c.action," ",c.timeAgo]})]},h))})]}),e.jsxs("aside",{className:f.sidebar,children:[e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"Severity"}),e.jsxs("div",{className:f.severityScore,children:[e.jsx(nt,{variant:"danger",className:f.criticalLabel,children:s.level}),e.jsx("span",{className:f.scoreText,children:s.score})]})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h4",{className:f.metricsHeading,children:"CVSS v3 base metrics"}),e.jsx("table",{className:f.metricsTable,children:e.jsx("tbody",{children:a.map(c=>e.jsxs("tr",{children:[e.jsx("td",{className:f.metricLabel,children:c.label}),e.jsx("td",{className:f.metricValue,children:c.value})]},c.label))})}),e.jsx("a",{href:"#",className:f.learnMore,children:"Learn more about base metrics"}),e.jsx("p",{className:f.cvssVector,children:s.cvssVector})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"EPSS score"}),e.jsxs("p",{className:f.epssScore,children:[p.score," (",p.percentile,")"]})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"Tags"}),e.jsx("div",{className:f.tagList,children:i.map(c=>e.jsx(nt,{className:f.tag,children:c},c))})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"Weaknesses"}),e.jsx("ul",{className:f.weaknessList,children:l.map(c=>e.jsxs("li",{className:f.weaknessItem,children:["▸ ",c]},c))})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"CVE ID"}),e.jsx("p",{className:f.sidebarValue,children:r.cveId})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"GHSA ID"}),e.jsx("p",{className:f.sidebarValue,children:r.ghsaId})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsxs("a",{href:"#",className:f.sidebarLink,children:[e.jsx(zs,{size:16})," See advisory in GitHub Advisory Database"]}),e.jsxs("a",{href:"#",className:f.sidebarLink,children:[e.jsx(gt,{size:16})," See all of your affected repositories"]})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("p",{className:f.contributeText,children:"See something to contribute?"}),e.jsx("a",{href:"#",className:f.contributeLink,children:"Suggest improvements for this advisory on the GitHub Advisory Database."})]})]})]})]})})}const _r=Object.freeze(Object.defineProperty({__proto__:null,default:Si},Symbol.toStringTag,{value:"Module"})),Lt=["Account","Organization","Workspace","Review"];function ne(t){return typeof t=="string"?t:""}function In(t){return t===!0||t==="true"}function Ze({name:t,defaultValue:n,onCommit:r,...o}){const s=b.useRef(n);return e.jsx(ve,{name:t,defaultValue:n,onChange:({value:a})=>{s.current=a},onBlur:()=>r(s.current),...o})}function ki(){const t=Ut(),[n,r]=j("signup.step"),o=Math.min(Math.max(parseInt(n,10)||0,0),Lt.length-1),s=S=>{const R=typeof S=="function"?S(o):S;r(String(R))},[a,i,l]=j("signup.errors.fullName"),[d,p,c]=j("signup.errors.email"),[h,m,x]=j("signup.errors.password"),[E,_,A]=j("signup.errors.orgName"),[M,D,U]=j("signup.errors.orgSize"),[ce,fe,Te]=j("signup.errors.role"),[Le,Je,Pe]=j("signup.errors.region"),[v,k,N]=j("signup.errors.plan"),[T,B,P]=j("signup.errors.agreeTerms"),w={fullName:a,email:d,password:h,orgName:E,orgSize:M,role:ce,region:Le,plan:v,agreeTerms:T},V={fullName:i,email:p,password:m,orgName:_,orgSize:D,role:fe,region:Je,plan:k,agreeTerms:B},F={fullName:l,email:c,password:x,orgName:A,orgSize:U,role:Te,region:Pe,plan:N,agreeTerms:P},le=()=>Object.values(F).forEach(S=>S()),Qt=S=>{le(),Object.entries(S).forEach(([R,is])=>V[R]?.(is))},[en,Jr]=j("signup.fullName"),[tn,Yr]=j("signup.email"),[nn,Kr]=j("signup.password"),[rn,Xr]=j("signup.organization.name"),[sn,Zr]=j("signup.organization.size"),[on,Qr]=j("signup.organization.role"),[an,es]=j("signup.workspace.region"),[cn,ts]=j("signup.workspace.plan"),[ln,ns]=j("signup.workspace.newsletter"),[dn,rs]=j("signup.workspace.agreeTerms"),C=b.useMemo(()=>({fullName:ne(en),email:ne(tn),password:ne(nn),orgName:ne(rn),orgSize:ne(sn),role:ne(on),region:ne(an),plan:ne(cn)||"starter",newsletter:In(ln),agreeTerms:In(dn)}),[en,tn,nn,rn,sn,on,an,cn,ln,dn]);function un(S){const R={};return S===0&&(C.fullName.trim()||(R.fullName="Full name is required."),C.email.trim()||(R.email="Email is required."),C.password.trim()||(R.password="Password is required.")),S===1&&(C.orgName.trim()||(R.orgName="Organization name is required."),C.orgSize.trim()||(R.orgSize="Organization size is required."),C.role.trim()||(R.role="Role is required.")),S===2&&(C.region.trim()||(R.region="Region is required."),C.plan.trim()||(R.plan="Plan is required."),C.agreeTerms||(R.agreeTerms="You must accept terms to continue.")),Qt(R),Object.keys(R).length===0}function ss(){un(o)&&s(S=>Math.min(S+1,Lt.length-1))}function os(){Qt({}),s(S=>Math.max(S-1,0))}function as(){if(!un(2)){s(2);return}t("/Dashboard")}return e.jsx(Me,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(u,{backgroundColor:"page",minHeight:"100vh",padding:6,align:"center",justify:"center",children:e.jsxs(u,{maxWidth:"560px",width:"100%",direction:"column",gap:6,children:[e.jsxs(u,{direction:"column",gap:2,children:[e.jsx(g,{variant:"featured-1",weight:"bold",children:"Create your cloud account"}),e.jsx(g,{variant:"body-2",color:"neutral-faded",children:"Complete the onboarding flow to configure your account and organization."})]}),e.jsx(mn,{activeId:String(o),children:Lt.map((S,R)=>e.jsx(mn.Item,{id:String(R),title:S,completed:R<o,subtitle:`Step ${R+1}`},S))}),e.jsx(ae,{padding:6,children:e.jsxs(u,{direction:"column",gap:5,children:[o===0&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{hasError:!!w.fullName,children:[e.jsx(y.Label,{children:"Full name"}),e.jsx(Ze,{name:"fullName",defaultValue:C.fullName,placeholder:"Jane Doe",onCommit:Jr}),w.fullName&&e.jsx(y.Error,{children:w.fullName})]}),e.jsxs(y,{hasError:!!w.email,children:[e.jsx(y.Label,{children:"Email"}),e.jsx(Ze,{name:"email",defaultValue:C.email,placeholder:"jane@acme.cloud",onCommit:Yr}),w.email&&e.jsx(y.Error,{children:w.email})]}),e.jsxs(y,{hasError:!!w.password,children:[e.jsx(y.Label,{children:"Password"}),e.jsx(Ze,{name:"password",defaultValue:C.password,onCommit:Kr,inputAttributes:{type:"password"}}),w.password&&e.jsx(y.Error,{children:w.password})]})]}),o===1&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{hasError:!!w.orgName,children:[e.jsx(y.Label,{children:"Organization name"}),e.jsx(Ze,{name:"orgName",defaultValue:C.orgName,placeholder:"Acme Cloud",onCommit:Xr}),w.orgName&&e.jsx(y.Error,{children:w.orgName})]}),e.jsxs(y,{hasError:!!w.orgSize,children:[e.jsx(y.Label,{children:"Organization size"}),e.jsxs(ye,{name:"orgSize",value:C.orgSize,placeholder:"Select size",onChange:({value:S})=>Zr(S),children:[e.jsx("option",{value:"1-10",children:"1–10 employees"}),e.jsx("option",{value:"11-50",children:"11–50 employees"}),e.jsx("option",{value:"51-250",children:"51–250 employees"}),e.jsx("option",{value:"251+",children:"251+ employees"})]}),w.orgSize&&e.jsx(y.Error,{children:w.orgSize})]}),e.jsxs(y,{hasError:!!w.role,children:[e.jsx(y.Label,{children:"Your role"}),e.jsxs(ye,{name:"role",value:C.role,placeholder:"Select role",onChange:({value:S})=>Qr(S),children:[e.jsx("option",{value:"founder",children:"Founder"}),e.jsx("option",{value:"engineering-manager",children:"Engineering Manager"}),e.jsx("option",{value:"developer",children:"Developer"}),e.jsx("option",{value:"platform-admin",children:"Platform Admin"})]}),w.role&&e.jsx(y.Error,{children:w.role})]})]}),o===2&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{hasError:!!w.region,children:[e.jsx(y.Label,{children:"Primary region"}),e.jsxs(ye,{name:"region",value:C.region,placeholder:"Select region",onChange:({value:S})=>es(S),children:[e.jsx("option",{value:"us-east-1",children:"US East"}),e.jsx("option",{value:"us-west-2",children:"US West"}),e.jsx("option",{value:"eu-west-1",children:"EU West"}),e.jsx("option",{value:"ap-southeast-1",children:"AP Southeast"})]}),w.region&&e.jsx(y.Error,{children:w.region})]}),e.jsxs(y,{hasError:!!w.plan,children:[e.jsx(y.Label,{children:"Starting plan"}),e.jsxs(ye,{name:"plan",value:C.plan,onChange:({value:S})=>ts(S),children:[e.jsx("option",{value:"starter",children:"Starter"}),e.jsx("option",{value:"growth",children:"Growth"}),e.jsx("option",{value:"enterprise",children:"Enterprise"})]}),w.plan&&e.jsx(y.Error,{children:w.plan})]}),e.jsx(At,{name:"newsletter",checked:C.newsletter,onChange:({checked:S})=>ns(S?"true":"false"),children:"Email me product updates and onboarding tips"}),e.jsxs(y,{hasError:!!w.agreeTerms,children:[e.jsx(At,{name:"agreeTerms",checked:C.agreeTerms,onChange:({checked:S})=>rs(S?"true":"false"),children:"I agree to the Terms of Service and Privacy Policy"}),w.agreeTerms&&e.jsx(y.Error,{children:w.agreeTerms})]})]}),o===3&&e.jsxs(u,{direction:"column",gap:4,children:[e.jsx(g,{variant:"featured-3",weight:"bold",children:"Review your configuration"}),e.jsxs(u,{direction:"column",gap:3,children:[e.jsxs(u,{direction:"row",align:"center",children:[e.jsx(u.Item,{columns:4,children:e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Name"})}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-2",children:C.fullName})})]}),e.jsxs(u,{direction:"row",align:"center",children:[e.jsx(u.Item,{columns:4,children:e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Email"})}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-2",children:C.email})})]}),e.jsxs(u,{direction:"row",align:"center",children:[e.jsx(u.Item,{columns:4,children:e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Organization"})}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-2",children:C.orgName})})]}),e.jsxs(u,{direction:"row",align:"center",children:[e.jsx(u.Item,{columns:4,children:e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Team size"})}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-2",children:C.orgSize})})]}),e.jsxs(u,{direction:"row",align:"center",children:[e.jsx(u.Item,{columns:4,children:e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Role"})}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-2",children:C.role})})]}),e.jsxs(u,{direction:"row",align:"center",children:[e.jsx(u.Item,{columns:4,children:e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Region"})}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-2",children:C.region})})]}),e.jsxs(u,{direction:"row",align:"center",children:[e.jsx(u.Item,{columns:4,children:e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Plan"})}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-2",children:C.plan})})]}),e.jsxs(u,{direction:"row",align:"center",children:[e.jsx(u.Item,{columns:4,children:e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Newsletter"})}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-2",children:C.newsletter?"Yes":"No"})})]})]})]}),e.jsxs(u,{direction:"row",justify:"end",gap:3,children:[o>0&&e.jsx(ee,{variant:"ghost",onClick:os,children:"Back"}),o<3&&e.jsx(ee,{color:"primary",onClick:ss,children:"Continue"}),o===3&&e.jsx(ee,{color:"primary",onClick:as,children:"Create account"})]})]})})]})})})}const Sr=Object.freeze(Object.defineProperty({__proto__:null,default:ki},Symbol.toStringTag,{value:"Module"})),Ci="/storyboard/branch--comments-system/assets/mona-loading-a6vFIHDd.gif",Ei="_container_1dofh_1",Ii="_contentBox_1dofh_12",Ni="_codeLine_1dofh_21",Ti="_iconWrapper_1dofh_26",Li="_codeText_1dofh_32",Pi="_monaWrapper_1dofh_39",Ai="_footerHeader_1dofh_45",Ri="_tipsText_1dofh_50",$i="_warningText_1dofh_55",Z={container:Ei,contentBox:Ii,codeLine:Ni,iconWrapper:Ti,codeText:Li,monaWrapper:Pi,footerHeader:Ai,tipsText:Ri,warningText:$i};function Oi(){return e.jsxs("div",{className:Z.container,children:[e.jsx(Wn,{size:24}),e.jsx(Yo,{}),e.jsxs(H,{padding:"spacious",className:Z.contentBox,children:[e.jsx(Nn,{icon:Ds,iconColor:"success.fg",children:"Mona's playground successfully initialised..."}),e.jsxs(Nn,{icon:Ms,iconColor:"accent.fg",children:["Visit ",e.jsx(L,{className:Z.warningText,children:"src/Playground.js"})," ","and start building your own layouts using Primer."]}),e.jsx("div",{className:Z.monaWrapper,children:e.jsx("img",{src:Ci,alt:"mona",width:48,height:48})})]}),e.jsx(zi,{})]})}function Nn({icon:t,iconColor:n,children:r}){return e.jsxs(H,{direction:"horizontal",className:Z.codeLine,children:[e.jsx(H,{className:Z.iconWrapper,children:e.jsx(t,{size:16})}),e.jsx(L,{as:"p",className:Z.codeText,children:r})]})}function zi(){return e.jsxs(H,{gap:"condensed",children:[e.jsxs(H,{direction:"horizontal",className:Z.footerHeader,children:[e.jsx(qt,{size:18}),e.jsx(L,{className:Z.tipsText,children:"Tips"})]}),e.jsxs(L,{children:["Before you get started check out our"," ",e.jsx(hn,{href:"https://primer.style/react",target:"_blank",children:"Primer React Documentation"})," ","and"," ",e.jsx(hn,{href:"https://ui.githubapp.com/storybook/?path=/docs/templates-readme--docs&globals=viewport:narrow",target:"_blank",children:"Primer Templates (staff only)"})]})]})}const Di="_container_m20cu_1",Mi="_buttonWrapper_m20cu_7",Bi="_label_m20cu_12",Pt={container:Di,buttonWrapper:Mi,label:Bi};function kr(){const{setDayScheme:t,setNightScheme:n,colorScheme:r}=ms(),o=i=>{t(i),n(i)},s=[{name:"Light",value:"light",icon:bn},{name:"Light colorblind",value:"light_colorblind",icon:bn},{name:"Dark",value:"dark",icon:Ye},{name:"Dark colorblind",value:"dark_colorblind",icon:Ye},{name:"Dark high contrast",value:"dark_high_contrast",icon:Ye},{name:"Dark Dimmed",value:"dark_dimmed",icon:Ye}],a=s.find(i=>i.value===r);return e.jsx(H,{padding:"normal",className:Pt.container,children:e.jsx(H,{className:Pt.buttonWrapper,children:e.jsxs(we,{children:[e.jsxs(we.Button,{size:"small",children:[e.jsx(a.icon,{}),e.jsxs(H,{className:Pt.label,children:[" ",a.name]})]}),e.jsx(we.Overlay,{align:"right",children:e.jsx(pe,{showDividers:!0,children:e.jsx(pe.Group,{selectionVariant:"single",children:s.map(i=>e.jsx(pe.Item,{href:"#",selected:i.value===r,onSelect:()=>o(i.value),children:i.name},i.value))})})})]})})})}function Hi(){return e.jsxs(e.Fragment,{children:[e.jsx(Oi,{}),e.jsx(kr,{})]})}const Cr=Object.freeze(Object.defineProperty({__proto__:null,default:Hi},Symbol.toStringTag,{value:"Module"})),Er={todo:"Todo",in_progress:"In Progress",done:"Done",cancelled:"Cancelled"},Ir={urgent:"Urgent",high:"High",medium:"Medium",low:"Low"},Ui=Object.entries(Er),Fi=Object.entries(Ir);function Nr({prefix:t}){const[n,r]=j(`${t}.title`),[o,s]=j(`${t}.description`),[a,i]=j(`${t}.status`),[l,d]=j(`${t}.priority`),[p,c]=j(`${t}.assignee`),[h,m]=j(`${t}.project`),[x,E]=j(`${t}.estimate`);return e.jsxs(u,{direction:"column",gap:4,children:[e.jsxs(y,{children:[e.jsx(y.Label,{children:"Title"}),e.jsx(ve,{name:"title",value:n??"",onChange:({value:_})=>r(_)})]}),e.jsxs(y,{children:[e.jsx(y.Label,{children:"Description"}),e.jsx(ve,{name:"description",multiline:!0,value:o??"",onChange:({value:_})=>s(_),inputAttributes:{rows:3}})]}),e.jsxs(u,{direction:"row",gap:4,children:[e.jsx(u.Item,{grow:!0,children:e.jsxs(y,{children:[e.jsx(y.Label,{children:"Status"}),e.jsx(ye,{name:"status",value:a??"todo",onChange:({value:_})=>i(_),children:Ui.map(([_,A])=>e.jsx("option",{value:_,children:A},_))})]})}),e.jsx(u.Item,{grow:!0,children:e.jsxs(y,{children:[e.jsx(y.Label,{children:"Priority"}),e.jsx(ye,{name:"priority",value:l??"medium",onChange:({value:_})=>d(_),children:Fi.map(([_,A])=>e.jsx("option",{value:_,children:A},_))})]})})]}),e.jsxs(u,{direction:"row",gap:4,children:[e.jsx(u.Item,{grow:!0,children:e.jsxs(y,{children:[e.jsx(y.Label,{children:"Assignee"}),e.jsx(ve,{name:"assignee",placeholder:"Username",value:p??"",onChange:({value:_})=>c(_)})]})}),e.jsx(u.Item,{grow:!0,children:e.jsxs(y,{children:[e.jsx(y.Label,{children:"Project"}),e.jsx(ve,{name:"project",placeholder:"Project name",value:h??"",onChange:({value:_})=>m(_)})]})})]}),e.jsxs(y,{children:[e.jsx(y.Label,{children:"Estimate (points)"}),e.jsx(ve,{name:"estimate",placeholder:"e.g. 5",value:x??"",onChange:({value:_})=>E(_)})]})]})}const qi={Auth:"neutral",Backend:"critical",Feature:"primary",Bug:"critical",Security:"warning",Frontend:"primary",DevEx:"positive"},Qe=["title","description","status","priority","assignee","project","estimate"];function Vi({issue:t,active:n,onClose:r}){const o={title:de("issues",t.id,"title"),description:de("issues",t.id,"description"),status:de("issues",t.id,"status"),priority:de("issues",t.id,"priority"),assignee:de("issues",t.id,"assignee"),project:de("issues",t.id,"project"),estimate:de("issues",t.id,"estimate")},s=()=>{Qe.forEach(l=>{me(`draft.edit.${l}`,t[l]??"")})},a=()=>{const l=new URLSearchParams(window.location.hash.replace(/^#/,""));Qe.forEach(d=>{const[,p]=o[d];p(l.get(`draft.edit.${d}`)??"")}),Qe.forEach(d=>at(`draft.edit.${d}`)),r({reason:"save"})},i=()=>{Qe.forEach(l=>at(`draft.edit.${l}`)),r({reason:"cancel"})};return e.jsxs(_e,{active:n,onClose:i,onOpen:s,size:"600px",padding:6,position:"center",children:[e.jsx(_e.Title,{children:"Edit Issue"}),e.jsx(_e.Subtitle,{children:t.identifier}),e.jsxs(u,{direction:"column",gap:4,paddingTop:4,children:[e.jsx(Nr,{prefix:"draft.edit"}),e.jsxs(u,{direction:"row",justify:"end",gap:2,paddingTop:2,children:[e.jsx(ee,{variant:"outline",onClick:i,children:"Cancel"}),e.jsx(ee,{color:"primary",onClick:a,children:"Save"})]})]})]})}function Wi(){const[t,n,r]=j("ui.editModal"),o=t==="true",s=pr("issues","id"),a=z("signup.organization.name"),i=z("signup.fullName"),l=z("signup.organization.role");return s?e.jsx(Me,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(u,{backgroundColor:"page",minHeight:"100vh",padding:12,children:e.jsxs(u,{direction:"row",align:"start",gap:8,wrap:"no-wrap",children:[e.jsx(u.Item,{columns:2,children:e.jsx(dt,{orgName:a,activePage:"Issues",userInfo:{name:i,role:l}})}),e.jsx(u.Item,{grow:!0,children:e.jsxs(u,{direction:"row",gap:8,align:"start",children:[e.jsx(u.Item,{grow:!0,children:e.jsxs(u,{direction:"column",gap:4,maxWidth:"720px",children:[e.jsxs(u,{direction:"row",gap:2,align:"center",justify:"space-between",children:[e.jsxs(u,{direction:"row",gap:2,align:"center",children:[e.jsx(ge,{to:"/issues",style:{textDecoration:"none"},children:e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:a||"Workspace"})}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"›"}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:s.identifier})]}),e.jsx(ee,{variant:"outline",size:"small",onClick:()=>n("true"),children:"Edit issue"})]}),e.jsx(Vi,{issue:s,active:o,onClose:()=>r()}),e.jsx(g,{variant:"featured-1",weight:"bold",children:s.title}),s.description&&e.jsx(g,{variant:"body-2",color:"neutral-faded",children:s.description}),s.acceptanceCriteria?.length>0&&e.jsxs(u,{direction:"column",gap:2,children:[e.jsx(g,{variant:"body-2",weight:"bold",children:"Acceptance Criteria"}),e.jsx("ul",{style:{margin:0,paddingLeft:"1.5rem"},children:s.acceptanceCriteria.map((d,p)=>e.jsx("li",{style:{marginBottom:"0.5rem"},children:e.jsx(g,{variant:"body-3",children:d})},p))})]}),s.technicalNotes?.length>0&&e.jsxs(u,{direction:"column",gap:2,children:[e.jsx(g,{variant:"body-2",weight:"bold",children:"Technical Notes"}),e.jsx("ul",{style:{margin:0,paddingLeft:"1.5rem"},children:s.technicalNotes.map((d,p)=>e.jsx("li",{style:{marginBottom:"0.5rem"},children:e.jsx(g,{variant:"body-3",children:d})},p))})]}),e.jsx(Q,{}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"+ Add sub-issues"}),e.jsx(Q,{}),e.jsxs(u,{direction:"column",gap:3,children:[e.jsx(g,{variant:"body-2",weight:"bold",children:"Activity"}),(s.activity||[]).map((d,p)=>e.jsxs(u,{direction:"row",gap:3,align:"center",children:[e.jsx(gn,{src:d.avatar,initials:d.user?.[0]?.toUpperCase(),size:6}),e.jsxs(u,{direction:"column",children:[e.jsxs(g,{variant:"body-3",children:[e.jsx(g,{weight:"medium",children:d.user}),d.type==="created"&&" created the issue",d.type==="comment"&&":"]}),d.body&&e.jsx(g,{variant:"body-3",color:"neutral-faded",children:d.body}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:d.time})]})]},p))]})]})}),e.jsx(u.Item,{columns:3,children:e.jsx(ae,{padding:4,children:e.jsxs(u,{direction:"column",gap:4,children:[e.jsx(g,{variant:"caption-1",color:"neutral-faded",weight:"medium",children:"Properties"}),e.jsx(Q,{}),e.jsxs(u,{direction:"column",gap:1,children:[e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"Status"}),e.jsx(g,{variant:"body-3",children:Er[s.status]||s.status})]}),e.jsxs(u,{direction:"column",gap:1,children:[e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"Priority"}),e.jsx(g,{variant:"body-3",children:Ir[s.priority]||s.priority})]}),e.jsxs(u,{direction:"column",gap:1,children:[e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"Assignee"}),s.assignee?e.jsxs(u,{direction:"row",gap:2,align:"center",children:[e.jsx(gn,{src:s.assigneeAvatar,initials:s.assignee?.[0]?.toUpperCase(),size:5}),e.jsx(g,{variant:"body-3",children:s.assignee})]}):e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"Assign"})]}),e.jsxs(u,{direction:"column",gap:1,children:[e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"Labels"}),e.jsx(u,{direction:"row",gap:1,wrap:!0,children:(s.labels||[]).map(d=>e.jsx(Be,{size:"small",color:qi[d]||"neutral",children:d},d))})]}),e.jsxs(u,{direction:"column",gap:1,children:[e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"Project"}),e.jsx(g,{variant:"body-3",color:s.project?void 0:"neutral-faded",children:s.project||"Add to project"})]}),s.estimate&&e.jsxs(u,{direction:"column",gap:1,children:[e.jsx(g,{variant:"caption-1",color:"neutral-faded",children:"Estimate"}),e.jsxs(g,{variant:"body-3",children:[s.estimate," points"]})]})]})})})]})})]})})}):e.jsx(Me,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(u,{backgroundColor:"page",minHeight:"100vh",padding:12,children:e.jsxs(u,{direction:"row",align:"start",gap:8,wrap:"no-wrap",children:[e.jsx(u.Item,{columns:2,children:e.jsx(dt,{orgName:a,activePage:"Issues",userInfo:{name:i,role:l}})}),e.jsx(u.Item,{grow:!0,children:e.jsxs(u,{direction:"column",gap:4,align:"center",paddingBlock:16,children:[e.jsx(g,{variant:"featured-2",weight:"bold",children:"Issue not found"}),e.jsx(g,{variant:"body-3",color:"neutral-faded",children:"The issue you're looking for doesn't exist."}),e.jsx(ge,{to:"/issues",children:"← Back to all issues"})]})})]})})})}const Gi=Object.freeze(Object.defineProperty({__proto__:null,default:Wi},Symbol.toStringTag,{value:"Module"})),Ji="_issueRow_1cpdh_1",Yi={issueRow:Ji},Ki={todo:"○",in_progress:"◐",done:"●",cancelled:"✕"},Xi={Auth:"neutral",Backend:"critical",Feature:"primary",Bug:"critical",Security:"warning",Frontend:"primary",DevEx:"positive"},Zi={title:"",description:"",status:"todo",priority:"medium",assignee:"",project:"",estimate:""},Ot=["title","description","status","priority","assignee","project","estimate"];function Tn(t){Ot.forEach(n=>at(`${t}.${n}`))}function Qi({active:t,onClose:n,issueCount:r}){const[o]=j("draft.create.title"),s=Ut(),a=`FIL-${r+1}`,i=()=>{Ot.forEach(p=>{me(`draft.create.${p}`,Zi[p])})},l=()=>{if(!(o??"").trim())return;const p=o.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||`new-issue-${r+1}`;Ot.forEach(c=>{const h=new URLSearchParams(window.location.hash.replace(/^#/,"")).get(`draft.create.${c}`)??"";me(`record.issues.${p}.${c}`,h)}),me(`record.issues.${p}.identifier`,a),Tn("draft.create"),n({reason:"save"}),s(`/issues/${p}`)},d=()=>{Tn("draft.create"),n({reason:"cancel"})};return e.jsxs(_e,{active:t,onClose:d,onOpen:i,size:"600px",padding:6,position:"center",children:[e.jsx(_e.Title,{children:"Create Issue"}),e.jsx(_e.Subtitle,{children:a}),e.jsxs(u,{direction:"column",gap:4,paddingTop:4,children:[e.jsx(Nr,{prefix:"draft.create"}),e.jsxs(u,{direction:"row",justify:"end",gap:2,paddingTop:2,children:[e.jsx(ee,{variant:"outline",onClick:d,children:"Cancel"}),e.jsx(ee,{color:"primary",onClick:l,children:"Save"})]})]})]})}function ec(){const[t,n,r]=j("ui.createModal"),o=t==="true",s=hr("issues"),a=z("signup.organization.name"),i=z("signup.fullName"),l=z("signup.organization.role"),d=s.filter(c=>c.status!=="done"&&c.status!=="cancelled"),p=s.filter(c=>c.status==="done"||c.status==="cancelled");return e.jsx(Me,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(u,{backgroundColor:"page",minHeight:"100vh",padding:12,children:e.jsxs(u,{direction:"row",align:"start",gap:8,wrap:"no-wrap",children:[e.jsx(u.Item,{columns:2,children:e.jsx(dt,{orgName:a,activePage:"Issues",userInfo:{name:i,role:l}})}),e.jsx(u.Item,{grow:!0,children:e.jsxs(u,{direction:"column",gap:4,maxWidth:"900px",children:[e.jsxs(u,{direction:"row",justify:"space-between",align:"center",children:[e.jsx(g,{variant:"featured-2",weight:"bold",children:"Issues"}),e.jsxs(u,{direction:"row",gap:2,align:"center",children:[e.jsxs(Be,{color:"neutral",children:[s.length," total"]}),e.jsx(ee,{size:"small",color:"primary",onClick:()=>n("true"),children:"Create issue"})]})]}),e.jsx(Qi,{active:o,onClose:()=>r(),issueCount:s.length}),e.jsxs(u,{direction:"column",gap:0,children:[e.jsx(u,{paddingBlock:2,paddingInline:3,children:e.jsxs(g,{variant:"caption-1",color:"neutral-faded",weight:"medium",children:["Open · ",d.length]})}),e.jsx(Q,{}),d.map(c=>e.jsx(Ln,{issue:c},c.id))]}),p.length>0&&e.jsxs(u,{direction:"column",gap:0,children:[e.jsx(u,{paddingBlock:2,paddingInline:3,children:e.jsxs(g,{variant:"caption-1",color:"neutral-faded",weight:"medium",children:["Closed · ",p.length]})}),e.jsx(Q,{}),p.map(c=>e.jsx(Ln,{issue:c},c.id))]})]})})]})})})}function Ln({issue:t}){return e.jsxs(e.Fragment,{children:[e.jsx(ge,{to:`/issues/${t.id}`,className:Yi.issueRow,children:e.jsxs(u,{direction:"row",align:"center",gap:3,padding:3,children:[e.jsx(g,{variant:"body-3",color:"neutral-faded",attributes:{style:{minWidth:20}},children:Ki[t.status]||"○"}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",attributes:{style:{minWidth:50}},children:t.identifier}),e.jsx(u.Item,{grow:!0,children:e.jsx(g,{variant:"body-3",children:t.title})}),e.jsx(u,{direction:"row",gap:1,children:(t.labels||[]).map(n=>e.jsx(Be,{size:"small",color:Xi[n]||"neutral",children:n},n))}),e.jsx(g,{variant:"caption-1",color:"neutral-faded",attributes:{style:{textTransform:"capitalize"}},children:t.priority})]})}),e.jsx(Q,{})]})}const tc=Object.freeze(Object.defineProperty({__proto__:null,default:ec},Symbol.toStringTag,{value:"Module"}));function nc(){const t=pr("posts","id");return t?e.jsx(ie,{title:"Blog",subtitle:t.title,children:e.jsxs("article",{style:{maxWidth:"720px",padding:"2rem"},children:[e.jsxs("header",{children:[e.jsx(L,{as:"h1",sx:{fontSize:4,mb:2},children:t.title}),e.jsxs(L,{as:"p",color:"fg.muted",sx:{mb:3},children:[t.author," · ",t.date]}),t.summary&&e.jsx(nt,{variant:"accent",sx:{mb:3},children:t.summary})]}),e.jsx(L,{as:"div",sx:{mt:3,lineHeight:1.6},children:(t.body||"").split(`

`).map((n,r)=>e.jsx("p",{children:n},r))}),e.jsx("footer",{style:{marginTop:"2rem",borderTop:"1px solid var(--borderColor-muted)",paddingTop:"1rem"},children:e.jsx(ge,{to:"/posts",children:"← Back to all posts"})})]})}):e.jsx(ie,{title:"Blog",subtitle:"Post",children:e.jsxs("section",{style:{padding:"2rem"},children:[e.jsx(L,{as:"h1",children:"Post not found"}),e.jsx(L,{as:"p",color:"fg.muted",children:"The post you're looking for doesn't exist."}),e.jsx(ge,{to:"/posts",children:"← Back to all posts"})]})})}const rc=Object.freeze(Object.defineProperty({__proto__:null,default:nc},Symbol.toStringTag,{value:"Module"}));function sc(){const t=hr("posts");return e.jsx(ie,{title:"Blog",subtitle:"All Posts",children:e.jsxs("section",{style:{maxWidth:"720px",padding:"2rem"},children:[e.jsx(L,{as:"h1",sx:{fontSize:4,mb:3},children:"Blog"}),t.map(n=>e.jsxs("article",{style:{marginBottom:"1.5rem",paddingBottom:"1.5rem",borderBottom:"1px solid var(--borderColor-muted)"},children:[e.jsx(ge,{to:`/posts/${n.id}`,style:{textDecoration:"none"},children:e.jsx(L,{as:"h2",sx:{fontSize:2,color:"accent.fg"},children:n.title})}),e.jsxs(L,{as:"p",color:"fg.muted",sx:{fontSize:1,mt:1},children:[n.author," · ",n.date]}),n.summary&&e.jsx(L,{as:"p",sx:{mt:1},children:n.summary})]},n.id))]})})}const oc=Object.freeze(Object.defineProperty({__proto__:null,default:sc},Symbol.toStringTag,{value:"Module"})),ac="_container_1cvh6_1",ic="_header_1cvh6_8",cc="_title_1cvh6_13",lc="_subtitle_1cvh6_21",dc="_grid_1cvh6_27",uc="_card_1cvh6_35",pc="_thumbnail_1cvh6_51",hc="_cardBody_1cvh6_71",mc="_sceneName_1cvh6_76",gc="_empty_1cvh6_83",fc="_sectionTitle_1cvh6_92",bc="_branchSection_1cvh6_102",xc="_branchMeta_1cvh6_106",$={container:ac,header:ic,title:cc,subtitle:lc,grid:dc,card:uc,thumbnail:pc,cardBody:hc,sceneName:mc,empty:gc,sectionTitle:fc,branchSection:bc,branchMeta:xc},Tr="/storyboard/branch--comments-system/".replace(/\/[^/]*\/$/,"/"),vc=`${Tr}branches.json`,yc=Object.assign({"/src/pages/Dashboard.jsx":()=>J(()=>Promise.resolve().then(()=>gr),void 0),"/src/pages/Forms.jsx":()=>J(()=>Promise.resolve().then(()=>vr),void 0),"/src/pages/Issues.jsx":()=>J(()=>Promise.resolve().then(()=>yr),void 0),"/src/pages/Overview.jsx":()=>J(()=>Promise.resolve().then(()=>jr),void 0),"/src/pages/Repositories.jsx":()=>J(()=>Promise.resolve().then(()=>wr),void 0),"/src/pages/SecurityAdvisory.jsx":()=>J(()=>Promise.resolve().then(()=>_r),void 0),"/src/pages/Signup.jsx":()=>J(()=>Promise.resolve().then(()=>Sr),void 0),"/src/pages/_app.jsx":()=>J(()=>Promise.resolve().then(()=>mr),void 0),"/src/pages/index.jsx":()=>J(()=>Promise.resolve().then(()=>Cr),void 0)}),jc=Object.keys(yc).map(t=>t.replace("/src/pages/","").replace(".jsx","")).filter(t=>!t.startsWith("_")&&t!=="index"&&t!=="viewfinder");function Pn({name:t}){const n=Qs(t),r=[];for(let s=0;s<12;s++){const a=n*(s+1),i=(a*7+s*31)%320,l=(a*13+s*17)%200,d=20+a*(s+3)%80,p=8+a*(s+7)%40,c=.06+a*(s+2)%20/100,h=s%3===0?"var(--placeholder-accent)":s%3===1?"var(--placeholder-fg)":"var(--placeholder-muted)";r.push(e.jsx("rect",{x:i,y:l,width:d,height:p,rx:2,fill:h,opacity:c},s))}const o=[];for(let s=0;s<6;s++){const i=10+n*(s+5)%180;o.push(e.jsx("line",{x1:0,y1:i,x2:320,y2:i,stroke:"var(--placeholder-grid)",strokeWidth:.5,opacity:.4},`h${s}`))}for(let s=0;s<8;s++){const i=10+n*(s+9)%300;o.push(e.jsx("line",{x1:i,y1:0,x2:i,y2:200,stroke:"var(--placeholder-grid)",strokeWidth:.5,opacity:.3},`v${s}`))}return e.jsxs("svg",{viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("rect",{width:"320",height:"200",fill:"var(--placeholder-bg)"}),o,r]})}const et=Object.keys(dr);function wc(){const[t,n]=b.useState(null);return b.useEffect(()=>{fetch(vc).then(r=>r.ok?r.json():[]).then(r=>n(Array.isArray(r)?r:[])).catch(()=>n([]))},[]),e.jsxs("div",{className:$.container,children:[e.jsxs("header",{className:$.header,children:[e.jsx("h1",{className:$.title,children:"Viewfinder"}),e.jsxs("p",{className:$.subtitle,children:[et.length," scene",et.length!==1?"s":"",t&&t.length>0?` · ${t.length} branch preview${t.length!==1?"s":""}`:""]})]}),et.length===0?e.jsxs("p",{className:$.empty,children:["No scenes found. Add a ",e.jsx("code",{children:"*.scene.json"})," file to get started."]}):e.jsxs("section",{children:[e.jsx("h2",{className:$.sectionTitle,children:"Scenes"}),e.jsx("div",{className:$.grid,children:et.map(r=>e.jsxs(ge,{to:eo(r,jc),className:$.card,children:[e.jsx("div",{className:$.thumbnail,children:e.jsx(Pn,{name:r})}),e.jsx("div",{className:$.cardBody,children:e.jsx("p",{className:$.sceneName,children:r})})]},r))})]}),t&&t.length>0&&e.jsxs("section",{className:$.branchSection,children:[e.jsx("h2",{className:$.sectionTitle,children:"Branch Previews"}),e.jsx("div",{className:$.grid,children:t.map(r=>e.jsxs("a",{href:`${Tr}${r.folder}/`,className:$.card,children:[e.jsx("div",{className:$.thumbnail,children:e.jsx(Pn,{name:r.branch})}),e.jsxs("div",{className:$.cardBody,children:[e.jsx("p",{className:$.sceneName,children:r.branch}),e.jsx("p",{className:$.branchMeta,children:r.folder})]})]},r.folder))})]})]})}const _c=Object.freeze(Object.defineProperty({__proto__:null,default:wc},Symbol.toStringTag,{value:"Module"}));var re={route:[/^.*\/src\/pages\/|\.(jsx|tsx|mdx)$/g,""],splat:[/\[\.{3}\w+\]/g,"*"],param:[/\[([^\]]+)\]/g,":$1"],slash:[/^index$|\./g,"/"],optional:[/^-(:?[\w-]+|\*)/,"$1?"]},Sc=t=>Object.keys(t).reduce((n,r)=>{const o=r.replace(...re.route);return{...n,[o]:t[r]}},{}),kc=(t,n)=>Object.keys(t).filter(o=>!o.includes("/_")||/_layout\.(jsx|tsx)$/.test(o)).reduce((o,s)=>{const a=t[s],i={id:s.replace(...re.route),...n(a,s)},l=s.replace(...re.route).replace(...re.splat).replace(...re.param).split("/").filter(Boolean);return l.reduce((d,p,c)=>{const h=p.replace(...re.slash).replace(...re.optional),m=c===0,x=c===l.length-1&&l.length>1,E=!m&&!x,_=p==="_layout",A=/\([\w-]+\)/.test(h),M=/^\w|\//.test(h)?"unshift":"push";if(m&&l.length===1)return o.push({path:h,...i}),d;if(m||E){const D=m?o:d.children,U=D?.find(fe=>fe.path===h||fe.id?.replace("/_layout","").split("/").pop()===h),ce=A?i?.component?{id:h,path:"/"}:{id:h}:{path:h};return U?U.children??=[]:D?.[M]({...ce,children:[]}),U||D?.[M==="unshift"?0:D.length-1]}return _?Object.assign(d,i):(x&&d?.children?.[M](i?.index?i:{path:h,...i}),d)},{}),o},[]),Cc=t=>Object.keys(t).reduce((n,r)=>{const o=r.replace(...re.route).replace(/\+|\([\w-]+\)\//g,"").replace(/(\/)?index/g,"").replace(/\./g,"/");return{...n,[`/${o}`]:t[r]?.default}},{}),Ec=Object.assign({"/src/pages/_app.jsx":mr}),Ic=Object.assign({}),Nc=Object.assign({"/src/pages/Dashboard.jsx":gr,"/src/pages/Forms.jsx":vr,"/src/pages/Issues.jsx":yr,"/src/pages/Overview.jsx":jr,"/src/pages/Repositories.jsx":wr,"/src/pages/SecurityAdvisory.jsx":_r,"/src/pages/Signup.jsx":Sr,"/src/pages/index.jsx":Cr,"/src/pages/issues/[id].jsx":Gi,"/src/pages/issues/index.jsx":tc,"/src/pages/posts/[id].jsx":rc,"/src/pages/posts/index.jsx":oc,"/src/pages/viewfinder.jsx":_c}),Lr=Sc(Ec),Tc=Cc(Ic),Lc=kc(Nc,(t,n)=>{const r=/index\.(jsx|tsx|mdx)$/.test(n)&&!n.includes("pages/index")?{index:!0}:{},o=t?.default||b.Fragment;return{...r,Component:()=>t?.Pending?e.jsx(b.Suspense,{fallback:e.jsx(t.Pending,{}),children:e.jsx(o,{})}):e.jsx(o,{}),ErrorBoundary:t?.Catch,loader:t?.Loader,action:t?.Action}}),Ce=Lr?._app,Pc=Lr?.["404"],Ac=Ce?.default||Vn,Rc=()=>{const t=Tc[vs().state?.modal]||b.Fragment;return e.jsx(t,{})},zt=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ac,{})," ",e.jsx(Rc,{})]}),$c=()=>Ce?.Pending?e.jsx(b.Suspense,{fallback:e.jsx(Ce.Pending,{}),children:e.jsx(zt,{})}):e.jsx(zt,{}),Oc={Component:Ce?.default?$c:zt,ErrorBoundary:Ce?.Catch,loader:Ce?.Loader},zc={path:"*",Component:Pc?.default||b.Fragment},Dc=[{...Oc,children:[...Lc,zc]}];const Pr="sb-comments-token",Ar="sb-comments-user";function Rr(){try{return localStorage.getItem(Pr)}catch{return null}}function Mc(t){localStorage.setItem(Pr,t)}function $r(){try{const t=localStorage.getItem(Ar);return t?JSON.parse(t):null}catch{return null}}async function Bc(t){const n=await fetch("https://api.github.com/user",{headers:{Authorization:`bearer ${t}`}});if(!n.ok)throw new Error("Invalid token — GitHub returned "+n.status);const r=await n.json(),o={login:r.login,avatarUrl:r.avatar_url};return localStorage.setItem(Ar,JSON.stringify(o)),o}function ut(){return Rr()!==null}let he=!1;const Dt=new Set;function rt(){return he}function Hc(){return $t()?!he&&!ut()?(console.warn("[storyboard] Sign in first to use comments"),!1):(he=!he,Or(),he):(console.warn("[storyboard] Comments not enabled — check storyboard.config.json"),!1)}function An(t){he=t,Or()}function Uc(t){return Dt.add(t),()=>Dt.delete(t)}function Or(){for(const t of Dt)t(he)}const Rn=/<!--\s*sb-meta\s+(\{.*?\})\s*-->/;function Mt(t){if(!t)return{meta:null,text:""};const n=t.match(Rn);if(!n)return{meta:null,text:t.trim()};try{const r=JSON.parse(n[1]),o=t.replace(Rn,"").trim();return{meta:r,text:o}}catch{return{meta:null,text:t.trim()}}}function Bt(t,n){return`${`<!-- sb-meta ${JSON.stringify(t)} -->`}
${n}`}function zr(t,n){const{meta:r,text:o}=Mt(t),s={...r,...n};return Bt(s,o)}const Fc="https://api.github.com/graphql";async function te(t,n={},r={}){const{retries:o=2}=r,s=Rr();if(!s)throw new Error("Not authenticated — no GitHub PAT found. Please sign in.");let a;for(let i=0;i<=o;i++)try{const l=await fetch(Fc,{method:"POST",headers:{Authorization:`bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({query:t,variables:n})});if(l.status===401)throw new Error("GitHub PAT is invalid or expired. Please sign in again.");if(!l.ok)throw new Error(`GitHub API error: ${l.status} ${l.statusText}`);const d=await l.json();if(d.errors?.length)throw new Error(`GraphQL error: ${d.errors.map(p=>p.message).join(", ")}`);return d.data}catch(l){if(a=l,l.message.includes("401")||l.message.includes("Not authenticated")||l.message.includes("invalid or expired"))throw l;i<o&&await new Promise(d=>setTimeout(d,1e3*(i+1)))}throw a}const qc=`
  query SearchDiscussion($query: String!) {
    search(query: $query, type: DISCUSSION, first: 1) {
      nodes {
        ... on Discussion {
          id
          title
          body
          url
          comments(first: 100) {
            nodes {
              id
              body
              createdAt
              author {
                login
                avatarUrl
              }
              replies(first: 50) {
                nodes {
                  id
                  body
                  createdAt
                  author {
                    login
                    avatarUrl
                  }
                  reactionGroups {
                    content
                    users(first: 0) { totalCount }
                    viewerHasReacted
                  }
                }
              }
              reactionGroups {
                content
                users(first: 0) { totalCount }
                viewerHasReacted
              }
            }
          }
        }
      }
    }
  }
`,Vc=`
  query GetCategoryId($owner: String!, $name: String!, $slug: String!) {
    repository(owner: $owner, name: $name) {
      id
      discussionCategory(slug: $slug) {
        id
      }
      discussionCategories(first: 25) {
        nodes {
          id
          name
          slug
        }
      }
    }
  }
`,Wc=`
  mutation CreateDiscussion($repositoryId: ID!, $categoryId: ID!, $title: String!, $body: String!) {
    createDiscussion(input: { repositoryId: $repositoryId, categoryId: $categoryId, title: $title, body: $body }) {
      discussion {
        id
        title
        url
      }
    }
  }
`,Gc=`
  mutation AddComment($discussionId: ID!, $body: String!) {
    addDiscussionComment(input: { discussionId: $discussionId, body: $body }) {
      comment {
        id
        body
        createdAt
        author {
          login
          avatarUrl
        }
      }
    }
  }
`,Jc=`
  mutation AddReply($discussionId: ID!, $replyToId: ID!, $body: String!) {
    addDiscussionComment(input: { discussionId: $discussionId, body: $body, replyToId: $replyToId }) {
      comment {
        id
        body
        createdAt
        author {
          login
          avatarUrl
        }
      }
    }
  }
`,Dr=`
  mutation UpdateComment($commentId: ID!, $body: String!) {
    updateDiscussionComment(input: { commentId: $commentId, body: $body }) {
      comment {
        id
        body
      }
    }
  }
`,Yc=`
  mutation AddReaction($subjectId: ID!, $content: ReactionContent!) {
    addReaction(input: { subjectId: $subjectId, content: $content }) {
      reaction {
        content
      }
    }
  }
`,Kc=`
  mutation RemoveReaction($subjectId: ID!, $content: ReactionContent!) {
    removeReaction(input: { subjectId: $subjectId, content: $content }) {
      reaction {
        content
      }
    }
  }
`;async function Mr(t){const n=lr(),o=`"${`Comments: ${t}`}" in:title repo:${n.repo.owner}/${n.repo.name}`,a=(await te(qc,{query:o})).search?.nodes?.[0];if(!a)return null;const i=(a.comments?.nodes??[]).map(l=>{const{meta:d,text:p}=Mt(l.body);return{...l,meta:d,text:p,replies:(l.replies?.nodes??[]).map(c=>{const{meta:h,text:m}=Mt(c.body);return{...c,meta:h,text:m}})}});return{...a,comments:i}}async function Xc(){const t=lr(),n=t.discussions.category.toLowerCase().replace(/\s+/g,"-"),r=await te(Vc,{owner:t.repo.owner,name:t.repo.name,slug:n}),o=r.repository?.id;let s=r.repository?.discussionCategory?.id;if(s||(s=r.repository?.discussionCategories?.nodes?.find(i=>i.name===t.discussions.category)?.id),!o||!s)throw new Error(`Could not find repository or discussion category "${t.discussions.category}" in ${t.repo.owner}/${t.repo.name}`);return{repositoryId:o,categoryId:s}}async function Zc(t,n,r,o){let s=await Mr(t);if(!s){const{repositoryId:l,categoryId:d}=await Xc(),p=`Comments: ${t}`,c=Bt({route:t,createdAt:new Date().toISOString()},"");s=(await te(Wc,{repositoryId:l,categoryId:d,title:p,body:c})).createDiscussion.discussion}const a=Bt({x:Math.round(n*10)/10,y:Math.round(r*10)/10},o);return(await te(Gc,{discussionId:s.id,body:a})).addDiscussionComment.comment}async function Qc(t,n,r){return(await te(Jc,{discussionId:t,replyToId:n,body:r})).addDiscussionComment.comment}async function el(t,n){const r=zr(n,{resolved:!0});return(await te(Dr,{commentId:t,body:r})).updateDiscussionComment.comment}async function tl(t,n,r,o){const s=zr(n,{x:Math.round(r*10)/10,y:Math.round(o*10)/10});return(await te(Dr,{commentId:t,body:s})).updateDiscussionComment.comment}async function nl(t,n){await te(Yc,{subjectId:t,content:n})}async function rl(t,n){await te(Kc,{subjectId:t,content:n})}const $n="sb-composer-style";function sl(){if(document.getElementById($n))return;const t=document.createElement("style");t.id=$n,t.textContent=`
    .sb-composer {
      position: absolute;
      z-index: 100001;
      display: flex;
      flex-direction: column;
      width: 280px;
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .sb-composer-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px 0;
    }

    .sb-composer-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #30363d;
      flex-shrink: 0;
    }

    .sb-composer-username {
      font-size: 12px;
      color: #8b949e;
      font-weight: 500;
    }

    .sb-composer-body {
      padding: 8px 12px 12px;
    }

    .sb-composer-textarea {
      width: 100%;
      min-height: 60px;
      max-height: 160px;
      padding: 8px 10px;
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 6px;
      color: #c9d1d9;
      font-size: 13px;
      font-family: inherit;
      line-height: 1.5;
      resize: vertical;
      outline: none;
      box-sizing: border-box;
    }
    .sb-composer-textarea:focus {
      border-color: #58a6ff;
      box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
    }
    .sb-composer-textarea::placeholder {
      color: #484f58;
    }

    .sb-composer-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      padding: 0 12px 10px;
    }

    .sb-composer-btn {
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      border: 1px solid transparent;
    }

    .sb-composer-btn-cancel {
      background: none;
      color: #8b949e;
      border-color: #30363d;
    }
    .sb-composer-btn-cancel:hover {
      background: #21262d;
      color: #c9d1d9;
    }

    .sb-composer-btn-submit {
      background: #238636;
      color: #fff;
    }
    .sb-composer-btn-submit:hover {
      background: #2ea043;
    }
    .sb-composer-btn-submit:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .sb-composer-hint {
      padding: 0 12px 8px;
      font-size: 11px;
      color: #484f58;
    }
    .sb-composer-hint kbd {
      display: inline-block;
      padding: 0 4px;
      font-size: 10px;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 3px;
      background: rgba(255,255,255,0.06);
      font-family: inherit;
    }
  `,document.head.appendChild(t)}function ol(t,n,r,o,s={}){sl();const a=$r(),i=document.createElement("div");i.className="sb-composer",i.style.left=`${n}%`,i.style.top=`${r}%`,i.style.transform="translate(12px, -50%)",i.innerHTML=`
    ${a?`
      <div class="sb-composer-header">
        <img class="sb-composer-avatar" src="${a.avatarUrl}" alt="${a.login}" />
        <span class="sb-composer-username">${a.login}</span>
      </div>
    `:""}
    <div class="sb-composer-body">
      <textarea class="sb-composer-textarea" placeholder="Leave a comment…" autofocus></textarea>
    </div>
    <div class="sb-composer-footer">
      <button class="sb-composer-btn sb-composer-btn-cancel" data-action="cancel">Cancel</button>
      <button class="sb-composer-btn sb-composer-btn-submit" data-action="submit">Comment</button>
    </div>
  `,t.appendChild(i);const l=i.querySelector(".sb-composer-textarea"),d=i.querySelector('[data-action="submit"]');function p(){i.remove()}function c(){p(),s.onCancel?.()}async function h(){const m=l.value.trim();if(!m){l.focus();return}d.disabled=!0,d.textContent="Posting…";try{const x=await Zc(o,n,r,m);p(),s.onSubmit?.(x)}catch(x){d.disabled=!1,d.textContent="Comment",console.error("[storyboard] Failed to post comment:",x);let E=i.querySelector(".sb-composer-error");E||(E=document.createElement("div"),E.className="sb-composer-error",E.style.cssText="padding: 4px 12px 8px; font-size: 12px; color: #f85149;",i.querySelector(".sb-composer-footer").before(E)),E.textContent=x.message}}return i.querySelector('[data-action="cancel"]').addEventListener("click",c),d.addEventListener("click",h),l.addEventListener("keydown",m=>{m.key==="Enter"&&(m.metaKey||m.ctrlKey)&&(m.preventDefault(),h()),m.key==="Escape"&&(m.preventDefault(),m.stopPropagation(),c())}),i.addEventListener("click",m=>m.stopPropagation()),requestAnimationFrame(()=>l.focus()),{el:i,destroy:p}}const On="sb-auth-modal",zn="sb-auth-modal-style";function al(){if(document.getElementById(zn))return;const t=document.createElement("style");t.id=zn,t.textContent=`
    .sb-auth-backdrop {
      position: fixed;
      inset: 0;
      z-index: 100000;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }

    .sb-auth-modal {
      width: 420px;
      max-width: calc(100vw - 32px);
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 12px;
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
      color: #c9d1d9;
      overflow: hidden;
    }

    .sb-auth-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid #21262d;
    }

    .sb-auth-header h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #f0f6fc;
    }

    .sb-auth-close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: none;
      border: none;
      border-radius: 6px;
      color: #8b949e;
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
    }
    .sb-auth-close:hover {
      background: #21262d;
      color: #c9d1d9;
    }

    .sb-auth-body {
      padding: 20px;
    }

    .sb-auth-description {
      margin: 0 0 16px;
      font-size: 13px;
      color: #8b949e;
      line-height: 1.5;
    }

    .sb-auth-description a {
      color: #58a6ff;
      text-decoration: none;
    }
    .sb-auth-description a:hover {
      text-decoration: underline;
    }

    .sb-auth-label {
      display: block;
      margin-bottom: 6px;
      font-size: 13px;
      font-weight: 500;
      color: #c9d1d9;
    }

    .sb-auth-input {
      width: 100%;
      padding: 8px 12px;
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 6px;
      color: #c9d1d9;
      font-size: 14px;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
      outline: none;
      box-sizing: border-box;
    }
    .sb-auth-input:focus {
      border-color: #58a6ff;
      box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
    }
    .sb-auth-input::placeholder {
      color: #484f58;
    }

    .sb-auth-scopes {
      margin: 12px 0 0;
      padding: 10px 12px;
      background: #0d1117;
      border: 1px solid #21262d;
      border-radius: 6px;
      font-size: 12px;
      color: #8b949e;
      line-height: 1.6;
    }
    .sb-auth-scopes code {
      display: inline-block;
      padding: 1px 5px;
      background: rgba(110, 118, 129, 0.15);
      border-radius: 4px;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
      font-size: 11px;
      color: #c9d1d9;
    }

    .sb-auth-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      padding: 16px 20px;
      border-top: 1px solid #21262d;
    }

    .sb-auth-btn {
      padding: 6px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background 100ms ease;
    }

    .sb-auth-btn-cancel {
      background: #21262d;
      border-color: #30363d;
      color: #c9d1d9;
    }
    .sb-auth-btn-cancel:hover {
      background: #30363d;
    }

    .sb-auth-btn-submit {
      background: #238636;
      color: #fff;
    }
    .sb-auth-btn-submit:hover {
      background: #2ea043;
    }
    .sb-auth-btn-submit:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .sb-auth-error {
      margin: 10px 0 0;
      padding: 8px 12px;
      background: rgba(248, 81, 73, 0.1);
      border: 1px solid rgba(248, 81, 73, 0.3);
      border-radius: 6px;
      font-size: 13px;
      color: #f85149;
    }

    .sb-auth-success {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 4px 0;
    }

    .sb-auth-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #30363d;
    }

    .sb-auth-user-info {
      font-size: 14px;
      color: #f0f6fc;
    }
    .sb-auth-user-info span {
      display: block;
      font-size: 12px;
      color: #3fb950;
      margin-top: 2px;
    }
  `,document.head.appendChild(t)}function il(){return al(),new Promise(t=>{const n=document.getElementById(On);n&&n.remove();const r=document.createElement("div");r.id=On,r.className="sb-auth-backdrop";const o=document.createElement("div");o.className="sb-auth-modal",o.innerHTML=`
      <div class="sb-auth-header">
        <h2>Sign in for comments</h2>
        <button class="sb-auth-close" data-action="close" aria-label="Close">×</button>
      </div>
      <div class="sb-auth-body">
        <p class="sb-auth-description">
          Enter a <a href="https://github.com/settings/tokens/new" target="_blank" rel="noopener">GitHub Personal Access Token</a>
          to leave comments on this prototype. Your token is stored locally in your browser.
        </p>
        <label class="sb-auth-label" for="sb-auth-token-input">Personal Access Token</label>
        <input class="sb-auth-input" id="sb-auth-token-input" type="password" placeholder="ghp_xxxxxxxxxxxx" autocomplete="off" spellcheck="false" />
        <div class="sb-auth-scopes">Required scopes: <code>repo</code> <code>read:user</code></div>
        <div data-slot="feedback"></div>
      </div>
      <div class="sb-auth-footer">
        <button class="sb-auth-btn sb-auth-btn-cancel" data-action="close">Cancel</button>
        <button class="sb-auth-btn sb-auth-btn-submit" data-action="submit">Sign in</button>
      </div>
    `,r.appendChild(o),document.body.appendChild(r);const s=o.querySelector("#sb-auth-token-input"),a=o.querySelector('[data-action="submit"]'),i=o.querySelector('[data-slot="feedback"]');function l(c){r.remove(),t(c)}r.addEventListener("click",c=>{c.target===r&&l(null)}),o.querySelectorAll('[data-action="close"]').forEach(c=>{c.addEventListener("click",()=>l(null))});function d(c){c.key==="Escape"&&(c.preventDefault(),c.stopPropagation(),window.removeEventListener("keydown",d,!0),l(null))}window.addEventListener("keydown",d,!0);async function p(){const c=s.value.trim();if(!c){s.focus();return}a.disabled=!0,a.textContent="Validating…",i.innerHTML="";try{const h=await Bc(c);Mc(c),i.innerHTML=`
          <div class="sb-auth-success">
            <img class="sb-auth-avatar" src="${h.avatarUrl}" alt="${h.login}" />
            <div class="sb-auth-user-info">
              ${h.login}
              <span>✓ Signed in</span>
            </div>
          </div>
        `,a.textContent="Done",a.disabled=!1,a.onclick=()=>{window.removeEventListener("keydown",d,!0),l(h)}}catch(h){i.innerHTML=`<div class="sb-auth-error">${h.message}</div>`,a.disabled=!1,a.textContent="Sign in"}}a.addEventListener("click",p),s.addEventListener("keydown",c=>{c.key==="Enter"&&p()}),requestAnimationFrame(()=>s.focus())})}const Dn="sb-comment-window-style",Br={THUMBS_UP:"👍",THUMBS_DOWN:"👎",LAUGH:"😄",HOORAY:"🎉",CONFUSED:"😕",HEART:"❤️",ROCKET:"🚀",EYES:"👀"};function cl(){if(document.getElementById(Dn))return;const t=document.createElement("style");t.id=Dn,t.textContent=`
    .sb-comment-window {
      position: absolute;
      z-index: 100001;
      width: 360px;
      max-height: 480px;
      display: flex;
      flex-direction: column;
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .sb-comment-window-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      border-bottom: 1px solid #21262d;
      cursor: grab;
      user-select: none;
    }
    .sb-comment-window-header:active {
      cursor: grabbing;
    }

    .sb-comment-window-header-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sb-comment-window-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #30363d;
      flex-shrink: 0;
    }

    .sb-comment-window-author {
      font-size: 12px;
      font-weight: 600;
      color: #f0f6fc;
    }

    .sb-comment-window-time {
      font-size: 11px;
      color: #484f58;
      margin-left: 4px;
    }

    .sb-comment-window-close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background: none;
      border: none;
      border-radius: 6px;
      color: #8b949e;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      flex-shrink: 0;
    }
    .sb-comment-window-close:hover {
      background: #21262d;
      color: #c9d1d9;
    }

    .sb-comment-window-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .sb-comment-window-action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      background: none;
      border: none;
      border-radius: 6px;
      color: #8b949e;
      cursor: pointer;
      font-size: 11px;
      font-weight: 500;
      font-family: inherit;
      line-height: 1;
      flex-shrink: 0;
      white-space: nowrap;
    }
    .sb-comment-window-action-btn:hover {
      background: #21262d;
      color: #c9d1d9;
    }
    .sb-comment-window-action-btn[data-resolved="true"] {
      color: #3fb950;
    }
    .sb-comment-window-action-btn[data-copied="true"] {
      color: #3fb950;
    }

    .sb-comment-window-body {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
    }

    .sb-comment-window-text {
      font-size: 13px;
      line-height: 1.5;
      color: #c9d1d9;
      margin: 0 0 8px;
      word-break: break-word;
    }

    .sb-comment-window-reactions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }

    .sb-reaction-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 2px 8px;
      border-radius: 999px;
      border: 1px solid #30363d;
      background: none;
      color: #8b949e;
      cursor: pointer;
      // font-size: 12px;
      font-family: inherit;
      transition: border-color 100ms, background 100ms;
    }
    .sb-reaction-pill span {
      // font-size: 12px;
   }
    .sb-reaction-pill:hover {
      border-color: #8b949e;
    }
    .sb-reaction-pill[data-active="true"] {
      border-color: rgba(88, 166, 255, 0.4);
      background: rgba(88, 166, 255, 0.1);
      color: #58a6ff;
    }

    .sb-reaction-add-btn {
      display: inline-flex;
      align-items: center;
      padding: 2px 6px;
      gap: 4px;
      border-radius: 999px;
      border: 1px solid transparent;
      background: none;
      color: #8b949e;
      font-size: 12px;
      cursor: pointer;
      font-family: inherit;
      position: relative;
      border-color: #30363d;
      background: #21262d;
    }
    .sb-reaction-add-btn:hover {
      border: 1px solid rgba(88, 166, 255, 0.4);
      background: rgba(88, 166, 255, 0.1);
    }

    .sb-reaction-picker {
      position: absolute;
      bottom: 100%;
      left: 0;
      margin-bottom: 4px;
      z-index: 10;
      display: flex;
      gap: 2px;
      padding: 4px;
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    }

    .sb-reaction-picker-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 6px;
      border: none;
      background: none;
      font-size: 14px;
      cursor: pointer;
      transition: background 100ms;
    }
    .sb-reaction-picker-btn:hover {
      background: #21262d;
    }
    .sb-reaction-picker-btn[data-active="true"] {
      background: rgba(88, 166, 255, 0.15);
      box-shadow: inset 0 0 0 1px rgba(88, 166, 255, 0.4);
    }

    .sb-comment-window-replies {
      border-top: 1px solid #21262d;
      padding-top: 10px;
      margin-top: 4px;
    }

    .sb-comment-window-replies-label {
      font-size: 11px;
      font-weight: 600;
      color: #8b949e;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .sb-reply-item {
      display: flex;
      gap: 8px;
      margin-bottom: 10px;
    }

    .sb-reply-avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #30363d;
      flex-shrink: 0;
    }

    .sb-reply-content {
      flex: 1;
      min-width: 0;
    }

    .sb-reply-meta {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 2px;
    }

    .sb-reply-author {
      font-size: 12px;
      font-weight: 600;
      color: #f0f6fc;
    }

    .sb-reply-time {
      font-size: 11px;
      color: #484f58;
    }

    .sb-reply-text {
      font-size: 13px;
      line-height: 1.4;
      color: #c9d1d9;
      margin: 0;
      word-break: break-word;
    }

    .sb-reply-reactions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-wrap: wrap;
      margin-top: 4px;
    }

    .sb-comment-window-reply-form {
      border-top: 1px solid #21262d;
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .sb-reply-textarea {
      width: 100%;
      min-height: 40px;
      max-height: 100px;
      padding: 6px 8px;
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 6px;
      color: #c9d1d9;
      font-size: 12px;
      font-family: inherit;
      line-height: 1.4;
      resize: vertical;
      outline: none;
      box-sizing: border-box;
    }
    .sb-reply-textarea:focus {
      border-color: #58a6ff;
      box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
    }
    .sb-reply-textarea::placeholder {
      color: #484f58;
    }

    .sb-reply-form-actions {
      display: flex;
      justify-content: flex-end;
    }

    .sb-reply-submit-btn {
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      border: none;
      background: #238636;
      color: #fff;
    }
    .sb-reply-submit-btn:hover {
      background: #2ea043;
    }
    .sb-reply-submit-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,document.head.appendChild(t)}function Mn(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Bn(t){const n=document.createElement("div");n.className=t.replies?"sb-comment-window-reactions":"sb-reply-reactions";function r(){n.innerHTML="";const o=t.reactionGroups??[];for(const a of o){if(a.users?.totalCount===0&&!a.viewerHasReacted)continue;const i=a.users?.totalCount??0;if(i===0)continue;const l=document.createElement("button");l.className="sb-reaction-pill",l.dataset.active=String(!!a.viewerHasReacted),l.innerHTML=`<span>${Br[a.content]??a.content}</span><span>${i}</span>`,l.addEventListener("click",d=>{d.stopPropagation(),Hr(t,a.content,a,r)}),n.appendChild(l)}const s=document.createElement("button");s.className="sb-reaction-add-btn",s.textContent="😀 +",s.addEventListener("click",a=>{a.stopPropagation(),ll(s,t,r)}),n.appendChild(s)}return r(),n}function ll(t,n,r){const o=t.querySelector(".sb-reaction-picker");if(o){o.remove();return}const s=document.createElement("div");s.className="sb-reaction-picker";for(const[i,l]of Object.entries(Br)){const d=n.reactionGroups??[],p=d.some(h=>h.content===i&&h.viewerHasReacted),c=document.createElement("button");c.className="sb-reaction-picker-btn",c.dataset.active=String(p),c.textContent=l,c.addEventListener("click",h=>{h.stopPropagation();const m=d.find(x=>x.content===i);Hr(n,i,m,r),s.remove()}),s.appendChild(c)}t.appendChild(s);function a(i){!s.contains(i.target)&&i.target!==t&&(s.remove(),document.removeEventListener("click",a,!0))}setTimeout(()=>document.addEventListener("click",a,!0),0)}async function Hr(t,n,r,o){const s=r?.viewerHasReacted??!1;t.reactionGroups||(t.reactionGroups=[]),s&&r?(r.users={totalCount:Math.max(0,(r.users?.totalCount??1)-1)},r.viewerHasReacted=!1,r.users.totalCount===0&&(t.reactionGroups=t.reactionGroups.filter(a=>a.content!==n))):r?(r.users={totalCount:(r.users?.totalCount??0)+1},r.viewerHasReacted=!0):t.reactionGroups.push({content:n,users:{totalCount:1},viewerHasReacted:!0}),o();try{s?await rl(t.id,n):await nl(t.id,n)}catch(a){console.error("[storyboard] Reaction toggle failed:",a)}}let K=null;function Ur(t,n,r,o={}){cl(),K&&(K.destroy(),K=null);const s=$r(),a=document.createElement("div");a.className="sb-comment-window",a.style.left=`${n.meta?.x??0}%`,a.style.top=`${n.meta?.y??0}%`,a.style.transform="translate(12px, -50%)";const i=document.createElement("div");i.className="sb-comment-window-header";const l=document.createElement("div");if(l.className="sb-comment-window-header-left",n.author?.avatarUrl){const v=document.createElement("img");v.className="sb-comment-window-avatar",v.src=n.author.avatarUrl,v.alt=n.author.login??"",l.appendChild(v)}const d=document.createElement("span");if(d.className="sb-comment-window-author",d.textContent=n.author?.login??"unknown",l.appendChild(d),n.createdAt){const v=document.createElement("span");v.className="sb-comment-window-time",v.textContent=Mn(n.createdAt),l.appendChild(v)}i.appendChild(l);const p=document.createElement("div");p.className="sb-comment-window-header-actions";const c=document.createElement("button");c.className="sb-comment-window-action-btn",c.setAttribute("aria-label",n.meta?.resolved?"Resolved":"Resolve"),c.title=n.meta?.resolved?"Resolved":"Resolve",c.textContent=n.meta?.resolved?"Resolved":"Resolve",n.meta?.resolved&&(c.dataset.resolved="true"),c.addEventListener("click",async v=>{if(v.stopPropagation(),!n.meta?.resolved){c.dataset.resolved="true",c.textContent="Resolved",c.title="Resolved";try{await el(n.id,n._rawBody??n.body??""),n.meta={...n.meta,resolved:!0},o.onMove?.()}catch(k){console.error("[storyboard] Failed to resolve comment:",k),c.dataset.resolved="false",c.textContent="Resolve",c.title="Resolve"}}}),p.appendChild(c);const h=document.createElement("button");h.className="sb-comment-window-action-btn",h.setAttribute("aria-label","Copy link"),h.title="Copy link",h.textContent="Copy link",h.addEventListener("click",v=>{v.stopPropagation();const k=new URL(window.location.href);k.searchParams.set("comment",n.id),navigator.clipboard.writeText(k.toString()).then(()=>{h.dataset.copied="true",h.textContent="Copied!",h.title="Copied!",setTimeout(()=>{h.dataset.copied="false",h.textContent="Copy link",h.title="Copy link"},2e3)}).catch(()=>{const N=document.createElement("input");N.value=k.toString(),document.body.appendChild(N),N.select(),document.execCommand("copy"),N.remove()})}),p.appendChild(h);const m=document.createElement("button");m.className="sb-comment-window-close",m.innerHTML="×",m.setAttribute("aria-label","Close"),m.addEventListener("click",v=>{v.stopPropagation(),Pe()}),p.appendChild(m),i.appendChild(p),a.appendChild(i);const x=document.createElement("div");x.className="sb-comment-window-body";const E=document.createElement("p");E.className="sb-comment-window-text",E.textContent=n.text??"",x.appendChild(E),x.appendChild(Bn(n));const _=n.replies??[];if(_.length>0){const v=document.createElement("div");v.className="sb-comment-window-replies";const k=document.createElement("div");k.className="sb-comment-window-replies-label",k.textContent=`${_.length} ${_.length===1?"Reply":"Replies"}`,v.appendChild(k);for(const N of _){const T=document.createElement("div");if(T.className="sb-reply-item",N.author?.avatarUrl){const F=document.createElement("img");F.className="sb-reply-avatar",F.src=N.author.avatarUrl,F.alt=N.author.login??"",T.appendChild(F)}const B=document.createElement("div");B.className="sb-reply-content";const P=document.createElement("div");P.className="sb-reply-meta";const w=document.createElement("span");if(w.className="sb-reply-author",w.textContent=N.author?.login??"unknown",P.appendChild(w),N.createdAt){const F=document.createElement("span");F.className="sb-reply-time",F.textContent=Mn(N.createdAt),P.appendChild(F)}B.appendChild(P);const V=document.createElement("p");V.className="sb-reply-text",V.textContent=N.text??N.body??"",B.appendChild(V),B.appendChild(Bn(N)),T.appendChild(B),v.appendChild(T)}x.appendChild(v)}if(a.appendChild(x),s&&r){const v=document.createElement("div");v.className="sb-comment-window-reply-form";const k=document.createElement("textarea");k.className="sb-reply-textarea",k.placeholder="Reply…",v.appendChild(k);const N=document.createElement("div");N.className="sb-reply-form-actions";const T=document.createElement("button");T.className="sb-reply-submit-btn",T.textContent="Reply",T.disabled=!0,k.addEventListener("input",()=>{T.disabled=!k.value.trim()});async function B(){const P=k.value.trim();if(P){T.disabled=!0,T.textContent="Posting…";try{await Qc(r.id,n.id,P),k.value="",T.textContent="Reply",o.onMove?.()}catch(w){console.error("[storyboard] Failed to post reply:",w),T.textContent="Reply",T.disabled=!1}}}T.addEventListener("click",B),k.addEventListener("keydown",P=>{P.key==="Enter"&&(P.metaKey||P.ctrlKey)&&(P.preventDefault(),B()),P.key==="Escape"&&(P.preventDefault(),P.stopPropagation())}),N.appendChild(T),v.appendChild(N),a.appendChild(v)}let A=!1,M=0,D=0,U=0,ce=0;function fe(v){if(v.target.closest(".sb-comment-window-header-actions"))return;A=!0,M=v.clientX,D=v.clientY;const k=t.getBoundingClientRect();U=parseFloat(a.style.left)/100*k.width,ce=parseFloat(a.style.top)/100*k.height,document.addEventListener("mousemove",Te),document.addEventListener("mouseup",Le),v.preventDefault()}function Te(v){if(!A)return;const k=v.clientX-M,N=v.clientY-D,T=t.getBoundingClientRect(),B=U+k,P=ce+N,w=Math.round(B/T.width*1e3)/10,V=Math.round(P/T.height*1e3)/10;a.style.left=`${w}%`,a.style.top=`${V}%`}async function Le(v){if(!A)return;A=!1,document.removeEventListener("mousemove",Te),document.removeEventListener("mouseup",Le);const k=t.getBoundingClientRect(),N=v.clientX-M,T=v.clientY-D,B=U+N,P=ce+T,w=Math.round(B/k.width*1e3)/10,V=Math.round(P/k.height*1e3)/10;if(Math.abs(N)>2||Math.abs(T)>2){n.meta={...n.meta,x:w,y:V};const F=t.querySelectorAll(".sb-comment-pin");for(const le of F)if(le._commentId===n.id){le.style.left=`${w}%`,le.style.top=`${V}%`;break}try{await tl(n.id,n._rawBody??"",w,V),n._rawBody=null}catch(le){console.error("[storyboard] Failed to move comment:",le)}}}i.addEventListener("mousedown",fe),a.addEventListener("click",v=>v.stopPropagation());const Je=new URL(window.location.href);Je.searchParams.set("comment",n.id),window.history.replaceState(null,"",Je.toString()),t.appendChild(a);function Pe(){document.removeEventListener("mousemove",Te),document.removeEventListener("mouseup",Le),a.remove(),K?.el===a&&(K=null);const v=new URL(window.location.href);v.searchParams.delete("comment"),window.history.replaceState(null,"",v.toString()),o.onClose?.()}return K={el:a,destroy:Pe},{el:a,destroy:Pe}}function Fr(){K&&(K.destroy(),K=null)}const dl='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="%23fff" stroke-width="1.5" d="M19.503 9.97c1.204.489 1.112 2.224-.137 2.583l-6.305 1.813l-2.88 5.895c-.571 1.168-2.296.957-2.569-.314L4.677 6.257A1.369 1.369 0 0 1 6.53 4.7z" clip-rule="evenodd"/></svg>',Hn="sb-comment-mode-style";function ul(){if(document.getElementById(Hn))return;const t=document.createElement("style");t.id=Hn,t.textContent=`
    .sb-comment-mode {
      cursor: url("data:image/svg+xml,${dl}") 4 2, crosshair;
    }
    .sb-comment-overlay {
      position: absolute;
      inset: 0;
      z-index: 99998;
      pointer-events: none;
    }
    .sb-comment-overlay.active {
      pointer-events: auto;
    }
    .sb-comment-mode-banner {
      position: fixed;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99999;
      background: rgba(0, 0, 0, 0.85);
      color: #fff;
      padding: 6px 16px;
      border-radius: 8px;
      font: 13px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      display: flex;
      align-items: center;
      gap: 8px;
      pointer-events: none;
      backdrop-filter: blur(8px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .sb-comment-mode-banner kbd {
      display: inline-block;
      padding: 1px 5px;
      font-size: 11px;
      font-family: inherit;
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      background: rgba(255,255,255,0.1);
    }
    .sb-comment-pin {
      position: absolute;
      z-index: 100000;
      width: 32px;
      height: 32px;
      margin-left: -16px;
      margin-top: -16px;
      border-radius: 50%;
      background: #161b22;
      border: 3px solid hsl(var(--pin-hue, 140), 50%, 38%);
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      pointer-events: auto;
      transition: transform 100ms ease;
      overflow: hidden;
    }
    .sb-comment-pin img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }
    .sb-comment-pin:hover {
      transform: scale(1.15);
    }
    .sb-comment-pin[data-resolved="true"] {
      border-color: #8b949e;
      opacity: 0.5;
    }
  `,document.head.appendChild(t)}let oe=null,se=null,q=null,Ht=[],pt=null;function Xt(){return document.querySelector("main")||document.body}function St(){if(se)return se;const t=Xt();return getComputedStyle(t).position==="static"&&(t.style.position="relative"),se=document.createElement("div"),se.className="sb-comment-overlay",t.appendChild(se),se}function pl(){oe||(oe=document.createElement("div"),oe.className="sb-comment-mode-banner",oe.innerHTML="Comment mode — click to place a comment. Press <kbd>C</kbd> or <kbd>Esc</kbd> to exit.",document.body.appendChild(oe))}function hl(){oe&&(oe.remove(),oe=null)}function qr(){return window.location.pathname}function Zt(){for(const t of Ht)t.remove();Ht=[]}function Vr(t,n,r){const o=document.createElement("div");o.className="sb-comment-pin",o.style.left=`${n.meta?.x??0}%`,o.style.top=`${n.meta?.y??0}%`;const s=r*137.5%360;if(o.style.setProperty("--pin-hue",String(Math.round(s))),n.author?.avatarUrl){const a=document.createElement("img");a.src=n.author.avatarUrl,a.alt=n.author.login??"",o.appendChild(a)}return n.meta?.resolved&&o.setAttribute("data-resolved","true"),o.title=`${n.author?.login??"unknown"}: ${n.text?.slice(0,80)??""}`,o._commentId=n.id,n._rawBody=n.body,o.addEventListener("click",a=>{a.stopPropagation(),q&&(q.destroy(),q=null),Ur(t,n,pt,{onClose:()=>{},onMove:()=>kt()})}),t.appendChild(o),Ht.push(o),o}function Wr(){if(!pt?.comments?.length)return;const t=St();Zt(),pt.comments.forEach((n,r)=>{n.meta?.x!=null&&n.meta?.y!=null&&Vr(t,n,r)})}async function kt(){if(!ut())return;const t=St();Wr();try{const n=await Mr(qr());if(pt=n,Zt(),!n?.comments?.length)return;n.comments.forEach((r,o)=>{r.meta?.x!=null&&r.meta?.y!=null&&Vr(t,r,o)}),ml(t,n)}catch(n){console.warn("[storyboard] Could not load comments:",n.message)}}function ml(t,n){const r=new URLSearchParams(window.location.search).get("comment");if(!r||!n?.comments?.length)return;const o=n.comments.find(s=>s.id===r);if(o){if(o.meta?.y!=null){const s=Xt(),a=o.meta.y/100*s.scrollHeight,i=s.scrollTop||window.scrollY,l=i+window.innerHeight;if(a<i||a>l){const d=Math.max(0,a-window.innerHeight/3);window.scrollTo({top:d,behavior:"smooth"})}}o._rawBody=o.body,Ur(t,o,n,{onClose:()=>{},onMove:()=>kt()})}}function gl(t){if(!rt()||t.target.closest(".sb-composer")||t.target.closest(".sb-comment-pin")||t.target.closest(".sb-comment-window"))return;Fr(),q&&(q.destroy(),q=null);const n=Xt(),r=n.getBoundingClientRect(),o=Math.round((t.clientX-r.left)/r.width*1e3)/10,s=Math.round((t.clientY-r.top+n.scrollTop)/n.scrollHeight*1e3)/10,a=St();q=ol(a,o,s,qr(),{onCancel:()=>{q=null},onSubmit:()=>{q=null,kt()}})}function fl(t){t?(document.body.classList.add("sb-comment-mode"),pl(),St().classList.add("active"),Wr(),kt()):(document.body.classList.remove("sb-comment-mode"),hl(),q&&(q.destroy(),q=null),Fr(),Zt(),se&&se.classList.remove("active"))}let Un=!1;function bl(){Un||(Un=!0,ul(),Uc(fl),document.addEventListener("click",t=>{rt()&&(t.target.closest(".sb-devtools-wrapper")||t.target.closest(".sb-auth-backdrop")||t.target.closest(".sb-comments-drawer")||t.target.closest(".sb-comments-drawer-backdrop")||gl(t))}),window.addEventListener("keydown",t=>{const n=t.target.tagName;if(!(n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||t.target.isContentEditable)){if(t.key==="c"&&!t.metaKey&&!t.ctrlKey&&!t.altKey){if(!$t())return;if(t.preventDefault(),!rt()&&!ut()){il();return}Hc()}t.key==="Escape"&&rt()&&(t.preventDefault(),An(!1))}}),$t()&&ut()&&new URLSearchParams(window.location.search).get("comment")&&An(!0))}const xl={repo:{owner:"dfosco",name:"storyboard"},discussions:{category:"General"}},vl={comments:xl},Gr=ys(Dc,{basename:"/storyboard/branch--comments-system/"});yo(Gr,"/storyboard/branch--comments-system/");Ys();Gs();Zs(vl);bl();const yl=document.getElementById("root"),jl=gs.createRoot(yl);jl.render(e.jsx(b.StrictMode,{children:e.jsx(fs,{colorMode:"auto",children:e.jsxs(bs,{children:[e.jsx(kr,{}),e.jsx(js,{router:Gr})]})})}));
