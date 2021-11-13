<template>
  <HintHeader :category="category" :city="city" :item="name" />
  <Details
    :data="state.data"
    :title="`還有這些不能錯過的${renderShowMore()}`"
    :show-more="`更多${city}${renderShowMore()}`"
  />
</template>
<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HintHeader from '@/components/HintHeader'
import Details from '@/components/Details'

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
      data: { title: name, city: city },
    })

    const renderShowMore = () => {
      switch (category) {
        case 'food':
          return '美食'
        case 'attractions':
          return '景點'
        case 'activities':
          return '活動'
      }
    }

    return {
      state,
      name,
      city,
      category,
      renderShowMore,
    }
  },
}
</script>
