<template>
  <h1 class="text-4xl mb-8">Frequency to Cents Converter</h1>
  <div class="app">
    <div class="container">
      <InputForm @parsedTextUpdate="updateParsedText"></InputForm>
    </div>
    <div class="container">
      <CentsList :parsedInput="parsedText"></CentsList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CentsList from './components/CentsList.vue'
import InputForm from './components/InputForm.vue'

export default defineComponent({
  name: 'App',
  components: { CentsList, InputForm },
  setup() {
    const parsedText = ref<string[]>([])

    const updateParsedText = (parsed: string[]) => {
      parsedText.value = parsed
    }

    return { parsedText, updateParsedText }
  },
})

</script>



<style>

.app {
  justify-content: center;
  display: flex;
}

h1 {
  text-align: center;
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
