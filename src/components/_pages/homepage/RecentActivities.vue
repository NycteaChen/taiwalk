<template>
  <ShowMoreHeader :title="'近期活動'" :show-more="'查看更多活動'" />
  <div class="recent-activities">
    <div class="recent-activity" v-for="index in 4" :key="index">
      <div class="event-img">
        <img
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      <div class="text-desc">
        <div>2021/10/30 - 2021/11/13</div>
        <div>{{ topicFormate(state.topic) }}</div>
        <div>南投縣</div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
import ShowMoreHeader from '@/components/ShowMoreHeader'
import { textFormat } from '@/assets/js/utils.js'

export default {
  components: {
    ShowMoreHeader,
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

    const topicFormate = text => {
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
      topicFormate,
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
    cursor: pointer;
    display: flex;
    margin-bottom: 16px;
    .event-img {
      img {
        width: 90px;
        border-radius: 8px;
        margin-right: 16px;
        height: 62px;
      }
    }
    .text-desc {
      text-align: left;
      font-size: 12px;
      div {
        &:nth-child(2) {
          color: #2f2f2f;
          font-size: 15px;
          font-weight: 700;
          max-width: 210px;
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
        width: 160px;
        height: 160px;
        overflow: hidden;
        img {
          border-top-right-radius: unset;
          border-bottom-right-radius: unset;
          width: 160px;
          height: 160px;

          transition: 0.5s transform;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .text-desc {
        padding: 16px;
        position: relative;
        font-size: 16px;
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
        div {
          &:nth-child(2) {
            max-width: 320px;
          }
        }
      }
    }
  }
}
</style>
