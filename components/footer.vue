<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class="footer text-white"
  >
    <div class="container flex flex-row flex-wrap">
      <div class="flex flex-col w-full lg:w-2/3 lg:order-2 flex flex-col mt-8">
        <div class="w-full lg:w-4/5">
          <h2 class="xs:ml-4 mb-1 font-medium text-base xs:text-xl">
            Usługi
          </h2>

          <ul class="flex flex-row flex-wrap font-medium list-dash mb-10 break-all xs:break-normal text-xs xs:text-base">
            <li class="w-full xs:w-1/2 lg:w-1/3">
              <a href="">Audyt www</a>
            </li>
            <li class="w-full xs:w-1/2 lg:w-2/3">
              <a href="">Projektowanie</a>
            </li>
            <li class="w-full xs:w-1/2 lg:w-1/3">
              <a href="">Wdrożenia</a>
            </li>
            <li class="w-full xs:w-1/2 lg:w-2/3">
              <a href="">Wsparcie</a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-4/5">
          <h2 class="xs:ml-4 mb-1 font-medium text-base xs:text-xl">
            Webo
          </h2>

          <ul class="flex flex-row flex-wrap font-medium list-dash mb-10 break-all xs:break-normal text-xs xs:text-base">
            <li class="w-full xs:w-1/2 lg:w-1/3">
              <a href="">Projekty</a>
            </li>
            <li class="w-full xs:w-1/2 lg:w-1/3">
              <a href="">Ciasteczka</a>
            </li>
            <li class="w-full xs:w-1/2 lg:w-1/3">
              <a href="/privacy-policy">Polityka prywatności</a>
            </li>
            <li class="w-full xs:w-1/2 lg:w-1/3">
              <a href="/rights-and-licenses">Licencje</a>
            </li>
            <li class="w-full xs:w-1/2 lg:w-1/3">
              <a
                href="http://status.webo.agency"
                target="_blank"
                rel="noopener noreferrer"
              >Status</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full w-full sm:w-1/3 lg:order-1 flex flex-col mt-8 mb-6 text-xs xs:text-base">
        <div class="mb-8">
          <h2 class="xs:ml-4 mb-1 font-medium text-base xs:text-xl">
            Gliwice
          </h2>

          <address class="address leading-loose not-italic">
            ul. Józefa Elsnera 1/7, <br>
            44-100 Gliwice
          </address>

          <a href="tel:+48223906234">
            +48 223 906 234
          </a>
        </div>

        <p class="mb-5 leading-tight">
          Kontakt z naszym zespołem
          <a 
            class="block text-main text-overflow" 
            href="mailto:support@webo.agency"
          >
            support@webo.agency
          </a>
        </p>


        <ul class="flex flex-wrap">
          <li class="fb flex-initial mr-2 mb-4">
            <a
              class="link"
              href="https://www.facebook.com/meet.webo"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 4 7"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.41421"
                xml:space="preserve"
              >
                <path
                  fill="none"
                  d="M-212.18-1325.52h460.8v1952h-460.8z"
                />
                <path
                  fill="#FFFFFF"
                  d="M3.258 3.611h-.953v3.398H.892V3.611H.22v-1.2h.672v-.777c0-.555.264-1.425 1.425-1.425l1.046.004v1.165h-.759c-.124 0-.299.062-.299.327v.707H3.38l-.122 1.199z"
                />
              </svg>
            </a>
          </li>
          <li class="in flex-initial mr-4 mb-4">
            <a
              class="link"
              href="https://www.instagram.com/weboagency/"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 7 7"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1"
                xml:space="preserve"
              >
                <path
                  fill="none"
                  d="M-241.46-1325.52h460.8v1952h-460.8z"
                />
                <path
                  d="M2.029.209A1.89 1.89 0 00.14 2.098V5.12a1.89 1.89 0 001.889 1.889h3.023A1.888 1.888 0 006.94 5.12V2.098A1.888 1.888 0 005.052.209H2.029zm3.778.755a.378.378 0 110 .757.378.378 0 010-.757zM3.54 1.72a1.89 1.89 0 110 3.779 1.89 1.89 0 010-3.779zm0 .755a1.14 1.14 0 00-1.133 1.134c0 .622.512 1.133 1.133 1.133.622 0 1.134-.511 1.134-1.133A1.14 1.14 0 003.54 2.475z"
                  fill="#fff"
                  fill-rule="nonzero"
                />
              </svg>
            </a>
          </li>
          <li class="ld flex-initial mb-4">
            <a
              class="link"
              href="https://www.linkedin.com/company/26269988/admin/"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
                xml:space="preserve"
              >
                <path 
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
                  fill="#FFFFFF"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full lg:w-5/12 ml-auto bg-main text-black font-medium lg:pl-4 text-micro xs:text-xs">
      <div class="container">
        {{ copyrightDate }} Webo. <br class="block xs:hidden"> All rights reserved
      </div>
    </div>
  </component>
</template>
<script>
export default {
  name: "Footer",
  props: {
    mainTag: {
      type: String,
      default: "",
      required: false
    },
    mainClass: {
      type: String,
      default: "",
      required: false
    }
  },
  data: function() {
    return {
      emoji: '_(^.^)_',
      copyrightDate: `© ${ new Date().getFullYear() < 2020 ? '2019' : '2019 ~ ' + new Date().getFullYear() }`
    };
  },
  methods: {
    telephoneFormat(number){
      let numberArray = Array.from(number);

      numberArray.splice( 3, 0, " ");
      numberArray.splice( 6, 0, " ");
      numberArray.splice( 10, 0, " ");
      numberArray.splice( 13, 0, " ");

      return numberArray.join('');
    },
    focusContact(event){
       if( this.$route.path !== '/'){
         window.location = event.target.href;
       }
      this.$root.$emit('contactFooterFocus');      
    }
  }
};
</script>
