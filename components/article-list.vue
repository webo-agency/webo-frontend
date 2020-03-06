<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
  >
    <div class="w-full flex flex-col xs:flex-row flex-wrap">
      <article-block
        v-for="(item, index) in articles"
        :key="index"
        :icon="item.icon"
        :header="$md.renderInline(item.header)"
        :paragraph="$md.renderInline(item.paragraph)"
        :list="item.list"
        :link-title="item.linkTitle"
        :link="item.link"
        main-class="flex-initial w-full xs:w-1/2 lg:w-1/3 mb-8 xs:px-2 md:px-0"
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
