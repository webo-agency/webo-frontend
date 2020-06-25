<template>
  <div
    class="flex flex-col w-full"
  >
    <HeaderPage
      v-if="api.acf"
      :title="api.acf.page_title"
      :image="api.acf.page_image"
    />
    <ContentPage
      v-if="api.content"
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

      if (payload && payload.data && payload.data.acf && payload.data.acf.page_title && payload.data.acf.page_image) {
        return { 
          api: payload 
        }
      } else {
        let data = await app.$wp.posts().slug(params.pathMatch).param('lang', params.pages);
        if(data != ''){
          removeEmpty(data[0]);
          return { 
            api: data[0],
          }
        } else {
          return { 
            api: {data: {acf: {page_title: '', page_image: '', }}},
          }
        }
      }
    }
  };
</script>