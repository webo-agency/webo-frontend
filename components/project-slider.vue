<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
  >
    <div
      v-swiper:projects="projectsOption"
    >
      <div class="swiper-wrapper">
        <div
          v-for="entry in slides"
          :key="entry.id"
          class="swiper-slide w-auto"
        >
          <div class="flex-auto max-w-450 max-w-350">
            <img
              :src="entry.url"
              :alt="entry.alt"
              class="mb-2 w-full"
              width="450"
              height="450"
            >
            <h2
              class="font-bold text-xl"
            >
              {{ entry.title }}
            </h2>
          </div>
        </div>
      </div>
      <div class="swiper-pagination d-lg-none" />
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
        default: "relative overflow-hidden",
        required: false
      },
      mainId: {
        type: String,
        default: "technology",
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
        projectsOption: {
          autoplay: 2000,
          slidesPerView: 'auto',
          spaceBetween: 50,
          pagination: false //{el: '.swiper-pagination', clickable: true}
        }
      };
    },
  };
</script>

<style scoped>

</style>