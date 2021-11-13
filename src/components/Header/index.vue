<template>
  <component :is="state.header" />
</template>
<script>
import { reactive, onMounted } from 'vue'
import MobileHeader from './Mobile'
import PCHeader from './PC'

export default {
  components: {
    MobileHeader,
    PCHeader,
  },

  setup() {
    const state = reactive({
      header: 'MobileHeader',
    })

    window.addEventListener(
      'resize',
      () => {
        if (window.innerWidth >= 768) {
          state.header = 'PCHeader'
        } else {
          state.header = 'MobileHeader'
        }
      },
      false
    )

    onMounted(() => {
      if (window.innerWidth >= 768) {
        state.header = 'PCHeader'
      }
    })

    return {
      state,
    }
  },
}
</script>
