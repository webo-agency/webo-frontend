<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="work">
        <div class="work--outer flex-grow-1">
            <div class="work--inner">
                <div class="work--wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col d-flex flex-column align-center">
                                <h1 class="work--title decoration decoration--bottom-right decoration--white">
                                    What are we doing?
                                </h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 m-auto">
                                <p class="work--text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore
                                    earum id impedit libero natus possimus tempora temporibus velit! Amet autem beatae
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col work--hover">
                                <img src="~/assets/branding-normal.svg" class="img-fluid work--image"/>
                                <img src="~/assets/branding-hover.svg" class="img-fluid work--image is-hover"/>
                                <p class="work--info">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid
                                    architecto asperiores consequuntur dolore
                                </p>
                            </div>
                            <div class="col work--hover">
                                <img src="~/assets/programming-normal.svg" class="img-fluid work--image"/>
                                <img src="~/assets/programming-hover.svg" class="img-fluid work--image is-hover"/>
                                <p class="work--info">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid
                                    architecto asperiores consequuntur dolore
                                </p>
                            </div>
                            <div class="col work--hover">
                                <img src="~/assets/support-normal.svg" class="img-fluid work--image"/>
                                <img src="~/assets/support-hover.svg" class="img-fluid work--image is-hover"/>
                                <p class="work--info">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid
                                    architecto asperiores consequuntur dolore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </component>
</template>
<script>
  export default {
    name: 'cWork',
    props: ['mainTag','mainClass','mainId']
  }
</script>

<style lang="scss" scoped>
    .work{
        background-image: radial-gradient(at 0 100%, #424242, #424242 10%, #16A984 110%);
        transition: 0.3s;
    }

    .work--outer{
        background-image: url("/assets/cloud-one.svg");
        background-position: 0 0;
    }

    .work--inner{
        background-image: url("/assets/cloud-two.svg");
        background-position: 100% 100%;
    }

    .work--outer,
    .work--inner{
        background-repeat: no-repeat;
        background-size: contain;
    }

    .work--wrapper{
        padding: 50px 0;
        text-align: center;
        color: #fff;
    }

    .work--title{
        margin: 50px auto;
    }

    .work--text{
        margin-bottom: 100px;
    }

    .work--hover{
        transition: 0.3s;
    }

    .work--image{
        max-height: 257px;
        transition: 0.3s;
    }

    .work--image.is-hover{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0;
        visibility: hidden;
    }

    .work--hover:hover .work--image{
        transform: translate(0, -70px);
        opacity: 0;
        visibility: hidden;
    }

    .work--hover:hover .work--image.is-hover{
        transform: translate(0, -70px);
        opacity: 1;
        visibility: visible;
    }

    .work--info{
        overflow: hidden;
        height: auto;
        visibility: hidden;
        transition: 0.3s;
        opacity: 0;
        margin: auto;
    }

    .work--hover:hover .work--info{
        visibility: visible;
        opacity: 1;
        transform: translate(0, -70px);
        transition-delay: 0.2s;
    }
</style>
