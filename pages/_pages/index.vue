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
  import vHeaderPage from "~/components/header-page.vue";
  import vContentPage from "~/components/content-page.vue";

  export default {
    components: {
      vHeaderPage,
      vContentPage
    },
    async asyncData ({ app , params, payload }) {
      if (payload) {
        return { 
          api: payload 
        }
      } else {
        let data = await app.$wp.posts().slug(params.pages);
        if(data != ''){
          return { 
            api: data[0],
          }
        } else {
          data = await app.$wp.pages().slug(params.pages);
        }
      
        return { 
          api: data[0],
        }
      }
    },
  };
</script>