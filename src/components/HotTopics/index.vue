<template>
  <div class="hot-topics">
    <h1>熱門{{ type === 3 ? '分類' : '主題' }}</h1>
    <div class="topics">
      <div v-for="(item, index) in topicList" :key="index" class="topic">
        <router-link
          :to="{ path: `/${renderType}/type`, query: { name: item } }"
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
import { computed } from 'vue'
export default {
  props: {
    type: {
      type: Number,
      default: 0,
    },
    topicList: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['getTopic'],

  setup(props, { emit }) {
    const renderType = computed(() => {
      switch (props.type) {
        case 1:
          return 'attractions'
        case 2:
          return 'activities'
        case 3:
          return 'food'
        default:
          return ''
      }
    })

    const choose = item => {
      emit('getTopic', item)
    }

    return {
      choose,
      renderType,
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
