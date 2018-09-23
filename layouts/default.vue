<template>
    <div class="body">
        <cHeader class="header" mainTag="header"></cHeader>
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

</style>
