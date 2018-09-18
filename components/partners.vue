<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="partners">
        <div class="row">
            <div class="col">
                <h1 class="decoration">Partners</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="~/assets/logo/zadarma.svg" width="88" height="26"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="~/assets/logo/smartmage.svg" width="86" height="26"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="~/assets/logo/inkubatory.svg" width="104" height="26"/>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </component>
</template>
<script>
  export default {
    name: 'cPartners',
    props: ['mainTag','mainClass','mainId'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .partners{
        text-align: center;
    }
</style>
