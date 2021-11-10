<template>
  <div class="home">
    <HomePageTop />
    <Carousel />
    <ShowMoreHeader />
  </div>
</template>

<script>
import HomePageTop from '@/components/_pages/homepage/HomePageTop'
import ShowMoreHeader from '@/components/ShowMoreHeader'
import Carousel from '@/components/Carousel'

export default {
  name: 'HomeView',
  components: {
    HomePageTop,
    Carousel,
    ShowMoreHeader,
  },
}
</script>
