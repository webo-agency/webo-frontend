import axios from 'axios';
import * as languages from './languages.js';

export default {
    dir: "public",
    fallback: "404.html",
    routes () {
      let _calls = [];
      
      _calls.push(axios.get(`${process.env.API_URL}${process.env.API_AFFIX}`));
      //@TODO: [BEOK-1] Per page loop. As another module can be usefull
      languages.availableLanguage.forEach(function(locale){
        _calls.push(axios.get(`${process.env.API_URL}${process.env.API_AFFIX}/wp/v2/pages/?per_page=100&lang=${locale.code}`, locale))
        _calls.push(axios.get(`${process.env.API_URL}${process.env.API_AFFIX}/wp/v2/posts/?per_page=100&lang=${locale.code}`, locale))
      });
      
      return axios.all(_calls)
      .then(axios.spread((...res) => {
        let _routeArray = [];

        let rootRequest = res[0];
        delete res[0];

        res.map(singleResponse => {
          singleResponse.data.forEach((page) => {
            if(!page.link.includes(rootRequest.data.home))
             _routeArray.push({
              route: `${page.link.replace(rootRequest.data.home,"").replace(/\/$/, "")}`, //SLUG FIX - No translation at the moment available from WP Multilanguage
              name: `${page.slug}___${singleResponse.config.code}`,
              payload: page,
            })
          });
        })
 
        return _routeArray;
      }))
    }
  }