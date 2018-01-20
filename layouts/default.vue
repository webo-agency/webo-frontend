<template>
  <main class="body">
    <nuxt />
    <c-footer></c-footer>
  </main>
</template>

<script>
  import cFooter from '~/components/c-footer.vue'

  export default {
    components: {
      cFooter
    }
  }
</script>

<style lang="scss">
  @import '~normalize.css';

  .body {
    background: rgb(30,28,27);
    font-family: Roboto, Arial, sans-serif;
  }
</style>
