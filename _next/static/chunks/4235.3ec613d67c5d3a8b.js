(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4235],{23626:function(e,t,n){"use strict";var r=n(87462),i=n(1413),a=n(4942),o=n(45987),l=n(67294),c=n(93967),u=n.n(c),s=n(91463),p=n(33711),d=n(43352),m=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],f=l.forwardRef(function(e,t){var n=e.className,c=e.component,f=e.viewBox,v=e.spin,g=e.rotate,h=e.tabIndex,w=e.onClick,y=e.children,k=(0,o.Z)(e,m),b=l.useRef(),x=(0,s.x1)(b,t);(0,d.Kp)(!!(c||y),"Should have `component` prop or `children`."),(0,d.C3)(b);var T=l.useContext(p.Z),S=T.prefixCls,E=void 0===S?"anticon":S,C=T.rootClassName,_=u()(C,E,n),Z=u()((0,a.Z)({},"".concat(E,"-spin"),!!v)),$=(0,i.Z)((0,i.Z)({},d.vD),{},{className:Z,style:g?{msTransform:"rotate(".concat(g,"deg)"),transform:"rotate(".concat(g,"deg)")}:void 0,viewBox:f});f||delete $.viewBox;var I=h;return void 0===I&&w&&(I=-1),l.createElement("span",(0,r.Z)({role:"img"},k,{ref:x,tabIndex:I,onClick:w,className:_}),c?l.createElement(c,$,y):y?((0,d.Kp)(!!f||1===l.Children.count(y)&&l.isValidElement(y)&&"use"===l.Children.only(y).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),l.createElement("svg",(0,r.Z)({},$,{viewBox:f}),y)):null)});f.displayName="AntdIcon",t.Z=f},26901:function(e,t,n){"use strict";n.d(t,{M2:function(){return i},Tm:function(){return o},wm:function(){return a}});var r=n(67294);function i(e){return e&&r.isValidElement(e)&&e.type===r.Fragment}let a=(e,t,n)=>r.isValidElement(e)?r.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t;function o(e,t){return a(e,e,t)}},82643:function(e,t,n){"use strict";var r=n(67294),i=n(60474);t.Z=e=>{let t=r.useContext(i.Z);return r.useMemo(()=>e?"string"==typeof e?null!=e?e:t:e instanceof Function?e(t):t:t,[e,t])}},59661:function(e,t,n){"use strict";n.d(t,{BR:function(){return m},ri:function(){return d}});var r=n(67294),i=n(93967),a=n.n(i),o=n(16071),l=n(93565),c=n(82643),u=n(28805),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};let p=r.createContext(null),d=(e,t)=>{let n=r.useContext(p),i=r.useMemo(()=>{if(!n)return"";let{compactDirection:r,isFirstItem:i,isLastItem:o}=n,l="vertical"===r?"-vertical-":"-";return a()(`${e}-compact${l}item`,{[`${e}-compact${l}first-item`]:i,[`${e}-compact${l}last-item`]:o,[`${e}-compact${l}item-rtl`]:"rtl"===t})},[e,t,n]);return{compactSize:null==n?void 0:n.compactSize,compactDirection:null==n?void 0:n.compactDirection,compactItemClassnames:i}},m=e=>{let{children:t}=e;return r.createElement(p.Provider,{value:null},t)},f=e=>{var{children:t}=e,n=s(e,["children"]);return r.createElement(p.Provider,{value:n},t)};t.ZP=e=>{let{getPrefixCls:t,direction:n}=r.useContext(l.E_),{size:i,direction:d,block:m,prefixCls:v,className:g,rootClassName:h,children:w}=e,y=s(e,["size","direction","block","prefixCls","className","rootClassName","children"]),k=(0,c.Z)(e=>null!=i?i:e),b=t("space-compact",v),[x,T]=(0,u.Z)(b),S=a()(b,T,{[`${b}-rtl`]:"rtl"===n,[`${b}-block`]:m,[`${b}-vertical`]:"vertical"===d},g,h),E=r.useContext(p),C=(0,o.Z)(w),_=r.useMemo(()=>C.map((e,t)=>{let n=(null==e?void 0:e.key)||`${b}-item-${t}`;return r.createElement(f,{key:n,compactSize:k,compactDirection:d,isFirstItem:0===t&&(!E||(null==E?void 0:E.isFirstItem)),isLastItem:t===C.length-1&&(!E||(null==E?void 0:E.isLastItem))},e)}),[i,C,E]);return 0===C.length?null:x(r.createElement("div",Object.assign({className:S},y),_))}},28805:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(95023),i=n(66457),a=e=>{let{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}};let o=e=>{let{componentCls:t,antCls:n}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"},[`${t}-item > ${n}-badge-not-a-wrapper:only-child`]:{display:"block"}}}},l=e=>{let{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}};var c=(0,r.I$)("Space",e=>{let t=(0,i.TS)(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[o(t),l(t),a(t)]},()=>({}),{resetStyle:!1})},16071:function(e,t,n){"use strict";n.d(t,{Z:function(){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[];return r.Children.forEach(t,function(t){(null!=t||n.keepEmpty)&&(Array.isArray(t)?a=a.concat(e(t)):(0,i.isFragment)(t)&&t.props?a=a.concat(e(t.props.children,n)):a.push(t))}),a}}});var r=n(67294),i=n(59864)},41009:function(e,t,n){"use strict";function r(e,t){var n=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(e){delete n[e]}),n}n.d(t,{Z:function(){return r}})},8999:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(53917),a=n(39684),o=n(75722),l=n(53533),c=n(11163),u=n(67294),s=n(2664),p=n(54692),d=n(11521),m=n(3583),f=n.n(m);t.default=function(){let{loading:e,data:t}=(0,p.Z)(["twitterLoginEnabled"]),n=(0,s.I0)(),m=(0,c.useRouter)(),v=async()=>{let e=o.O.getTwitterToken();if(m?.query?.oauth_verifier&&e.oauthToken&&e.oauthTokenSecret)try{let t=await o.O.callbackLoginTwitter({oauth_verifier:"string"==typeof m.query.oauth_verifier?m.query.oauth_verifier:m.query.oauth_verifier[m.query.oauth_verifier.length-1],oauthToken:e.oauthToken,oauthTokenSecret:e.oauthTokenSecret,callbackUrl:e.callbackUrl,role:e.role||"user"});n((0,a.g7)({token:t.data.token})),o.O.clearTwitterToken()}catch(e){(0,i.x2)(e,"Twitter authentication login fail"),o.O.clearTwitterToken()}},g=async()=>{try{let e=window.location.href.replace(/\/+$/,""),t=await (await o.O.loginTwitter({callbackUrl:e})).data;o.O.setTwitterToken({oauthToken:t.oauth_token,oauthTokenSecret:t.oauth_token_secret,callbackUrl:e},"user"),window.location.href=t.url}catch(e){(0,i.x2)(e,"Twitter authentication login fail")}};return((0,u.useEffect)(()=>(v(),()=>{o.O.clearTwitterToken()}),[]),e||!t.twitterLoginEnabled)?null:(0,r.jsxs)(l.ZP,{onClick:()=>g(),className:`${f()["twitter-button"]} ${f()["btn-login"]}`,children:[(0,r.jsx)(d.Zm,{}),"\xa0 LOG IN / SIGN UP WITH TWITTER"]})}},3583:function(e){e.exports={"twitter-button":"twitter-login-button_twitter-button__zc_HL","btn-login":"twitter-login-button_btn-login__K82eK"}}}]);