(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4076],{48983:function(e,t,n){var r=n(40371)("length");e.exports=r},44286:function(e){e.exports=function(e){return e.split("")}},23933:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return o(e)&&"[object RegExp]"==r(e)}},14259:function(e){e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i}},40180:function(e,t,n){var r=n(14259);e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},62689:function(e){var t=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},88016:function(e,t,n){var r=n(48983),o=n(62689),i=n(21903);e.exports=function(e){return o(e)?i(e):r(e)}},83140:function(e,t,n){var r=n(44286),o=n(62689),i=n(676);e.exports=function(e){return o(e)?i(e):r(e)}},21903:function(e){var t="\ud800-\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\ud83c[\udffb-\udfff]",o="[^"+t+"]",i="(?:\ud83c[\udde6-\uddff]){2}",u="[\ud800-\udbff][\udc00-\udfff]",a="(?:"+n+"|"+r+")?",f="[\\ufe0e\\ufe0f]?",c="(?:\\u200d(?:"+[o,i,u].join("|")+")"+f+a+")*",s=RegExp(r+"(?="+r+")|(?:"+[o+n+"?",n,i,u,"["+t+"]"].join("|")+")"+(f+a+c),"g");e.exports=function(e){for(var t=s.lastIndex=0;s.test(e);)++t;return t}},676:function(e){var t="\ud800-\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\ud83c[\udffb-\udfff]",o="[^"+t+"]",i="(?:\ud83c[\udde6-\uddff]){2}",u="[\ud800-\udbff][\udc00-\udfff]",a="(?:"+n+"|"+r+")?",f="[\\ufe0e\\ufe0f]?",c="(?:\\u200d(?:"+[o,i,u].join("|")+")"+f+a+")*",s=RegExp(r+"(?="+r+")|(?:"+[o+n+"?",n,i,u,"["+t+"]"].join("|")+")"+(f+a+c),"g");e.exports=function(e){return e.match(s)||[]}},96347:function(e,t,n){var r=n(23933),o=n(7518),i=n(31167),u=i&&i.isRegExp,a=u?o(u):r;e.exports=a},39138:function(e,t,n){var r=n(80531),o=n(40180),i=n(62689),u=n(13218),a=n(96347),f=n(88016),c=n(83140),s=n(40554),p=n(79833),m=/\w*$/;e.exports=function(e,t){var n=30,d="...";if(u(t)){var l="separator"in t?t.separator:l;n="length"in t?s(t.length):n,d="omission"in t?r(t.omission):d}var x=(e=p(e)).length;if(i(e)){var g=c(e);x=g.length}if(n>=x)return e;var j=n-f(d);if(j<1)return d;var h=g?o(g,0,j).join(""):e.slice(0,j);if(void 0===l)return h+d;if(g&&(j+=h.length-j),a(l)){if(e.slice(j).search(l)){var v,y=h;for(l.global||(l=RegExp(l.source,p(m.exec(l))+"g")),l.lastIndex=0;v=l.exec(y);)var w=v.index;h=h.slice(0,void 0===w?j:w)}}else if(e.indexOf(r(l),j)!=j){var _=h.lastIndexOf(l);_>-1&&(h=h.slice(0,_))}return h+d}},53349:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/forgot-password",function(){return n(33211)}])},33211:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return f}});var r=n(85893),o=n(71749),i=n(5152);let u=n.n(i)()(()=>Promise.all([n.e(8176),n.e(622),n.e(750),n.e(3533),n.e(1164),n.e(2702),n.e(3131),n.e(1581),n.e(5675),n.e(1664),n.e(5052),n.e(528)]).then(n.bind(n,99970)),{loadableGenerated:{webpack:()=>[99970]}});function a(e){let{loginPlaceholderImage:t}=e;return(0,r.jsxs)("div",{className:"main-container",children:[(0,r.jsx)(o.Z,{pageTitle:"Forgot Password"}),(0,r.jsx)(u,{loginPlaceholderImage:t})]})}a.authenticate=!1,a.layout="public";var f=!0;t.default=a},71749:function(e,t,n){"use strict";var r=n(85893),o=n(30072),i=n(39138),u=n.n(i),a=n(11752),f=n.n(a),c=n(9008),s=n.n(c),p=n(2664);let{publicRuntimeConfig:m}=f()();function d(e){let{item:t=null,imageUrl:n="",pageTitle:i="",keywords:a="",description:f="",metaTitle:c="",canonicalUrl:d=""}=e,{siteName:l,logo:x,favicon:g}=(0,p.v9)(e=>e.ui),j=t?.title||t?.name||t?.username,h=i||`${j} | ${l}`,v=c||h;Array.isArray(a)&&a.join(",");let y=(0,o.oN)(u()(f||t?.description||t?.bio||t?.name||"",{length:160}));return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:h}),y&&(0,r.jsx)("meta",{name:"description",content:y}),d&&(0,r.jsx)("meta",{property:"canonical",content:d}),(0,r.jsx)("meta",{property:"og:site_name",content:m.DOMAIN}),(0,r.jsx)("meta",{property:"og:rich_attachment",content:"true"}),(0,r.jsx)("meta",{property:"og:type",content:"profile"}),d&&(0,r.jsx)("meta",{property:"og:url",content:d}),y&&(0,r.jsx)("meta",{property:"og:description",itemProp:"description",content:y}),v&&(0,r.jsx)("meta",{property:"og:title",itemProp:"headline",content:v},"title"),n&&(0,r.jsx)("meta",{property:"og:image",itemProp:"thumbnailUrl",content:n}),n&&(0,r.jsx)("meta",{property:"og:image:secure_url",content:n}),(0,r.jsx)("meta",{property:"og:image:alt",content:`${t?.username||l} thumb`}),(0,r.jsx)("meta",{property:"og:image:width",content:"800"}),(0,r.jsx)("meta",{property:"og:image:height",content:"354"}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/jpeg"}),(0,r.jsx)("meta",{name:"twitter:domain",content:m.DOMAIN}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),d&&(0,r.jsx)("meta",{name:"twitter:url",content:d}),v&&(0,r.jsx)("meta",{name:"twitter:title",content:u()(v,{length:70})}),y&&(0,r.jsx)("meta",{name:"twitter:description",content:y}),n&&(0,r.jsx)("meta",{property:"twitter:image",content:n||g||x||"/favicon.ico"}),t?.username&&(0,r.jsx)("meta",{property:"twitter:image:alt",content:`Profile thumb ${t.username}`}),t?.username&&(0,r.jsx)("meta",{name:"twitter:site",content:`@${t.username}`}),t?.username&&(0,r.jsx)("meta",{name:"twitter:athlete",content:`@${t.username}`})]})}d.defaultProps={item:null,imageUrl:"",pageTitle:"",keywords:"",description:"",metaTitle:"",canonicalUrl:""},t.Z=d}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=53349)}),_N_E=e.O()}]);