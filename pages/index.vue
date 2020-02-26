<template>
  <div class="w-full m-auto">
    <sectionBanner
      class="relative"
      dark
    />
    <!-- <sectionServices
      class="relative"
      number="1" 
      main-tag="section"
    />
    <sectionTechnology
      class="relative"
      number="2" 
      main-tag="section"
      dark
    />
    <sectionCompany
      class="relative"
      number="3" 
      main-tag="section"
    />
    <sectionProjects
      class="relative"
      number="4" 
      main-tag="section"
      grey
    />
    <sectionReviews
      class="relative"
      main-tag="section"
    />
    <sectionPartners
      class="relative"
      main-tag="section"
      grey
    />
    <sectionContact
      class="relative"
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
