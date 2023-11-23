<template>
  <div class="new-img">
    <div class="new-inf">
      <p class="new-inf-ext" style="font-size: 32px">好箱</p>
      <hr style="margin: 10px auto; width: 90%" />
      <p class="new-inf-ext">客服電話:04-2659876</p>
      <p class="new-inf-ext">實體店面:台中市鳥月區商業路456號</p>
      <p class="new-inf-ext">聯絡我們:</p>
    </div>
  </div>
  <div class="aa-title">品牌概念</div>
  <div class="aa">
    <div class="aa-img"></div>
    <div class="aa-t">
      <p class="aa-text">
        秉持著沒有所謂的傳統產業或是夕陽產業，其間差別只是處事者個人想法或觀念與做事方法跟不上國際的脈動，不知進步罷了，只要有創新的觀念或積極的做事態度，，任何事業均可有所作為。
      </p>
    </div>
  </div>
  <div class="aa" style="flex-direction:row-reverse;">
    <div class="aa-img" :style="{ backgroundImage: `url(https://images.unsplash.com/photo-1581553675306-743b47b3510a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)`}" ></div>
    <div class="aa-t" style="@media (min-width: 850px) {width: 50%;}">
      <p class="aa-text" style="text-align: center;">「要以信心面對自我，不改變就是不能赢」</p>
    </div>
  </div>
</template>

<style scoped>
.new-img {
  width: 100%;
  height: 700px;
  background-image: url("https://images.unsplash.com/photo-1636491059289-faf59c5b3e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80");
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
  margin: 10px auto;
  width: 90%;
}
/*aa*/
.aa-title {
  max-width: 80%;
  margin: 50px auto;
  text-align: center;
  font-size: 24px;
}
.aa {
  max-width: 80%;
  margin: 50px auto 80px auto;
  
}
.aa-img {
  width: 100%;
  height: 300px;
  background-image: url("https://images.unsplash.com/photo-1479888230021-c24f136d849f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
}

/*響應式*/
@media (min-width: 850px) {
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
  /*aa*/
  .aa {
    margin: 60px auto;
    display: flex;
    justify-content: flex-end;
    justify-content:space-between;
    align-items:center;
    
  }
  .aa-img {
    width: 50%;
    height: 300px;
    background-image: url("https://images.unsplash.com/photo-1479888230021-c24f136d849f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-position: center;
    background-size: cover;
    margin-bottom: 0px;
  }
  .aa-t{
    width: 45%;
  }
}
</style>