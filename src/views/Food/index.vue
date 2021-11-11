<template>
  <div class="food">
    <HintHeader :category="'food'" />
    <template v-if="state.showHotTopics">
      <HotTopics :type="3" />
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
