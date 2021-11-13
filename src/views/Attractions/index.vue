<template>
  <div class="attractions">
    <HintHeader :category="'attractions'" />
    <Search :options="state.list" />
    <template v-if="state.showHotTopics">
      <HotTopics :type="1" @getTopic="chooseTopic" :topicList="state.list" />
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

      list: ['自然風景類', '觀光工廠類', '遊憩類', '休閒農業類', '生態類', '溫泉類', '古蹟類'],
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
