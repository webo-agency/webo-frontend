<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="partners">
        <div class="row">
            <div class="col">
                <h1 class="decoration">Partners</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum, rerum. Ab aliquid
                    autem dolorum, ex nulla quod
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div v-swiper:mySwiper="swiperOption" @slideChange="slideChange">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="~/assets/logo/zadarma.svg" width="88" height="26" class="partners--img"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="~/assets/logo/smartmage.svg" width="86" height="26" class="partners--img"/>
                        </div>
                        <div class="swiper-slide">
                            <img src="~/assets/logo/inkubatory.svg" width="104" height="26" class="partners--img"/>
                        </div>
                    </div>
                    <div class="swiper-pagination d-lg-none"></div>
                </div>
            </div>
        </div>
    </component>
</template>
<script>
  export default {
    name: 'cPartners',
    props: ['mainTag','mainClass','mainId'],
    methods: {
      slideChange() {
        console.log('jea');
        return true;
      },
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          loopAdditionalSlides: 3,
          allowTouchMove: false,
          breakpoints: {
            768: {
              allowTouchMove: true
            }
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
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

    .partners--img{
        height: 95px;
        width: 100%;
        max-height: 100%;
    }
</style>
