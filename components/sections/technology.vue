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
            <h1 class="decoration decoration--bottom-right">
              Technologie
            </h1>
            <div
              v-swiper:mySwiper="swiperOption"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  TEST 1
                </div>
                <div class="swiper-slide">
                  TEST 2
                </div>
                <div class="swiper-slide">
                  TEST 3
                </div>
              </div>
              <div class="swiper-pagination d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
  import HeaderTitles from "~/components/parts/header-titles.vue";
  
  export default {
    name: "SectionTechnology",
    components: {
      HeaderTitles
    },
    props: {
      mainTag: {
        type: String,
        default: "div",
        required: false
      },
      mainClass: {
        type: String,
        default: "",
        required: false
      },
      mainId: {
        type: String,
        default: "technology",
        required: false
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: 2000,
          slidesPerView: 3,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          loopAdditionalSlides: 3,
          breakpoints: {
            768: {
              centeredSlides: false,
              slidesPerView: 2
            },
            400: {
              centeredSlides: true,
              slidesPerView: 1
            }
          },
          pagination: false //{el: '.swiper-pagination', clickable: true}
        }
      };
    },
    mounted: function() {
      if (!this.$attrs.disabled) {
        this.$root.$emit("section", {
          id: this.mainId,
          title: "Technologie"
        });
      }
    },
  };
</script>

<style lang="scss">

</style>
