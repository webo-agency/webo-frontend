<template>
  <div
    class="flex flex-col w-full"
  >
    <v-header-page
      :title="api.acf.page_title"
      :image="api.acf.page_image"
    />
    <v-content-page
      :content="api.content.rendered"
    />
  </div>
</template>

<script>
  export default {
    components: {
      'v-header-page': () => import("~/components/header-page.vue"),
      'v-content-page': () => import("~/components/content-page.vue"),
    },
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
          return { 
            api: data[0],
          }
        } else {
          data = await app.$wp.pages().slug(params.pathMatch).param('lang', params.pages);
        }
      
        return { 
          api: data[0],
        }
      }
    },
  };
</script>