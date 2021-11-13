<template>
  <Carousel />
  <div class="detail-container">
    <div class="intro">
      <div class="header">
        <h1>{{ data.title }}</h1>
        <div class="tags">
          <div class="tag" v-for="index in 3" :key="index"># 地方特產啦</div>
        </div>
      </div>
      <div class="desc">
        <h1>{{ renderCateGory() }}介紹：</h1>
        <div>
          「火旁龍」就是苗栗行銷客家元宵節慶而迎龍的在地獨特民俗，亦是臺灣舞龍文化的代表。至1989年辦理迄今，獨特的客家苗栗火旁龍文化已成功吸引了全國民眾的目光，甚至引起國際注目，逐漸從早期的地方民俗活動，蛻變成為臺灣四大地方元宵節慶文化，而後成為「客庄十二節慶」元宵民俗活動。近年來，苗栗火旁龍活動已經成為展現客家龍文化的重要指標，以發展地方觀光旅遊，追求經濟發展，吸引觀光人潮，以龍文化造鎮與景點打造，行銷苗栗客家傳統龍文化。「苗栗火旁龍」系列活動依序期程，大抵可劃分為四大主題，分別為祥龍點睛˙舞龍競技、民俗踩街、火旁龍之夜、化龍返天暨客家特色商品展。每年的活動可謂推陳出新，目的都在於吸引遊客一同共襄盛舉。而近幾年為推展在地觀光國際化，並順應國際環境資源永續發展之潮流，「苗栗火旁龍」逐步朝向觀光化發展，並於民俗踩街及火旁龍之夜，邀請國內外的表演團體，連袂出席參與火旁龍年度盛事，精彩的表演、恍如置身國外嘉年華派對。活動日程
          110年2月19日-2月28日 客家龍神壇 地點：苗栗火車站西站廣場 110年2月20日 09:00-12:30
          祥龍點睛、神龍祈福及貓裏客家龍競技 (改線上直播) 地點：苗栗市玉清宮前廣場 110年2月26日
          18:00-22:00 民俗踩街 (停辦) 地點：苗栗市市區 110年2月27日 17:00-22:00 龍之夜 (停辦)
          地點：苗栗市經國路河濱公園 110年2月28日 21:00-24:00 化龍返天 (改線上直播)
          地點：苗栗市嘉盛五文昌廟※
          2021「龍之夜」活動受到疫情影響，將取消民俗踩街及龍之夜，詳情請參考苗栗火旁龍粉絲團公告。
        </div>
      </div>
    </div>
    <Info />
  </div>
  <Recommend :title="title" :show-more="showMore" :link="link" :query="city" />
</template>
<script>
import { useRouter } from 'vue-router'
import Carousel from '../../Carousel'
import Recommend from '../../Recommend'
import Info from '../../DetailInfo'

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
    data: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const router = useRouter()
    const value = router.currentRoute._value
    const { city } = value.query
    const category = value.path.split('/')[1]
    const link = `${category}/city`

    const renderCateGory = () => {
      switch (category) {
        case 'food':
          return '餐廳'
        case 'activities':
          return '活動'
        case 'attractions':
          return '景點'
        default:
          break
      }
    }

    return {
      category,
      link,
      city,
      renderCateGory,
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
