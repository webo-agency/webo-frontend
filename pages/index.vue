<template>
  <div class="page index">

    <section id="intro" class="section">
        <c-baner></c-baner>
    </section>

    <section id="contact" class="section">
        <c-contact></c-contact>
    </section>

    <scrollactive active-class="active"
                  :alwaysTrack="true"
                  :offset="0"
                  :duration="800"
                  bezier-easing-value=".5,0,.35,1"
                  ref="scrollactive" class="section-nav">
      <a href="#intro" class="scrollactive-item">Intro</a>
      <a href="#contact" class="scrollactive-item">Contact</a>
    </scrollactive>

  </div>
</template>

<script>
  import cBaner from '~/components/c-baner.vue'
  import cContact from '~/components/c-contact.vue'

  export default {
    head() {
      return {
        title: `webo.design`,
        meta: [
          {
            name: 'description',
            content: 'webo.design'
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
    position: absolute;
    top: 0;
    right: 0;
    height: 0;
  }
</style>
