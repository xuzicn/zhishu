<template>
    <div class="margin-top-page common profile">
        <div class='bd' ref="bd">
            <div class="intro-sections">
                <div class="title">投资团队</div>
                <ul>
                    <li :key="i" v-for="(item, i) in intros" :class="'item active item-' + i">
                        <div class="item-bg"></div>
                        <img src="/assets/team-hr.png">
                        <div class="item-intro">{{item.text}}</div>
                    </li>
                </ul>
            </div>
            <div class="next" @click="scrollToMember">
                <div class="arrow">
                    <div class="a1 down-arrow"></div>
                    <div class="a2 down-arrow"></div>
                    <div class="a3 down-arrow"></div>
                </div>
                <div>团队成员</div>
            </div>
        </div>
        <div class='foot' ref="ft">
            <div :key="rindex" v-for="(row, rindex) in profiles" :class='"avatar-ct " + ((rindex===profiles.length-1)?"last":"")'>
                <div :key="index" v-for="(p, index) in row" :class='"avatar-item " + (expandedItem===p?"expanded":"collapsed") + (p===null?" empty":"")' @click="toggleItem(p)">
                    <div v-if="p!==null" class="avatar" :style="'background-image: url(\'/assets/avatars/' + p.bg + '\')'"></div>
                    <div v-if="p!==null" class="introduce">
                        <div class="name">{{p.intro.name}}</div>
                        <div class="title">{{p.intro.title}}</div>
                        <div class="intro-content">{{p.intro.introduce[0]}}</div>
                        <div class="intro-content">{{p.intro.introduce[1]}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import profiles from '../../profiles';

const pList = [];

profiles.forEach(function (item, i) {
    if (i % 3 === 0) {
        pList.push([]);
    }
    pList[pList.length - 1].push(item);
});
export default {
    data() {
        return {
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
            profiles: pList
        };
    },
    mounted() {
        document.addEventListener('click', this.docClicked);
    },
    beforeDestroyed() {
        document.removeEventListener('click', this.docClicked);
    },
    methods: {
        scrollToMember() {
            const scrollTo = this.$refs.bd.getBoundingClientRect().height;
            let willBe = this.$el.scrollTop;

            const d = setInterval(() => {
                willBe += 40;
                if (willBe > scrollTo) {
                    this.$el.scrollTo(0, scrollTo - 1);
                    clearInterval(d);
                } else {
                    this.$el.scrollTo(0, willBe);
                }
            }, 10);
        },
        toggleItem(i) {
            if (i === null) return;
            if (i === this.expandedItem) {
                this.expandedItem = undefined;
            } else {
                this.expandedItem = i;
            }
        },
        docClicked(e) {
            if (!this.expandedItem) return;

            const eTarget = e.target;

            let elCursor = eTarget;
            // let isClickOutSide = true;
            while(elCursor) {
                if (elCursor.classList.contains('avatar-item')) {
                    break;
                } else if (elCursor === document.body) {
                    this.expandedItem = undefined;
                    break;
                } else {
                    elCursor = elCursor.parentNode;
                }
            }
        }
    }
}
</script>

<style scoped>
.margin-top-page {
    position: relative;
    min-height: 6rem;
    overflow-y: scroll;
}
.margin-top-page .bd {
    background: #f4f4f4;
    height: 100%;
}
.margin-top-page .intro-sections {
    position: absolute;
    top: .72rem;
    width: 100%;
    color: #313e48;
}
.margin-top-page .intro-sections .title {
    text-align: center;
    font-size: .3rem;
}
.margin-top-page .intro-sections ul {
    display: flex;
    font-size: .11rem;
    list-style: none;
    justify-content: center;
    margin: .16rem 0 0;
    padding: 0;
}
.margin-top-page .intro-sections li {
    width: 1.62rem;
    margin: 0 .29rem;
}

.margin-top-page .intro-sections li .item-bg {
    background-image: url('/assets/team-intro.png');
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin-left: .06rem;
    transition: all ease .3s;
}
.margin-top-page .intro-sections li.item-1 .item-bg {
    background-position-x: -1.5rem;
}
.margin-top-page .intro-sections li.item-2 .item-bg {
    background-position-x: -3rem;
}
.margin-top-page .intro-sections li.item-3 .item-bg {
    background-position-x: -4.5rem;
}
.margin-top-page .intro-sections li:hover .item-bg {
    box-shadow: 0 0 0 0.2rem #fff, 0 0 0.2rem 0.3rem rgba(0,0,0,0.16);
}
.margin-top-page .intro-sections li img {
    margin-top: .39rem;
    transition: all ease .3s;
    opacity: 0;
}
.margin-top-page .intro-sections li:hover img {
    opacity: 1;
}
.margin-top-page .intro-sections li .item-intro {
    opacity: .66;
    transition: all ease .3s;
    padding: .14rem .04rem 0;
}
.margin-top-page .intro-sections li:hover .item-intro {
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
}
.next .arrow {
    position: relative;
    margin-bottom: .08rem;
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
    margin: .68rem 0rem;
}
.foot .avatar-ct {
    display: flex;
    width: 100%;
    justify-content: center;
}
.foot .avatar-ct .avatar-item {
    width: 3.24rem;
    margin: .85% .08rem;
    cursor: pointer;
    position: relative;
}
.foot .avatar-ct .avatar-item.empty {
    cursor: auto;
}

.foot .avatar-ct .avatar-item::before {
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
.foot .avatar-ct .avatar-item .avatar {
    display: inline-block;
    width: 3.24rem;
    padding-bottom: 100%;
}
.foot .avatar-ct .avatar-item .introduce {
    width: 3.24rem;
    position: absolute;
    background-color: #e1e6eb;
    height: 106.9%;
    color: #313e48;
    padding: .4rem .45rem;
    box-sizing: border-box;
    transition: all .3s ease;
}
.foot .avatar-ct .avatar-item.collapsed .introduce {
    opacity: 0;
    z-index: -1;
}
.foot .avatar-ct .avatar-item.expanded .introduce {
    opacity: 1;
    z-index: 1;
}
.foot .avatar-ct .avatar-item.expanded::before {
    opacity: .55;
}
.foot .avatar-ct .avatar-item .introduce .name {
    font-size: .28rem;
}
.foot .avatar-ct .avatar-item .introduce .title {
    font-size: .16rem;
    margin-bottom: .3rem;
}
.foot .avatar-ct .avatar-item .introduce .intro-content {
    font-size: .14rem;
}
.foot .avatar-ct.last .avatar-item .introduce {
    transform: translateY(-100%);
    height: 100%;
}
@media screen and (max-width:800px) {
    .margin-top-page {
        min-height: 3.7rem;
    }
    .margin-top-page .intro-sections {
        top: .4rem;
    }
    .margin-top-page .intro-sections .title {
        font-size: .18rem;
    }
    .margin-top-page .intro-sections ul,
    .margin-top-page .next {
       /* font-size: .08rem;
        margin: .08rem 0 0;*/
        transform: scale(.6);
        transform-origin: top center;
    }
    .margin-top-page .next {
        transform-origin: bottom center;
    }
  /*  .margin-top-page .intro-sections li {
        width: 1.62rem;
        margin: 0 .29rem;
    }
    .margin-top-page .intro-sections li .item-bg {
        width: 1rem;
        height: 1rem;
        margin-left: .06rem;
    }
    .margin-top-page .intro-sections li.item-1 .item-bg {
        background-position-x: -1.5rem;
    }
    .margin-top-page .intro-sections li.item-2 .item-bg {
        background-position-x: -3rem;
    }
    .margin-top-page .intro-sections li.item-3 .item-bg {
        background-position-x: -4.5rem;
    }*/
}
</style>
