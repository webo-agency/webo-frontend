<template>
    <component v-bind:is="mainTag" class="header sticky-top bg-white">
        <nav class="header container d-flex flex-row flex-wrap justify-content-between">
            <nuxt-link class="logo nuxt-link-active flex-grow-1 flex-shrink-1 w-auto mx-auto" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" width="167" height="50">
                    <path fill="#16ab86" d="M162.885 50h-5.02v-8.365h8.365v5.018c0 1.847-1.5 3.347-3.345 3.347zm-8.365-3.347v3.34L138.627 50c-5.078 0-9.2-4.123-9.2-9.2V22.397c0-5.079 4.122-9.2 9.2-9.2h18.403c5.077 0 9.2 4.121 9.2 9.2v15.886h-3.345V24.071a7.531 7.531 0 0 0-7.528-7.528h-15.056a7.53 7.53 0 0 0-7.528 7.528v15.056a7.53 7.53 0 0 0 7.528 7.526h14.219z"/>
                    <path fill="#16ab86" d="M98.17 13.203l15.893-.007c5.078 0 9.2 4.123 9.2 9.2v18.402c0 5.08-4.122 9.2-9.2 9.2H95.66c-5.077 0-9.2-4.12-9.2-9.2V0h3.345v39.125a7.531 7.531 0 0 0 7.528 7.528h15.056a7.53 7.53 0 0 0 7.528-7.528V24.07a7.53 7.53 0 0 0-7.528-7.527H98.17v-3.34z"/>
                    <path fill="#16ab86" d="M80.296 49.993L52.692 50c-5.077 0-9.199-4.123-9.199-9.2V22.397c0-5.079 4.122-9.2 9.2-9.2h18.402c5.078 0 9.2 4.121 9.2 9.2v15.886H55.203v-3.343H76.95v-10.87a7.531 7.531 0 0 0-7.528-7.528H54.367a7.53 7.53 0 0 0-7.528 7.528v15.056a7.53 7.53 0 0 0 7.528 7.526h25.929v3.34z"/>
                    <path fill="#16ab86" d="M28.127 50h-1.322v-3.364c3.987-.173 7.171-3.466 7.177-7.51V13.198h3.34l.005 27.602c0 5.078-4.121 9.201-9.2 9.201zM3.347 13.197v25.93c.005 4.043 3.189 7.336 7.174 7.51L9.201 50C4.122 50 0 45.877 0 40.8l.006-27.603h3.34zM18.663 50H9.201l1.32-3.364h4.798l-.002-11.695h3.34l.007 15.06z"/>
                </svg>
            </nuxt-link>

            <div class="d-flex flex-row justify-content-between align-items-stretch flex-grow-0 m-auto">
                <svg class="icon-end" width="24px" height="16px" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2f2d2c" d="M23.35-.003H0V3.11h23.35zM23.344 6.44H7.777v3.114h15.567zM23.355 12.884h-7.783v3.113h7.783z"/>
                </svg>

                <scrollactive class="links list-inline d-flex flex-row justify-content-between align-items-stretch flex-grow-0">
                    <a href="#work" class="link scrollactive-item">About</a>
                    <a href="#team" class="link scrollactive-item">Meet Us</a>
                    <a href="#technologies" class="link scrollactive-item">Tech</a>
                    <a href="#portfolio" class="link scrollactive-item">Portfolio</a>
                    <a href="#partners" class="link scrollactive-item">Partners</a>
                    <a href="#contact" class="link scrollactive-item">SAY Hello!</a>
                </scrollactive>

                <svg class="icon-start" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg">
                    <path fill="##2f2d2c" d="M10.368 17.282H-.004V-.003h17.285v10.369c0 3.816-3.1 6.916-6.913 6.916z"/>
                </svg>
            </div>
        </nav>
    </component>
</template>

<script>
  export default {
    name: 'cHeader',
    props: ['mainTag'],
    methods: {

    },
    components: {

    }
  }
</script>


<style lang="scss" scoped>
    .header{

    }

    .header .logo{
        display: block;
        width: 100%;
        order: 0;
        margin: 42px 0;
    }

    .header .icon-end,
    .header .icon-start{
        margin: 67px 0;
    }

    .header .links{
        margin: 0 35px;
    }

    .header .link{
        font-size: 21px;
        padding: 42px 18px;
        font-weight: 700;
        margin: 18px auto auto;
        color: #2f2d2c;
    }
</style>