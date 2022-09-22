window.lskit = function (options) {
  const defaults = {
    id: "root",
    lang: "language",
    "en-US": "Loading...",
    "zh-CN": "应用加载中...",
  };
  const opts = Object.assign(defaults, options);
  const root = document.getElementById(opts.id);
  root.innerHTML = `<section class="loading-screen"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><span id="loading"></span></section>`;

  const el = document.querySelector("#loading");
  const lang = new URL(window.location.href).searchParams.get(opts.lang);
  el.innerHTML = lang === "en-US" ? "Loading..." : "应用加载中...";
};
