<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="advantages">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="advantages--tabs row">
                        <span class="col h-100 d-flex align-center">
                            <img class="img-fluid advantages--img" src="~/assets/tarcza-normal.svg" height="89" />
                            <img class="img-fluid advantages--img is-hover" src="~/assets/tarcza-hover.svg" height="89" />
                        </span>
                        <span class="col h-100 d-flex align-center">
                            <img class="img-fluid advantages--img" src="~/assets/sla-normal.svg" height="89" />
                            <img class="img-fluid advantages--img is-hover" src="~/assets/sla-hover.svg" height="89" />
                        </span>
                        <span class="col h-100 d-flex align-center">
                            <img class="img-fluid advantages--img" src="~/assets/innowacja-normal.svg" height="89" />
                            <img class="img-fluid advantages--img is-hover" src="~/assets/innowacja-hover.svg" height="89" />
                        </span>
                    </div>
                </div>
                <div class="col">
                    <p class="advantages--data">
                        <span class="text-primary">SLA</span> <span class="text-secondary">(Service Level Agreement)</span>
                        - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                    </p>
                </div>
            </div>
        </div>
    </component>
</template>
<script>
  export default {
    name: 'cAdvantages',
    props: ['mainTag','mainClass','mainId'],
    mounted() {
      //
    }
  }
</script>

<style lang="scss" scoped>
    .advantages{
        display: flex;
        flex-direction: row;
        background-color: rgb(240,250,247);
    }

    .advantages--tabs{
        align-items: center;
        height: 100%;
        margin-left: -30px;
        margin-right: -30px;
    }

    .advantages--img{
        position: relative;
        display: block;
        margin: auto;
        height: 100%;
        max-height: 125px;
        margin-left: 30px;
        margin-right: 30px;
        transition: 0.3s;

        &:hover{
            opacity: 0;
        }
    }

    .advantages--img.is-hover{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
        pointer-events: none;
    }


    .advantages--img:hover + .advantages--img.is-hover{
        visibility: visible;
        opacity: 0.25;
    }

    .advantages--data{
        padding: 88px 120px 88px 130px;
        margin-bottom: 0;
    }
</style>
