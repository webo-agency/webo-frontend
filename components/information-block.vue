<template>
  <div>
    <div class="mb-2 md:mb-5 icon">
      <slot name="icon" />
    </div>
    <div class="mb-3 title">
      <slot name="title" />
    </div>
    <div class="mb-2 description">
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

<style scoped lang="postcss">
  .icon >>> *{
    
  }

  .title >>> *{
    font-weight: 700;
    font-size: 16px;

    @screen md {
      font-size: 25px;
    }
  }
</style>