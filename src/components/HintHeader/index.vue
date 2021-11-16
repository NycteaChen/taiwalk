<template>
  <div class="top-bar">
    <router-link to="/">首頁&nbsp;</router-link>

    <router-link v-if="nowTopic || nowCity" :to="{ path: `/${category}` }" @click="initHotTopic">
      /&nbsp;&nbsp;{{ renderCategory() }}
    </router-link>
    <span v-else>&nbsp;/&nbsp;&nbsp;{{ renderCategory() }}</span>

    <span v-if="nowTopic">&nbsp;/&nbsp;&nbsp;{{ nowTopic }}</span>

    <template v-if="nowItem">
      <router-link
        v-if="nowItem"
        :to="{ path: `/${category}/city`, query: { name: city } }"
        @click="initCity"
      >
        /&nbsp;&nbsp;{{ nowCity }}
      </router-link>
      <span v-if="nowItem">&nbsp;/&nbsp;&nbsp;{{ nowItem }}</span>
    </template>

    <template v-if="nowCity && !nowItem">
      <span>&nbsp;/&nbsp;&nbsp;{{ nowCity }}</span>
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

  emits: ['initHotTopic', 'initCity'],

  setup(props, { emit }) {
    const state = reactive({
      city: undefined,
      topic: undefined,
      item: undefined,
    })

    const nowTopic = computed(() => {
      return props.topic
    })

    const nowCity = computed(() => {
      return props.city || JSON.parse(localStorage.getItem('data'))?.Address.slice(0, 3)
    })

    const nowItem = computed(() => {
      return props.item
    })

    const renderCategory = () => {
      switch (props.category) {
        case 'Restaurant':
          return '在地美食'
        case 'Activity':
          return '節慶活動'
        case 'ScenicSpot':
          return '探索景點'
        default:
          break
      }
    }

    const initHotTopic = () => {
      emit('initHotTopic')
    }

    const initCity = () => {
      emit('initCity')
    }

    return {
      state,
      renderCategory,
      initHotTopic,
      initCity,
      nowTopic,
      nowCity,
      nowItem,
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
