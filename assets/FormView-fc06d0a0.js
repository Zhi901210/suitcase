import{_ as y,c as _,b as a,w as v,a as e,F as x,u as k,A as C,x as r,r as m,o as p,D as u,y as w,C as P,p as E,f as I}from"./index-a97ecb40.js";const{VITE_APP_URL:h,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"qqq-suitcase",BASE_URL:"/suitcase/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{products:[],productId:"",cart:{},loadingItem:"",code:{},couponTotal:{},couponOK:"",name:"",email:"",tel:"",address:"",message:""}},methods:{getCarts(){this.$http.get(`${h}/v2/api/${f}/cart`).then(s=>{this.cart=s.data.data}).catch(s=>{console.log(s)})},getCoupon(){const s={code:"9000"};this.$http.post(`${h}v2/api/${f}/coupon`,{data:s}).then(t=>{console.log("1122221"),this.couponTotal=t.data.data.final_total}).catch(t=>{console.log(t)})},order(){const s={user:{name:this.name,email:this.email,tel:this.tel,address:this.address},message:this.message};this.$http.post(`${h}v2/api/${f}/order`,{data:s}).then(t=>{console.log("11111111111",t),this.getCarts(),this.$router.push("/OkOrder")}).catch(t=>{console.log(t)})}},mounted(){this.getCarts()}},d=s=>(E("data-v-a261f687"),s=s(),I(),s),q={class:"container"},A={class:"row g-3"},S={class:"col-sm"},U=d(()=>e("label",{for:"name",class:"form-label"},"收件人姓名",-1)),R={class:"col-sm-6"},D=d(()=>e("label",{for:"tel",class:"form-label"},"收件人電話",-1)),L={class:"col-md-12"},O=d(()=>e("label",{for:"email",class:"form-label"},"Email",-1)),B={class:"col-12"},F=d(()=>e("label",{for:"address",class:"form-label"},"收件人地址",-1)),N={class:"col-12"},H=d(()=>e("label",{for:"message",class:"form-label"},"留言",-1)),M={class:"table align-middle"},$=d(()=>e("thead",null,[e("tr",null,[e("th",{style:{width:"80%"}},"品名"),e("th",{style:{width:"20%"}},"數量"),e("th",null,"單價")])],-1)),z={type:"button",class:"btn"},K={class:"text-end"},j=d(()=>e("td",{colspan:"2",class:"text-end"},"總計",-1)),G={class:"text-end"},J={class:"out"},Q={class:"input-group mb-3"},W=d(()=>e("input",{class:"form-control",placeholder:"9折優惠","aria-label":"Recipient's username","aria-describedby":"button-addon2",style:{"text-align":"center"}},null,-1)),X={class:"col-sm-4"};function Y(s,t,Z,ee,o,b){const i=m("v-field"),c=m("error-message"),g=m("v-form"),V=m("RouterLink");return p(),_("div",q,[a(g,{onSubmit:s.onSubmit},{default:v(({errors:l})=>[e("div",A,[e("div",S,[U,a(i,{id:"name",name:"姓名",type:"text",class:u(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=n=>o.name=n)},null,8,["class","modelValue"]),a(c,{name:"姓名",class:"invalid-feedback"})]),e("div",R,[D,a(i,{id:"tel",name:"電話",type:"text",class:u(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:o.tel,"onUpdate:modelValue":t[1]||(t[1]=n=>o.tel=n)},null,8,["class","modelValue"]),a(c,{name:"電話",class:"invalid-feedback"})]),e("div",L,[O,a(i,{id:"email",name:"email",type:"email",class:u(["form-control",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.email,"onUpdate:modelValue":t[2]||(t[2]=n=>o.email=n)},null,8,["class","modelValue"]),a(c,{name:"email",class:"invalid-feedback"})]),e("div",B,[F,a(i,{id:"address",name:"地址",type:"text",class:u(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.address,"onUpdate:modelValue":t[3]||(t[3]=n=>o.address=n)},null,8,["class","modelValue"]),a(c,{name:"地址",class:"invalid-feedback"})]),e("div",N,[H,w(e("textarea",{name:"",id:"message",class:"form-control",cols:"10",rows:"5","onUpdate:modelValue":t[4]||(t[4]=n=>o.message=n)},null,512),[[P,o.message]])])])]),_:1},8,["onSubmit"]),e("table",M,[$,e("tbody",null,[o.cart.carts?(p(!0),_(x,{key:0},k(o.cart.carts,l=>(p(),_("tr",{key:l.id},[e("td",null,[a(V,{to:`/product/${l.product.id}`},{default:v(()=>[e("button",z,r(l.product.title),1)]),_:2},1032,["to"])]),e("td",null,r(l.qty),1),e("td",K,r(l.total),1)]))),128)):C("",!0)]),e("tfoot",null,[e("tr",null,[j,e("td",G,r(o.cart.total),1)])])]),e("div",J,[e("div",Q,[W,e("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",style:{"background-color":"#9a4723",color:"#fff"},onClick:t[5]||(t[5]=l=>b.getCoupon())}," 使用優惠券 ")]),e("div",X,[e("button",{type:"button",class:"btn btn-danger",style:{width:"50%","margin-left":"50%"},onClick:t[6]||(t[6]=l=>b.order())}," 送出訂單 ")])])])}const se=y(T,[["render",Y],["__scopeId","data-v-a261f687"]]);export{se as default};