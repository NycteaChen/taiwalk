<template>
  <div class="home">
    <HomePageTop />
    <Carousel />
  </div>
</template>

<script>
import HomePageTop from '@/components/_pages/homepage/HomePageTop'
import Carousel from '@/components/Carousel'

export default {
  name: 'HomeView',
  components: {
    HomePageTop,
    Carousel,
  },
}
</script>
