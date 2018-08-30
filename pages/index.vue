<template>
  <div class="page index">
    <section>
      <cBanner></cBanner>
    </section>
    <section>
      <cAdvantages></cAdvantages>
    </section>
    <section>
      <cWork></cWork>
    </section>
    <section>
      <cTeam></cTeam>
    </section>
    <section>
      <cTechnologies></cTechnologies>
    </section>
    <section>
      <cPortfolio></cPortfolio>
    </section>
    <section>
      <cPartners></cPartners>
    </section>
    <section>
      <cContact></cContact>
    </section>
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
