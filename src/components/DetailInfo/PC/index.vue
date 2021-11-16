<template>
  <div class="info-container" v-if="infoData">
    <div class="info">
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
    </div>
    <div class="position">
      <div class="google-map" id="map">
        <GMapMap
          :center="{ lat: state.positionLat, lng: state.positionLon }"
          :zoom="17"
          map-type-id="terrain"
        ></GMapMap>
      </div>

      <div class="surround">
        <div class="title">周邊資訊：</div>
        <div class="surround-items">
          <div class="surround-item" v-for="index in 3" :key="index" />
        </div>
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
.info-container {
  width: 90%;
  max-width: 1150px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .info {
    color: #2f2f2f;
    margin-top: 30px;
    background: #f9f9f9;
    padding: 30px 15px;

    &-item {
      display: flex;
      margin: auto;
      max-width: 568px;
      margin-bottom: 12px;

      > div:first-of-type {
        width: 120px;
      }
      > div:last-of-type {
        font-size: 18px;
        flex: 2;
        word-break: break-all;
        padding-top: 3px;
      }
      a {
        color: #6e7d60;
        border-bottom: 1px solid #6e7d60;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  .position {
    .google-map {
      margin: auto;
      margin-top: 30px;
      /deep/ .vue-map-container {
        /* width: 540px; */
        height: 250px;
      }
    }

    .surround {
      margin: auto;
      margin-top: 20px;
      max-width: 568px;
      .surround-items {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        .surround-item {
          height: 110px;
          width: 160px;
          cursor: pointer;
          transition: 0.3s background-image;
          background-repeat: no-repeat;
          &:first-of-type {
            background-image: url('../../../assets/img/surround/vertical0.svg');
            &:hover {
              background-image: url('../../../assets/img/surround/vertical0_hover.svg');
            }
          }
          &:nth-of-type(2) {
            background-image: url('../../../assets/img/surround/vertical1.svg');
            &:hover {
              background-image: url('../../../assets/img/surround/vertical1_hover.svg');
            }
          }
          &:last-of-type {
            margin-right: 0;
            background-image: url('../../../assets/img/surround/vertical2.svg');
            &:hover {
              background-image: url('../../../assets/img/surround/vertical2_hover.svg');
            }
          }
        }
        @media (min-width: 950px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
}
</style>
