<template>
  <div class="activities">
    <HintHeader :category="'activities'" />
    <Search :options="state.list" />
    <template v-if="state.showHotTopics">
      <HotTopics :type="2" @getTopic="chooseTopic" :topicList="state.list" />
    </template>
  </div>
</template>
<script>
import { reactive } from 'vue'
import HintHeader from '@/components/HintHeader'
import HotTopics from '@/components/HotTopics'
import Search from '@/components/Search'

export default {
  components: {
    HintHeader,
    Search,
    HotTopics,
  },
  setup() {
    const state = reactive({
      topic: undefined,
      showHotTopics: true,

      list: ['節慶活動', '自行車活動', '遊憩活動', '產業文化活動', '年度活動', '四季活動'],
    })

    const backToCategory = () => {
      state.showHotTopics = true
      state.topic = undefined
    }

    const chooseTopic = item => {
      state.showHotTopics = false
      state.topic = item
    }

    return {
      state,
      chooseTopic,
      backToCategory,
    }
  },
}
</script>
