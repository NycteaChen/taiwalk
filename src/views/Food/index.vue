<template>
  <div class="food">
    <HintHeader :category="'food'" :topic="state.topic" @init="backToCategory" />
    <template v-if="state.showHotTopics">
      <HotTopics :type="3" @getTopic="chooseTopic" />
    </template>
    <template v-if="state.topic">
      <SearchResult />
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
