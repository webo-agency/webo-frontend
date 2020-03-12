<template>
  <div class="flex flex-col w-full m-auto">
    <section-wrapper
      main-tag="div"
      class="bg-backgroundDark text-white flex flex-col justify-center"
      container-class="flex-col mt-10 mb-10 lg:mt-15vh"
    >
      <carousel
        class="relative mb-10"
      >
        <section-header
          :position-header="api.acf.baner_settings.title_position"
          :number-header="api.acf.baner_settings.title_number ? 1 : 0"  
          :subtitle="$md.renderInline(api.acf.baner_settings.title)"
          :title="$md.renderInline(api.acf.baner_carousel[0].header)"
          title-class="leading-none text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-big-header"
          class="mb-8"
        />
        <buttonContact 
          :text="api.acf.baner_carousel[0].button.title"
          :link="api.acf.baner_carousel[0].button.hyperlink"
        />
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
        :position-header="api.acf.services_settings.title_position"
        :number-header="api.acf.services_settings.title_number ? 1 : 0"
        :subtitle="$md.renderInline(api.acf.services_settings.title)"
        :title="$md.renderInline(api.acf.services_settings.header)"
        class="mb-8"
      />
      <p 
        class="mb-5 w-full md:w-1/2 lg:w-1/3"
        v-html="api.acf.services_settings.description"
      />
      <articleList
        :articles="api.acf.services_promoted"
        :more="api.acf.services_promoted_single.homepage"
      />
    </section-wrapper>

    <section-wrapper
      main-tag="section"
      class="bg-backgroundDark text-white"
    >
      <section-header 
        :position-header="api.acf.technology_settings.title_position"
        :number-header="api.acf.technology_settings.title_number ? 2 : 0"
        :subtitle="$md.renderInline(api.acf.technology_settings.title)"
        :title="$md.renderInline(api.acf.technology_settings.header)"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full md:w-2/3 mb-8 lg:pr-10"
      />
      <p 
        class="mb-10 w-full md:w-1/2 lg:w-1/3"
        v-html="api.acf.technology_settings.description"
      />
    </section-wrapper>

    <section-wrapper
      main-tag="section"
    >
      <section-header 
        :position-header="api.acf.company_settings.title_position"
        :number-header="api.acf.company_settings.title_number ? 3 : 0"
        :subtitle="$md.renderInline(api.acf.company_settings.title)"
        :title="$md.renderInline(api.acf.company_settings.header)"
        class="w-full md:w-2/3 mb-8 lg:pr-10"
      />
      <p 
        class="mb-10 w-full md:w-1/2 lg:w-1/3"
        v-html="api.acf.company_settings.description"
      />
      <articleList
        :articles="api.acf.company_promoted"
      />
    </section-wrapper>

    <section-wrapper
      main-tag="div"
      class="bg-backgroundLight"
    >
      <section-header 
        :position-header="api.acf.projects_settings.title_position"
        :number-header="api.acf.projects_settings.title_number ? 3 : 0"
        :subtitle="$md.renderInline(api.acf.projects_settings.title)"
        :title="$md.renderInline(api.acf.projects_settings.header)"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
      <p 
        class="mb-10 w-full md:w-1/2 lg:w-1/3"
        v-html="api.acf.projects_settings.description"
      />
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
      height-auto
    >
      <section-header
        :position-header="true"
        :number-header="0"
        :subtitle="$md.renderInline('Zainteresowany?')"
        :title="$md.renderInline('Porozmawiajmy <br/>o Twoim <em>projekcie</em>')"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="mb-8 md:mb-0 w-full md:w-2/3 lg:w-1/3"
      />
      <buttonContact 
        class="mb-4 xs:mb-8 lg:mb-0 mt-auto md:mb-0 md:ml-auto lg:ml-0"
        :text="api.acf.baner_carousel[0].button.title"
        :link="api.acf.baner_carousel[0].button.link"
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
    async asyncData ({ app }) {
      // console.log(app.$wp); // eslint-disable-line
      let data = await app.$wp.frontPage();
      
      data.acf.services_promoted = [
          await app.$wp.pages().id(data.acf.services_promoted[0]),
          await app.$wp.pages().id(data.acf.services_promoted[1]),
          await app.$wp.pages().id(data.acf.services_promoted[2]),
          await app.$wp.pages().id(data.acf.services_promoted[3])
      ];

      data.acf.company_promoted = [
          await app.$wp.pages().id(data.acf.company_promoted[0]),
          await app.$wp.pages().id(data.acf.company_promoted[1]),
          await app.$wp.pages().id(data.acf.company_promoted[2]),
          await app.$wp.pages().id(data.acf.company_promoted[3]),
          await app.$wp.pages().id(data.acf.company_promoted[4])
      ];

      // data.acf.technology_promoted = [
      //     await app.$wp.pages().id(data.acf.technology_promoted[0]),
      //     await app.$wp.pages().id(data.acf.technology_promoted[1]),
      //     await app.$wp.pages().id(data.acf.technology_promoted[2]),
      //     await app.$wp.pages().id(data.acf.technology_promoted[3]),
      //     await app.$wp.pages().id(data.acf.technology_promoted[4])
      // ];

      // data.acf.reviews_promoted = [
      //     await app.$wp.pages().id(data.acf.reviews_promoted),
      // ];

      // data.acf.category_technology_promoted = [
      //     await app.$wp.pages().id(data.acf.category_technology_promoted[0]),
      //     await app.$wp.pages().id(data.acf.category_technology_promoted[1]),
      //     await app.$wp.pages().id(data.acf.category_technology_promoted[2]),
      //     await app.$wp.pages().id(data.acf.category_technology_promoted[3]),
      //     await app.$wp.pages().id(data.acf.category_technology_promoted[4])
      // ];

      console.log(data.acf);  // eslint-disable-line
      // console.log(data2); // eslint-disable-line
      // axios.get(env.API_URL.concat('/acf/v3/options/options')).then((response) => {
      //   console.log(response.data);  // eslint-disable-line
      // })
      
      // // data.id
      return { 
        api: data,
        // promoted: data2
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
