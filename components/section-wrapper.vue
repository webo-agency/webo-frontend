<template>
  <component
    :is="mainTag"
    :id="mainId"
    :disabled="mainDisabled"
    :class="{'min-h-mobile-screen' : !heightAuto, 'relative': true}"
    v-bind="$attrs"
  >
    <div 
      class="container flex"
      :class="{
        [containerClass] : containerClass
      }"
    >
      <slot />
    </div>
  </component>
</template>
<script>
  export default {
    name: "SectionWrapper",
    props: {
      mainTag: {
        type: String,
        default: "section",
        required: false
      },
      mainId: {
        type: String,
        default: "",
        required: false
      },
      mainTitle: {
        type: String,
        default: "",
        required: false
      },
      link: {
        type: String,
        default: "",
        required: false
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      },
      containerRow: {
        type: Boolean,
        default: false,
        required: false
      },
      containerClass: {
        type: String,
        default: "container flex flex-col mt-10 mb-10 lg:mt-section-lg lg:mb-section-lg",
        required: false
      },
      heightAuto: {
        type: Boolean,
        default: false,
        required: false
      },
      mainDisabled: {
        type: Boolean,
        default: false,
        required: false
      },
    },
    mounted() {
      if (!this.$attrs.disabled && this.mainId != '' && this.mainTitle != '') {
        this.$root.$emit("section", {
          id: this.mainId,
          title: this.mainTitle
        });
      }
    },
    beforeDestroy(){
      // this.$root.$emit("removeSection", {
      //   id: this.mainId,
      //   title: this.mainTitle
      // });
    }
  };
</script>

<style scoped>

</style>
