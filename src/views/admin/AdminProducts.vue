<template>
  <div class="container">
    <h1>這是後台產品列頁面</h1>
    <div class="text-end mt-4">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newProductModal"
        aria-labelledby="newProductModal" aria-hidden="true">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th width="120">產品名稱</th>
          <th width="80">
            原價
          </th>
          <th width="80">
            售價
          </th>
          <th width="120">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td> {{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal"
                data-bs-target="#productModal" @click="upDa(product)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                data-bs-target="#delProductModal" @click="del(product)">刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 新增Modal -->
    <newProductModal ref="newProductModal" ></newProductModal>

    <!-- 編輯Modal -->
    <productmodal ref="productModal" :copyproducts="copyproducts"></productmodal>

    <!-- 刪除Modal -->
    <delproductpmodal ref="delModal" :copyproducts="copyproducts"></delproductpmodal>

    <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
  </div>
</template>

<script>
import delproductpmodal from '@/components/delProductModal.vue'
import productmodal from '@/components/productModal.vue'
import newProductModal from '@/components/newProductModal.vue'
import Pagination from '@/components/PaginationComponents.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      usedata: {
        username: ' ',
        password: ''
      },
      products: [],
      copyproducts: [],
      newproducts: [],
      img: false,
      upbtn: false,
      currentPage: 1,
      pagination: {}
    }
  },
  components: {
    delproductpmodal,
    productmodal,
    newProductModal,
    Pagination
  },
  methods: {
    getdata (currentPage = 3) {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products?page=${currentPage}`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err)
        })
    },
    del (product) {
      this.copyproducts = { ...product }
    },
    upDa (product) {
      this.img = true
      this.upbtn = true
      this.copyproducts = { ...product }
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
