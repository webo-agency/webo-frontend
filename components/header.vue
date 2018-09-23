<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" class="header bg-white">
        <div class="container d-flex flex-row flex-wrap justify-content-between">
            <nuxt-link class="homepage mx-xs-auto py-xs-0 w-xs-auto nuxt-link-active flex-grow-0 flex-shrink-1" to="/">
                <svg class="logo" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" width="167" height="50">
                    <title>webo</title>
                    <path class="letter" fill="#16ab86" d="M28.127 50h-1.322v-3.364c3.987-.173 7.171-3.466 7.177-7.51V13.198h3.34l.005 27.602c0 5.078-4.121 9.201-9.2 9.201zM3.347 13.197v25.93c.005 4.043 3.189 7.336 7.174 7.51L9.201 50C4.122 50 0 45.877 0 40.8l.006-27.603h3.34zM18.663 50H9.201l1.32-3.364h4.798l-.002-11.695h3.34l.007 15.06z"/>
                    <path class="letter" fill="#16ab86" d="M80.296 49.993L52.692 50c-5.077 0-9.199-4.123-9.199-9.2V22.397c0-5.079 4.122-9.2 9.2-9.2h18.402c5.078 0 9.2 4.121 9.2 9.2v15.886H55.203v-3.343H76.95v-10.87a7.531 7.531 0 0 0-7.528-7.528H54.367a7.53 7.53 0 0 0-7.528 7.528v15.056a7.53 7.53 0 0 0 7.528 7.526h25.929v3.34z"/>
                    <path class="letter" fill="#16ab86" d="M98.17 13.203l15.893-.007c5.078 0 9.2 4.123 9.2 9.2v18.402c0 5.08-4.122 9.2-9.2 9.2H95.66c-5.077 0-9.2-4.12-9.2-9.2V0h3.345v39.125a7.531 7.531 0 0 0 7.528 7.528h15.056a7.53 7.53 0 0 0 7.528-7.528V24.07a7.53 7.53 0 0 0-7.528-7.527H98.17v-3.34z"/>
                    <path class="letter symbol" fill="#16ab86" d="M162.885 50h-5.02v-8.365h8.365v5.018c0 1.847-1.5 3.347-3.345 3.347zm-8.365-3.347v3.34L138.627 50c-5.078 0-9.2-4.123-9.2-9.2V22.397c0-5.079 4.122-9.2 9.2-9.2h18.403c5.077 0 9.2 4.121 9.2 9.2v15.886h-3.345V24.071a7.531 7.531 0 0 0-7.528-7.528h-15.056a7.53 7.53 0 0 0-7.528 7.528v15.056a7.53 7.53 0 0 0 7.528 7.526h14.219z"/>
                </svg>
            </nuxt-link>

            <div class="menu d-flex justify-content-between align-items-stretch m-auto">
                <svg class="icon-end" width="24px" height="16px" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2f2d2c" d="M23.35-.003H0V3.11h23.35zM23.344 6.44H7.777v3.114h15.567zM23.355 12.884h-7.783v3.113h7.783z"/>
                </svg>

                <button v-if="sections.length > 0" class="button d-hg-none" v-on:click="showMenu" v-on:touch="showMenu">
                    Menu
                </button>

                <scrollactive v-if="sections.length > 0" v-bind:class="{'is-active': menuVisible }" class="links list-inline justify-content-between align-items-stretch" :offset="152">
                    <nuxt-link v-for="(section, index) in sections" :key="`fruit-${index}`" class="link scrollactive-item" :to="`/#${section.id}`">
                        {{section.title}}
                    </nuxt-link>
                </scrollactive>

                <svg class="icon-start" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg">
                    <path fill="##2f2d2c" d="M10.368 17.282H-.004V-.003h17.285v10.369c0 3.816-3.1 6.916-6.913 6.916z"/>
                </svg>
            </div>
        </div>
    </component>
</template>

<script>
  export default {
    name: 'cHeader',
    props: ['mainTag','mainClass'],
    methods: {
      showMenu: function(){
        this.$data.menuVisible = !this.$data.menuVisible;
      },
    },
    data () {
      return {
        menuVisible: false,
        sections: []
      }
    },
    mounted() {
      this.$root.$on('section', data => {
        if ( !( data.id in this.sections ) ) {
          this.sections.push(data);
        }
      });
    },
    beforeDestroy: function () {
      this.sections = [];
    }
  }
</script>


<style lang="scss" scoped>
    .header{
        position: relative;
        display: none;
        align-items: center;

        @media (min-width: 50px) {
            display: flex;
        }

        @media (min-width: 320px) {
            padding: 0 15px;
        }

        @media(min-width: 320px){
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 1020;
        }
    }

    .homepage{
        display: block;
        text-align: center;
        margin: auto;
        width: 100%;
        order: 0;
        margin-top: 5px;
        margin-bottom: 5px;

        @media (min-width: 360px) {
            text-align: left;
            width: auto;
            margin-top: 15px;
            margin-bottom: 15px;
        }

        @media (min-width: 1024px) {
            margin-top: 42px;
            margin-bottom: 42px;
            transition: 0s;
        }
    }

    .logo{
        transition: width 0.3s 0s, height 0.3s 0s;

        .letter{
            visibility: visible;
            opacity: 1;
            transition: opacity 0.3s 0.4s, visibility 0.3s 0.4s, translate 0s 0s;
        }

        .letter:nth-child(2){
            transition: opacity 0.3s 0.8s, visibility 0.3s 0.8s, translate 0s 0s;
        }

        .letter:nth-child(3){
            transition: opacity 0.3s 0.6s, visibility 0.3s 0.6s, translate 0s 0s;
        }

        .letter:nth-child(4){
            transition: opacity 0.3s 0.4s, visibility 0.3s 0.4s, translate 0s 0s;
        }

        .letter.symbol{
            transition: translate 0s 0s, opacity 0.3s 0.6s, visibility 0.3s 0.6s;
        }

        @media (min-width: 50px) and (max-width: 190px){
            height: 39px;
            width: 39px;
            margin: auto;
            overflow: visible;
            transition: width 0s 0s, height 0.3s 0s, margin 0s 0s;

            .letter,
            .letter:nth-child(2),
            .letter:nth-child(3),
            .letter:nth-child(4){
                visibility: hidden;
                opacity: 0;
                transition: opacity 0s 0s,visibility 0s 0s,translate 0s 0s;
            }

            .letter.symbol{
                transform: translate(-129px,-12px);
                visibility: visible;
                opacity: 1;
                transition: translate 0s 0s, opacity 0.3s 0.6s, visibility 0.3s 0.6s;
            }
        }
    }

    .icon-end,
    .icon-start{
        display: none;
        margin: 15px 5px;

        @media (min-width: 191px) {
           display: block;
        }

        @media (min-width: 1024px) {
            margin-top: 67px;
            margin-bottom: 67px;
        }
    }

    .menu{
        flex-direction: column;
        flex-grow: 1;

        @media (min-width: 191px) {
            flex-direction: row;
            flex-grow: 0;
        }

        @media (min-width: 360px) {
            flex-grow: 1;

            &:before{
                content: '';
                flex: 1 1 auto;
            }
        }
    }

    .button{
        background: transparent;
        border: 0;
        text-transform: uppercase;
        font-size: 12px;
        padding: 5px 0 5px;

        @media (min-width: 191px) {
            padding: 0 10px;
            font-size: 19px;
        }
    }

    .links{
        display: flex;
        z-index: 2000;
        background: #fff;
        flex-direction: column;
        margin: 0;
        visibility: hidden;
        opacity: 0;
        flex: 0 1 auto;
        word-break: break-all;
        height: 0;
        max-height: 999px;

        &.is-active{
            visibility: visible;
            opacity: 1;
            height: auto;
            transition: 0.3s;
        }

        @media (min-width: 191px) {
            position: absolute;
            top: 108px;
            left: 0;
            right: 0;
            bottom: auto;
            padding: 0;
            word-break: normal;

            &.is-active {
                overflow: auto;
                height: calc(100vh - 108px);
            }
        }

        @media (min-width: 360px) {
            position: fixed;
            top: 80px;
            height: auto;

            &.is-active {
                overflow: auto;
                bottom: 0;
                height: auto;
            }
        }

        @media (min-width: 1024px) {
            position: relative;
            top: auto;
            flex-direction: row;
            visibility: visible;
            opacity: 1;
            padding: 0 15px;
        }

        @media (min-width: 1190px) {
            padding-left: 35px;
            padding-right: 35px;
        }
    }


    .header .link{
        flex: 1 1 auto;
        font-weight: 700;
        transition: all 0.3s;
        text-align: center;
        font-size: 10px;
        padding: 15px 0;

        @media (min-width: 191px) {
            font-size: 22px;
            padding: 15px 18px;
        }

        @media (min-width: 1024px) {
            margin: 18px auto auto;
            padding: 42px 18px;
            transition: 0s;
        }
    }
</style>
