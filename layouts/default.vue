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
      var TawkApi = TawkApi || {};
      var Tawk_LoadStart = new Date(); /* eslint no-unused-vars: "off", camelcase: "off" */

      TawkApi.onLoad = function() {
        window.TawkApi.maximize();
        let TawkHandler = $('body').children().filter(function() {
          const regex = /^(\w+)-(\d+)$/g;
          const str = $(this).attr('id');

          while (regex.exec(str) !== null) {
            let m = regex.exec(str);
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
              regex.lastIndex++;
            }

            return $(m);
          }
        });
        $(TawkHandler).addClass('tawk-customize');
      };

      (function () {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/592181bc76be7313d291db5e/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
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
