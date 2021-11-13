<template>
  <div class="hot-topics">
    <h1>熱門主題</h1>
    <div class="topics">
      <div v-for="(item, index) in state.topicList[type - 1]" :key="index" class="topic">
        <router-link
          :to="{ path: `/${state.typeList[type - 1]}/type`, query: { name: item } }"
          @click="choose(item)"
        >
          <img :src="require(`@/assets/img/hot-topics/Theme-bg${type}-${index + 1}.svg`)" />
          <span>{{ item }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  props: {
    type: {
      type: Number,
      default: 0,
    },
  },
  emits: ['getTopic'],

  setup(props, { emit }) {
    const state = reactive({
      topicList: [
        ['自然風景類', '觀光工廠類', '遊憩類', '休閒農業類', '生態類', '溫泉類', '古蹟類'],
        ['節慶活動', '自行車活動', '遊憩活動', '產業文化活動', '年度活動', '四季活動'],
        ['地方特產', '中式美食', '甜點冰品', '異國料理', '伴手禮', '素食'],
      ],
      typeList: ['attractions', 'activities', 'food'],
    })

    const choose = item => {
      emit('getTopic', item)
    }

    return {
      state,
      choose,
    }
  },
}
</script>

<style lang="scss" scoped>
.hot-topics {
  text-align: left;
  width: 90%;
  margin: auto;
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .topics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    @media (min-width: 595px) {
      grid-template-columns: repeat(3, 1fr);
    }
    .topic {
      cursor: pointer;
      max-width: 255px;
      position: relative;
      transition: 0.3s opacity;
      &:hover {
        opacity: 0.7;
      }
      span {
        white-space: nowrap;
        font-weight: 700;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  @media (min-width: 768px) {
    max-width: 1100px;
    h1 {
      font-size: 36px;
      margin-bottom: 12px;
    }
    .topics {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
