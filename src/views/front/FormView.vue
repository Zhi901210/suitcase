<template>
  <div class="container">
    <v-form v-slot="{ errors }" @submit="onSubmit">
      <div class="row g-3">
        <div class="col-sm">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="name"
          ></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>
        <div class="col-sm-6">
          <label for="tel" class="form-label">收件人電話</label>
          <v-field
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required|min:8|max:10"
            v-model="tel"
          ></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="col-md-12">
          <label for="email" class="form-label">Email</label>
          <v-field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="email"
          ></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
        <div class="col-12">
          <label for="address" class="form-label">收件人地址</label>
          <v-field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="address"
          ></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <div class="col-12">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="10"
            rows="5"
            v-model="message"
          ></textarea>
        </div>
      </div>
    </v-form>
    <table class="table align-middle">
      <thead>
        <tr>
          <th style="width: 80%">品名</th>
          <th style="width: 20%">數量</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cart.carts">
          <tr v-for="item in cart.carts" :key="item.id">
            <td>
              <RouterLink :to="`/product/${item.product.id}`">
                <button type="button" class="btn">
                  {{ item.product.title }}
                </button>
              </RouterLink>
            </td>
            <td>
              {{ item.qty }}
            </td>
            <td class="text-end">
              {{ item.total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="text-end">總計</td>
          <td class="text-end">{{ cart.total }}</td>
          <!-- <td class="text-end">{{ couponTotal }}</td> -->
        </tr>
      </tfoot>
    </table>
    <div class="out">
      <!-- 優惠券 -->
      <div class="input-group mb-3">
        <input
          class="form-control"
          placeholder="9折優惠"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          style="text-align: center;"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          style="background-color: #9a4723;color: #fff;"
          @click="getCoupon()"
        >
          使用優惠券
        </button>
      </div>
      <div class="col-sm-4">
        <button
          type="button"
          class="btn btn-danger"
          style=" width: 50%;margin-left: 50%;"
          @click="order()"
        >
          送出訂單
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
      cart: {},
      loadingItem: "",
      code: {},
      couponTotal: {},
      couponOK: "",
      name: "",
      email: "",
      tel: "",
      address: "",
      message: "",
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
    getCoupon() {
      const data = {
        code: "9000",
      };
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/coupon`, { data })
        .then((response) => {
          console.log("1122221");
          this.couponTotal = response.data.data.final_total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    order() {
      const data = {
        user: {
          name: this.name,
          email: this.email,
          tel: this.tel,
          address: this.address,
        },
        message: this.message,
      };
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order`, { data })
        .then((response) => {
          console.log("11111111111", response);
          this.getCarts();
          this.$router.push('/OkOrder');
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
  margin: 50px auto;
  z-index: 1;
}
.table {
  margin: 50px auto;
}
.out{
  width: 100%;
  margin: 0px auto;
  display:flex;
  justify-content:space-between;
  
}
</style>
