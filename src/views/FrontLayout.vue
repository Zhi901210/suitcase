<template>
  <div class="header">
    <div class="navbarBrand">
      <RouterLink to="/" class="navbarBrand">好箱</RouterLink>
    </div>
    <input type="checkbox" class="navbarToggle" id="navbarToggle" />
    <nav class="nav navbar-light">
      <ul class="navList">
        <li class="navItem">
          <router-link to="/" class="nav-link active" aria-current="page"
            >首頁</router-link
          >
        </li>
        <li class="navItem">
          <router-link to="/products" class="nav-link">產品列表</router-link>
        </li>
        <li class="navItem">
          <router-link to="/about" class="nav-link">關於我們</router-link>
        </li>
        <li class="navItem">
          <router-link to="/cart" class="nav-link">購物車</router-link>
        </li>
      </ul>
    </nav>
    <font-awesome-icon icon="user" class="user" />
    <label class="navbarToggle-label" for="navbarToggle">
      <span class="hamburger"></span>
    </label>
  </div>
  <RouterView></RouterView>

  <!-- footer -->
  <div class="footer">
    <div class="footerTitle">
      <p style="font-size: 30px; font-weight: 900">好箱</p>
      <p>好箱 @ 練習使用無商業用途</p>
    </div>
    <div class="footerText">
      <div class="footerTextItem">
        <p style="margin-right: 30px">客服電話</p>
        <p>04-2659876</p>
      </div>
      <div class="footerTextItem">
        <p style="margin-right: 30px">實體店面</p>
        <p>台中市鳥月區商業路456號</p>
      </div>
      <div class="footerTextItem">
        <p style="margin-right: 30px">聯絡我們</p>
        <p>123</p>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
};
</script>

<style scoped>
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
.header {
  width: 100%;
  height: 60px;
  z-index: 999;
  text-align: center;
  background-color: #9a4723;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
}
.navbarBrand {
  background-color: #e7cfc1;
  color: #000;
  font-size: 24px;
  line-height: 60px;
  height: 60px;
  width: 30%;
}
.navbarBrand:hover {
  color: #9a4723;
}
.nav {
  position: absolute;
  background: #9a4723;
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  z-index: 1;
  text-align: center;
}
.navList {
  width: 100%;
}
.navItem {
  margin: 1.4rem 0;
  /*預設透明度 0*/
  opacity: 0;
  text-align: center;
}
.nav-link {
  color: #e7cfc1;
}
.navbar-light .navItem.active .nav-link,
.navbar-light .navItem .nav-link:active,
.navbar-light .navItem .nav-link:focus,
.navbar-light .navItem:hover .nav-link {
  color: #000;
}
.navbarToggle {
  position: absolute;
  visibility: hidden;
}
.navbarToggle:checked ~ .nav {
  transform: scale(1, 1);
}
.navbarToggle:checked ~ .nav .navItem {
  /*只有開啟時 delay .15s */
  transition: opacity 0.2s ease-out 0.15s;
  /*開啟時透明度為1*/
  opacity: 1;
}
.navbarToggle-label {
  position: absolute;
  top: 0px;
  bottom: 0;
  right: 7.5%;
  display: flex;
}
.hamburger {
  position: relative;
  top: 25px;
}
.hamburger,
.hamburger::before,
.hamburger::after {
  width: 25px;
  height: 3px;
  background: #f7f5ed;
  margin: 0.2rem 0;
}
.hamburger::before,
.hamburger::after {
  position: absolute;
  content: "";
  left: 0;
}
.hamburger::before {
  top: 8px;
}
.hamburger::after {
  bottom: 8px;
}
.user {
  color: #fff;
  position: absolute;
  top: 25px;
  left: 70%;
}

/*footer*/
.footer {
  width: 100%;
  background-color: #e7cfc1;
  padding: 20px 0px;
  padding-top: 50px;
}
.footerTitle {
  max-width: 80%;
  margin: 0px auto;
  color: #9a4723;
}
.footerText {
  max-width: 80%;
  margin: 0px auto;
  margin-top: 50px;
}
.footerTextItem {
  display: flex;
}
/*響應式*/
@media  (min-width: 419px) {
  .user {
    left: 80%;
  }
}

@media  (min-width: 850px) {
  /*Main Header*/
  header {
    display: inline-flex;
    flex-direction: row;
  }
  .user {
    left: 90%;
  }
  .navbarToggle-label {
    display: none;
  }

  .nav {
    all: unset;
  }

  .navList {
    width: 50%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    z-index: 5;
    position: absolute;
    top:8px;
    left: 35%;
  }

  .navItem {
    margin: 0;
    opacity: 1;
    margin: 0px 5px;
  }
  .navItem:hover {
    background-color: #e7cfc1;
  }

  .nav-link {
    color: #e7cfc1;
  }
  .navbar-light .navItem.active .nav-link,
  .navbar-light .navItem .nav-link:active,
  .navbar-light .navItem .nav-link:focus,
  .navbar-light .navItem:hover .nav-link {
    color: #000;
  }

  .footer {
    width: 100%;
    background-color: #e7cfc1;
    display: flex;
    justify-content:space-around;
    padding: 0px 0px;
    padding-top: 40px;
  }
  .footerText {
    margin: 0px auto;
  }
  .footerTitle {
    max-width: 80%;
    margin: 0px auto;
    padding: 0px 0px;
  }
}
</style>