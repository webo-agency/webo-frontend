<template>
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <ul class="flex flex-wrap">
      <li 
        v-for="technology in technologyArray"
        :key="technology.id"
        class="flex-initial px-1 mr-6 mb-6"
      >
        {{ technology.name }}
        <ul>
          <li
            v-for="technologyChild in technology.childs"
            :key="technologyChild.id"
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
      default: "",
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
