<template>
  <div class="header">
    <h1>近期活動</h1>
    <a>查看更多活動</a>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 80%;
  max-width: 345px;
  margin: auto;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
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
      background: url('../../assets/Icon/arrow-right16_R.svg') no-repeat;
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
    width: 90%;
    max-width: 1100px;
    h1 {
      font-size: 36px;
    }
  }
}
</style>
