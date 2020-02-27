<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    class="work"
  >
    Usługi
  </component>
</template>
<script>
export default {
  name: "SectionServices",
  props: {
    mainTag: {
      type: String,
      default: "div",
      required: false
    },
    mainClass: {
      type: String,
      default: "",
      required: false
    },
    mainId: {
      type: String,
      default: "services",
      required: false
    }
  },
  mounted() {
    if (!this.$attrs.disabled) {
      this.$root.$emit("section", {
        id: this.mainId,
        title: "Usługi"
      });
    }
  }
};
</script>
