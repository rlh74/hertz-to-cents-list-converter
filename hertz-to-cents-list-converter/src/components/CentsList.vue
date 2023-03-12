<template>
  <div class="cents-list">
    <ul>
      <li v-for="item in cents" :key="item">
        {{ item.toFixed(4) }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue';

export default defineComponent({
  name: 'CentsList',
  props: {
    processedText: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const cents = computed(() => {
      if (props.processedText.length === 0) return []

      const base = parseFloat(props.processedText[0])
      return props.processedText.map((item) => {
        const frequency = parseFloat(item)
        return Math.abs(1200 * Math.log2(frequency / base))
      })
    })

    return { cents }
  },
})


</script>

<style>
li {
  list-style: none;
}

.cents-list {
  display: flex;
}
</style>