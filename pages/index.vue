<template>
  <div class="page index">
    <cBanner mainTag="section" mainClass="section" mainId="banner"></cBanner>
    <cAdvantages mainTag="section" mainClass="section" mainId="advantages"></cAdvantages>
    <cWork mainTag="section" mainClass="section" mainId="work"></cWork>
    <cTeam mainTag="section" mainClass="section" mainId="team"></cTeam>
    <cTechnologies mainTag="section" mainClass="section" mainId="technologies"></cTechnologies>
    <cPortfolio mainTag="section" mainClass="section" mainId="portfolio"></cPortfolio>
    <cPartners mainTag="section" mainClass="section" mainId="partners"></cPartners>
    <cContact mainTag="section" mainClass="section" mainId="contact"></cContact>
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
