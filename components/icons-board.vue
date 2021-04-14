<template>
    <div :class="`icons-board icons-board--${section}`">
        <template 
            v-for="(icon, index) in 3"
        >
            <img
                :key="index"
                svg-inline
                src="~/assets/icons/rounded-square.svg"
                class="icon"
            />
        </template>
    </div>
</template>

<script>
export default {
    name: "IconsBoard",
    props: {
        section: {
            default: "",
            required: true
        }
    }
}
</script>

<style lang="postcss" scoped>

    .icons-board {
        position: absolute;
        width: 100%;
        height: 100%;

        .icon {
            width: 20px;
            position: absolute;
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