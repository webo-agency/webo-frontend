<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <div 
      v-if="slides.length > 0"
      v-swiper:logos="sliderOptions"
      class="w-full overflow-hidden"
    >
      <div class="swiper-wrapper">
        <div
          v-for="entry in slides"
          :key="entry.id"
          class="swiper-slide w-auto"
        >
          <div class="flex-auto flex flex-col items-center mx-5">
            <a
              v-if="entry.mark_url"
              :href="entry.mark_url"
              :title="entry.mark_logo.alt"
              target="_blank"
            >
              <picture>
                <!-- <source
                  :srcset="`${entry.mark_logo.url}`"
                  :media="`(min-width: ${entry.mark_logo.sizes['medium_large-width']})`"
                  :type="`${entry.mark_logo.mime_type}`"
                >
                <source
                  :srcset="`${entry.mark_logo.sizes.medium}`"
                  :media="`(min-width: ${entry.mark_logo.sizes['medium-width']})`"
                  :type="`${entry.mark_logo.mime_type}`"
                > -->
                <img 
                  :src="`${entry.mark_logo.url}`" 
                  class="h-16 object-contain logo-slide-img lazyload" 
                  :alt="entry.mark_logo.alt"
                >
              </picture>
            </a>
            <img
              v-else
              :src="entry.mark_logo.url"
              :alt="entry.mark_logo.alt"
              class="h-16 object-contain logo-slide-img"
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
        default: "container relative overflow-hidden flex flex-col",
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
              centeredSlides: false,
              slidesPerView: 2
            },
          },
        }
      };
    },
  };
</script>

<style lang="postcss" scoped>

  .logo-slide-img {
    filter: grayscale(100%) brightness(167%) contrast(0%);
    transition: filter .4s;

    &:hover {
      filter: none;
    }
  }

</style>