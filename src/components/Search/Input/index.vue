<template>
  <div class="input">
    <input placeholder="想去哪？請輸入關鍵字" v-model="state.inputText" @change="handleChange" />
  </div>
</template>
<script>
import { reactive } from 'vue'

export default {
  emits: ['getInput'],
  setup(props, { emit }) {
    const state = reactive({
      inputText: undefined,
    })

    const handleChange = () => {
      emit('getInput', state.inputText)
    }

    return {
      state,
      handleChange,
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 20px;
  input {
    background: #f9f9f9;
    padding: 11px 30px;
    height: 50px;
    margin: auto;
    width: 90%;
    max-width: 345px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    &:focus {
      outline: none;
      background: #fff;
    }
  }
}
</style>
