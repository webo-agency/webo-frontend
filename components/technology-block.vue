<template>
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <ul class="bg-backgroundDark rounded-lg rounded-r-none md:pt-12 md:px-5 lg:px-12 flex flex-wrap">
      <li 
        v-for="technology in technologyArray"
        :key="technology.id"
        class="flex-initial w-full sm:w-1/2 md:w-full lg:w-1/2 flex flex-col pr-5 mb-10"
      >
        <h2 
          class="font-medium mb-3"
          :class="{
            [`text-${technology.acf.color}`]: technology.acf.color
          }"
        >
          {{ technology.name }}
        </h2>
        <p class="mb-5">
          {{ technology.description }}
        </p>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="technologyChild in technology.childs"
            :key="technologyChild.id"
            class="flex-initial mr-5 mb-2"
            :class="{
              [`text-${technology.acf.color}`]: technology.acf.color
            }"
          >
            {{ technologyChild.name }}
          </li>
        </ul>
      </li>
    </ul>
  </component>
</template>
<script>
export default {
  name: "TechnologyBlock",
  props: {
    mainTag: {
      type: String,
      default: "div",
      required: false
    },
    mainClass: {
      type: String,
      default: "md:border border-main rounded-lg md:border-r-0 rounded-r-none md:p-4 md:pr-0",
      required: false
    },
    technologyArray: {
      type: Array,
      default: () => [],
      required: false
    }
  },
};
</script>
