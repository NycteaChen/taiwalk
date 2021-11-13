<template>
  <div class="button">
    <button @click="search">
      <img :src="require('@/assets/img/icon/search.svg')" />
      <span>搜尋</span>
    </button>
  </div>
</template>
<script>
export default {
  emits: ['search'],
  setup(props, { emit }) {
    const search = () => {
      emit('search')
    }
    return {
      search,
    }
  },
}
</script>

<style lang="scss" scoped>
.button {
  margin-bottom: 20px;
  button {
    height: 50px;
    width: 90%;
    max-width: 345px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    color: #fff;
    font-weight: 700;
    background: #7f977b;
    transition: 0.3s background-color;
    img {
      display: inline-block;
      margin-right: 20px;
    }
    span {
      vertical-align: middle;
      letter-spacing: 25px;
    }
    &:hover {
      background: #65895f;
    }
    @media (min-width: 768px) {
      padding: 0;
    }
  }
}
</style>
