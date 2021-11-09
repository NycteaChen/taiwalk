<template>
  <Header />
  <div :style="{ minHeight: state.height + 'px' }"><router-view /></div>
  <Footer />
</template>

<script>
import { reactive, onMounted } from 'vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const state = reactive({
      height: 0,
    })

    onMounted(() => {
      //動態設置內容高度 讓footer始終居底   header+footer的高度是100
      state.height = document.documentElement.clientHeight - 64
      window.addEventListener('resize', () => {
        state.height = document.documentElement.clientHeight - 64
      })
    })
    return {
      state,
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap');

body {
  box-sizing: border-box !important;
  padding: 0 !important;
  margin: 0 !important;
}
#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
