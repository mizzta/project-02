!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=10)}([function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){var n=i(2);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(8)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,i){e=t.exports=i(3)(!1);var n=i(4),r=n(i(0)),s=n(i(0)+"?#iefix"),o=n(i(5)),a=n(i(6)),h=n(i(7)+"#silkscreennormal");e.push([t.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url("+r+");\n  src: url("+s+") format('embedded-opentype'),\n    url("+o+") format('woff'),\n    url("+a+") format('truetype'),\n    url("+h+") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  text-align: center;\n}\n",""])},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(o=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(s).concat([r]).join("\n")}var o;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(n[s]=!0)}for(r=0;r<t.length;r++){var o=t[r];null!=o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},function(t,e,i){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){var n,r,s={},o=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),a=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),h=null,l=0,u=[],c=i(9);function d(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o],e))}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(g(n.parts[o],e));s[n.id]={id:n.id,refs:1,parts:a}}}}function f(t,e){for(var i=[],n={},r=0;r<t.length;r++){var s=t[r],o=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};n[o]?n[o].parts.push(a):i.push(n[o]={id:o,parts:[a]})}return i}function p(t,e){var i=a(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),u.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,i);i.insertBefore(e,r)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return i.nc}();n&&(t.attrs.nonce=n)}return b(e,t.attrs),p(t,e),e}function b(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function g(t,e){var i,n,r,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var o=l++;i=h||(h=v(e)),n=x.bind(null,i,o,!1),r=x.bind(null,i,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),p(t,e),e}(e),n=function(t,e,i){var n=i.css,r=i.sourceMap,s=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||s)&&(n=c(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}.bind(null,i,e),r=function(){y(i),i.href&&URL.revokeObjectURL(i.href)}):(i=v(e),n=function(t,e){var i=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),r=function(){y(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=f(t,e);return d(i,e),function(t){for(var n=[],r=0;r<i.length;r++){var o=i[r];(a=s[o.id]).refs--,n.push(a)}t&&d(f(t,e),e);for(r=0;r<n.length;r++){var a;if(0===(a=n[r]).refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete s[a.id]}}}};var m,w=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?i+s:n+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,i){"use strict";i.r(e);i(1);var n="http://www.w3.org/2000/svg",r={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" "};function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e,this.height=i}var e,i,r;return e=t,(i=[{key:"render",value:function(t){var e=document.createElementNS(n,"rect");e.setAttributeNS(null,"fill","#353535"),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height);var i=document.createElementNS(n,"line");i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","white"),i.setAttributeNS(null,"stroke-dasharray","20, 15"),i.setAttributeNS(null,"stroke-width","4"),t.appendChild(e),t.appendChild(i)}}])&&s(e.prototype,i),r&&s(e,r),t}();function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e,i,n,r,s,o,a){var h=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.boardHeight=e,this.width=i,this.height=n,this.x=r,this.y=s,this.speed=10,this.score=0,document.addEventListener("keydown",function(t){switch(t.key){case o:h.up();break;case a:h.down()}})}var e,i,r;return e=t,(i=[{key:"up",value:function(){this.y=this.y-this.speed,this.y=Math.max(0,this.y-this.speed)}},{key:"down",value:function(){this.y=this.y+this.speed,this.y=Math.min(this.boardHeight-this.height,this.y+this.speed)}},{key:"coordinates",value:function(t,e,i,n){return[t,t+i,e,e+n]}},{key:"render",value:function(t){var e=document.createElementNS(n,"rect");e.setAttributeNS(null,"fill","#B5E8AC"),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"stroke","black"),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),e.setAttributeNS(null,"rx","5"),e.setAttributeNS(null,"ry","5"),t.appendChild(e)}}])&&a(e.prototype,i),r&&a(e,r),t}();function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=e,this.boardWidth=i,this.boardHeight=n,this.direction=1,this.ping=new Audio("public/sounds/pong-01.wav"),this.reset()}var e,i,r;return e=t,(i=[{key:"goal",value:function(t){t.score++,this.reset(),console.log(t.score)}},{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth,i=this.y-this.radius<=0,n=this.y+this.radius>=this.boardHeight;t||e?this.vx=-this.vx:(i||n)&&(this.vy=-this.vy)}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=l(e.coordinates(e.x,e.y,e.width,e.height),4),n=i[0],r=i[1],s=i[2],o=i[3];this.x+this.radius>=n&&this.x+this.radius<=r&&this.y>=s&&this.y<=o&&(this.vx=-this.vx,t.height-=10,this.ping.play())}else{var a=l(t.coordinates(t.x,t.y,t.width,t.height),4),h=a[0],u=a[1],c=a[2],d=a[3];this.x-this.radius<=u&&this.x-this.radius>=h&&this.y>=c&&this.y<=d&&(this.vx=-this.vx,e.height-=10,this.ping.play())}}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(e,i);var r=document.createElementNS(n,"circle");r.setAttributeNS(null,"r","8"),r.setAttributeNS(null,"cx",this.x),r.setAttributeNS(null,"cy",this.y),r.setAttributeNS(null,"fill","#FCBCD2"),t.appendChild(r);var s=this.x+this.radius>=this.boardWidth,o=this.x-this.radius<=0;s?(this.goal(e),this.direction=1):o&&(this.goal(i),this.direction=-1)}}])&&u(e.prototype,i),r&&u(e,r),t}();function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.size=n}var e,i,r;return e=t,(i=[{key:"render",value:function(t,e){var i=document.createElementNS(n,"text");i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"font-family",'"Silkscreen Web", monotyoe'),i.setAttributeNS(null,"font-size",this.size),i.setAttributeNS(null,"fill","white"),i.textContent=e,t.appendChild(i)}}])&&d(e.prototype,i),r&&d(e,r),t}();function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=e,this.boardWidth=i,this.boardHeight=n,this.direction=1,this.ping=new Audio("public/sounds/pong-03.wav"),this.reset()}var e,i,r;return e=t,(i=[{key:"goal",value:function(t){t.score++,this.reset(),console.log(t.score)}},{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth,i=this.y-this.radius<=0,n=this.y+this.radius>=this.boardHeight;t||e?this.vx=-this.vx:(i||n)&&(this.vy=-this.vy)}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=p(e.coordinates(e.x,e.y,e.width,e.height),4),n=i[0],r=i[1],s=i[2],o=i[3];this.x+this.radius>=n&&this.x+this.radius<=r&&this.y>=s&&this.y<=o&&(this.vx=-this.vx,t.height+=20,this.ping.play())}else{var a=p(t.coordinates(t.x,t.y,t.width,t.height),4),h=a[0],l=a[1],u=a[2],c=a[3];this.x-this.radius<=l&&this.x-this.radius>=h&&this.y>=u&&this.y<=c&&(this.vx=-this.vx,e.height+=20,this.ping.play())}}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(e,i);var r=document.createElementNS(n,"circle");r.setAttributeNS(null,"r","5"),r.setAttributeNS(null,"cx",this.x),r.setAttributeNS(null,"cy",this.y),r.setAttributeNS(null,"fill","#8AADC3"),t.appendChild(r);var s=this.x+this.radius>=this.boardWidth,o=this.x-this.radius<=0;s?(this.goal(e),this.direction=1):o&&(this.goal(i),this.direction=-1)}}])&&y(e.prototype,i),r&&y(e,r),t}();function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=e,this.boardWidth=i,this.boardHeight=n,this.direction=1,this.ping=new Audio("public/sounds/pong-04.wav"),this.reset()}var e,i,r;return e=t,(i=[{key:"goal",value:function(t){t.score++,this.reset(),console.log(t.score)}},{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth,i=this.y-this.radius<=0,n=this.y+this.radius>=this.boardHeight;t||e?this.vx=-this.vx:(i||n)&&(this.vy=-this.vy)}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=b(e.coordinates(e.x,e.y,e.width,e.height),4),n=i[0],r=i[1],s=i[2],o=i[3];this.x+this.radius>=n&&this.x+this.radius<=r&&this.y>=s&&this.y<=o&&(this.vx=-this.vx,this.ping.play())}else{var a=b(t.coordinates(t.x,t.y,t.width,t.height),4),h=a[0],l=a[1],u=a[2],c=a[3];this.x-this.radius<=l&&this.x-this.radius>=h&&this.y>=u&&this.y<=c&&(this.vx=-this.vx,this.ping.play())}}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(e,i);var r=document.createElementNS(n,"circle");r.setAttributeNS(null,"r","7"),r.setAttributeNS(null,"cx",this.x),r.setAttributeNS(null,"cy",this.y),r.setAttributeNS(null,"fill","#EADC8C"),t.appendChild(r);var s=this.x+this.radius>=this.boardWidth,o=this.x-this.radius<=0;s?(this.goal(e),this.direction=1):o&&(this.goal(i),this.direction=-1)}}])&&g(e.prototype,i),r&&g(e,r),t}();function w(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var x=new(function(){function t(e,i,n){var s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.width=i,this.height=n,this.gameElement=document.getElementById(this.element),this.board=new o(this.width,this.height),this.paddleWidth=8,this.paddleHeight=56,this.boardGap=10,this.player1=new h(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,r.a,r.z),this.player2=new h(this.height,this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2,r.up,r.down),this.ball=new c(8,this.width,this.height),this.ball2=new v(5,this.width,this.height),this.ball3=new m(7,this.width,this.height),this.score1=new f(this.width/2-50,30,30),this.score2=new f(this.width/2+25,30,30),document.addEventListener("keydown",function(t){switch(console.log(t),t.key){case r.spaceBar:s.pause=!s.pause}console.log(s.pause)})}var e,i,s;return e=t,(i=[{key:"render",value:function(){if(!this.pause){this.gameElement.innerHTML="";var t=document.createElementNS(n,"svg");t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 ".concat(this.width," ").concat(this.height)),this.gameElement.appendChild(t),this.board.render(t),this.player1.render(t),this.player2.render(t),this.ball.render(t,this.player1,this.player2),this.ball2.render(t,this.player1,this.player2),this.ball3.render(t,this.player1,this.player2),this.score1.render(t,this.player1.score),this.score2.render(t,this.player2.score)}}}])&&w(e.prototype,i),s&&w(e,s),t}())("game",512,256);!function t(){x.render(),requestAnimationFrame(t)}()}]);