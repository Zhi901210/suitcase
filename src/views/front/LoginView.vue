<template>
  <h1>登入畫面</h1>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="signin">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username" v-model="usedata.username"
              placeholder="name@example.com" required autofocus>
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password" v-model="usedata.password" placeholder="Password"
              required>
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" id="login">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">
      &copy; 2021~∞ - 六角學院
    </p>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      url: 'https://vue3-course-api.hexschool.io/v2/',
      path: 'qqq-api',
      usedata: {
        username: ' ',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      this.$http.post(`${VITE_APP_URL}/v2/admin/signin`, this.usedata)
        .then((res) => {
          console.log(res)
          const { token, expired } = res.data
          document.cookie = `qqqapi=${token};expires=${expired};`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
