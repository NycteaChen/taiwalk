<template>
  <div class="activities">
    <HintHeader :category="'Activity'" />
    <Search :options="state.list" />
    <template v-if="state.showHotTopics && !keyword">
      <HotTopics :type="2" @getTopic="chooseTopic" :topicList="state.list" />
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
    Search,
    HotTopics,
    SearchResult,
  },
  setup() {
    const state = reactive({
      topic: undefined,
      showHotTopics: true,

      searchData: [],

      list: ['節慶活動', '自行車活動', '遊憩活動', '產業文化活動', '年度活動', '四季活動'],
    })

    const router = useRouter()
    const { keyword } = router.currentRoute._value.query

    const getKeyWordData = async () => {
      if (keyword) {
        const result = await Api.getKeyWordData('Activity', keyword, 20)
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
