window.lskit = function (options) {
  const defaults = {
    'id': 'root',
    'lang': 'language',
    'en-US': 'Loading...',
    'zh-CN': '应用加载中...',
    'sw': 0
  };

  const locales = {
    'en-US': {
      'loading': 'Loading...',
      'load-error': '⚠️ Load error, reload'
    },
    'zh-CN': {
      'loading': '应用加载中...',
      'load-error': '⚠️ 加载错误，重试'
    }
  };

  const opts = Object.assign(defaults, options);
  const root = document.getElementById(opts.id);
  const t = function (key) {
    const params = new URLSearchParams(window.location.search);
    const lang = opts.locale || params.get(opts.lang) || navigator.language || 'en-US';
    return locales[lang][key];
  };

  root.innerHTML = `<section class="loading-screen">
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
    <span id="loading"></span>
  </section>`;

  const el = document.querySelector('#loading');
  const lsRoot = document.querySelector('.loading-screen');
  el.innerHTML = t('loading');

  if (opts.sw) {
    // wait 30s disappear
    setTimeout(function () {
      el.innerHTML = t('load-error');
      lsRoot.classList.add('load-error');
    }, opts.sw);

    lsRoot.addEventListener('click', function () {
      const hasError = el.classList.contains('load-error');
      if (!hasError) return;
      navigator.serviceWorker.getRegistration('/').then(function (e) {
        e && e.unregister();
        window.location.reload();
      });
    });
  }
};
