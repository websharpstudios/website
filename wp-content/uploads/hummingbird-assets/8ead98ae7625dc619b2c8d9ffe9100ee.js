/**handles:websharpresources-skip-link-focus-fix**/
!(function () {
  var t;
  /(trident|msie)/i.test(navigator.userAgent) &&
    document.getElementById &&
    window.addEventListener &&
    window.addEventListener(
      'hashchange',
      function () {
        var t = location.hash.substring(1),
          e;
        /^[A-z0-9_-]+$/.test(t) &&
          (e = document.getElementById(t)) &&
          (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) ||
            (e.tabIndex = -1),
          e.focus());
      },
      !1
    );
})();
