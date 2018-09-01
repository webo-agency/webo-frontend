<template>
    <div class="banner" id="banner">
        <div class="banner--wrapper">

        </div>
    </div>
</template>
<script>
  export default {
    name: 'cBanner',
  }
</script>

<style lang="scss" scoped>
    .banner {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        width: 100%;
        color: #fff;
        min-width: 100vw;
        height: 80vh;
        max-height: 100vh;
    }

    .banner--wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;

        background-color: rgba(0,0,0,1);
        /*background-image: linear-gradient(right top, rgba(35,31,32,1) 0%, #10AB87 100%);*/
    }

    .banner--inner{
        display: block;
        margin: 15px;
        max-width: 735px;
        width: 100%;
    }

    .banner--title{
        text-align: center;
        font-size: 25px;
    }

    .banner--link{
        width: 100%;
        height: 100%;
    }
</style>
