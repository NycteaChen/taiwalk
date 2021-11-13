<template>
  <div class="top-bar">
    <router-link to="/">首頁&nbsp;</router-link>

    <router-link v-if="nowTopic || state.city" :to="{ path: `/${category}` }" @click="init">
      /&nbsp;&nbsp;{{ renderCategory() }}
    </router-link>
    <span v-else>&nbsp;/&nbsp;&nbsp;{{ renderCategory() }}</span>

    <span v-if="nowTopic">&nbsp;/&nbsp;&nbsp;{{ nowTopic }}</span>

    <template v-if="state.item">
      <router-link v-if="state.item" :to="{ path: `/${category}/${state.city}` }">
        /&nbsp;&nbsp;{{ state.city }}
      </router-link>
      <span v-if="state.item">&nbsp;/&nbsp;&nbsp;{{ state.item }}</span>
    </template>

    <template v-if="state.city && !state.item">
      <span>&nbsp;/&nbsp;&nbsp;{{ state.city }}</span>
    </template>
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
export default {
  props: {
    category: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    topic: {
      type: String,
      default: '',
    },
    item: {
      type: String,
      default: '',
    },
  },

  emits: ['init'],

  setup(props, { emit }) {
    const state = reactive({
      city: undefined,
      topic: undefined,
      item: undefined,
    })

    const nowTopic = computed(() => {
      return props.topic
    })
    const renderCategory = () => {
      switch (props.category) {
        case 'food':
          return '在地美食'
        case 'activities':
          return '節慶活動'
        case 'attractions':
          return '探索景點'
        default:
          break
      }
    }

    const init = () => {
      emit('init')
    }

    return {
      state,
      renderCategory,
      init,
      nowTopic,
    }
  },
}
</script>
<style lang="scss" scoped>
.top-bar {
  margin: 90px auto 16px;
  width: 90%;
  text-align: left;
  font-size: 12px;
  a {
    color: #6e7d60;
    transition: 0.3s opacity;
    &:hover {
      opacity: 0.6;
    }
    &:active {
      opacity: 0.3;
    }
  }
  span {
    color: #646464;
  }
  @media (min-width: 768px) {
    margin: 145px auto 30px;
    max-width: 1110px;
    font-size: 16px;
  }
}
</style>
