"use strict";
exports.__esModule = true;
/* Wuxt extension */
/* Initialy created by Daniel Auener https://github.com/northosts/wuxt */
/* Wordpress extension: https://github.com/northosts/wuxt/tree/master/wp-content/mu-plugins/wuxt-headless-wp-api-extensions */
function checkWpApi(wp) {
    if (!wp && typeof wp.registerRoute !== "function") {
        // eslint-disable-next-line no-console
        console.log("Please provide a wpapi instance.");
    }
}
function registerCpt(wp) {
    checkWpApi(wp);
    wp.cpt = function (postType) {
        wp[postType] = wp.registerRoute("wp/v2", "/" + postType + "/(?P<id>)", {
            params: ["embed", "before", "after", "author", "parent", "post"]
        });
        return wp[postType]();
    };
}
exports.registerCpt = registerCpt;
function registerFrontPage(wp) {
    checkWpApi(wp);
    wp.frontPage = wp.registerRoute("wuxt/v1", "/front-page", {
        params: ["embed"]
    });
}
exports.registerFrontPage = registerFrontPage;
function registerMenu(wp) {
    checkWpApi(wp);
    wp.menu = wp.registerRoute("wuxt/v1", "/menu", {
        params: ["location"]
    });
}
exports.registerMenu = registerMenu;
function registerSlug(wp) {
    checkWpApi(wp);
    wp.slug = wp.registerRoute("wuxt/v1", "/slug/(?P<name>)", {
        params: ["embed"]
    });
}
exports.registerSlug = registerSlug;
function registerWuxt(wp) {
    checkWpApi(wp);
    registerFrontPage(wp);
    registerMenu(wp);
    registerSlug(wp);
    registerCpt(wp);
}
exports.registerWuxt = registerWuxt;
