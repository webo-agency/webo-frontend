var domIsReady = (function(domIsReady) {
  var isBrowserIeOrNot = function() {
    return !document.attachEvent || typeof document.attachEvent === "undefined"
      ? "not-ie"
      : "ie";
  };

  domIsReady = function(callback) {
    if (callback && typeof callback === "function") {
      if (isBrowserIeOrNot() !== "ie") {
        document.addEventListener("DOMContentLoaded", function() {
          return callback();
        });
      } else {
        document.attachEvent("onreadystatechange", function() {
          if (document.readyState === "complete") {
            return callback();
          }
        });
      }
    }
  };

  domIsReady(function() {
    (function(w, d, s, u) {
      w.RocketChat = function(c) {
        w.RocketChat._.push(c);
      };
      w.RocketChat._ = [];
      w.RocketChat.url = u;
      var h = d.getElementsByTagName(s)[0];
      var j = d.createElement(s);
      j.async = true;
      j.src =
        "https://chat.webo.agency/packages/rocketchat_livechat/assets/rocketchat-livechat.min.js?_=201702160944";
      h.parentNode.insertBefore(j, h);
    })(window, document, "script", "https://chat.webo.agency/livechat");
  });
})(domIsReady || {});
