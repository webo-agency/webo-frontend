<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
  >
    <ArticleSlider
      v-if="isMobileSlider"
      class="p-0 md:hidden"
    >
      <article-block
        v-for="(item, index) in articles"
        :key="index"
        :article="item"
        main-class="w-auto mt-5 mb-5 md:mt-10 md:mb-10 xs:pr-4 md:pr-0 swiper-slide"
      />
    </ArticleSlider>
    <div
      class="flex flex-col flex-wrap w-full xs:flex-row"
      :class="{'hidden md:flex' : isMobileSlider}"
    >
      <article-block
        v-for="(item, index) in articles"
        :key="index"
        :article="item"
        main-class="flex-initial w-full mt-5 mb-5 sm:w-1/2 lg:w-1/3 md:mt-10 md:mb-10 xs:pr-4 md:pr-0"
      />
      <article-block
        v-if="JSON.stringify(more) != '{}'"
        :article="moreInject"
        main-class="flex-initial w-full mt-5 mb-5 sm:w-1/2 lg:w-1/3 md:mt-10 md:mb-10 xs:pr-4 md:pr-0"
        :cta-type="ctaType"
      />
    </div>
  </component>
</template>
<script>
  import ArticleBlock from "~/components/article-block.vue";
  
  export default {
    name: "ArticleList",
    components: {
      ArticleBlock
    },
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
      mainId: {
        type: String,
        default: "",
        required: false
      },
      sectionTitle: {
        type: String,
        default: "",
        required: false
      },
      title: {
        type: String,
        default: "W czym możemy Ci <em>pomóc?</em>",
        required: false
      },
      articles: {
        type: Array,
        default: function(){ return []; },
        required: true
      },
      more: {
        type: Object,
        default: function(){ return {}; },
        required: false
      },
      ctaType: {
        type: String,
        default: "",
        required: false
      },
      isMobileSlider: {
        type: Boolean,
        default: false,
        required: false,
      }
    },
    computed: {
      moreInject: function(){
        return this.more
      }
    },
    mounted() {
      if (!this.$attrs.disabled) {
        this.$root.$emit("section", {
          id: this.mainId,
          title: this.sectionTitle
        });
      }
    }
  };
</script>