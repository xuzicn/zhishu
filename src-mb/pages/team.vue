<template>
    <div class="margin-top-page common profile">
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
                    <div :class="'avatar ' + p.id"></div>
                    <div class="introduce">
                        <div class="nt">
                            <div class="name">{{p.intro.name}}</div>
                            <div class="title">{{p.intro.title}}</div>
                        </div>
                        <div class="intro-content">{{p.intro.introduce}}</div>
                    </div>
                </v-touch>
            </div>
        </div>
    </div>
</template>

<script>
import iscroll from 'iscroll';
window.iscroll = iscroll

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
            profiles: [{
                id: 'a01',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a01',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a02',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a06',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a03',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a03',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a05',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a08',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a04',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a04',
                intro: {
                    'name': '朱海',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a07',
                intro: {
                    'name': '朱海007',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }, {
                id: 'a09',
                intro: {
                    'name': '朱海008',
                    'title': '高级合伙人',
                    'introduce': '世界500强外企施耐德电气大中华区前总裁，全球高级总裁，全方位企业管理经验，对电力、自动化、楼宇有独特市场认知、战略思考和管理实战经验，精于产业投资与整合。'
                }
            }]
        };
    },
    mounted() {
        // document.addEventListener('click', this.docClicked);

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
    // beforeDestroyed() {
        // document.removeEventListener('click', this.docClicked);
    // },
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
        },
        // docClicked(e) {
        //     if (!this.expandedItem) return;

        //     const eTarget = e.target;

        //     let elCursor = eTarget;
        //     // let isClickOutSide = true;
        //     while(elCursor) {
        //         if (elCursor.classList.contains('avatar-item')) {
        //             break;
        //         } else if (elCursor === document.body) {
        //             this.expandedItem = undefined;
        //             break;
        //         } else {
        //             elCursor = elCursor.parentNode;
        //         }
        //     }
        // }
    }
}
</script>

<style scoped>
.margin-top-page {
    position: relative;
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
    padding: 0 .3rem;
    font-size: .12rem;
}
.margin-top-page .intro-sections .title {
    font-size: .26rem;
    padding-top: .4rem;
}
.margin-top-page .intro-sections .item-bg {
    background-image: url('/assets/team-intro.png');
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin: .24rem 0 .32rem;
    transition: all ease .3s;
}
.margin-top-page .item-1 .item-bg {
    background-position-x: -1.5rem;
}
.margin-top-page .item-2 .item-bg {
    background-position-x: -3rem;
}
.margin-top-page .item-3 .item-bg {
    background-position-x: -4.5rem;
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
    padding-bottom: 0.55rem;
}
.foot .avatar-item::before {
    content: ' ';
    display: inline-block;
    position: absolute;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    top: 0rem;
    background-color: #e1e6eb;
    opacity: 0;
    transition: all .3s ease;
}
.foot .avatar-item .avatar {
    display: inline-block;
    width: 100%;
    padding-bottom: 100%;
    background-size: cover;
}
.foot .avatar-item .avatar.a01 {
    background-image: url('/assets/avatars/01.png');
}
.foot .avatar-item .avatar.a02 {
    background-image: url('/assets/avatars/02.png');
}
.foot .avatar-item .avatar.a03 {
    background-image: url('/assets/avatars/03.png');
}
.foot .avatar-item .avatar.a04 {
    background-image: url('/assets/avatars/04.png');
}
.foot .avatar-item .avatar.a05 {
    background-image: url('/assets/avatars/05.png');
}
.foot .avatar-item .avatar.a06 {
    background-image: url('/assets/avatars/06.png');
}
.foot .avatar-item .avatar.a07 {
    background-image: url('/assets/avatars/07.png');
}
.foot .avatar-item .avatar.a08 {
    background-image: url('/assets/avatars/08.png');
}
.foot .avatar-item .avatar.a09 {
    background-image: url('/assets/avatars/09.png');
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
}
.foot .avatar-item.expanded::before {
    opacity: .55;
}
.foot .avatar-item .introduce .nt {
    flex: 1;
    transition: all .2s linear;
}
.foot .avatar-item .introduce .intro-content {
    font-size: .12rem;
    flex: 0;
    line-height: 1.6em;
    padding: .15rem .15rem .15rem 0;
    flex: 2;
    display: none;
    transition: all .2s linear;
}
.foot .avatar-item .introduce .name {
    font-size: .2rem;
    line-height: 1em;
    margin: .1rem 0 .06rem;
    text-align: center;
}
.foot .avatar-item .introduce .title {
    font-size: .1rem;
    line-height: 1em;
    text-align: center;
}
.foot .avatar-item.expanded .introduce .intro-content {
    display: block;
}
.foot .avatar-item.last {

}
.foot .avatar-item.last.expanded .introduce {
    bottom: 0px;
}
</style>
