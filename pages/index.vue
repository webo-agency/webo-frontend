<template>
  <div class="page index">
    <c-baner></c-baner>
    <c-contact></c-contact>
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
    }
  }
</script>
