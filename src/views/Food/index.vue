<template>
  <div class="food">
    <HintHeader :category="'Restaurant'" />
    <Search :options="state.list" :defaultTopic="'全部分類'" />
    <template v-if="state.showHotTopics && !keyword">
      <HotTopics :type="3" @getTopic="chooseTopic" :topicList="state.list" />
    </template>
    <template v-else>
      <SearchResult :data="state.searchData" />
    </template>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HintHeader from '@/components/HintHeader'
import HotTopics from '@/components/HotTopics'
import Search from '@/components/Search'
import SearchResult from '@/components/SearchResult'
import { removeStorage } from '@/assets/js/utils.js'
import Api from '@/assets/js/api/api.js'

export default {
  components: {
    HintHeader,
    HotTopics,
    Search,
    SearchResult,
  },

  setup() {
    const state = reactive({
      topic: undefined,
      showHotTopics: true,

      searchData: [],

      list: ['地方特產', '中式美食', '甜點冰品', '異國料理', '伴手禮', '素食'],
    })

    const router = useRouter()
    const { keyword } = router.currentRoute._value.query

    const getKeyWordData = async () => {
      if (keyword) {
        const result = await Api.getKeyWordData('Restaurant', keyword, 20)
        state.searchData = result
      }
    }

    const backToCategory = () => {
      state.showHotTopics = true
      state.topic = undefined
    }

    const chooseTopic = item => {
      state.showHotTopics = false
      state.topic = item
    }

    onMounted(async () => {
      await getKeyWordData()
      removeStorage()
    })

    return {
      state,
      keyword,
      chooseTopic,
      backToCategory,
    }
  },
}
</script>
