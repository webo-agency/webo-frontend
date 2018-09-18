<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="portfolio">
        <div class="row">
            <div class="col">
                <h1 class="decoration">Portfolio</h1>

            </div>
        </div>
        <div class="row">
            <div class="col">

            </div>
        </div>
    </component>
</template>
<script>
  export default {
    name: 'cPortfolio',
    props: ['mainTag','mainClass','mainId'],
    mounted() {
      //
    }
  }
</script>

<style lang="scss" scoped>
    .portfolio{
        text-align: center;
    }
</style>
