import{_ as x,c as a,a as t,x as c,y as v,z as y,F as f,u as P,b as l,w as b,r as d,o as p}from"./index-a97ecb40.js";const{VITE_APP_URL:_,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"qqq-suitcase",BASE_URL:"/suitcase/",MODE:"production",DEV:!1,PROD:!0},A={data(){return{product:{},qty:1}},methods:{getProduct(){console.log(this.$route.params);const{id:n}=this.$route.params;this.$http.get(`${_}/v2/api/${u}/product/${n}`).then(o=>{this.product=o.data.product}).catch(o=>{console.log(o)})},addToCart(n,o=1){const r={product_id:n,qty:o};this.loadingItem=n,this.$http.post(`${_}/v2/api/${u}/cart`,{data:r}).then(i=>{console.log("err123456"),this.loadingItem=" "}).catch(i=>{console.log(i)})}},mounted(){this.getProduct()}},V={class:"A"},w={class:"modal-body"},T={class:"aa"},k={class:"A-img"},E=["src"],q={class:"A-text"},I={class:"modal-title",id:"exampleModalLabel",style:{margin:"30px 0px","font-size":"32px"}},L={class:"badge bg-primary rounded-pill",style:{"margin-bottom":"30px"}},R={class:"h5",style:{margin:"10px 0px 30px 0px","font-size":"24px"}},C={style:{margin:"10px 0px 30px 0px"}},D={style:{margin:"10px 0px 30px 0px"}},U={class:"cart"},z={class:"input-group"},B=["value"],$={class:"contact"};function M(n,o,r,i,s,h){const m=d("font-awesome-icon"),g=d("RouterLink");return p(),a("div",V,[t("div",w,[t("div",T,[t("div",k,[t("img",{class:"img-fluid",src:s.product.imageUrl,alt:"",style:{"background-size":"cover","background-position":"center"}},null,8,E)]),t("div",q,[t("p",I,[t("span",null,c(s.product.title),1)]),t("span",L,c(s.product.category),1),t("div",R," NT "+c(s.product.price)+" 元 ",1),t("p",C,c(s.product.description),1),t("p",D,"說明："+c(s.product.content),1),t("div",U,[t("div",z,[v(t("select",{name:"",id:"",class:"form-selsct","onUpdate:modelValue":o[0]||(o[0]=e=>s.qty=e)},[(p(),a(f,null,P(50,e=>t("option",{value:e,key:`${e}123`},c(e),9,B)),64))],512),[[y,s.qty]])]),t("button",{type:"button",class:"btn btn-danger",style:{margin:"20px auto",width:"60%"},onClick:o[1]||(o[1]=e=>h.addToCart(s.product.id,s.qty))}," 加入購物車 ")])])])]),t("div",$,[l(g,{to:"/products",class:"about-button"},{default:b(()=>[l(m,{icon:"arrow-left",style:{color:"#fff"}})]),_:1})])])}const S=x(A,[["render",M],["__scopeId","data-v-6c576152"]]);export{S as default};
