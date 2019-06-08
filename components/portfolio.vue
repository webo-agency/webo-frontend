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
          <h1 class="portfolio--title decoration">Portfolio</h1>
          <p>
            Nasze portfolio znajdziesz na Behance
          </p>
        </div>
      </div>
      <div class="row d-none">
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="https://placekitten.com/g/480/300"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="https://placekitten.com/g/480/300"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="https://placekitten.com/g/480/300"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="https://placekitten.com/g/480/300"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="https://placekitten.com/g/480/300"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="https://placekitten.com/g/480/300"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="https://placekitten.com/g/480/300"
            class="img-fluid"
          >
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <img
            src="https://placekitten.com/g/480/300"
            class="img-fluid"
          >
        </div>
      </div>
    </div>
  </component>
</template>
<script>
  export default {
    name: 'CPortfolio',
    props: {
      'mainTag': {
        type: String,
        default: '',
        required: false
      },
      'mainClass': {
        type: String,
        default: '',
        required: false
      },
      'mainId': {
        type: String,
        default: '',
        required: false
      }
    },
    mounted() {
      if(!this.$attrs.disabled) {
        this.$root.$emit(
          'section', {
            'id': this.mainId,
            'title': 'Portfolio'
          }
        );
      }
    }
  }
</script>

<style lang="scss" scoped>
    .portfolio{
        text-align: center;
        margin-bottom: 100px;
    }

    .portfolio--title{
        margin-bottom: 55px;
    }
</style>
