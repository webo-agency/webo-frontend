<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class=""
  >
    <h2
      :class="subtitleClass"
      class="mb-2 xs:mb-1"
    >
      <em
        v-if="positionHeader"
        class="text-main not-italic font-bold"
      >{{ !numberHeader && positionHeader ? '-' : (numberHeader > 9 ? numberHeader : '0' + numberHeader ) }}/ </em>
      <span v-html="subtitle" />
    </h2>
    <h1
      :class="titleClass"
      class="em-custom font-extrabold"
      v-html="title"
    />
  </component>
</template>

<script>
export default {
  name: "SectionHeader",
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
      default: "leading-none text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-7xl",
      required: false
    },
    subtitle: {
      type: String,
      default: "",
      required: false
    },
    subtitleClass: {
      type: String,
      default: "text-xs xs:text-base md:text-sm lg:text-base",
      required: false
    },
    positionHeader: {
      type: Boolean,
      default: false,
      required: false
    },
    numberHeader: {
      type: Number,
      default: 0,
      required: false
    },
  }
}; 
</script>

<style scoped>
  .em-custom >>> em{
    @apply not-italic;
    @apply text-main;
  }
</style>
