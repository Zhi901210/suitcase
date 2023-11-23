<template>
  <div class="A">
    <div class="A-img"></div>
  </div>
  <div class="category">
    <!-- 全部商品 -->
    <div class="dropdown">
      <button type="button" class="btn" @click="getProducts()">
        全部商品
      </button>
    </div>
    <!-- 好箱xZR聯名款 -->
    <div class="dropdown">
      <button type="button" class="btn" @click="getCategoryProducts(d='聯名商品')">
        好箱xZR聯名款
      </button>
    </div>
    <!-- 行李箱 -->
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        行李箱
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" @click="getCategoryProducts(d='大號行李箱')">大號行李箱</a></li>
        <li><a class="dropdown-item" @click="getCategoryProducts(d='中號行李箱')">中號行李箱</a></li>
        <li><a class="dropdown-item" @click="getCategoryProducts(d='小號行李箱')">小號行李箱</a></li>
        <li><a class="dropdown-item" @click="getCategoryProducts(d='登機箱')">登機箱</a></li>
      </ul>
    </div>
    <!-- 包袋 -->
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        包袋
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item"  @click="getCategoryProducts(d='手提包')">手提包</a></li>
        <li><a class="dropdown-item"  @click="getCategoryProducts(d='斜背包')">斜背包</a></li>
      </ul>
    </div>
    <!-- 配件 -->
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        配件
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" @click="getCategoryProducts(d='行李箱束帶')">行李箱束帶</a></li>
        <li><a class="dropdown-item" @click="getCategoryProducts(d='行李箱標牌')">行李箱標牌 </a></li>
        <li><a class="dropdown-item" @click="getCategoryProducts(d='貼紙')">貼紙 </a></li>
      </ul>
    </div>
  </div>
  <!-- 這是產品頁面 -->
  <div class="container">
    <div
      class="card"
      style="width: 18rem"
      v-for="product in products"
      :key="product.id"
    >
      <div
        style="
          height: 300px;
          background-size: cover;
          background-position: center;
        "
        :style="{ backgroundImage: `url(${product.imageUrl})` }"
      ></div>
      <div class="card-body">
        <RouterLink :to="`/product/${product.id}`">
          <button type="button" class="btn">
            {{ product.title }}
          </button>
        </RouterLink>
        <p class="card-title">NT {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCategoryProducts(d) {
      const  categort = d;
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?category=${categort}`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: 1,
      };
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.A {
  width: 100%;
  height: 600px;
}
.A-img {
  width: 100%;
  height: 600px;
  background-image: url("https://images.unsplash.com/photo-1610244825532-814d81235723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1687&q=80");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
}
/*下拉選單*/
.category {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}
.dropdown {
  margin: 0px 15px;
}
.btn {
  color: #9a4723;
}
.btn:hover {
  color: #101010;
}
.dropdown-item {
  color: #9a4723;
}
/*產品列表*/
.container {
  margin: 10px auto 50px auto;
}
.card {
  margin: 10px auto;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
}
.card-body {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  line-height: 60px;
}
.card-title {
  line-height: 65px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 0px;
}

/*響應式*/
@media (min-width: 669px) {
  .container {
    max-width: 650px;
    display: grid;
    grid-template-columns: 19rem 19rem ;
    grid-gap: 5px 20px;
  }
}
@media (min-width: 989px) {
  .container {
    max-width: 950px;
    grid-template-columns: 18rem 18rem 18rem ;
  }
}
@media (min-width: 1719px) {
  .container {
    max-width: 1260px;
    grid-template-columns: 18rem 18rem 18rem 18rem;
  }
}
</style>
