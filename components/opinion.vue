<template>
  <div class="opinion">
    <h3
      class="text-base text-main text-xl font-bold mb-5"
    >
      {{ title }}
    </h3>
    <blockquote
      class="text-xl"
    >
      {{ content }}
    </blockquote>
    <div class="pl-10 mt-5">
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

<style lang="scss" scoped>
  .opinion {
    display: block;

    strong,
    em {
      display: block;
    }

    @media (min-width: 1024px) {
      max-width: 44%;
      flex: 0 0 44%;
      margin-bottom: 0;

      &:nth-child(2),
      &:nth-child(3) {
        max-width: 26%;
        flex: 0 0 26%;
        margin-bottom: 70px;
      }
    }
  }
</style>
