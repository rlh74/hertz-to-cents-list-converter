<template>
    <header>Cents: <i>Starting at {{ parsedInput[0] }} Hz.</i></header>
    <textarea
      v-model="centsText"   
      rows=12 
      readOnly
      class="input-textarea"
    ></textarea>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue';
import { parsedInputToCents } from '@/utils';

export default defineComponent({
  name: 'CentsList',
  props: {
    parsedInput: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const centsText = computed(() => {
      if (props.parsedInput.length === 0) return []
      const cents = parsedInputToCents(props.parsedInput);
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