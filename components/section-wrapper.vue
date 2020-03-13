<template>
  <component
    :is="mainTag"
    :id="mainId"
    class="relative"
    :class="{'min-h-mobile-screen' : !heightAuto}"
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
        default: "flex-col mt-10 mb-10 lg:mt-15vh lg:mb-15vh",
        required: false
      },
      heightAuto: {
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
