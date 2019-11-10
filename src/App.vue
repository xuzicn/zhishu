<template>
    <div id="app">
        <hd></hd>
        <transition :name="transitionName">
            <router-view class="app-bd"></router-view>
        </transition>
        <!-- <div class="nav" v-if="pageDepth===1">
            <div :key="n" v-for="n in 6" v-bind:class="{'active':pageIndex===n, 'item':true}" @click="goTo(n)"></div>
        </div> -->
    </div>
</template>

<script>
import hd from './components/hd.vue';

const routes = [
    '/home',
    '/hangye',
    '/linian',
    '/team',
    '/contact'
];

export default {
    components: {
        hd
    },
    name: 'app',
    data () {
        return {
            scrolling: false,
            transitionName: 'slide-up',
            pageIndex: 1,
            // pageDepth: 1
        }
    },
    watch: {
        '$route' (to, from) {
            const toPaths = routes.indexOf(to.path),
                fromPaths = routes.indexOf(from.path);

            if (toPaths > fromPaths) {
                this.transitionName = 'slide-down';
            } else if (toPaths < fromPaths) {
                this.transitionName = 'slide-up';
            } else {
                this.transitionName = '';
            }
            this.pageIndex = parseInt(toPaths[0]);
            // this.pageDepth = toPaths.length;
        }
    },
    methods: {
        goTo(n) {
            if (n < 10) {
                n = '0' + n;
            } else {
                n = n.toString();
            }
            this.$router.replace({ path: n });
        // },
        // onScroll(e) {
        //     const me = this;
            // e.preventDefault();

            // if (me.scrolling) return;
            // if (e.wheelDeltaY < -100) {
            //     me.scrolling = true;
            //     me.scrollNext();
            //     setTimeout(function () {
            //         me.scrolling = false;
            //     }, 1000);
            // } else if (e.wheelDeltaY > 100) {
            //     me.scrolling = true;
            //     me.scrollBefore();
            //     setTimeout(function () {
            //         me.scrolling = false;
            //     }, 1000);
            // }
            // console.log(e.wheelDeltaY);
            // // e.preventDefault();

            // scorllYList.push(e.wheelDeltaY);
            // if (scrollThread !== undefined) {
            //     clearTimeout(scrollThread);
            //     scrollThread = undefined;
            // }
            // scrollThread = setTimeout(function () {
            //     console.log(scorllYList)
            //     scorllYList = [];
            // }, 50);

            // if (Math.abs(wheelDeltaY) <= 100) return;
            // // e.preventDefault();
            // // scorllYList.push(e.deltaY);
            // if (e.wheelDeltaY < -100) {
            //     if (scrollThread === undefined) {
            //         scrollThread = setTimeout(function () {
            //             scrollThread = undefined;
            //             me.scrollNext();
            //         }, 50);
            //     }
            // } else {
            //     if (scrollThread != undefined) {
            //         clearTimeout(scrollThread);
            //         scrollThread = undefined;
            //     }
            // }
            // scrollThread = setTimeout(function() {
            //     me.scrollNext();
            // }, 50);

            // if (e.deltaY > 50) {
            //     me.scrollNext();
            // }
            // console.log(e.wheelDeltaY);
            // if (me.scrollThread != undefined) {
            //     clearTimeout(me.scrollThread);
            //     me.scrollThread = undefined;
            // }
            // me.scrollThread = setTimeout(function () {
                // const index = parseInt(me.$route.path.replace('/', ''));
                // if (index < 6) {
                //     me.$router.replace('/0' + (index + 1));
                // }
            // }, 50);
        },
        scrollNext: function() {
            const me = this,
                index = parseInt(me.$route.path.replace('/', ''));
            if (index < 6) {
                me.$router.replace('/0' + (index + 1));
            }
            // clearTimeout(scrollThread);
            // scrollThread = undefined;
        },
        scrollBefore: function() {
            const me = this,
                index = parseInt(me.$route.path.replace('/', ''));
            if (index >= 1) {
                me.$router.replace('/0' + (index - 1));
            }
            // clearTimeout(scrollThread);
            // scrollThread = undefined;
        }
        // onScroll: throttle(function () {
            // const index = parseInt(this.$route.path.replace('/', ''));
            // if (index < 6) {
            //     this.$router.replace('/0' + (index + 1));
            // }
        //     // throttle(function () {
        //     // console.log(new Date().valueOf())

        //     // }, 1000);
        //     // debugger
        //     // console.log(e);
        // }, 2000)
    },
    mounted() {
        this.pageIndex = parseInt(this.$route.path.replace('/', ''));
    }
}
</script>

<style>
.slide-up-enter, .slide-down-leave-active {
    opacity: 0;
    transform: translate(0, -100%);
}
.slide-up-leave-active, .slide-down-enter {
    opacity: 0;
    transform: translate(0, 100%);
}
.fade-in-content {
    animation: fade-in 0.8s linear;
    animation-fill-mode: forwards;
}
@keyframes fade-in {
    0%, 50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

html, body {
    height: 100%;
    font-size: 100px;
    margin: 0;
    padding: 0;
}
body {
    font-size: 0rem;
}
#app {
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.app-bd {
    transition: all .6s cubic-bezier(.55,0,.1,1);
    flex: 1;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}
.app-bd .bd {
    height: 100%;
    width: 100%;
}
@import "./margin-top-page.css";
</style>
