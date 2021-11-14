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
        <div>{{ infoData?.TicketInfo }}</div>
      </div>
      <div v-if="category !== 'Restaurant'" class="info-item">
        <div class="title">{{ renderCateGory().care }}：</div>
        <div>{{ infoData?.Remarks }}</div>
      </div>
    </div>
    <div class="position">
      <div class="map">
        <img
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        />
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

    return {
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
        flex: 1;
      }
      > div:last-of-type {
        font-size: 18px;
        flex: 2;
        word-break: break-all;
        padding-top: 3px;

        @media (min-width: 950px) {
          flex: 1;
        }
        @media (min-width: 978px) {
          flex: 2;
        }
        @media (min-width: 1090px) {
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
  }

  .position {
    .map {
      margin: auto;
      margin-top: 30px;
      img {
        border-radius: 12px;
        width: 540px;
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
