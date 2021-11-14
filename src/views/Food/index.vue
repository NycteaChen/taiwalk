<template>
  <div class="food">
    <HintHeader :category="'Restaurant'" />
    <Search :options="state.list" :defaultTopic="'全部分類'" />
    <template v-if="state.showHotTopics">
      <HotTopics :type="3" @getTopic="chooseTopic" :topicList="state.list" />
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
    HotTopics,
    Search,
  },

  setup() {
    const state = reactive({
      topic: undefined,
      showHotTopics: true,

      list: ['地方特產', '中式美食', '甜點冰品', '異國料理', '伴手禮', '素食'],

      data: [
        {
          title: '餐廳名稱名稱啦啦啦',
          city: '基隆市',
        },
      ],
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
