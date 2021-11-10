<template>
  <div class="home">
    <HomePageTop />
    <Carousel />
    <RecentActivities />
  </div>
</template>

<script>
import HomePageTop from '@/components/_pages/homepage/HomePageTop'
import RecentActivities from '@/components/_pages/homepage/RecentActivities'
import Carousel from '@/components/Carousel'

export default {
  name: 'HomeView',
  components: {
    HomePageTop,
    Carousel,
    RecentActivities,
  },
}
</script>
