<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    href="+48223906234"
    class="block bg-main text-black py-1 px-4 font-medium text-micro hover:text-darkText xs:text-base"
  >
    <span>
      Rozpocznij projekt
    </span>
  </component>
</template>
<script>
  export default {
    name: "ButtonContact",
    props: {
      mainTag: {
        type: String,
        default: "a",
        required: false
      },
      mainClass: {
        type: String,
        default: "button-primary",
        required: false
      },
      mainId: {
        type: String,
        default: "contact",
        required: false
      }
    },
    data() {
      return {
        email: '',
        inputFocused: false
      };
    },
  };
</script>
