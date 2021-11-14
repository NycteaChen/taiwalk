<template>
  <div class="search-area" :class="{ 'grid-five': category === 'Activity' }">
    <Select :hint="defaultCity" :options="state.cityList" @getSelected="getCity" />
    <template v-if="category === 'Activity'">
      <DatePicker @getSelected="getDate" />
    </template>
    <Select :hint="defaultTopic" :options="concatList" @getSelected="getTopic" />
    <Input @getInput="getInputText" />
    <Button @search="search" />
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import Select from './Select'
import Input from './Input'
import Button from './Button'
import DatePicker from './DatePicker'

export default {
  components: {
    Select,
    Input,
    Button,
    DatePicker,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    defaultCity: {
      type: String,
      default: '全部縣市',
    },
    defaultTopic: {
      type: String,
      default: '全部主題',
    },
  },
  setup(props) {
    const router = useRouter()
    const value = router.currentRoute._value
    const category = value.path.split('/')[1]

    const state = reactive({
      cityList: [
        '全部縣市',
        '臺北市',
        '新北市',
        '基隆市',
        '宜蘭縣',
        '桃園市',
        '新竹縣',
        '新竹市',
        '苗栗縣',
        '臺中市',
        '彰化縣',
        '南投縣',
        '雲林縣',
        '嘉義縣',
        '嘉義市',
        '臺南市',
        '高雄市',
        '屏東縣',
        '花蓮縣',
        '臺東縣',
        '澎湖縣',
        '金門縣',
        '連江縣',
      ],
      form: {
        city: 'all',
        topic: 'all',
        text: undefined,
      },
    })

    const concatList = computed(() => {
      let newList = [`全部${category === 'Restaurant' ? '分類' : '主題'}`].concat(props.options)
      return newList
    })

    const getCity = item => {
      state.form.city = item
    }
    const getTopic = item => {
      state.form.topic = item
    }

    const getInputText = item => {
      state.form.text = item
    }

    const getDate = item => {
      state.form.date = item
    }

    const search = () => {
      console.log(state.form)
    }

    return {
      state,
      category,
      getCity,
      getTopic,
      getInputText,
      getDate,
      search,
      concatList,
    }
  },
}
</script>
<style lang="scss" scoped>
.search-area {
  @media (min-width: 950px) {
    display: grid;
    width: 90%;
    max-width: 1100px;
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
  }
  &.grid-five {
    grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr;
  }
}
</style>
