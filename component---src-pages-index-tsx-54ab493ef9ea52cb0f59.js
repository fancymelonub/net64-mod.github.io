(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(n,e,t){"use strict";t.r(e);var r=t(7),i=(t(0),t(186)),a=t(183),o=t(189),c=t(191);e.default=function(){return Object(r.d)(o.a,null,Object(r.d)(i.a,null,Object(r.d)(a.a,null,Object(r.d)("h1",null,"Hi people"),Object(r.d)("p",null,"Welcome to Net64."),Object(r.d)("p",null,Object(r.d)(c.a,{label:"Download the client",to:"/net64plus/"})),Object(r.d)("p",null,Object(r.d)(c.a,{label:"Server Hosting",to:"/hosting/"})))))}},179:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return i}),t.d(e,"a",function(){return a}),t.d(e,"f",function(){return o}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return l});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},i={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},a={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:18,large:22},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},l={header:60}},181:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return m}),t.d(e,"StaticQueryContext",function(){return f}),t.d(e,"StaticQuery",function(){return g});var r=t(7),i=t(0),a=t.n(i),o=t(4),c=t.n(o),l=t(178),d=t.n(l);t.d(e,"Link",function(){return d.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var s=t(184),u=t.n(s);t.d(e,"PageRenderer",function(){return u.a});var b=t(31);t.d(e,"parsePath",function(){return b.a});var f=a.a.createContext({}),g=function(n){return Object(r.d)(f.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):Object(r.d)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},182:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(179),i=function(n){return n/r.c.fontSize.regular}},183:function(n,e,t){"use strict";var r=t(180),i=t(7),a=(t(0),t(179)),o=t(182),c=Object(r.a)("div",{target:"ehjs3lr0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(a.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(c,{className:t},e)}},184:function(n,e,t){var r;n.exports=(r=t(187))&&r.default||r},186:function(n,e,t){"use strict";var r=t(180),i=t(7),a=(t(0),t(179)),o=Object(r.a)("div",{target:"e1ncsog0"})("display:block;flex:1;position:relative;padding:",a.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(o,{className:t},e)}},187:function(n,e,t){"use strict";t.r(e);t(53);var r=t(0),i=t.n(r),a=t(4),o=t.n(a),c=t(55),l=t(2),d=function(n){var e=n.location,t=l.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},188:function(n){n.exports={data:{site:{siteMetadata:{title:"Net64 - Super Mario 64 Online",description:"Official website for Net64, a Super Mario 64 mod for playing online."}}}}},189:function(n,e,t){"use strict";var r=t(7),i=t(188),a=t(0),o=t(192),c=t.n(o),l=t(181),d=(t(193),t(179)),s=t(182),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    background-color: "+d.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+d.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+d.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+d.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+d.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+d.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+d.b.ui.light+";\n    color: "+d.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(s.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(180),f=t(194),g=t(183),m=Object(b.a)("header",{target:"e1ny8wse0"})("height:",d.e.header,"px;padding:0 ",d.c.containerPadding,"rem;background-color:",d.b.brand,";color:",Object(f.a)(.5,d.b.white),";"),h=Object(b.a)(g.a,{target:"e1ny8wse1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),p=Object(b.a)(l.Link,{target:"e1ny8wse2"})("color:",d.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),y=function(n){var e=n.title;return Object(r.d)(m,null,Object(r.d)(h,null,Object(r.d)(p,{to:"/"},e)))},j=Object(b.a)("div",{target:"e1y2glut0"})({name:"6erv2w",styles:"display:flex;flex-direction:column;min-height:100vh;font-family:'Press Start 2P',sans-serif;font-family:'Open Sans',sans-serif;"}),O=function(n){var e=n.children,t=n.className;return Object(r.d)(a.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(u,"")}}),Object(r.d)(j,{className:t},e))},v=Object(b.a)("main",{target:"e107hvyh0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),w=function(n){var e=n.children,t=n.className;return Object(r.d)(v,{className:t},e)};e.a=function(n){var e=n.children;return Object(r.d)(l.StaticQuery,{query:"991718019",render:function(n){return Object(r.d)(O,null,Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:"net64, super, mario, 64, online"}]}),Object(r.d)(y,{title:n.site.siteMetadata.title}),Object(r.d)(w,null,e))},data:i})}},191:function(n,e,t){"use strict";var r=t(180),i=t(7),a=(t(0),t(182)),o=t(181),c=Object(r.a)("div",{target:"eyka7cg0"})("display:inline-flex;padding:",Object(a.a)(6),"em;cursor:pointer;border:1px solid black;border-radius:",Object(a.a)(6),"em;background-color:yellow;color:black;");e.a=function(n){var e=n.label,t=n.to,r=n.img;return Object(i.d)(o.Link,{to:t},r&&Object(i.d)("img",{src:r}),Object(i.d)(c,null,e))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-54ab493ef9ea52cb0f59.js.map