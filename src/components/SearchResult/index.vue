<template>
  <div class="search">
    <div class="search-title">
      <span>搜尋結果</span>
      <span>
        共有
        <span>204</span>
        筆
      </span>
    </div>
    <div class="results">
      <div v-for="index in 20" :key="index" class="result">
        <router-link :to="{ path: `/food` }">
          <img
            class="result-img"
            src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          />
          <div class="result-desc">
            <div>{{ titleFormate(state.title) }}</div>
            <div>
              <img :src="require('@/assets/img/icon/spot16.svg')" />
              <span>基隆市</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { textFormat } from '@/assets/js/utils.js'

export default {
  setup() {
    const state = reactive({
      title: '景點名稱景點名稱景點名稱景點名稱測試測試測試測試測試',
      isSmallScreen: true,
    })

    window.addEventListener(
      'resize',
      e => {
        if (e.target.innerWidth >= 768) {
          state.isSmallScreen = false
        } else {
          state.isSmallScreen = true
        }
      },
      false
    )

    const titleFormate = text => {
      if (state.isSmallScreen) {
        return textFormat(text, 21)
      } else {
        return textFormat(text, 13)
      }
    }
    onMounted(() => {
      if (window.innerWidth >= 768) {
        state.isSmallScreen = false
      }
    })

    return {
      state,
      titleFormate,
    }
  },
}
</script>

<style lang="scss" scoped>
.search {
  text-align: left;
  width: 90%;
  margin: auto;
  margin-bottom: 100px;
  .search-title {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    > span:first-of-type {
      font-size: 24px;
      margin-bottom: 0;
    }
    > span:last-of-type {
      display: inline-block;
      margin-top: 8px;
      margin-left: 7px;
      color: #646464;
      span {
        color: #bea363;
      }
    }
  }
  .results {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    @media (min-width: 595px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .result {
      border-radius: 20px;
      cursor: pointer;
      transition: 0.3s opacity;
      &-img {
        border-radius: 20px;
      }
      &-desc {
        div {
          font-size: 18px;
          color: #2f2f2f;
          font-weight: 700;
        }
        > div:last-of-type {
          display: flex;
          font-size: 16px;
          color: #646464;
          font-weight: unset;
          img {
            margin-right: 5px;
          }
        }
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
  @media (min-width: 768px) {
    max-width: 1100px;
    .search-title {
      margin-bottom: 12px;
      > span:first-of-type {
        font-size: 36px;
      }
      > span:last-of-type {
        font-size: 24px;
        margin-top: 10px;
      }
    }
    .results {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 30px;
    }
  }
}
</style>
