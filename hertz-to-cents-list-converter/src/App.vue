<template>
  <div class="app">
    <div class="container">
      <header>Hertz:</header>
      <textarea 
        v-model.trim="inputText"
        rows="12"
        class="input-textarea"
        @input="processedInput"
        ></textarea>
    </div>
    <div class="container">
      <CentsList :processedInput="processedText"></CentsList>
    </div>
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
  justify-content: center;
  display: flex;
}

.input-textarea {
  /* width: 50%; */
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 1.5;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  background-color: inherit;
  color: inherit;

}

textarea {
  margin: 0%;
}

.container {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin-left: 10px;

}

ul {
  list-style-type: none;
  margin-block-start: 0%;
  padding-inline-start: 0%;
}

</style>
