<template>
  <Carousel :data="state.detailData" />
  <div class="detail-container">
    <div class="intro">
      <div class="header">
        <h1>{{ state.detailData.Name }}</h1>
        <div class="tags" v-if="state?.detailData?.Class1">
          <div class="tag"># {{ state?.detailData.Class1 }}</div>
          <div class="tag" v-if="state?.detailData?.Class2"># {{ state?.detailData.Class2 }}</div>
          <div class="tag" v-if="state?.detailData?.Class3"># {{ state?.detailData.Class3 }}</div>
        </div>
      </div>
      <div class="desc">
        <h1>{{ renderCateGory() }}介紹：</h1>
        <div>
          {{ state.detailData?.Description }}
          <br />
          {{ state.detailData?.DescriptionDetail }}
        </div>
      </div>
    </div>
    <Info :infoData="state.detailData" />
  </div>
  <Recommend
    :title="title"
    :show-more="showMore"
    :link="link"
    :query="city"
    :data="state.showMoreData"
    :category="category"
    @refresh="getNewData"
  />
</template>
<script>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Carousel from '../../Carousel'
import Recommend from '../../Recommend'
import Info from '../../DetailInfo'
import { renderImage } from '@/assets/js/utils'
import Api from '@/assets/js/api/api.js'

export default {
  components: {
    Carousel,
    Recommend,
    Info,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    showMore: {
      type: String,
      default: '',
    },
  },
  emits: ['refresh'],
  setup(props, { emit }) {
    const state = reactive({
      detailData: {},
      showMoreData: [],
    })

    const router = useRouter()
    const value = router.currentRoute._value
    const { city } = value.query
    const category = value.path.split('/')[1]
    const link = `${category}/city`

    const getStorage = () => {
      state.detailData = JSON.parse(localStorage.getItem('data'))
      console.log(state.detailData)
    }

    const getCityAll = async () => {
      const result = await Api.getCityAll(category, city, 6)
      state.showMoreData = result
    }

    const renderCateGory = () => {
      switch (category) {
        case 'Restaurant':
          return '餐廳'
        case 'Activity':
          return '活動'
        case 'ScenicSpot':
          return '景點'
        default:
          break
      }
    }

    const getNewData = item => {
      state.detailData = item
      emit('refresh', item)
    }

    onMounted(async () => {
      await getCityAll()
      getStorage()
    })

    return {
      state,
      category,
      link,
      city,
      renderCateGory,
      renderImage,
      getNewData,
    }
  },
}
</script>

<style lang="scss" scoped>
.detail-container {
  margin: 0 auto 60px;
  text-align: left;
  .intro {
    width: 90%;
    margin: auto;
    .header {
      margin-bottom: 18px;
      h1 {
        color: #1e1e1e;
        font-size: 24px;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        .tag {
          margin: 5px 8px;
          margin-left: 0;
          color: #bea363;
          border-radius: 20px;
          padding: 3px 18px;
          border: 1px solid #bea363;
        }
      }
    }
    .desc {
      h1 {
        color: #2f2f2f;
        font-size: 18px;
      }
      div {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 768px) {
    .intro {
      max-width: 1100px;
      .header {
        margin-bottom: 30px;
        h1 {
          font-size: 36px;
        }
        .tags {
          .tag {
            margin-top: 10px;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
