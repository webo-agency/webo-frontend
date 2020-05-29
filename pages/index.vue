<template>
  <div class="flex flex-col w-full m-auto">
    <SectionWrapper
      v-if="api != ''"
      main-tag="div"
      :main-id="api.acf.baner_settings.is_linkable"
      :main-title="api.acf.baner_settings.title"
      class="bg-backgroundDark text-lightText flex flex-col justify-center"
      container-class="flex-col mt-10 mb-10 lg:mt-15vh"
    >
      <Carousel
        class="relative mb-10"
      >
        <SectionHeader
          :position-header="api.acf.baner_settings.title_position"
          :number-header="api.acf.baner_settings.title_number ? 1 : 0"  
          :subtitle="api.acf.baner_settings.title"
          :title="api.acf.baner_carousel[0].header"
          title-class="leading-none text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-big-header"
          class="mb-8"
        />
        <ContactButton
          :text="api.acf.baner_carousel[0].button.title"
          :link="api.acf.baner_carousel[0].button.hyperlink"
        />
        <!-- <ArrowBlock
          main-class="z-30 hidden xl:block"
          arrow-color="#FFFFFF"
          section-link="uslugi"
        /> -->
      </Carousel>
    </SectionWrapper>

    <!-- <SectionWrapper
      v-if="api != ''"
      main-tag="section"
      :main-id="api.acf.services_settings.is_linkable"
      :main-title="api.acf.services_settings.title"
    >
      <SectionHeader 
        :position-header="api.acf.services_settings.title_position"
        :number-header="api.acf.services_settings.title_number ? 1 : 0"
        :subtitle="api.acf.services_settings.title"
        :title="api.acf.services_settings.header"
        class="mb-8"
      />
      <p 
        v-if="api.acf.services_settings.description"
        class="mb-5 w-full md:w-1/2 lg:w-1/3"
        v-html="api.acf.services_settings.description"
      />
      <ArticleList
        :articles="api.acf.services_promoted"
        :more="api.acf.services_promoted_single.homepage"
        :cta-type="darkCTA"
        class="z-10"
      />
      <img
        src="~assets/slice2.svg"
        alt="shape"
        class="background-shape-2"
      >
    </SectionWrapper>

    <SectionWrapper
      v-if="api != ''"
      main-tag="div"
      :class="{
        'flex': true,
        'flex-col': true,
        'overflow-hidden': true,
        'bg-backgroundDark text-lightText': api.acf.visualisation_background_color == 'black',
        'bg-white text-darkText': api.acf.visualisation_background_color == 'white',
        'py-10': true,
        'xs:min-h-240 md:min-h-500 lg:min-h-mobile-screen': true
      }"
      container-class="relative flex-auto"
      :style="gradientBackground"
      height-auto
    >
      <div
        class="parallax-background absolute top-0 bottom-0 w-screen max-w-none bg-cover bg-no-repeat bg-fixed rounded-lg"
        :style="parallaxBackground"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="api != ''"
      main-tag="section"
      :main-id="api.acf.technology_settings.is_linkable"
      :main-title="api.acf.technology_settings.title"
      class="bg-backgroundDark text-lightText overflow-hidden bar-bottom"
    >
      <img
        src="~assets/slice4.svg"
        alt="shape"
        class="background-shape-1"
      >
      <div class="relative flex-auto flex flex-col flex-auto w-full md:w-1/2">
        <SectionHeader 
          :position-header="api.acf.technology_settings.title_position"
          :number-header="api.acf.technology_settings.title_number ? 2 : 0"
          :subtitle="api.acf.technology_settings.title"
          :title="api.acf.technology_settings.header"
          title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
          subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
          class="mb-8 lg:pr-10"
        />
        <LogoList 
          class="w-full md:w-4/5"
          :list="api.acf.technology_promoted"
        />
        <p
          v-if="api.acf.technology_settings.description"
          class="mb-10 w-full md:w-4/5"
          v-html="api.acf.technology_settings.description"
        />
        <TechnologyBlock
          class="md:absolute top-0 md:w-half-screen box-position"
          :technology-array="[api.acf.category_technology_promoted]"
        />
      </div>
    </SectionWrapper>

    <SectionWrapper
      v-if="api != ''"
      main-tag="section"
      :main-id="api.acf.company_settings.is_linkable"
      :main-title="api.acf.company_settings.title"
    >
      <SectionHeader 
        :position-header="api.acf.company_settings.title_position"
        :number-header="api.acf.company_settings.title_number ? 3 : 0"
        :subtitle="api.acf.company_settings.title"
        :title="api.acf.company_settings.header"
        class="w-full md:w-2/3 mb-8 lg:pr-10 md:pl-20"
      />
      <div class="relative md:pl-20">
        <img
          :src="api.acf.company_graphic.url"
          :alt="api.acf.company_graphic.alt"
          class="absolute h-full rounded-lg z-10 object-cover img-list-left"
        >
        <p
          v-if="api.acf.company_settings.description"
          class="mb-10 w-full md:w-1/2 lg:w-1/3"
          v-html="api.acf.company_settings.description"
        />
        <ArticleList
          :articles="api.acf.company_promoted"
          :more="api.acf.company_promoted_single.homepage"
          :cta-type="lightCTA"
          :is-mobile-slider="true"
        />
      </div>
    </SectionWrapper>

    <SectionWrapper
      v-if="api != ''"
      main-tag="div"
      :main-id="api.acf.projects_settings.is_linkable"
      :main-title="api.acf.projects_settings.title"
      class="bg-backgroundLight overflow-hidden"
    >
      <SectionHeader 
        :position-header="api.acf.projects_settings.title_position"
        :number-header="api.acf.projects_settings.title_number ? 3 : 0"
        :subtitle="api.acf.projects_settings.title"
        :title="api.acf.projects_settings.header"
        title-class="leading-tight text-xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
      <p 
        v-if="api.acf.projects_settings.description"
        class="mb-10 w-full md:w-1/2 lg:w-1/3"
        v-html="api.acf.projects_settings.description"
      />
      <img
        src="~assets/slice1.svg"
        alt="shape"
        class="background-shape-3"
      >
      <ProjectSlider
        :slides="api.acf.projects_carousel_list"
        class="z-10"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="api != ''"
      :main-disabled="true"
      main-tag="div"
      :main-id="api.acf.reviews_settings.is_linkable"
      :main-title="api.acf.reviews_settings.title"
      class="bg-white"
    >
      <SectionHeader 
        :title="api.acf.reviews_settings.header"
        :subtitle="api.acf.reviews_settings.title"
        :position-header="api.acf.reviews_settings.title_position"
        :number-header="api.acf.reviews_settings.title_number ? 4 : 0"
        class="w-full md:w-1/3 mb-8 lg:pr-10"
      />
    </SectionWrapper>

    <SectionWrapper
      v-if="getFrontPage.length !== 0"
      main-tag="div"
      class="bg-white"
      :height-auto="true"
    >
      <SectionHeader 
        :title="`Mówią o <em>nas</em>`"
        :subtitle="api.acf.reviews_settings.title"
        :number-header="5"
        class="w-full md:w-1/3 mb-8 lg:pr-10 lg:absolute"
      />
      <OpinionsSlider 
        :slides="getFrontPage"
      />
    </SectionWrapper>

    <SectionWrapper
      main-tag="div"
      class="overflow-hidden"
      container-class="bg-backgroundLight afterLogotypes"
      height-auto
    >
      <LogoSlider
        :slides="api.acf.brands_slajder_list"
      />
    </SectionWrapper> -->
  </div>
</template>

<script>  
  export default {
    data() {
      return {
        darkCTA: 'dark',
        lightCTA: 'light'
      };
    },
    computed: {
      getFrontPage () {
        return this.$store.getters["reviews/getFrontPage"]
      },
      contactData () {
        return this.$store.state.general.data
      },
      gradientBackground(){
        return {
          "background-image": `linear-gradient(to bottom, ${this.api.acf.visualisation_background_color} 50%, ${this.api.acf.visualisation_second_background_color} 50%)`
        }
      },
      parallaxBackground() {
        return {
          "background-image": `url(${this.api.acf.visualisation_image.url})`
        };
      }
    },
    async asyncData ({ app, /*store*/ }) {
      
      let data = await app.$wp.frontPage(20);
      
      //TODO
      // let pages = await app.$wp.pages().perPage(20);
      // let technology = await app.$wp.technology().perPage(20);

      // data.acf.services_promoted = pages.filter((page) => data.acf.services_promoted.indexOf(page.id) > -1);
  
      // data.acf.company_promoted = pages.filter((page) => data.acf.company_promoted.indexOf(page.id) > -1);
    
      // data.acf.technology_promoted = [];
      // data.acf.technology_promoted_list.forEach((promoted) => {
      //   technology.forEach((entry_list) => {
      //     if(entry_list.id == promoted.term_id){
      //       data.acf.technology_promoted.push([entry_list])
      //     }
      //   });
      // });

      // data.acf.category_technology_promoted = [];
      // data.acf.category_technology_promoted_list.forEach((promoted) => {
      //   technology.forEach((entry_list) => {
      //     if(entry_list.id == promoted.term_id){
      //       data.acf.category_technology_promoted.push(entry_list);
      //     }
      //   });
      // });

      // let _childs_category_technology_promoted = [];
      // for (let cat_promoted_technology of data.acf.category_technology_promoted) {
      //   cat_promoted_technology.childs = [];
        
      //   technology.forEach((technology) => {
      //     if(cat_promoted_technology.id == technology.parent){
      //       cat_promoted_technology.childs.push(technology);
      //     } 
      //   });

      //   _childs_category_technology_promoted.push(cat_promoted_technology);
      // }
      // data.acf.category_technology_promoted = _childs_category_technology_promoted;

      // // data.acf.reviews_promoted = [
      // //     await app.$wp.pages().id(data.acf.reviews_promoted),
      // // ];

      // let projects_carousel_list = await app.$wp.posts().include(data.acf.projects_carousel);
      // data.acf.projects_carousel_list = [];
      // for(let i = 0; i < data.acf.projects_carousel.length; i++){
      //   let entry = projects_carousel_list[i];
        
      //   data.acf.projects_carousel_list.push({
      //     id: entry.id,
      //     url: entry.acf.project_promoted_screensave.url,
      //     alt: entry.acf.project_promoted_screensave.alt,
      //     title: entry.acf.project_promoted_title
      //   });
      // }
      // data.acf.projects_carousel_list.reverse();

      // let brands_slajder_list = await app.$wp.posts().include(data.acf.brands_slajder);
      // data.acf.brands_slajder_list = [];
      // for(let i = 0; i < data.acf.brands_slajder.length; i++){
      //   let entry = brands_slajder_list[i];
        
      //   data.acf.brands_slajder_list.push({
      //     id: entry.id,
      //     url: entry.acf.mark_logo.url,
      //     alt: entry.acf.mark_logo.alt,
      //     href: entry.acf.mark_url,
      //   });
      // }
      // data.acf.brands_slajder_list.reverse();


      // // console.log(store.general); // eslint-disable-line
      // // axios.get(env.API_URL.concat('/acf/v3/options/options')).then((response) => {
      // //   console.log(response.data);  // eslint-disable-line
      // // })
      
      // // console.log(data.acf); // eslint-disable-line
      // // // data.id
      // store.commit('reviews/saveFrontPage', data.acf.reviews_promoted); 
      // data.acf.contact_section = store.state.general.data.call_to_action_section;
      
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