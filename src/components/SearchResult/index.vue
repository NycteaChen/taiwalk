<template>
  <div class="search">
    <div class="search-title">
      <span>搜尋結果</span>
      <span>
        共有
        <span>{{ data.length }}</span>
        筆
      </span>
    </div>
    <div v-if="data?.length > 0" class="results">
      <div v-for="(item, index) in data" :key="index" class="result">
        <router-link
          @click="setStorage(item)"
          :to="{
            path: `/${category}/location`,
            query: { city: item.City, name: item.Name },
          }"
        >
          <div class="img-wrapper">
            <img :src="`${renderImage(item?.Picture?.PictureUrl1, 1100, 400)}`" />
          </div>
          <div class="result-desc">
            <div>{{ titleFormat(item.Name) }}</div>
            <div>
              <img :src="require('@/assets/img/icon/spot16.svg')" />
              <span>{{ item.City }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <template v-else>
      <NoFound />
    </template>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { textFormat, renderImage, setStorage } from '@/assets/js/utils.js'
import NoFound from '@/components/_pages/noFound'

export default {
  components: {
    NoFound,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const router = useRouter()
    const category = router.currentRoute._value.path.split('/')[1]
    const state = reactive({
      isSmallScreen: true,

      pageData: {},
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

    const titleFormat = text => {
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
      category,
      titleFormat,
      renderImage,
      setStorage,
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
      .img-wrapper {
        overflow: hidden;
        border-radius: 20px;
        img {
          border-radius: 20px;
          transition: 0.5s transform;
          &:hover {
            transform: scale(1.2);
          }
        }
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
