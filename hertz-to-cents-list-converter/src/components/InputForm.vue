<template>
      <header>Hertz:</header>
      <textarea 
      v-model.trim="inputText"
      rows="12"
      class="input-textarea"
      @input="parseInputText"
      ></textarea>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { parseInput } from '@/utils'


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

    watch(inputText, parseInputText)

    return { inputText, parseInputText }

  }
})
</script>
