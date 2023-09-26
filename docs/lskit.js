/*!
 * name: @jswork/loading-screen
 * description: Pure loading-screen for spa.
 * homepage: https://github.com/afeiship/loading-screen
 * version: 1.0.5
 * date: 2023-09-26 09:16:15
 * license: MIT
 */

window.lskit=function(n){function e(n){var e=new URLSearchParams(window.location.search).get(i.lang)||navigator.language||"en-US";return o[e][n]}const i={id:"root",lang:"language","en-US":"Loading...","zh-CN":"应用加载中...",sw:0},o={"en-US":{loading:"Loading...","load-error":"⚠️ Load error, reload"},"zh-CN":{loading:"应用加载中...","load-error":"⚠️ 加载错误，重试"}};n=Object.assign(i,n);document.getElementById(n.id).innerHTML=`<section class="loading-screen">
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
    <span id="loading"></span>
  </section>`;const r=document.querySelector("#loading"),a=document.querySelector(".loading-screen");r.innerHTML=e("loading"),n.sw&&(setTimeout(function(){r.innerHTML=e("load-error"),a.classList.add("load-error")},n.sw),a.addEventListener("click",function(){r.classList.contains("load-error")&&navigator.serviceWorker.getRegistration("/").then(function(n){n&&n.unregister(),window.location.reload()})}))};