<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <div 
      v-swiper:slider="sliderOptions"
      class="w-full overflow-hidden"
    >
      <div class="swiper-wrapper">
        <div
          v-for="entry in slides"
          :key="entry.id"
          class="swiper-slide w-auto"
        >
          <div class="flex-auto flex flex-col items-center mx-5">
            <img
              :src="entry.url"
              :alt="entry.alt"
              class="h-16 object-contain"
            >
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
  export default {
    name: "CSlider",
    props: {
      mainTag: {
        type: String,
        default: "div",
        required: false
      },
      mainClass: {
        type: String,
        default: "container flex flex-col",
        required: false
      },
      slides: {
        type: Array,
        default: () => [],
        required: false  
      }
    },
    data() {
      return {
        sliderOptions: {
          autoplay: 2000,
          slidesPerView: 5,
          loop: true,
          pagination: false,
          centeredSlides: true,
          breakpoints: {
            1024: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 3
            },
            560: {
              slidesPerView: 2
            },
            400: {
              slidesPerView: 1
            }
          },
        }
      };
    },
  };
</script>

<style scoped>

</style>