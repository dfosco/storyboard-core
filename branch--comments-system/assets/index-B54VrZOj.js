import{j as e,S as B,I as Wr,T,U as ln,N as _t,a as Ze,b as Dn,C as Vr,c as Jr,B as Y,d as Gr,F as $,A as ve,e as de,f as Yr,g as Kr,L as Qe,h as dn,u as Xr,i as Zr,k as Qr,l as eo}from"./vendor-primer-Cp2w2YFd.js";import{b,u as Mn,O as Bn,f as Mt,g as to,L as Se,h as no,i as ro,j as oo}from"./vendor-react-BQyrhFMj.js";import{C as oe,V as d,T as h,D as X,R as Oe,B as De,a as so,b as Lt,P as ao,S as un,F as y,c as be,d as Z,e as fe,A as pn,M as ye}from"./vendor-reshaped-DIoD2FDs.js";import{o as io,M as Hn,p as Be,l as Ce,k as He,q as Bt,r as dt,s as Ue,t as Ie,u as ke,v as Ht,w as Ut,x as Un,H as Ft,y as ut,F as co,z as lo,m as uo,L as po,B as mo,R as pt,D as Fn,E as qn,J as ho,K as go,N as fo,O as bo,Q as Wn,U as Vn,V as xo,W as vo,c as mn,Y as yo,Z as jo,b as wo,_ as _o,$ as hn,a0 as Je}from"./vendor-octicons-CjKpnuJU.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();function tt(t,n){const o={...t};for(const s of Object.keys(n)){const r=n[s],a=t[s];r!==null&&typeof r=="object"&&!Array.isArray(r)&&a!==null&&typeof a=="object"&&!Array.isArray(a)?o[s]=tt(a,r):o[s]=r}return o}let V={scenes:{},objects:{},records:{}};function So(t){if(!t||typeof t!="object")throw new Error("[storyboard-core] init() requires { scenes, objects, records }");V={scenes:t.scenes||{},objects:t.objects||{},records:t.records||{}}}function Tt(t,n){if(n&&V[n]?.[t]!=null)return V[n][t];if(!n){for(const o of["scenes","objects","records"])if(V[o]?.[t]!=null)return V[o][t]}if(n==="scenes"||!n){const o=t.toLowerCase();for(const s of Object.keys(V.scenes))if(s.toLowerCase()===o)return V.scenes[s]}throw new Error(`Data file not found: ${t}${n?` (type: ${n})`:""}`)}function Pe(t,n=new Set){if(t===null||typeof t!="object")return t;if(Array.isArray(t))return t.map(s=>Pe(s,n));if(t.$ref&&typeof t.$ref=="string"){const s=t.$ref;if(n.has(s))throw new Error(`Circular $ref detected: ${s}`);n.add(s);const r=Tt(s,"objects");return Pe(r,n)}const o={};for(const[s,r]of Object.entries(t))o[s]=Pe(r,n);return o}function ko(t){if(V.scenes[t]!=null)return!0;const n=t.toLowerCase();for(const o of Object.keys(V.scenes))if(o.toLowerCase()===n)return!0;return!1}function Co(t="default"){let n;try{n=Tt(t,"scenes")}catch{throw new Error(`Failed to load scene: ${t}`)}if(Array.isArray(n.$global)){const o=n.$global;delete n.$global;let s={};for(const r of o)try{let a=Tt(r);a=Pe(a),s=tt(s,a)}catch(a){console.warn(`Failed to load $global: ${r}`,a)}n=tt(s,n)}return n=Pe(n),structuredClone(n)}function qt(t){const n=V.records[t];if(n==null)throw new Error(`Record not found: ${t}`);if(!Array.isArray(n))throw new Error(`Record "${t}" must be an array, got ${typeof n}`);return structuredClone(n)}function Io(t,n){return qt(t).find(s=>s.id===n)??null}function Jn(t,n){if(t==null||typeof n!="string"||n==="")return;const o=n.split(".");let s=t;for(const r of o){if(s==null||typeof s!="object")return;s=s[r]}return s}function Me(t){if(Array.isArray(t))return t.map(Me);if(t!==null&&typeof t=="object"){const n={};for(const o of Object.keys(t))n[o]=Me(t[o]);return n}return t}function nt(t,n,o){const s=n.split(".");let r=t;for(let a=0;a<s.length-1;a++){const i=s[a];(r[i]==null||typeof r[i]!="object")&&(r[i]=/^\d+$/.test(s[a+1])?[]:{}),r=r[i]}r[s[s.length-1]]=o}function mt(){const t=window.location.hash.replace(/^#/,"");return new URLSearchParams(t)}function Gn(t){const n=t.toString();window.location.hash=n}function Yn(t){return mt().get(t)}function pe(t,n){const o=mt();o.set(t,String(n)),Gn(o)}function Kn(){const t=mt(),n={};for(const[o,s]of t.entries())n[o]=s;return n}function rt(t){const n=mt();n.delete(t),Gn(n)}const ht="storyboard:";function gt(t){try{return localStorage.getItem(ht+t)}catch{return null}}function W(t,n){try{localStorage.setItem(ht+t,String(n)),Wt()}catch{}}function ot(t){try{localStorage.removeItem(ht+t),Wt()}catch{}}function Xn(t){const n=()=>{Zn(),t()};return window.addEventListener("storage",n),window.addEventListener("storyboard-storage",n),()=>{window.removeEventListener("storage",n),window.removeEventListener("storyboard-storage",n)}}let Re=null;function Zn(){Re=null}function Qn(){if(Re!==null)return Re;try{const t=[];for(let n=0;n<localStorage.length;n++){const o=localStorage.key(n);o&&o.startsWith(ht)&&t.push(o+"="+localStorage.getItem(o))}return Re=t.sort().join("&"),Re}catch{return""}}function Wt(){Zn(),window.dispatchEvent(new Event("storyboard-storage"))}const Vt="__hide__",st="historyState",je="currentState",xe="nextState",gn=200;function $e(){return gt(Vt)==="1"}function Eo(){Fe(),W(Vt,"1");const t=new URL(window.location.href);t.searchParams.delete("hide"),t.hash="",window.history.replaceState(window.history.state,"",t.toString())}function No(){const t=qe();if(t){window.location.hash="";const n=new URLSearchParams(t);for(const[o,s]of n.entries())pe(o,s)}ot(Vt),Ro("show")}function ft(){return window.location.pathname}function er(){return new URLSearchParams(window.location.hash.replace(/^#/,"")).toString()}function Fe(t,n){const o=t!==void 0?t:er(),s=n!==void 0?n:ft(),r=bt(),a=xt();if(a!==null&&r[a]){const[,c,m]=r[a];if(c===s&&m===o)return}const i=a!==null?r.slice(0,a+1):r,l=i.length,u=[l,s,o],p=[...i,u];if(p.length>gn){const c=p.slice(p.length-gn);for(let m=0;m<c.length;m++)c[m]=[m,c[m][1],c[m][2]];W(st,JSON.stringify(c)),W(je,String(c.length-1))}else W(st,JSON.stringify(p)),W(je,String(l));ot(xe)}function bt(){const t=gt(st);if(!t)return[];try{const n=JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}}function xt(){const t=gt(je);if(t===null)return null;const n=parseInt(t,10);return Number.isNaN(n)?null:n}function Lo(){const t=gt(xe);if(t===null)return null;const n=parseInt(t,10);return Number.isNaN(n)?null:n}function qe(){const t=xt();if(t===null)return null;const n=bt();return n[t]?n[t][2]:null}function tr(){const t=xt();if(t===null)return null;const n=bt();return n[t]?n[t][1]:null}function nr(t){const n=qe();return n?new URLSearchParams(n).get(t):null}function fn(t,n){const o=qe()||"",s=new URLSearchParams(o);s.set(t,String(n)),Fe(s.toString(),tr()||ft())}function bn(t){const n=qe()||"",o=new URLSearchParams(n);o.delete(t),Fe(o.toString(),tr()||ft())}function To(){const t=qe();if(!t)return{};const n=new URLSearchParams(t),o={};for(const[s,r]of n.entries())o[s]=r;return o}function xn(){if($e())return;const t=ft(),n=er(),o=bt(),s=xt();if(!n&&!t&&o.length===0)return;const r=o.findIndex(([,l,u])=>l===t&&u===n);if(r===-1){Fe(n,t);return}if(r===s)return;const a=s!==null?s-1:null,i=Lo();if(a!==null&&r===a)W(xe,String(s)),W(je,String(r));else if(i!==null&&r===i){const l=i+1;o[l]?W(xe,String(l)):ot(xe),W(je,String(r))}else{ot(xe),W(je,String(r));const l=o.slice(0,r+1);W(st,JSON.stringify(l))}Wt()}function Ao(){Fe(),window.addEventListener("hashchange",()=>xn()),window.addEventListener("popstate",()=>xn())}function Ro(t){const n=new URL(window.location.href);n.searchParams.has(t)&&(n.searchParams.delete(t),window.history.replaceState(window.history.state,"",n.toString()))}function at(){const t=new URL(window.location.href);if(t.searchParams.has("hide")){Eo();return}if(t.searchParams.has("show")){No();return}}function Po(){at(),window.addEventListener("popstate",()=>at())}function vt(t){return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)}function Jt(){return window.location.hash}let we=null;function $o(t){if(!t||!t.comments){we=null;return}const n=t.comments;we={repo:{owner:n.repo?.owner??"",name:n.repo?.name??""},discussions:{category:n.discussions?.category??"Storyboard Comments"}}}function rr(){return we}function At(){return we!==null&&we.repo.owner!==""&&we.repo.name!==""}const zo={navigation:{$ref:"navigation"},user:{name:"John Doe",username:"johndoe",role:"admin",avatar:"https://avatars.githubusercontent.com/u/1?v=4",profile:{bio:"Designer & developer",location:"San Francisco, CA"}},projects:[{id:1,name:"primer-react",description:"React components for the Primer Design System",owner:{name:"GitHub",avatar:"https://avatars.githubusercontent.com/u/9919?v=4"},stars:2500,issues:42},{id:2,name:"storyboard",description:"Prototyping meta-framework",owner:{name:"Jane Doe",avatar:"https://avatars.githubusercontent.com/u/1?v=4"},stars:128,issues:7}],settings:{theme:"dark_dimmed",notifications:!0,language:"en"}},Oo={user:{$ref:"jane-doe"},navigation:{$ref:"navigation"},projects:[{id:1,name:"primer-react",description:"React components for the Primer Design System",owner:{name:"GitHub",avatar:"https://avatars.githubusercontent.com/u/9919?v=4"},stars:2500,issues:42},{id:2,name:"storyboard",description:"Prototyping meta-framework",owner:{name:"Jane Doe",avatar:"https://avatars.githubusercontent.com/u/1?v=4"},stars:128,issues:7}],settings:{theme:"dark_dimmed",notifications:!0,language:"en"},signup:{fullName:"",email:"",password:"",organization:{name:"",size:"",role:""},workspace:{region:"",plan:"starter",newsletter:!1,agreeTerms:!1}}},Do={$global:["security-advisory-navigation"],advisory:{$ref:"security-advisory"}},Mo={$global:["finch-pearl-navigation"],repositories:{$ref:"finch-pearl-repositories"}},Bo={id:10,title:"Remote code injection in Log4j",breadcrumb:"Dependabot alerts",state:"fixed",openedAgo:"4 years ago",fixedAgo:"3 years ago",package:{name:"org.apache.logging.log4j:log4j-core",ecosystem:"Maven",affectedVersions:">= 2.13.0, < 2.15.0",patchedVersion:"2.15.0"},severity:{level:"Critical",score:"10.0 / 10",cvssMetrics:[{label:"Attack vector",value:"Network"},{label:"Attack complexity",value:"Low"},{label:"Privileges required",value:"None"},{label:"User interaction",value:"None"},{label:"Scope",value:"Changed"},{label:"Confidentiality",value:"High"},{label:"Integrity",value:"High"},{label:"Availability",value:"High"}],cvssVector:"CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H/E:H"},epss:{score:"94.358%",percentile:"100th percentile"},tags:["Patch available"],weaknesses:["CWE-20","CWE-400","CWE-502","CWE-917"],cveId:"CVE-2021-44228",ghsaId:"GHSA-jfh8-c2jp-5v3q",timeline:[{actor:"dependabot",actorAvatar:"https://avatars.githubusercontent.com/in/29110?v=4",isBot:!0,action:"opened this",timeAgo:"4 years ago"},{actor:"dependabot",actorAvatar:"https://avatars.githubusercontent.com/in/29110?v=4",isBot:!0,action:"closed this as completed",timeAgo:"3 years ago"}]},Ho={topnav:[{icon:"code",label:"Code",url:"#"},{icon:"issue-opened",label:"Issues",url:"#"},{icon:"git-pull-request",label:"Pull requests",url:"#"},{icon:"people",label:"Agents",url:"#"},{icon:"play",label:"Actions",url:"#"},{icon:"project",label:"Projects",url:"#"},{icon:"star",label:"Models",url:"#"},{icon:"book",label:"Wiki",url:"#"},{icon:"shield",label:"Security",url:"#",counter:95,current:!0},{icon:"graph",label:"Insights",url:"#"},{icon:"gear",label:"Settings",url:"#"}]},Uo={primary:[{label:"Overview",url:"/Overview",icon:"home"},{label:"Issues",url:"/Issues",icon:"issue-opened"},{label:"Pull Requests",url:"#",icon:"git-pull-request"},{label:"Discussions",url:"#",icon:"comment-discussion"}],secondary:[{label:"Settings",url:"#",icon:"gear"},{label:"Help",url:"#",icon:"question"}]},Fo={name:"Jane Doe",username:"janedoe",role:"admin",avatar:"https://avatars.githubusercontent.com/u/1?v=4",profile:{bio:"Designer & developer",location:"San Francisco, CA"}},qo=[{name:"test-webdriverio-update-copilot-issue",description:"",language:null,forks:0,stars:0,url:"#"},{name:"dependabot-copilot-autofix",description:"Testing Autofix using Copilot Workspaces",language:"JavaScript",forks:0,stars:0,url:"#"},{name:"alona-copilot",description:"",language:null,forks:0,stars:0,url:"#"},{name:"spike-dependabot-snapshot-action",description:"Copilot-driven spike into using Dependabot as a dependency detector",language:"JavaScript",forks:0,stars:0,url:"#"},{name:"ghas-copilot-geekmasher",description:"",language:"JavaScript",forks:0,stars:0,url:"#"},{name:"copilot-autofix-demo-by-ot",description:"",language:"JavaScript",forks:0,stars:0,url:"#"}],Wo={topnav:[{icon:"home",label:"Overview",url:"/Overview"},{icon:"repo",label:"Repositories",url:"/Repositories",counter:"5k+",current:!0},{icon:"project",label:"Projects",url:"#",counter:25},{icon:"package",label:"Packages",url:"#",counter:21},{icon:"people",label:"Teams",url:"#",counter:132},{icon:"person",label:"People",url:"#",counter:571},{icon:"shield",label:"Security",url:"#"},{icon:"graph",label:"Insights",url:"#"},{icon:"gear",label:"Settings",url:"#"}],sidenav:[{label:"All",url:"#",icon:"repo",current:!0},{label:"Contributed by me",url:"#",icon:"git-pull-request"},{label:"Adminable by me",url:"#",icon:"person"},{label:"Public",url:"#",icon:"eye"},{label:"Internal",url:"#",icon:"lock"},{label:"Private",url:"#",icon:"lock"},{label:"Sources",url:"#",icon:"code"},{label:"Forks",url:"#",icon:"repo-forked"},{label:"Archived",url:"#",icon:"archive"},{label:"Templates",url:"#",icon:"repo-template"}]},Vo=[{id:"refactor-auth-sso",identifier:"FIL-10",title:"Refactor authentication flow to support SSO providers",description:"Our current auth flow only supports email/password login. We need to extend it to support SSO providers (Google, Okta, Azure AD) for enterprise customers.",status:"todo",priority:"high",labels:["Auth","Backend","Feature"],assignee:null,project:null,estimate:5,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-17T10:50:00Z",acceptanceCriteria:["Users can authenticate via Google OAuth 2.0","Users can authenticate via SAML-based SSO (Okta, Azure AD)","Existing email/password flow remains unchanged","Session tokens are issued consistently regardless of auth method","Admin panel includes SSO configuration settings"],technicalNotes:["Use the existing AuthService class as the base","Add a provider strategy pattern to abstract login methods","Store provider metadata in the identity_providers table","Redirect URI callback must handle both web and mobile clients"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"10min ago"}]},{id:"fix-rate-limiter-bypass",identifier:"FIL-9",title:"Fix rate limiter bypass on batch endpoints",description:"The rate limiter can be bypassed by splitting a large request into multiple smaller batch calls. Each sub-request is counted as a single hit instead of being weighted by payload size.",status:"in_progress",priority:"urgent",labels:["Bug","Security","Backend"],assignee:"danielfosco",assigneeAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",project:"Platform Infrastructure",estimate:3,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-16T14:20:00Z",acceptanceCriteria:["Batch endpoints count each item in the payload toward the rate limit","Rate limit headers reflect weighted counts","Existing single-request endpoints are unaffected"],technicalNotes:["Update RateLimiterMiddleware to accept a weight function","Batch controller should pass payload.length as weight","Add integration tests for weighted rate limiting"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"1 day ago"},{type:"comment",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"6 hours ago",body:"Started investigating — the middleware doesn't have access to parsed body at the point it runs. May need to restructure."}]},{id:"add-webhook-retry-logic",identifier:"FIL-8",title:"Add exponential backoff retry logic for webhook deliveries",description:"Webhook deliveries currently fail silently on timeout. We need retry logic with exponential backoff and a dead-letter queue for persistently failing endpoints.",status:"todo",priority:"medium",labels:["Feature","Backend"],assignee:null,project:"Platform Infrastructure",estimate:8,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-15T09:00:00Z",acceptanceCriteria:["Failed webhook deliveries are retried up to 5 times","Retry intervals follow exponential backoff (1s, 2s, 4s, 8s, 16s)","After all retries, the event is moved to a dead-letter queue","Delivery status is visible in the admin dashboard"],technicalNotes:["Use the existing job queue (BullMQ) for retry scheduling","Add a webhook_deliveries table to track attempts","Dead-letter events should be replayable from the admin UI"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"2 days ago"}]},{id:"dashboard-loading-skeleton",identifier:"FIL-7",title:"Add loading skeletons to dashboard widgets",description:"Dashboard widgets show a blank space while data is loading. Add skeleton loaders to improve perceived performance.",status:"done",priority:"low",labels:["Feature","Frontend"],assignee:"danielfosco",assigneeAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",project:"Dashboard",estimate:2,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-12T16:30:00Z",acceptanceCriteria:["All dashboard cards show skeleton loaders while fetching data","Skeleton matches the shape of the loaded content","Transition from skeleton to content is smooth"],technicalNotes:["Use Reshaped Skeleton component","Wrap each StatCard in a loading boundary"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"5 days ago"},{type:"comment",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"3 days ago",body:"Done — merged in FIL-7-skeletons branch."}]},{id:"migrate-env-config",identifier:"FIL-6",title:"Migrate environment config to typed schema validation",description:"Environment variables are currently accessed via raw process.env lookups with no validation. Migrate to a typed config schema using zod so missing or malformed values are caught at startup.",status:"todo",priority:"medium",labels:["Backend","DevEx"],assignee:null,project:null,estimate:3,author:"danielfosco",authorAvatar:"https://avatars.githubusercontent.com/u/4331946?v=4",createdAt:"2026-02-10T11:00:00Z",acceptanceCriteria:["All environment variables are defined in a single config schema","Server fails fast on startup if required variables are missing","Types are inferred from the schema — no manual type assertions"],technicalNotes:["Use zod for schema definition and parsing","Create src/config.ts as the single source of truth","Replace all process.env.X references with config.X"],activity:[{type:"created",user:"danielfosco",avatar:"https://avatars.githubusercontent.com/u/4331946?v=4",time:"1 week ago"}]}],Jo=[{id:"welcome-to-storyboard",title:"Welcome to Storyboard",date:"2026-02-14",author:"Jane Doe",summary:"An introduction to building prototypes with Storyboard — the meta-framework for design system exploration.",body:`Storyboard is a prototyping meta-framework that lets you build interactive UI prototypes powered by real data. Instead of hard-coding sample content, you define data files that feed into your pages automatically.

Each page can load a scene (its data context), reference shared objects, and even render parameterized content from record collections — like this very blog post.

Get started by creating a \`.scene.json\` file and a page component. The data flows in, and you focus on the design.`},{id:"data-driven-prototyping",title:"Data-Driven Prototyping",date:"2026-02-13",author:"Jane Doe",summary:"How scenes, objects, and records work together to power realistic prototypes.",body:`Traditional prototyping tools force you to duplicate content across screens. Storyboard takes a different approach: your data lives in JSON files, and pages consume it through hooks.

**Scenes** provide the full data context for a page. **Objects** are reusable fragments — a user profile, a navigation config — that scenes reference via \`$ref\`. **Records** are collections that power parameterized pages, like blog posts or product listings.

This separation means you can swap data without touching UI code, test edge cases by editing JSON, and share data fragments across multiple pages.`},{id:"design-system-exploration",title:"Exploring Design Systems",date:"2026-02-12",author:"Jane Doe",summary:"Using Storyboard to explore and compare design systems like Primer and Reshaped.",body:`One of Storyboard's strengths is its design system agnosticism. While it ships with Primer React as the default, you can bring any design system — Reshaped, Radix, Chakra, or your own.

Each page is independent: one page can use Primer components while another uses Reshaped. This makes Storyboard ideal for comparing design systems side by side, exploring component APIs, and building proof-of-concept pages before committing to a system.

The key is that the data layer stays the same regardless of which components render it.`}],Go={"other-scene":zo,default:Oo,SecurityAdvisory:Do,Repositories:Mo},Yo={"security-advisory":Bo,"security-advisory-navigation":Ho,navigation:Uo,"jane-doe":Fo,"finch-pearl-repositories":qo,"finch-pearl-navigation":Wo},Ko={issues:Vo,posts:Jo};So({scenes:Go,objects:Yo,records:Ko});const yt=b.createContext(null);function Xo(){return new URLSearchParams(window.location.search).get("scene")}function Zo(){const t=window.location.pathname.replace(/\/+$/,"")||"/";return t==="/"?"index":t.split("/").pop()||"index"}function Qo({sceneName:t,recordName:n,recordParam:o,children:s}){const r=Zo(),a=Xo()||t||(ko(r)?r:"default"),i=Mn(),{data:l,error:u}=b.useMemo(()=>{try{let c=Co(a);if(n&&o&&i[o]){const m=Io(n,i[o]);m&&(c=tt(c,{record:m}))}return{data:c,error:null}}catch(c){return{data:null,error:c.message}}},[a,n,o,i]),p={data:l,error:u,loading:!1,sceneName:a};return u?e.jsxs("span",{style:{color:"var(--fgColor-danger, #f85149)"},children:["Error loading scene: ",u]}):e.jsx(yt.Provider,{value:p,children:s})}function z(t){const n=b.useContext(yt);if(n===null)throw new Error("useSceneData must be used within a <StoryboardProvider>");const{data:o,loading:s,error:r}=n,a=b.useSyncExternalStore(vt,Jt),i=b.useSyncExternalStore(Xn,Qn);return b.useMemo(()=>{if(s||r||o==null)return;const u=$e(),p=u?nr:Yn,c=u?To:Kn;if(!t){const R=c(),D=Object.keys(R);if(D.length===0)return o;const O=Me(o);for(const H of D)nt(O,H,R[H]);return O}const m=p(t);if(m!==null)return m;const g=t+".",x=c(),N=Object.keys(x).filter(R=>R.startsWith(g)),_=Jn(o,t);if(N.length>0&&_!==void 0){const R=Me(_);for(const D of N){const O=D.slice(g.length);nt(R,O,x[D])}return R}return _===void 0?(console.warn(`[useSceneData] Path "${t}" not found in scene data.`),{}):_},[o,s,r,t,a,i])}function j(t){const n=b.useContext(yt);if(n===null)throw new Error("useOverride must be used within a <StoryboardProvider>");const{data:o}=n,s=$e(),r=o!=null?Jn(o,t):void 0,a=b.useCallback(()=>Yn(t),[t]),i=b.useSyncExternalStore(vt,a);b.useSyncExternalStore(Xn,Qn);let l;if(s){const c=nr(t);l=c!==null?c:r}else l=i!==null?i:r;const u=b.useCallback(c=>{$e()||pe(t,c),fn(t,c)},[t]),p=b.useCallback(()=>{$e()||rt(t),bn(t)},[t]);return[l,u,p]}function es(){const t=b.useContext(yt);if(t===null)throw new Error("useScene must be used within a <StoryboardProvider>");const n=b.useCallback(o=>{const s=new URL(window.location.href);s.searchParams.set("scene",o),window.location.href=s.toString()},[]);return{sceneName:t.sceneName,switchScene:n}}function or(t,n){const o=Kn(),s=`record.${n}.`,r=Object.keys(o).filter(l=>l.startsWith(s));if(r.length===0)return t;const a=Me(t),i={};for(const l of r){const u=l.slice(s.length),p=u.indexOf(".");if(p===-1)continue;const c=u.slice(0,p),m=u.slice(p+1);i[c]||(i[c]={}),i[c][m]=o[l]}for(const[l,u]of Object.entries(i)){const p=a.find(c=>c.id===l);if(p)for(const[c,m]of Object.entries(u))nt(p,c,m);else{const c={id:l};for(const[m,g]of Object.entries(u))nt(c,m,g);a.push(c)}}return a}function sr(t,n="id"){const s=Mn()[n],r=b.useSyncExternalStore(vt,Jt);return b.useMemo(()=>{if(!s)return null;try{const a=qt(t);return or(a,t).find(l=>l[n]===s)??null}catch(a){return console.error(`[useRecord] ${a.message}`),null}},[t,n,s,r])}function ar(t){const n=b.useSyncExternalStore(vt,Jt);return b.useMemo(()=>{try{const o=qt(t);return or(o,t)}catch(o){return console.error(`[useRecords] ${o.message}`),[]}},[t,n])}function ce(t,n,o){return j(`record.${t}.${n}.${o}`)}function ts(t,n=""){const o=n.replace(/\/+$/,"");document.addEventListener("click",r=>{if(r.metaKey||r.ctrlKey||r.shiftKey||r.altKey)return;const a=r.target.closest("a[href]");if(!a||a.target==="_blank")return;const i=new URL(a.href,window.location.origin);if(i.origin!==window.location.origin)return;const l=window.location.hash,u=l&&l!=="#",c=i.hash&&i.hash!=="#"?i.hash:u?l:"";let m=i.pathname;o&&m.startsWith(o)&&(m=m.slice(o.length)||"/"),r.preventDefault(),t.navigate(m+i.search+c),setTimeout(at,0)});const s=t.navigate.bind(t);t.navigate=(r,a)=>{const i=window.location.hash;return i&&i!=="#"&&typeof r=="string"&&!r.includes("#")&&(r=r+i),s(r,a).then(u=>(at(),u))}}const We=b.createContext(null);function ns(){return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",backgroundColor:"var(--bgColor-default, #0d1117)"},children:[e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",style:{animation:"spin 0.8s linear infinite"},children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"var(--fgColor-muted, #484f58)",strokeWidth:"2.5",opacity:"0.25"}),e.jsx("path",{d:"M12 2a10 10 0 0 1 10 10",stroke:"var(--fgColor-default, #e6edf3)",strokeWidth:"2.5",strokeLinecap:"round"})]}),e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg) } }"})]})}function rs(){return e.jsx(Qo,{children:e.jsx(b.Suspense,{fallback:e.jsx(ns,{}),children:e.jsx(Bn,{})})})}const os=Object.freeze(Object.defineProperty({__proto__:null,default:rs},Symbol.toStringTag,{value:"Module"})),ss="_navItem_ec50i_1",as="_active_ec50i_16",vn={navItem:ss,active:as},is=[{label:"Overview",path:"/Dashboard"},{label:"Issues",path:"/issues"},{label:"Projects",path:"/Dashboard"},{label:"Views",path:"/Dashboard"}];function it({orgName:t,activePage:n,userInfo:o}){const s=Mt();return e.jsx(oe,{padding:4,children:e.jsxs(d,{direction:"column",gap:2,children:[e.jsx(h,{variant:"featured-3",weight:"bold",children:t||"—"}),e.jsx(X,{}),e.jsx("nav",{children:e.jsx(d,{direction:"column",gap:0,children:is.map(r=>e.jsx("button",{type:"button",className:`${vn.navItem} ${n===r.label?vn.active:""}`,onClick:()=>s(r.path),children:e.jsx(h,{variant:"body-3",weight:n===r.label?"bold":"regular",children:r.label})},r.label))})}),o&&e.jsxs(e.Fragment,{children:[e.jsx(X,{}),e.jsxs(d,{direction:"column",gap:1,paddingTop:1,children:[e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:o.name||"—"}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:o.role||"—"})]})]})]})})}function he(t){return t==null||t===""?"—":String(t)}function Ge({label:t,value:n,change:o,color:s}){return e.jsx(oe,{padding:5,children:e.jsxs(d,{direction:"column",gap:2,children:[e.jsx(h,{variant:"body-3",color:"neutral-faded",children:t}),e.jsx(h,{variant:"featured-2",weight:"bold",children:n}),e.jsx(h,{variant:"caption-1",color:s||"positive",children:o})]})})}function Te({label:t,value:n,max:o,color:s}){return e.jsxs(d,{direction:"column",gap:1,children:[e.jsxs(d,{direction:"row",justify:"space-between",children:[e.jsx(h,{variant:"body-3",children:t}),e.jsx(h,{variant:"body-3",weight:"medium",children:n})]}),e.jsx(ao,{value:typeof o=="number"?parseFloat(n)/o*100:parseFloat(n),color:s,size:"small",attributes:{"aria-label":t}})]})}const cs=[{label:"Team standup",time:"Today, 10:00"},{label:"Architecture review",time:"Today, 11:30"},{label:"Lunch",time:"Today, 12:30"},{label:"Sprint planning",time:"Today, 14:00"},{label:"Deploy v2.4",time:"Today, 17:00"}];function ls(){const t=z("signup.fullName"),n=z("signup.organization.name"),o=z("signup.organization.size"),s=z("signup.organization.role"),r=z("signup.workspace.region"),a=z("signup.workspace.plan");return e.jsx(Oe,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(d,{backgroundColor:"page",minHeight:"100vh",padding:12,children:e.jsxs(d,{direction:"row",align:"start",gap:8,wrap:"no-wrap",children:[e.jsx(d.Item,{columns:2,children:e.jsx(it,{orgName:he(n),activePage:"Overview",userInfo:{name:he(t),role:he(s)}})}),e.jsx(d.Item,{columns:10,direction:"column",align:"center",justify:"center",children:e.jsxs(d,{direction:"column",maxWidth:"80%",gap:4,children:[e.jsxs(d,{direction:"row",justify:"space-between",align:"center",children:[e.jsx(h,{variant:"featured-2",weight:"bold",children:"Overview"}),e.jsxs(d,{direction:"row",gap:2,align:"center",children:[e.jsxs(De,{color:"positive",children:[he(a)," plan"]}),e.jsx(De,{variant:"faded",children:he(r)})]})]}),e.jsxs(d,{direction:"row",gap:3,children:[e.jsx(d.Item,{columns:3,children:e.jsx(Ge,{label:"Active Users",value:"0",change:"No data yet",color:"neutral-faded"})}),e.jsx(d.Item,{columns:3,children:e.jsx(Ge,{label:"Deployments",value:"0",change:"No data yet",color:"neutral-faded"})}),e.jsx(d.Item,{columns:3,children:e.jsx(Ge,{label:"New Members",value:"1",change:"That's you!",color:"primary"})}),e.jsx(d.Item,{columns:3,children:e.jsx(Ge,{label:"Team Size",value:he(o),change:"Current plan capacity",color:"primary"})})]}),e.jsxs(d,{direction:"row",gap:4,children:[e.jsx(d.Item,{columns:5,children:e.jsxs(d,{direction:"column",gap:4,children:[e.jsx(oe,{padding:4,children:e.jsx(so,{})}),e.jsx(oe,{padding:5,children:e.jsxs(d,{direction:"column",gap:3,children:[e.jsx(h,{variant:"body-2",weight:"bold",children:"Schedule"}),e.jsx(d,{direction:"column",gap:2,children:cs.map(i=>e.jsx(Lt,{name:`schedule-${i.label}`,children:e.jsxs(d,{direction:"column",children:[e.jsx(h,{variant:"body-3",children:i.label}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:i.time})]})},i.label))})]})})]})}),e.jsx(d.Item,{grow:!0,children:e.jsxs(d,{direction:"column",gap:4,children:[e.jsx(oe,{padding:5,children:e.jsxs(d,{direction:"column",gap:4,children:[e.jsx(h,{variant:"body-2",weight:"bold",children:"Metrics"}),e.jsx(Te,{label:"Performance",value:"0",max:100,color:"neutral-faded"}),e.jsx(Te,{label:"Monthly revenue goal",value:"0",max:100,color:"neutral-faded"}),e.jsx(Te,{label:"Error rate",value:"0",max:100,color:"neutral-faded"}),e.jsx(Te,{label:"User acquisition",value:"0",max:100,color:"neutral-faded"}),e.jsx(Te,{label:"Releases shipped",value:"0",max:100,color:"neutral-faded"})]})}),e.jsx(oe,{padding:5,children:e.jsxs(d,{direction:"column",gap:3,children:[e.jsx(h,{variant:"body-2",weight:"bold",children:"Recent activity"}),e.jsx(X,{}),e.jsxs(d,{direction:"column",gap:4,align:"center",paddingBlock:6,children:[e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"No activity yet"}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"Deployments and events will appear here once your workspace is active."})]})]})})]})})]})]})})]})})})}const ds=Object.freeze(Object.defineProperty({__proto__:null,default:ls},Symbol.toStringTag,{value:"Module"}));var St={exports:{}},kt,yn;function us(){if(yn)return kt;yn=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return kt=t,kt}var Ct,jn;function ps(){if(jn)return Ct;jn=1;var t=us();function n(){}function o(){}return o.resetWarningCache=n,Ct=function(){function s(i,l,u,p,c,m){if(m!==t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}s.isRequired=s;function r(){return s}var a={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:r,element:s,elementType:s,instanceOf:r,node:s,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a},Ct}var wn;function ms(){return wn||(wn=1,St.exports=ps()()),St.exports}var hs=ms();const J=to(hs),gs="_header_1282e_1",fs="_headerContent_1282e_8",bs="_titleWrapper_1282e_17",xs="_separator_1282e_21",vs="_subtitle_1282e_25",Ae={header:gs,headerContent:fs,titleWrapper:bs,separator:xs,subtitle:vs},ys=[{icon:Be,label:"Code",current:!0},{icon:Ce,label:"Issues",counter:30},{icon:He,label:"Pull Requests",counter:3},{icon:Bt,label:"Discussions"},{icon:dt,label:"Actions"},{icon:Ue,label:"Projects",counter:7},{icon:Ie,label:"Security",counter:12},{icon:ke,label:"Insights"}];function ir({items:t=ys,title:n,subtitle:o}){return e.jsxs(B,{as:"header",className:Ae.header,children:[e.jsxs("div",{className:Ae.headerContent,children:[e.jsx(Wr,{icon:io,"aria-label":"Open global navigation menu",unsafeDisableTooltip:!0}),e.jsx(Hn,{size:32}),e.jsxs(B,{direction:"horizontal",gap:"condensed",className:Ae.titleWrapper,children:[e.jsx("span",{children:n||"title"}),o&&e.jsxs(e.Fragment,{children:[e.jsx(T,{className:Ae.separator,children:"/"}),e.jsx(T,{className:Ae.subtitle,children:o||"subtitle"})]})]})]}),e.jsx(ln,{"aria-label":"Repository",children:t.map(s=>e.jsx(ln.Item,{icon:s.icon,"aria-current":s.current?"page":void 0,counter:s.counter,href:s.url,children:s.label},s.label))})]})}ir.propTypes={items:J.arrayOf(J.shape({icon:J.elementType,label:J.string.isRequired,current:J.bool,counter:J.number,url:J.string})),title:J.string,subtitle:J.string};const js=[{icon:Ce,label:"Open issues",url:"#"},{icon:Ht,label:"Your issues",url:"#"},{icon:Ut,label:"Assigned to you",url:"#",current:!0},{icon:Un,label:"Mentioning you",url:"#"}];function ws({items:t=js}){return e.jsx(_t,{"aria-label":"Navigation",children:t.map(n=>e.jsxs(_t.Item,{href:n.url,"aria-current":n.current?"page":void 0,children:[n.icon&&e.jsx(_t.LeadingVisual,{children:e.jsx(n.icon,{})}),n.label]},n.label))})}const _s="_wrapper_74lhx_1",Ss="_navigation_74lhx_7",ks="_main_74lhx_13",Cs="_container_74lhx_22",Ye={wrapper:_s,navigation:Ss,main:ks,container:Cs};function se({children:t,title:n,subtitle:o,topnav:s,sidenav:r}){return e.jsxs(B,{className:Ye.container,children:[e.jsx(ir,{title:n,subtitle:o,items:s}),e.jsxs("div",{className:Ye.wrapper,children:[r&&e.jsx("aside",{className:Ye.navigation,children:e.jsx(ws,{items:r})}),e.jsx("main",{className:Ye.main,children:t})]})]})}function ze({name:t,onChange:n,value:o,...s}){const r=b.useContext(We),a=r?.prefix&&t?`${r.prefix}.${t}`:t,[i]=j(a||""),[l,u]=b.useState(i??""),p=!!r&&!!t;b.useEffect(()=>{if(p)return r.subscribe(t,g=>u(g))},[p,r,t]),b.useEffect(()=>{p&&i!=null&&(u(i),r.setDraft(t,i))},[]);const c=g=>{p&&(u(g.target.value),r.setDraft(t,g.target.value)),n&&n(g)},m=p?l:o;return e.jsx(Ze,{name:t,value:m,onChange:c,...s})}function le({name:t,onChange:n,value:o,children:s,...r}){const a=b.useContext(We),i=a?.prefix&&t?`${a.prefix}.${t}`:t,[l]=j(i||""),[u,p]=b.useState(l??""),c=!!a&&!!t;b.useEffect(()=>{if(c)return a.subscribe(t,x=>p(x))},[c,a,t]),b.useEffect(()=>{c&&l!=null&&(p(l),a.setDraft(t,l))},[]);const m=x=>{c&&(p(x.target.value),a.setDraft(t,x.target.value)),n&&n(x)},g=c?u:o;return e.jsx(Dn,{name:t,value:g,onChange:m,...r,children:s})}le.Option=Dn.Option;function Is({name:t,onChange:n,checked:o,...s}){const r=b.useContext(We),a=r?.prefix&&t?`${r.prefix}.${t}`:t,[i]=j(a||""),l=i==="true"||i===!0,[u,p]=b.useState(l),c=!!r&&!!t;b.useEffect(()=>{if(c)return r.subscribe(t,x=>p(x==="true"||x===!0))},[c,r,t]),b.useEffect(()=>{if(c&&i!=null){const x=i==="true"||i===!0;p(x),r.setDraft(t,x?"true":"false")}},[]);const m=x=>{c&&(p(x.target.checked),r.setDraft(t,x.target.checked?"true":"false")),n&&n(x)},g=c?u:o;return e.jsx(Vr,{name:t,checked:g,onChange:m,...s})}function cr({name:t,onChange:n,value:o,...s}){const r=b.useContext(We),a=r?.prefix&&t?`${r.prefix}.${t}`:t,[i]=j(a||""),[l,u]=b.useState(i??""),p=!!r&&!!t;b.useEffect(()=>{if(p)return r.subscribe(t,g=>u(g))},[p,r,t]),b.useEffect(()=>{p&&i!=null&&(u(i),r.setDraft(t,i))},[]);const c=g=>{p&&(u(g.target.value),r.setDraft(t,g.target.value)),n&&n(g)},m=p?l:o;return e.jsx(Jr,{name:t,value:m,onChange:c,...s})}function lr({data:t,onSubmit:n,children:o,...s}){const r=t||null,a=b.useRef({}),i=b.useRef({}),l=b.useCallback(g=>a.current[g],[]),u=b.useCallback((g,x)=>{a.current[g]=x;const N=i.current[g];N&&N(x)},[]),p=b.useCallback((g,x)=>(i.current[g]=x,()=>{delete i.current[g]}),[]),c=g=>{if(g.preventDefault(),r)for(const[x,N]of Object.entries(a.current))pe(`${r}.${x}`,N);n&&n(g)},m={prefix:r,getDraft:l,setDraft:u,subscribe:p};return e.jsx(We.Provider,{value:m,children:e.jsx("form",{...s,onSubmit:c,children:o})})}const Es="_container_1ykvj_1",Ns="_title_1ykvj_5",Ls="_codeBlock_1ykvj_11",Ts="_form_1ykvj_38",ge={container:Es,title:Ns,codeBlock:Ls,form:Ts};function As(){const[t,n,o]=j("user.name"),[s,r,a]=j("user.username"),[i,,l]=j("user.profile.bio"),[u,,p]=j("user.profile.location"),{sceneName:c,switchScene:m}=es(),g=c==="default"?"other-scene":"default",x=()=>{o(),a(),l(),p()};return e.jsxs("div",{className:ge.container,children:[e.jsx("h2",{className:ge.title,children:"useOverride Demo"}),e.jsxs("p",{children:["Add ",e.jsx("code",{children:"#user.name=Alice"})," to the URL hash to override any value."]}),e.jsxs("section",{children:[e.jsx(T,{as:"h3",fontWeight:"bold",children:"Scene"}),e.jsxs("pre",{className:ge.codeBlock,children:["current: ",c]}),e.jsxs(Y,{size:"small",onClick:()=>m(g),children:['Switch to "',g,'"']})]}),e.jsxs("section",{children:[e.jsx(T,{as:"h3",fontWeight:"bold",children:"User"}),e.jsxs("pre",{className:ge.codeBlock,children:[t," (",s,")"]}),e.jsxs("pre",{className:ge.codeBlock,children:[i," · ",u]}),e.jsx(T,{as:"h4",fontWeight:"semibold",fontSize:1,children:"Switch User"}),e.jsxs(Gr,{children:[e.jsx(Y,{size:"small",onClick:()=>n("Alice Chen"),children:"Update name"}),e.jsx(Y,{size:"small",onClick:()=>r("alice123"),children:"Update username"})]}),e.jsx(Y,{size:"small",variant:"danger",onClick:x,style:{marginLeft:"8px"},children:"Reset"})]}),e.jsx("a",{href:"/storyboard/Overview",children:"hello"}),e.jsxs("section",{children:[e.jsx(T,{as:"h3",fontWeight:"bold",children:"Edit User"}),e.jsxs(lr,{data:"user",className:ge.form,children:[e.jsxs($,{children:[e.jsx($.Label,{children:"Name"}),e.jsx(ze,{name:"name",placeholder:"Name",size:"small"})]}),e.jsxs($,{children:[e.jsx($.Label,{children:"Username"}),e.jsx(ze,{name:"username",placeholder:"Username",size:"small"})]}),e.jsxs($,{children:[e.jsx($.Label,{children:"Bio"}),e.jsx(cr,{name:"profile.bio",placeholder:"Bio"})]}),e.jsxs($,{children:[e.jsx($.Label,{children:"Location"}),e.jsx(ze,{name:"profile.location",placeholder:"Location",size:"small"})]}),e.jsx(Y,{type:"submit",size:"small",children:"Save"})]})]})]})}const Rs=[{icon:Ft,label:"Home",url:"/"},{icon:ut,label:"Forms",url:"/Forms",current:!0}];function Ps(){const[,,t]=j("checkout");return e.jsxs(se,{title:"Storyboard",subtitle:"Forms",topnav:Rs,children:[e.jsx(T,{as:"h1",fontSize:"larger",children:"Form Components Demo"}),e.jsx(T,{as:"p",color:"fg.muted",children:"Type in the fields below, then click Submit to persist values in the URL hash. Refresh the page or share the URL to restore state."}),e.jsx(lr,{data:"checkout",children:e.jsxs(B,{direction:"vertical",gap:"normal",padding:"normal",children:[e.jsxs($,{children:[e.jsx($.Label,{children:"Email"}),e.jsx(ze,{name:"email",placeholder:"you@example.com"})]}),e.jsxs($,{children:[e.jsx($.Label,{children:"Full Name"}),e.jsx(ze,{name:"name",placeholder:"Jane Doe"})]}),e.jsxs($,{children:[e.jsx($.Label,{children:"Shipping Address"}),e.jsx(cr,{name:"address",placeholder:"123 Main St..."})]}),e.jsxs($,{children:[e.jsx($.Label,{children:"Country"}),e.jsxs(le,{name:"country",children:[e.jsx(le.Option,{value:"",children:"Select a country"}),e.jsx(le.Option,{value:"us",children:"United States"}),e.jsx(le.Option,{value:"ca",children:"Canada"}),e.jsx(le.Option,{value:"uk",children:"United Kingdom"}),e.jsx(le.Option,{value:"de",children:"Germany"})]})]}),e.jsxs($,{children:[e.jsx(Is,{name:"newsletter"}),e.jsx($.Label,{children:"Subscribe to newsletter"})]}),e.jsxs(B,{direction:"horizontal",gap:"condensed",children:[e.jsx(Y,{type:"submit",variant:"primary",children:"Submit"}),e.jsx(Y,{type:"button",variant:"danger",onClick:()=>t(),children:"Reset"})]})]})})]})}const $s=Object.freeze(Object.defineProperty({__proto__:null,default:Ps},Symbol.toStringTag,{value:"Module"})),zs=[{icon:Be,label:"Code",url:"/"},{icon:Ce,label:"Issues",counter:10,url:"#issues",current:!0},{icon:He,label:"Pull Requests",counter:3,url:"/overview"},{icon:Bt,label:"Discussions"},{icon:dt,label:"Actions"},{icon:Ue,label:"Projects",counter:7},{icon:Ie,label:"Security",counter:12},{icon:ke,label:"Insights"}],Os=[{icon:Ce,label:"Open issues",url:""},{icon:Ht,label:"Your issues",url:""},{icon:Ut,label:"Assigned to you",url:"",current:!0},{icon:Un,label:"Mentioning you",url:""}];function Ds(){return e.jsx(se,{title:"Primer",subtitle:"React",topnav:zs,sidenav:Os,children:"This is the issues page"})}const Ms=Object.freeze(Object.defineProperty({__proto__:null,default:Ds},Symbol.toStringTag,{value:"Module"})),Bs="_title_1bvkv_1",Hs="_card_1bvkv_4",Us="_cardText_1bvkv_12",It={title:Bs,card:Hs,cardText:Us},Fs=[{icon:Ft,label:"Overview",url:"/",current:!0},{icon:Ce,label:"Organizations",url:"#issues"},{icon:He,label:"People"},{icon:Bt,label:"Policies"},{icon:dt,label:"GitHub Connect"},{icon:Ue,label:"Code Security",counter:7},{icon:Ie,label:"Billing & Licensing",counter:12},{icon:ke,label:"Settings"},{icon:ke,label:"Compliance"}];function qs(){return e.jsxs(se,{title:"Primer",subtitle:"React",topnav:Fs,children:[e.jsx(T,{as:"h1",className:It.title,fontSize:"larger",children:"Overview"}),e.jsxs("div",{className:It.card,children:[e.jsx(T,{as:"p",className:It.cardText,fontSize:"medium",children:"This is a card in the overview"}),e.jsx(Y,{children:"Edit"})]})]})}const Ws=Object.freeze(Object.defineProperty({__proto__:null,default:qs},Symbol.toStringTag,{value:"Module"})),Vs="_content_qz2dt_1",Js="_pageHeader_qz2dt_6",Gs="_pageTitle_qz2dt_13",Ys="_filterBar_qz2dt_19",Ks="_filterInput_qz2dt_26",Xs="_searchAction_qz2dt_30",Zs="_listHeader_qz2dt_34",Qs="_repoCount_qz2dt_44",ea="_listControls_qz2dt_49",ta="_sortButton_qz2dt_55",na="_viewToggle_qz2dt_59",ra="_viewButton_qz2dt_66",oa="_viewButtonActive_qz2dt_81",sa="_repoList_qz2dt_86",aa="_repoItem_qz2dt_95",ia="_repoInfo_qz2dt_107",ca="_repoIcon_qz2dt_114",la="_repoName_qz2dt_119",da="_repoDescription_qz2dt_131",ua="_repoMeta_qz2dt_139",pa="_metaItem_qz2dt_148",ma="_language_qz2dt_154",ha="_languageDot_qz2dt_160",I={content:Vs,pageHeader:Js,pageTitle:Gs,filterBar:Ys,filterInput:Ks,searchAction:Xs,listHeader:Zs,repoCount:Qs,listControls:ea,sortButton:ta,viewToggle:na,viewButton:ra,viewButtonActive:oa,repoList:sa,repoItem:aa,repoInfo:ia,repoIcon:ca,repoName:la,repoDescription:da,repoMeta:ua,metaItem:pa,language:ma,languageDot:ha},ga={home:Ft,repo:pt,project:Ue,package:Vn,people:Wn,person:Ut,shield:Ie,graph:ke,gear:ut,"git-pull-request":He,eye:bo,lock:fo,code:Be,"repo-forked":Fn,archive:go,"repo-template":ho};function _n(t){return typeof t=="string"?ga[t]||pt:t}function fa(){const t=z("topnav"),n=Array.isArray(t)?t.map(i=>({...i,icon:_n(i.icon)})):[],o=z("sidenav"),s=Array.isArray(o)?o.map(i=>({...i,icon:_n(i.icon)})):[],r=z("repositories"),a=Array.isArray(r)?r:[];return e.jsx(se,{title:"dsp-testing",topnav:n,sidenav:s,children:e.jsxs("div",{className:I.content,children:[e.jsxs("header",{className:I.pageHeader,children:[e.jsx("h2",{className:I.pageTitle,children:"All"}),e.jsx(Y,{variant:"primary",children:"New repository"})]}),e.jsxs("div",{className:I.filterBar,children:[e.jsx(Ze,{leadingVisual:co,placeholder:"Filter",value:"copilot",className:I.filterInput,trailingAction:e.jsx(Ze.Action,{icon:lo,"aria-label":"Clear filter"})}),e.jsx(Ze,{leadingVisual:uo,placeholder:"","aria-label":"Search repositories",className:I.searchAction})]}),e.jsxs("div",{className:I.listHeader,children:[e.jsx("span",{className:I.repoCount,children:e.jsxs("strong",{children:[a.length," repositories"]})}),e.jsxs("div",{className:I.listControls,children:[e.jsxs(ve,{children:[e.jsx(ve.Button,{size:"small",className:I.sortButton,children:"Last pushed"}),e.jsx(ve.Overlay,{children:e.jsxs(de,{children:[e.jsx(de.Item,{children:"Last pushed"}),e.jsx(de.Item,{children:"Name"}),e.jsx(de.Item,{children:"Stars"})]})})]}),e.jsxs("div",{className:I.viewToggle,children:[e.jsx("button",{className:`${I.viewButton} ${I.viewButtonActive}`,"aria-label":"List view",children:e.jsx(po,{size:16})}),e.jsx("button",{className:I.viewButton,"aria-label":"Grid view",children:e.jsx(mo,{size:16})})]})]})]}),e.jsx("ul",{className:I.repoList,children:a.map(i=>e.jsxs("li",{className:I.repoItem,children:[e.jsxs("div",{className:I.repoInfo,children:[e.jsx(pt,{size:16,className:I.repoIcon}),e.jsx("a",{href:i.url,className:I.repoName,children:i.name}),i.description&&e.jsx("span",{className:I.repoDescription,children:i.description})]}),e.jsxs("div",{className:I.repoMeta,children:[i.language&&e.jsxs("span",{className:I.language,children:[e.jsx("span",{className:I.languageDot}),i.language]}),e.jsx("span",{className:I.metaItem,children:e.jsx(ut,{size:16})}),e.jsxs("span",{className:I.metaItem,children:[e.jsx(Fn,{size:16})," ",i.forks]}),e.jsxs("span",{className:I.metaItem,children:[e.jsx(qn,{size:16})," ",i.stars]})]})]},i.name))})]})})}const ba=Object.freeze(Object.defineProperty({__proto__:null,default:fa},Symbol.toStringTag,{value:"Module"})),xa="_pageWrapper_1x2wf_1",va="_breadcrumb_1x2wf_7",ya="_breadcrumbLink_1x2wf_15",ja="_breadcrumbSeparator_1x2wf_27",wa="_breadcrumbCurrent_1x2wf_31",_a="_pageTitle_1x2wf_36",Sa="_issueNumber_1x2wf_42",ka="_stateMeta_1x2wf_48",Ca="_metaText_1x2wf_56",Ia="_contentLayout_1x2wf_66",Ea="_mainContent_1x2wf_73",Na="_packageTable_1x2wf_78",La="_packageColumn_1x2wf_88",Ta="_packageLabel_1x2wf_94",Aa="_packageValue_1x2wf_99",Ra="_packageCode_1x2wf_107",Pa="_copyIcon_1x2wf_112",$a="_advisoryBody_1x2wf_118",za="_timeline_1x2wf_165",Oa="_timelineItem_1x2wf_173",Da="_timelineBadge_1x2wf_179",Ma="_openedIcon_1x2wf_185",Ba="_closedIcon_1x2wf_189",Ha="_timelineText_1x2wf_193",Ua="_botLabel_1x2wf_205",Fa="_sidebar_1x2wf_210",qa="_sidebarSection_1x2wf_216",Wa="_sidebarHeading_1x2wf_228",Va="_severityScore_1x2wf_234",Ja="_criticalLabel_1x2wf_240",Ga="_scoreText_1x2wf_244",Ya="_metricsHeading_1x2wf_250",Ka="_metricsTable_1x2wf_257",Xa="_metricLabel_1x2wf_274",Za="_metricValue_1x2wf_278",Qa="_learnMore_1x2wf_284",ei="_cvssVector_1x2wf_294",ti="_epssScore_1x2wf_301",ni="_tagList_1x2wf_308",ri="_tag_1x2wf_308",oi="_weaknessList_1x2wf_319",si="_weaknessItem_1x2wf_328",ai="_sidebarValue_1x2wf_334",ii="_sidebarLink_1x2wf_340",ci="_contributeText_1x2wf_353",li="_contributeLink_1x2wf_358",f={pageWrapper:xa,breadcrumb:va,breadcrumbLink:ya,breadcrumbSeparator:ja,breadcrumbCurrent:wa,pageTitle:_a,issueNumber:Sa,stateMeta:ka,metaText:Ca,contentLayout:Ia,mainContent:Ea,packageTable:Na,packageColumn:La,packageLabel:Ta,packageValue:Aa,packageCode:Ra,copyIcon:Pa,advisoryBody:$a,timeline:za,timelineItem:Oa,timelineBadge:Da,openedIcon:Ma,closedIcon:Ba,timelineText:Ha,botLabel:Ua,sidebar:Fa,sidebarSection:qa,sidebarHeading:Wa,severityScore:Va,criticalLabel:Ja,scoreText:Ga,metricsHeading:Ya,metricsTable:Ka,metricLabel:Xa,metricValue:Za,learnMore:Qa,cvssVector:ei,epssScore:ti,tagList:ni,tag:ri,weaknessList:oi,weaknessItem:si,sidebarValue:ai,sidebarLink:ii,contributeText:ci,contributeLink:li},di={code:Be,"issue-opened":Ce,"git-pull-request":He,people:Wn,play:dt,project:Ue,star:qn,book:xo,shield:Ie,graph:ke,gear:ut};function ui(){const t=z("topnav"),n=Array.isArray(t)?t.map(c=>({...c,icon:di[c.icon]||Be})):[],o=z("advisory")||{},s=o.package||{},r=o.severity||{},a=Array.isArray(r.cvssMetrics)?r.cvssMetrics:[],i=Array.isArray(o.tags)?o.tags:[],l=Array.isArray(o.weaknesses)?o.weaknesses:[],u=Array.isArray(o.timeline)?o.timeline:[],p=o.epss||{};return e.jsx(se,{title:"octodemo",subtitle:"test-se-fs-gitogether-repo",topnav:n,children:e.jsxs("div",{className:f.pageWrapper,children:[e.jsxs("nav",{className:f.breadcrumb,children:[e.jsxs("a",{href:"#",className:f.breadcrumbLink,children:[e.jsx(vo,{size:16}),e.jsx("span",{children:o.breadcrumb})]}),e.jsx("span",{className:f.breadcrumbSeparator,children:"/"}),e.jsxs("span",{className:f.breadcrumbCurrent,children:["#",o.id]})]}),e.jsxs("h1",{className:f.pageTitle,children:[o.title," ",e.jsxs("span",{className:f.issueNumber,children:["#",o.id]})]}),e.jsxs("div",{className:f.stateMeta,children:[e.jsxs(Yr,{status:"issueClosed",variant:"small",children:[e.jsx(mn,{size:16})," Fixed"]}),e.jsxs("span",{className:f.metaText,children:["Opened ",o.openedAgo," on ",e.jsx("strong",{children:s.name})," (",s.ecosystem,") · · · Fixed ",o.fixedAgo]})]}),e.jsxs("div",{className:f.contentLayout,children:[e.jsxs("div",{className:f.mainContent,children:[e.jsxs("div",{className:f.packageTable,children:[e.jsxs("div",{className:f.packageColumn,children:[e.jsx("span",{className:f.packageLabel,children:"Package"}),e.jsxs("span",{className:f.packageValue,children:[e.jsx(Vn,{size:16})," ",s.name," (",s.ecosystem,")"]})]}),e.jsxs("div",{className:f.packageColumn,children:[e.jsx("span",{className:f.packageLabel,children:"Affected versions"}),e.jsx("code",{className:f.packageCode,children:s.affectedVersions})]}),e.jsxs("div",{className:f.packageColumn,children:[e.jsx("span",{className:f.packageLabel,children:"Patched version"}),e.jsxs("span",{className:f.packageValue,children:[e.jsx("strong",{children:s.patchedVersion})," ",e.jsx(yo,{size:16,className:f.copyIcon})]})]})]}),e.jsxs("article",{className:f.advisoryBody,children:[e.jsx("h2",{children:"Summary"}),e.jsx("p",{children:"Log4j versions prior to 2.16.0 are subject to a remote code execution vulnerability via the ldap JNDI parser."}),e.jsxs("p",{children:["As per ",e.jsx("a",{href:"#",children:"Apache's Log4j security guide"}),": Apache Log4j2 <=2.14.1 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.16.0, this behavior has been disabled by default."]}),e.jsxs("p",{children:["Log4j version 2.15.0 contained an earlier fix for the vulnerability, but that patch did not disable attacker-controlled JNDI lookups in all situations. For more information, see the ",e.jsx("code",{children:"Updated advice for version 2.16.0"})," section of this advisory."]}),e.jsx("h2",{children:"Impact"}),e.jsx("p",{children:"Logging untrusted or user controlled data with a vulnerable version of Log4J may result in Remote Code Execution (RCE) against your application. This includes untrusted data included in logged errors such as exception traces, authentication failures, and other unexpected vectors of user controlled input."}),e.jsx("h2",{children:"Affected versions"}),e.jsx("p",{children:"Any Log4J version prior to v2.15.0 is affected to this specific issue."}),e.jsx("p",{children:"The v1 branch of Log4J which is considered End Of Life (EOL) is vulnerable to other RCE vectors so the recommendation is to still update to 2.16.0 where possible."}),e.jsx("h2",{children:"Security releases"}),e.jsx("p",{children:"Additional backports of this fix have been made available in versions 2.3.1, 2.12.2, and 2.12.3"}),e.jsx("h2",{children:"Affected packages"}),e.jsxs("p",{children:["Only the ",e.jsx("code",{children:"org.apache.logging.log4j:log4j-core"})," package is directly affected by this vulnerability. The ",e.jsx("code",{children:"org.apache.logging.log4j:log4j-api"})," should be kept at the same version as the ",e.jsx("code",{children:"org.apache.logging.log4j-core"})," package to ensure compatability if in use."]}),e.jsx("h2",{children:"Remediation Advice"}),e.jsx("h3",{children:"Updated advice for version 2.16.0"}),e.jsxs("p",{children:["The Apache Logging Services team provided updated mitigation advice upon the release of version 2.16.0, which ",e.jsx("a",{href:"#",children:"disables JNDI by default and completely removes support for message lookups"}),"."]}),e.jsxs("p",{children:["Even in version 2.15.0, lookups used in layouts to provide specific pieces of context information will still recursively resolve, possibly triggering JNDI lookups. This problem is being tracked as ",e.jsx("a",{href:"#",children:"CVE-2021-45046"}),". More information is available on the ",e.jsx("a",{href:"#",children:"GitHub Security Advisory for CVE-2021-45046"}),"."]}),e.jsxs("p",{children:["Users who want to avoid attacker-controlled JNDI lookups but cannot upgrade to 2.16.0 must ",e.jsx("a",{href:"#",children:"ensure that no such lookups resolve to attacker-provided data and ensure that the JndiLookup class is not loaded"}),"."]}),e.jsx("p",{children:"Please note that Log4J v1 is End Of Life (EOL) and will not receive patches for this issue. Log4J v1 is also vulnerable to other RCE vectors and we recommend you migrate to Log4J 2.16.0 where possible."})]}),e.jsx("div",{className:f.timeline,children:u.map((c,m)=>e.jsxs("div",{className:f.timelineItem,children:[e.jsx("div",{className:f.timelineBadge,children:c.action.includes("closed")?e.jsx(mn,{size:16,className:f.closedIcon}):e.jsx(Ie,{size:16,className:f.openedIcon})}),e.jsx(Kr,{src:c.actorAvatar,size:20,alt:c.actor}),e.jsxs("span",{className:f.timelineText,children:[e.jsx("strong",{children:c.actor}),c.isBot&&e.jsx(Qe,{size:"small",className:f.botLabel,children:"bot"})," ",c.action," ",c.timeAgo]})]},m))})]}),e.jsxs("aside",{className:f.sidebar,children:[e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"Severity"}),e.jsxs("div",{className:f.severityScore,children:[e.jsx(Qe,{variant:"danger",className:f.criticalLabel,children:r.level}),e.jsx("span",{className:f.scoreText,children:r.score})]})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h4",{className:f.metricsHeading,children:"CVSS v3 base metrics"}),e.jsx("table",{className:f.metricsTable,children:e.jsx("tbody",{children:a.map(c=>e.jsxs("tr",{children:[e.jsx("td",{className:f.metricLabel,children:c.label}),e.jsx("td",{className:f.metricValue,children:c.value})]},c.label))})}),e.jsx("a",{href:"#",className:f.learnMore,children:"Learn more about base metrics"}),e.jsx("p",{className:f.cvssVector,children:r.cvssVector})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"EPSS score"}),e.jsxs("p",{className:f.epssScore,children:[p.score," (",p.percentile,")"]})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"Tags"}),e.jsx("div",{className:f.tagList,children:i.map(c=>e.jsx(Qe,{className:f.tag,children:c},c))})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"Weaknesses"}),e.jsx("ul",{className:f.weaknessList,children:l.map(c=>e.jsxs("li",{className:f.weaknessItem,children:["▸ ",c]},c))})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"CVE ID"}),e.jsx("p",{className:f.sidebarValue,children:o.cveId})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("h3",{className:f.sidebarHeading,children:"GHSA ID"}),e.jsx("p",{className:f.sidebarValue,children:o.ghsaId})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsxs("a",{href:"#",className:f.sidebarLink,children:[e.jsx(jo,{size:16})," See advisory in GitHub Advisory Database"]}),e.jsxs("a",{href:"#",className:f.sidebarLink,children:[e.jsx(pt,{size:16})," See all of your affected repositories"]})]}),e.jsxs("div",{className:f.sidebarSection,children:[e.jsx("p",{className:f.contributeText,children:"See something to contribute?"}),e.jsx("a",{href:"#",className:f.contributeLink,children:"Suggest improvements for this advisory on the GitHub Advisory Database."})]})]})]})]})})}const pi=Object.freeze(Object.defineProperty({__proto__:null,default:ui},Symbol.toStringTag,{value:"Module"})),Et=["Account","Organization","Workspace","Review"];function ee(t){return typeof t=="string"?t:""}function Sn(t){return t===!0||t==="true"}function Ke({name:t,defaultValue:n,onCommit:o,...s}){const r=b.useRef(n);return e.jsx(fe,{name:t,defaultValue:n,onChange:({value:a})=>{r.current=a},onBlur:()=>o(r.current),...s})}function mi(){const t=Mt(),[n,o]=j("signup.step"),s=Math.min(Math.max(parseInt(n,10)||0,0),Et.length-1),r=S=>{const P=typeof S=="function"?S(s):S;o(String(P))},[a,i,l]=j("signup.errors.fullName"),[u,p,c]=j("signup.errors.email"),[m,g,x]=j("signup.errors.password"),[N,_,R]=j("signup.errors.orgName"),[D,O,H]=j("signup.errors.orgSize"),[ae,me,Ee]=j("signup.errors.role"),[Ne,Ve,Le]=j("signup.errors.region"),[v,k,E]=j("signup.errors.plan"),[L,M,A]=j("signup.errors.agreeTerms"),w={fullName:a,email:u,password:m,orgName:N,orgSize:D,role:ae,region:Ne,plan:v,agreeTerms:L},q={fullName:i,email:p,password:g,orgName:_,orgSize:O,role:me,region:Ve,plan:k,agreeTerms:M},U={fullName:l,email:c,password:x,orgName:R,orgSize:H,role:Ee,region:Le,plan:E,agreeTerms:A},ie=()=>Object.values(U).forEach(S=>S()),Kt=S=>{ie(),Object.entries(S).forEach(([P,qr])=>q[P]?.(qr))},[Xt,Tr]=j("signup.fullName"),[Zt,Ar]=j("signup.email"),[Qt,Rr]=j("signup.password"),[en,Pr]=j("signup.organization.name"),[tn,$r]=j("signup.organization.size"),[nn,zr]=j("signup.organization.role"),[rn,Or]=j("signup.workspace.region"),[on,Dr]=j("signup.workspace.plan"),[sn,Mr]=j("signup.workspace.newsletter"),[an,Br]=j("signup.workspace.agreeTerms"),C=b.useMemo(()=>({fullName:ee(Xt),email:ee(Zt),password:ee(Qt),orgName:ee(en),orgSize:ee(tn),role:ee(nn),region:ee(rn),plan:ee(on)||"starter",newsletter:Sn(sn),agreeTerms:Sn(an)}),[Xt,Zt,Qt,en,tn,nn,rn,on,sn,an]);function cn(S){const P={};return S===0&&(C.fullName.trim()||(P.fullName="Full name is required."),C.email.trim()||(P.email="Email is required."),C.password.trim()||(P.password="Password is required.")),S===1&&(C.orgName.trim()||(P.orgName="Organization name is required."),C.orgSize.trim()||(P.orgSize="Organization size is required."),C.role.trim()||(P.role="Role is required.")),S===2&&(C.region.trim()||(P.region="Region is required."),C.plan.trim()||(P.plan="Plan is required."),C.agreeTerms||(P.agreeTerms="You must accept terms to continue.")),Kt(P),Object.keys(P).length===0}function Hr(){cn(s)&&r(S=>Math.min(S+1,Et.length-1))}function Ur(){Kt({}),r(S=>Math.max(S-1,0))}function Fr(){if(!cn(2)){r(2);return}t("/Dashboard")}return e.jsx(Oe,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(d,{backgroundColor:"page",minHeight:"100vh",padding:6,align:"center",justify:"center",children:e.jsxs(d,{maxWidth:"560px",width:"100%",direction:"column",gap:6,children:[e.jsxs(d,{direction:"column",gap:2,children:[e.jsx(h,{variant:"featured-1",weight:"bold",children:"Create your cloud account"}),e.jsx(h,{variant:"body-2",color:"neutral-faded",children:"Complete the onboarding flow to configure your account and organization."})]}),e.jsx(un,{activeId:String(s),children:Et.map((S,P)=>e.jsx(un.Item,{id:String(P),title:S,completed:P<s,subtitle:`Step ${P+1}`},S))}),e.jsx(oe,{padding:6,children:e.jsxs(d,{direction:"column",gap:5,children:[s===0&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{hasError:!!w.fullName,children:[e.jsx(y.Label,{children:"Full name"}),e.jsx(Ke,{name:"fullName",defaultValue:C.fullName,placeholder:"Jane Doe",onCommit:Tr}),w.fullName&&e.jsx(y.Error,{children:w.fullName})]}),e.jsxs(y,{hasError:!!w.email,children:[e.jsx(y.Label,{children:"Email"}),e.jsx(Ke,{name:"email",defaultValue:C.email,placeholder:"jane@acme.cloud",onCommit:Ar}),w.email&&e.jsx(y.Error,{children:w.email})]}),e.jsxs(y,{hasError:!!w.password,children:[e.jsx(y.Label,{children:"Password"}),e.jsx(Ke,{name:"password",defaultValue:C.password,onCommit:Rr,inputAttributes:{type:"password"}}),w.password&&e.jsx(y.Error,{children:w.password})]})]}),s===1&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{hasError:!!w.orgName,children:[e.jsx(y.Label,{children:"Organization name"}),e.jsx(Ke,{name:"orgName",defaultValue:C.orgName,placeholder:"Acme Cloud",onCommit:Pr}),w.orgName&&e.jsx(y.Error,{children:w.orgName})]}),e.jsxs(y,{hasError:!!w.orgSize,children:[e.jsx(y.Label,{children:"Organization size"}),e.jsxs(be,{name:"orgSize",value:C.orgSize,placeholder:"Select size",onChange:({value:S})=>$r(S),children:[e.jsx("option",{value:"1-10",children:"1–10 employees"}),e.jsx("option",{value:"11-50",children:"11–50 employees"}),e.jsx("option",{value:"51-250",children:"51–250 employees"}),e.jsx("option",{value:"251+",children:"251+ employees"})]}),w.orgSize&&e.jsx(y.Error,{children:w.orgSize})]}),e.jsxs(y,{hasError:!!w.role,children:[e.jsx(y.Label,{children:"Your role"}),e.jsxs(be,{name:"role",value:C.role,placeholder:"Select role",onChange:({value:S})=>zr(S),children:[e.jsx("option",{value:"founder",children:"Founder"}),e.jsx("option",{value:"engineering-manager",children:"Engineering Manager"}),e.jsx("option",{value:"developer",children:"Developer"}),e.jsx("option",{value:"platform-admin",children:"Platform Admin"})]}),w.role&&e.jsx(y.Error,{children:w.role})]})]}),s===2&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{hasError:!!w.region,children:[e.jsx(y.Label,{children:"Primary region"}),e.jsxs(be,{name:"region",value:C.region,placeholder:"Select region",onChange:({value:S})=>Or(S),children:[e.jsx("option",{value:"us-east-1",children:"US East"}),e.jsx("option",{value:"us-west-2",children:"US West"}),e.jsx("option",{value:"eu-west-1",children:"EU West"}),e.jsx("option",{value:"ap-southeast-1",children:"AP Southeast"})]}),w.region&&e.jsx(y.Error,{children:w.region})]}),e.jsxs(y,{hasError:!!w.plan,children:[e.jsx(y.Label,{children:"Starting plan"}),e.jsxs(be,{name:"plan",value:C.plan,onChange:({value:S})=>Dr(S),children:[e.jsx("option",{value:"starter",children:"Starter"}),e.jsx("option",{value:"growth",children:"Growth"}),e.jsx("option",{value:"enterprise",children:"Enterprise"})]}),w.plan&&e.jsx(y.Error,{children:w.plan})]}),e.jsx(Lt,{name:"newsletter",checked:C.newsletter,onChange:({checked:S})=>Mr(S?"true":"false"),children:"Email me product updates and onboarding tips"}),e.jsxs(y,{hasError:!!w.agreeTerms,children:[e.jsx(Lt,{name:"agreeTerms",checked:C.agreeTerms,onChange:({checked:S})=>Br(S?"true":"false"),children:"I agree to the Terms of Service and Privacy Policy"}),w.agreeTerms&&e.jsx(y.Error,{children:w.agreeTerms})]})]}),s===3&&e.jsxs(d,{direction:"column",gap:4,children:[e.jsx(h,{variant:"featured-3",weight:"bold",children:"Review your configuration"}),e.jsxs(d,{direction:"column",gap:3,children:[e.jsxs(d,{direction:"row",align:"center",children:[e.jsx(d.Item,{columns:4,children:e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Name"})}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-2",children:C.fullName})})]}),e.jsxs(d,{direction:"row",align:"center",children:[e.jsx(d.Item,{columns:4,children:e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Email"})}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-2",children:C.email})})]}),e.jsxs(d,{direction:"row",align:"center",children:[e.jsx(d.Item,{columns:4,children:e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Organization"})}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-2",children:C.orgName})})]}),e.jsxs(d,{direction:"row",align:"center",children:[e.jsx(d.Item,{columns:4,children:e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Team size"})}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-2",children:C.orgSize})})]}),e.jsxs(d,{direction:"row",align:"center",children:[e.jsx(d.Item,{columns:4,children:e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Role"})}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-2",children:C.role})})]}),e.jsxs(d,{direction:"row",align:"center",children:[e.jsx(d.Item,{columns:4,children:e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Region"})}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-2",children:C.region})})]}),e.jsxs(d,{direction:"row",align:"center",children:[e.jsx(d.Item,{columns:4,children:e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Plan"})}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-2",children:C.plan})})]}),e.jsxs(d,{direction:"row",align:"center",children:[e.jsx(d.Item,{columns:4,children:e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Newsletter"})}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-2",children:C.newsletter?"Yes":"No"})})]})]})]}),e.jsxs(d,{direction:"row",justify:"end",gap:3,children:[s>0&&e.jsx(Z,{variant:"ghost",onClick:Ur,children:"Back"}),s<3&&e.jsx(Z,{color:"primary",onClick:Hr,children:"Continue"}),s===3&&e.jsx(Z,{color:"primary",onClick:Fr,children:"Create account"})]})]})})]})})})}const hi=Object.freeze(Object.defineProperty({__proto__:null,default:mi},Symbol.toStringTag,{value:"Module"})),gi="/storyboard/branch--comments-system/assets/mona-loading-a6vFIHDd.gif",fi="_container_1dofh_1",bi="_contentBox_1dofh_12",xi="_codeLine_1dofh_21",vi="_iconWrapper_1dofh_26",yi="_codeText_1dofh_32",ji="_monaWrapper_1dofh_39",wi="_footerHeader_1dofh_45",_i="_tipsText_1dofh_50",Si="_warningText_1dofh_55",K={container:fi,contentBox:bi,codeLine:xi,iconWrapper:vi,codeText:yi,monaWrapper:ji,footerHeader:wi,tipsText:_i,warningText:Si};function ki(){return e.jsxs("div",{className:K.container,children:[e.jsx(Hn,{size:24}),e.jsx(As,{}),e.jsxs(B,{padding:"spacious",className:K.contentBox,children:[e.jsx(kn,{icon:wo,iconColor:"success.fg",children:"Mona's playground successfully initialised..."}),e.jsxs(kn,{icon:_o,iconColor:"accent.fg",children:["Visit ",e.jsx(T,{className:K.warningText,children:"src/Playground.js"})," ","and start building your own layouts using Primer."]}),e.jsx("div",{className:K.monaWrapper,children:e.jsx("img",{src:gi,alt:"mona",width:48,height:48})})]}),e.jsx(Ci,{})]})}function kn({icon:t,iconColor:n,children:o}){return e.jsxs(B,{direction:"horizontal",className:K.codeLine,children:[e.jsx(B,{className:K.iconWrapper,children:e.jsx(t,{size:16})}),e.jsx(T,{as:"p",className:K.codeText,children:o})]})}function Ci(){return e.jsxs(B,{gap:"condensed",children:[e.jsxs(B,{direction:"horizontal",className:K.footerHeader,children:[e.jsx(Ht,{size:18}),e.jsx(T,{className:K.tipsText,children:"Tips"})]}),e.jsxs(T,{children:["Before you get started check out our"," ",e.jsx(dn,{href:"https://primer.style/react",target:"_blank",children:"Primer React Documentation"})," ","and"," ",e.jsx(dn,{href:"https://ui.githubapp.com/storybook/?path=/docs/templates-readme--docs&globals=viewport:narrow",target:"_blank",children:"Primer Templates (staff only)"})]})]})}const Ii="_container_m20cu_1",Ei="_buttonWrapper_m20cu_7",Ni="_label_m20cu_12",Nt={container:Ii,buttonWrapper:Ei,label:Ni};function dr(){const{setDayScheme:t,setNightScheme:n,colorScheme:o}=Xr(),s=i=>{t(i),n(i)},r=[{name:"Light",value:"light",icon:hn},{name:"Light colorblind",value:"light_colorblind",icon:hn},{name:"Dark",value:"dark",icon:Je},{name:"Dark colorblind",value:"dark_colorblind",icon:Je},{name:"Dark high contrast",value:"dark_high_contrast",icon:Je},{name:"Dark Dimmed",value:"dark_dimmed",icon:Je}],a=r.find(i=>i.value===o);return e.jsx(B,{padding:"normal",className:Nt.container,children:e.jsx(B,{className:Nt.buttonWrapper,children:e.jsxs(ve,{children:[e.jsxs(ve.Button,{size:"small",children:[e.jsx(a.icon,{}),e.jsxs(B,{className:Nt.label,children:[" ",a.name]})]}),e.jsx(ve.Overlay,{align:"right",children:e.jsx(de,{showDividers:!0,children:e.jsx(de.Group,{selectionVariant:"single",children:r.map(i=>e.jsx(de.Item,{href:"#",selected:i.value===o,onSelect:()=>s(i.value),children:i.name},i.value))})})})]})})})}function Li(){return e.jsxs(e.Fragment,{children:[e.jsx(ki,{}),e.jsx(dr,{})]})}const Ti=Object.freeze(Object.defineProperty({__proto__:null,default:Li},Symbol.toStringTag,{value:"Module"})),ur={todo:"Todo",in_progress:"In Progress",done:"Done",cancelled:"Cancelled"},pr={urgent:"Urgent",high:"High",medium:"Medium",low:"Low"},Ai=Object.entries(ur),Ri=Object.entries(pr);function mr({prefix:t}){const[n,o]=j(`${t}.title`),[s,r]=j(`${t}.description`),[a,i]=j(`${t}.status`),[l,u]=j(`${t}.priority`),[p,c]=j(`${t}.assignee`),[m,g]=j(`${t}.project`),[x,N]=j(`${t}.estimate`);return e.jsxs(d,{direction:"column",gap:4,children:[e.jsxs(y,{children:[e.jsx(y.Label,{children:"Title"}),e.jsx(fe,{name:"title",value:n??"",onChange:({value:_})=>o(_)})]}),e.jsxs(y,{children:[e.jsx(y.Label,{children:"Description"}),e.jsx(fe,{name:"description",multiline:!0,value:s??"",onChange:({value:_})=>r(_),inputAttributes:{rows:3}})]}),e.jsxs(d,{direction:"row",gap:4,children:[e.jsx(d.Item,{grow:!0,children:e.jsxs(y,{children:[e.jsx(y.Label,{children:"Status"}),e.jsx(be,{name:"status",value:a??"todo",onChange:({value:_})=>i(_),children:Ai.map(([_,R])=>e.jsx("option",{value:_,children:R},_))})]})}),e.jsx(d.Item,{grow:!0,children:e.jsxs(y,{children:[e.jsx(y.Label,{children:"Priority"}),e.jsx(be,{name:"priority",value:l??"medium",onChange:({value:_})=>u(_),children:Ri.map(([_,R])=>e.jsx("option",{value:_,children:R},_))})]})})]}),e.jsxs(d,{direction:"row",gap:4,children:[e.jsx(d.Item,{grow:!0,children:e.jsxs(y,{children:[e.jsx(y.Label,{children:"Assignee"}),e.jsx(fe,{name:"assignee",placeholder:"Username",value:p??"",onChange:({value:_})=>c(_)})]})}),e.jsx(d.Item,{grow:!0,children:e.jsxs(y,{children:[e.jsx(y.Label,{children:"Project"}),e.jsx(fe,{name:"project",placeholder:"Project name",value:m??"",onChange:({value:_})=>g(_)})]})})]}),e.jsxs(y,{children:[e.jsx(y.Label,{children:"Estimate (points)"}),e.jsx(fe,{name:"estimate",placeholder:"e.g. 5",value:x??"",onChange:({value:_})=>N(_)})]})]})}const Pi={Auth:"neutral",Backend:"critical",Feature:"primary",Bug:"critical",Security:"warning",Frontend:"primary",DevEx:"positive"},Xe=["title","description","status","priority","assignee","project","estimate"];function $i({issue:t,active:n,onClose:o}){const s={title:ce("issues",t.id,"title"),description:ce("issues",t.id,"description"),status:ce("issues",t.id,"status"),priority:ce("issues",t.id,"priority"),assignee:ce("issues",t.id,"assignee"),project:ce("issues",t.id,"project"),estimate:ce("issues",t.id,"estimate")},r=()=>{Xe.forEach(l=>{pe(`draft.edit.${l}`,t[l]??"")})},a=()=>{const l=new URLSearchParams(window.location.hash.replace(/^#/,""));Xe.forEach(u=>{const[,p]=s[u];p(l.get(`draft.edit.${u}`)??"")}),Xe.forEach(u=>rt(`draft.edit.${u}`)),o({reason:"save"})},i=()=>{Xe.forEach(l=>rt(`draft.edit.${l}`)),o({reason:"cancel"})};return e.jsxs(ye,{active:n,onClose:i,onOpen:r,size:"600px",padding:6,position:"center",children:[e.jsx(ye.Title,{children:"Edit Issue"}),e.jsx(ye.Subtitle,{children:t.identifier}),e.jsxs(d,{direction:"column",gap:4,paddingTop:4,children:[e.jsx(mr,{prefix:"draft.edit"}),e.jsxs(d,{direction:"row",justify:"end",gap:2,paddingTop:2,children:[e.jsx(Z,{variant:"outline",onClick:i,children:"Cancel"}),e.jsx(Z,{color:"primary",onClick:a,children:"Save"})]})]})]})}function zi(){const[t,n,o]=j("ui.editModal"),s=t==="true",r=sr("issues","id"),a=z("signup.organization.name"),i=z("signup.fullName"),l=z("signup.organization.role");return r?e.jsx(Oe,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(d,{backgroundColor:"page",minHeight:"100vh",padding:12,children:e.jsxs(d,{direction:"row",align:"start",gap:8,wrap:"no-wrap",children:[e.jsx(d.Item,{columns:2,children:e.jsx(it,{orgName:a,activePage:"Issues",userInfo:{name:i,role:l}})}),e.jsx(d.Item,{grow:!0,children:e.jsxs(d,{direction:"row",gap:8,align:"start",children:[e.jsx(d.Item,{grow:!0,children:e.jsxs(d,{direction:"column",gap:4,maxWidth:"720px",children:[e.jsxs(d,{direction:"row",gap:2,align:"center",justify:"space-between",children:[e.jsxs(d,{direction:"row",gap:2,align:"center",children:[e.jsx(Se,{to:"/issues",style:{textDecoration:"none"},children:e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:a||"Workspace"})}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"›"}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:r.identifier})]}),e.jsx(Z,{variant:"outline",size:"small",onClick:()=>n("true"),children:"Edit issue"})]}),e.jsx($i,{issue:r,active:s,onClose:()=>o()}),e.jsx(h,{variant:"featured-1",weight:"bold",children:r.title}),r.description&&e.jsx(h,{variant:"body-2",color:"neutral-faded",children:r.description}),r.acceptanceCriteria?.length>0&&e.jsxs(d,{direction:"column",gap:2,children:[e.jsx(h,{variant:"body-2",weight:"bold",children:"Acceptance Criteria"}),e.jsx("ul",{style:{margin:0,paddingLeft:"1.5rem"},children:r.acceptanceCriteria.map((u,p)=>e.jsx("li",{style:{marginBottom:"0.5rem"},children:e.jsx(h,{variant:"body-3",children:u})},p))})]}),r.technicalNotes?.length>0&&e.jsxs(d,{direction:"column",gap:2,children:[e.jsx(h,{variant:"body-2",weight:"bold",children:"Technical Notes"}),e.jsx("ul",{style:{margin:0,paddingLeft:"1.5rem"},children:r.technicalNotes.map((u,p)=>e.jsx("li",{style:{marginBottom:"0.5rem"},children:e.jsx(h,{variant:"body-3",children:u})},p))})]}),e.jsx(X,{}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"+ Add sub-issues"}),e.jsx(X,{}),e.jsxs(d,{direction:"column",gap:3,children:[e.jsx(h,{variant:"body-2",weight:"bold",children:"Activity"}),(r.activity||[]).map((u,p)=>e.jsxs(d,{direction:"row",gap:3,align:"center",children:[e.jsx(pn,{src:u.avatar,initials:u.user?.[0]?.toUpperCase(),size:6}),e.jsxs(d,{direction:"column",children:[e.jsxs(h,{variant:"body-3",children:[e.jsx(h,{weight:"medium",children:u.user}),u.type==="created"&&" created the issue",u.type==="comment"&&":"]}),u.body&&e.jsx(h,{variant:"body-3",color:"neutral-faded",children:u.body}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:u.time})]})]},p))]})]})}),e.jsx(d.Item,{columns:3,children:e.jsx(oe,{padding:4,children:e.jsxs(d,{direction:"column",gap:4,children:[e.jsx(h,{variant:"caption-1",color:"neutral-faded",weight:"medium",children:"Properties"}),e.jsx(X,{}),e.jsxs(d,{direction:"column",gap:1,children:[e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"Status"}),e.jsx(h,{variant:"body-3",children:ur[r.status]||r.status})]}),e.jsxs(d,{direction:"column",gap:1,children:[e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"Priority"}),e.jsx(h,{variant:"body-3",children:pr[r.priority]||r.priority})]}),e.jsxs(d,{direction:"column",gap:1,children:[e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"Assignee"}),r.assignee?e.jsxs(d,{direction:"row",gap:2,align:"center",children:[e.jsx(pn,{src:r.assigneeAvatar,initials:r.assignee?.[0]?.toUpperCase(),size:5}),e.jsx(h,{variant:"body-3",children:r.assignee})]}):e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"Assign"})]}),e.jsxs(d,{direction:"column",gap:1,children:[e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"Labels"}),e.jsx(d,{direction:"row",gap:1,wrap:!0,children:(r.labels||[]).map(u=>e.jsx(De,{size:"small",color:Pi[u]||"neutral",children:u},u))})]}),e.jsxs(d,{direction:"column",gap:1,children:[e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"Project"}),e.jsx(h,{variant:"body-3",color:r.project?void 0:"neutral-faded",children:r.project||"Add to project"})]}),r.estimate&&e.jsxs(d,{direction:"column",gap:1,children:[e.jsx(h,{variant:"caption-1",color:"neutral-faded",children:"Estimate"}),e.jsxs(h,{variant:"body-3",children:[r.estimate," points"]})]})]})})})]})})]})})}):e.jsx(Oe,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(d,{backgroundColor:"page",minHeight:"100vh",padding:12,children:e.jsxs(d,{direction:"row",align:"start",gap:8,wrap:"no-wrap",children:[e.jsx(d.Item,{columns:2,children:e.jsx(it,{orgName:a,activePage:"Issues",userInfo:{name:i,role:l}})}),e.jsx(d.Item,{grow:!0,children:e.jsxs(d,{direction:"column",gap:4,align:"center",paddingBlock:16,children:[e.jsx(h,{variant:"featured-2",weight:"bold",children:"Issue not found"}),e.jsx(h,{variant:"body-3",color:"neutral-faded",children:"The issue you're looking for doesn't exist."}),e.jsx(Se,{to:"/issues",children:"← Back to all issues"})]})})]})})})}const Oi=Object.freeze(Object.defineProperty({__proto__:null,default:zi},Symbol.toStringTag,{value:"Module"})),Di="_issueRow_1cpdh_1",Mi={issueRow:Di},Bi={todo:"○",in_progress:"◐",done:"●",cancelled:"✕"},Hi={Auth:"neutral",Backend:"critical",Feature:"primary",Bug:"critical",Security:"warning",Frontend:"primary",DevEx:"positive"},Ui={title:"",description:"",status:"todo",priority:"medium",assignee:"",project:"",estimate:""},Rt=["title","description","status","priority","assignee","project","estimate"];function Cn(t){Rt.forEach(n=>rt(`${t}.${n}`))}function Fi({active:t,onClose:n,issueCount:o}){const[s]=j("draft.create.title"),r=Mt(),a=`FIL-${o+1}`,i=()=>{Rt.forEach(p=>{pe(`draft.create.${p}`,Ui[p])})},l=()=>{if(!(s??"").trim())return;const p=s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||`new-issue-${o+1}`;Rt.forEach(c=>{const m=new URLSearchParams(window.location.hash.replace(/^#/,"")).get(`draft.create.${c}`)??"";pe(`record.issues.${p}.${c}`,m)}),pe(`record.issues.${p}.identifier`,a),Cn("draft.create"),n({reason:"save"}),r(`/issues/${p}`)},u=()=>{Cn("draft.create"),n({reason:"cancel"})};return e.jsxs(ye,{active:t,onClose:u,onOpen:i,size:"600px",padding:6,position:"center",children:[e.jsx(ye.Title,{children:"Create Issue"}),e.jsx(ye.Subtitle,{children:a}),e.jsxs(d,{direction:"column",gap:4,paddingTop:4,children:[e.jsx(mr,{prefix:"draft.create"}),e.jsxs(d,{direction:"row",justify:"end",gap:2,paddingTop:2,children:[e.jsx(Z,{variant:"outline",onClick:u,children:"Cancel"}),e.jsx(Z,{color:"primary",onClick:l,children:"Save"})]})]})]})}function qi(){const[t,n,o]=j("ui.createModal"),s=t==="true",r=ar("issues"),a=z("signup.organization.name"),i=z("signup.fullName"),l=z("signup.organization.role"),u=r.filter(c=>c.status!=="done"&&c.status!=="cancelled"),p=r.filter(c=>c.status==="done"||c.status==="cancelled");return e.jsx(Oe,{defaultTheme:"reshaped",defaultColorMode:"dark",children:e.jsx(d,{backgroundColor:"page",minHeight:"100vh",padding:12,children:e.jsxs(d,{direction:"row",align:"start",gap:8,wrap:"no-wrap",children:[e.jsx(d.Item,{columns:2,children:e.jsx(it,{orgName:a,activePage:"Issues",userInfo:{name:i,role:l}})}),e.jsx(d.Item,{grow:!0,children:e.jsxs(d,{direction:"column",gap:4,maxWidth:"900px",children:[e.jsxs(d,{direction:"row",justify:"space-between",align:"center",children:[e.jsx(h,{variant:"featured-2",weight:"bold",children:"Issues"}),e.jsxs(d,{direction:"row",gap:2,align:"center",children:[e.jsxs(De,{color:"neutral",children:[r.length," total"]}),e.jsx(Z,{size:"small",color:"primary",onClick:()=>n("true"),children:"Create issue"})]})]}),e.jsx(Fi,{active:s,onClose:()=>o(),issueCount:r.length}),e.jsxs(d,{direction:"column",gap:0,children:[e.jsx(d,{paddingBlock:2,paddingInline:3,children:e.jsxs(h,{variant:"caption-1",color:"neutral-faded",weight:"medium",children:["Open · ",u.length]})}),e.jsx(X,{}),u.map(c=>e.jsx(In,{issue:c},c.id))]}),p.length>0&&e.jsxs(d,{direction:"column",gap:0,children:[e.jsx(d,{paddingBlock:2,paddingInline:3,children:e.jsxs(h,{variant:"caption-1",color:"neutral-faded",weight:"medium",children:["Closed · ",p.length]})}),e.jsx(X,{}),p.map(c=>e.jsx(In,{issue:c},c.id))]})]})})]})})})}function In({issue:t}){return e.jsxs(e.Fragment,{children:[e.jsx(Se,{to:`/issues/${t.id}`,className:Mi.issueRow,children:e.jsxs(d,{direction:"row",align:"center",gap:3,padding:3,children:[e.jsx(h,{variant:"body-3",color:"neutral-faded",attributes:{style:{minWidth:20}},children:Bi[t.status]||"○"}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",attributes:{style:{minWidth:50}},children:t.identifier}),e.jsx(d.Item,{grow:!0,children:e.jsx(h,{variant:"body-3",children:t.title})}),e.jsx(d,{direction:"row",gap:1,children:(t.labels||[]).map(n=>e.jsx(De,{size:"small",color:Hi[n]||"neutral",children:n},n))}),e.jsx(h,{variant:"caption-1",color:"neutral-faded",attributes:{style:{textTransform:"capitalize"}},children:t.priority})]})}),e.jsx(X,{})]})}const Wi=Object.freeze(Object.defineProperty({__proto__:null,default:qi},Symbol.toStringTag,{value:"Module"}));function Vi(){const t=sr("posts","id");return t?e.jsx(se,{title:"Blog",subtitle:t.title,children:e.jsxs("article",{style:{maxWidth:"720px",padding:"2rem"},children:[e.jsxs("header",{children:[e.jsx(T,{as:"h1",sx:{fontSize:4,mb:2},children:t.title}),e.jsxs(T,{as:"p",color:"fg.muted",sx:{mb:3},children:[t.author," · ",t.date]}),t.summary&&e.jsx(Qe,{variant:"accent",sx:{mb:3},children:t.summary})]}),e.jsx(T,{as:"div",sx:{mt:3,lineHeight:1.6},children:(t.body||"").split(`

`).map((n,o)=>e.jsx("p",{children:n},o))}),e.jsx("footer",{style:{marginTop:"2rem",borderTop:"1px solid var(--borderColor-muted)",paddingTop:"1rem"},children:e.jsx(Se,{to:"/posts",children:"← Back to all posts"})})]})}):e.jsx(se,{title:"Blog",subtitle:"Post",children:e.jsxs("section",{style:{padding:"2rem"},children:[e.jsx(T,{as:"h1",children:"Post not found"}),e.jsx(T,{as:"p",color:"fg.muted",children:"The post you're looking for doesn't exist."}),e.jsx(Se,{to:"/posts",children:"← Back to all posts"})]})})}const Ji=Object.freeze(Object.defineProperty({__proto__:null,default:Vi},Symbol.toStringTag,{value:"Module"}));function Gi(){const t=ar("posts");return e.jsx(se,{title:"Blog",subtitle:"All Posts",children:e.jsxs("section",{style:{maxWidth:"720px",padding:"2rem"},children:[e.jsx(T,{as:"h1",sx:{fontSize:4,mb:3},children:"Blog"}),t.map(n=>e.jsxs("article",{style:{marginBottom:"1.5rem",paddingBottom:"1.5rem",borderBottom:"1px solid var(--borderColor-muted)"},children:[e.jsx(Se,{to:`/posts/${n.id}`,style:{textDecoration:"none"},children:e.jsx(T,{as:"h2",sx:{fontSize:2,color:"accent.fg"},children:n.title})}),e.jsxs(T,{as:"p",color:"fg.muted",sx:{fontSize:1,mt:1},children:[n.author," · ",n.date]}),n.summary&&e.jsx(T,{as:"p",sx:{mt:1},children:n.summary})]},n.id))]})})}const Yi=Object.freeze(Object.defineProperty({__proto__:null,default:Gi},Symbol.toStringTag,{value:"Module"}));var te={route:[/^.*\/src\/pages\/|\.(jsx|tsx|mdx)$/g,""],splat:[/\[\.{3}\w+\]/g,"*"],param:[/\[([^\]]+)\]/g,":$1"],slash:[/^index$|\./g,"/"],optional:[/^-(:?[\w-]+|\*)/,"$1?"]},Ki=t=>Object.keys(t).reduce((n,o)=>{const s=o.replace(...te.route);return{...n,[s]:t[o]}},{}),Xi=(t,n)=>Object.keys(t).filter(s=>!s.includes("/_")||/_layout\.(jsx|tsx)$/.test(s)).reduce((s,r)=>{const a=t[r],i={id:r.replace(...te.route),...n(a,r)},l=r.replace(...te.route).replace(...te.splat).replace(...te.param).split("/").filter(Boolean);return l.reduce((u,p,c)=>{const m=p.replace(...te.slash).replace(...te.optional),g=c===0,x=c===l.length-1&&l.length>1,N=!g&&!x,_=p==="_layout",R=/\([\w-]+\)/.test(m),D=/^\w|\//.test(m)?"unshift":"push";if(g&&l.length===1)return s.push({path:m,...i}),u;if(g||N){const O=g?s:u.children,H=O?.find(me=>me.path===m||me.id?.replace("/_layout","").split("/").pop()===m),ae=R?i?.component?{id:m,path:"/"}:{id:m}:{path:m};return H?H.children??=[]:O?.[D]({...ae,children:[]}),H||O?.[D==="unshift"?0:O.length-1]}return _?Object.assign(u,i):(x&&u?.children?.[D](i?.index?i:{path:m,...i}),u)},{}),s},[]),Zi=t=>Object.keys(t).reduce((n,o)=>{const s=o.replace(...te.route).replace(/\+|\([\w-]+\)\//g,"").replace(/(\/)?index/g,"").replace(/\./g,"/");return{...n,[`/${s}`]:t[o]?.default}},{}),Qi=Object.assign({"/src/pages/_app.jsx":os}),ec=Object.assign({}),tc=Object.assign({"/src/pages/Dashboard.jsx":ds,"/src/pages/Forms.jsx":$s,"/src/pages/Issues.jsx":Ms,"/src/pages/Overview.jsx":Ws,"/src/pages/Repositories.jsx":ba,"/src/pages/SecurityAdvisory.jsx":pi,"/src/pages/Signup.jsx":hi,"/src/pages/index.jsx":Ti,"/src/pages/issues/[id].jsx":Oi,"/src/pages/issues/index.jsx":Wi,"/src/pages/posts/[id].jsx":Ji,"/src/pages/posts/index.jsx":Yi}),hr=Ki(Qi),nc=Zi(ec),rc=Xi(tc,(t,n)=>{const o=/index\.(jsx|tsx|mdx)$/.test(n)&&!n.includes("pages/index")?{index:!0}:{},s=t?.default||b.Fragment;return{...o,Component:()=>t?.Pending?e.jsx(b.Suspense,{fallback:e.jsx(t.Pending,{}),children:e.jsx(s,{})}):e.jsx(s,{}),ErrorBoundary:t?.Catch,loader:t?.Loader,action:t?.Action}}),_e=hr?._app,oc=hr?.["404"],sc=_e?.default||Bn,ac=()=>{const t=nc[no().state?.modal]||b.Fragment;return e.jsx(t,{})},Pt=()=>e.jsxs(e.Fragment,{children:[e.jsx(sc,{})," ",e.jsx(ac,{})]}),ic=()=>_e?.Pending?e.jsx(b.Suspense,{fallback:e.jsx(_e.Pending,{}),children:e.jsx(Pt,{})}):e.jsx(Pt,{}),cc={Component:_e?.default?ic:Pt,ErrorBoundary:_e?.Catch,loader:_e?.Loader},lc={path:"*",Component:oc?.default||b.Fragment},dc=[{...cc,children:[...rc,lc]}];const gr="sb-comments-token",fr="sb-comments-user";function br(){try{return localStorage.getItem(gr)}catch{return null}}function uc(t){localStorage.setItem(gr,t)}function xr(){try{const t=localStorage.getItem(fr);return t?JSON.parse(t):null}catch{return null}}async function pc(t){const n=await fetch("https://api.github.com/user",{headers:{Authorization:`bearer ${t}`}});if(!n.ok)throw new Error("Invalid token — GitHub returned "+n.status);const o=await n.json(),s={login:o.login,avatarUrl:o.avatar_url};return localStorage.setItem(fr,JSON.stringify(s)),s}function ct(){return br()!==null}let ue=!1;const $t=new Set;function et(){return ue}function mc(){return At()?!ue&&!ct()?(console.warn("[storyboard] Sign in first to use comments"),!1):(ue=!ue,vr(),ue):(console.warn("[storyboard] Comments not enabled — check storyboard.config.json"),!1)}function En(t){ue=t,vr()}function hc(t){return $t.add(t),()=>$t.delete(t)}function vr(){for(const t of $t)t(ue)}const Nn=/<!--\s*sb-meta\s+(\{.*?\})\s*-->/;function zt(t){if(!t)return{meta:null,text:""};const n=t.match(Nn);if(!n)return{meta:null,text:t.trim()};try{const o=JSON.parse(n[1]),s=t.replace(Nn,"").trim();return{meta:o,text:s}}catch{return{meta:null,text:t.trim()}}}function Ot(t,n){return`${`<!-- sb-meta ${JSON.stringify(t)} -->`}
${n}`}function yr(t,n){const{meta:o,text:s}=zt(t),r={...o,...n};return Ot(r,s)}const gc="https://api.github.com/graphql";async function Q(t,n={},o={}){const{retries:s=2}=o,r=br();if(!r)throw new Error("Not authenticated — no GitHub PAT found. Please sign in.");let a;for(let i=0;i<=s;i++)try{const l=await fetch(gc,{method:"POST",headers:{Authorization:`bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({query:t,variables:n})});if(l.status===401)throw new Error("GitHub PAT is invalid or expired. Please sign in again.");if(!l.ok)throw new Error(`GitHub API error: ${l.status} ${l.statusText}`);const u=await l.json();if(u.errors?.length)throw new Error(`GraphQL error: ${u.errors.map(p=>p.message).join(", ")}`);return u.data}catch(l){if(a=l,l.message.includes("401")||l.message.includes("Not authenticated")||l.message.includes("invalid or expired"))throw l;i<s&&await new Promise(u=>setTimeout(u,1e3*(i+1)))}throw a}const fc=`
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
`,bc=`
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
`,xc=`
  mutation CreateDiscussion($repositoryId: ID!, $categoryId: ID!, $title: String!, $body: String!) {
    createDiscussion(input: { repositoryId: $repositoryId, categoryId: $categoryId, title: $title, body: $body }) {
      discussion {
        id
        title
        url
      }
    }
  }
`,vc=`
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
`,yc=`
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
`,jr=`
  mutation UpdateComment($commentId: ID!, $body: String!) {
    updateDiscussionComment(input: { commentId: $commentId, body: $body }) {
      comment {
        id
        body
      }
    }
  }
`,jc=`
  mutation AddReaction($subjectId: ID!, $content: ReactionContent!) {
    addReaction(input: { subjectId: $subjectId, content: $content }) {
      reaction {
        content
      }
    }
  }
`,wc=`
  mutation RemoveReaction($subjectId: ID!, $content: ReactionContent!) {
    removeReaction(input: { subjectId: $subjectId, content: $content }) {
      reaction {
        content
      }
    }
  }
`;async function wr(t){const n=rr(),s=`"${`Comments: ${t}`}" in:title repo:${n.repo.owner}/${n.repo.name}`,a=(await Q(fc,{query:s})).search?.nodes?.[0];if(!a)return null;const i=(a.comments?.nodes??[]).map(l=>{const{meta:u,text:p}=zt(l.body);return{...l,meta:u,text:p,replies:(l.replies?.nodes??[]).map(c=>{const{meta:m,text:g}=zt(c.body);return{...c,meta:m,text:g}})}});return{...a,comments:i}}async function _c(){const t=rr(),n=t.discussions.category.toLowerCase().replace(/\s+/g,"-"),o=await Q(bc,{owner:t.repo.owner,name:t.repo.name,slug:n}),s=o.repository?.id;let r=o.repository?.discussionCategory?.id;if(r||(r=o.repository?.discussionCategories?.nodes?.find(i=>i.name===t.discussions.category)?.id),!s||!r)throw new Error(`Could not find repository or discussion category "${t.discussions.category}" in ${t.repo.owner}/${t.repo.name}`);return{repositoryId:s,categoryId:r}}async function Sc(t,n,o,s){let r=await wr(t);if(!r){const{repositoryId:l,categoryId:u}=await _c(),p=`Comments: ${t}`,c=Ot({route:t,createdAt:new Date().toISOString()},"");r=(await Q(xc,{repositoryId:l,categoryId:u,title:p,body:c})).createDiscussion.discussion}const a=Ot({x:Math.round(n*10)/10,y:Math.round(o*10)/10},s);return(await Q(vc,{discussionId:r.id,body:a})).addDiscussionComment.comment}async function kc(t,n,o){return(await Q(yc,{discussionId:t,replyToId:n,body:o})).addDiscussionComment.comment}async function Cc(t,n){const o=yr(n,{resolved:!0});return(await Q(jr,{commentId:t,body:o})).updateDiscussionComment.comment}async function Ic(t,n,o,s){const r=yr(n,{x:Math.round(o*10)/10,y:Math.round(s*10)/10});return(await Q(jr,{commentId:t,body:r})).updateDiscussionComment.comment}async function Ec(t,n){await Q(jc,{subjectId:t,content:n})}async function Nc(t,n){await Q(wc,{subjectId:t,content:n})}const Ln="sb-composer-style";function Lc(){if(document.getElementById(Ln))return;const t=document.createElement("style");t.id=Ln,t.textContent=`
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
  `,document.head.appendChild(t)}function Tc(t,n,o,s,r={}){Lc();const a=xr(),i=document.createElement("div");i.className="sb-composer",i.style.left=`${n}%`,i.style.top=`${o}%`,i.style.transform="translate(12px, -50%)",i.innerHTML=`
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
  `,t.appendChild(i);const l=i.querySelector(".sb-composer-textarea"),u=i.querySelector('[data-action="submit"]');function p(){i.remove()}function c(){p(),r.onCancel?.()}async function m(){const g=l.value.trim();if(!g){l.focus();return}u.disabled=!0,u.textContent="Posting…";try{const x=await Sc(s,n,o,g);p(),r.onSubmit?.(x)}catch(x){u.disabled=!1,u.textContent="Comment",console.error("[storyboard] Failed to post comment:",x);let N=i.querySelector(".sb-composer-error");N||(N=document.createElement("div"),N.className="sb-composer-error",N.style.cssText="padding: 4px 12px 8px; font-size: 12px; color: #f85149;",i.querySelector(".sb-composer-footer").before(N)),N.textContent=x.message}}return i.querySelector('[data-action="cancel"]').addEventListener("click",c),u.addEventListener("click",m),l.addEventListener("keydown",g=>{g.key==="Enter"&&(g.metaKey||g.ctrlKey)&&(g.preventDefault(),m()),g.key==="Escape"&&(g.preventDefault(),g.stopPropagation(),c())}),i.addEventListener("click",g=>g.stopPropagation()),requestAnimationFrame(()=>l.focus()),{el:i,destroy:p}}const Tn="sb-auth-modal",An="sb-auth-modal-style";function Ac(){if(document.getElementById(An))return;const t=document.createElement("style");t.id=An,t.textContent=`
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
  `,document.head.appendChild(t)}function Rc(){return Ac(),new Promise(t=>{const n=document.getElementById(Tn);n&&n.remove();const o=document.createElement("div");o.id=Tn,o.className="sb-auth-backdrop";const s=document.createElement("div");s.className="sb-auth-modal",s.innerHTML=`
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
    `,o.appendChild(s),document.body.appendChild(o);const r=s.querySelector("#sb-auth-token-input"),a=s.querySelector('[data-action="submit"]'),i=s.querySelector('[data-slot="feedback"]');function l(c){o.remove(),t(c)}o.addEventListener("click",c=>{c.target===o&&l(null)}),s.querySelectorAll('[data-action="close"]').forEach(c=>{c.addEventListener("click",()=>l(null))});function u(c){c.key==="Escape"&&(c.preventDefault(),c.stopPropagation(),window.removeEventListener("keydown",u,!0),l(null))}window.addEventListener("keydown",u,!0);async function p(){const c=r.value.trim();if(!c){r.focus();return}a.disabled=!0,a.textContent="Validating…",i.innerHTML="";try{const m=await pc(c);uc(c),i.innerHTML=`
          <div class="sb-auth-success">
            <img class="sb-auth-avatar" src="${m.avatarUrl}" alt="${m.login}" />
            <div class="sb-auth-user-info">
              ${m.login}
              <span>✓ Signed in</span>
            </div>
          </div>
        `,a.textContent="Done",a.disabled=!1,a.onclick=()=>{window.removeEventListener("keydown",u,!0),l(m)}}catch(m){i.innerHTML=`<div class="sb-auth-error">${m.message}</div>`,a.disabled=!1,a.textContent="Sign in"}}a.addEventListener("click",p),r.addEventListener("keydown",c=>{c.key==="Enter"&&p()}),requestAnimationFrame(()=>r.focus())})}const Rn="sb-comment-window-style",_r={THUMBS_UP:"👍",THUMBS_DOWN:"👎",LAUGH:"😄",HOORAY:"🎉",CONFUSED:"😕",HEART:"❤️",ROCKET:"🚀",EYES:"👀"};function Pc(){if(document.getElementById(Rn))return;const t=document.createElement("style");t.id=Rn,t.textContent=`
    .sb-comment-window {
      position: absolute;
      z-index: 100001;
      width: 320px;
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
      padding: 2px 8px;
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
  `,document.head.appendChild(t)}function Pn(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function $n(t){const n=document.createElement("div");n.className=t.replies?"sb-comment-window-reactions":"sb-reply-reactions";function o(){n.innerHTML="";const s=t.reactionGroups??[];for(const a of s){if(a.users?.totalCount===0&&!a.viewerHasReacted)continue;const i=a.users?.totalCount??0;if(i===0)continue;const l=document.createElement("button");l.className="sb-reaction-pill",l.dataset.active=String(!!a.viewerHasReacted),l.innerHTML=`<span>${_r[a.content]??a.content}</span><span>${i}</span>`,l.addEventListener("click",u=>{u.stopPropagation(),Sr(t,a.content,a,o)}),n.appendChild(l)}const r=document.createElement("button");r.className="sb-reaction-add-btn",r.textContent="😀 +",r.addEventListener("click",a=>{a.stopPropagation(),$c(r,t,o)}),n.appendChild(r)}return o(),n}function $c(t,n,o){const s=t.querySelector(".sb-reaction-picker");if(s){s.remove();return}const r=document.createElement("div");r.className="sb-reaction-picker";for(const[i,l]of Object.entries(_r)){const u=n.reactionGroups??[],p=u.some(m=>m.content===i&&m.viewerHasReacted),c=document.createElement("button");c.className="sb-reaction-picker-btn",c.dataset.active=String(p),c.textContent=l,c.addEventListener("click",m=>{m.stopPropagation();const g=u.find(x=>x.content===i);Sr(n,i,g,o),r.remove()}),r.appendChild(c)}t.appendChild(r);function a(i){!r.contains(i.target)&&i.target!==t&&(r.remove(),document.removeEventListener("click",a,!0))}setTimeout(()=>document.addEventListener("click",a,!0),0)}async function Sr(t,n,o,s){const r=o?.viewerHasReacted??!1;t.reactionGroups||(t.reactionGroups=[]),r&&o?(o.users={totalCount:Math.max(0,(o.users?.totalCount??1)-1)},o.viewerHasReacted=!1,o.users.totalCount===0&&(t.reactionGroups=t.reactionGroups.filter(a=>a.content!==n))):o?(o.users={totalCount:(o.users?.totalCount??0)+1},o.viewerHasReacted=!0):t.reactionGroups.push({content:n,users:{totalCount:1},viewerHasReacted:!0}),s();try{r?await Nc(t.id,n):await Ec(t.id,n)}catch(a){console.error("[storyboard] Reaction toggle failed:",a)}}let G=null;function kr(t,n,o,s={}){Pc(),G&&(G.destroy(),G=null);const r=xr(),a=document.createElement("div");a.className="sb-comment-window",a.style.left=`${n.meta?.x??0}%`,a.style.top=`${n.meta?.y??0}%`,a.style.transform="translate(12px, -50%)";const i=document.createElement("div");i.className="sb-comment-window-header";const l=document.createElement("div");if(l.className="sb-comment-window-header-left",n.author?.avatarUrl){const v=document.createElement("img");v.className="sb-comment-window-avatar",v.src=n.author.avatarUrl,v.alt=n.author.login??"",l.appendChild(v)}const u=document.createElement("span");if(u.className="sb-comment-window-author",u.textContent=n.author?.login??"unknown",l.appendChild(u),n.createdAt){const v=document.createElement("span");v.className="sb-comment-window-time",v.textContent=Pn(n.createdAt),l.appendChild(v)}i.appendChild(l);const p=document.createElement("div");p.className="sb-comment-window-header-actions";const c=document.createElement("button");c.className="sb-comment-window-action-btn",c.setAttribute("aria-label",n.meta?.resolved?"Resolved":"Resolve"),c.title=n.meta?.resolved?"Resolved":"Resolve",c.textContent=n.meta?.resolved?"Resolved":"Resolve",n.meta?.resolved&&(c.dataset.resolved="true"),c.addEventListener("click",async v=>{if(v.stopPropagation(),!n.meta?.resolved){c.dataset.resolved="true",c.textContent="Resolved",c.title="Resolved";try{await Cc(n.id,n._rawBody??n.body??""),n.meta={...n.meta,resolved:!0},s.onMove?.()}catch(k){console.error("[storyboard] Failed to resolve comment:",k),c.dataset.resolved="false",c.textContent="Resolve",c.title="Resolve"}}}),p.appendChild(c);const m=document.createElement("button");m.className="sb-comment-window-action-btn",m.setAttribute("aria-label","Copy link"),m.title="Copy link",m.textContent="Copy link",m.addEventListener("click",v=>{v.stopPropagation();const k=new URL(window.location.href);k.searchParams.set("comment",n.id),navigator.clipboard.writeText(k.toString()).then(()=>{m.dataset.copied="true",m.textContent="Copied!",m.title="Copied!",setTimeout(()=>{m.dataset.copied="false",m.textContent="Copy link",m.title="Copy link"},2e3)}).catch(()=>{const E=document.createElement("input");E.value=k.toString(),document.body.appendChild(E),E.select(),document.execCommand("copy"),E.remove()})}),p.appendChild(m);const g=document.createElement("button");g.className="sb-comment-window-close",g.innerHTML="×",g.setAttribute("aria-label","Close"),g.addEventListener("click",v=>{v.stopPropagation(),Le()}),p.appendChild(g),i.appendChild(p),a.appendChild(i);const x=document.createElement("div");x.className="sb-comment-window-body";const N=document.createElement("p");N.className="sb-comment-window-text",N.textContent=n.text??"",x.appendChild(N),x.appendChild($n(n));const _=n.replies??[];if(_.length>0){const v=document.createElement("div");v.className="sb-comment-window-replies";const k=document.createElement("div");k.className="sb-comment-window-replies-label",k.textContent=`${_.length} ${_.length===1?"Reply":"Replies"}`,v.appendChild(k);for(const E of _){const L=document.createElement("div");if(L.className="sb-reply-item",E.author?.avatarUrl){const U=document.createElement("img");U.className="sb-reply-avatar",U.src=E.author.avatarUrl,U.alt=E.author.login??"",L.appendChild(U)}const M=document.createElement("div");M.className="sb-reply-content";const A=document.createElement("div");A.className="sb-reply-meta";const w=document.createElement("span");if(w.className="sb-reply-author",w.textContent=E.author?.login??"unknown",A.appendChild(w),E.createdAt){const U=document.createElement("span");U.className="sb-reply-time",U.textContent=Pn(E.createdAt),A.appendChild(U)}M.appendChild(A);const q=document.createElement("p");q.className="sb-reply-text",q.textContent=E.text??E.body??"",M.appendChild(q),M.appendChild($n(E)),L.appendChild(M),v.appendChild(L)}x.appendChild(v)}if(a.appendChild(x),r&&o){const v=document.createElement("div");v.className="sb-comment-window-reply-form";const k=document.createElement("textarea");k.className="sb-reply-textarea",k.placeholder="Reply…",v.appendChild(k);const E=document.createElement("div");E.className="sb-reply-form-actions";const L=document.createElement("button");L.className="sb-reply-submit-btn",L.textContent="Reply",L.disabled=!0,k.addEventListener("input",()=>{L.disabled=!k.value.trim()});async function M(){const A=k.value.trim();if(A){L.disabled=!0,L.textContent="Posting…";try{await kc(o.id,n.id,A),k.value="",L.textContent="Reply",s.onMove?.()}catch(w){console.error("[storyboard] Failed to post reply:",w),L.textContent="Reply",L.disabled=!1}}}L.addEventListener("click",M),k.addEventListener("keydown",A=>{A.key==="Enter"&&(A.metaKey||A.ctrlKey)&&(A.preventDefault(),M()),A.key==="Escape"&&(A.preventDefault(),A.stopPropagation())}),E.appendChild(L),v.appendChild(E),a.appendChild(v)}let R=!1,D=0,O=0,H=0,ae=0;function me(v){if(v.target.closest(".sb-comment-window-header-actions"))return;R=!0,D=v.clientX,O=v.clientY;const k=t.getBoundingClientRect();H=parseFloat(a.style.left)/100*k.width,ae=parseFloat(a.style.top)/100*k.height,document.addEventListener("mousemove",Ee),document.addEventListener("mouseup",Ne),v.preventDefault()}function Ee(v){if(!R)return;const k=v.clientX-D,E=v.clientY-O,L=t.getBoundingClientRect(),M=H+k,A=ae+E,w=Math.round(M/L.width*1e3)/10,q=Math.round(A/L.height*1e3)/10;a.style.left=`${w}%`,a.style.top=`${q}%`}async function Ne(v){if(!R)return;R=!1,document.removeEventListener("mousemove",Ee),document.removeEventListener("mouseup",Ne);const k=t.getBoundingClientRect(),E=v.clientX-D,L=v.clientY-O,M=H+E,A=ae+L,w=Math.round(M/k.width*1e3)/10,q=Math.round(A/k.height*1e3)/10;if(Math.abs(E)>2||Math.abs(L)>2){n.meta={...n.meta,x:w,y:q};const U=t.querySelectorAll(".sb-comment-pin");for(const ie of U)if(ie._commentId===n.id){ie.style.left=`${w}%`,ie.style.top=`${q}%`;break}try{await Ic(n.id,n._rawBody??"",w,q),n._rawBody=null}catch(ie){console.error("[storyboard] Failed to move comment:",ie)}}}i.addEventListener("mousedown",me),a.addEventListener("click",v=>v.stopPropagation());const Ve=new URL(window.location.href);Ve.searchParams.set("comment",n.id),window.history.replaceState(null,"",Ve.toString()),t.appendChild(a);function Le(){document.removeEventListener("mousemove",Ee),document.removeEventListener("mouseup",Ne),a.remove(),G?.el===a&&(G=null);const v=new URL(window.location.href);v.searchParams.delete("comment"),window.history.replaceState(null,"",v.toString()),s.onClose?.()}return G={el:a,destroy:Le},{el:a,destroy:Le}}function Cr(){G&&(G.destroy(),G=null)}const zc='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="%23fff" stroke-width="1.5" d="M19.503 9.97c1.204.489 1.112 2.224-.137 2.583l-6.305 1.813l-2.88 5.895c-.571 1.168-2.296.957-2.569-.314L4.677 6.257A1.369 1.369 0 0 1 6.53 4.7z" clip-rule="evenodd"/></svg>',zn="sb-comment-mode-style";function Oc(){if(document.getElementById(zn))return;const t=document.createElement("style");t.id=zn,t.textContent=`
    .sb-comment-mode {
      cursor: url("data:image/svg+xml,${zc}") 4 2, crosshair;
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
  `,document.head.appendChild(t)}let re=null,ne=null,F=null,Dt=[],lt=null;function Gt(){return document.querySelector("main")||document.body}function jt(){if(ne)return ne;const t=Gt();return getComputedStyle(t).position==="static"&&(t.style.position="relative"),ne=document.createElement("div"),ne.className="sb-comment-overlay",t.appendChild(ne),ne}function Dc(){re||(re=document.createElement("div"),re.className="sb-comment-mode-banner",re.innerHTML="Comment mode — click to place a comment. Press <kbd>C</kbd> or <kbd>Esc</kbd> to exit.",document.body.appendChild(re))}function Mc(){re&&(re.remove(),re=null)}function Ir(){return window.location.pathname}function Yt(){for(const t of Dt)t.remove();Dt=[]}function Er(t,n,o){const s=document.createElement("div");s.className="sb-comment-pin",s.style.left=`${n.meta?.x??0}%`,s.style.top=`${n.meta?.y??0}%`;const r=o*137.5%360;if(s.style.setProperty("--pin-hue",String(Math.round(r))),n.author?.avatarUrl){const a=document.createElement("img");a.src=n.author.avatarUrl,a.alt=n.author.login??"",s.appendChild(a)}return n.meta?.resolved&&s.setAttribute("data-resolved","true"),s.title=`${n.author?.login??"unknown"}: ${n.text?.slice(0,80)??""}`,s._commentId=n.id,n._rawBody=n.body,s.addEventListener("click",a=>{a.stopPropagation(),F&&(F.destroy(),F=null),kr(t,n,lt,{onClose:()=>{},onMove:()=>wt()})}),t.appendChild(s),Dt.push(s),s}function Nr(){if(!lt?.comments?.length)return;const t=jt();Yt(),lt.comments.forEach((n,o)=>{n.meta?.x!=null&&n.meta?.y!=null&&Er(t,n,o)})}async function wt(){if(!ct())return;const t=jt();Nr();try{const n=await wr(Ir());if(lt=n,Yt(),!n?.comments?.length)return;n.comments.forEach((o,s)=>{o.meta?.x!=null&&o.meta?.y!=null&&Er(t,o,s)}),Bc(t,n)}catch(n){console.warn("[storyboard] Could not load comments:",n.message)}}function Bc(t,n){const o=new URLSearchParams(window.location.search).get("comment");if(!o||!n?.comments?.length)return;const s=n.comments.find(r=>r.id===o);if(s){if(s.meta?.y!=null){const r=Gt(),a=s.meta.y/100*r.scrollHeight,i=r.scrollTop||window.scrollY,l=i+window.innerHeight;if(a<i||a>l){const u=Math.max(0,a-window.innerHeight/3);window.scrollTo({top:u,behavior:"smooth"})}}s._rawBody=s.body,kr(t,s,n,{onClose:()=>{},onMove:()=>wt()})}}function Hc(t){if(!et()||t.target.closest(".sb-composer")||t.target.closest(".sb-comment-pin")||t.target.closest(".sb-comment-window"))return;Cr(),F&&(F.destroy(),F=null);const n=Gt(),o=n.getBoundingClientRect(),s=Math.round((t.clientX-o.left)/o.width*1e3)/10,r=Math.round((t.clientY-o.top+n.scrollTop)/n.scrollHeight*1e3)/10,a=jt();F=Tc(a,s,r,Ir(),{onCancel:()=>{F=null},onSubmit:()=>{F=null,wt()}})}function Uc(t){t?(document.body.classList.add("sb-comment-mode"),Dc(),jt().classList.add("active"),Nr(),wt()):(document.body.classList.remove("sb-comment-mode"),Mc(),F&&(F.destroy(),F=null),Cr(),Yt(),ne&&ne.classList.remove("active"))}let On=!1;function Fc(){On||(On=!0,Oc(),hc(Uc),document.addEventListener("click",t=>{et()&&(t.target.closest(".sb-devtools-wrapper")||t.target.closest(".sb-auth-backdrop")||t.target.closest(".sb-comments-drawer")||t.target.closest(".sb-comments-drawer-backdrop")||Hc(t))}),window.addEventListener("keydown",t=>{const n=t.target.tagName;if(!(n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||t.target.isContentEditable)){if(t.key==="c"&&!t.metaKey&&!t.ctrlKey&&!t.altKey){if(!At())return;if(t.preventDefault(),!et()&&!ct()){Rc();return}mc()}t.key==="Escape"&&et()&&(t.preventDefault(),En(!1))}}),At()&&ct()&&new URLSearchParams(window.location.search).get("comment")&&En(!0))}const qc={repo:{owner:"dfosco",name:"storyboard"},discussions:{category:"General"}},Wc={comments:qc},Lr=ro(dc,{basename:"/storyboard/branch--comments-system/"});ts(Lr,"/storyboard/branch--comments-system/");Po();Ao();$o(Wc);Fc();const Vc=document.getElementById("root"),Jc=Zr.createRoot(Vc);Jc.render(e.jsx(b.StrictMode,{children:e.jsx(Qr,{colorMode:"auto",children:e.jsxs(eo,{children:[e.jsx(dr,{}),e.jsx(oo,{router:Lr})]})})}));
