<template>
  <div>
    <div
      v-swiper:opinionsSM="opinionOptionsSM"
      class="m-0 lg:hidden"
    >
      <div class="swiper-wrapper lg:flex-wrap justify-between h-auto">
        <div class="empty-opinion-space" />
        <Opinion
          v-for="(opinion, index) in slides"
          :key="index"
          :title="opinion.single_review_title"
          :content="opinion.single_review_description"
          :author="opinion.single_review_person"
          :company="opinion.single_review_company"
          class="swiper-slide w-auto"
        />
      </div>
      <div class="opinion-pagination" />
    </div>
    <div
      v-swiper:opinionsLG="opinionOptionsLG"
      class="m-0 hidden lg:block"
    >
      <div class="swiper-wrapper justify-between h-auto pb-8">
        <div
          v-for="(slide, index) in generateSlideBoards"
          :key="index"
          class="flex flex-wrap justify-between swiper-slide w-auto"
        >
          <div class="empty-opinion-space" />
          <Opinion
            v-for="opinion in slide"
            :key="opinion.id"
            :title="opinion.single_review_title"
            :content="opinion.single_review_description"
            :author="opinion.single_review_person"
            :company="opinion.single_review_company"
          />
        </div>
        <div class="opinion-pagination" />
      </div>
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
      opinionOptionsSM: {
        autoplay: 2000,
        slidesPerView: 2,
        spaceBetween: 50,
        pagination: this.slides.length > 1 ?  {
            el: '.opinion-pagination',
            clickable: true,
        } : false,
        breakpoints: {
          768: {
              slidesPerView: 1
          },
        },
      },
      opinionOptionsLG: {
        autoplay: 2000,
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: this.slides.length > 4 ? {
            el: '.opinion-pagination',
            clickable: true,
        } : false,
      },
    };
  },
  computed: {
    generateSlideBoards() {
        const slideSize = 4;
        const chunk = (sourceArray, chunkSize) =>
        Array.from({ length: Math.ceil(sourceArray.length / chunkSize) }, (v, i) =>
            sourceArray.slice(i * chunkSize, i * chunkSize + chunkSize)
        );
        const largeDeviceSlides = chunk(this.slides, slideSize);
        return largeDeviceSlides;
    }
  }
}
</script>

<style lang="postcss" scoped>

  .empty-opinion-space {
    display: none;
    margin-bottom: 70px;
    
    @media (min-width: 1024px) {
      display: block;
      max-width: 26%;
      flex: 0 0 26%;
    }
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