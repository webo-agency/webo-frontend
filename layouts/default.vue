<template>
  <main class="body">
    <nuxt />
    <c-footer></c-footer>
  </main>
</template>

<script>
  import $ from 'jquery';
  import cFooter from '~/components/c-footer.vue'

  export default {
    components: {
      cFooter
    },
    mounted: () => {
      TawkApi = window.TawkApi || {};
      TawkApi.onLoad = function() {
        TawkApi.maximize();
        let TawkHandler = $('body').children().filter(function(index) {
          const regex = /^(\w+)-(\d+)$/g;
          const str = $(this).attr('id');

          while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
              regex.lastIndex++;
            }

            return $(m);
          }
        });
        $(TawkHandler).addClass('tawk-customize');
      };
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
