(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple","chunk-4e410830"],{"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("17c2"),c=r("9112");for(var i in o){var s=n[i],u=s&&s.prototype;if(u&&u.forEach!==a)try{c(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),a=o("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"3ac0":function(t,e,r){},"3cd8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid banner-interno",style:{"background-image":"url("+t.globalData.fondoBannerInterno+")"}})},o=[],a={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},c=a,i=(r("8385"),r("2877")),s=Object(i["a"])(c,n,o,!1,null,null,null);e["default"]=s.exports},"51eb":function(t,e,r){"use strict";var n=r("825a"),o=r("c04e");t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return o(n(this),"number"!==t)}},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0");function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r("8172"),r("efec"),r("a9e3");function o(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function a(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)}function c(t,e,r){return e=a(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),a="["+o+"]",c=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var a,c;return o&&"function"==typeof(a=e.constructor)&&a!==r&&n(c=a.prototype)&&c!==r.prototype&&o(t,c),t}},8172:function(t,e,r){var n=r("746f");n("toPrimitive")},8385:function(t,e,r){"use strict";r("d36b")},"857a":function(t,e,r){var n=r("1d80"),o=/"/g;t.exports=function(t,e,r,a){var c=String(n(t)),i="<"+e;return""!==r&&(i+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),i+">"+c+"</"+e+">"}},9911:function(t,e,r){"use strict";var n=r("23e7"),o=r("857a"),a=r("af03");n({target:"String",proto:!0,forced:a("link")},{link:function(t){return o(this,"a","href",t)}})},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),a=r("94ca"),c=r("6eeb"),i=r("5135"),s=r("c6b6"),u=r("7156"),f=r("c04e"),l=r("d039"),p=r("7c73"),b=r("241c").f,d=r("06cf").f,m=r("9bf2").f,v=r("58a8").trim,g="Number",h=o[g],y=h.prototype,O=s(p(y))==g,E=function(t){var e,r,n,o,a,c,i,s,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+u}for(a=u.slice(2),c=a.length,i=0;i<c;i++)if(s=a.charCodeAt(i),s<48||s>o)return NaN;return parseInt(a,n)}return+u};if(a(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var _,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(O?l((function(){y.valueOf.call(r)})):s(r)!=g)?u(new h(E(e)),r,w):E(e)},I=n?b(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;I.length>j;j++)i(h,_=I[j])&&!i(w,_)&&m(w,_,d(h,_));w.prototype=y,y.constructor=w,c(o,g,w)}},af03:function(t,e,r){var n=r("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),a=r("df75"),c=r("d039"),i=c((function(){a(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return a(o(t))}})},d36b:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),a=r("56ef"),c=r("fc6a"),i=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=i.f,u=a(n),f={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},dbb5:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"curso-main-container complementario"},[r("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[r("div",{staticClass:"table-responsive"},[r("table",[t._m(0),r("tbody",t._l(t.computedData,(function(e,n){return r("tr",{key:"complementario-"+n},[r("td",{staticClass:"text-start",attrs:{colspan:"3",scope:"row"},domProps:{innerHTML:t._s(e.tema)}}),r("td",{staticClass:"text-start",attrs:{colspan:"5",scope:"row"},domProps:{innerHTML:t._s(e.referencia)}}),r("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(e.tipo)}}),r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"complementario__enlaces"},t._l(e.link,(function(t){return r("a",{staticClass:"complementario__btn",attrs:{href:t,target:"_blank"}},[r("i",{staticClass:"fas fa-external-link-alt"})])})),0)])])})),0)])])])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{colspan:"3",scope:"col"}},[t._v("Tema")]),r("th",{attrs:{colspan:"5",scope:"col"}},[t._v("Referencia APA del material")]),r("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo ")]),r("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}],a=r("5530"),c=(r("d81d"),r("9911"),r("d3b7"),r("159b"),r("3cd8")),i={name:"MaterialComplementario",components:{BannerInterno:c["default"]},computed:{complementarioData:function(){return this.$config.complementario},computedData:function(){var t=this,e=this.$config.complementario;return e.map((function(e){var r=[];return e.link?"string"===typeof e.link?r.push(e.link):r=e.link:e.descarga&&("string"===typeof e.descarga?r.push(t.obtenerLink(e.descarga)):e.descarga.forEach((function(e){r.push(t.obtenerLink(e))}))),Object(a["a"])(Object(a["a"])({},e),{},{link:r})}))}}},s=i,u=(r("f52b"),r("2877")),f=Object(u["a"])(s,n,o,!1,null,null,null);e["default"]=f.exports},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),a=r("fc6a"),c=r("06cf").f,i=r("83ab"),s=o((function(){c(1)})),u=!i||s;n({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(t,e){return c(a(t),e)}})},efec:function(t,e,r){var n=r("9112"),o=r("51eb"),a=r("b622"),c=a("toPrimitive"),i=Date.prototype;c in i||n(i,c,o)},f52b:function(t,e,r){"use strict";r("3ac0")}}]);
//# sourceMappingURL=comple.83998628.js.map