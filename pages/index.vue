<template>
  <div class="page index">
    <cBanner mainTag="section" mainClass="section d-none d-md-flex" mainId="banner"></cBanner>
    <cAdvantages mainTag="section" mainClass="section d-none d-md-flex" mainId="advantages"></cAdvantages>
    <cWork mainTag="section" mainClass="sectio d-none d-md-flexn" mainId="work"></cWork>
    <cTeam mainTag="section" mainClass="section d-none d-md-flex" mainId="team"></cTeam>
    <cTechnologies mainTag="section" mainClass="section d-none" mainId="technologies"></cTechnologies>
    <cPortfolio mainTag="section" mainClass="section d-none d-md-flex" mainId="portfolio"></cPortfolio>
    <cPartners mainTag="section" mainClass="section d-none" mainId="partners"></cPartners>
    <cContact mainTag="section" mainClass="section d-none d-md-flex" mainId="contact"></cContact>
  </div>
</template>

<script>
  import cBanner from '~/components/banner.vue';
  import cAdvantages from '~/components/advantages.vue';
  import cWork from '~/components/work.vue';
  import cTeam from '~/components/team.vue';
  import cTechnologies from "../components/technologies";
  import cPortfolio from '~/components/portfolio.vue';
  import cPartners from '~/components/partners.vue';
  import cContact from '~/components/contact.vue';

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
      cBanner,
      cAdvantages,
      cWork,
      cTeam,
      cTechnologies,
      cPortfolio,
      cPartners,
      cContact
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    position: relative;
  }
</style>

<style lang="scss">

</style>