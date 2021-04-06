<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    :href="link"
    class="button"
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

<style lang="postcss" scoped>

  .button {
    @apply inline-block;
    @apply py-3;
    @apply font-bold;
    @apply px-8;
    @apply text-btn;
    @apply border;
    -webkit-appearance: none;

    @screen md {
      @apply text-base;
    }

    &-small {
      @apply text-btn;
      @apply px-3;
      @apply py-1;
    }
    
    &-primary {
      @apply text-darkText;
      @apply bg-main;
      @apply border-main;

      &:hover {
        @apply bg-transparent;
        @apply text-main;
      }
    }

    &-with-line {
      @apply flex;
      @apply items-center;

      &::after {
        content: '';
        width: 20px;
        height: 2px;
        @apply block;
        @apply ml-3;
      }
    }
    
    &-with-line-primary {

      &::after {
        @apply bg-main;
      }

      &:hover::after {
        @apply bg-backgroundDark;
      }
    }
    
    &-with-line-dark {

      &::after {
        @apply bg-backgroundDark;
      }

      &:hover::after {
        @apply bg-main;
      }
    }

    &-outline-primary {
      @apply bg-transparent;
      @apply border-main;
      @apply text-main;

      &:hover {
        @apply text-darkText;
        @apply bg-main;
      }
    }
  }
</style>