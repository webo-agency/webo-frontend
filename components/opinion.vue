<template>
  <div class="opinion">
    <h3
      class="mb-5 text-base text-xl font-bold text-main"
    >
      {{ title }}
    </h3>
    <blockquote
      class="text-xl"
    >
      {{ content }}
    </blockquote>
    <div class="mt-5">
      <cite>
        <strong>{{ author }}</strong>
        <em>{{ company }}</em>
      </cite>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opinion',
  props: {
    title: {
      type: String,
      default: "",
      required: false,
    },
    content: {
      type: String,
      default: "",
      required: false,
    },
    author: {
      type: String,
      default: "",
      required: false,
    },
    company: {
      type: String,
      default: "",
      required: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
  .opinion {
    display: block;

    strong,
    em {
      display: block;
    }
  }
</style>
