<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="technology">
        <div class="technology--wrapper">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 class="decoration decoration--bottom-right">Technologies</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <b-tabs nav-wrapper-class="technology--list" content-class="technology--description" card end class="technology--carousel">
                            <b-tab active>
                                <template slot="title">
                                    <img src="~/assets/logo/css.svg" height="190"/>
                                </template>
                                <p>Tab Contents 1</p>
                            </b-tab>
                            <b-tab active>
                                <template slot="title">
                                    <img src="~/assets/logo/html5.svg" height="188"/>
                                </template>
                                <p>Tab Contents 2</p>
                            </b-tab>
                            <b-tab active>
                                <template slot="title">
                                    <img src="~/assets/logo/java.svg" height="213"/>
                                </template>
                                <p>Tab Contents 3</p>
                            </b-tab>
                            <b-tab active>
                                <template slot="title">
                                    <img src="~/assets/logo/nginx.svg" height="168"/>
                                </template>
                                <p>Tab Contents 4</p>
                            </b-tab>
                            <b-tab active>
                                <template slot="title">
                                    <img src="~/assets/logo/php.svg" height="138"/>
                                </template>
                                <p>Tab Contents 5</p>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </div>
    </component>
</template>

<script>
  export default {
    name: 'cTechnologies',
    props: ['mainTag','mainClass','mainId'],
  }
</script>

<style lang="scss" >
    .technology{
        text-align: center;
    }

    .technology--wrapper{
        position: relative;
        margin: auto;
        padding: 240px 0;
    }

    .technology--wrapper:before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 1020px;
        width: 1020px;
        margin: auto;
        border-radius: 100%;
        border-width: 8px;
        border-color:  rgb(197,217,45);
        border-style: solid;
    }

    .technology--list{
        padding: 0;
        background-color: white;
        border-top: 0;
    }

    .technology--description{
        min-height: 200px;
        font-size: 29px;
    }

    .technology--list li{
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        margin: auto!important;
        justify-content: center;
    }

    .technology--wrapper .technology--list img{
        opacity: 0.25;
        transition: all 0.3s;
        width: 100%;
    }

    .technology--list a.active img,
    .technology--list a:hover img{
        opacity: 1;
    }

    .technology--carousel{
        margin-bottom: 80px;
    }

</style>
