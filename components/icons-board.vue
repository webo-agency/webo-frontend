<template>
  <div :class="`icons-board icons-board--${layout}`">
    <template 
      v-for="(icon, index) in 3"
    >
      <img
        :key="index"
        svg-inline
        src="~/assets/icons/rounded-square.svg"
        alt="decoration"
        class="icon"
      >
    </template>
  </div>
</template>

<script>
export default {
    name: "IconsBoard",
    props: {
        layout: {
            default: 0,
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="postcss" scoped>

    .icons-board {
        @apply absolute;
        @apply w-full;
        @apply h-full;

        .icon {
            @apply absolute;
            width: 20px;
        }

        &--0 {
            
            .icon {

                &:first-child {
                    top: -13vh;
                    left: 65%;

                    @screen md {
                        top: 12vh;
                        left: 38%;
                    }
                }

                &:nth-child(2) {
                    bottom: -5vh;
                    left: 32%;

                    @screen md {
                        bottom: 10vh;
                    }
                }

                &:nth-child(3) {
                    top: 39vh;
                    right: -4%;
                }
            }
        }
    }
</style>