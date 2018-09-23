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

<style lang="scss">
    .rocketchat-widget{
        position: sticky!important;
        width: 100%;
        height: 350px;
        bottom: 0px;
        right: 0px;
        z-index: 100!important;
        left: 0px;
        overflow: hidden;


        @media (min-width: 191px) {
            position: fixed!important;
            width: 100%;
            height: 350px;
            bottom: 0px;
            right: 0px;
            z-index: 12345;
            left: 0px;
            overflow: hidden;
        }
    }
</style>
