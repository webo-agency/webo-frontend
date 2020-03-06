<template>
  <div class="flex flex-col min-h-screen min-w-container">
    <cHeader
      main-class="flex-0-auto"
      main-tag="header"
      dark-theme
    />
    <main class="flex flex-row relative flex-initial bg-white break-all xs:break-normal">
      <nuxt />
    </main>
    <cFooter
      main-class="flex-0-auto bg-white mt-auto bg-backgroundDark"
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
    mounted() {
      // this.$bugsnag.notify(new Error('Test'), { severity: 'info' });
    }
  };
</script>
