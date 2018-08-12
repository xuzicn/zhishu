import Vue from 'vue/dist/vue.common.js';
import App from './App.vue';
import VueRouter from 'vue-router';

import home from './pages/home.vue';
import hangye from './pages/hangye.vue';
import linian from './pages/linian.vue';
import contact from './pages/contact.vue';
import team from './pages/team.vue';
// import p02 from './pages/02.vue';
// import p03 from './pages/03.vue';
// import p04 from './pages/04.vue';
// import p05 from './pages/05.vue';
// import p06 from './pages/06.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
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
// const major = 
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
// let jumpThread = setTimeout(function () {
//     const index = parseInt(major.$route.path.replace('/', ''));
//     if (index < 6) {
//         major.$router.replace('/0' + (index + 1));
//     }
// }, 10000);
// router.beforeEach((to, from, next) => {
//     if (jumpThread) {
//         clearInterval(jumpThread);
//         jumpThread = undefined;
//     }
//     const index = parseInt(to.path.replace('/', ''));
//     if (index < 6) {
//         jumpThread = setTimeout(function () {
//             const index = parseInt(major.$route.path.replace('/', ''));
//             if (index < 6) {
//                 major.$router.replace('/0' + (index + 1));
//             }
//         }, 10000);
//     }
//     // if ()
//     next();
// });

// setInterval(function () {
//     const index = parseInt(major.$route.path.replace('/', ''));
//     if (index >= 6) {
//         major.$router.replace('/01');
//     } else {
//         major.$router.replace('/0' + (index + 1));
//     }
// }, 10000);
