<template>
  <div class="flex flex-col w-full m-auto">
    <SectionWrapper
      :main-tag="getSectionBaner.mainTag"
      :main-id="getSectionBaner.mainId"
      :main-title="getSectionBaner.mainTitle"
      class="bg-backgroundDark text-lightText flex flex-col justify-center"
      container-class="flex-col mt-10 mb-10 lg:mt-15vh"
    >
      <Carousel
        class="relative mb-10"
      >
        <SectionHeader
          :position-header="getSectionBaner.positionHeader"  
          :subtitle="getSectionBaner.title"
          :title="getSectionBaner.header"
          title-class="leading-none text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-big-header"
          class="mb-8"
        />
        <ContactButton
          :text="getSectionBaner.button.title"
          :link="getSectionBaner.button.hyperlink"
        />
        <ArrowBlock
          main-class="z-30 hidden xl:block"
          arrow-color="#FFFFFF"
          :section-link="getSectionServices.mainId"
        />
      </Carousel>
    </SectionWrapper>

    <SectionWrapper
      :main-tag="getSectionServices.mainTag"
      :main-id="getSectionServices.mainId"
      :main-title="getSectionServices.mainTitle"
    >
      <SectionHeader 
        :position-header="true"
        :number-header="getSectionServices.title_number"
        :subtitle="getSectionServices.title"
        :title="getSectionServices.header"
        class="mb-8"
      />
      <p 
        class="mb-5 w-full md:w-1/2 lg:w-1/3"
      >
        {{ getSectionServices.description }}
      </p>
      <div class="w-100 flex flex-row flex-wrap">
        <ServiceBlock
          :title="getSectionServices.blocks[0].title"
          :description="getSectionServices.blocks[0].description"
          :facilities="getSectionServices.blocks[0].list"
          icon="window-search.svg"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="getSectionServices.blocks[1].title"
          :description="getSectionServices.blocks[1].description"
          :facilities="getSectionServices.blocks[1].list"
          icon="e-commerce.svg"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="getSectionServices.blocks[2].title"
          :description="getSectionServices.blocks[2].description"
          :facilities="getSectionServices.blocks[2].list"
          icon="network.svg"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="getSectionServices.blocks[3].title"
          :description="getSectionServices.blocks[3].description"
          :facilities="getSectionServices.blocks[3].list"
          icon="plant.svg"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          :title="getSectionServices.blocks[4].title"
          :description="getSectionServices.blocks[4].description"
          :facilities="getSectionServices.blocks[4].list"
          cta="Czytaj więcej"
        />
        <ServiceBlock
          title="Powiedz nam czego *potrzebujesz*"
          cta="Porozmawiajmy"
          :is-dark="true"
        />
      </div>
    </SectionWrapper>

    <SectionWrapper
      main-tag="section"
      main-id="procesy"
      main-title="Procesy"
      class="bg-backgroundLight"
      container-class="container flex flex-col mt-10 mb-10 lg:mt-section-lg"
    >
      <SectionHeader 
        :position-header="false"
        subtitle=""
        title="Do projektów podchodzimy *kompleksowo*"
        class="w-10/12 mb-8 text-xs"
      />
      <p
        class="mb-12 w-full md:w-1/2 lg:w-1/3"
      >
        W Webo stawiamy na wysoką jakość usług. Dzięki dobrej organizacji pracy nie musisz martwić się o swój projekt. Nasz sprawdzony proces jest kluczem do osiągnięcia założeń technicznych, a przede wszystkim biznesowych.
      </p>
      <div class="w-10/12 flex flex-row flex-wrap">
        <InformationBlock class="mb-8 w-1/3 pr-8">
          <template slot="icon">
            <img 
              src="~assets/icons/corb-tag.svg"
              width="20px"
              alt="shape"
            >
          </template>
          <template slot="title">
            <h1>1. Planujemy</h1>
          </template>
          <template slot="description">
            <p>Ustalamy zakres prac, rozwiązań technologicznych i przebieg projektu</p>
          </template>
        </InformationBlock>
        <InformationBlock class="mb-8 w-1/3 pr-8">
          <template slot="icon">
            <img 
              src="~assets/icons/corb-tag.svg"
              width="20px"
              alt="shape"
            >
          </template>
          <template slot="title">
            <h1>2. Analizujemy</h1>
          </template>
          <template slot="description">
            <p>Przeprowadzamy analizę rynku, potrzeb biznesu i klientów końcowych</p>
          </template>
        </InformationBlock>
        <InformationBlock class="mb-8 w-1/3 pr-8">
          <template slot="icon">
            <img 
              src="~assets/icons/corb-tag.svg"
              width="20px"
              alt="shape"
            >
          </template>
          <template slot="title">
            <h1>3. Projektujemy</h1>
          </template>
          <template slot="description">
            <p>Projektujemy architekturę informacji oraz kompleksowe rozwiązanie UX/UI</p>
          </template>
        </InformationBlock>
        <InformationBlock class="mb-8 w-1/3 pr-8">
          <template slot="icon">
            <img 
              src="~assets/icons/corb-tag.svg"
              width="20px"
              alt="shape"
            >
          </template>
          <template slot="title">
            <h1>4. Wdrażamy</h1>
          </template>
          <template slot="description">
            <p>Instalujemy zaprojektowane rozwiązanie w wybranym środowisku (technologii)</p>
          </template>
        </InformationBlock>
        <InformationBlock class="mb-8 w-1/3 pr-8">
          <template slot="icon">
            <img 
              src="~assets/icons/corb-tag.svg"
              width="20px"
              alt="shape"
            >
          </template>
          <template slot="title">
            <h1>5. Testujemy</h1>
          </template>
          <template slot="description">
            <p>Kompleksowo sprawdzamy działanie projektu i naprawiamy wykryte błędy</p>
          </template>
        </InformationBlock>
        <InformationBlock class="mb-8 w-1/3 pr-8">
          <template slot="icon">
            <img 
              src="~assets/icons/corb-tag.svg"
              width="20px"
              alt="shape"
            >
          </template>
          <template slot="title">
            <h1>6. Rozwijamy</h1>
          </template>
          <template slot="description">
            <p>Wsparcie techniczne i prace nad ulepszaniem działającego produktu</p>
          </template>
        </InformationBlock>
      </div>
    </SectionWrapper>

    <SectionWrapper
      v-if="frontPageData != ''"
      main-tag="div"
      :class="{
        'flex': true,
        'flex-col': true,
        'overflow-hidden': true,
        'bg-backgroundDark text-lightText': frontPageData.acf.visualisation_background_color == 'black',
        'bg-white text-darkText': frontPageData.acf.visualisation_background_color == 'white',
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
      v-if="frontPageData != ''"
      main-tag="section"
      :main-id="frontPageData.acf.technology_settings.is_linkable"
      :main-title="frontPageData.acf.technology_settings.title"
      class="bg-backgroundDark text-lightText overflow-hidden bar-bottom"
    >
      <img
        src="~assets/slice4.svg"
        alt="shape"
        class="background-shape-1"
      >
      <div class="relative flex-auto flex flex-col flex-auto w-full md:w-1/2">
        <SectionHeader 
          :position-header="frontPageData.acf.technology_settings.title_position"
          :number-header="2"
          :subtitle="frontPageData.acf.technology_settings.title"
          :title="frontPageData.acf.technology_settings.header"
          title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
          subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
          class="mb-8 lg:pr-10"
        />
        <LogoList 
          class="w-full md:w-4/5"
          :list="frontPageData.acf.technology_promoted"
        />
        <p
          v-if="frontPageData.acf.technology_settings.description"
          class="mb-10 w-full md:w-4/5"
          v-html="frontPageData.acf.technology_settings.description"
        />
        <TechnologyBlock
          class="md:absolute top-0 md:w-half-screen box-position"
          :technology-array="[frontPageData.acf.category_technology_promoted]"
        />
      </div>
    </SectionWrapper>

    <SectionWrapper
      v-if="frontPageData != ''"
      main-tag="section"
      :main-id="frontPageData.acf.company_settings.is_linkable"
      :main-title="frontPageData.acf.company_settings.title"
    >
      <SectionHeader 
        :position-header="frontPageData.acf.company_settings.title_position"
        :number-header="3"
        :subtitle="frontPageData.acf.company_settings.title"
        :title="frontPageData.acf.company_settings.header"
        class="w-full md:w-2/3 mb-8 lg:pr-10 md:pl-20"
      />
      <div class="relative md:pl-20">
        <img
          :src="frontPageData.acf.company_graphic.url"
          :alt="frontPageData.acf.company_graphic.alt"
          class="absolute h-full rounded-lg z-10 object-cover img-list-left"
        >
        <p
          v-if="frontPageData.acf.company_settings.description"
          class="mb-10 w-full md:w-1/2 lg:w-1/3"
          v-html="frontPageData.acf.company_settings.description"
        />
        <article-list
          :articles="frontPageData.acf.company_promoted"
          :more="frontPageData.acf.company_promoted_single.homepage"
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
      v-if="frontPageData != ''"
      main-tag="div"
      :main-id="frontPageData.acf.projects_settings.is_linkable"
      :main-title="frontPageData.acf.projects_settings.title"
      class="bg-backgroundLight overflow-hidden"
    >
      <SectionHeader 
        :position-header="frontPageData.acf.projects_settings.title_position"
        :number-header="3"
        :subtitle="frontPageData.acf.projects_settings.title"
        :title="frontPageData.acf.projects_settings.header"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
      <p 
        v-if="frontPageData.acf.projects_settings.description"
        class="mb-10 w-full md:w-1/2 lg:w-1/3"
        v-html="frontPageData.acf.projects_settings.description"
      />
      <img
        src="~assets/slice1.svg"
        alt="shape"
        class="background-shape-3"
      >
      <ProjectSlider
        :slides="frontPageData.acf.projects_carousel_list"
        class="z-10"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="frontPageData != ''"
      :main-disabled="true"
      main-tag="div"
      :main-id="frontPageData.acf.reviews_settings.is_linkable"
      :main-title="frontPageData.acf.reviews_settings.title"
      class="bg-white"
    >
      <SectionHeader 
        :title="frontPageData.acf.reviews_settings.header"
        :subtitle="frontPageData.acf.reviews_settings.title"
        :position-header="frontPageData.acf.reviews_settings.title_position"
        :number-header="4"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="frontPageReviews.length !== 0"
      main-tag="div"
      class="bg-white"
      :height-auto="true"
    >
      <SectionHeader 
        :title="`Mówią o <em>nas</em>`"
        :subtitle="frontPageReviews.acf.reviews_settings.title"
        :number-header="5"
        class="w-full md:w-1/3 mb-8 lg:pr-10 lg:absolute"
      />
      <OpinionsSlider 
        :slides="getFrontPageReviews"
      />
    </SectionWrapper>

    <SectionWrapper
      main-tag="div"
      class="overflow-hidden"
      container-class="bg-backgroundLight afterLogotypes"
      height-auto
    >
      <LogoSlider
        :slides="frontPageData.acf.brands_slajder_list"
      />
    </SectionWrapper>
  </div>
</template>

<script>  
  import { mapGetters } from 'vuex'

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
       ...mapGetters([
        'getSectionBaner',
        'getSectionServices'
      ]),
      frontPageData() {
        return this.$store.state.index  //look i added the name of the toolbar module
      },
      frontPageReviews () {
        return this.$store.getters["reviews/getFrontPage"]
      },
      contactData () {
        return this.$store.state.general.data
      },
      gradientBackground(){
        return {
          "background-image": `linear-gradient(to bottom, ${this.$store.state.index.acf.visualisation_background_color} 50%, ${this.$store.state.index.acf.visualisation_second_background_color} 50%)`
        }
      },
      parallaxBackground() {
        return {
          "background-image": `url(${this.$store.state.index.acf.visualisation_image.url})`
        };
      }
    },
    async fetch ({ app, store }) {
  
      await store.dispatch('initHomepage', app.$wp);
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