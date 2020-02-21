<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class=""
  >
    <h2
      :class="subtitleClass"
      class="md-2 text-base md:text-sm lg:text-xl"
    >
      <em>{{ number != null ? number : '-' }}/ </em>
      <span v-html="subtitle" />
    </h2>
    <h1
      :class="titleClass"
      class="em-custom leading-none font-bold text-5xl md:text-5xl lg:text-7xl"
      v-html="title"
    />
  </component>
</template>

<script>
export default {
  name: "HeaderTitles",
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
    title: {
      type: String,
      default: "",
      required: false
    },
    titleClass: {
      type: String,
      default: "",
      required: false
    },
    subtitle: {
      type: String,
      default: "",
      required: false
    },
    subtitleClass: {
      type: String,
      default: "",
      required: false
    },
    number: {
      type: Number,
      default: null,
      required: false
    }
  }
}; 
</script>

<style scoped>
  .em-custom >>> em{
    @apply not-italic;
    @apply text-main;
  }
</style>
