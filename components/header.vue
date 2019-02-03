<template>
  <component
    :is="mainTag"
    :class="{mainClass, 'is-top': isTop, 'is-scroll-down': isGoingUp}"
    class="header bg-white"
  >
    <div class="container d-flex flex-row flex-wrap justify-content-between">
      <nuxt-link
        :class="{'is-top': !isTop}"
        class="homepage py-xs-0 w-xs-auto nuxt-link-active flex-grow-0 flex-shrink-1"
        to="/"
      >
        <svg
          class="logo"
          viewbox="0 0 167 50"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="1.414"
          clip-rule="evenodd"
          width="167"
          height="50"
        >
          <title>webo</title>
          <path
            class="letter"
            fill="#16ab86"
            d="M28.127 50h-1.322v-3.364c3.987-.173 7.171-3.466 7.177-7.51V13.198h3.34l.005 27.602c0 5.078-4.121 9.201-9.2 9.201zM3.347 13.197v25.93c.005 4.043 3.189 7.336 7.174 7.51L9.201 50C4.122 50 0 45.877 0 40.8l.006-27.603h3.34zM18.663 50H9.201l1.32-3.364h4.798l-.002-11.695h3.34l.007 15.06z"
          />
          <path
            class="letter"
            fill="#16ab86"
            d="M80.296 49.993L52.692 50c-5.077 0-9.199-4.123-9.199-9.2V22.397c0-5.079 4.122-9.2 9.2-9.2h18.402c5.078 0 9.2 4.121 9.2 9.2v15.886H55.203v-3.343H76.95v-10.87a7.531 7.531 0 0 0-7.528-7.528H54.367a7.53 7.53 0 0 0-7.528 7.528v15.056a7.53 7.53 0 0 0 7.528 7.526h25.929v3.34z"
          />
          <path
            class="letter"
            fill="#16ab86"
            d="M98.17 13.203l15.893-.007c5.078 0 9.2 4.123 9.2 9.2v18.402c0 5.08-4.122 9.2-9.2 9.2H95.66c-5.077 0-9.2-4.12-9.2-9.2V0h3.345v39.125a7.531 7.531 0 0 0 7.528 7.528h15.056a7.53 7.53 0 0 0 7.528-7.528V24.07a7.53 7.53 0 0 0-7.528-7.527H98.17v-3.34z"
          />
          <path
            class="letter symbol"
            fill="#16ab86"
            d="M162.885 50h-5.02v-8.365h8.365v5.018c0 1.847-1.5 3.347-3.345 3.347zm-8.365-3.347v3.34L138.627 50c-5.078 0-9.2-4.123-9.2-9.2V22.397c0-5.079 4.122-9.2 9.2-9.2h18.403c5.077 0 9.2 4.121 9.2 9.2v15.886h-3.345V24.071a7.531 7.531 0 0 0-7.528-7.528h-15.056a7.53 7.53 0 0 0-7.528 7.528v15.056a7.53 7.53 0 0 0 7.528 7.526h14.219z"
          />
        </svg>
      </nuxt-link>

      <div class="menu d-flex justify-content-between align-items-center m-sm-auto m-hg-0">
        <svgMeteorEnd
          class="icon-start"
          width="24px"
          height="16px"
        />

        <button
          v-if="sections.length > 0"
          class="button d-hg-none"
          @click="showMenu"
          @touch="showMenu"
        >
          Menu
        </button>

        <scrollactive
          v-if="sections.length > 0"
          :class="{'is-active': menuVisible, 'is-top': !isTop}"
          class="links list-inline justify-content-between align-items-stretch"
          :offset="80"
          :offset-height="80"
        >
          <nuxt-link
            v-for="(section, index) in sections"
            :key="`fruit-${index}`"
            :class="{'is-top': !isTop}"
            class="link scrollactive-item"
            :to="`/#${section.id}`"
          >
            {{ section.title }}
          </nuxt-link>
        </scrollactive>

        <svgMeteorStart
          class="icon-end"
          width="18px"
          height="18px"
        />
      </div>
    </div>
  </component>
</template>

<script>
  import svgMeteorStart from './../assets/meteor-start.svg?inline';
  import svgMeteorEnd from './../assets/meteor-end.svg?inline';

  export default {
    name: 'CHeader',
    components: {
      svgMeteorStart,
      svgMeteorEnd
    },
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
      }
    },
    data() {
      return {
        isTop: true,
        isGoingUp: false,
        menuVisible: false,
        sections: [],
        scrollPosition: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll, {passive: true});

      this.$root.$on('section', data => {
        if (!(data.id in this.sections)) {
          this.sections.push(data);
        }
      });
    },
    beforeDestroy: function () {
      this.sections = [];
      window.removeEventListener('scroll', this.onScroll, {passive: true});
    },
    methods: {
      showMenu: function () {
        this.$data.menuVisible = !this.$data.menuVisible;
      },
      onScroll() {
        this.isTop = !(window.scrollY > 0);
        this.isGoingUp = (window.scrollY > this.scrollPosition);
        this.scrollPosition = window.scrollY;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    display: none;
    align-items: center;
    transition: 0.3s;

    @media (min-width: 191px) {
      padding: 0 15px;
    }

    @media (min-width: 50px) {
      display: flex;
    }

    @media (min-width: 280px) {
      padding: 0 15px;
    }

    @media(min-width: 320px) {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020;
      padding: 0 7px;
    }

    @media(min-width: 360px) {
      padding: 0 30px;
    }

    @media(min-width: 1024px) {
      padding: 0 30px 0 23px;
    }

    &.is-scroll-down:not(.is-top):not(:hover):not(:focus) {
      animation: 0.5s hideWhenScroll 2s;
      animation-fill-mode: both;
    }
  }

  @keyframes hideWhenScroll {
    from {
      transform: translate(0, 0);
    }

    to {
      transform: translate(0, -100%);
    }
  }

  .homepage {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    order: 0;
    margin-top: 5px;
    margin-bottom: 5px;

    @media (min-width: 280px) {
      width: auto;
      margin: 5px 5px 5px 0;
    }

    @media (min-width: 320px) {
      margin-left: 25px;
    }

    @media (min-width: 360px) {
      text-align: left;
      width: auto;
      margin-top: 15px;
      margin-bottom: 15px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 1024px) {
      margin-top: 42px;
      margin-bottom: 42px;
      transition: 0s;
    }

    &.is-top {
      @media (min-width: 360px) {
        transition: all 0.3s 0.5s;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }

  .logo {
    transition: width 0.3s 0s, height 0.3s 0s;
    width: 100%;

    @media (min-width: 50px) and (max-width: 190px) {
      height: auto;
      width: 100%;
      margin: auto;
      overflow: visible;
      transition: width 0s 0s, height 0.3s 0s, margin 0s 0s;
    }

    @media (min-width: 280px) {
      transform: scale(0.5988);
      transform-origin: left;
    }

    @media (min-width: 360px) {
      transform: none;
      transform-origin: center;
    }

    .letter {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.3s 0.4s, visibility 0.3s 0.4s, translate 0s 0s;
    }

    .letter:nth-child(2) {
      transition: opacity 0.3s 0.8s, visibility 0.3s 0.8s, translate 0s 0s;
    }

    .letter:nth-child(3) {
      transition: opacity 0.3s 0.6s, visibility 0.3s 0.6s, translate 0s 0s;
    }

    .letter:nth-child(4) {
      transition: opacity 0.3s 0.4s, visibility 0.3s 0.4s, translate 0s 0s;
    }

    .letter.symbol {
      transition: translate 0s 0s, opacity 0.3s 0.6s, visibility 0.3s 0.6s;
    }

    .letter,
    .letter:nth-child(2),
    .letter:nth-child(3),
    .letter:nth-child(4) {
      @media (min-width: 50px) and (max-width: 190px) {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0s 0s, visibility 0s 0s, translate 0s 0s;
      }
    }

    .letter.symbol {
      @media (min-width: 50px) and (max-width: 190px) {
        transform: translate(-65px, -7px);
        visibility: visible;
        opacity: 1;
        transition: translate 0s 0s, opacity 0.3s 0.6s, visibility 0.3s 0.6s;
      }
    }
  }

  .icon-end,
  .icon-start {
    display: none;
    margin: 15px 5px;
    height: 18px;

    @media (min-width: 360px) {
      display: block;
    }

    @media (min-width: 1024px) {
      /*margin-top: 67px;*/
      /*margin-bottom: 67px;*/
      margin: auto;
    }

    /deep/ path {
      fill: #2F2D2C;
    }
  }

  .icon-start {
    height: 16.5px;
  }

  .menu {
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    padding: 0 5px;

    @media (min-width: 191px) {
      flex-direction: row;
      flex-grow: 0;
      padding: 0;
    }

    @media (min-width: 280px) {
      width: auto;
      margin: 0 0 0 auto;
    }

    @media (min-width: 360px) {
      flex-grow: 1;
      margin: auto;

      &:before {
        content: '';
        flex: 1 1 auto;
      }
    }
  }

  .button {
    background: transparent;
    font-size: 10px;
    padding: 5px 0 5px;
    font-weight: 700;
    -webkit-appearance: none;
    width: 100%;
    border-radius: 5px;
    max-width: 169px;
    margin: auto;
    border: 1px solid rgba(0, 0, 0, 0.12);

    @media (min-width: 191px) {
      padding: 3px 10px;
      font-size: 12px;
    }

    @media (min-width: 360px) {
      padding: 0 5px;
      font-size: 16px;
      width: auto;
      border: 0;
    }
  }

  .links {
    display: flex;
    z-index: 2000;
    background: #FFFFFF;
    flex-direction: column;
    margin: 0;
    visibility: hidden;
    opacity: 0;
    flex: 0 1 auto;
    word-break: break-all;
    height: 0;
    max-height: 99999rem;

    @media (min-width: 191px) {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      bottom: auto;
      padding: 0;
      word-break: normal;
    }

    @media (min-width: 360px) {
      position: fixed;
      top: 80px;
      height: auto;
    }

    @media (min-width: 1024px) {
      position: relative;
      top: auto;
      flex-direction: row;
      visibility: visible;
      opacity: 1;
      padding: 0 15px;
    }

    &.is-active {
      visibility: visible;
      opacity: 1;
      height: auto;
      transition: 0.3s;

      @media (min-width: 191px) {
        overflow: auto;
        height: calc(100vh - 86px);
        top: 86px;
      }

      @media (min-width: 280px) {
        top: 60px;
      }

      @media (min-width: 320px) {
        top: 60px;
      }

      @media (min-width: 360px) {
        overflow: auto;
        bottom: 0;
        height: auto;
        top: 80px;
      }

      @media (min-width: 1024px) {
        top: auto;
      }
    }

    &.is-active.is-top {
      @media (min-width: 320px) {
        top: 60px;
      }

      @media (min-width: 360px) {
        top: 70px;
      }

      @media (min-width: 1024px) {
        top: auto;
      }
    }
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    font-weight: 700;
    transition: all 0.3s;
    text-align: center;
    font-size: 10px;
    padding: 5px;

    @media (min-width: 191px) {
      font-size: 22px;
      padding: 15px 18px;
    }

    @media (min-width: 321px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 1024px) {
      padding: 42px 18px;
      transition: 0s;
      height: 100%;
    }

    &.is-top {
      @media (min-width: 1024px) {
        transition: all 0.3s;
        padding: 0 18px;
        margin: auto;
      }
    }
  }
</style>
