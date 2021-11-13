<template>
  <HintHeader :category="category" :city="name" />
  <Search :defaultCity="name" :options="state.list[category]" />
  <SearchResult :data="state.data" />
</template>
<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HintHeader from '@/components/HintHeader'
import Search from '@/components/Search'
import SearchResult from '@/components/SearchResult'

export default {
  components: {
    HintHeader,
    Search,
    SearchResult,
  },
  setup() {
    const router = useRouter()
    const category = router.currentRoute._value.path.split('/')[1]
    const { name } = router.currentRoute._value.query
    const state = reactive({
      data: [
        {
          title: '餐廳名稱名稱啦啦啦',
          city: '基隆市',
        },
        {
          title: '放煙火囉',
          city: '高雄市',
        },
        {
          title: '象山啦',
          city: '臺北市',
        },
      ],
      list: {
        food: ['地方特產', '中式美食', '甜點冰品', '異國料理', '伴手禮', '素食'],
        attractions: [
          '自然風景類',
          '觀光工廠類',
          '遊憩類',
          '休閒農業類',
          '生態類',
          '溫泉類',
          '古蹟類',
        ],
        activities: ['節慶活動', '自行車活動', '遊憩活動', '產業文化活動', '年度活動', '四季活動'],
      },
    })

    return {
      state,
      name,
      category,
    }
  },
}
</script>
