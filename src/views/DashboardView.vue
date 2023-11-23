<template>
  這是後後後後台頁面
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/admin/Orders">後台訂單</router-link> |
  <a href="#" @click.prevent="logout()">登出</a>|
  <router-link to="/">回前台</router-link>
  <hr />
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = 'qqqapi= ;expires= ;'
      this.$router.push('/login')
    },
    check () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)qqqapi\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${VITE_APP_URL}/v2/api/user/check`)
        .then((res) => {
          console.log(res)
          if (!res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  },
  mounted () {
    this.check()
  }
}
</script>
