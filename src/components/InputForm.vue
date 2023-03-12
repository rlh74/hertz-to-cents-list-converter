<template>
      <header>Hertz:</header>
      <textarea 
      v-model.trim="inputText"
      rows="12"
      class="input-textarea"
      @input="parseInputTextDebounced"
      placeholder="Enter frequencies to convert here, separating each frequency by a new line. Values are interpreted as decimals, non-valid characters are ignored."
      ></textarea>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { debounce, parseInput } from '@/utils'


export default defineComponent({
  name: 'InputForm',
  props: {
    onParsedTextUpdate: Function as unknown as () => (parsedText: string[]) => void,
  },
  setup(props) {
    const inputText = ref('')
    const parsedText = ref<string[]>([])

    const parseInputText = () => {
      parsedText.value = parseInput(inputText.value)
      props.onParsedTextUpdate?.(parsedText.value)
    } 

    const parseInputTextDebounced = debounce(parseInputText, 325)

    watch(inputText, parseInputTextDebounced)

    return { inputText, parseInputTextDebounced }

  }
})
</script>
