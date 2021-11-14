<template>
  <div class="date" @mouseleave="closeDatePicker">
    <div class="date-bar" @click="openDatePicker">
      {{ state.date }}
      <img :src="require('@/assets/img/icon/datepicker16.svg')" />
    </div>
    <div v-if="state.showDatePicker" class="date-picker">
      <DatePicker v-model="state.selectedDate" :value="state.selectedDate" mode="date" />
    </div>
  </div>
</template>
<script>
import { reactive, watch } from 'vue'
import { DatePicker } from 'v-calendar'
import dayjs from 'dayjs'

export default {
  components: {
    DatePicker,
  },
  emits: ['getSelected'],
  setup(props, { emit }) {
    const state = reactive({
      date: '選擇日期',
      selectedDate: undefined,
      showDatePicker: false,
    })

    const openDatePicker = () => {
      state.showDatePicker = !state.showDatePicker
    }

    const closeDatePicker = () => {
      state.showDatePicker = false
    }

    watch(
      () => state.selectedDate,
      date => {
        console.log(dayjs(date).format('YYYY/MM/DD'))
        state.date = dayjs(date).format('YYYY/MM/DD')
        state.showDatePicker = false
        emit('getSelected', state.date)
      }
    )

    return {
      state,
      openDatePicker,
      closeDatePicker,
    }
  },
}
</script>
<style lang="scss" scoped>
.date {
  position: relative;
  margin: auto;
  margin-bottom: 20px;
  text-align: left;
  width: 90%;
  max-width: 345px;
  &-bar {
    cursor: pointer;
    height: 50px;
    padding: 13px 30px 11px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    color: #7f977b;
    img {
      position: absolute;
      top: 15px;
      right: 23px;
    }
    @media (min-width: 950px) {
      padding: 13px 20px 11px;
      img {
        right: 15px;
        top: 17px;
      }
    }
  }
  &-picker {
    width: 100%;
    max-width: 345px;
    position: absolute;
    z-index: 1;
    /deep/.vc-container {
      width: 100%;
      @media (min-width: 950px) {
        width: 180%;
      }
    }
    /deep/.vc-highlight {
      background-color: #65895f !important;
    }
  }
}
</style>
