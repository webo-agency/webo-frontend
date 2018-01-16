<template>
    <div class="baner">
        <div>
            <nuxt-link to="/">Strona główna</nuxt-link>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'c-baner'
  }
</script>

<style lang="scss" scoped>
    .baner {
        width: 100%;
        color: #fff;
        display: flex;
        justify-content: space-around;
    }
</style>
