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
      <img
        :src="require('~/assets/icons/' + icon)"
        :alt="iconAlt"
        class="mb-4 w-auto h-12"
        :class="{
          'xs:ml-6': list.length
        }"
      >
      <h1
        class="mb-4 text-base leading-tight"
        :class="{
          'md:text-2xl font-bold' : !dark,
          'md:text-3xl em-custom font-semibold' : dark,
          'xs:ml-6': list.length
        }"
        v-html="$md.renderInline(header)"
      />
      <p
        v-if="paragraph != ''"
        class="mb-4 text-xs md:text-base leading-tight"
        v-html="$md.renderInline(paragraph)"
      />
      <ul class="flex flex-col font-medium list-dash mb-5 break-all xs:break-normal text-xs xs:text-base">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="text-xs md:text-base"
        >
          {{ item.entry }}
        </li>
      </ul>
      <a
        v-if="link != '' || link != ''"
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
    article: {
      type: Object,
      default: () => {},
      required: false
    },
    dark: {
      type: Boolean,
      default: false,
      required: false
    },
  }, 
  computed: {
    header: function(){
      return this.article.title ? this.$md.renderInline(this.article.title) : '';
    },
    paragraph: function(){
      return this.article.description ? this.$md.renderInline(this.article.description) : '';
    },
    list: function(){
      return this.article.list ? this.article.list : []
    },
    link: function(){
      return typeof this.article.link != 'undefined' ? this.article.link.hyperlink : this.article.link
    },
    linkTitle: function(){
      return typeof this.article.link != 'undefined' ? this.article.link.title : this.article.linkTitle
    },
    iconHref: function(){
      return this.article.icon
    },
    icon: function(){
      // console.log(this.article.icon); // eslint-disable-line
      switch (this.article.icon) {
        case 'a':
          return 'window-search.svg'
        case 'b':
          return 'ring-arrow.svg'
        case 'c':
          return 'laptop-tag.svg'
        case 'd':
          return 'corb-tag.svg'
        case 'e':
          return 'people-group.svg'
        case 'f':
          return 'square-dashes.svg'
        case 'g':
          return 'square-lines.svg'
        case 'h':
          return 'shield-pattern.svg'
        case 'i':
          return 'flask-liquid.svg'
        default:
          return 'question-mark.svg'
      }
    },
    iconAlt: function(){
      return ''
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