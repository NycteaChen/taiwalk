<template>
  <div class="top-bar">
    <router-link to="/">首頁&nbsp;</router-link>

    <router-link v-if="city" :to="{ path: `/${category}` }">
      /&nbsp;&nbsp;{{ renderCategory() }}
    </router-link>
    <span v-else>&nbsp;/&nbsp;&nbsp;{{ renderCategory() }}</span>

    <template v-if="item">
      <router-link v-if="item" :to="{ path: `/${category}/${city}` }">
        /&nbsp;&nbsp;{{ city }}
      </router-link>
      <span v-if="item">&nbsp;/&nbsp;&nbsp;{{ item }}</span>
    </template>

    <template v-if="city && !item">
      <span>&nbsp;/&nbsp;&nbsp;{{ city }}</span>
    </template>
  </div>
</template>
<script>
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
    item: {
      type: String,
      default: '',
    },
  },
  setup(props) {
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
    return {
      renderCategory,
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
