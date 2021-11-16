<template>
  <div class="home-desc">
    <div>
      <h1>
        探索
        <span class="under-line">臺灣之美</span>
      </h1>
      <h1>讓我們更親近這片土地</h1>
      <div class="travel-guide">
        <img :src="require('@/assets/img/icon/spot24_Y.svg')" />
        <span>臺灣旅遊景點導覽&nbsp;&nbsp;</span>
        <span>Taiwan Travel Guide</span>
      </div>
    </div>
    <div class="search-area mt-7">
      <Select @getSelected="getCategory" :hint="'探索景點'" :options="state.list" />
      <Input @getInput="getInputText" />
      <Button @search="search" />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import Select from '@/components/Search/Select'
import Input from '@/components/Search/Input'
import Button from '@/components/Search/Button'

export default {
  components: {
    Select,
    Input,
    Button,
  },
  setup() {
    const state = reactive({
      list: ['探索景點', '節慶活動', '在地美食'],
      form: {
        category: '探索景點',
        text: undefined,
      },
    })

    const router = useRouter()

    const getCategory = item => {
      state.form.category = item
    }

    const getInputText = item => {
      state.form.text = item
    }

    const search = () => {
      switch (state.form.category) {
        case '探索景點':
          router.push({
            path: 'ScenicSpot',
            query: state.form.text ? { keyword: state.form.text } : undefined,
          })
          break
        case '節慶活動':
          router.push({
            path: 'Activity',
            query: state.form.text ? { keyword: state.form.text } : undefined,
          })
          break
        case '在地美食':
          router.push({
            path: 'Restaurant',
            query: state.form.text ? { keyword: state.form.text } : undefined,
          })
          break
      }
    }

    return {
      state,
      getCategory,
      getInputText,
      search,
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
    margin-bottom: 38px;
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
      margin-bottom: 0;
      width: 40%;
    }
  }
  @media (min-width: 950px) {
    margin-top: 145px;
    h1 {
      font-size: 48px;
    }
    .search-area {
      width: 350px;
    }
  }
}
</style>
