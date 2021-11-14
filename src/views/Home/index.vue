<template>
  <div class="home">
    <HomePageTop />
    <Carousel :show-desc="true" />
    <RecentActivities :data="state.activityList" />
    <Recommend
      :title="'熱門打卡景點'"
      :show-more="'查看更多景點'"
      :link="'ScenicSpot'"
      :data="state.scenicSpotList"
      :category="'ScenicSpot'"
    />
    <Recommend
      :title="'一再回訪美食'"
      :show-more="'查看更多美食'"
      :link="'Restaurant'"
      :data="state.restaurantList"
      :category="'Restaurant'"
    />
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import HomePageTop from '@/components/_pages/home/HomePageTop'
import RecentActivities from '@/components/_pages/home/RecentActivities'
import Carousel from '@/components/Carousel'
import Recommend from '@/components/Recommend'
import Api from '@/assets/js/api/api.js'

export default {
  name: 'home',
  components: {
    HomePageTop,
    Carousel,
    RecentActivities,
    Recommend,
  },

  setup() {
    const state = reactive({
      scenicSpotList: [],
      activityList: [],
      restaurantList: [],
    })

    const getScenicSpot = async () => {
      const result = await Api.getScenicSpot(6)
      state.scenicSpotList = result
    }
    const getActivity = async () => {
      const result = await Api.getActivity(4)
      state.activityList = result
    }
    const getRestaurant = async () => {
      const result = await Api.getRestaurant(6)
      state.restaurantList = result
    }

    onMounted(async () => {
      await getScenicSpot()
      await getActivity()
      await getRestaurant()
    })
    return {
      state,
    }
  },
}
</script>
