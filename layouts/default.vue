<template>
  <div class="flex flex-col min-h-screen bg-backgroundDark min-w-container">
    <LayoutHeader
      main-class="flex-0-auto"
      main-tag="header"
      dark-theme
    />
    <main class="relative flex flex-row flex-auto break-all bg-white xs:break-normal">
      <nuxt />
    </main>
    <LayoutFooter
      main-class="mt-auto bg-white flex-0-auto bg-backgroundDark"
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
