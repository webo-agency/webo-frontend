<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    :href="link"
    class="button-primary block py-1 px-8"
  >
    <span>
      {{ text }}
    </span>
  </component>
</template>
<script>
  export default {
    name: "ContactButton",
    props: {
      mainTag: {
        type: String,
        default: "a",
        required: false
      },
      mainClass: {
        type: String,
        default: "bg-main text-black font-medium text-micro hover:text-darkText xs:text-base lg:text-xl",
        required: false
      },
      mainId: {
        type: String,
        default: "",
        required: false
      },
      text: {
        type: String,
        default: "",
        required: false
      },
      link: {
        type: String,
        default: "",
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
