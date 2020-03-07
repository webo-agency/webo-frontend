<template>
  <component
    :is="mainTag"
    class="min-h-mobile-screen"
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
      id: {
        type: String,
        default: "",
        required: false
      },
      link: {
        type: String,
        default: "",
        required: false
      },
      title: {
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
      }
    },
    mounted() {
      if (!this.$attrs.disabled && !this.$attrs.id) {
        this.$root.$emit("section", {
          id: this.mainId,
          title: this.mainTitle
        });
      }
    }
  };
</script>

<style scoped>

</style>
