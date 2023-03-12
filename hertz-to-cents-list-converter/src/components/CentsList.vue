<template>
    <header>Cents:</header>
    <textarea
      v-model="centsText"   
      rows=12 
      readOnly
      class="input-textarea"
    ></textarea>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue';
import { processedInputToCents } from '@/utils';

export default defineComponent({
  name: 'CentsList',
  props: {
    processedInput: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const centsText = computed(() => {
      if (props.processedInput.length === 0) return []
      const cents = processedInputToCents(props.processedInput);
      return cents.join("\n");
    })

    return { centsText }
  },
})


</script>

<style>
li {
  list-style: none;
}

</style>