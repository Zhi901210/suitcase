<template>
  <div class="home">
    <div class="A">
      <div class="A-img">
        <div class="A-Information">
          <p class="A-Information-title">一箱在手天下我有</p>
          <div class="A-Information-text">
            <p>行李箱又重又難拖?</p>
            <p>好箱絕對是您的好選擇</p>
          </div>
          <div class="A-Information-buttom">
            <router-link to="/products" class="nav-link">立即選購</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="new">
      <div class="new-title">
        <p style="font-size: 52px; margin-bottom: 50px; margin-top: 20px">
          NEW
        </p>
        <p style="color: #000; font-size: 24px">隆重推出</p>
        <p style="font-size: 32px">好箱xZR聯名款</p>
      </div>
      <div class="new-img">
        <div class="new-inf">
          <p class="new-inf-ext">北歐式簡約風格，低調時尚的最佳伴侶</p>
          <router-link to="/zr" class="new-link">立即選購</router-link>
        </div>
      </div>
    </div>
    <div class="sort">
      <div class="sort-a">
        <div class="sort-b">
          <p class="sort-b-title">產品分類</p>
          <div class="sort-b-text">
            <router-link to="/suitcase" class="sort-b-text-aa"><p class="sort-b-text-aa">行李箱</p></router-link>
          </div>
        </div>
        <div class="sort-c">
          <div class="sort-cc1">
            <router-link to="/bag" class="sort-b-text-aa"><p class="sort-b-text-aa">包袋</p></router-link>
          </div>
          <div class="sort-cc2">
            <router-link to="/other" class="sort-b-text-aa"><p class="sort-b-text-aa">配件</p></router-link>
          </div>
        </div>
      </div>
      <div class="sort-serve">
        <div class="sort-serve-title">Our Services</div>
        <div class="sort-serve-text">
          <div class="sort-serve-text-a">
            <div class="sort-serve-text-b">
              <div class="sort-serve-text-c">
                <font-awesome-icon icon="truck-fast" class="ic" />
              </div>
              <p>運費</p>
              <p>全館滿$299免運</p>
            </div>
            <div class="sort-serve-text-b">
              <div class="sort-serve-text-c">
                <font-awesome-icon icon="thumbs-up" />
              </div>
              <p>卓越品質</p>
              <p>產品均通過品質標準</p>
            </div>
          </div>
          <div class="sort-serve-text-a">
            <div class="sort-serve-text-b">
              <div class="sort-serve-text-c">
                <font-awesome-icon icon="screwdriver-wrench" class="ic" />
              </div>
              <p>維修</p>
              <p>保固內免費維修更換</p>
            </div>
            <div class="sort-serve-text-b">
              <div class="sort-serve-text-c">
                <font-awesome-icon icon="headphones-simple" />
              </div>
              <p>客服服務</p>
              <p>網路客服隨時為您效勞</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty("--progress", 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.home {
  height: 100%;
}
/*A*/
.A {
  width: 100%;
  height: 700px;
}
.A-img {
  width: 100%;
  height: 700px;
  background-image: url("https://images.unsplash.com/photo-1636491059289-faf59c5b3e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
}
.A-Information {
  min-width: 90%;
  margin: 0px auto;
  margin-bottom: 2%;
  height: 270px;
  background-color: #9a4723;
  opacity: 0.9;
  padding: 10px 0px;
}
.A-Information-title {
  width: 80%;
  font-style: normal;
  margin: 20px auto;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
}
.A-Information-text {
  width: 80%;
  font-style: normal;
  margin: 30px auto;
  color: #fff;
}
.A-Information-buttom {
  width: 90%;
  display: flex;
  justify-content: flex-end;
}
.nav-link {
  background-color: #fff;
  text-align: center;
  padding: 10px 10px;
  color: #9a4723;
  border: 3px solid #e7cfc1;
  font-size: 24px;
}
.nav-link:hover {
  background-color:#D77E59;
  color: #fff;
}
/*new*/
.new {
  width: 100%;
  background-color: #e7cfc1;
}
.new-title {
  width: 100%;
  text-align: center;
  padding: 50px 0px;
  color: #9a4723;
}
.new-img {
  width: 100%;
  height: 750px;
  background-image: url("https://images.unsplash.com/photo-1639597784674-431b34cec7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
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
  font-size: 32px;
  margin: 50px auto;
  width: 80%;
}
.new-link {
  background-color: #9a4723;
  width: 50%;
  height: 110px;
  font-size: 24px;
  color: #fff;
  text-align: center;
  padding: 10px 10px;
  border: 3px solid #e7cfc1;
}
.new-link:hover {
  background-color:#D77E59;
  color: #fff;
}

/*commodity*/
.commodity {
  width: 100%;
  background-color: #d77e59;
}
.commodity-title {
  width: 100%;
  text-align: center;
  padding: 30px 0px 20px 0px;
  color: #000;
  font-size: 32px;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper {
  width: 100%;
  height: 300px;
  margin: 0px auto;
}

/*sort*/
.sort {
  background-image: linear-gradient(
      0deg,
      rgba(231, 207, 193, 0.9),
      rgba(231, 207, 193, 0.9)
    ),
    url("https://images.unsplash.com/photo-1639597785489-84f191d2d6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 1530px;
}
.sort-a {
  max-width: 90%;
  margin: 0px auto;
}
.sort-b {
  margin: 0px auto;
}
.sort-b-title {
  text-align: center;
  color: #9a4723;
  font-size: 38px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 30px 0px;
}
.sort-b-text {
  width: 100%;
  height: 300px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://images.unsplash.com/photo-1630148494091-e1f9e2ba6cb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80");
  background-position: center;
  background-size: cover;
  margin: 50px auto;
}
.sort-b-text-aa {
  color: #fff;
  font-size: 24px;
  width: 100%;
  text-align: center;
  line-height: 300px;

}
.sort-b-text-aa:hover {
  border: 3px solid #fff;
}
.sort-c {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  width: 100%;
  margin: 0px auto;
}

.sort-cc1 {
  text-align: center;
  width: 45%;
  height: 300px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://images.unsplash.com/photo-1531938716357-224c16b5ace3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-position: center;
  background-size: cover;
  line-height: 300px;
}
.sort-cc2 {
  text-align: center;
  width: 45%;
  height: 300px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://images.unsplash.com/photo-1599108859527-5f30b1631be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-position: center;
  background-size: cover;
  line-height: 300px;
}
.sort-serve {
  background-color: #9a4723;
  width: 95%;
  margin: 50px 0px 30px 0px;
  border-radius: 0px 80px 80px 0px;
}
.sort-serve-title {
  width: 80%;
  margin: 50px auto;
  padding: 50px 0px;
  text-align: center;
  color: #e7cfc1;
  font-size: 32px;
}
.sort-serve-text-a {
  width: 70%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.sort-serve-text-b {
  color: #e7cfc1;
  text-align: center;
  margin: 30px 0px;
}
.sort-serve-text-c {
  width: 90%;
  height: 100px;
  margin: 0px auto;
  line-height: 100px;
  font-size: 80px;
}

/*響應式*/
@media (min-width: 850px) {
  /*A*/
  .A-img {
    width: 100%;
    background-image: url("src/assets/1.png");
    background-position: center;
    background-size: cover;
  }
  .A-Information {
    min-width: 45%;
    margin: 0px auto;
    position: absolute;
    left: 3%;
    margin-bottom: 2%;
  }
  .A-Information-title {
    width: 80%;
    font-style: normal;
    margin: 20px auto;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
  }
  .A-Information-text {
    width: 80%;
    font-style: normal;
    margin: 30px auto;
    color: #fff;
  }
  .A-Information-buttom {
    width: 90%;
    display: flex;
    justify-content: flex-end;
  }
  .nav-link {
    background-color: #fff;
    text-align: center;
    padding: 10px 10px;
    color: #9a4723;
    border: 3px solid #e7cfc1;
    font-size: 24px;
  }
  /*new*/
  .new-inf {
    background: rgba(0, 0, 0, 0.4);
    width: 40%;
    height: 180px;
    color: #fff;
    position: absolute;
    left: 55%;
    margin-bottom: 2%;
  }
  .new-inf-ext {
    font-size: 24px;
    margin: 30px auto;
    width: 100%;
  }
  .new-link {
    font-size: 18px;
    width: 30%;
  }

  /*sort*/
  .sort {
    height: 1200px;
  }
  .sort-a {
    max-width: 750px;
  }
  .sort-serve {
    border-radius: 0px 250px 250px 0px;
  }
  .sort-serve-title {
    width: 80%;
    margin: 0px auto;
    padding: 30px 0px;
  }
  .sort-serve-text {
    max-width: 700px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .sort-serve-text-a {
    width: 100%;
    margin: 0px auto;
  }
  .sort-serve-text-b {
    margin: 20px 20px;
  }
}
</style>
