<template>
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <h2
      :class="subtitleClass"
      class="mb-2 xs:mb-1"
    >
      <em
        v-if="positionHeader"
        class="text-main not-italic font-bold"
      >{{ !numberHeader ? '-' : (numberHeader > 9 ? numberHeader : '0' + numberHeader ) }}/ </em>
      <client-only>
        <span v-html="subtitleFormatted" />
      </client-only>
    </h2>
    <client-only>
      <h1
        :class="titleClass"
        class="em-custom font-extrabold"
        v-html="titleFormatted"
      />
    </client-only>
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
      default: "leading-none text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-medium-header",
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
  },
  computed: {
    titleFormatted () {
      return this.title ? this.$md.renderInline(this.title) : ''
    },
    subtitleFormatted () {
      return this.subtitle ? this.$md.renderInline(this.subtitle) : ''
    }
  },
}; 
</script>

<style scoped>
  .em-custom >>> em{
    @apply not-italic;
    @apply text-main;
  }
</style>
