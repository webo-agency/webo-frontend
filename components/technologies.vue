<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    class="technology"
  >
    <div class="technology--wrapper">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="decoration decoration--bottom-right">Technologies</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">

            <p class="technology--description">{{ technologyDescription }}</p>

            <div class="technology--carousel">
              <div
                v-swiper:technologyCarousel="swiperOption"
                @slideChange="slideChangeEvent"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="~/assets/logo/css.svg"
                      height="190"
                    >
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="~/assets/logo/html5.svg"
                      height="188"
                    >
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="~/assets/logo/java.svg"
                      height="213"
                    >
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="~/assets/logo/nginx.svg"
                      height="168"
                    >
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="~/assets/logo/php.svg"
                      height="138"
                    >
                  </div>
                </div>
              </div>
              <div
                id="technologyPagination"
                class="swiper-pagination technology--pagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
  export default {
    name: 'CTechnologies',
    props: {
      'mainTag': {
        type: String,
        default: '',
        required: false
      },
      'mainClass': {
        type: String,
        default: '',
        required: false
      },
      'mainId': {
        type: String,
        default: '',
        required: false
      }
    },
    data() {
      return {
        technologyDescription: "",
        technologyArray: [
          "CSS",
          "HTML5",
          "java",
          "Nginx",
          "PHP"
        ],
        swiperOption: {
          slidesPerView: 5,
          centeredSlides: true,
          loop: true,
          loopAdditionalSlides: 5,
          allowTouchMove: true,
          breakpoints: {
            900: {
              slidesPerView: 4,
              centeredSlides: false
            },
            768: {
              slidesPerView: 3,
              centeredSlides: true
            },
            400: {
              slidesPerView: 1
            }
          },
          slideToClickedSlide: true,
          pagination: {
            el: '#technologyPagination',
            clickable: true
          }
        }
      }
    },
    mounted: function () {
      this.slideChangeEvent();

      this.$root.$emit(
        'section', {
          'id': this.mainId,
          'title': 'Technologie'
        }
      );
    },
    methods: {
      slideChangeEvent() {
        this.technologyDescription = this.technologyArray[this.technologyCarousel.realIndex];
      }
    }
  }
</script>

<style lang="scss" >
    .technology{
        margin-bottom: 140px;
        text-align: center;
    }

    .technology--wrapper{
        position: relative;
        margin: auto;
        padding: 240px 0;
        overflow: hidden;
    }

    .technology--wrapper:before{
        content: '';
        position: absolute;
        left: 50%;
        right: 0;
        top: 0;
        height: 1020px;
        width: 1020px;
        margin: auto;
        border-radius: 100%;
        border-width: 8px;
        border-color:  rgb(197,217,45);
        border-style: solid;
        transform: translate(-50%,0);
    }

    .technology--description{
        min-height: 150px;
        font-size: 29px;
    }

    .technology--carousel{
        margin-bottom: 80px;
    }

    .technology--carousel .swiper-container{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        padding: 25px 0;
    }

    .technology--carousel .swiper-wrapper{
        align-items: center;
    }

    .technology--carousel .swiper-slide{
        opacity: 0.25;
        transition: all 0.3s;
    }

    .technology--carousel .swiper-slide img{
        height: 100%;
        width: 129px;
        max-height: 150px;
    }

    .technology--carousel .swiper-slide:hover,
    .technology--carousel .swiper-slide-active{
        opacity: 1;
    }

    .technology--pagination,
    .technology--pagination.swiper-pagination {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%,0);
    }

    .technology--pagination .swiper-pagination-bullet{
        margin: 0 5px;
        height: 7px;
        width: 34px;
        border-radius: 5px;
        background: #53657D;
        transition: all 0.3s;
        cursor: pointer;
    }

    .technology--pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{
        background: linear-gradient(to right, rgb(238,244,192) 0%,rgb(197,217,45) 100%);
    }
</style>
