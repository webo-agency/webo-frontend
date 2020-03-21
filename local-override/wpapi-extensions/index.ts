import WPApi from "wpapi";

/* Wuxt extension */
/* Initialy created by Daniel Auener https://github.com/northosts/wuxt */
/* Wordpress extension: https://github.com/northosts/wuxt/tree/master/wp-content/mu-plugins/wuxt-headless-wp-api-extensions */
function checkWpApi(wp: WPApi) {
  if (!wp && typeof wp.registerRoute !== "function") {
    // eslint-disable-next-line no-console
    console.log("Please provide a wpapi instance.");
  }
}

export function registerCpt(wp: WPApi) {
  checkWpApi(wp);
  wp.cpt = postType => {
    wp[postType] = wp.registerRoute("wp/v2", "/" + postType + "/(?P<id>)", {
      params: ["embed", "before", "after", "author", "parent", "post"]
    });
    return wp[postType]();
  };
}

export function registerFrontPage(wp: WPApi) {
  checkWpApi(wp);
  wp.frontPage = wp.registerRoute("wuxt/v1", "/front-page", {
    params: ["embed"]
  });
}
export function registerMenu(wp: WPApi) {
  checkWpApi(wp);
  wp.menu = wp.registerRoute("wuxt/v1", "/menu", {
    params: ["location"]
  });
}

export function registerSlug(wp: WPApi) {
  checkWpApi(wp);
  wp.slug = wp.registerRoute("wuxt/v1", "/slug/(?P<name>)", {
    params: ["embed"]
  });
}

export function registerWuxt(wp: WPApi) {
  checkWpApi(wp);
  registerFrontPage(wp);
  registerMenu(wp);
  registerSlug(wp);
  registerCpt(wp);
}
