<template>
  <div class="page index">
    <sectionBanner
      main-tag="section"
      main-class="section"
      main-id="banner"
    />
    <sectionAdvantages
      :disabled="true"
      main-tag="section"
      main-class="section"
      main-id="advantages"
    />
    <sectionWork
      :disabled="true"
      main-tag="section"
      main-class="section"
      main-id="work"
    />
    <sectionTeam
      :disabled="true"
      main-tag="section"
      main-class="section"
      main-id="team"
    />
    <sectionTechnologies
      :disabled="true"
      main-tag="section"
      main-class="section"
      main-id="technologies"
    />
    <sectionPortfolio
      :disabled="true"
      main-tag="section"
      main-class="section"
      main-id="portfolio"
    />
    <sectionPartners
      :disabled="true"
      main-tag="section"
      main-class="section"
      main-id="partners"
    />
    <sectionContact
      main-tag="section"
      main-class="section"
      main-id="contact"
    />
  </div>
</template>

<script>
  import sectionBanner from '~/components/banner.vue';
  import sectionAdvantages from '~/components/advantages.vue';
  import sectionWork from '~/components/work.vue';
  import sectionTeam from '~/components/team.vue';
  import sectionTechnologies from "../components/technologies";
  import sectionPortfolio from '~/components/portfolio.vue';
  import sectionPartners from '~/components/partners.vue';
  import sectionContact from '~/components/contact.vue';

  export default {
    components: {
      sectionBanner,
      sectionAdvantages,
      sectionWork,
      sectionTeam,
      sectionTechnologies,
      sectionPortfolio,
      sectionPartners,
      sectionContact
    },
    async fetch ({ store }) {
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
            name: 'description',
            content: 'We are webo - interdisciplinary agency opened for you needs'
          }
        ]
      }
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

    &[disabled]{
      display: none!important;
    }
  }
</style>

<style lang="scss">

</style>
