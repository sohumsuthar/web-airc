"use strict";(()=>{var e={};e.id=717,e.ids=[717],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4021:e=>{e.exports=import("next/dist/compiled/@vercel/og/index.node.js")},1731:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>w,originalPathname:()=>b,requestAsyncStorage:()=>v,routeModule:()=>_,serverHooks:()=>f,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>h});var r={};a.r(r),a.d(r,{default:()=>sitemap});var i={};a.r(i),a.d(i,{GET:()=>GET}),a(5655);var s=a(3323),o=a(4647),n=a(1877),u=a(3952),p=a.n(u);function sitemap(){let e=p().siteUrl,t=["","projects"].map(t=>({url:`${e}/${t}`,lastModified:new Date().toISOString().split("T")[0]}));return[...t]}var l=a(9649);let m={...r},d=m.default,c=m.generateSitemaps;async function GET(e,t){let a;let{__metadata_id__:r=[],...i}=t.params||{},s=r[0],o=c?await c():null;if(o&&null==(a=o.find(e=>e.id.toString()===s)?.id))return new n.NextResponse("Not Found",{status:404});let u=await d({id:a}),p=(0,l.resolveRouteData)(u,"sitemap");return new n.NextResponse(p,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}let x=s.AppRouteRouteModule,_=new x({definition:{kind:o.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=1!/Users/sohumsuthar/Documents/GitHub/web-airc/app/sitemap.ts?__next_metadata_route__",nextConfigOutput:"",userland:i}),{requestAsyncStorage:v,staticGenerationAsyncStorage:g,serverHooks:f,headerHooks:w,staticGenerationBailout:h}=_,b="/sitemap.xml/route"}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[727,242,952],()=>__webpack_exec__(1731));module.exports=a})();