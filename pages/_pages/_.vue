<template>
  <div
    class="flex flex-col w-full"
  >
    <HeaderPage
      :title="api.acf.page_title"
      :image="api.acf.page_image"
    />
    <ContentPage
      :content="api.content.rendered"
    />
  </div>
</template>

<script>
  const removeEmpty = obj => {
    Object.keys(obj).forEach(key => {
      if (
        key == '' ||
        obj[key] == null ||
        typeof obj[key] == 'undefined' ||
        (Array.isArray(obj[key]) && !obj[key].length) ||
        obj[key] == '' ||
        obj[key] == []
      ) { delete obj[key] } // delete
      else if (obj[key] && typeof obj[key] === "object") removeEmpty(obj[key]); // recurse
    });
  };

  export default {
    async asyncData ({ app , params, payload }) {
      if (payload) {
        return { 
          api: payload 
        }
      } else {
        // // pages: 'en', pathMatch: 'demo'
        // console.log(params); // eslint-disable-line  
        // let xdata = await app.$wp.pages().slug(params.pathMatch).param('lang', params.pages);
        // console.log(JSON.stringify(xdata)); // eslint-disable-line  

        let data = await app.$wp.posts().slug(params.pathMatch).param('lang', params.pages);
        if(data != ''){
          removeEmpty(data[0]);
          return { 
            api: data[0],
          }
        } else {
          data = await app.$wp.pages().slug(params.pathMatch).param('lang', params.pages);
          removeEmpty(data[0]);
          if(data != ''){
            data.acf = {page_title: '', page_image: '', };
            data.content = '';
            return { 
              api: data,
            }
          }
        }
      
        return { 
          api: data[0],
        }
      }
    },
  };
</script>