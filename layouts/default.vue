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

<style lang="scss" scoped>
  .body {

  }
</style>
