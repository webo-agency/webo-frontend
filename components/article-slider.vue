<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <div 
      v-swiper:articles="sliderOptions"
      class="w-full overflow-hidden relative"
    >
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div class="rightTransparency"></div>
    </div>
  </component>
</template>

<script>
  export default {
    name: "ArticleSlider",
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
    },
    data() {
      return {
        sliderOptions: {
          autoplay: 2000,
          slidesPerView: 1.2,
          pagination: false,
          loop: true,
        }
      };
    },
  };
</script>

<style lang="scss" scoped>

  .rightTransparency {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20%;
    height: 100%;
    background: rgba(255,255,255,.6);
    z-index: 9999;
  }
</style>