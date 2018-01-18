<template>
    <div class="contact">
        <div class="contact--inner">
            <nuxt-link to="/">Strona główna</nuxt-link>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'v-contact'
  }
</script>

<style lang="scss" scoped>
    .contact {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        min-height: 100vh;
        width: 100%;
        background-image: url(/alice-achterhof-85968.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
    }

    .contact--inner{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
    }
</style>
