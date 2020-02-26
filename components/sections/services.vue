<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    class="work"
  >  
    <HeaderTitles 
      :number="1"
      :subtitle="$md.renderInline(sectionTitle)"
      :title="$md.renderInline(title)"
      class="mb-8"
    />
  </component>
</template>
<script>
  import HeaderTitles from "~/components/parts/header-titles.vue";
  
  export default {
    name: "SectionServices",
    components: {
      HeaderTitles
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
        default: "services",
        required: false
      },
      sectionTitle: {
        type: String,
        default: "Usługi",
        required: false
      },
      title: {
        type: String,
        default: "W czym możemy Ci <em>pomóc?</em>",
        required: false
      }
    },
    mounted() {
      if (!this.$attrs.disabled) {
        this.$root.$emit("section", {
          id: this.mainId,
          title: "Usługi"
        });
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
