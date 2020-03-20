<template>
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <ul class="flex flex-wrap">
      <li 
        v-for="entry in listFiltered"
        :key="entry.id"
        class="flex-initial px-1 mr-6 mb-6"
      >
        <img
          :src="entry.acf.logo.url"
          :alt="entry.acf.logo.alt"
          class="h-logo"
        >
      </li>
    </ul>
  </component>
</template>
<script>
export default {
  name: "LogoList",
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
    list: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  computed: {
      listFiltered() {
        // console.log(this.list); // eslint-disable-line
        return this.list.filter(entry => entry.logo != false);
      }
  }
};
</script>
