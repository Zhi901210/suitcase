<template>
  <div class="container">
    <div class="text-end">
      <button
        class="btn btn-outline-danger"
        style="margin: 0px 0px 30px 0px"
        type="button"
        @click="deleteCarts()"
      >
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th style="width: 5%"></th>
          <th style="width: 20%"></th>
          <th style="width: 50%">品名</th>
          <th style="width: 20%">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cart.carts">
          <tr v-for="item in cart.carts" :key="item.id">
            <td>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="deleteItem(item)"
              >
                <i class="fas fa-spinner fa-pulse"></i>
                x
              </button>
            </td>
            <td>
              <div class="A-img">
                <img
                  class="img-fluid"
                  :src="item.product.imageUrl"
                  alt=""
                  style="
                    background-size: cover;
                    background-position: center;
                    height: 150px;
                    width: 150px;
                  "
                />
              </div>
            </td>
            <td>
              <RouterLink :to="`/product/${item.product.id}`">
                <button type="button" class="btn">
                  {{ item.product.title }}
                </button>
              </RouterLink>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <select
                    name=""
                    id=""
                    class="form-control"
                    v-model="item.qty"
                    @change="updataCartItem(item)"
                  >
                    <option :value="i" v-for="i in 50" :key="`${i}123456`">
                      {{ i }}
                    </option>
                  </select>
                  <span class="input-group-text" id="basic-addon2">{{
                    item.product.unit
                  }}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              {{ item.total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="text-end">總計</td>
          <td class="text-end">{{ cart.total }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="B">
      <div class="bb">
        <button
          class="btn btn-outline-danger"
          type="button"
          style="width: 100%"
        >
          <router-link to="/products" class="not">繼續購物</router-link>
        </button>
      </div>
      <div class="bb">
        <button class="btn btn-danger" type="button" style="width: 100%">
          <router-link to="/Form" class="not" style="color: #fff"
            >立即結帳</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      productId: "",
      cart: [],
      loadingItem: ""
    };
  },
  methods: {
    getCarts() {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((response) => {
          this.cart = response.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updataCartItem(item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.loadingItem = item.id;
      this.$http
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, {
          data,
        })
        .then((response) => {
          this.getCarts();
          this.loadingItem = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteItem(item) {
      this.loadingItem = item.id;
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((response) => {
          this.getCarts();
          this.loadingItem = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCarts() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          this.getCarts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.container {
  max-width: 80%;
  height: 1000px;
  margin: 50px auto;
  z-index: 1;
}
.B {
  width: 60%;
  margin: 20px auto;
  display: flex;
  justify-content: flex-end;
  justify-content: space-around;
  align-items: center;
}
.bb {
  width: 40%;
  color: #fff;
}
.not {
  color: #9a4723;
}
.not:hover {
  color: #fff;
}
</style>
