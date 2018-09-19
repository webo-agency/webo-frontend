<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="portfolio">
        <div class="row">
            <div class="col">
                <h1 class="portfolio--title decoration">Portfolio</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis harum hic ipsam
                    laudantium. Delectus eius, quam.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <img src="https://placekitten.com/g/480/300"/>
            </div>
            <div class="col-3">
                <img src="https://placekitten.com/g/480/300"/>
            </div>
            <div class="col-3">
                <img src="https://placekitten.com/g/480/300"/>
            </div>
            <div class="col-3">
                <img src="https://placekitten.com/g/480/300"/>
            </div>
            <div class="col-3">
                <img src="https://placekitten.com/g/480/300"/>
            </div>
            <div class="col-3">
                <img src="https://placekitten.com/g/480/300"/>
            </div>
            <div class="col-3">
                <img src="https://placekitten.com/g/480/300"/>
            </div>
            <div class="col-3">
                <img src="https://placekitten.com/g/480/300"/>
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
        margin-bottom: 100px;
    }

    .portfolio--title{
        margin-bottom: 55px;
    }
</style>
