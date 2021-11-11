<template>
  <div class="home-desc">
    <div>
      <h1>
        探索
        <span class="under-line">台灣之美</span>
      </h1>
      <h1>讓我們更親近這片土地</h1>
      <div class="travel-guide">
        <img :src="require('@/assets/img/icon/spot24_Y.svg')" />
        <span>台灣旅遊景點導覽&nbsp;&nbsp;</span>
        <span>Taiwan Travel Guide</span>
      </div>
    </div>
    <div class="search-area mt-7">
      <select
        @click="handleClick"
        :style="{
          backgroundImage: `url(${state.isNotExpand ? arrowDownSVG : arrowUpSVG})`,
        }"
      >
        <option>探索景點</option>
        <option>節慶活動</option>
        <option>品嚐美食</option>
      </select>
      <div>
        <input placeholder="你想去哪裡？請輸入關鍵字" />
      </div>
      <div>
        <button>
          <img :src="require('@/assets/img/icon/search.svg')" />
          <span>搜尋</span>
        </button>
      </div>
    </div>
    <!-- <a-select default-value="探索景點" @change="handleChange">
      <a-select-option value="探索景點">探索景點</a-select-option>
      <a-select-option value="節慶活動">節慶活動</a-select-option>
      <a-select-option value="品嚐美食">品嚐美食</a-select-option>
    </a-select> -->
  </div>
</template>

<script>
import { reactive } from 'vue'
import arrowDownSVG from '@/assets/img/icon/arrow-down.svg'
import arrowUpSVG from '@/assets/img/icon/arrow-up.svg'

export default {
  setup() {
    const state = reactive({
      isNotExpand: true,
    })

    const handleClick = () => {
      state.isNotExpand = !state.isNotExpand
    }

    return {
      state,
      handleClick,
      arrowDownSVG,
      arrowUpSVG,
    }
  },
}
</script>

<style lang="scss" scoped>
.home-desc {
  margin-top: 75px;
  h1 {
    font-size: 28px;
    text-align: center;
    .under-line {
      border-bottom: 2px solid #e0da48;
    }
    &:first-of-type {
      margin-bottom: 0;
    }
  }
  .travel-guide {
    color: #646464;
    display: flex;
    margin: auto;
    width: 90%;
    justify-content: center;
    align-items: center;
    span {
      vertical-align: middle;
      &:last-of-type {
        font-weight: 700;
        font-family: 'Playfair Display';
      }
    }
  }
  .search-area {
    select,
    input,
    button {
      padding: 11px 30px;
      height: 50px;
      width: 90%;
      max-width: 345px;
      border-radius: 5px;
      border: 1px solid #e6e6e6;
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      background-repeat: no-repeat;
      background-position-x: 95%;
      background-position-y: 50%;
      color: #7f977b;
      &:hover {
        cursor: pointer;
      }
    }
    div {
      margin-top: 7px;
    }
    input {
      background: #f9f9f9;
      &:focus {
        outline: none;
        background: #fff;
      }
    }
    button {
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
    }
  }
  @media (min-width: 768px) {
    margin: 85px auto 60px;
    display: flex;
    width: 90%;
    max-width: 960px;
    justify-content: space-between;
    align-items: center;
    h1 {
      text-align: left;
    }
    .travel-guide {
      display: flex;
      margin: auto;
      width: 100%;
      justify-content: flex-start;
      span {
        font-size: 20px;
        &:last-of-type {
          font-weight: 700;
          font-family: 'Playfair Display';
        }
      }
    }
    .search-area {
      select,
      input,
      button {
        width: 100%;
        max-width: unset;
      }
    }
  }
  @media (min-width: 950px) {
    margin-top: 145px;
    h1 {
      font-size: 48px;
    }
    .search-area {
      select,
      input,
      button {
        width: 350px;
        max-width: unset;
      }
    }
  }
}
</style>
