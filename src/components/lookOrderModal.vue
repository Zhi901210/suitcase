<template>
  <div
    class="modal fade"
    id="lookOrderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="lookOrderModal"
    aria-hidden="true"
    ref="lookOrderModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="newlookorders">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{newlookorders.name}}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{newlookorders.email}}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{newlookorders.tel}}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{newlookorders.address}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ newCopyOrders.id }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong  class="text-success"
                        v-if="newCopyOrders.is_paid"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ newCopyOrders.total}}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in newCopyOrders.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">
                      {{ item.final_total }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="newCopyOrders.is_paid"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="newCopyOrders.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="upOrders()"
          >
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['lookorders', 'copyOrders'],
  data () {
    return {
      lookOrderModal: '',
      newlookorders: [],
      newCopyOrders: []
    }
  },
  methods: {
    getOrders () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders`)
        .then((res) => {
          this.orders = res.data.orders
        })
        .catch((err) => {
          console.log(err)
        })
    },
    upOrders () {
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/order/${this.newCopyOrders.id}`, { data: this.newCopyOrders })
        .then((res) => {
          this.lookOrderModal.hide()
          this.getOrders()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  watch: {
    lookorders: function (neworders) {
      this.newlookorders = neworders
    },
    copyOrders: function (newcopyOrders) {
      this.newCopyOrders = newcopyOrders
    }
  },
  mounted () {
    this.lookOrderModal = new Modal(this.$refs.lookOrderModal)
  }
}
</script>
