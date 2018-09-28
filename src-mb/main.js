import Vue from 'vue/dist/vue.common.js';
import App from './App.vue';
import VueRouter from 'vue-router';
window.Vue = Vue;

var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});

import team from './pages/team.vue';
import home from './pages/home.vue';
import hangye from './pages/hangye.vue';
import linian from './pages/linian.vue';
import contact from './pages/contact.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    { path: '/home', component: home },
    { path: '/linian', component: linian },
    { path: '/contact', component: contact },
    { path: '/hangye', component: hangye },
    { path: '/team', component: team }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});
router.beforeEach(function (to, from, next) {
    if (!to.matched || !to.matched.length) {
        next(false);
        router.replace('/home');
    } else {
        next();
    }
});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');