<template>
  <ul class="flex flex-wrap max-w-85%">
    <CounterItem
      v-for="(item, index) in counters"
      :key="`${index}-${item.counter_title}`"
      :count-value="item.counter_value"
      :count-title="item.counter_title"
    />
  </ul>
</template>

<script>
export default {
  name: 'CountersList',
  props: {
    counters: {
      type: Array,
      default: function(){ return []; },
      required: false,
    }
  }
}
</script>
