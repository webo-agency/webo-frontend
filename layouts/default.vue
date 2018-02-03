<template>
  <main class="body">
    <nuxt />
    <c-footer></c-footer>
    <div id="fast-contact" class="fast-contact">
      <svg width="100%" height="100%" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <g id="Head" transform="matrix(1,0,0,1,-3.002,-1.502)">
                <path d="M25.503,39.002L2.999,39.002L2.999,1.499L40.502,1.499L40.502,23.997C40.502,32.277 33.777,39.002 25.503,39.002Z" style="fill:rgb(22,171,134);"/>
                <path d="M27.75,17.249L21.75,20.999L15.75,17.249L15.75,15.749L21.75,19.499L27.75,15.749L27.75,17.249ZM27.75,14.249L15.75,14.249C14.921,14.249 14.258,14.92 14.258,15.749L14.25,24.749C14.25,25.578 14.921,26.249 15.75,26.249L27.75,26.249C28.579,26.249 29.25,25.578 29.25,24.749L29.25,15.749C29.25,14.92 28.579,14.249 27.75,14.249" style="fill:white;fill-rule:nonzero;"/>
            </g>
        </svg>
    </div>
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
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date(); /* eslint no-unused-vars: "off", camelcase: "off" */

      $("#fast-contact").click(function() {
        if (typeof Tawk_API === 'object') {
          if (typeof Tawk_API.maximize === 'function') {
            Tawk_API.maximize();
          }
        }
      });

      Tawk_API.onChatMaximized = function() {
        $("body").addClass("tawk-maximized");
      };

      Tawk_API.onChatMinimized = function() {
        $("body").addClass("tawk-minimized");
      };

      Tawk_API.onLoad = function() {
        $("body").addClass("tawk-loaded");
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

  .fast-contact{
    position: fixed;
    bottom: 15px;
    right: 15px;
    max-width: 50px;
  }
</style>
