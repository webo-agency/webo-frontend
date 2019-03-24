<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    class="banner px-2 px-xs-35"
  >
    <div class="container">
      <div class="row">
        <div class="banner--wrapper col-12 col-hg-7 mx-auto my-6 d-flex flex-column text-center text-xs-left align-items-center align-items-xs-left ml-hg-0 mr-hg-auto justify-content-hg-center">
          <h1 class="banner--title decoration text-center text-hg-left m-0 ml-hg-0 mr-hg-auto">
            {{ title }}
          </h1>
          <p class="banner--paragraph text-center text-hg-left mb-5 mx-0 ml-hg-0 mr-hg-auto">
            {{ description }}
          </p>
          <button
            class="btn btn-secondary ml-hg-0 mr-hg-auto"
            @click="setFocus"
          >
            {{ button }}
          </button>
        </div>
        <div class="col-5 d-none d-hg-flex align-items-center">
          <img
            id="img"
            src="~/assets/planeta-big.png"
            class="img-fluid mr-0 ml-auto banner--image"
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
        // document: "TEST"
      }
    },
    computed: {
      title () {
        return 'Streaming innowacji';//Streaming innovation /this.$store.state.banner.title
      },
      description () {
        return 'Jesteśmy młodym zespołem ludzi których łączy pasja wraz z zaangażowaniem. Dostarczamy kompleksowe rozwiązania interaktywne od kreacji przez wdrożenie po wsparcie.';//We are a team of young people who are connected with passion and commitment. We provide comprehensive interactive solutions from creation through implementation to support //this.$store.state.banner.description
      },
      button () {
        return 'Rozpocznij projekt';//this.$store.state.banner.button
      }
    },
    mounted() {
      this.$root.$emit(
        'section', {
          'id': this.mainId,
          'title': 'O nas'
        }
      );

      // const elBody = document.querySelector('body');
      // const el = document.querySelector("#img");
      // elBody.addEventListener("mousemove", (e) => {
      //   if(e.offsetX !== 0 && e.offsetY !== 0){
      //     el.style.objectPosition = `-${Math.abs(e.offsetX) / 15}px -${Math.abs(e.offsetY) / 15}px`;
      //   }
      // });


      (function() {
        // Init
        var container = document.getElementById(this.mainId),
          inner = document.getElementById("img");

        // Mouse
        var mouse = {
          _x: 0,
          _y: 0,
          x: 0,
          y: 0,
          updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
          },
          setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
          },
          show: function() {
            return "(" + this.x + ", " + this.y + ")";
          }
        };

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);

        //-----------------------------------------

        var counter = 0;
        var updateRate = 10;
        var isTimeToUpdate = function() {
          return counter++ % updateRate === 0;
        };

        //-----------------------------------------

        var onMouseEnterHandler = function(event) {
          update(event);
        };

        var onMouseLeaveHandler = function() {
          inner.style = "";
        };

        var onMouseMoveHandler = function(event) {
          if (isTimeToUpdate()) {
            update(event);
          }
        };

        //-----------------------------------------

        var update = function(event) {
          mouse.updatePosition(event);
          updateTransformStyle(
            (mouse.y / inner.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.offsetWidth / 2).toFixed(2)
          );
        };

        var updateTransformStyle = function(x, y) {
          var style = "translate(" + x + "px," + y + "px)";
          inner.style.transform = style;
          inner.style.webkitTransform = style;
          inner.style.mozTransform = style;
          inner.style.msTransform = style;
          inner.style.oTransform = style;
        };

        //-----------------------------------------

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
      })();

    },
    methods: {
      setFocus() {
        var textbox = document.getElementById("email");
        textbox.focus();
        textbox.scrollIntoView();
        // this.$store.commit('contact/focus', true );
      },
    },
  }
</script>

<style lang="scss" scoped>
  .banner {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
    height: 100%;
  }

  .banner--wrapper {
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


    @media(min-width: 1024px) {
      /*max-width: 600px;*/
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
    padding-bottom: 30px;

    @media (min-width: 280px) {
      word-break: normal;
    }

    @media (min-width: 360px) {
      font-size: 40px;
      line-height: 40px;
    }

    @media(min-width: 992px) {
      font-size: 63px;
      line-height: 1.1;
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
      max-width: 665px;
    }
  }
</style>
