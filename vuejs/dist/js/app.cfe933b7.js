(function(){"use strict";var e={784:function(e,t,r){var n=r(9963),s=r(6252);const a={class:"container"};function o(e,t,r,n,o,i){const c=(0,s.up)("router-view"),u=(0,s.up)("footer-layout");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(c,null,{default:(0,s.w5)((e=>[((0,s.wg)(),(0,s.j4)(s.Ob,null,[((0,s.wg)(),(0,s.j4)((0,s.LL)(e.Component)))],1024))])),_:1}),(0,s.Wm)(u)])}const i=e=>((0,s.dD)("data-v-a7140316"),e=e(),(0,s.Cn)(),e),c={class:"footer-section"},u=i((()=>(0,s._)("p",null,"PHP REST API SERVER",-1))),l=[u];function d(e,t){return(0,s.wg)(),(0,s.iD)("div",c,l)}var m=r(3744);const p={},h=(0,m.Z)(p,[["render",d],["__scopeId","data-v-a7140316"]]);var v=h,f={components:{FooterLayout:v},created(){const e=!1;this.$store.dispatch("setServerUrl",e)}};const g=(0,m.Z)(f,[["render",o]]);var w=g,y=r(2119);const b={class:"product-add-section"};function k(e,t,r,a,o,i){const c=(0,s.up)("alert-component"),u=(0,s.up)("header-layout"),l=(0,s.up)("products-add-frame");return(0,s.wg)(),(0,s.iD)("div",b,[(0,s.wy)((0,s.Wm)(c,{msg:o.errorMsg,btnContent:o.alertBtnNamae,onConfirm:i.closeAlert},null,8,["msg","btnContent","onConfirm"]),[[n.F8,o.showAlert]]),(0,s.Wm)(u,{title:o.title,leftBtnName:o.leftBtnName,rightBtnName:o.rightBtnName,onLeftBtnEvent:i.saveItem,onRightBtnEvent:i.cancel},null,8,["title","leftBtnName","rightBtnName","onLeftBtnEvent","onRightBtnEvent"]),(0,s.Wm)(l,{ref:"productAddFrame"},null,512)])}r(7658);var B=r(3577);const L={class:"header-section"},I={class:"header",id:"titleInsertPoint"},_=["innerHTML"],D={class:"buttons-wrapper"};function F(e,t,r,n,a,o){return(0,s.wg)(),(0,s.iD)("div",L,[(0,s._)("div",I,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.titleArr,((e,t)=>((0,s.wg)(),(0,s.iD)("span",{key:t,innerHTML:e.char,style:(0,B.j5)({animationDelay:e.delayValue})},null,12,_)))),128))]),(0,s._)("div",D,[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>o.leftBtnFunc&&o.leftBtnFunc(...e))},(0,B.zw)(r.leftBtnName),1),(0,s._)("button",{onClick:t[1]||(t[1]=(...e)=>o.rightBtnFunc&&o.rightBtnFunc(...e))},(0,B.zw)(r.rightBtnName),1)])])}var N={props:["title","leftBtnName","rightBtnName"],emits:["leftBtnEvent","rightBtnEvent"],activated(){this.showTitle()},data(){return{titleArr:[]}},methods:{leftBtnFunc(){this.$emit("leftBtnEvent")},rightBtnFunc(){this.$emit("rightBtnEvent")},showTitle(){let e="",t=0;[...this.title].forEach((r=>{e="_"==r?"&nbsp;":r,t+=.1,this.titleArr.push({char:e,delayValue:`${t}s`})}))}}};const C=(0,m.Z)(N,[["render",F],["__scopeId","data-v-464bcaae"]]);var S=C;const $={class:"product-add-form",id:"product_form"},E=(0,s._)("br",null,null,-1),P=(0,s._)("br",null,null,-1);function A(e,t,r,n,a,o){const i=(0,s.up)("base-input"),c=(0,s.up)("switchable-form");return(0,s.wg)(),(0,s.iD)("form",$,[((0,s.wg)(),(0,s.j4)(i,{labelName:"SKU",key:"sku",type:"text",name:"Sku",id:"sku",placeholder:"",min:0})),E,((0,s.wg)(),(0,s.j4)(i,{labelName:"Name",key:"name",type:"text",name:"Name",id:"name",placeholder:"",min:0})),P,((0,s.wg)(),(0,s.j4)(i,{labelName:"Price ($)",key:"price",type:"number",name:"Price",id:"price",placeholder:"",min:0},null,8,["labelName"])),(0,s.Wm)(c,{ref:"switchableForm"},null,512)])}const R={class:"base-input"},T=["for"],V=["type","name","id","placeholder","value","min"];function j(e,t,r,n,a,o){return(0,s.wg)(),(0,s.iD)("div",R,[(0,s._)("label",{for:r.id},(0,B.zw)(r.labelName),9,T),((0,s.wg)(),(0,s.iD)("input",{key:r.id,type:r.type,name:r.name,id:r.id,placeholder:r.placeholder,value:r.value,min:r.min},null,8,V))])}var M={props:["id","labelName","type","name","placeholder","value","min"]};const z=(0,m.Z)(M,[["render",j]]);var x=z;const O=e=>((0,s.dD)("data-v-2ba94874"),e=e(),(0,s.Cn)(),e),U={class:"switchable-form-section"},W={class:"switcher-input"},H=O((()=>(0,s._)("label",{for:"productType"},"Type Switcher ",-1))),Z=O((()=>(0,s._)("option",{value:"Book"},"Book",-1))),q=O((()=>(0,s._)("option",{value:"DVD"},"DVD",-1))),K=O((()=>(0,s._)("option",{value:"Furniture"},"Furniture",-1))),G=[Z,q,K],Y={class:"spec-input"},J={id:"DVD"},Q=O((()=>(0,s._)("p",null,"Please provide size (MB)",-1))),X={id:"Furniture"},ee=O((()=>(0,s._)("br",null,null,-1))),te=O((()=>(0,s._)("br",null,null,-1))),re=O((()=>(0,s._)("p",null,"Please provide dimensions in HxWxL format",-1))),ne={id:"Book"},se=O((()=>(0,s._)("p",null,"Please provide Weight (KG)",-1)));function ae(e,t,r,a,o,i){const c=(0,s.up)("base-input");return(0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("div",W,[H,(0,s.wy)((0,s._)("select",{name:"type",id:"productType","onUpdate:modelValue":t[0]||(t[0]=e=>o.selectedItem=e)},G,512),[[n.bM,o.selectedItem]])]),(0,s._)("div",Y,[(0,s.wy)((0,s._)("div",J,[((0,s.wg)(),(0,s.j4)(c,{labelName:"Size (MB)",key:"size",type:"number",name:"DVD[size]",id:"size",placeholder:"",value:"",min:0},null,8,["labelName"])),Q],512),[[n.F8,o.type.DVD]]),(0,s.wy)((0,s._)("div",X,[((0,s.wg)(),(0,s.j4)(c,{labelName:"Height (CM)",key:"height",type:"number",name:"Furniture[height]",id:"height",placeholder:"",value:"",min:0},null,8,["labelName"])),ee,((0,s.wg)(),(0,s.j4)(c,{labelName:"Width (CM)",key:"width",type:"number",name:"Furniture[width]",id:"width",placeholder:"",value:"",min:0},null,8,["labelName"])),te,((0,s.wg)(),(0,s.j4)(c,{labelName:"Length (CM)",key:"length",type:"number",name:"Furniture[length]",id:"length",placeholder:"",value:"",min:0},null,8,["labelName"])),re],512),[[n.F8,o.type.Furniture]]),(0,s.wy)((0,s._)("div",ne,[((0,s.wg)(),(0,s.j4)(c,{labelName:"Weight (KG)",key:"weight",type:"number",name:"Book[weight]",id:"weight",placeholder:"",value:"",min:0},null,8,["labelName"])),se],512),[[n.F8,o.type.Book]])])])}var oe={components:{BaseInput:x},data(){return{selectedItem:"Book",type:{Book:!0,DVD:!1,Furniture:!1}}},watch:{selectedItem(e){this.switcher(e)}},methods:{switcher(e){for(let t in this.type)t==e?this.type[e]=!0:this.type[t]=!1,this.setInputValue(t,null)},setInputValue(e,t){let r=document.querySelectorAll(`#${e} .base-input input`);r.forEach((e=>{e.value=t}))},resetAllInputValue(){this.selectedItem="Book",this.setInputValue("Book",null)},returnInputValue(){let e={},t=document.querySelectorAll(`#${this.selectedItem} .base-input input`);return t.forEach((t=>{e[t.id]=t.value})),e["productType"]=this.selectedItem,e}}};const ie=(0,m.Z)(oe,[["render",ae],["__scopeId","data-v-2ba94874"]]);var ce=ie,ue={components:{BaseInput:x,SwitchableForm:ce},data(){return{inputIds:["name","sku","price"]}},methods:{resetInputValue(){this.inputIds.forEach((e=>{document.getElementById(e).value=null})),this.$refs.switchableForm.resetAllInputValue()},returnInputValue(){let e=[];this.inputIds.forEach((t=>{let r=document.getElementById(t);e[r.id]=r.value}));const t=this.$refs.switchableForm.returnInputValue();return{...e,...t}}}};const le=(0,m.Z)(ue,[["render",A]]);var de=le,me={data(){return{stringCheckList:["name","sku","productType"],numberCheckList:["price","height","width","length","weight","size"],typeCheckList:["productType"]}},methods:{validation(e,t){const r=this.checkRouting(e);return r(e,t)},checkRouting(e){return this.stringCheckList.includes(e)?this.stringCheck:this.numberCheckList.includes(e)?this.numberCheck:this.typeCheckList.includes(e)?this.typeCheck:void 0},stringCheck(e,t){let r="";const n=t.toString().trim();return n.length<=0&&(r+=`'${e}' cannot be empty.Please, submit required data.<br> `),n.length>30&&(r+=`'${e}' cannot excess 30 characters.<br> `),r||void 0},numberCheck(e,t){let r="";return isNaN(t)&&(r+=`'${e}' must be a number.<br> `),t.toString().trim().length<=0&&(r+=`'${e}' cannot be empty.Please, submit required data.<br> `),+t<0&&(r+=`'${e}' cannot be negative.<br> `),r||void 0},typeCheck(e,t){let r="";const n=["Book","Furniture","DVD"];return n.includes(t)?void 0:(r=`'${e}' is not allowed type. Please, provide the data of indicated type<br> `,r)}}};const pe=me;var he=pe;const ve={class:"alert-card"},fe=(0,s._)("i",{class:"fa-solid fa-circle-xmark"},null,-1),ge=["innerHTML"];function we(e,t,r,n,a,o){return(0,s.wg)(),(0,s.iD)("div",{class:"alert-section",onClick:t[1]||(t[1]=(...e)=>o.confirm&&o.confirm(...e))},[(0,s._)("div",ve,[fe,(0,s._)("p",{innerHTML:r.msg},null,8,ge),(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>o.confirm&&o.confirm(...e))},(0,B.zw)(r.btnContent),1)])])}var ye={props:["msg","btnContent"],methods:{confirm(){this.$emit("confirm")}}};const be=(0,m.Z)(ye,[["render",we]]);var ke=be,Be={components:{HeaderLayout:S,ProductsAddFrame:de,AlertComponent:ke},mixins:[he],data(){return{title:"Product_Add",leftBtnName:"Save",rightBtnName:"Cancel",showAlert:!1,errorMsg:"",alertBtnNamae:"OK"}},methods:{async saveItem(){const e=this.getInputValues();if("success"!==e.status)this.showAlert=!0,this.errorMsg=e.message;else{const t=await this.$store.dispatch({type:"products/createItem",data:e.data});"success"===t.status?this.$router.push("/"):(this.showAlert=!0,this.errorMsg=t.message)}},closeAlert(){this.showAlert=!1,this.errorMsg=""},cancel(){this.$router.push("/")},getInputValues(){const e=this.$refs.productAddFrame.returnInputValue();let t={},r=[],n="";for(const[s,a]of Object.entries(e)){let e=this.validation(s,a);e?n+=e:t[s]=a}return r=n?{status:"error",message:n}:{status:"success",data:t},r},resetForm(){this.$refs.productAddFrame.resetInputValue()}},beforeRouteLeave(e,t,r){this.resetForm(),this.title="",r()}};const Le=(0,m.Z)(Be,[["render",k]]);var Ie=Le;const _e={class:"product-list-section"};function De(e,t,r,n,a,o){const i=(0,s.up)("header-layout"),c=(0,s.up)("products-frame");return(0,s.wg)(),(0,s.iD)("div",_e,[(0,s.Wm)(i,{title:a.title,leftBtnName:a.leftBtnName,rightBtnName:a.rightBtnName,onLeftBtnEvent:o.AddItem,onRightBtnEvent:o.MassDelete},null,8,["title","leftBtnName","rightBtnName","onLeftBtnEvent","onRightBtnEvent"]),(0,s.Wm)(c,{products:a.products},null,8,["products"])])}const Fe={class:"products-frame"},Ne={class:"cards-wrapper"};function Ce(e,t,r,n,a,o){const i=(0,s.up)("product-card");return(0,s.wg)(),(0,s.iD)("div",Fe,[(0,s._)("div",Ne,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.products,(e=>((0,s.wg)(),(0,s.j4)(i,{key:e.id,id:e.id,sku:e.sku,name:e.name,price:e.price,spec:e.spec,type:e.productType,param:e.id,ref_for:!0,ref:"card"},null,8,["id","sku","name","price","spec","type","param"])))),128))])])}const Se=["name"],$e={class:"card-content"};function Ee(e,t,r,n,a,o){return(0,s.wg)(),(0,s.iD)("div",{class:(0,B.C_)(["product-card",{clicked:a.selected}])},[(0,s._)("input",{class:"delete-checkbox",type:"checkbox",name:r.name,onClick:t[0]||(t[0]=e=>o.selectCard(r.id))},null,8,Se),(0,s._)("div",$e,[(0,s._)("p",null,(0,B.zw)(r.sku),1),(0,s._)("p",null,(0,B.zw)(r.name),1),(0,s._)("p",null,(0,B.zw)(r.price)+" $",1),(0,s._)("p",null,(0,B.zw)(a.attribute)+" : "+(0,B.zw)(r.spec)+" "+(0,B.zw)(a.unit),1)])],2)}var Pe={props:["id","sku","name","price","type","spec"],activated(){this.uncheck()},created(){this.setUnit(this.type)},data(){return{attribute:"",unit:"",selected:!1}},methods:{setUnit(e){const t=this.getSpecUnit(e);this.attribute=t[0],this.unit=t[1]},uncheck(){document.querySelectorAll(".delete-checkbox").forEach((e=>{e.checked=!1})),this.selected=!1},selectCard(e){this.selected?(this.$store.dispatch({type:"products/removeItemsFromRemoveList",item:e}),this.selected=!1):(this.$store.dispatch({type:"products/addItemsToRemoveList",item:e}),this.selected=!0)}}};const Ae=(0,m.Z)(Pe,[["render",Ee]]);var Re=Ae,Te={props:["products"],components:{ProductCard:Re},mounted(){window.addEventListener("resize",this.centralise),this.centralise()},methods:{centralise(){const e=200,t=35,r=e+t,n=document.querySelector(".products-frame").offsetWidth,s=Math.trunc((n-e)/r),a=s*r+e,o=(n-a)/2;document.querySelector(".cards-wrapper").style.paddingLeft=`${o}px`}}};const Ve=(0,m.Z)(Te,[["render",Ce]]);var je=Ve,Me={components:{HeaderLayout:S,ProductsFrame:je},activated(){this.getProductFromStore()},data(){return{title:"Product_List",leftBtnName:"ADD",rightBtnName:"MASS DELETE",products:[]}},async created(){await this.$store.dispatch("products/fetchProductFromDatabase"),await this.getProductFromStore()},methods:{AddItem(){this.$router.push("/add-product")},async MassDelete(){await this.$store.dispatch("products/deleteItemsFromDatabase"),await this.getProductFromStore()},getProductFromStore(){this.products=this.$store.getters["products/getProducts"]}},beforeRouteLeave(e,t,r){this.$store.dispatch("products/clearRemoveList"),this.title="",r()}};const ze=(0,m.Z)(Me,[["render",De],["__scopeId","data-v-fb233942"]]);var xe=ze;const Oe=(0,y.p7)({history:(0,y.PO)(),routes:[{path:"/",component:xe,name:"view-product"},{path:"/add-product",component:Ie,name:"add-product"},{path:"/:notFound(.*)",component:null}]});var Ue=Oe,We={addItemsToRemoveList(e,t){e.removeList.push(t)},removeItemsFromRemoveList(e,t){const r=e.removeList.filter((e=>e!=t));e.removeList=r},clearRemoveList(e){e.removeList=[]},removeSeletedItems(e){const t=e.removeList;if(0==t.length)return;const r=e.products.filter((e=>!t.includes(e.id)));e.removeList=[],e.products=r},createItem(e,t){t["spec"]="",t.height?t["spec"]=`${t.height}x${t.width}x${t.length}`:t["spec"]=t.weight?t.weight:t.size;const r=[...e.products];r.push(t),e.products=r},updateProductsList(e,t){e.products=[...t]}},He=(r(1703),{addItemsToRemoveList(e,t){e.commit("addItemsToRemoveList",t.item)},removeItemsFromRemoveList(e,t){e.commit("removeItemsFromRemoveList",t.item)},clearRemoveList(e){e.commit("clearRemoveList")},async deleteItemsFromDatabase(e){const t=[...e.getters["getRemoveList"]];try{const r=await e.dispatch({type:"fetchApi",data:{formData:{removeList:t},api:"/product/delete-products",method:"DELETE"}});return await e.commit("removeSeletedItems"),{status:"success",data:{message:r}}}catch(r){const e=r;return{status:"error",message:e}}},async fetchProductFromDatabase(e){try{const t=await e.dispatch({type:"fetchApi",data:{formData:null,api:"/product/get-products",method:"GET"}});return await e.commit("updateProductsList",t),{status:"success",data:{message:"Successfully fetch products from database"}}}catch(t){const e=t;return{status:"error",message:e}}},async createItem(e,t){const r=t.data;try{const t=await e.dispatch({type:"fetchApi",data:{formData:r,api:"/product/create-product",method:"POST"}});return r["id"]=t.id,await e.commit("createItem",r),{status:"success",data:{product:{product:r},message:`Product '${r["name"]}' (id=${r["id"]}) is created. `}}}catch(n){const e=n;return{status:"error",message:e}}},async fetchApi(e,t){const r=t.data.api,n=e.rootGetters["getServerUrl"]+r;let s={};s=t.data.formData?{method:t.data.method,headers:{"Content-Type":"application/json"},body:JSON.stringify(t.data.formData)}:{method:t.data.method,headers:{"Content-Type":"application/json"}};try{const e=await fetch(n,s),t=await e.json();if(200!==e.status){const t=new Error;throw t.statusCode=e.status,t}if("success"!==t.status){const r=new Error(t.message);throw r.statusCode=e.status,r}return t.data}catch(a){const e=a;throw e}}}),Ze={getProducts(e){return e.products},getRemoveList(e){return e.removeList}},qe={namespaced:!0,state(){return{removeList:[],products:[]}},mutations:We,actions:He,getters:Ze},Ke=r(3907);const Ge=(0,Ke.MT)({modules:{products:qe},state(){return{serverURL:"http://localhost:80"}},actions:{setServerUrl(e,t){let r;r=t?"":"http://localhost:80",e.commit("setServerUrl",r)}},getters:{getServerUrl(e){return e.serverURL}},mutations:{setServerUrl(e,t){return e.serverURL=t}}});var Ye=Ge,Je={methods:{getSpecUnit(e){const t={DVD:["Size","MB"],Book:["Weight","KG"],Furniture:["Dimension",""]};return t[e]}}};const Qe=Je;var Xe=Qe;const et=(0,n.ri)(w);et.use(Ue),et.use(Ye),et.mixin(Xe),et.mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,a){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],s=e[l][1],a=e[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(l--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,s,a]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,o=n[0],i=n[1],c=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(c)var l=c(r)}for(t&&t(n);u<o.length;u++)a=o[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunkphp_server"]=self["webpackChunkphp_server"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(784)}));n=r.O(n)})();
//# sourceMappingURL=app.cfe933b7.js.map