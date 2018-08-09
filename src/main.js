import Vue from 'vue/dist/vue.common.js';
import App from './App.vue';
import VueRouter from 'vue-router';

import p01 from './pages/01.vue';
import p02 from './pages/02.vue';
import p03 from './pages/03.vue';
import p04 from './pages/04.vue';
import p05 from './pages/05.vue';
import p06 from './pages/06.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/01', component: p01 },
    { path: '/02', component: p02 },
    { path: '/03', component: p03 },
    { path: '/04', component: p04 },
    { path: '/05', component: p05 },
    { path: '/06', component: p06 }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});
const major = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

setInterval(function () {
    const index = parseInt(major.$route.path.replace('/', ''));
    if (index >= 6) {
        major.$router.replace('/01');
    } else {
        major.$router.replace('/0' + (index + 1));
    }
}, 10000);
