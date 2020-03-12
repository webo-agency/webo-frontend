<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class="mb-4"
  >
    <div
      class="md:w-2/3"
      :class="{
        'bg-backgroundDark text-white rounded-md p-5' : dark
      }"
    >
      <h1
        class="mb-4 text-base leading-tight"
        :class="{
          'xs:ml-6 md:text-2xl font-bold' : !dark,
          'md:text-3xl em-custom font-semibold' : dark
        }"
        v-html="$md.renderInline(header)"
      />
      <p
        v-if="paragraph != ''"
        class="mb-4 text-xs md:text-base"
        v-html="$md.renderInline(paragraph)"
      />
      <ul class="flex flex-col font-medium list-dash mb-5 break-all xs:break-normal text-xs xs:text-base">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="text-xs md:text-base"
        >
          {{ typeof item != 'string' ? item.entry : item }}
        </li>
      </ul>
      <a
        v-if="link != ''"
        class="text-main font-medium"
        :href="link"
        :class="{
          'xs:ml-6' : list.length
        }"
      >
        {{ linkTitle }}
      </a>
    </div>
  </component>
</template>

<script>
export default {
  name: "ArticleBlock",
  props: {
    mainTag: {
      type: String,
      default: "article",
      required: false
    },
    mainClass: {
      type: String,
      default: "z-20",
      required: false
    },
    header: {
      type: String,
      default: "",
      required: false
    },
    paragraph: {
      type: String,
      default: "",
      required: false
    },
    list: {
      type: Array,
      default: function(){
          return [];
      },
      required: false
    },
    link: {
      type: String,
      default: "",
      required: false
    },
    linkTitle: {
      type: String,
      default: "#",
      required: false
    },
    dark: {
      type: Boolean,
      default: false,
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