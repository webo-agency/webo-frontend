<template>
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
    class="contact"
  >
    <form
      id="contact-form"
      class="container"
      name="contact"
      action=""
    >
      <div class="row align-items-center justify-content-center mx-3">
        <div class="col-12 col-lg">
          <h1 class="mb-0">SAY Hello!</h1>
        </div>
        <div class="col-12 col-lg-6 mx-5 my-3">
          <div class="row">
            <div class="col">
              <input
                id="email"
                ref="email"
                type="email"
                name="email"
                placeholder="Twój adres email..."
                class="contact--form-input mb-3"
              >
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label class="contact--label">
                <input
                  type="checkbox"
                  name="agreement"
                > Wyrażam zgodę na przetwarzanie moich danych osobowych przez firmę webo Maciej Zawadzki z siedzibą w Gliwicach. Wiem, że w każdej chwili będę mógł odwołac zgodę.
              </label>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg contact--buttons">
          <div class="row">
            <div class="col">
              <button
                type="submit"
                class="contact--form-button btn btn-secondary"
              >
                Wyślij wiadomość
              </button>
            </div>
          </div>
          <div class="row mt-2 d-none">
            <div class="col">
              <a href="#">Wyślij wiadomość →</a>
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
    name: 'Contact',
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
    data() {
      return {
        inputFocused: false
      }
    },
    watch: {
      inputFocused: function (val) {
        if(val){
          this.$refs.email.$el.focus();
        }
      }
    },
    created() {
      this.$store.watch(
        // When the returned result changes...
        function (state) {
          return state
        },
        // Run this callback
        function (newVal, oldVal) {
          if(newVal){
            this.inputFocused(this.$store.contact.inputFocus);
          }
        }
      );
    },
    mounted() {
      if(!this.$attrs.disabled) {
        this.$root.$emit(
          'section', {
            'id': this.mainId,
            'title': 'SAY Hello!'
          }
        );
      }

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
                alert("Dziękujemy za zgłoszenie!");
              },
              200: function () {
                alert("Dziękujemy za zgłoszenie!");
              }
            }
          });
        } else {
          alert("Niepoprawny adres email!");
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
    padding: 30px 0;

    @media(min-width: 1440px){
      padding: 60px 0;
    }
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
    overflow: hidden;
  }

  .contact--buttons{
    @media (min-width: 1106px) {
      text-align: right;
    }
  }
</style>
