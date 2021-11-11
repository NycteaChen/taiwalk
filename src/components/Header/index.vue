<template>
  <div class="header">
    <header>
      <img
        @click="backToHome"
        class="mobile-header"
        :src="require('../../assets/img/icon/Logo-mobile.svg')"
      />
      <img @click="backToHome" class="pc-header" :src="require('@/assets/img/icon/Logo-PC.svg')" />

      <img
        @click="handleMobileMenu"
        class="mobile-menu"
        :src="require(`@/assets/img/icon/menu-mobile${state.showMobileMenu ? '-close' : ''}.svg`)"
      />

      <nav>
        <router-link
          :class="{ open: state.showMobileMenu }"
          to="/attractions"
          @click="state.showMobileMenu = false"
        >
          探索景點
        </router-link>
        <router-link
          :class="{ open: state.showMobileMenu }"
          to="/activities"
          @click="state.showMobileMenu = false"
        >
          節慶活動
        </router-link>
        <router-link
          :class="{ open: state.showMobileMenu }"
          to="/food"
          @click="state.showMobileMenu = false"
        >
          品嚐美食
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
    })

    const handleMobileMenu = () => {
      state.showMobileMenu = !state.showMobileMenu
    }

    const backToHome = () => {
      router.push({ path: '/' })
    }

    window.addEventListener(
      'resize',
      e => {
        if (e.target.innerWidth >= 768) {
          state.showMobileMenu = false
        }
      },
      false
    )

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
  @media (min-width: 768px) {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
  }

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

    .mobile-header {
      margin: auto;
      @media (min-width: 768px) {
        display: none;
      }
    }
    .mobile-menu {
      position: fixed;
      right: 8px;
      top: 8px;
      height: 50px;
      width: 50px;

      @media (min-width: 768px) {
        display: none;
      }
    }
    .pc-header {
      @media (max-width: 768px) {
        display: none;
      }
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
      top: 64px;
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

    @media (min-width: 768px) {
      margin: auto;
      right: 0;
      left: 0;
      border-end-start-radius: unset;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      border-bottom: 1px solid #e5e5e5;
      nav {
        position: unset;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 220px;
        border-end-start-radius: unset;
        a {
          height: 32px;
          line-height: 32px;
          opacity: 1;
          display: unset;
          visibility: unset;
          transition: unset;
          &:last-of-type {
            border-end-start-radius: unset;
          }
          &:hover {
            border-bottom: 2px solid #e0da48;
          }
        }

        a + a {
          border-top: none;
        }
      }
    }
  }
}
</style>
