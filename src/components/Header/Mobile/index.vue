<template>
  <div class="header">
    <header>
      <img
        @click="backToHome"
        class="mobile-header"
        :src="require('../../../assets/img/icon/Logo-mobile.svg')"
      />
      <img
        @click="handleMobileMenu"
        class="mobile-menu"
        :src="require(`@/assets/img/icon/menu-mobile${state.showMobileMenu ? '-close' : ''}.svg`)"
      />

      <nav>
        <router-link
          v-for="(item, index) in state.navList"
          :key="index"
          :class="{ open: state.showMobileMenu }"
          :to="item.link"
          @click="state.showMobileMenu = false"
        >
          {{ item.title }}
        </router-link>
      </nav>
      <div v-if="state.showMobileMenu" :class="{ mask: state.showMobileMenu }" />
    </header>
  </div>
</template>
<script>
import { reactive } from 'vue'
import router from '@/router'

export default {
  setup() {
    const state = reactive({
      showMobileMenu: false,

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

    const handleMobileMenu = () => {
      state.showMobileMenu = !state.showMobileMenu
    }

    const backToHome = () => {
      router.push({ path: '/' })
    }

    return {
      state,
      handleMobileMenu,
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

  header {
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    height: 64px;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;

    .mobile-header {
      margin: auto;
    }
    .mobile-menu {
      position: fixed;
      right: 8px;
      top: 8px;
      height: 50px;
      width: 50px;
    }
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
      position: fixed;
      z-index: 2;
      padding: 0;
      right: -1px;

      top: 60px;
      border-end-start-radius: 30px;
      background: #fff;

      a {
        color: #646464;
        width: 276px;
        margin: auto;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        height: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s height, 0.2s opacity, 0.3s visibility;
        &:last-of-type {
          border-end-start-radius: 30px;
        }
        &:hover {
          color: #7f977b;
        }
      }
      a + a {
        border-top: 1px solid #e5e5e5;
      }
      @media (max-width: 280px) {
        width: 100%;
        right: 0;
        a {
          width: 95%;
        }
      }
    }

    .open {
      height: 70px;
      opacity: 1;
      visibility: unset;
    }

    .mask {
      position: fixed;
      top: 64px;
      z-index: 1;
      width: 100%;
      background: #000;
      opacity: 0.2;
      height: calc(100% - 64px);
      /* -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px); */
    }
  }
}
</style>
