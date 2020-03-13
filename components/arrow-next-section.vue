<template>
  <button
    :class="mainClass"
    class="custom-position"
    @click="$root.$emit('next-section', {
      id: sectionLink
    })"
  >
    <svg
      viewBox="0 0 14 26"
      width="14"
      height="26"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      :class="arrowClass"
    ><path
      d="M5.766.962V22.1l-4.111-4.11a.968.968 0 00-1.372 0 .966.966 0 000 1.377l5.733 5.74a.983.983 0 00.712.284.958.958 0 00.705-.283l5.74-5.741a.978.978 0 000-1.378.976.976 0 00-1.38 0L7.69 22.1V.962a.961.961 0 10-1.923 0z" 
      :fill="arrowColor"
    /></svg>
  </button>
</template>

<script>
export default {
  name: "ArrowNextSection",
  props: {
    mainClass: {
      type: String,
      default: "z-20",
      required: false
    },
    arrowClass: {
      type: String,
      default: "",
      required: false
    },
    arrowColor: {
      type: String,
      default: "#FFFFFF",
      required: false
    },
    sectionLink: {
      type: String,
      default: "",
      required: false
    },
  }
}; 
</script>

<style scoped>
  .custom-position{
    margin-left: -60px;
    margin-top: 50px;
    margin-bottom: 50px;
    height: auto;
    width: auto;
  }
</style>