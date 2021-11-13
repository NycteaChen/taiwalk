<template>
  <div class="header">
    <header>
      <img @click="backToHome" class="pc-header" :src="require('@/assets/img/icon/Logo-PC.svg')" />
      <nav>
        <router-link v-for="(item, index) in state.navList" :key="index" :to="item.link">
          {{ item.title }}
        </router-link>
      </nav>
    </header>
  </div>
</template>
<script>
import { reactive } from 'vue'
import router from '@/router'

export default {
  setup() {
    const state = reactive({
      navList: [
        {
          link: '/attractions',
          title: '探索景點',
        },
        {
          link: '/activities',
          title: '節慶活動',
        },
        {
          link: '/food',
          title: '品嚐美食',
        },
      ],
    })
    const backToHome = () => {
      router.push({ path: '/' })
    }

    return {
      state,
      backToHome,
    }
  },
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    height: 64px;
    background: #fff;
    margin: auto;
    padding: 0 20px;
    border-bottom: 1px solid #e5e5e5;
    img {
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
      &:active {
        opacity: 0.5;
      }
      transition: 0.3s opacity;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 220px;
      padding: 0;
      background: #fff;

      a {
        color: #646464;
        width: 276px;
        margin: auto;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        height: 32px;
        line-height: 32px;
        &:hover {
          color: #7f977b;
          border-bottom: 2px solid #e0da48;
        }
      }
    }
  }
}
</style>
