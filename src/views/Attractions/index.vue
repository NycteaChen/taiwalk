<template>
  <div class="attractions">
    <HintHeader :category="'attractions'" />
    <template v-if="state.showHotTopics">
      <HotTopics :type="1" />
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
      showHotTopics: true,
    })
    return {
      state,
    }
  },
}
</script>
