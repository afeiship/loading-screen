/*!
 * name: @jswork/loading-screen
 * description: Pure loading-screen for spa.
 * homepage: https://github.com/afeiship/loading-screen
 * version: 1.0.4
 * date: 2022-09-22 22:58:02
 * license: MIT
 */

window.lskit=function(i){var i=Object.assign({id:"root",lang:"language","en-US":"Loading...","zh-CN":"应用加载中..."},i),n=(document.getElementById(i.id).innerHTML='<section class="loading-screen"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><span id="loading"></span></section>',document.querySelector("#loading")),i=new URL(window.location.href).searchParams.get(i.lang);n.innerHTML="en-US"===i?"Loading...":"应用加载中..."};