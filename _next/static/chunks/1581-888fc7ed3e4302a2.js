"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1581],{82643:function(t,e,n){var r=n(67294),i=n(60474);e.Z=t=>{let e=r.useContext(i.Z);return r.useMemo(()=>t?"string"==typeof t?null!=t?t:e:t instanceof Function?t(e):e:e,[t,e])}},16071:function(t,e,n){n.d(e,{Z:function(){return function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[];return r.Children.forEach(e,function(e){(null!=e||n.keepEmpty)&&(Array.isArray(e)?o=o.concat(t(e)):(0,i.isFragment)(e)&&e.props?o=o.concat(t(e.props.children,n)):o.push(e))}),o}}});var r=n(67294),i=n(59864)},74533:function(t,e,n){n.d(e,{Z:function(){return function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[];return r.Children.forEach(e,function(e){(null!=e||n.keepEmpty)&&(Array.isArray(e)?o=o.concat(t(e)):(0,i.isFragment)(e)&&e.props?o=o.concat(t(e.props.children,n)):o.push(e))}),o}}});var r=n(67294),i=n(59864)},48555:function(t,e,n){n.d(e,{Z:function(){return w}});var r=n(87462),i=n(67294),o=n(74533);n(10341);var s=n(1413),c=n(71002),u=n(34268),a=n(91463),h=i.createContext(null),f=n(91033),d=new Map,l=new f.Z(function(t){t.forEach(function(t){var e,n=t.target;null===(e=d.get(n))||void 0===e||e.forEach(function(t){return t(n)})})}),v=n(15671),p=n(43144),_=n(60136),b=n(29388),m=function(t){(0,_.Z)(n,t);var e=(0,b.Z)(n);function n(){return(0,v.Z)(this,n),e.apply(this,arguments)}return(0,p.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(i.Component),y=i.forwardRef(function(t,e){var n=t.children,r=t.disabled,o=i.useRef(null),f=i.useRef(null),v=i.useContext(h),p="function"==typeof n,_=p?n(o):n,b=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),y=!p&&i.isValidElement(_)&&(0,a.Yr)(_),g=y?_.ref:null,w=(0,a.x1)(g,o),E=function(){var t;return(0,u.ZP)(o.current)||(o.current&&"object"===(0,c.Z)(o.current)?(0,u.ZP)(null===(t=o.current)||void 0===t?void 0:t.nativeElement):null)||(0,u.ZP)(f.current)};i.useImperativeHandle(e,function(){return E()});var O=i.useRef(t);O.current=t;var M=i.useCallback(function(t){var e=O.current,n=e.onResize,r=e.data,i=t.getBoundingClientRect(),o=i.width,c=i.height,u=t.offsetWidth,a=t.offsetHeight,h=Math.floor(o),f=Math.floor(c);if(b.current.width!==h||b.current.height!==f||b.current.offsetWidth!==u||b.current.offsetHeight!==a){var d={width:h,height:f,offsetWidth:u,offsetHeight:a};b.current=d;var l=(0,s.Z)((0,s.Z)({},d),{},{offsetWidth:u===Math.round(o)?o:u,offsetHeight:a===Math.round(c)?c:a});null==v||v(l,t,r),n&&Promise.resolve().then(function(){n(l,t)})}},[]);return i.useEffect(function(){var t=E();return t&&!r&&(d.has(t)||(d.set(t,new Set),l.observe(t)),d.get(t).add(M)),function(){d.has(t)&&(d.get(t).delete(M),d.get(t).size||(l.unobserve(t),d.delete(t)))}},[o.current,r]),i.createElement(m,{ref:f},y?i.cloneElement(_,{ref:w}):_)}),g=i.forwardRef(function(t,e){var n=t.children;return("function"==typeof n?[n]:(0,o.Z)(n)).map(function(n,o){var s=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(o);return i.createElement(y,(0,r.Z)({},t,{key:s,ref:0===o?e:void 0}),n)})});g.Collection=function(t){var e=t.children,n=t.onBatchResize,r=i.useRef(0),o=i.useRef([]),s=i.useContext(h),c=i.useCallback(function(t,e,i){r.current+=1;var c=r.current;o.current.push({size:t,element:e,data:i}),Promise.resolve().then(function(){c===r.current&&(null==n||n(o.current),o.current=[])}),null==s||s(t,e,i)},[n,s]);return i.createElement(h.Provider,{value:c},e)};var w=g},91033:function(t,e,n){var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},c=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,a=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&u()}function c(){s(o)}function u(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,20);i=t}return u}(this.refresh.bind(this),0)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},d=_(0,0,0,0);function l(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+l(t["border-"+n+"-width"])},0)}var p="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function _(t,e,n,r){return{x:t,y:e,width:n,height:r}}var b=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=function(t){if(!i)return d;if(p(t)){var e;return _(0,0,(e=t.getBBox()).width,e.height)}return function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=l(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=l(r.width),u=l(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=v(r,"left","right")+o),Math.round(u+s)!==n&&(u-=v(r,"top","bottom")+s)),t!==f(t).document.documentElement){var a=Math.round(c+o)-e,h=Math.round(u+s)-n;1!==Math.abs(a)&&(c-=a),1!==Math.abs(h)&&(u-=h)}return _(i.left,i.top,c,u)}(t)}(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),m=function(t,e){var n,r,i,o,s,c=(n=e.x,r=e.y,i=e.width,o=e.height,h(s=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:i,height:o,top:r,right:n+i,bottom:o+r,left:n}),s);h(this,{target:t,contentRect:c})},y=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new b(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new m(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),g="undefined"!=typeof WeakMap?new WeakMap:new r,w=function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=new y(e,a.getInstance(),this);g.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){w.prototype[t]=function(){var e;return(e=g.get(this))[t].apply(e,arguments)}});var E=void 0!==o.ResizeObserver?o.ResizeObserver:w;e.Z=E}}]);