(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"14c3":function(t,e,a){var s=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var o=a.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"1dde":function(t,e,a){var s=a("d039"),r=a("b622"),o=a("2d00"),i=r("species");t.exports=function(t){return o>=51||!s((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2e25":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("後台優待券列表")])])}],o=a("2877"),i={},n=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=n.exports},"2f7f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("關於我們")])])}],o=a("2877"),i={},n=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=n.exports},5319:function(t,e,a){"use strict";var s=a("d784"),r=a("825a"),o=a("7b0b"),i=a("50c4"),n=a("a691"),c=a("1d80"),l=a("8aa5"),d=a("14c3"),u=Math.max,p=Math.min,m=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};s("replace",2,(function(t,e,a,s){var g=s.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=s.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(a,s){var r=c(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,r,s):e.call(String(r),a,s)},function(t,s){if(!g&&_||"string"===typeof s&&-1===s.indexOf(b)){var o=a(e,t,this,s);if(o.done)return o.value}var c=r(t),m=String(this),v="function"===typeof s;v||(s=String(s));var f=c.global;if(f){var P=c.unicode;c.lastIndex=0}var x=[];while(1){var y=d(c,m);if(null===y)break;if(x.push(y),!f)break;var k=String(y[0]);""===k&&(c.lastIndex=l(m,i(c.lastIndex),P))}for(var w="",$=0,E=0;E<x.length;E++){y=x[E];for(var N=String(y[0]),M=u(p(n(y.index),m.length),0),A=[],S=1;S<y.length;S++)A.push(h(y[S]));var U=y.groups;if(v){var I=[N].concat(A,M,m);void 0!==U&&I.push(U);var L=String(s.apply(void 0,I))}else L=C(N,m,M,A,U,s);M>=$&&(w+=m.slice($,M)+L,$=M+N.length)}return w+m.slice($)}];function C(t,a,s,r,i,n){var c=s+t.length,l=r.length,d=f;return void 0!==i&&(i=o(i),d=v),e.call(n,d,(function(e,o){var n;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,s);case"'":return a.slice(c);case"<":n=i[o.slice(1,-1)];break;default:var d=+o;if(0===d)return e;if(d>l){var u=m(d/10);return 0===u?e:u<=l?void 0===r[u-1]?o.charAt(1):r[u-1]+o.charAt(1):e}n=r[d-1]}return void 0===n?"":n}))}}))},"5c3a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("後台管理頁面")]),a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/admin"}},[t._v("後台管理頁面")]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[t._v("產品列表")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[t._v("優待券")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[t._v("訂單")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/images"}},[t._v("圖片")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("前台")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/logout"}},[t._v("登出")])],1)])])],1),t.checkSuccess?a("router-view",{attrs:{token:t.token}}):t._e()],1)},r=[],o=(a("ac1f"),a("5319"),{created:function(){console.log("92f42149-8598-4890-ac28-c09272379b59"),this.checkLogin()},data:function(){return{token:"",checkSuccess:!1}},methods:{checkLogin:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/auth/check");this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");var a={api_token:this.token};this.$http.post(e,a).then((function(e){console.log(e.data),t.checkSuccess=!0,t.$http.defaults.headers.common.Authorization="Bearer ".concat(t.token)})).catch((function(e){console.log(e),t.$router.push("/login")}))}}}),i=o,n=a("2877"),c=Object(n["a"])(i,s,r,!1,null,null,null);e["default"]=c.exports},6547:function(t,e,a){var s=a("a691"),r=a("1d80"),o=function(t){return function(e,a){var o,i,n=String(r(e)),c=s(a),l=n.length;return c<0||c>=l?t?"":void 0:(o=n.charCodeAt(c),o<55296||o>56319||c+1===l||(i=n.charCodeAt(c+1))<56320||i>57343?t?n.charAt(c):o:t?n.slice(c,c+2):i-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,a){var s=a("861d"),r=a("e8b5"),o=a("b622"),i=o("species");t.exports=function(t,e){var a;return r(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?s(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"6d09":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("後台產品列表")]),a("div",{staticClass:"container mt-3"},[a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("new")}}},[t._v("建立新的產品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.origin_price))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.price))]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("edit",e,s)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openModal("delete",e,s)}}},[t._v("刪除")])])])])})),0)]),a("pagination",{attrs:{pages:t.pages},on:{"emit-pages":t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v(t._s(t.title))])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[0],expression:"tempProduct.imageUrl[0]"}],staticClass:"form-control",attrs:{id:"imageUrl",type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[0]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,0,e.target.value)}}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,r=s.checked?1:0;if(Array.isArray(a)){var o=null,i=t._i(a,o);s.checked?i<0&&t.$set(t.tempProduct,"is_enabled",a.concat([o])):i>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProduct,"is_enabled",r)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v("確認刪除")])])])])])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(a("99af"),a("e20e")),i=a("1157"),n=a.n(i),c={components:{Pagination:o["a"]},created:function(){this.getProducts(1)},props:["token"],methods:{refreshScreen:function(){this.getProducts(this.pages.current_page)},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/products?page=").concat(e);this.$http.get(a).then((function(e){t.isLoading=!1,console.log(e.data.data),t.products=e.data.data,t.pages.current_page=e.data.meta.pagination.current_page,t.pages.total_pages=e.data.meta.pagination.total_pages,console.log(t.products)})).catch((function(e){console.log(e),t.isLoading=!1}))},updateProduct:function(){var t,e=this;switch(console.log(this.tempProduct),this.isNew){case!0:t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product"),this.$http.post(t,this.tempProduct).then((function(t){console.log(e.tempProduct),n()("#productModal").modal("hide"),e.refreshScreen()})).catch((function(t){console.log(t),alert(t.response.data.message)}));break;case!1:t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product/").concat(this.tempProduct.id),this.$http.patch(t,this.tempProduct).then((function(t){e.refreshScreen(),n()("#productModal").modal("hide")})).catch((function(t){console.log(t),alert(t.response.data.message)})),this.products[this.tempIndex]=this.tempProduct,this.$set(this.products,this.tempIndex,this.tempProduct);break}},openModal:function(t,e,a){switch(this.tempIndex=a,console.log(this.tempIndex),t){case"new":this.title="新增產品",this.tempProduct={imageUrl:[]},this.isNew=!0,n()("#productModal").modal("show");break;case"edit":this.title="編輯產品",this.tempProduct=Object.assign({},e),this.isNew=!1,n()("#productModal").modal("show");break;case"delete":n()("#delProductModal").modal("show"),this.tempProduct=Object.assign({},e);break;default:break}},delProduct:function(){var t,e=this;console.log(this.tempProduct),t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product/").concat(this.tempProduct.id),this.$http.delete(t,this.tempProduct).then((function(t){n()("#delProductModal").modal("hide"),e.refreshScreen()})).catch((function(t){console.log(t),alert(t.response.data.message)}))}},data:function(){return{isLoading:!1,title:"",products:[],tempProduct:{imageUrl:[]},tempIndex:0,user:{token:"",uuid:""},pages:{current_page:1,total_pages:0}}}},l=c,d=a("2877"),u=Object(d["a"])(l,s,r,!1,null,null,null);e["default"]=u.exports},"81b1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("產品列表")]),a("div",{staticClass:"container mt-3"},[a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.origin_price))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.price))]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("edit",e,s)}}},[t._v("產品細節")])])])])})),0)]),a("pagination",{attrs:{pages:t.pages},on:{"emit-pages":t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[0],expression:"tempProduct.imageUrl[0]"}],staticClass:"form-control",attrs:{readonly:"",id:"imageUrl",type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[0]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,0,e.target.value)}}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{readonly:"",id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{readonly:"",id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{readonly:"",id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{readonly:"",id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{readonly:"",id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{readonly:"",id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{readonly:"",id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{disabled:"",id:"is_enabled",type:"checkbox","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,r=s.checked?1:0;if(Array.isArray(a)){var o=null,i=t._i(a,o);s.checked?i<0&&t.$set(t.tempProduct,"is_enabled",a.concat([o])):i>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProduct,"is_enabled",r)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),t._m(2)])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(3),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v("確認刪除")])])])])])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("產品細節")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("產品細節")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(a("99af"),a("e20e")),i=a("1157"),n=a.n(i),c={components:{Pagination:o["a"]},created:function(){this.getProducts(1)},props:["token"],methods:{refreshScreen:function(){this.getProducts(this.pages.current_page)},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/ec/products?page=").concat(e);this.$http.get(a).then((function(e){t.isLoading=!1,console.log(e.data.data),t.products=e.data.data,t.pages.current_page=e.data.meta.pagination.current_page,t.pages.total_pages=e.data.meta.pagination.total_pages,console.log(t.products)})).catch((function(e){console.log(e),t.isLoading=!1}))},updateProduct:function(){var t,e=this;switch(console.log(this.tempProduct),this.isNew){case!0:t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product"),this.$http.post(t,this.tempProduct).then((function(t){console.log(e.tempProduct),n()("#productModal").modal("hide"),e.refreshScreen()})).catch((function(t){console.log(t),alert(t.response.data.message)}));break;case!1:t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product/").concat(this.tempProduct.id),this.$http.patch(t,this.tempProduct).then((function(t){e.refreshScreen(),n()("#productModal").modal("hide")})).catch((function(t){console.log(t),alert(t.response.data.message)})),this.products[this.tempIndex]=this.tempProduct,this.$set(this.products,this.tempIndex,this.tempProduct);break}},openModal:function(t,e,a){switch(this.tempIndex=a,console.log(this.tempIndex),t){case"new":this.title="新增產品",this.tempProduct={imageUrl:[]},this.isNew=!0,n()("#productModal").modal("show");break;case"edit":this.title="編輯產品",this.tempProduct=Object.assign({},e),this.isNew=!1,n()("#productModal").modal("show");break;case"delete":n()("#delProductModal").modal("show"),this.tempProduct=Object.assign({},e);break;default:break}},delProduct:function(){var t,e=this;console.log(this.tempProduct),t="".concat("https://course-ec-api.hexschool.io/","api/").concat("92f42149-8598-4890-ac28-c09272379b59","/admin/ec/product/").concat(this.tempProduct.id),this.$http.delete(t,this.tempProduct).then((function(t){n()("#delProductModal").modal("hide"),e.refreshScreen()})).catch((function(t){console.log(t),alert(t.response.data.message)}))}},data:function(){return{isLoading:!1,title:"",products:[],tempProduct:{imageUrl:[]},tempIndex:0,user:{token:"",uuid:""},pages:{current_page:1,total_pages:0}}}},l=c,d=a("2877"),u=Object(d["a"])(l,s,r,!1,null,null,null);e["default"]=u.exports},8418:function(t,e,a){"use strict";var s=a("c04e"),r=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var i=s(e);i in t?r.f(t,i,o(0,a)):t[i]=a}},"88e9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("前台管理頁面")]),a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("前台管理頁面")]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/products"}},[t._v("產品列表")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/shoppingcart"}},[t._v("購物車")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("關於我們")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/payment"}},[t._v("結帳")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/checkout"}},[t._v("結帳完成")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[t._v("後台管理")])],1)])])]),a("router-view")],1)},r=[],o={created:function(){console.log("92f42149-8598-4890-ac28-c09272379b59")},data:function(){return{}},methods:{checkLogin:function(){}}},i=o,n=a("2877"),c=Object(n["a"])(i,s,r,!1,null,null,null);e["default"]=c.exports},"8aa5":function(t,e,a){"use strict";var s=a("6547").charAt;t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},"8cd9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("購物車")])])}],o=a("2877"),i={},n=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=n.exports},9263:function(t,e,a){"use strict";var s=a("ad6d"),r=a("9f7f"),o=RegExp.prototype.exec,i=String.prototype.replace,n=o,c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=c||d||l;u&&(n=function(t){var e,a,r,n,u=this,p=l&&u.sticky,m=s.call(u),v=u.source,f=0,h=t;return p&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),h=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,f++),a=new RegExp("^(?:"+v+")",m)),d&&(a=new RegExp("^"+v+"$(?!\\s)",m)),c&&(e=u.lastIndex),r=o.call(p?a:u,h),p?r?(r.input=r.input.slice(f),r[0]=r[0].slice(f),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:c&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),d&&r&&r.length>1&&i.call(r[0],a,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(r[n]=void 0)})),r}),t.exports=n},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),o=a("e8b5"),i=a("861d"),n=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),p=a("b622"),m=a("2d00"),v=p("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",g=m>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=u("concat"),b=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)},C=!g||!_;s({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,s,r,o,i=n(this),u=d(i,0),p=0;for(e=-1,s=arguments.length;e<s;e++)if(o=-1===e?i:arguments[e],b(o)){if(r=c(o.length),p+r>f)throw TypeError(h);for(a=0;a<r;a++,p++)a in o&&l(u,p,o[a])}else{if(p>=f)throw TypeError(h);l(u,p++,o)}return u.length=p,u}})},"9f7f":function(t,e,a){"use strict";var s=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=s((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("請先登入")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("登入")]),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2020~∞ - 六角學院")])])])},r=[],o=(a("99af"),{data:function(){return{user:{email:"",password:""},token:""}},methods:{signin:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/auth/login");this.$http.post(e,this.user).then((function(e){var a=e.data.token,s=e.data.expired;document.cookie="hexToken=".concat(a,";expires=").concat(new Date(1e3*s),"; path=/"),t.$router.push("/admin")})).catch((function(t){console.log(t)}))}}}),i=o,n=(a("d6db"),a("2877")),c=Object(n["a"])(i,s,r,!1,null,null,null);e["default"]=c.exports},ac1f:function(t,e,a){"use strict";var s=a("23e7"),r=a("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,a){"use strict";var s=a("825a");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b06d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("訂單列表")])])}],o=a("2877"),i={},n=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=n.exports},b275:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("結帳")])])}],o=a("2877"),i={},n=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=n.exports},b7c8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("結帳完成")])])}],o=a("2877"),i={},n=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=n.exports},c100:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("登出")]),a("div",{staticClass:"container"},[a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2020~∞ - 六角學院")])])])}],o={created:function(){this.logout()},methods:{logout:function(){document.cookie="hexToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",this.$router.push("/admin")}}},i=o,n=a("2877"),c=Object(n["a"])(i,s,r,!1,null,null,null);e["default"]=c.exports},c52c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("圖片儲存列表")])])}],o=a("2877"),i={},n=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=n.exports},d6db:function(t,e,a){"use strict";var s=a("e67a"),r=a.n(s);r.a},d784:function(t,e,a){"use strict";a("ac1f");var s=a("6eeb"),r=a("d039"),o=a("b622"),i=a("9263"),n=a("9112"),c=o("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=o("replace"),p=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),m=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,u){var v=o(t),f=!r((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=f&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return e=!0,null},a[v](""),!e}));if(!f||!h||"replace"===t&&(!l||!d||p)||"split"===t&&!m){var g=/./[v],_=a(v,""[t],(function(t,e,a,s,r){return e.exec===i?f&&!r?{done:!0,value:g.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=_[0],C=_[1];s(String.prototype,t,b),s(RegExp.prototype,v,2==e?function(t,e){return C.call(t,this,e)}:function(t){return C.call(t,this)})}u&&n(RegExp.prototype[v],"sham",!0)}},e20e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,s){return a("li",{key:s,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},r=[],o={data:function(){return{}},props:{pages:{}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},i=o,n=a("2877"),c=Object(n["a"])(i,s,r,!1,null,null,null);e["a"]=c.exports},e67a:function(t,e,a){},e8b5:function(t,e,a){var s=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}}}]);
//# sourceMappingURL=about.331f3746.js.map