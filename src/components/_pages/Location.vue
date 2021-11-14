<template>
  <HintHeader :category="category" :city="state.city" :item="state.name" />
  <Details
    :title="`還有這些不能錯過的${renderShowMore()}`"
    :show-more="`更多${state.city}${renderShowMore()}`"
    @refresh="getNewTitle"
  />
</template>
<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HintHeader from '@/components/HintHeader'
import Details from '@/components/_pages/details'

export default {
  components: {
    HintHeader,
    Details,
  },
  setup() {
    const router = useRouter()
    const category = router.currentRoute._value.path.split('/')[1]
    const { city } = router.currentRoute._value.query
    const { name } = router.currentRoute._value.query

    const state = reactive({
      name: name,
      city: city,
    })

    const renderShowMore = () => {
      switch (category) {
        case 'Restaurant':
          return '美食'
        case 'ScenicSpot':
          return '景點'
        case 'Activity':
          return '活動'
      }
    }

    const getNewTitle = item => {
      state.name = item['Name']
      state.city = item['City']
      console.log('newnewnew', item)
    }

    return {
      state,
      category,
      renderShowMore,
      getNewTitle,
    }
  },
}
</script>
