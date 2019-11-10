<template>
    <v-touch tag='div' class="margin-top-page common profile" @swipedown="onSwipedown" @swipeup="onSwipeup">
        <div>
            <div :class="'bd item item-' + i" ref="bd" :style='"height:" + bdHeight + "px"' v-for="(item, i) in intros" :key="i">
                <div :class='["intro-sections", {"first":i===0}]'>
                    <div v-if="i===0" class="title">投资团队</div>
                    <div class="item-bg"></div>
                    <div class="item-intro">{{item.text}}</div>
                </div>
                <v-touch tag='div' class="next" @tap="scrollTo(i)">
                    <div class="arrow">
                        <div class="a1 down-arrow"></div>
                        <div class="a2 down-arrow"></div>
                        <div class="a3 down-arrow"></div>
                    </div>
                </v-touch>
            </div>
            <div class='foot' ref="ft">
                <v-touch tag="div" :key="i" v-for="(p, i) in profiles"
                    :class='["avatar-item", {"last":(i===profiles.length-1)}, {"collapsed":expandedItem!==p}, {"expanded":expandedItem===p}]'
                    @tap="toggleItem(p)">
                    <div class="avatar" :style="'background-image: url(\'/assets/mobile/avatars/' + p.bg + '\')'"></div>
                    <div class="introduce">
                        <div class="name">{{p.intro.name}}</div>
                        <div class="title">{{p.intro.title}}</div>
                        <div class="intro-wrapper">
                            <div class="intro-content c0">{{p.intro.introduce[0]}}</div>
                            <div class="intro-content c1">{{p.intro.introduce[1]}}</div>
                            <div class="triangle"></div>
                        </div>
                    </div>
                </v-touch>
            </div>
        </div>
    </v-touch>
</template>

<script>
import iscroll from 'iscroll';
import profiles from '../../profiles';

export default {
    data() {
        const headHeight = 73;
        return {
            bdHeight: document.body.getClientRects()[0].height - headHeight,
            expandedItem: undefined,
            intros: [{
                text: '我们是专业化的创业投资团队。我们深入调查细分行业，确定细分跑道和价值空间。我们拥有企业变革和领导力的独立视角和判断力，赋能被投企业额价值成长。'
            }, {
                text: '我们深入理解数字化和智能化对于传统产业带来的影响和变革路径。我们拥有丰富的企业数字化升级和转型的管理经验，坚信数字化对于传统行业的价值提升。'
            }, {
                text: '我们帮助被投企业进行战略梳理，商业模式的更新迭代，企业运营至关重要的选择，人才和团队提升。我们创造我们和创业伙伴之间、创业伙伴相互之间的协同效应。'
            }, {
                text: '我们谙熟楼宇科技、智能电力、智慧物流。我们熟悉细分行业发展规律和创新价值。我们在垂直领域拥有广泛的资源。'
            }],
            profiles: profiles.filter(function (i) {
                return !!i
            })
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.s = new iscroll(this.$el, {
                mouseWheel: true,
                bindToWrapper: true,
                fadeScrollbars: false,
                useTransition: false,
                startY: 0,
                probeType: 3,
                preventDefault: true,
                scrollX: false
            });
            setTimeout(() => {
                this.s.refresh()
            }, 2000);
        });
    },
    methods: {
        scrollTo(i) {
            this.s.scrollTo(0, (-i - 1) * this.bdHeight, 500);
        },
        toggleItem(i) {
            if (i === this.expandedItem) {
                this.expandedItem = undefined;
            } else {
                this.expandedItem = i;
            }
            setTimeout(() => {
                this.s.refresh();
            }, 400);
        },
        onSwipeup() {
            if (this.s.maxScrollY >= this.s.y) {
                this.$router.push({ path: 'contact' });
            }
        },
        onSwipedown() {
            if (0 <= this.s.y) {
                this.$router.push({ path: 'linian' });
            }
        }
    }
}
</script>

<style scoped>
.margin-top-page {
    overflow: hidden;
    font-size: 16px;
}
.margin-top-page .bd {
    background: #f4f4f4;
    position: relative;
}
.margin-top-page .intro-sections {
    width: 100%;
    color: #313e48;
    text-align: center;
    padding-top: .77rem;
}
.margin-top-page .intro-sections.first {
    padding-top: 0rem;
}
.margin-top-page .intro-sections .item-intro {
    text-align: left;
    padding: 0 .6rem;
    font-size: .12rem;
    line-height: 1.9em;
}
.margin-top-page .intro-sections .title {
    font-size: .26rem;
    padding-top: .4rem;
}
.margin-top-page .intro-sections .item-bg {
    background-image: url('/assets/team-intro.png');
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin: .24rem 0 .32rem;
    transition: all ease .3s;
}
.margin-top-page .item-1 .item-bg {
    background-position-x: -1.25rem;
}
.margin-top-page .item-2 .item-bg {
    background-position-x: -2.5rem;
}
.margin-top-page .item-3 .item-bg {
    background-position-x: -3.75rem;
}
.margin-top-page .intro-sections img {
    margin-top: .39rem;
    transition: all ease .3s;
    opacity: 0;
}
.margin-top-page .intro-sections:hover img {
    opacity: 1;
}
.margin-top-page.profile .content.end {
    margin-bottom: .20rem;
}
.next {
    font-size: .14rem;
    position: absolute;
    bottom: .2rem;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    color: #313e48;
    width: .59rem;
}
.next .arrow {
    position: relative;
    cursor: pointer;
}
@media screen and (max-device-width: 320px) {
    .next .arrow {
        transform: scale(.7);
    }
}
.next .a1 {
    opacity: .13;
    transform: translateY(.2rem);
    animation: ka1 2s infinite;
}
.next .a2 {
    opacity: .39;
    transform: translateY(.1rem);
    animation: ka2 2s infinite;
}
.next .a3 {
    animation: ka3 2s infinite;
}
@keyframes ka1
{
    0%, 12.5% {
        opacity: 0;
    }
    25%, 100% {
        opacity: .13;
    }
}
@keyframes ka2
{
    0%, 37.5% {
        opacity: 0;
    }
    50%, 100% {
        opacity: .39;
    }
}
@keyframes ka3
{
    0%, 62.5% {
        opacity: 0;
    }
    75%, 100% {
        opacity: 1;
    }
}
.next .a1,
.next .a2,
.next .a3 {
    height: .22rem;
}

.foot {
    color: black;
    display: block;
    width: 100%;
    line-height: 0rem;
    background-color: rgb(239,239,239);
}
.foot .avatar-item {
    width: 100%;
    cursor: pointer;
    position: relative;
    display: inline-block;
}
/*.foot .avatar-item::before {
    content: ' ';
    display: inline-block;
    position: absolute;
    left: 0rem;
    right: 0rem;
    background-color: #e1e6eb;
    top: 0rem;
    opacity: 0;
    transition: all .3s ease;
    padding-bottom: 63%;
}*/
.foot .avatar-item .avatar {
    display: inline-block;
    width: 100%;
    padding-bottom: 63%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #e1e6ec;
}
.foot .avatar-item .introduce {
    position: absolute;
    z-index: 1;
    color: #313e48;
    box-sizing: border-box;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    background-color: rgb(239,239,239);
    width: 100%;
    flex-direction: column;
    text-align: center;
    height: .55rem;
    min-height: .55rem;
    position: relative;
}
.foot .avatar-item.expanded::before {
    opacity: .55;
}
.foot .avatar-item.expanded .triangle {
    display: block;
}
.foot .avatar-item.expanded .introduce {
    background-color: #e1e6eb;
    text-align: left;
}
/*.foot .avatar-item .introduce .nt {
    flex: 1;
    transition: all .2s linear;
}*/
.intro-wrapper {
    padding: 0 .3rem .37rem .6rem;
    background-color: #e1e6eb;
    height: 0;
    transition: all ease .3s;
    background: transparent;
}
.foot .avatar-item .introduce .intro-content {
    font-size: .09rem;
    flex: 0;
    line-height: 1.6em;
    flex: 2;
    display: none;
    transition: all .2s linear;
    height: 0rem;
}
.foot .avatar-item .introduce .intro-content.c0 {
    margin: .9rem 0 .06rem;
}
.foot .avatar-item .introduce .name {
    font-size: .2rem;
    font-weight: normal;
    top: .1rem;
}
.foot .avatar-item .introduce .title {
    font-size: .09rem;
    top: .35rem;
}
.foot .avatar-item .introduce .name,
.foot .avatar-item .introduce .title {
    line-height: 1em;
    text-align: center;
    transition: all .3s ease;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.foot .avatar-item.expanded .introduce .intro-content {
    display: block;
    height: auto;
}
.foot .avatar-item.expanded .intro-wrapper {
    height: auto;
}
.foot .avatar-item.last {

}
.foot .avatar-item.expanded .introduce {
    height: 2.2rem;
}
.foot .avatar-item.expanded .introduce .name {
    top: .35rem;
    left: .6rem;
    transform: translateX(0%);
}
.foot .avatar-item.expanded .introduce .title {
    top: .6rem;
    left: .6rem;
    transform: translateX(0%);
}
.foot .avatar-item.last.expanded .introduce {
    bottom: 0px;
}
.triangle {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAATCAMAAAAkluS8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURUxpcaGpsIKMlMDGzHmEi19qc3B7hGVweJGaoNbe3t/f6v///9Tb39XV3Lm/xcXM0mx3gKqzuMnQ1bG5v8zR17zByJigplJeZ1djbOuCqhcAAAAXdFJOUwCx6FTx/vf91A8IAhoicEL5lzaBLWPH043zJQAAAIZJREFUKM+N0ssSgyAQRNERgQFFfCbN/39pysSyIiJw1nfTNUMUsyYYS0WDBCCHUjYydtOSz14KP6rNZTNOYX2s+gb/mj6dWYMr06UyJxET7p4tE+70FmetQgpHs9eAtOCfh17NZ9YZ5LyP2U4gT3zfYtMo2d/iOHwej6RRQxNXdUy+JlT+A1y+JpdAgg0MAAAAAElFTkSuQmCC);
    width: .19rem;
    height: .1rem;
    background-size: contain;
    background-repeat: no-repeat;
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: .16rem;
}
</style>
