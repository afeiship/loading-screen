/*!
 * name: @jswork/loading-screen
 * description: Pure loading-screen for spa.
 * homepage: https://github.com/afeiship/loading-screen
 * version: 1.0.7
 * date: 2024-01-11 16:59:44
 * license: MIT
 */

window.lskit=function(n){const i={"en-US":{loading:"Loading...","load-error":"⚠️ Load error, reload"},"zh-CN":{loading:"应用加载中...","load-error":"⚠️ 加载错误，重试"}},o=Object.assign({id:"root",lang:"language","en-US":"Loading...","zh-CN":"应用加载中...",sw:0},n);n=document.getElementById(o.id);function e(n){var e=new URLSearchParams(window.location.search),e=o.locale||e.get(o.lang)||navigator.language||"en-US";return i[e][n]}n.innerHTML=`<section class="loading-screen">
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
    <span id="loading"></span>
  </section>`;const a=document.querySelector("#loading"),r=document.querySelector(".loading-screen");a.innerHTML=e("loading"),o.sw&&(setTimeout(function(){a.innerHTML=e("load-error"),r.classList.add("load-error")},o.sw),r.addEventListener("click",function(){a.classList.contains("load-error")&&navigator.serviceWorker.getRegistration("/").then(function(n){n&&n.unregister(),window.location.reload()})}))};