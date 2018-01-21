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
                    <form id="contact-form" class="contact--form" name="contact" action="" data-netlify="true" >
                        <fieldset class="contact--form-fieldset">
                            <div class="contact--form-wrapper">
                                <input id="email" type="email" name="email" placeholder="Your email" class="contact--form-input"/>
                                <button type="submit" class="contact--form-button">
                                    Send
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  import $ from 'jquery';

  export default {
    name: 'v-contact',
    mounted: () => {
      $("#contact-form").submit(function(e) {
        e.preventDefault();

        var $form = $(this);

        $.ajax({
          url: "https://docs.google.com/forms/d/1Wujqpeg6n80BZT8uirZ-bIAWWDIkqR8shvr40MPPXNo/formResponse",
          data: {"emailAddress": $form.find("#email").val()},
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function() {
              alert("Thank you for submission!");
            },
            200: function() {
              alert("Thank you for submission!");
            }
          }
        });
      });
    }
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
            background-image: linear-gradient(left top, rgba(35, 31, 32, 1) 0%, #10AB87 100%);
        }
    }

    .contact--inner{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        z-index: 1;
        position: relative;
        padding: 15px;
        max-width: 950px;
        width: 100%;
        margin: auto;
    }

    .contact--box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        flex: 1 1 auto;
    }

    .contact--title{
        text-transform: uppercase;
        font-size: 50px;
        margin: 0 0 10px;
    }

    .contact--text{
        font-size: 78px;
        font-weight: 700;
        line-height: 49px;
        max-width: 408px;
        width: 100%;
    }

    .contact--form-fieldset{
        border: 0;
        padding: 0;
        margin: 0;
    }

    .contact--form-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .contact--form-input{
        flex: 1 1 auto;
        padding: 11px;
        width: 100%;
        max-width: 270px;
        font-size: 17px;
        margin-right: 25px;
        border: 4px solid #fff;
        border-radius: 7px;
        margin-bottom: 15px;

        @media(min-width: 877px){
            margin-top: 15px;
        }
    }

    .contact--form-button{
        flex: 0 0 auto;
        padding: 9px 25px;
        border: 4px solid #fff;
        text-transform: uppercase;
        color: #fff;
        background: transparent;
        border-radius: 7px;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        margin-bottom: 15px;
        cursor: pointer;

        @media(min-width: 877px){
            margin-top: 15px;
        }
    }


</style>
