<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="contact">
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
    </component>
</template>
<script>
  import $ from 'jquery';

  export default {
    name: 'cContact',
    props: ['mainTag','mainClass','mainId'],
    mounted: () => {
      $("#contact-form").submit(function(e) {
        e.preventDefault();

        var $form = $(this);

        $.ajax({
          url: "https://docs.google.com/forms/d/12AM41enntn2RGXt2hpFJr1EhTLigmnL3XoA-T8ev_dE/formResponse",
          data: {
            "emailAddress": $form.find("#email").val()
          },
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
  .contact{
      display: flex;
      flex-direction: row;
      background-color: #f0faf7;
  }
</style>
