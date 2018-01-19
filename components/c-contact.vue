<template>
    <section class="contact">
        <div class="contact--inner">
            <div class="contact--box">
                <div class="contact--box-left">
                    <h1 class="contact--title">Say Hi!</h1>
                    <p class="contact--text">
                        Let's talk<br/>
                        about<br/>
                        your<br/>
                        needs<br/>
                        and keep<br/>
                        in touch.
                    </p>
                </div>
                <div class="contact--box-right">
                    <form class="contact--form">
                        <fieldset class="contact--form-fieldset">
                            <input type="text" name="user" placeholder="Your email" content="contact--form-input"/>
                            <button class="contact--form-button">
                                Send
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  export default {
    name: 'v-contact'
  }
</script>

<style lang="scss" scoped>
    .contact {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        min-height: 100vh;
        width: 100%;
        background-image: url(/alice-achterhof-85968.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;


        &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            opacity: 0.5;
            background-color: rgba(0, 0, 0, 1);
            background-image: linear-gradient(left top, rgba(35, 31, 32, 1) 0%, rgba(16, 17, 135, 1) 100%);
        }
    }

    .contact--inner{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        z-index: 1;
        position: relative;
    }

    .contact--box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-around;
    }

    .contact--title{
        font-family: Roboto, Arial, sans-serif;
        text-transform: uppercase;
        font-size: 50px;
        margin: 0 0 10px;
    }

    .contact--text{
        font-family: Roboto, Arial, sans-serif;
        font-size: 60px;
        font-weight: 700;
        line-height: 44px;
    }
</style>
