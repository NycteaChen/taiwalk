<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <router-link v-if="!query" :to="{ path: `/${link}` }">{{ showMore }}</router-link>
    <router-link v-else :to="{ path: `/${link}`, query: { name: query } }">
      {{ showMore }}
    </router-link>
  </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss" scoped>
.header {
  width: 90%;
  /* max-width: 345px; */
  margin: auto;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  white-space: nowrap;
  flex-wrap: wrap;
  h1 {
    font-size: 24px;
  }
  a {
    display: block;
    color: #ff725e;
    font-size: 16px;
    padding-right: 15px;
    &::after {
      content: '';
      background: url('../../assets/img/icon/arrow-right16_R.svg') no-repeat;
      background-position-x: 5px;
      background-position-y: 5px;
      width: 24px;
      height: 24px;
      position: absolute;
    }
    transition: 0.3s opacity;
    &:hover {
      opacity: 0.6;
    }
    &:active {
      opacity: 0.3;
    }
  }
  @media (min-width: 768px) {
    max-width: 1100px;
    h1 {
      font-size: 36px;
    }
  }
}
</style>
