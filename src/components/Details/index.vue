<template>
  <Carousel />
  <div class="detail-container">
    <div class="header">
      <div>{{ data.title }}</div>
      <div class="tags">
        <div class="tag" v-for="index in 3" :key="index">地方特產啦</div>
      </div>
    </div>
  </div>
  <Recommend :title="title" :show-more="showMore" />
</template>
<script>
import Carousel from '../Carousel'
import Recommend from '../Recommend'

export default {
  components: {
    Carousel,
    Recommend,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    showMore: {
      type: String,
      default: '',
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  setup() {},
}
</script>
