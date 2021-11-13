<template>
  <div class="attractions">
    <HintHeader :category="'attractions'" />
    <template v-if="state.showHotTopics">
      <HotTopics :type="1" @getTopic="chooseTopic" />
    </template>
  </div>
</template>
<script>
import { reactive } from 'vue'
import HintHeader from '@/components/HintHeader'
import HotTopics from '@/components/HotTopics'

export default {
  components: {
    HintHeader,
    HotTopics,
  },
  setup() {
    const state = reactive({
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
