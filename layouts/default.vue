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
      Tawk_API = Tawk_API || {};
      Tawk_API.onLoad = function(){
        Tawk_API.maximize();
        var TAWK_Handler = $('body').children().filter(function( index ) {
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
        $(TAWK_Handler).addClass('tawk-customize');
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
