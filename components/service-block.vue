<template>
  <div class="mb-8 flex-initial w-full sm:w-1/2 xs:pr-4 md:pr-0'">
    <div
      class="artblock bg-backgroundLight text-black rounded-md p-5"
      :class="isBlockSimple ? 'flex flex-col lg:flex-row justify-between' : null"
    >
      <img
        v-if="icon"
        :src="require('~/assets/icons/' + icon)"
        alt="iconAlt"
        class="mb-4 w-auto h-12 ml-5"
      >
      <h1
        class="mb-4 ml-2 lg:ml-5 text-base leading-tight md:text-2xl font-bold"
        :class="isBlockSimple ? 'lg:w-1/2 self-center' : 'w-auto'"
      >
        {{ title }}
      </h1>
      <p
        v-if="description.length !== 0"
        class="mb-4 text-xs md:text-base leading-tight relative z-10 ml-2"
      >
        {{ description }}
      </p>
      <ul
        v-if="facilities.length !== 0"
        class="flex flex-col lg:flex-row font-bold list-dash mb-5 break-all xs:break-normal text-xs xs:text-base relative z-10"
      >
        <li
          v-for="(item, key) in facilities"
          :key="key"
          class="text-xs md:text-base facility"
        >
          {{ item }}
        </li>
      </ul>
      <a
        class="text-main font-bold relative ml-2 lg:ml-5" 
        href="#"
        :class="isBlockSimple ? 'lg:self-center' : ''"
      >
        <span class="inline-block">{{ cta }}</span>
        <svg
          viewBox="0 0 14 26"
          width="14"
          height="26"
          class="arrow-right fill-current inline-block"
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
        class="mb-4 w-auto h-12 gray-bg z-0"
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
    }
  },
  computed: {
    isBlockSimple() {
      return this.description.length === 0 && this.facilities.length === 0;
    },
  },
}
</script>

<style lang="scss" scoped>

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

  .facility {
      
    &:not(:first-child) {
      @media screen and (min-width: 1024px) {
        margin-left: 3rem;
      }
    }
  }
</style>