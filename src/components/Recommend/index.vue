<template>
  <ShowMoreHeader :title="title" :show-more="showMore" :link="link" :query="query" />
  <div class="recommend-items" v-if="data.length > 0">
    <Carousel :breakpoints="breakpoints" :wrap-around="true">
      <Slide v-for="(item, index) in data" :key="index">
        <div class="recommend-item">
          <div class="photo-container">
            <img :src="`${renderImage(item.Picture.PictureUrl1, 255, 200)}`" />
          </div>
          <router-link
            :to="{
              path: `/${category}/location`,
              query: { city: item.Address.slice(0, 3), name: item.Name },
            }"
          >
            <div class="recommed-desc">
              <h2>{{ textFormat(`${item.Name}`, 10) }}</h2>
              <div>
                <img class="spot" :src="require('@/assets/img/icon/spot16.svg')" />
                <span>{{ item.Address.slice(0, 3) }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
<script>
import ShowMoreHeader from '../ShowMoreHeader'
import { textFormat } from '@/assets/js/utils.js'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { renderImage } from '@/assets/js/utils.js'

export default {
  components: {
    ShowMoreHeader,
    Carousel,
    Slide,
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
    link: {
      type: String,
      default: '',
    },
    query: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: () => [],
    },
    category: {
      type: String,
      default: '',
    },
  },
  setup() {
    const breakpoints = {
      0: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      350: {
        itemsToShow: 1.5,
        snapAlign: 'start',
      },
      500: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
      595: {
        itemsToShow: 2.5,
        snapAlign: 'start',
      },
      850: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      1100: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    }

    return {
      textFormat,
      breakpoints,
      renderImage,
    }
  },
}
</script>
<style lang="scss" scoped>
.recommend-items {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 10px auto 36px;
  .recommend-item {
    margin: auto 15px;
    text-align: left;
    .photo-container {
      overflow: hidden;
      border-radius: 20px;
      img {
        width: 220px;
        height: 160px;
        border-radius: 20px;
        transition: 0.5s transform;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .recommed-desc {
      cursor: pointer;
      h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        color: #2f2f2f;
      }
      div {
        display: flex;
        align-items: center;
        span {
          color: #646464;
        }
        .spot {
          margin-right: 4px;
        }
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
  @media (min-width: 768px) {
    max-width: 1100px;
    .recommend-item {
      .photo {
        width: 255px;
        height: 200px;
      }
    }
  }
}
</style>
