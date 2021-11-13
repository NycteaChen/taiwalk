<template>
  <component :is="state.info" />
</template>
<script>
import { reactive, onMounted } from 'vue'
import MobileInfo from './Mobile'
import PCInfo from './PC'

export default {
  components: {
    MobileInfo,
    PCInfo,
  },

  setup() {
    const state = reactive({
      info: 'MobileInfo',
    })

    window.addEventListener(
      'resize',
      () => {
        if (window.innerWidth >= 768) {
          state.info = 'PCInfo'
        } else {
          state.info = 'MobileInfo'
        }
      },
      false
    )

    onMounted(() => {
      if (window.innerWidth >= 768) {
        state.info = 'PCInfo'
      }
    })

    return {
      state,
    }
  },
}
</script>
