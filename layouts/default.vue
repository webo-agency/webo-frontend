<template>
  <div class="flex flex-col min-h-screen">
    <cHeader
      main-class="flex-0-auto"
      main-tag="header"
      dark-theme
    />
    <main class="flex flex-row relative flex-initial">
      <nuxt />
    </main>
    <cFooter
      main-class="flex-0-auto"
      main-tag="footer"
    />
  </div>
</template>

<script>
import cHeader from "~/components/header.vue";
import cFooter from "~/components/footer.vue";

export default {
  head: {},
  components: {
    cHeader,
    cFooter
  },
  data() {
    return {
      document: true
    };
  },
  // async asyncData({ params }) {
    // let { data } = await params.app.$prismic.api.getSingle("banner");
    // console.log(); // eslint-disable-line
    // return { document: data };
  // },
  mounted() {
    // this.$bugsnag.notify(new Error('Test'), { severity: 'info' });
  }
};
</script>
