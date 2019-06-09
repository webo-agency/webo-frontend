<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    class="partners container"
  >
    <div class="row">
      <div class="col">
        <h1 class="partners--title decoration">
          Partnerzy
        </h1>
        <p>
          Ścisła współpraca by uzyskać więcej za mniej bez utraty jakości
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div
          v-swiper:mySwiper="swiperOption"
          @slideChange="slideChange"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="~/assets/logo/zadarma.svg"
                width="88"
                height="26"
                class="partners--img"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="~/assets/logo/smartmage.svg"
                width="86"
                height="26"
                class="partners--img"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="~/assets/logo/inkubatory.svg"
                width="104"
                height="26"
                class="partners--img"
              >
            </div>
          </div>
          <div class="swiper-pagination d-lg-none" />
        </div>
      </div>
    </div>
  </component>
</template>
<script>
export default {
  name: "CPartners",
  props: {
    mainTag: {
      type: String,
      default: "",
      required: false
    },
    mainClass: {
      type: String,
      default: "",
      required: false
    },
    mainId: {
      type: String,
      default: "",
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
        allowTouchMove: false,
        breakpoints: {
          768: {
            allowTouchMove: true,
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
  mounted() {
    if (!this.$attrs.disabled) {
      this.$root.$emit("section", {
        id: this.mainId,
        title: "Partnerzy"
      });
    }
  },
  methods: {
    slideChange() {
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.partners {
  text-align: center;
  margin-bottom: 110px;
}

.partners--title {
  margin-bottom: 55px;
}

.partners--img {
  height: 95px;
  width: 100%;
  max-height: 100%;
  padding: 0 30px;
}
</style>
