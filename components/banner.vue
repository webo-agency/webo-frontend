<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    class="banner px-35"
  >
    <div class="container">
      <div class="row">
        <div class="banner--wrapper col-12 col-hg-7">
          <h1 class="banner--title decoration">
            Streaming innowacji
          </h1>
          <p class="banner--paragraph">
            Pracując ściśle i z pasją wdrażamy nowe rozwiązania jak również dbamy o te istniejące systemy by osiągnąć wspólnie zamierzony biznesowy cel.
            (Strona nadal w trakcie tworzenia :))
          </p>
          <button class="banner--button btn btn-secondary">
            Rozpocznij z nami projekt
          </button>
        </div>
        <div class="col-5 d-none d-hg-flex">
          <img
            src="~/assets/planeta.png"
            class="img-fluid m-auto banner--image"
          >
        </div>
      </div>
    </div>
  </component>
</template>
<script>
  export default {
    name: 'CBanner',
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
    data() {
      return {
        title: "",
        document: "TEST"
      }
    },
    mounted() {
      this.$root.$emit(
        'section', {
          'id': this.mainId,
          'title': 'O nas'
        }
      );
    },
  }
</script>

<style lang="scss" scoped>
  .banner {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
    min-width: 100vw;
    height: 100%;
    overflow: hidden;
  }

  .banner--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    margin-bottom: 15px;
    /*padding-left: 5px;*/
    /*padding-right: 5px;*/
    max-width: 600px;
    margin-top: 15px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: rgb(22, 171, 134);
      width: 100%;
      border-radius: 10px;
    }

    @media (min-width: 191px) {
      padding-bottom: 15px;
      /*padding-left: 15px;*/
      /*padding-right: 15px;*/
      /*margin-top: calc(25px + 5vh);*/
      /*margin-bottom: calc(25px + 5vh);*/
    }

    @media (min-width: 320px) {
      /*padding-left: 30px;*/
      /*padding-right: 30px;*/
      padding-top: 30px;
    }

    @media (min-width: 360px) {
      /*margin-top: calc(50px + 5vh);*/
      /*margin-bottom: calc(50px + 5vh);*/
    }

    @media(min-width: 1024px) {
      padding: 75px 0;
    }
  }

  .banner--inner {
    display: block;
    margin: 15px;
    width: 100%;
  }

  .banner--title {
    text-align: left;
    margin-left: 0;
    margin-right: auto;
    word-break: break-word;
    padding-bottom: 20px;

    @media (min-width: 280px) {
      word-break: normal;
    }

    @media (min-width: 360px) {
      font-size: 40px;
      line-height: 40px;
    }

    @media(min-width: 992px) {
      font-size: 63px;
      line-height: normal;
    }
  }

  .banner--image {
    padding: 44px 0;
  }

  .banner--paragraph {
    margin-bottom: 20px;

    @media(min-width: 360px) {
      font-size: 15px;
    }

    @media(min-width: 992px) {
      margin-bottom: 53px;
      font-size: 22px;
    }
  }

  .banner--button {
    margin-left: 0;
    margin-right: auto;
  }
</style>
