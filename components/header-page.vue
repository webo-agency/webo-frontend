<template>
  <component
    :is="mainTag"
    v-if="title"
    :class="mainClass"
    :style="`background-image: url(${image});background-blend-mode: overlay;background-color: rgba(0, 0, 0, 0.8);background-attachment: fixed;background-size: cover;`"
  >
    <client-only>
      <h1
        v-if="title"
        class="em-custom font-extrabold container text-5xl lg:text-7xl leading-none text-white"
        v-html="$md.renderInline(title)"
      />
    </client-only>
  </component>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {
    mainTag: {
      type: String,
      default: "header",
      required: false
    },
    mainClass: {
      type: String,
      default: "h-auto lg:h-header mb-5 md:mb-10 lg:mb-20 flex items-center py-5",
      required: false
    },
    title: {
      type: String,
      default: "",
      required: false
    },
    image: {
      type: String,
      default: "",
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
