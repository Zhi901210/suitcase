import{_,t as w,c as u,a as t,F as v,u as y,o as p,v as h,b as m,w as P,x as b,p as C,f as $,r as k}from"./index-a97ecb40.js";const{VITE_APP_URL:r,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"qqq-suitcase",BASE_URL:"/suitcase/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{products:[]}},components:{RouterLink:w},methods:{getbagProducts(){const e="手提包";this.$http.get(`${r}v2/api/${l}/products?category=${e}`).then(o=>{this.products=o.data.products;const n="斜背包";this.$http.get(`${r}v2/api/${l}/products?category=${n}`).then(g=>{const i=g.data.products;for(var d=i.length,a=0;a<d;a++)this.products.push(i[a])})})},getProducts(){this.$http.get(`${r}/v2/api/${l}/products/all`).then(e=>{console.log(e),this.products=e.data.products}).catch(e=>{console.log(e)})},getCategoryProducts(e){const o=e;this.$http.get(`${r}v2/api/${l}/products?category=${o}`).then(n=>{this.products=n.data.products}).catch(n=>{console.log(n)})},addToCart(e){const o={product_id:e,qty:1};this.$http.post(`${r}/v2/api/${l}/cart`,{data:o}).then(n=>{console.log(n)}).catch(n=>{console.log(n)})}},mounted(){this.getbagProducts()}},c=e=>(C("data-v-115e0de2"),e=e(),$(),e),B=c(()=>t("div",{class:"A"},[t("div",{class:"A-img"})],-1)),A={class:"category"},I={class:"dropdown"},V={class:"dropdown"},E={class:"dropdown"},R=c(()=>t("button",{class:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," 行李箱 ",-1)),T={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},L={class:"dropdown"},M=c(()=>t("button",{class:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," 包袋 ",-1)),S={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},q={class:"dropdown"},D=c(()=>t("button",{class:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," 配件 ",-1)),U={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},N={class:"container"},x={class:"card-body"},z={type:"button",class:"btn"},F={class:"card-title"};function H(e,o,n,g,i,d){const a=k("RouterLink");return p(),u(v,null,[B,t("div",A,[t("div",I,[t("button",{type:"button",class:"btn",onClick:o[0]||(o[0]=s=>d.getProducts())},"全部商品")]),t("div",V,[t("button",{type:"button",class:"btn",onClick:o[1]||(o[1]=s=>d.getCategoryProducts(e.d="聯名商品"))}," 好箱xZR聯名款 ")]),t("div",E,[R,t("ul",T,[t("li",null,[t("a",{class:"dropdown-item",onClick:o[2]||(o[2]=s=>d.getCategoryProducts(e.d="大號行李箱"))},"大號行李箱")]),t("li",null,[t("a",{class:"dropdown-item",onClick:o[3]||(o[3]=s=>d.getCategoryProducts(e.d="中號行李箱"))},"中號行李箱")]),t("li",null,[t("a",{class:"dropdown-item",onClick:o[4]||(o[4]=s=>d.getCategoryProducts(e.d="小號行李箱"))},"小號行李箱")]),t("li",null,[t("a",{class:"dropdown-item",onClick:o[5]||(o[5]=s=>d.getCategoryProducts(e.d="登機箱"))},"登機箱")])])]),t("div",L,[M,t("ul",S,[t("li",null,[t("a",{class:"dropdown-item",onClick:o[6]||(o[6]=s=>d.getCategoryProducts(e.d="手提包"))},"手提包")]),t("li",null,[t("a",{class:"dropdown-item",onClick:o[7]||(o[7]=s=>d.getCategoryProducts(e.d="斜背包"))},"斜背包")])])]),t("div",q,[D,t("ul",U,[t("li",null,[t("a",{class:"dropdown-item",onClick:o[8]||(o[8]=s=>d.getCategoryProducts(e.d="行李箱束帶"))},"行李箱束帶")]),t("li",null,[t("a",{class:"dropdown-item",onClick:o[9]||(o[9]=s=>d.getCategoryProducts(e.d="行李箱標牌"))},"行李箱標牌 ")]),t("li",null,[t("a",{class:"dropdown-item",onClick:o[10]||(o[10]=s=>d.getCategoryProducts(e.d="貼紙"))},"貼紙 ")])])])]),t("div",N,[(p(!0),u(v,null,y(i.products,s=>(p(),u("div",{class:"card",style:{width:"18rem"},key:s.id},[t("div",{style:h([{height:"300px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${s.imageUrl})`}])},null,4),t("div",x,[m(a,{to:`/product/${s.id}`},{default:P(()=>[t("button",z,b(s.title),1)]),_:2},1032,["to"]),t("p",F,"NT "+b(s.price),1)])]))),128))])],64)}const Z=_(f,[["render",H],["__scopeId","data-v-115e0de2"]]);export{Z as default};
