<template>
  <div class="page index">

    <div id="intro" class="section">
        <c-baner></c-baner>
    </div>

    <div id="contact" class="section">
        <c-contact></c-contact>
    </div>
  </div>
</template>

<script>
  import cBaner from '~/components/c-baner.vue'
  import cContact from '~/components/c-contact.vue'

  export default {
    head() {
      return {
        title: `webo - Welcome in home of innovation`,
        meta: [
          {
            name: 'description',
            content: 'We are webo - interdisciplinary agency opened for you needs'
          }
        ]
      }
    },
    components: {
      cBaner,
      cContact
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    position: relative;
  }

  .section-nav{
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100%;
    z-index: 100;

    @media(min-width: 992px){
      display: block;
    }
  }

  .section-nav--item{
    position: absolute;
    top: 0;
    bottom: auto;
    transition: all 0.3s;
    visibility: hidden;
    opacity: 0;

    &:not(.is-active){
      visibility: visible;
      opacity: 1;
    }
  }

  .section-nav--item + .section-nav--item{
    top: auto;
    bottom: 0;
    transform: rotate(180deg);
  }

  .section-nav--img{
    width: 100px;
    height: 100px;
    margin: 30px 0;
  }
</style>
