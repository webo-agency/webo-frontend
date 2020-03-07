<template>
  <div class="flex flex-col w-full m-auto">
    <section-wrapper
      main-tag="div"
      class="bg-backgroundDark text-white"
      container-class="flex-col mt-10 mb-10 lg:mt-15vh"
    >
      <carousel
        class="relative mb-10"
      >
        <section-header
          number-header
          :subtitle="$md.renderInline('Welcome in webo')"
          :title="$md.renderInline(`Web<br/>development<br/>and design<br/><em>partner</em>`)"
          class="mb-8"
        />
        <buttonContact />
        <arrowNextSection 
          main-class="z-30 hidden xl:block"
          arrow-color="#FFFFFF"
        />
      </carousel>
    </section-wrapper>
    <section-wrapper
      main-tag="section"
    >
      <section-header 
        :number-header="1"
        :subtitle="$md.renderInline('Usługi')"
        :title="$md.renderInline('W czym możemy <br/>Ci <em>pomóc?</em>')"
        class="mb-8"
      />
      <p class="mb-5 w-full md:w-1/2 lg:w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure blanditiis mollitia unde ex harum eaque, autem, tempora amet, beatae totam possimus molestias adipisci? Autem veniam consectetur amet magnam veritatis!
      </p>
      <articleList
        :articles="serviceList"
      />
    </section-wrapper>

    <section-wrapper
      main-tag="section"
      class="bg-backgroundDark text-white"
    >
      <section-header 
        :number-header="2"
        :subtitle="$md.renderInline('Technologie')"
        :title="$md.renderInline('Wybierzmy najlepsze <br/>rozwiązanie dla Twojego <br/><em>projektu</em>')"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-4xl"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full md:w-2/3 mb-8 lg:pr-10"
      />
      <p class="mb-10 w-full md:w-1/2 lg:w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure blanditiis mollitia unde ex harum eaque, autem, tempora amet, beatae totam possimus molestias adipisci? Autem veniam consectetur amet magnam veritatis!
      </p>
    </section-wrapper>

    <section-wrapper
      main-tag="section"
    >
      <section-header 
        :number-header="3"
        :subtitle="$md.renderInline('Webo')"
        :title="$md.renderInline('Dlaczego <em>my?</em>')"
        class="w-full md:w-2/3 mb-8 lg:pr-10"
      />
      <p class="mb-10 w-full md:w-1/2 lg:w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure blanditiis mollitia unde ex harum eaque, autem, tempora amet, beatae totam possimus molestias adipisci? Autem veniam consectetur amet magnam veritatis!
      </p>
      <articleList
        :articles="companyList"
      />
    </section-wrapper>

    <section-wrapper
      main-tag="div"
      class="bg-backgroundLight"
    >
      <section-header 
        :number-header="4"
        :subtitle="$md.renderInline('Projekty')"
        :title="$md.renderInline('Co <em>zmalowaliśmy?</em>')"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-3xl"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
      <p class="mb-10 w-full md:w-1/2 lg:w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure blanditiis mollitia unde ex harum eaque, autem, tempora amet, beatae totam possimus molestias adipisci? Autem veniam consectetur amet magnam veritatis!
      </p>
    </section-wrapper>

    <section-wrapper
      main-tag="div"
      class="bg-backgroundLight"
    >
      <section-header 
        :title="$md.renderInline('Mówią <br/>o <em>nas</em>')"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
    </section-wrapper>

    <section-wrapper
      main-tag="div"
      class="bg-backgroundDark text-white"
      container-class="mt-4 xs:mt-10 mb-4 lg:mb-10 flex-col md:flex-row items-start"
    >
      <section-header
        number-header
        :subtitle="$md.renderInline('Zainteresowany?')"
        :title="$md.renderInline('Porozmawiajmy <br/>o Twoim <em>projekcie</em>')"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-3xl"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="mb-8 md:mb-0 w-full md:w-2/3 lg:w-1/3"
      />
      <buttonContact 
        class="mb-4 xs:mb-8 lg:mb-0 mt-auto md:mb-0 md:ml-auto lg:ml-0"
      />
    </section-wrapper>
  </div>
</template>

<script>
  import sectionWrapper from "~/components/section-wrapper.vue";
  import sectionHeader from "~/components/section-header.vue";
  import arrowNextSection from "~/components/arrow-next-section.vue";
  import buttonContact from "~/components/button-contact.vue";
  import carousel from "~/components/carousel.vue";
  import articleList from "~/components/article-list.vue";

  export default {
    components: {
      sectionWrapper,
      sectionHeader,
      arrowNextSection,
      buttonContact,
      carousel,
      articleList
    },
    data(){
      return {
        serviceList: [
          {
            icon: "",
            header: "Audyt www",
            paragraph: "Przetestuj swoją stronę <br/>i sprawdź co wymaga poprawy",
            list: [
              "Bezpieczeństwo",
              "Wydajność",
              "Responsywność",
              "Testy użyteczności"
            ],
            linkTitle: "Szczegóły",
            link: "#",
          },
          {
            icon: "",
            header: "Projektowanie",
            paragraph: "Opowiedz o swojej wizji<br/> i pozwól nam ją zrealizować",
            list: [
              "Projektowanie doświadczeń",
              "Projektowanieinterfejsów",
              "Identyfikacja wizualna",
              "Fotografia użytkowa"
            ],
            linkTitle: "Szczegóły",
            link: "#",
          },
          {
            icon: "",
            header: "Wdrożenia",
            paragraph: "Niemożliwe jest możliwe, sprawdź! <br/>Zajmujemy się wdrożeniami:",
            list: [
              "Strony www",
              "E-commerce",
              "Aplikacje mobilne",
              "Zaplecze techniczne"
            ],
            linkTitle: "Szczegóły",
            link: "#",
          },
          {
            icon: "",
            header: "Wsparcie",
            paragraph: "",
            list: [
              "Help Desk",
              "Monit bezpieczeństwa",
              "Usuwanie awarii i błędów",
              "Serwis 24h"
            ],
            linkTitle: "Szczegóły",
            link: "#",
          },
          {
            icon: "",
            header: "Masz <em>pomysł</em> <br/>ale nie wiesz <br/>od czego <br/>zacząć?",
            paragraph: "",
            list: [],
            linkTitle: "Napisz do nas",
            link: "#",
            dark: true
          }
        ],
        companyList: [
          {
            icon: "",
            header: "Partnerskie podejście",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos suscipit dolor! Veritatis labore asperiores quaerat, exercitationem ipsa aliquam ab nisi id maiores, aliquid perspiciatis similique praesentium! Voluptas, ea in!",
          },
          {
            icon: "",
            header: "Transparentność",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos suscipit dolor! Veritatis labore asperiores quaerat, exercitationem ipsa aliquam ab nisi id maiores, aliquid perspiciatis similique praesentium! Voluptas, ea in!",
          },
          {
            icon: "",
            header: "Elastyczność",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos suscipit dolor! Veritatis labore asperiores quaerat, exercitationem ipsa aliquam ab nisi id maiores, aliquid perspiciatis similique praesentium! Voluptas, ea in!",
          },
          {
            icon: "",
            header: "Bezpieczeństwo",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos suscipit dolor! Veritatis labore asperiores quaerat, exercitationem ipsa aliquam ab nisi id maiores, aliquid perspiciatis similique praesentium! Voluptas, ea in!",
          },
          {
            icon: "",
            header: "Doświadczenie",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos suscipit dolor! Veritatis labore asperiores quaerat, exercitationem ipsa aliquam ab nisi id maiores, aliquid perspiciatis similique praesentium! Voluptas, ea in!",
          }
        ]
      }
    },
    head() {
      return {
        title: `webo - Welcome in home of innovation`,
        meta: [
          {
            name: "description",
            content: "We are webo - interdisciplinary agency opened for you needs"
          }
        ]
      };
    },
    mounted() {  /*  */ }
  };
</script>
