<template>
  <div class="no-found">
    <img :src="require('@/assets/img/icon/nofound.svg')" />
    <div>
      <div>目前查無資料</div>
      <div>請重新搜尋</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.no-found {
  text-align: center;
  margin-top: 55px;
  img {
    margin: auto;
  }
  > div {
    margin-top: 12px;
    color: #7f977b;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
