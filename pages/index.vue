<template>
  <div class="page index">
    <cBanner
      main-tag="section"
      main-class="section"
      main-id="banner"
    />
    <!--<cAdvantages-->
      <!--main-tag="section"-->
      <!--main-class="section"-->
      <!--main-id="advantages"-->
    <!--/>-->
    <!--<cWork-->
      <!--main-tag="section"-->
      <!--main-class="sectio"-->
      <!--main-id="work"-->
    <!--/>-->
    <!--<cTeam-->
      <!--main-tag="section"-->
      <!--main-class="section"-->
      <!--main-id="team"-->
    <!--/>-->
    <!--<cTechnologies-->
      <!--main-tag="section"-->
      <!--main-class="section"-->
      <!--main-id="technologies"-->
    <!--/>-->
    <!--<cPortfolio-->
      <!--main-tag="section"-->
      <!--main-class="section"-->
      <!--main-id="portfolio"-->
    <!--/>-->
    <cPartners
      main-tag="section"
      main-class="section"
      main-id="partners"
    />
    <cContact
      main-tag="section"
      main-class="section"
      main-id="contact"
    />
  </div>
</template>

<script>
  import cBanner from '~/components/banner.vue';
  // import cAdvantages from '~/components/advantages.vue';
  // import cWork from '~/components/work.vue';
  // import cTeam from '~/components/team.vue';
  // import cTechnologies from "../components/technologies";
  // import cPortfolio from '~/components/portfolio.vue';
  import cPartners from '~/components/partners.vue';
  import cContact from '~/components/contact.vue';

  export default {
    async fetch ({ store }) {
      let document = await store.$prismic.api.getSingle('banner', {
        lang : store.app.i18n.locales.find(x => x.code === store.state.i18n.locale).iso
      });
      store.commit('banner/load', document.data );
    },
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
      cBanner,
      // cAdvantages,
      // cWork,
      // cTeam,
      // cTechnologies,
      cPortfolio,
      cPartners,
      cContact
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    width: 100%;
    margin: auto;
  }

  .section {
    position: relative;
  }
</style>

<style lang="scss">

</style>
