<template>
    <div class="body">
        <cHeader mainTag="header"></cHeader>
        <main>
            <nuxt />
        </main>
        <cFooter mainTag="footer"></cFooter>
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
      /*position: relative;*/
      /*overflow-y: scroll;*/
    /*background: rgb(30,28,27);*/
    /*font-family: Roboto, Arial, sans-serif;*/
  }
</style>
