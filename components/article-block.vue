<template>
  <component
    :is="mainTag"
    :class="[mainClass, articleType === 'service' ? 'mb-8' : 'mb-4']"
  >
    <div
      class="artblock"
      :class="[ctaType !== null ? ctaStyle : {'text-black border border-main rounded-md p-5': dark}, articleClass]"
    >
      <img
        :src="require('~/assets/icons/' + icon)"
        :alt="iconAlt"
        class="w-auto h-12 mb-4"
        :class="{
          'xs:ml-6': list.length
        }"
      >
      <h1
        class="mb-4 text-base font-bold leading-tight"
        :class="{
          'md:text-2xl' : !ctaType,
          'text-3xl em-custom lg:pr-16' : ctaType,
          'xs:ml-6': list.length
        }"
        v-html="$md.renderInline(header)"
      />
      <p
        v-show="paragraph != ''"
        class="mb-4 text-xs leading-tight md:text-base"
        v-html="$md.renderInline(paragraph)"
      />
      <ul class="flex flex-col mb-5 text-xs font-medium break-all list-dash xs:break-normal xs:text-base">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="text-xs md:text-base"
        >
          {{ item.entry }}
        </li>
      </ul>
      <a
        v-show="link != ''"
        class="relative font-bold text-main"
        :href="link"
        :class="[ctaType !== '' ? 'text-xl' : 'text-xs', { 'xs:ml-6' : list.length }]"
      >
        {{ linkTitle }}
        <svg
          v-if="ctaType !== ''"
          viewBox="0 0 14 26"
          width="14"
          height="26"
          class="fill-current arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
        ><path
          d="M5.766.962V22.1l-4.111-4.11a.968.968 0 00-1.372 0 .966.966 0 000 1.377l5.733 5.74a.983.983 0 00.712.284.958.958 0 00.705-.283l5.74-5.741a.978.978 0 000-1.378.976.976 0 00-1.38 0L7.69 22.1V.962a.961.961 0 10-1.923 0z" 
        /></svg>
      </a>
      <img
        v-show="articleType === 'service'"
        :src="require('~/assets/icons/' + icon)"
        :alt="iconAlt"
        class="w-auto h-12 mb-4 gray-bg"
        :class="{
          'xs:ml-6': list.length
        }"
      >
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
    ctaType: {
      type: String,
      default: "",
      required: false
    },
    articleType: {
      type: String,
      default: "default",
      required: false,
    },
  }, 
  computed: {
    ctaStyle: function() {
        switch(this.ctaType) {
          case "light":
            return 'text-black border border-main rounded-md p-5';
          case "dark":
            return 'text-white bg-backgroundDark rounded-md p-5';

          default:
            return 'text-black rounded-md p-5';
        }
    },
    articleClass: function() {
      switch(this.articleType) {
        case "service":
          return '';
        
        default:
          return 'md:w-11/12'
      }
    },
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

  .arrow-right {
    transform: rotate(-90deg);
    position: absolute;
    right: -35px;
    top: 0;
    width: 11px;
  }

  .service .artblock {
      background-color: #F9F9F9;
      position: relative;
      overflow: hidden;
  }

  .gray-bg {
    filter: grayscale(100%);
    right: 35px;
    transform: scale(3);
    bottom: 4px;
  }
</style>