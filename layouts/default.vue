<template>
  <div class="flex flex-col min-h-screen bg-backgroundDark min-w-container">
    <LayoutHeader
      main-class="flex-0-auto"
      main-tag="header"
      dark-theme
    />
    <main class="flex flex-row relative flex-auto bg-white break-all xs:break-normal">
      <nuxt />
    </main>
    <LayoutFooter
      main-class="flex-0-auto bg-white mt-auto bg-backgroundDark"
      main-tag="footer"
    />
  </div>
</template>

<script>
  export default {
    head: {},
    mounted() {
      // this.$bugsnag.notify(new Error('Test'), { severity: 'info' });
    }
  };
</script>
