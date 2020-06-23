export const state = () => ({
  baner_settings: {
    is_linkable: "",
    is_menu: false,
    title: "Welcome in webo",
    title_number: 0,
    title_position: true,    
  },
  baner_carousel: [],
  brands_slajder: [],
  category_technology_promoted_list: [],
  company_graphic: {
    url: "https://api.webo.agency/wp-content/uploads/2020/03/marvin-meyer-SYTO3xs06fU-unsplash_1-scaled.jpg"
  },
  company_promoted: [],
  company_promoted_block: true,
  company_promoted_single: {
    description: "",
    icon: "q",
    link: {
      hyperlink:"mailto:support@webo.agency",
      title:"Napisz do nas"
    },
    list: false,
    title: "Chcesz wiedzieć *więcej?*",
  },
  company_settings: {
    is_linkable: "",
    is_menu: false,
    title: "",
    title_number: 0,
    title_position: true,    
  },
  process_settings: {
    is_linkable: "",
    is_menu: false,
    title: "",
    title_number: 0,
    title_position: true,    
  },
  process_link: {

  },
  process_list: false,
  projects_carousel: [],
  projects_link: {

  },
  projects_settings: {
    is_linkable: "",
    is_menu: false,
    title: "",
    title_number: 0,
    title_position: true,   
  },
  reviews_promoted: [],
  reviews_settings: {
    is_linkable: "",
    is_menu: false,
    title: "",
    title_number: 0,
    title_position: true,   
  },
  services_promoted: [],
  services_promoted_block: true,
  services_promoted_single: {

  },
  services_settings: {
    is_linkable: "",
    is_menu: false,
    title: "",
    title_number: 0,
    title_position: true,   
  },
  technology_link: {
    
  },
  technology_promoted_list: [],
  technology_settings: {
    is_linkable: "",
    is_menu: false,
    title: "",
    title_number: 0,
    title_position: true,   
  },
  visualisation_background_color: "#FFFFFF",
  visualisation_image: {
    url: "https://api.webo.agency/wp-content/uploads/2020/03/marvin-meyer-SYTO3xs06fU-unsplash_1-scaled.jpg"
  },
  visualisation_second_background_color: "#0d0d0d",
});

export const mutations = {
  save($state, data) {
    let _tmpData = data.acf;

    Object.assign(_tmpData, _tmpData.brands_slajder.forEach((item, index) => {
      _tmpData.brands_slajder[index] = item.acf;
    }));

    Object.assign(_tmpData, _tmpData.company_promoted.forEach((item, index) => {
      _tmpData.company_promoted[index] = item.acf;
    }));

    Object.assign(_tmpData, _tmpData.company_promoted.forEach((item, index) => {
      _tmpData.company_promoted[index] = item.homepage;
    }));

    Object.assign(_tmpData, _tmpData.projects_carousel.forEach((item, index) => {
      _tmpData.projects_carousel[index] = item.acf;
    }));

    Object.assign(_tmpData, _tmpData.reviews_promoted.forEach((item, index) => {
      _tmpData.reviews_promoted[index] = item.acf;
    }));

    Object.assign(_tmpData, _tmpData.services_promoted.forEach((item, index) => {
      _tmpData.services_promoted[index] = item.acf.homepage;
    }));
    
    Object.assign(_tmpData.services_promoted_single, _tmpData.services_promoted_single.homepage);
    
    Object.assign(_tmpData.company_promoted_single, _tmpData.company_promoted_single.homepage);

    Object.assign($state, _tmpData);
  }
};

export const getters = {
  getStoreData: ($state) => {
    return $state
  }
}

export const actions = {}
