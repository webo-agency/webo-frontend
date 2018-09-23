<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="contact d-none d-lg-flex">
        <form id="contact-form" class="container" name="contact" action="">
            <div class="row align-items-center justify-content-center">
                <div class="col-3">
                    <h1>SAY Hello!</h1>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col">
                            <input type="email" name="email" placeholder="Your email" class="contact--form-input"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>
                                <input type="checkbox" name="agreement"/> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda cupiditate deserunt ea eius fugiat in, iste
                                reprehenderit voluptatibus? Accusantium consequuntur maxime minus officia, quos rerum
                                voluptatibus! Consequuntur qui ratione totam.
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="col">
                            <button type="submit" class="contact--form-button btn btn-secondary ">
                                Send
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <a href="#">Send message →</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </component>
</template>
<script>
  import $ from 'jquery';

  export default {
    name: 'cContact',
    props: ['mainTag','mainClass','mainId'],
    mounted() {
        this.$root.$emit(
          'section', {
            'id': this.mainId,
            'title': 'SAY Hello!'
          }
        );

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
      padding: 60px;
  }
</style>
