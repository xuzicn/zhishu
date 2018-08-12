<template>
    <div id="app" @mousewheel="onScroll">
        <hd></hd>
        <transition :name="transitionName" @scroll="onScroll">
            <router-view class="app-bd"></router-view>
        </transition>
        <!-- <div class="nav" v-if="pageDepth===1">
            <div :key="n" v-for="n in 6" v-bind:class="{'active':pageIndex===n, 'item':true}" @click="goTo(n)"></div>
        </div> -->
    </div>
</template>

<script>
import hd from './components/hd.vue';
// import throttle from 'lodash/throttle';
// // console.log(throttle)

// let scorllYList = [];
// let scrollThread = undefined;

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
            pageDepth: 1
        }
    },
    watch: {
        '$route' (to, from) {
            const toPaths = to.path.split('/').filter(function (a) {
                return !!a;
            });
            const fromPaths = from.path.split('/').filter(function (a) {
                return !!a;
            });

            if (toPaths.length === 1 && fromPaths.length === 1) {
                this.transitionName = parseInt(toPaths[0]) > parseInt(fromPaths[0]) ? 'slide-down' : 'slide-up'
            } else {
                this.transitionName = '';
            }
            this.pageIndex = parseInt(toPaths[0]);
            this.pageDepth = toPaths.length;
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
        },
        onScroll(e) {
            const me = this;
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
    font-size:.16rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
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
/*.nav {
    position: absolute;
    width: 30px;
    right: 60px;
    height: 100px;
    display: flex;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
}
.nav .item {
    flex: 1;
}
.nav .item:hover {
    background-color: rgba(0,0,0,0.2);
    border-radius: 4px;
    transition: all 0.5s ease;
    cursor: pointer;
}
.nav .item:before {
    content: ' ';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #313e48;
    transition: all 0.5s ease;
    transform: translateX(13px);
}
.nav .item.active:before {
    background-color: #fff;
}
*/

html, body {
    height: 100%;
    font-size: 100px;
}
body {
    font-size: 0px;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
