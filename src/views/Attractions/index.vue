<template>
  <div class="attractions">
    <HintHeader :category="'attractions'" :topic="state.topic" @init="backToCategory" />
    <template v-if="state.showHotTopics">
      <HotTopics :type="1" @getTopic="chooseTopic" />
    </template>
    <template v-if="state.topic">
      <SearchResult :data="state.data" />
    </template>
  </div>
</template>
<script>
import { reactive } from 'vue'
import HintHeader from '@/components/HintHeader'
import HotTopics from '@/components/HotTopics'
import SearchResult from '@/components/SearchResult'

export default {
  components: {
    HintHeader,
    HotTopics,
    SearchResult,
  },
  setup() {
    const state = reactive({
      city: undefined,
      item: undefined,
      topic: undefined,
      showHotTopics: true,

      data: [],
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
