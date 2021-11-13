<template>
  <div class="select" @mouseleave="closeSelect">
    <div class="select-bar" @click="openSelect">
      {{ state.selectedItem || hint }}
      <img
        :src="require('@/assets/img/icon/arrow-down.svg')"
        :class="{ transform: state.showOptions }"
      />
    </div>
    <ul :class="{ open: state.showOptions }">
      <li
        :class="{ selected: item === state.selectedItem || (item === hint && !state.selectedItem) }"
        v-for="(item, index) in options"
        :key="index"
        @click="selectItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  props: {
    hint: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['getSelected'],

  setup(props, { emit }) {
    const state = reactive({
      showOptions: false,
      selectedItem: undefined,
    })

    const openSelect = () => {
      state.showOptions = !state.showOptions
    }
    const closeSelect = () => {
      state.showOptions = false
    }

    const selectItem = item => {
      state.showOptions = !state.showOptions
      state.selectedItem = item
      emit('getSelected', item)
    }

    return {
      state,
      openSelect,
      closeSelect,
      selectItem,
    }
  },
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  margin: auto;
  margin-bottom: 20px;
  text-align: left;
  width: 90%;
  max-width: 345px;
  &-bar {
    cursor: pointer;
    height: 50px;
    padding: 11px 30px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    color: #7f977b;
    img {
      position: absolute;
      top: 15px;
      right: 23px;
      transition: 0.3s transform;
      &.transform {
        transform: rotate(-180deg);
      }
    }
  }

  ul {
    width: 100%;
    max-width: 345px;
    position: absolute;
    display: none;
    max-height: 350px;
    &.open {
      display: block;
      z-index: 1;
      border: 1px solid #e5e5e5;
      background: #fff;
      border-radius: 6px;
      overflow-y: auto;
      &:hover {
        background: #d0dfcf;
      }
    }
    li {
      width: 100%;
      max-width: 345px;
      cursor: pointer;
      padding: 11px 30px;
      height: 50px;
      background: #fff;
      & + li {
        border-top: 1px solid #e5e5e5;
      }
      &:hover {
        background: #d0dfcf;
      }
      &.selected {
        background: #d0dfcf;
      }
    }
  }
}

* {
  &::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 2px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #d0dfcf;
  }
}
</style>
