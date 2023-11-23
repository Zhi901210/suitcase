<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>編輯產品</span>
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
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="newCopyproducts.imageUrl"
                  />
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label"
                    >或 上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="fileInput"
                    @change="uploadFile"
                  />
                </div>
                <img class="img-fluid" :src="newCopyproducts.imageUrl" />
                <!-- 多圖 -->
                <div class="mt-5" v-if="newCopyproducts.imagesUrl">
                  <div
                    v-for="(image, key) in newCopyproducts.imagesUrl"
                    class="mb-3"
                    :key="key"
                  >
                    <input
                      type="url"
                      class="form-control form-control"
                      v-model="newCopyproducts.imagesUrl[key]"
                      placeholder="請輸入連結"
                    />
                    <div>
                      <img class="img-fluid" :src="image" />
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="newCopyproducts.imagesUrl.splice(key, 1)"
                    >
                      移除
                    </button>
                  </div>
                  <div
                    v-if="
                      newCopyproducts.imagesUrl[
                        newCopyproducts.imagesUrl.length - 1
                      ] || !newCopyproducts.imagesUrl.length
                    "
                  >
                    <button
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="newCopyproducts.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                  </div>
                </div>
              </div>
              <div v-if="!newCopyproducts.imagesUrl">
                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="newCopyproducts.imageUrl = []"
                >
                  刪除圖片
                </button>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="newCopyproducts.title"
                />
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="newCopyproducts.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="newCopyproducts.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model="newCopyproducts.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model="newCopyproducts.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="newCopyproducts.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="newCopyproducts.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="newCopyproducts.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
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
          <button type="button" class="btn btn-primary" @click="upProduct()">
            確認編輯
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
  props: ['copyproducts'],
  data () {
    return {
      productModal: '',
      newCopyproducts: []
    }
  },
  methods: {
    getdata () {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products`)
        .then((res) => {
          this.products = res.data.products
          console.log('從新抓資料')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    upProduct () {
      this.$http
        .put(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.newCopyproducts.id}`,
          { data: this.newCopyproducts }
        )
        .then((res) => {
          this.productModal.hide()
          this.getdata()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    uploadFile () {
      const uploadedFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      this.$http
        .post(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        .then((response) => {
          this.newCopyproducts.imageUrl = response.data.imageUrl
          this.$refs.fileInput.value = ''
        })
        .catch((error) => {
          this.$httpMessageState(error.response, '圖片失敗')
        })
    }
  },
  watch: {
    copyproducts: function (newcopyproducts) {
      this.newCopyproducts = newcopyproducts
    }
  },
  mounted () {
    this.productModal = new Modal(this.$refs.productModal)
  }
}
</script>
