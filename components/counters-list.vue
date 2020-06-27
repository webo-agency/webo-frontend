<template>
  <ul class="flex flex-wrap max-w-85%">
    <CounterItem
      v-for="item in counters"
      :key="item.id"
      :count-value="item.count"
      :count-title="item.title"
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
