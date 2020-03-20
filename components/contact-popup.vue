<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
  >
    ContactPopup
  </component>
</template>
<script>
export default {
  name: "ContactPopup",
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
  mounted() {}
};
</script>
