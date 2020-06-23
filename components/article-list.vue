<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
  >
    <div
      class="w-full flex flex-col xs:flex-row flex-wrap"
      :class="articleListClass"
    >
      <article-block
        v-for="(item, index) in articles"
        :key="index"
        :article="item"
        main-class="flex-initial w-full sm:w-1/2 xs:pr-4 md:pr-0"
        :article-type="articleType"
        :class="articleClass"
      />
      <article-block
        v-if="JSON.stringify(more) != '{}'"
        :article="moreInject"
        main-class="flex-initial w-full sm:w-1/2 lg:w-1/3 mt-5 mb-5 md:mt-10 md:mb-10 xs:pr-4 md:pr-0"
        :cta-type="ctaType"
      /> 
    </div>
  </component>
</template>
<script>  
  export default {
    name: "ArticleList",
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
      articleType: {
        type: String,
        default: "default",
        required: false,
      },
    },
    computed: {
      articleClass: function() {
        switch(this.articleType) {
          case "service":
            return 'lg:w-full-8/2 mt-2 mb-2 service';

          default:
            return 'lg:w-1/3 mt-5 mb-5 md:mt-10 md:mb-10 text-black rounded-md p-5';
        }
      },
      articleListClass: function() {
        switch(this.articleType) {
          case "service":
            return 'justify-between';

          default:
            return '';
        }
      },
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

<style lang="scss" scoped>
</style>
