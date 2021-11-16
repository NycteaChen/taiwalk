<template>
  <div class="info" v-if="infoData">
    <div class="info-item">
      <div class="title">{{ renderCateGory().time }}時間：</div>
      <div>{{ infoData?.OpenTime || '暫無提供' }}</div>
    </div>
    <div class="info-item">
      <div class="title">{{ renderCateGory().phone }}電話：</div>
      <div v-if="infoData?.Phone">
        <a :href="`${infoData.Phone}`">{{ infoData?.Phone }}</a>
      </div>
      <div v-else>暫無提供</div>
    </div>
    <div v-if="category === 'Activity'" class="info-item">
      <div class="title">主辦單位：</div>
      <div>苗栗市公所、苗栗市民代表會</div>
    </div>
    <div class="info-item">
      <div class="title">{{ renderCateGory().address }}：</div>
      <div>{{ infoData?.Address || '暫無提供' }}</div>
    </div>
    <div class="info-item">
      <div class="title">官方網站：</div>
      <div v-if="infoData?.WebsiteUrl">
        <a :href="`${infoData.WebsiteUrl}`" target="_blank">
          {{ infoData?.WebsiteUrl || '暫無提供' }}
        </a>
      </div>
      <div v-else>暫無提供</div>
    </div>
    <div v-if="category !== 'Restaurant'" class="info-item">
      <div class="title">{{ renderCateGory().cost }}：</div>
      <div>{{ infoData?.TicketInfo || '暫無提供' }}</div>
    </div>
    <div v-if="category !== 'Restaurant'" class="info-item">
      <div class="title">{{ renderCateGory().care }}：</div>
      <div>{{ infoData?.Remarks || '暫無提供' }}</div>
    </div>
    <div class="google-map">
      <GMapMap
        :center="{ lat: state.positionLat, lng: state.positionLon }"
        :zoom="17"
        map-type-id="terrain"
      ></GMapMap>
    </div>
    <div class="surround">
      <div class="title">周邊資訊：</div>
      <div class="surround-items">
        <img
          class="surround-item"
          v-for="index in 3"
          :key="index"
          :src="require(`@/assets/img/surround/horizon${index - 1}.svg`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, onMounted } from 'vue'

export default {
  props: {
    infoData: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const router = useRouter()
    const category = router.currentRoute._value.path.split('/')[1]

    const state = reactive({
      positionLat: undefined,
      positionLon: undefined,
    })

    const getStorage = () => {
      const data = JSON.parse(localStorage.getItem('data')).Position
      state.positionLat = data.PositionLat
      state.positionLon = data.PositionLon
    }

    const renderCateGory = () => {
      switch (category) {
        case 'Restaurant':
          return { time: '營業', phone: '聯絡', address: '餐廳地址' }
        case 'Activity':
          return {
            time: '活動',
            phone: '聯絡',
            address: '活動地點',
            cost: '活動費用',
            care: '注意事項',
          }
        case 'ScenicSpot':
          return {
            time: '開放',
            phone: '服務',
            address: '景點地址',
            cost: '票價資訊',
            care: '注意事項',
          }
        default:
          break
      }
    }

    onMounted(() => {
      getStorage()
    })
    return {
      state,
      renderCateGory,
      category,
    }
  },
}
</script>

<style lang="scss" scoped>
.info {
  color: #2f2f2f;
  margin-top: 30px;
  background: #f9f9f9;
  padding: 30px 15px;
  .title {
    font-size: 18px;
    font-weight: 700;
  }
  &-item {
    display: flex;
    margin: auto;
    max-width: 568px;
    > div:first-of-type {
      flex: 1;
    }
    > div:last-of-type {
      font-size: 16px;
      flex: 2;
      padding-top: 3px;
      word-break: break-all;
      @media (min-width: 490px) {
        flex: 3;
      }
    }
    a {
      color: #6e7d60;
      border-bottom: 1px solid #6e7d60;
      &:hover {
        opacity: 0.6;
      }
    }
  }
  .google-map {
    width: 90%;
    margin: auto;
    margin-top: 30px;
    /deep/ .vue-map-container {
      height: 200px;
    }
  }

  .surround {
    margin: auto;
    margin-top: 20px;
    max-width: 568px;
    .title {
      margin-bottom: 20px;
    }
    .surround-items {
      .surround-item {
        width: 100%;
        margin-top: 8px;
        cursor: pointer;
      }
    }
  }
}
</style>
