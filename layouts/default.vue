<template>
  <div class="body">
      <header>
        <cHeader></cHeader>
      </header>
      <main>
          <nuxt />
          <div id="fast-contact" style="display: none" class="fast-contact">
              <svg width="100%" height="100%" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                    <g id="Head" transform="matrix(1,0,0,1,-3.002,-1.502)">
                        <path d="M25.503,39.002L2.999,39.002L2.999,1.499L40.502,1.499L40.502,23.997C40.502,32.277 33.777,39.002 25.503,39.002Z" style="fill:rgb(22,171,134);"/>
                        <path d="M27.75,17.249L21.75,20.999L15.75,17.249L15.75,15.749L21.75,19.499L27.75,15.749L27.75,17.249ZM27.75,14.249L15.75,14.249C14.921,14.249 14.258,14.92 14.258,15.749L14.25,24.749C14.25,25.578 14.921,26.249 15.75,26.249L27.75,26.249C28.579,26.249 29.25,25.578 29.25,24.749L29.25,15.749C29.25,14.92 28.579,14.249 27.75,14.249" style="fill:white;fill-rule:nonzero;"/>
                    </g>
                </svg>
          </div>
      </main>
      <footer>
        <cFooter></cFooter>
      </footer>
  </div>
</template>

<script>
  import cHeader from '~/components/header.vue'
  import cFooter from '~/components/footer.vue'

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
    background: rgb(30,28,27);
    font-family: Roboto, Arial, sans-serif;
  }

  .fast-contact{
    position: fixed;
    bottom: 15px;
    right: 15px;
    max-width: 50px;
    z-index: 2000000001;
    pointer-events: none;
  }
</style>
