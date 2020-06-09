<template>
  <div>
    <div class="icon mb-2">
      <slot name="icon" />
    </div>
    <div class="title mb-2">
      <slot name="title" />
    </div>
    <div class="description mb-2">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationBlock",
  props: {
    mainClass: {
      type: String,
      default: "z-20",
      required: false
    }
  }
}; 
</script>

<style scoped>
  .icon >>> *{
    
  }

  .title >>> *{
    font-weight: 700;
  }
</style>