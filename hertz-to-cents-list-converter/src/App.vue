<template>
  <div class="app">
    <textarea 
      v-model.trim="inputText"
      rows="12"
      class="input-textarea"
      @input="processedInput"
      ></textarea>
    <CentsList :processedText="processedText" class="cents-list"></CentsList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import CentsList from './components/CentsList.vue'

export default defineComponent({
  name: 'App',
  components: { CentsList },
  setup() {
    const inputText = ref('')
    const processedText = ref<string[]>([])

    const processedInput = () => {
      processedText.value = inputText.value
        .split(/\r?\n|,/)
        .map((item) => item.trim())
        .filter((item) => item !== '')
        .filter((item) => !isNaN(parseFloat(item)))
        .map((item) => parseFloat(item).toFixed(2))
        .sort((a, b) => parseFloat(a) - parseFloat(b));
    }

    watch(inputText, processedInput)

    return { inputText, processedText, processedInput }
  },
})

</script>



<style>
.app {
  display: flex;
  flex-wrap: wrap;
}

.input-textarea {
  width: 30%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.cents-list {
  width: 50%;
  height: 100%;
}

</style>
