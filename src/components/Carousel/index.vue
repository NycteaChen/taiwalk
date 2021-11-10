<template>
  <div class="carousel-container">
    <img
      class="now-img"
      src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    />
    <div class="img-site">新北市&nbsp;|&nbsp;不厭亭</div>
    <div class="dots">
      <div class="dot" v-for="index in 6" :key="index">
        <img :src="require('@/assets/carousel/Dot_selected.svg')" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.carousel-container {
  width: 80%;
  max-width: 345px;
  margin: 38px auto 24px;
  position: relative;

  .now-img {
    border-radius: 16px;
  }
  .img-site {
    font-weight: 700;
    position: absolute;
    color: #fff;
    top: 50%;
    bottom: 50%;
    left: 0;
    right: 0;
  }

  .dots {
    position: absolute;
    right: 20px;
    bottom: 10px;
    display: flex;

    .dot {
      width: 10px;
      margin-left: 5px;
    }
  }
  @media (min-width: 768px) {
    width: 90%;
    max-width: 1110px;
    .img-site {
      font-size: 28px;
    }
    .now-img {
      border-radius: 24px;
    }
    .dots {
      right: 42px;
      bottom: 27px;
      .dot {
        width: 16px;
        margin-left: 16px;
      }
    }
  }
}
</style>
