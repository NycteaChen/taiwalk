<template>
  <ShowMoreHeader :title="'近期活動'" :show-more="'查看更多活動'" :link="'Activity'" />
  <div class="recent-activities">
    <div class="recent-activity" v-for="(item, index) in data" :key="index">
      <div class="event-img">
        <img :src="`${renderImage(item.Picture.PictureUrl1, 160, 160)}`" />
      </div>

      <div class="text-desc">
        <div>{{ dateFormat(item.StartTime) }} ~ {{ dateFormat(item.EndTime) }}</div>
        <div>{{ topicFormat(item.Name) }}</div>
        <div>{{ item.City }}</div>
        <router-link
          @click="setStorage(item)"
          :to="{
            path: `/Activity/location`,
            query: { city: item.City, name: item.Name },
          }"
        >
          <span>詳細介紹</span>
          <img :src="require('@/assets/img/icon/arrow-right16_G.svg')" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
import ShowMoreHeader from '@/components/ShowMoreHeader'
import { textFormat, dateFormat, renderImage, setStorage } from '@/assets/js/utils.js'

export default {
  components: {
    ShowMoreHeader,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    const state = reactive({
      topic: '活動名稱最多可放二十八個字，超過時第二十八字要改成刪節改成刪節',
      isSmallScreen: true,
    })

    window.addEventListener(
      'resize',
      e => {
        if (e.target.innerWidth >= 768) {
          state.isSmallScreen = false
        } else {
          state.isSmallScreen = true
        }
      },
      false
    )

    const topicFormat = text => {
      if (state.isSmallScreen) {
        return textFormat(text, 14)
      } else {
        return textFormat(text, 28)
      }
    }
    onMounted(() => {
      if (window.innerWidth >= 768) {
        state.isSmallScreen = false
      }
    })

    return {
      state,
      topicFormat,
      dateFormat,
      renderImage,
      setStorage,
    }
  },
}
</script>
<style lang="scss" scoped>
.recent-activities {
  width: 90%;
  max-width: 345px;
  margin: auto auto 36px;
  .recent-activity {
    display: flex;
    margin-bottom: 16px;
    .event-img {
      border-radius: 8px;
      img {
        width: 90px;
        border-radius: 8px;
        margin-right: 16px;
      }
    }
    .text-desc {
      width: 200px;
      text-align: left;
      font-size: 12px;
      position: relative;
      div {
        &:nth-child(2) {
          color: #2f2f2f;
          font-size: 15px;
          font-weight: 700;
          max-width: 210px;
        }
      }
      a {
        position: absolute;
        bottom: 0;
        left: 100px;
        color: #7f977b;
        display: flex;
        align-items: center;
        margin-top: 10px;
        cursor: pointer;
        img {
          margin-top: 2px;
          height: 14px;
        }
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 1100px;

    .recent-activity {
      height: 160px;
      background: #f9f9f9;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      .event-img {
        margin-right: 18px;
        border-radius: 8px 0 0 8px;
        width: 160px;
        height: 160px;
        overflow: hidden;
        img {
          border-top-right-radius: unset;
          border-bottom-right-radius: unset;
          width: 160px;
          height: 160px;
          transition: 0.5s transform;
        }
      }
      &:hover {
        .event-img {
          img {
            transform: scale(1.2);
          }
        }
      }
      .text-desc {
        padding: 16px;
        font-size: 16px;
        width: 50%;
        div {
          &:nth-child(2) {
            color: #2f2f2f;
            font-size: 22px;
            max-width: unset;
          }
          &:last-of-type {
            position: absolute;
            bottom: 16px;
            padding-left: 20px;

            &::before {
              content: '';
              background: url('../../../assets/img/icon/spot16.svg') no-repeat;
              width: 16px;
              height: 16px;
              position: absolute;
              left: 0;
              bottom: 3px;
            }
          }
        }
        a {
          left: unset;
          right: 0;
          bottom: 16px;
          img {
            height: unset;
          }
        }
      }
    }
  }

  @media (min-width: 1210px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    .recent-activity {
      max-width: 540px;

      .text-desc {
        width: 300px;
        div {
          &:nth-child(2) {
            max-width: 320px;
          }
        }
        a {
          right: -40px;
        }
      }
    }
  }
}
</style>
