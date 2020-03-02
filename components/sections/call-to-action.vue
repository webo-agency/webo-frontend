<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClassComputed"
    class=""
  >
    <div class="container flex flex-row flex-wrap items-end align-top">
      <HeaderTitles 
        :subtitle="$md.renderInline('Zainteresowany?')"
        :title="$md.renderInline('Porozmawiajmy <br/>o Twoim <em>projekcie</em>')"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-3xl"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
      <ButtonContact 
        class="mb-8"
      />
    </div>
  </component>
</template>
<script>
  import HeaderTitles from "~/components/parts/header-titles.vue";
  import ButtonContact from "~/components/parts/button-contact.vue";

  export default {
    name: "Contact",
    components: {
      HeaderTitles,
      ButtonContact
    },
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
      mainId: {
        type: String,
        default: "contact",
        required: false
      },
      dark: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    computed: {
      mainClassComputed: function(){
        if(this.dark){
          return this.mainClass + ' bg-backgroundDark text-white';
        } else {
          return this.mainClass
        }
      },
    },
  };
</script>
