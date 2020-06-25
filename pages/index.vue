<template>
  <div class="flex flex-col w-full m-auto">
    <SectionWrapper
      main-tag="div"
      :main-id="frontPageData.baner_settings.is_linkable"
      :main-title="frontPageData.baner_settings.is_linkable ? frontPageData.baner_settings.title : ''"
      class="bg-backgroundDark text-lightText flex flex-col justify-center"
      container-class="flex-col mt-10 mb-10 lg:mt-15vh"
    >
      <Carousel
        class="relative mb-10"
      >
        <SectionHeader
          :position-header="frontPageData.baner_settings.title_position"  
          :number-header="parseInt(frontPageData.baner_settings.title_number)"
          :subtitle="frontPageData.baner_settings.title"
          :title="frontPageData.baner_carousel[0].header"
          title-class="leading-none text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-big-header"
          class="mb-8"
        />
        <ContactButton
          :text="frontPageData.baner_carousel[0].button.title"
          :link="frontPageData.baner_carousel[0].button.hyperlink"
        />
        <ArrowBlock
          main-class="z-30 hidden xl:block"
          arrow-color="#FFFFFF"
          :section-link="frontPageData.services_settings.is_linkable"
        />
      </Carousel>
    </SectionWrapper>

    <SectionWrapper
      main-tag="section"
      :main-id="frontPageData.services_settings.is_linkable"
      :main-title="frontPageData.services_settings.is_linkable ? frontPageData.services_settings.title : ''"
    >
      <SectionHeader 
        :position-header="frontPageData.services_settings.title_position"
        :number-header="parseInt(frontPageData.services_settings.title_number)"
        :subtitle="frontPageData.services_settings.title"
        :title="frontPageData.services_settings.header"
        class="mb-8"
      />
      <p
        class="mb-5 w-full md:w-1/2 lg:w-1/3"
      >
        {{ frontPageData.services_settings.description }}
      </p>
      <div class="w-100 flex flex-row flex-wrap">
        <ServiceBlock
          :title="frontPageData.services_promoted[0].title"
          :description="frontPageData.services_promoted[0].description"
          :facilities="frontPageData.services_promoted[0].list ? frontPageData.services_promoted[0].list : []"
          icon="window-search.svg"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="frontPageData.services_promoted[1].title"
          :description="frontPageData.services_promoted[1].description"
          :facilities="frontPageData.services_promoted[1].list ? frontPageData.services_promoted[1].list : []"
          icon="e-commerce.svg"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="frontPageData.services_promoted[2].title"
          :description="frontPageData.services_promoted[2].description"
          :facilities="frontPageData.services_promoted[2].list ? frontPageData.services_promoted[2].list : []"
          icon="network.svg"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="frontPageData.services_promoted[3].title"
          :description="frontPageData.services_promoted[3].description"
          :facilities="frontPageData.services_promoted[3].list ? frontPageData.services_promoted[3].list : []"
          icon="plant.svg"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="frontPageData.services_promoted[4].title"
          :description="frontPageData.services_promoted[4].description"
          :facilities="frontPageData.services_promoted[4].list ? frontPageData.services_promoted[4].list : []"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="frontPageData.services_promoted_single.title"
          :cta="frontPageData.services_promoted_single.link.title"
          :hyperlink="frontPageData.services_promoted_single.link.hyperlink"
          :is-dark="true"
        />
      </div>
    </SectionWrapper>

    <SectionWrapper
      main-tag="section"
      :main-id="frontPageData.process_settings.is_linkable"
      :main-title="frontPageData.process_settings.is_linkable ? frontPageData.process_settings.title : ''"
      class="bg-backgroundLight"
      container-class="container flex flex-col mt-10 mb-10 lg:mt-section-lg"
    >
      <SectionHeader 
        :position-header="frontPageData.process_settings.title_position"
        :number-header="parseInt(frontPageData.process_settings.title_number)"
        :subtitle="frontPageData.process_settings.title"
        :title="frontPageData.process_settings.header"
        class="w-10/12 mb-8 text-xs"
      />
      <p
        class="mb-12 w-full md:w-1/2 lg:w-1/3"
      >
        {{ frontPageData.process_settings.description }}
      </p>
      <div 
        v-show="frontPageData.process_list.length"
        class="w-10/12 flex flex-row flex-wrap"
      >
        <InformationBlock 
          v-for="(item, key) in frontPageData.process_list"
          :key="key"
          class="mb-8 w-1/3 pr-8"
        >
          <template slot="icon">
            <img 
              src="~assets/icons/corb-tag.svg"
              width="20px"
              alt="shape"
            >
          </template>
          <template slot="title">
            <h1>{{ key+1 }}. {{ item.process_list_title }}</h1>
          </template>
          <template slot="description">
            <p>{{ item.process_list_description }}</p>
          </template>
        </InformationBlock>
      </div>
    </SectionWrapper> 

    <SectionWrapper
      main-tag="div"
      :class="{
        'flex': true,
        'flex-col': true,
        'overflow-hidden': true,
        'bg-backgroundDark text-lightText': frontPageData.visualisation_background_color == 'black',
        'bg-white text-darkText': frontPageData.visualisation_background_color == 'white',
        'py-10': true,
        'xs:min-h-240 md:min-h-500 lg:min-h-mobile-screen': true
      }"
      container-class="relative flex-auto"
      style="background-image: linear-gradient(to bottom, rgb(249, 249, 249) 50%, rgb(13, 13, 13) 50%)"
      height-auto
    >
      <div
        class="parallax-background absolute top-0 bottom-0 w-screen max-w-none bg-cover bg-no-repeat bg-fixed rounded-lg"
        :style="parallaxBackground"
      />
    </SectionWrapper>
    
    <SectionWrapper
      main-tag="section"
      :main-id="frontPageData.technology_settings.is_linkable"
      :main-title="frontPageData.technology_settings.is_linkable ? frontPageData.technology_settings.title : ''"
      class="bg-backgroundDark text-lightText overflow-hidden bar-bottom"
    >
      <img
        src="~assets/slice4.svg"
        alt="shape"
        class="background-shape-1"
      >
      <div class="relative flex-auto flex flex-col flex-auto w-full md:w-1/2">
        <SectionHeader 
          :position-header="frontPageData.technology_settings.title_position"
          :number-header="2"
          :subtitle="frontPageData.technology_settings.title"
          :title="frontPageData.technology_settings.header"
          title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
          subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
          class="mb-8 lg:pr-10"
        />
        <LogoList 
          class="w-full md:w-4/5"
          :list="frontPageData.technology_promoted_list"
        />
        <p
          class="mb-10 w-full md:w-4/5"
          v-html="frontPageData.technology_settings.description"
        />
        <TechnologyBlock
          class="md:absolute top-0 md:w-half-screen box-position"
          :technologies="frontPageData.technologies"
          :promoted-technologies="frontPageData.category_technology_promoted_list"
        />
      </div>
    </SectionWrapper>
    
    <SectionWrapper
      main-tag="section"
      :main-id="frontPageData.company_settings.is_linkable"
      :main-title="frontPageData.company_settings.is_linkable ? frontPageData.company_settings.title : ''"
    >
      <SectionHeader 
        :position-header="frontPageData.company_settings.title_position"
        :number-header="3"
        :subtitle="frontPageData.company_settings.title"
        :title="frontPageData.company_settings.header"
        class="w-full md:w-2/3 mb-8 lg:pr-10 md:pl-20"
      />
      <div class="relative md:pl-20">
        <img
          :src="frontPageData.company_graphic.url"
          :alt="frontPageData.company_graphic.alt"
          class="absolute h-full rounded-lg z-10 object-cover img-list-left"
        >
        <p
          class="mb-10 w-full md:w-1/2 lg:w-1/3"
          v-html="frontPageData.company_settings.description"
        />
        <article-list
          :articles="frontPageData.company_promoted"
          :more="frontPageData.company_promoted_single.homepage"
          :is-mobile-slider="true"
        />
      </div>
    </SectionWrapper>

    <div class="bg-backgroundDark">
      <img 
        alt="Proces - in nutshell"
        src="~assets/section_360px.svg"
        class="lg:hidden w-full"
        width="100%"
      >

      <img 
        alt="Proces - big view"
        src="~assets/section_1920px.svg"
        class="hidden lg:block w-full"
        width="100%"
      >
    </div>

    <SectionWrapper
      main-tag="div"
      :main-id="frontPageData.projects_settings.is_linkable"
      :main-title="frontPageData.projects_settings.is_linkable ? frontPageData.projects_settings.title : ''"
      class="bg-backgroundLight overflow-hidden"
    >
      <SectionHeader 
        :position-header="frontPageData.projects_settings.title_position"
        :number-header="3"
        :subtitle="frontPageData.projects_settings.title"
        :title="frontPageData.projects_settings.header"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
      <p 
        class="mb-10 w-full md:w-1/2 lg:w-1/3"
        v-html="frontPageData.projects_settings.description"
      />
      <img
        src="~assets/slice1.svg"
        alt="shape"
        class="background-shape-3"
      >
      <client-only>
        <ProjectSlider
          :slides="frontPageData.projects_carousel"
          class="z-10"
        />
      </client-only>
    </SectionWrapper>

    <SectionWrapper
      :main-disabled="true"
      main-tag="div"
      :main-id="frontPageData.reviews_settings.is_linkable"
      :main-title="frontPageData.reviews_settings.is_linkable ? frontPageData.reviews_settings.title : ''"
      class="bg-white"
    >
      <SectionHeader 
        :title="frontPageData.reviews_settings.header"
        :subtitle="frontPageData.reviews_settings.title"
        :position-header="frontPageData.reviews_settings.title_position"
        :number-header="4"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
    </SectionWrapper>

    <SectionWrapper
      main-tag="div"
      class="overflow-hidden bg-white"
      :height-auto="true"
    >
      <SectionHeader 
        :title="`Mówią o <em>nas</em>`"
        :subtitle="frontPageData.reviews_settings.title"
        :number-header="5"
        class="w-full md:w-1/3 mb-8 lg:pr-10 lg:absolute"
      />
      <client-only>
        <OpinionsSlider 
          :slides="frontPageData.reviews_promoted"
        />
      </client-only>
    </SectionWrapper>

    <SectionWrapper
      main-tag="div"
      class="overflow-hidden"
      container-class="bg-backgroundLight afterLogotypes"
      height-auto
    >
      <client-only>
        <LogoSlider
          v-if="frontPageData.brands_slajder.length"
          :slides="frontPageData.brands_slajder"
        />
      </client-only>
    </SectionWrapper>
  </div>  
</template>

<script>  
  export default {
    data() {
      return {
        darkCTA: 'dark',
        lightCTA: 'light',
        articleType: {
          service: 'service',
          default: 'default',
        },
      };
    },
    computed: {
      frontPageData() {
        return this.$store.getters['homepage/getStoreData']  //look i added the name of the toolbar module
      },
      frontPageReviews () {
        return this.$store.getters["reviews/getFrontPage"]
      },
      contactData () {
        return this.$store.state.general.data
      },
      gradientBackground(){
        return {
          "background-image": `linear-gradient(to bottom, ${this.$store.state.homepage.visualisation_background_color} 50%, ${this.$store.state.homepage.visualisation_second_background_color} 50%)`
        }
      },
      parallaxBackground() {
        return {
          "background-image": `url(${this.$store.state.homepage.visualisation_image.url})`
        };
      }
    },
    async fetch ({ app, store }) {
  
      await app.$wp.namespace( 'wuxt' ).v1().frontPage().then(function(data){
         store.commit('homepage/save', data);
      }); 

      await app.$wp.namespace( 'wp/v2' ).technology().perPage(20).get().then(function(data){
        store.commit('homepage/saveTechnology', data);
      }); 
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

<style lang="scss" scoped>
  .parallax-background{
    left: 15px;
    filter: brightness(0.5);
  }

  .img-list-left{
    width: 30vw;
    object-position: -45vw;
    left: -15px;
    transform: translate(-100%, 0);
    filter: brightness(0.2);
  }

  @media (min-width: 1024px) {
      .img-list-left{
        height: 127%;
      }
  }

  .bar-bottom:after{
    content: '';
    background: #fff;
    height: 101px;
    width: 100%;
    display: block;
  }

  .box-position{
    bottom: -100px;
    top: auto;
    left: 100%;
  }

  @media (min-width: 1024px) {
    .box-position{
        bottom: -250px;
    }
  }

  .background-shape-1 {
    position: absolute;
    width: 404px;
    transform: translate(-450px, 50%);
    top: -23%;
    
    @media (min-width: 1920px) {
      transform: translate(-500px, 50%);
    }
  }

  .background-shape-2 {
    position: absolute;
    left: 0;
    top: 43%;
    transform: translateY(-11%);
    z-index: 0;
    
    @media (min-width: 1920px) {
      top: 50%;
    }
  }

  .background-shape-3 {
    position: absolute;
    right: 0;
    transform: translate(50%, -50%);
    top: 50%;
    z-index: 0;
    width: 502px;
    
    @media (min-width: 768px) {
      top: 0;
      transform: translate(-6%, 58%);
    }
  }
</style>