<template>
  <component
    :is="mainTag"
    v-if="content"
    :class="mainClass"
  >
    <client-only>
      <div
        class="content container mb-5 md:mb-10 lg:mb-20"
        v-html="content"
      />
    </client-only>
  </component>
</template>

<script>
export default {
  name: "ContentPage",
  props: {
    mainTag: {
      type: String,
      default: "header",
      required: false
    },
    mainClass: {
      type: String,
      default: "",
      required: false
    },
    content: {
      type: String,
      default: "",
      required: false
    },
  },
}; 
</script>

<style type="postcss" scoped>
  .content >>> h1 {
    @apply text-7xl mb-5;
  }
  
  .content >>> h2 {
    @apply text-5xl mb-5;
  }
  
  .content >>> h3 {
    @apply text-4xl mb-5;
  }
  
  .content >>> h4 {
    @apply text-3xl mb-5;
  }
  
  .content >>> h5 {
    @apply text-2xl mb-5;
  }
  
  .content >>> h6 {
    @apply text-xl mb-5;
  }
  
  .content >>> p {
    @apply text-base mb-5;
  }
  
  .content >>> ul {
    @apply list-disc ml-5 mb-5;
  }
  
  .content >>> ol {
    @apply list-decimal ml-5 mb-5;
  }

  .content >>> ul ul,
  .content >>> ul ol,
  .content >>> ol ol,
  .content >>> ol ul{
    @apply mt-4;
  }

  .content >>> li {
    @apply mb-5;
  }

  .content >>> hr {
    @apply mb-5;
  }
</style>
