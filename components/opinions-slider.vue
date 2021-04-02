<template>
  <div>
    <div
      v-swiper:opinionsSM="opinionOptions"
      class="m-0 opinion-slider"
      @slideChangeTransitionStart="onSwipeStart"
      @slideChangeTransitionEnd="onSwipeEnd"
    >
      <div class="swiper-wrapper">
        <Opinion
          v-for="(opinion, index) in slides"
          :key="index"
          :title="opinion.single_review_title"
          :content="opinion.single_review_description"
          :author="opinion.single_review_person"
          :company="opinion.single_review_company"
          class="w-auto text-center swiper-slide"
        />
      </div>
      <div class="opinion-pagination" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OpinionsSlider",
  props: {
    slides: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  data() {
    return {
      opinionOptions: {
        autoplay: 2000,
        slidesPerView: 1,
        pagination: {
            el: '.opinion-pagination',
            clickable: true,
        },
      },
    };
  },
}
</script>

<style lang="postcss" scoped>

  .opinion-slider {
    max-width: 450px;
    margin: 0 auto;
  }

  .opinion-slide {
    display: flex;
  }

  .opinion-pagination {

    .swiper-pagination-bullet {
      border-radius: none!important;
      width: 15px!important;
      height: 15px!important;

      &-active {
        background: rgb(0, 224, 180);
      }
    }
  }
</style>