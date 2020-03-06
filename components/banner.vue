<template>
  <component
    :is="mainTag"
    :id="mainId"
    class="max-h-700 flex flex-row"
  >
    <div class="w-full flex flex-row justify-between">
      <div
        class="flex flex-col items-start text-left"
      >
        <slot />
      </div>
      <div 
        class="hidden md:block"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:serif="http://www.serif.com/"
          width="100%"
          height="100%"
          viewBox="0 0 378 483"
          version="1.1"
          xml:space="preserve"
          style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
        >
          <g>
            <path
              d="M326.57,480.423L277.724,460.79L277.497,379.448L358.908,412.17L359.044,460.975C359.094,478.932 344.544,487.646 326.57,480.423Z"
              style="fill:rgb(0,224,180);"
            />
            <path
              d="M277.497,379.448L296.403,359.448L377.814,392.17L377.865,410.538L377.95,440.975C377.97,448.378 375.509,454.211 371.35,458.003L354.972,475.156C357.581,471.522 359.06,466.722 359.044,460.975L358.908,412.17L296.48,387.078L277.497,379.448ZM277.497,379.448L277.588,411.916L277.576,411.928L277.497,379.448Z"
              style="fill:rgb(0,247,198);"
            />
            <path
              d="M245.147,447.634L245.154,447.637L245.147,447.644L245.147,447.634ZM56.563,65.985C53.394,72.913 51.668,81.134 51.694,90.466L52.101,236.88C52.213,277.284 85.136,323.283 125.575,339.537L263.974,395.164L264.03,415.092L264.064,427.639L245.159,447.632L245.069,415.164L106.669,359.537C66.23,343.283 33.308,297.284 33.195,256.88L32.788,110.466C32.728,89.045 41.902,73.47 56.563,65.985ZM17.526,35.031L33.892,17.636C49.877,-0.013 77.266,-4.881 108.387,7.627L287.492,79.616C336.658,99.378 376.733,155.113 377.288,204.306L377.291,204.303L377.293,205.036L377.293,205.085L377.672,340.975L377.723,359.572L358.818,379.572L358.743,351.943L358.741,351.942L358.388,225.085C358.25,175.703 318.012,119.482 268.586,99.616L89.482,27.627C59.951,15.758 33.781,19.535 17.526,35.031Z"
              style="fill:rgb(0,247,198);"
            />
            <path
              d="M245.069,415.164L245.159,447.639L90.478,385.529C41.052,365.663 0.814,309.442 0.676,260.06L0.178,81.108C0.041,31.726 40.056,7.762 89.482,27.627L268.586,99.616C318.012,119.482 358.25,175.703 358.388,225.085L358.818,379.572L326.253,366.483L325.869,228.265C325.756,187.862 292.835,141.864 252.395,125.608L105.854,66.708C65.414,50.455 32.676,70.062 32.788,110.466L33.195,256.88C33.308,297.284 66.23,343.283 106.669,359.537L245.069,415.164Z"
              style="fill:rgb(0,224,180);"
            />
          </g>
        </svg>
      </div>
    </div>
  </component>
</template>
<script>
  export default {
    name: "Banner",
    props: {
      mainTag: {
        type: String,
        default: "div",
        required: false
      },
      mainClass: {
        type: String,
        default: "",
        required: false
      },
      mainId: {
        type: String,
        default: "banner",
        required: false
      },
      dark: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data() {
      return {
        // document: "TEST"
      };
    },
    methods: {
      setFocus() {
        var textbox = document.getElementById("email");
        textbox.focus();
        textbox.scrollIntoView();
        // this.$store.commit('contact/focus', true );
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
