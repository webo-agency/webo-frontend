<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    class="contact d-none d-lg-flex"
  >
    <form
      id="contact-form"
      class="container"
      name="contact"
      action=""
    >
      <div class="row align-items-center justify-content-center">
        <div class="col">
          <h1>SAY Hello!</h1>
        </div>
        <div class="col-6 mx-5">
          <div class="row">
            <div class="col">
              <input
                type="email"
                name="email"
                placeholder="Your e-mail address"
                class="contact--form-input"
              >
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label class="contact--label">
                <input
                  type="checkbox"
                  name="agreement"
                > [Do dodania]
              </label>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <button
                type="submit"
                class="contact--form-button btn btn-secondary"
              >
                Send greeting
              </button>
            </div>
          </div>
          <div class="row mt-2 d-none">
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
    name: 'CContact',
    props: {
      'mainTag': {
        type: String,
        default: '',
        required: false
      },
      'mainClass': {
        type: String,
        default: '',
        required: false
      },
      'mainId': {
        type: String,
        default: '',
        required: false
      }
    },
    mounted() {
      this.$root.$emit(
        'section', {
          'id': this.mainId,
          'title': 'SAY Hello!'
        }
      );

      $("#contact-form").submit(function (e) {
        e.preventDefault();

        let $form = $(this);

        if($form.find("#email").val()){
          $.ajax({
            url: "https://docs.google.com/forms/d/12AM41enntn2RGXt2hpFJr1EhTLigmnL3XoA-T8ev_dE/formResponse",
            data: {
              "emailAddress": $form.find("#email").val()
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
              0: function () {
                alert("Thank you for submission!");
              },
              200: function () {
                alert("Thank you for submission!");
              }
            }
          });
        } else {
          alert("Pleas provide valid email!");
        }

      });
    }
  }
</script>

<style lang="scss" scoped>
  .contact {
    display: flex;
    flex-direction: row;
    background-color: #F0FAF7;
    padding: 60px;
  }

  .contact--form-input{
    width: 100%;
    background: transparent;
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: #ccc;
    margin-bottom: 10px;
    box-shadow: inset 0 0 0 20px #F0FAF7;

    &:focus{
      outline: 0;
      border-bottom-color: #000;
    }
  }

  .contact--label{
    font-size: 12px;
    cursor: pointer;
  }
</style>
