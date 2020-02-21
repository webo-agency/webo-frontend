<template>
  <div class="page index">
    <sectionBanner 
      dark
    />
    <!-- <sectionServices
      number="1" 
      main-tag="section"
    />
    <sectionTechnology
      number="2" 
      main-tag="section"
      dark
    />
    <sectionCompany
      number="3" 
      main-tag="section"
    />
    <sectionProjects
      number="4" 
      main-tag="section"
      grey
    />
    <sectionReviews
      main-tag="section"
    />
    <sectionPartners
      main-tag="section"
      grey
    />
    <sectionContact 
      dark
    /> -->
  </div>
</template>

<script>
  import sectionBanner from "~/components/sections/banner.vue";
  // import sectionServices from "~/components/sections/services.vue";
  // import sectionTechnology from "~/components/sections/technology.vue";
  // import sectionCompany from "~/components/sections/company.vue";
  // import sectionProjects from "~/components/sections/projects.vue";
  // import sectionReviews from "~/components/sections/reviews.vue";
  // import sectionPartners from "~/components/sections/partners.vue";
  // import sectionContact from "~/components/sections/contact.vue";

  export default {
    components: {
      sectionBanner,
      // sectionServices,
      // sectionTechnology,
      // sectionCompany,
      // sectionProjects,
      // sectionReviews,
      // sectionPartners
      // sectionContact
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
