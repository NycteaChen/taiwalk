<template>
  <div class="carousel-container">
    <img
      class="now-img"
      src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    />
    <div v-if="show" class="img-site">新北市&nbsp;|&nbsp;不厭亭</div>
    <div class="dots">
      <div class="dot" v-for="index in 6" :key="index">
        <img :src="require('@/assets/img/icon/carousel/Dot_selected.svg')" />
      </div>
    </div>
    <div class="arrow-left" />
    <div class="arrow-right" />
  </div>
</template>
<script>
// import arrowLeft from '@/assets/img/icon/carousel/Arrow-Left.svg'
// import arrowLeftHover from '@/assets/img/icon/carousel/Arrow-Left_hover.svg'
// import arrowLeftDisable from '@/assets/img/icon/carousel/Arrow-Left_disable.svg'
// import arrowRight from '@/assets/img/icon/carousel/Arrow-Right.svg'
// import arrowRightHover from '@/assets/img/icon/carousel/Arrow-Right_hover.svg'
// import arrowRightDisable from '@/assets/img/icon/carousel/Arrow-Right_disable.svg'
import { computed } from 'vue'

export default {
  props: {
    showDesc: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const show = computed(() => {
      return props.showDesc
    })

    return {
      show,
    }
  },
}
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 90%;
  /* max-width: 345px; */
  margin: 0 auto 24px;
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
  .arrow-left,
  .arrow-right {
    display: none;
  }
  @media (min-width: 768px) {
    max-width: 1110px;
    position: relative;
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
    .arrow-left,
    .arrow-right {
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      top: 50%;
      cursor: pointer;
    }
    .arrow-left {
      left: 30px;
      background: url('../../assets/img/icon/carousel/Arrow-Left.svg');
      &:hover {
        background: url('../../assets/img/icon/carousel/Arrow-Left_hover.svg');
      }
    }
    .arrow-right {
      right: 30px;
      background: url('../../assets/img/icon/carousel/Arrow-Right.svg');
      &:hover {
        background: url('../../assets/img/icon/carousel/Arrow-Right_hover.svg');
      }
    }
  }
}
</style>
