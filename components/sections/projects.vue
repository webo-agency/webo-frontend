<template>
  <component 
    :is="mainTag"
    :id="mainId" 
    :class="mainClass"
    class="portfolio"
  >
    <div class="container d-flex flex-column">
      <div class="row">
        <div class="col">
          <h1 class="portfolio--title decoration">
            Projects
          </h1>
          <p>
            Nasze portfolio znajdziesz na Behance
          </p>
        </div>
      </div>
      <div class="row d-none">
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="1px"
            height="1px"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="1px"
            height="1px"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="1px"
            height="1px"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="1px"
            height="1px"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="1px"
            height="1px"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="1px"
            height="1px"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="1px"
            height="1px"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="1px"
            height="1px"
            class="img-fluid"
          >
        </div>
      </div>
    </div>
  </component>
</template>
<script>
  import HeaderTitles from "~/components/parts/header-titles.vue";
  export default {
    name: "SectionProjects",
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
        default: "projects",
        required: false
      }
    },
    mounted() {
      if (!this.$attrs.disabled) {
        this.$root.$emit("section", {
          id: this.mainId,
          title: "Projekty"
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
.portfolio {
  text-align: center;
  margin-bottom: 100px;
}

.portfolio--title {
  margin-bottom: 55px;
}
</style>
