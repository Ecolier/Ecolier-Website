(()=>{"use strict";var n={678:(n,e,t)=>{t.d(e,{Z:()=>A});var o=t(15),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.footer{background-color:rgba(0,0,0,0.96);color:white;margin-top:auto;flex-grow:1;padding:2em 1em;position:relative;min-height:250px;max-height:250px}.footer a{text-decoration:none;color:white}.footer .brand{text-decoration:none;color:white;display:block;font-size:2em;margin:1em 0em;position:absolute;bottom:0}.footer .brand span,.footer .product span{font-weight:300;font-size:1rem;margin-left:.1rem;color:rgba(255,255,255,0.42)}.footer .list-title{display:block;font-size:1em;padding:6pt;font-weight:300;border-left:2px solid rgba(255,255,255,0.6);margin-bottom:6pt;color:rgba(255,255,255,0.6)}.footer ul{color:rgba(255,255,255,0.42)}.footer ul li{padding:6pt 0}.navbar{display:flex;justify-content:space-between;background:white;color:rgba(0,0,0,0.8);position:fixed;width:100%;top:0;left:0;box-shadow:0 0 3px 2px rgba(0,0,0,0.09);align-items:center}.navbar__brand{padding:18pt 12pt;text-decoration:none;align-self:center;color:rgba(0,0,0,0.8)}.navbar__nav-items.nav-items--right{margin-right:9pt}.navbar__nav-items.nav-items--right .nav-item{margin-left:6pt}.navbar__dropdown{display:none}.navbar__dropdown.dropdown--active{display:block;position:absolute;background-color:white;right:1rem;top:97%;box-shadow:0px 0px 12px 3px rgba(0,0,0,0.09);border-radius:9pt;z-index:1;min-width:50%}.navbar__dropdown-trigger{transition:background-color .2s ease-in-out;border-radius:100%;background-color:rgba(0,0,0,0.06);color:rgba(0,0,0,0.27);cursor:pointer;display:block;float:left;width:36pt;height:36pt;text-align:center}.navbar__dropdown-trigger__icon{line-height:36pt}.navbar__dropdown-trigger.dropdown-trigger--active,.navbar__dropdown-trigger:hover{transition:background-color .2s ease-in-out;background-color:rgba(0,0,0,0.15)}.dropdown__title{display:block;font-size:18pt;margin-top:18pt;margin-left:18pt}.dropdown__list{margin:9pt 18pt}.dropdown__item:not(:last-child){margin-bottom:6pt}.dropdown__item{padding:9pt 0;display:flex;cursor:pointer;justify-content:space-between;align-items:center;border-radius:3pt;color:rgba(0,0,0,0.6)}.dropdown__item__label{display:block;padding:9pt;cursor:pointer;border-radius:6pt;text-decoration:none;color:rgba(0,0,0,0.6)}.dropdown__item__icon{position:relative}.dropdown__item__icon:after{opacity:0;content:'';position:absolute;width:30pt;height:30pt;z-index:-1;border-radius:100%;overflow:visible;left:-6pt;top:-6pt;transition:opacity .2s}.dropdown__item.item--selected{color:rgba(0,0,0,0.9)}.dropdown__item.item--selected .dropdown__item__icon:after{background-color:#157eff;opacity:1}.dropdown__item.item--selected .dropdown__item__icon{color:rgba(255,255,255,0.9);opacity:1}.dropdown__item:not(.item--selected):hover .dropdown__item__icon:after{background-color:rgba(0,0,0,0.09);opacity:1}.dropdown__item:not(.item--selected):hover{color:rgba(0,0,0,0.9)}.dropdown__item:not(.item--selected):hover .dropdown__item__icon{position:relative;transition:color .2s;color:rgba(0,0,0,0.9)}.dropdown__item__link{color:inherit;text-decoration:none;display:block}.dropdown__menu{display:none}.dropdown__menu.menu--active{display:block}.dropdown__menu-trigger{padding:9pt;display:flex;cursor:pointer;justify-content:space-between;align-items:center;border-radius:3pt}.dropdown__menu__header{padding:6pt 18pt;border-bottom:1px solid rgba(0,0,0,0.09)}.dropdown__menu__back-trigger{display:flex;align-items:center;cursor:pointer}.dropdown__item.item--left{justify-content:left}.dropdown__item.item--left .dropdown__item__icon{margin-right:12pt}html{font-family:'Lato', sans-serif;font-size:11pt;height:100%;width:100%;-webkit-text-size-adjust:100%}body{margin:0;padding:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:rgba(0,0,0,0.03);margin-top:80px}ul{list-style:none;margin:0;padding:0}*{box-sizing:border-box}.font-size--36pt{font-size:36pt}.display--none{display:none}.display--block{display:block}.summary{padding:0 1rem}.summary li{border-left:2px solid rgba(0,0,0,0.3);padding:9pt}.summary li a{color:rgba(0,0,0,0.6)}.summary li.selected{border-left:2px solid rgba(0,0,0,0.9)}.summary li.selected a{color:rgba(0,0,0,0.9)}.summary h1{color:rgba(0,0,0,0.6);font-weight:300;margin-bottom:1em}.summary a{text-decoration:none}.product-name{font-size:3em;font-weight:bold;padding:0 1rem;margin-bottom:.5rem;margin-top:18pt;color:rgba(0,0,0,0.9)}.product-description{font-size:2em;padding:0 1rem;margin-bottom:1em;color:rgba(0,0,0,0.6)}.product-content{padding:1em;line-height:1.5em}.product-content h1{font-size:2em;color:rgba(0,0,0,0.9);margin:1em 0}.product-content p{color:rgba(0,0,0,0.9);margin-bottom:1em}.card{margin:0 1rem;background-color:rgba(108,50,121,0.9);color:rgba(255,255,255,0.9);border-radius:6pt;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);line-height:1.5em}.card .header{padding:9pt;background:rgba(255,255,255,0.09)}.card .header h2{display:inline-block;vertical-align:middle}.card .header i{vertical-align:middle;margin-right:6pt}.card .repository-list{padding:9pt}.card .repository{padding:9pt}.card span{margin-right:9pt}.card a{color:rgba(255,255,255,0.9);display:block}\n","",{version:3,sources:["webpack://./src/reset.scss","webpack://./src/footer/footer.scss","webpack://./src/navbar/navbar.scss","webpack://./src/variables.scss","webpack://./src/common.scss","webpack://./src/product/summary/summary.scss","webpack://./src/product/product.scss"],names:[],mappings:"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",sourcesContent:["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",".footer {\n    background-color: rgba(0, 0, 0, .96);\n    color: white;\n    margin-top: auto;\n    flex-grow: 1;\n    padding: 2em 1em;\n    position: relative;\n    min-height: 250px;\n    max-height: 250px;\n}\n\n.footer a {\n    text-decoration: none;\n    color: white;\n}\n\n.footer .brand {\n    text-decoration: none;\n    color: white;\n    display: block;\n    font-size: 2em;\n    margin: 1em 0em;\n    position: absolute;\n    bottom: 0;\n}\n\n.footer .brand span,\n.footer .product span {\n    font-weight: 300;\n    font-size: 1rem;\n    margin-left: .1rem;\n    color: rgba(255, 255, 255, .42);;\n}\n\n.footer .list-title {\n    display: block;\n    font-size: 1em;\n    padding: 6pt;\n    font-weight: 300;\n    border-left: 2px solid rgba(white, .6);\n    margin-bottom: 6pt;\n    color: rgba(white, .6);\n}\n\n.footer ul {\n    color: rgba(255, 255, 255, .42);\n\n    li {\n        padding: 6pt 0;\n    }\n}",".navbar {\n    display: flex;\n    justify-content: space-between;\n    background: white;\n    color: rgba(0, 0, 0, .8);\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    box-shadow: 0 0 3px 2px rgba(0, 0, 0, .09);\n    align-items: center;\n}\n\n\n.navbar__brand {\n    padding: 18pt 12pt;\n    text-decoration: none;\n    align-self: center;\n    color: rgba(0, 0, 0, .8);\n}\n\n.navbar__nav-items.nav-items--right {\n    margin-right: 9pt;\n}\n\n.navbar__nav-items.nav-items--right .nav-item {\n    margin-left: 6pt;\n}\n\n.navbar__dropdown {\n    display: none;\n}\n\n.navbar__dropdown.dropdown--active {\n    display: block;\n    position: absolute;\n    background-color: white;\n    right: 1rem;\n    top: 97%;\n    box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, .09);\n    border-radius: 9pt;\n    z-index: 1;\n    min-width: 50%;\n}\n\n.navbar__dropdown-trigger {\n    transition: background-color .2s ease-in-out;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.06);\n    color: rgba(0, 0, 0, 0.27);\n    cursor: pointer;\n    display: block;\n    float: left;\n    width: 36pt;\n    height: 36pt;\n    text-align: center;\n}\n\n.navbar__dropdown-trigger__icon {\n    line-height: 36pt;\n}\n\n.navbar__dropdown-trigger.dropdown-trigger--active,\n.navbar__dropdown-trigger:hover {\n    transition: background-color .2s ease-in-out;\n    background-color: rgba(0, 0, 0, .15);\n}\n\n.dropdown__title {\n    display: block;\n    font-size: 18pt;\n    margin-top: 18pt;\n    margin-left: 18pt;\n}\n\n.dropdown__list {   \n    margin: 9pt 18pt;\n}\n\n.dropdown__item:not(:last-child) {\n    margin-bottom: 6pt;\n}\n\n.dropdown__item {\n    padding: 9pt 0;\n    display: flex;\n    cursor: pointer;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 3pt;\n    color: $secondary-text;\n}\n\n.dropdown__item__label {\n    display: block;\n    padding: 9pt;\n    cursor: pointer;\n    border-radius: 6pt;\n    text-decoration: none;\n    color: $secondary-text;\n}\n\n.dropdown__item__icon {\n    position: relative;\n}\n\n.dropdown__item__icon:after {\n    opacity: 0;\n    content: '';\n    position: absolute;\n    width: 30pt;\n    height: 30pt;\n    z-index: -1;\n    border-radius: 100%;\n    overflow: visible;\n    left: -6pt;\n    top: -6pt;\n    transition: opacity .2s;\n}\n\n.dropdown__item.item--selected {\n    color: $primary-text;\n}\n\n.dropdown__item.item--selected .dropdown__item__icon:after {\n    background-color: #157eff;\n    opacity: 1;\n}\n\n.dropdown__item.item--selected .dropdown__item__icon {\n    color: rgba(white, .9);\n    opacity: 1;\n}\n\n.dropdown__item:not(.item--selected):hover .dropdown__item__icon:after {\n    background-color: rgba(black, .09);\n    opacity: 1;\n}\n\n.dropdown__item:not(.item--selected):hover {\n    color: $primary-text;\n}\n\n.dropdown__item:not(.item--selected):hover .dropdown__item__icon {\n    position: relative;\n    transition: color .2s;\n    color: $primary-text;\n}\n\n.dropdown__item__link {\n    color: inherit;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown__menu {\n    display: none;\n}\n\n.dropdown__menu.menu--active {\n    display: block;\n}\n\n.dropdown__menu-trigger {\n    padding: 9pt;\n    display: flex;\n    cursor: pointer;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 3pt;\n}\n\n.dropdown__menu__header {\n    padding: 6pt 18pt;\n    border-bottom: 1px solid rgba(0, 0, 0, .09);\n}\n\n.dropdown__menu__back-trigger {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.dropdown__item.item--left {\n    justify-content: left;\n}\n\n.dropdown__item.item--left .dropdown__item__icon {\n    margin-right: 12pt;\n}","$primary-text: rgba(black, .9);\n$secondary-text: rgba(black, .6);","@import './reset.scss';\n@import './variables.scss';\n@import './footer/footer.scss';\n@import './navbar/navbar.scss';\n\nhtml {\n    font-family: 'Lato', sans-serif;\n    font-size: 11pt;\n    height: 100%;\n    width: 100%;\n    -webkit-text-size-adjust: 100%;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(black, .03);\n    margin-top: 80px;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.font-size--36pt {\n    font-size: 36pt;\n}\n\n.display--none {\n    display: none;\n}\n\n.display--block {\n    display: block;\n}","$summary-indicator-background: rgba(black, .3);\n$summary-indicator-background-selected: rgba(black, .9);\n\n.summary {\n\n    padding: 0 1rem;\n\n    li {\n        border-left: 2px solid $summary-indicator-background;\n        padding: 9pt;\n\n        a {\n            color: $secondary-text;\n        }\n    }\n\n    li.selected {\n        border-left: 2px solid $summary-indicator-background-selected;\n\n        a {\n            color: $primary-text;\n        }\n    }\n\n    h1 {\n        color: $secondary-text;\n        font-weight: 300;\n        margin-bottom: 1em;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n}","@import '../common.scss';\n@import './summary/summary.scss';\n\n.product-name {\n    font-size: 3em;\n    font-weight: bold;\n    padding: 0 1rem;\n    margin-bottom: .5rem;\n    margin-top: 18pt;\n    color: $primary-text;\n}\n\n.product-description {\n    font-size: 2em;\n    padding: 0 1rem;\n    margin-bottom: 1em;\n    color: $secondary-text;\n}\n\n.product-content {\n    padding: 1em;\n    line-height: 1.5em;\n\n    h1 {\n        font-size: 2em;\n        color: $primary-text;\n        margin: 1em 0;\n    }\n\n    p {\n        color: $primary-text;\n        margin-bottom: 1em;\n    }\n}\n\n.card {\n    margin: 0 1rem;\n    background-color: rgba(108, 50, 121, 0.9);\n    color: rgba(255, 255, 255, .9);\n    border-radius: 6pt;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n\n    line-height: 1.5em;\n\n    .header {\n        padding: 9pt;\n        background: rgba(255, 255, 255, .09);\n\n        h2 {\n            display: inline-block;\n            vertical-align: middle;\n        }\n\n        i {\n            vertical-align: middle;\n            margin-right: 6pt;\n        }\n    }\n\n    .repository-list {\n        padding: 9pt;\n    }\n\n    .repository {\n        padding: 9pt;\n    }\n\n    span {\n        margin-right: 9pt;\n    }\n\n    a {\n        color: rgba(255, 255, 255, .9);\n        display: block;\n    }\n}"],sourceRoot:""}]);const A=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var A=0;A<n.length;A++){var c=[].concat(n[A]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},15:n=>{function e(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],o=!0,r=!1,i=void 0;try{for(var a,A=n[Symbol.iterator]();!(o=(a=A.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(n){r=!0,i=n}finally{try{o||null==A.return||A.return()}finally{if(r)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}n.exports=function(n){var t=e(n,4),o=t[1],r=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),A="/*# ".concat(a," */"),c=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[o].concat(c).concat([A]).join("\n")}return[o].join("\n")}},379:(n,e,t)=>{var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function A(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],c=e.base?i[0]+e.base:i[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var s=A(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(p)):a.push({identifier:l,updater:g(p,e),references:1}),o.push(l)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,s=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=s(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function C(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,u=0;function g(n,e){var t,o,r;if(e.singleton){var i=u++;t=m||(m=d(e)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=d(e),o=C.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=A(t[o]);a[r].references--}for(var i=c(n,e),d=0;d<t.length;d++){var l=A(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function e(n,t){return(e=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,t)}function o(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=i(n);if(e){var a=i(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return r(this,t)}}function r(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e):t}function i(n){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var a=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&e(n,t)}(r,n);var t=o(r);function r(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=t.call(this,n)).triggerActiveClassName="dropdown-trigger--active",e.dropdownActiveClassName="dropdown--active",e.active=!1,e.trigger=document.getElementById(e.element.getAttribute("data-trigger")),e.menuTriggers=Array.from(e.element.querySelectorAll("[data-menu]")),e.menus=[],e.menuTriggers.forEach((function(n){var t=document.getElementById(n.getAttribute("data-menu"));n.addEventListener("click",(function(n){Array.from(e.element.children).filter((function(n){return n!==t})).forEach((function(n){n.classList.remove("display--block"),n.classList.add("display--none")})),t.classList.remove("display--none"),t.classList.add("display--block")}),!1),t.querySelector("[data-back]").addEventListener("click",(function(n){Array.from(e.element.children).filter((function(n){return n!==t})).forEach((function(n){n.classList.remove("display--none"),n.classList.add("display--block")})),t.classList.remove("display--block"),t.classList.add("display--none")}),!1),e.menus.push(t)})),document.addEventListener("click",(function(n){n.target.closest("#".concat(e.trigger.id))?e.active=!0:e.active=!1,0==e.active&&(e.trigger.classList.remove(e.triggerActiveClassName),e.element.classList.remove(e.dropdownActiveClassName))}),!1),e.trigger.addEventListener("click",(function(n){e.trigger.classList.add(e.triggerActiveClassName),e.element.classList.add(e.dropdownActiveClassName),e.active=!0}),!1),e.element.addEventListener("click",(function(n){n.stopPropagation()}),!1),e}return r}((function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.refs=Array.from(this.element.querySelectorAll("[data-ref]")).reduce((function(n,e){return n[e.getAttribute("data-ref")]=e,n}),{})})),A=t(379),c=t.n(A),d=t(678),l={insert:"head",singleton:!1};c()(d.Z,l);d.Z.locals;new a(document.getElementById("dropdown-menu")),new a(document.getElementById("locale-picker"))})()})();