<template>
  <div class="body">
    <cHeader
      main-class="top"
      main-tag="header"
    />
    <main class="main">
      <nuxt />
    </main>
    <cFooter
      main-class="bottom"
      main-tag="footer"
    />
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
    },
    mounted(){
      // this.$bugsnag.notify(new Error('Test'), { severity: 'info' });
    }
  }
</script>

<style lang="scss" scoped>
    .body{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .top,
    .bottom{
        flex: 0 0 auto;
    }

    .main{
        display: flex;
        position: relative;
        flex-direction: row;
        flex: 1 1 auto;
    }
</style>
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
