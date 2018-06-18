<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
@font-face {
  font-family: 'iconfont';  /* project id 711353 */
  src: url('//at.alicdn.com/t/font_711353_ausj3si9mom.eot');
  src: url('//at.alicdn.com/t/font_711353_ausj3si9mom.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_711353_ausj3si9mom.woff') format('woff'),
  url('//at.alicdn.com/t/font_711353_ausj3si9mom.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_711353_ausj3si9mom.svg#iconfont') format('svg');
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
