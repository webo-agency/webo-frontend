<template>
    <div class="footer">
        <div>
            © 2018
        </div>
        <div>
            NIP: 123-456-12-34
        </div>
        <div>
            REGON: 123456789
        </div>
        <div>
            <nuxt-link to="/">
                <img src="~assets/logo.png">
            </nuxt-link>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'c-footer'
  }
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        color: #fff;
        display: flex;
        justify-content: space-around;
    }
</style>
