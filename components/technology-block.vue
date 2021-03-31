<template>
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <client-only>
      <ul class="flex flex-wrap rounded-lg rounded-r-none bg-backgroundDark md:pt-12 md:px-5 lg:px-12">
        <li 
          v-for="(technology, index) in promotedTechnologies"
          :key="index"
          class="flex flex-col flex-initial w-full pr-5 mb-10 sm:w-1/2 md:w-full lg:w-1/2"
        > 
          <h2 
            v-if="typeof technology.acf.color != 'undefined'"
            class="mb-3 text-base font-bold md:text-2xl"
            :class="{
              [`text-${technology.acf.color}`]: typeof technology.acf.color != 'undefined'
            }"
          >
            {{ technology.name }}
          </h2>
          <p class="mb-5">
            {{ technology.description }}
          </p>

          <ul class="flex flex-row flex-wrap">
            <li
              v-for="(technologyChild, index_child) in technologyChildsFilter(technology.term_taxonomy_id, technologies)"
              :key="index_child"
              class="flex-initial mb-2 mr-5"
              :class="{
                [`text-${technology.acf.color}`]: technology.acf.color
              }"
            >
              <span>
                {{ technologyChild.name }}
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </client-only>
  </component>
</template>
<script>
export default {
  name: "TechnologyBlock",
  props: {
    mainTag: {
      type: String,
      default: "div",
      required: false
    },
    mainClass: {
      type: String,
      default: "md:border border-main rounded-lg md:border-r-0 rounded-r-none md:p-4 md:pr-0",
      required: false
    },
    promotedTechnologies: {
      type: Array,
      default: () => [],
      required: false
    },
    technologies: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  methods: {
    technologyChildsFilter(parentId, allTechnologies) {
      let _array = [];

      for(var key in allTechnologies) {
        if(allTechnologies[key].parent == parentId){
          _array.push(allTechnologies[key]);
        }
      }
      
      return _array;
    }
  }
};
</script>

