<template>
  <div class="home">
    <HomePageTop />
    <Carousel :show-desc="true" />
    <RecentActivities />
    <Recommend :title="'熱門打卡景點'" :show-more="'查看更多景點'" :link="'attractions'" />
    <Recommend :title="'一再回訪美食'" :show-more="'查看更多美食'" :link="'food'" />
  </div>
</template>

<script>
import HomePageTop from '@/components/_pages/homepage/HomePageTop'
import RecentActivities from '@/components/_pages/homepage/RecentActivities'
import Carousel from '@/components/Carousel'
import Recommend from '@/components/Recommend'

export default {
  name: 'HomeView',
  components: {
    HomePageTop,
    Carousel,
    RecentActivities,
    Recommend,
  },
}
</script>
