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
          :src="entry[0].acf.logo.url"
          :alt="entry[0].acf.logo.alt"
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
        let _tmpList = this.list.filter(function(entry) {
          return entry[0].logo != false
        });
        return _tmpList;
      }
  }
};
</script>
