<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
  >
    <div
      v-swiper:projects="projectsOption"
      @sliderMove="onSwipeStart"
      @slideChangeTransitionEnd="onSwipeEnd"
    >
      <div class="swiper-wrapper">
        <div
          v-for="entry in slides"
          :key="entry.id"
          class="w-auto swiper-slide"
        >
          <div class="flex-auto max-w-450 max-w-350">
            <img
              :src="entry.project_promoted_screensave.url"
              :alt="entry.project_promoted_screensave.alt"
              class="w-full mb-2"
              width="450"
              height="450"
            >
            <h2
              class="text-xl font-bold"
            >
              {{ entry.project_promoted_title }}
            </h2>
          </div>
        </div>
      </div>
      <div class="swiper-pagination d-lg-none" />
    </div>
      <div class="hidden rightTransparency sm:block" :class="{'invisible': isSwiping}" />
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
          pagination: false, //{el: '.swiper-pagination', clickable: true}
        },
        isSwiping: false
      };
    },
    methods: {
      onSwipeStart() {
        this.isSwiping = true;
      },
      onSwipeEnd() {
        this.isSwiping = false;
      },
    }
  };
</script>

<style scoped>
  .rightTransparency {
    width: 15%;

    @screen sm {
      width: 22%;
    }

    @screen md {
      width: 35%;
    }

    @screen lg {
      display: none;
    }

    @screen xl {
      display: block;
      width: 22%;
    }
  }
</style>