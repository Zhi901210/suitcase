<template>
  <div class="A">
    <div class="modal-body">
      <div class="aa">
        <div class="A-img">
          <img
            class="img-fluid"
            :src="product.imageUrl"
            alt=""
            style="background-size: cover; background-position: center"
          />
        </div>
        <div class="A-text">
          <p
            class="modal-title"
            id="exampleModalLabel"
            style="margin: 30px 0px; font-size: 32px"
          >
            <span>{{ product.title }}</span>
          </p>
          <span
            class="badge bg-primary rounded-pill"
            style="margin-bottom: 30px"
            >{{ product.category }}</span
          >
          <div class="h5" style="margin: 10px 0px 30px 0px; font-size: 24px">
            NT {{ product.price }} 元
          </div>
          <p style="margin: 10px 0px 30px 0px">{{ product.description }}</p>
          <p style="margin: 10px 0px 30px 0px">說明：{{ product.content }}</p>
          <div class="cart">
            <div class="input-group">
              <select name="" id="" class="form-selsct" v-model="qty">
                <option :value="i" v-for="i in 50" :key="`${i}123`">
                  {{ i }}
                </option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-danger"
              style="margin: 20px auto; width: 60%"
              @click="addToCart(product.id, qty)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- contact -->
    <div class="contact">
      <RouterLink to="/products" class="about-button">
        <font-awesome-icon icon="arrow-left" style="color: #fff;"/>
      </RouterLink>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      qty: 1,
    };
  },
  methods: {
    getProduct() {
      console.log(this.$route.params);
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty,
      };
      this.loadingItem = product_id;
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((response) => {
          console.log("err123456");
          this.loadingItem = " ";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.contact {
  position: fixed;
  bottom: 50px;
  right: 50px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #9a4723;
  color: #000;
  text-align: center;
  border-radius: 50%;
  box-shadow: 1px 1px 5px 0px #666;
  cursor: pointer;
  z-index: 5;
}
.contact:hover {
  transform: translateY(-5px);
  transition-duration: 0.3s;
  background: #e7cfc1;
  color: #9a4723;
}
.A {
  max-width: 80%;
  height: 1150px;
  margin: 20px auto 50px auto;
}
.modal-body {
  width: 100%;
}
.A-img {
  width: 100%;
}
.A-text {
  width: 100%;
}
/*b*/
.B {
  max-width: 80%;
  margin: 100px auto;
}
.inf-text {
  width: 100%;
  margin: 20px 0px;
}
.inf-text1 {
  text-align: center;
  font-size: 24px;
  color: #9a4723;
}
.inf-img {
  background-size: cover;
  background-position: center;
  width: 100%;
}
.cart {
  width: 80%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.form-selsct {
  background-color: brgb(243, 169, 79);
  color: #9a4723;
  height: 30px;
  width: 60%;
}
.btn:hover {
  background-color: #e7cfc1;
  color: #9a4723;
  border: 1px solid #e7cfc1;
}

/*響應式*/
@media (min-width: 850px) {
  .A {
    height: 850px;
    margin: 50px auto 0px auto;
  }
  .aa {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .A-img {
    width: 50%;
  }
  .A-text {
    width: 45%;
  }
  /*B*/
  .inf {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .inf-text {
    width: 45%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
  }
  .B-inf-m {
    width: 50%;
  }
  .inf-text1 {
    text-align: center;
    font-size: 32px;
  }
}
</style>
