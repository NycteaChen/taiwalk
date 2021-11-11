<template>
  <div class="activities">
    <HintHeader :category="'activities'" />
  </div>
  <template v-if="state.showHotTopics">
    <HotTopics :type="2" />
  </template>
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
      showHotTopics: true,
    })
    return {
      state,
    }
  },
}
</script>
