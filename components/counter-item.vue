<template>
  <li class="counter-item">
    <div class="counter-item__inner">
      <div class="font-bold text-small-header text-main">
        {{ countValue }}
      </div>
      <h3
        class="text-base font-bold lg:text-big-paragraph"
        v-html="countTitle"
      />
    </div>
  </li>
</template>

<script>
export default {
  name: 'CounterItem',
  props: {
    countValue: {
      type: String || Number,
      default: '',
      required: false,
    },
    countTitle: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<style scoped>
  .counter-item {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 40px;

    @screen md {   
      flex: 0 0 50%;
      max-width: 50%;
    }

    @screen lg {   
      flex: 0 0 33%;
      max-width: 33%;
    }
  }

  .counter-item__inner {
    width: 200px;

    @screen md {   
      width: 230px;
    }
  }
</style>
