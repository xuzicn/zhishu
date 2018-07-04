<template>
    <div id="app" @mousewheel="onScroll">
        <hd></hd>
        <transition :name="transitionName" @scroll="onScroll">
            <router-view class="app-bd"></router-view>
        </transition>
        <div class="nav" v-if="pageDepth===1">
            <div v-for="n in 6" v-bind:class="{'active':pageIndex===n, 'item':true}" @click="goTo(n)"></div>
        </div>
    </div>
</template>

<script>
import hd from './components/hd.vue';

export default {
    components: {
        hd
    },
    name: 'app',
    data () {
        return {
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
            console.log(e);
        }
    }
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
.slide-up-enter, .slide-down-leave-active {
    opacity: 0;
    transform: translate(0, -100%);
}
.slide-up-leave-active, .slide-down-enter {
    opacity: 0;
    transform: translate(0, 100%);
}
.app-bd {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    transition: all .6s cubic-bezier(.55,0,.1,1);
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
.nav {
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
@import "./margin-top-page.css";
</style>
