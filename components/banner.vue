<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="banner">
        <div class="container">
            <div class="row">
                <div class="banner--wrapper col-12 col-hg-7">
                    <h1 class="banner--title decoration">Streaming Innovations</h1>
                    <p class="banner--paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis explicabo fugit
                        rem vero voluptatem voluptatum? Consectetur culpa eligendi fuga harum, illo numquam provident quidem
                        reprehenderit sapiente similique, sint velit. Adipisci animi atque dicta dolorem
                    </p>
                    <button class="banner--button btn btn-secondary">
                        Start a project with us
                    </button>
                </div>
                <div class="col-5 d-none d-hg-flex">
                    <img src="~/assets/planeta.png" class="img-fluid m-auto banner--image" />
                </div>
            </div>
        </div>
    </component>
</template>
<script>
  export default {
    name: 'cBanner',
    props: [
      'mainTag',
      'mainClass',
      'mainId'
    ],
    mounted() {
      this.$root.$emit(
        'section', {
          'id': this.mainId,
          'title': 'About'
        }
      );
    }
  }
</script>

<style lang="scss" scoped>
    .banner {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        width: 100%;
        min-width: 100vw;
        height: 100%;
    }

    .banner--wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        margin-bottom: 15px;
        padding-left: 5px;
        padding-right: 5px;
        max-width: 600px;
        margin-top: 15px;

        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background: rgb(22,171,134);
            width: 100%;
            border-radius: 10px;
        }

        @media (min-width: 191px) {
            padding-bottom: 15px;
            padding-left: 15px;
            padding-right: 15px;
            margin-top: calc(25px + 5vh);
            margin-bottom: calc(25px + 5vh);
        }

        @media (min-width: 320px) {
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 30px;
        }

        @media (min-width: 360px) {
            margin-top: calc(50px + 5vh);
            margin-bottom: calc(50px + 5vh);
        }

        @media(min-width: 1024px){
            padding: 75px 0;
        }
    }

    .banner--inner{
        display: block;
        margin: 15px;
        width: 100%;
    }

    .banner--title{
        text-align: left;
        margin-left: 0;
        margin-right: auto;
        word-break: break-word;
        padding-bottom: 20px;

        @media (min-width: 280px) {
            word-break: normal;
        }

        @media (min-width: 360px) {
            font-size: 40px;
            line-height: 40px;
        }

        @media(min-width: 992px){
            font-size: 63px;
            line-height: normal;
        }
    }

    .banner--image{
        padding: 44px 0;
    }

    .banner--paragraph{
        margin-bottom: 20px;

        @media(min-width: 360px){
            font-size: 15px;
        }

        @media(min-width: 992px){
            margin-bottom: 53px;
            font-size: 22px;
        }
    }

    .banner--button{
        margin-left: 0;
        margin-right: auto;
    }
</style>
