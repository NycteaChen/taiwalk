<template>
  <HintHeader :category="category" :city="name" />
  <SearchResult :data="state.data" />
</template>
<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HintHeader from '@/components/HintHeader'
import SearchResult from '@/components/SearchResult'

export default {
  components: {
    HintHeader,
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
          city: '台北市',
        },
      ],
    })

    return {
      state,
      name,
      category,
    }
  },
}
</script>
