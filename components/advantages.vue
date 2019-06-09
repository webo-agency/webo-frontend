<template>
  <component
    :is="mainTag"
    :id="mainId" 
    :class="mainClass" 
    class="advantages"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-hg-4">
          <div class="advantages--tabs row">
            <span class="col h-100 d-flex align-center">
              <img
                class="img-fluid advantages--img"
                src="~/assets/tarcza-normal.svg"
                width="24px"
                height="29px"
              >
              <img
                class="img-fluid advantages--img is-hover"
                src="~/assets/tarcza-hover.svg"
                width="24px"
                height="29px"
              >
            </span>
            <span class="col h-100 d-flex align-center">
              <img
                class="img-fluid advantages--img"
                src="~/assets/sla-normal.svg"
                width="28px"
                height="29px"
              >
              <img
                class="img-fluid advantages--img is-hover"
                src="~/assets/sla-hover.svg"
                width="28px"
                height="29px"
              >
            </span>
            <span class="col h-100 d-flex align-center">
              <img
                class="img-fluid advantages--img"
                src="~/assets/innowacja-normal.svg"
                width="29x"
                height="28px"
              >
              <img
                class="img-fluid advantages--img is-hover"
                src="~/assets/innowacja-hover.svg"
                width="29x"
                height="28px"
              >
            </span>
          </div>
        </div>
        <div class="col">
          <p class="advantages--data">
            <span class="text-primary">SLA</span>
            <span class="text-secondary">(Service Level Agreement)</span>
            - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus at
          </p>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: "Advantages",
  props: {
    disable: {
      type: Boolean,
      default: false,
      required: false
    },
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
  mounted() {}
};
</script>

<style lang="scss" scoped>
.advantages {
  display: flex;
  flex-direction: row;
  background-color: rgb(240, 250, 247);
}

.advantages--tabs {
  align-items: center;
  height: 100%;
}

.advantages--img {
  position: relative;
  display: block;
  margin: auto;
  height: 100%;
  max-height: 125px;
  padding-left: 30px;
  padding-right: 30px;
  transition: 0.3s;

  &:hover {
    opacity: 0;
  }
}

.advantages--img.is-hover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
}

.advantages--img:hover + .advantages--img.is-hover {
  visibility: visible;
  opacity: 0.25;
}

.advantages--data {
  padding: 88px 120px 88px 130px;
  margin-bottom: 0;
}
</style>
