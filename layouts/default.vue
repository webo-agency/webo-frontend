<template>
  <div class="body">
      <p v-t="'welcome'"></p>
      <header>
        <cHeader></cHeader>
      </header>
      <main>
          <nuxt />
      </main>
      <footer>
        <cFooter></cFooter>
      </footer>
  </div>
</template>

<script>
  import cHeader from '~/components/header.vue';
  import cFooter from '~/components/footer.vue';

  export default {
    head: {},
    components: {
      cHeader,
      cFooter
    }
  }
</script>

<style lang="scss" scoped>
  .body {
    /*background: rgb(30,28,27);*/
    /*font-family: Roboto, Arial, sans-serif;*/
  }
</style>
