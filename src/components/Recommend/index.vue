<template>
  <ShowMoreHeader :title="title" :show-more="showMore" :link="link" :query="query" />
  <div class="recommend-items">
    <div v-for="index in 4" :key="index" class="recommend-item">
      <img
        class="photo"
        src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      />
      <div class="recommed-desc">
        <h2>{{ textFormat('龜山島牛奶海牛奶海牛奶海牛奶海', 10) }}</h2>
        <div>
          <img class="spot" :src="require('@/assets/img/icon/spot16.svg')" />
          <span>宜蘭縣</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShowMoreHeader from '../ShowMoreHeader'
import { textFormat } from '@/assets/js/utils.js'

export default {
  components: {
    ShowMoreHeader,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    showMore: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    query: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      textFormat,
    }
  },
}
</script>
<style lang="scss" scoped>
.recommend-items {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: auto auto 36px;
  .recommend-item {
    cursor: pointer;
    margin: auto 15px;
    text-align: left;
    .photo {
      width: 220px;
      height: 160px;
      border-radius: 20px;
    }
    .recommed-desc {
      h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        color: #2f2f2f;
      }
      div {
        display: flex;
        align-items: center;
        .spot {
          margin-right: 4px;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .recommend-item {
      .photo {
        width: 255px;
        height: 200px;
      }
    }
  }
}
</style>
