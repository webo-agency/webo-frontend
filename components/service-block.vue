<template>
  <div
    v-in-viewport.once="'-100px 0px'"
    class="flex-initial w-full mb-8 sm:w-1/2 xs:pr-4 viewport-box service-block"
  >
    <div
      class="h-full p-5 rounded-md artblock"
      :class="[isBlockSimple ? 'flex flex-col lg:flex-row justify-between' : null, isDark ? 'bg-backgroundDark text-white' : 'bg-backgroundLight text-black']"
    >
      <img
        v-if="icon"
        :src="require('~/assets/icons/' + icon)"
        alt="iconAlt"
        class="w-auto h-12 mb-4 ml-5"
      >
    
      <h1
        class="ml-2 text-base font-bold leading-tight lg:ml-5 md:text-2xl em-custom"
        :class="isBlockSimple ? 'w-full lg:w-1/2 self-center' : 'w-auto'"
        v-html="titleFormatted"
      />

      <p
        v-if="description.length !== 0"
        class="relative z-10 my-4 ml-2 text-xs leading-block lg:ml-5 md:text-base"
      >
        {{ description }}
      </p>
      
      <a
        class="relative ml-2 font-bold text-main lg:ml-5 more-button" 
        href="#"
        :class="isBlockSimple ? 'lg:self-center' : ''"
      >
        <span class="inline-block">{{ cta }}</span>
        <svg
          viewBox="0 0 14 26"
          width="14"
          height="26"
          class="inline-block fill-current arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
        >
          <path
            d="M5.766.962V22.1l-4.111-4.11a.968.968 0 00-1.372 0 .966.966 0 000 1.377l5.733 5.74a.983.983 0 00.712.284.958.958 0 00.705-.283l5.74-5.741a.978.978 0 000-1.378.976.976 0 00-1.38 0L7.69 22.1V.962a.961.961 0 10-1.923 0z" 
          />
        </svg>
      </a>
      <img
        v-if="icon"
        :src="require('~/assets/icons/' + icon)"
        alt="iconAlt"
        class="z-0 w-auto h-12 mb-4 gray-bg"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceBlock',
  props: {
    icon: {
      type: String,
      default: '',
      required: false,
    },
    title: {
      type: String,
      default: '',
      required: false,
    },
    description: {
      type: String,
      default: '',
      required: false,
    },
    facilities: {
      type: Array,
      default: function(){ return []; },
      required: false,
    },
    cta: {
      type: String,
      default: 'Czytaj więcej',
      required: true,
    },
    isDark: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    titleFormatted () {
      return this.title ? this.$md.renderInline(this.title) : ''
    },
    isBlockSimple() {
      return this.description.length === 0 && this.facilities.length === 0;
    },
  },
}
</script>

<style lang="postcss" scoped>

  .service-block { 
    
    &:not(:last-child, :nth-last-child(2)) {
      
      @screen lg {
      
        .more-button {
          visibility: hidden;
        }

        &:hover {

          h1 {
            @apply text-main;
          }

          .more-button {
            visibility: visible;
          }
        }
      }
    }
  }
  
  .em-custom >>> em {
    @apply not-italic;
    @apply text-main;
  }

  .artblock {
    position: relative;
    overflow: hidden;
  }

  .arrow-right {
    transform: rotate(-90deg);
    position: relative;
    margin-left: 21px;
    width: 11px;
  }

  .gray-bg {
    position: absolute;
    filter: grayscale(100%) contrast(200%);
    right: 35px;
    transform: scale(3);
    bottom: 4px;
  }

  @media screen and (min-width: 1024px) {
    .facility:not(:first-child) {
      margin-left: 3rem;
    }
  }
</style>