<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="partners">
        <div class="row">
            <div class="col">
                <h1 class="decoration">Partners</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <swiper :options="swiperOption" ref="partners">
                    <swiper-slide>
                        <img src="~/assets/logo/zadarma.svg" width="88" height="26"/>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="~/assets/logo/smartmage.svg" width="86" height="26"/>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="~/assets/logo/inkubatory.svg" width="104" height="26"/>
                    </swiper-slide>

                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
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
          a11y: false,
          slidesPerView: 3,
          loop: true
        }
      }
    },
    computed: {
      // swiper() {
      //   return this.$refs.partners.swiper
      // }
    },
    mounted() {
      // current swiper instance
      console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="scss" scoped>
    .partners{
        text-align: center;
    }



    .my-swiper {
        height: 300px;
        width: 100%;
        .swiper-slide {
            text-align: center;
            font-size: 38px;
            font-weight: 700;
            background-color: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .swiper-pagination {
            > .swiper-pagination-bullet {
                background-color: red;
            }
        }
    }
</style>
