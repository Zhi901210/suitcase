<template>
  <div class="new-img">
    <div class="new-inf">
      <p class="new-inf-ext" style="font-size: 32px">好箱</p>
      <hr style="margin: 10px auto; width: 90%" />
      <p class="new-inf-ext">已收到您的訂單</p>
      <p class="new-inf-ext">謝謝您的購買</p>
      <router-link to="/products" class="new-link">再次選購</router-link>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.new-img {
  width: 100%;
  height: 800px;
  background-image: url("https://images.unsplash.com/photo-1552337680-a55547828305?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
}
.new-inf {
  background: linear-gradient(
    180deg,
    rgba(4, 4, 4, 0) 0%,
    rgba(4, 4, 4, 0.45) 22.4%,
    rgba(4, 4, 4, 0.6) 100%
  );
  width: 100%;
  height: 250px;
  color: #fff;
  text-align: center;
}
.new-inf-ext {
  margin: 15px auto;
  width: 90%;
}
.new-link {
  width: 50%;
  font-size: 16px;
  color: #e7cfc1;
  text-align: center;
  margin: 50px auto;
  padding: 10px 10px;
  border: 3px solid #e7cfc1;
}
.new-link:hover{
  background-color: #e7cfc1;
  color: #9a4723;
  border: 3px solid #e7cfc1;
}
/*響應式*/
@media (min-width: 850px) {
  /*new*/
  .new-inf {
    background: rgba(0, 0, 0, 0.4);
    width: 40%;
    height: 230px;
    color: #fff;
    position: absolute;
    left: 55%;
    margin-bottom: 2%;
  }
}
</style>