<template>
  <div class="page index">
    <sectionBanner
      main-tag="section"
      main-class="section"
      main-id="banner"
    />
    <sectionContact
      main-tag="section"
      main-class="section"
      main-id="contact"
    />
  </div>
</template>

<script>
import sectionBanner from "~/components/banner.vue";
import sectionContact from "~/components/contact.vue";

export default {
  components: {
    sectionBanner,
    sectionContact
  },
  async fetch(/* {  store  } */) {
    // let document = await store.$prismic.api.getSingle('banner', {
    //   lang : store.app.i18n.locales.find(x => x.code === store.state.i18n.locale).iso
    // });
    // store.commit('banner/load', document.data );
  },
  head() {
    return {
      title: `webo - Welcome in home of innovation`,
      meta: [
        {
          name: "description",
          content: "We are webo - interdisciplinary agency opened for you needs"
        }
      ]
    };
  },
  mounted() {  /*  */ }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  margin: auto;
}

.section {
  position: relative;

  &[disabled] {
    display: none !important;
  }
}
</style>

<style lang="scss"></style>
