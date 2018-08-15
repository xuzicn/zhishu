<template>
    <div class="margin-top-page common profile">
        <div class='bd'>
            <div class="content-wrapper fade-in-content">
                <div class="title">投资团队</div>
                <p class='content'>我们专注于数字化，对细分跑道、业务模式、创业团队有独特</p>
                <p class='content end'>理解，我们是“懂”创业伙伴的投资人</p>
                <p class='content'>我们帮助创业伙伴进行战略重构，人才提升，资源嫁接，我们</p>
                <p class='content end'>创造我们和创业伙伴之间、创业伙伴相互之间的协同效应</p>
                <p class='content'>我们专注于规模化以及高增长的细分市场，我们优化资源配置</p>
                <p class='content'>和规划多种退出机制，提高投资成功率和回报率</p>
            </div>
        </div>
        <div class='foot'>
            <div :key="rindex" v-for="(row, rindex) in profiles" :class='"avatar-ct " + ((rindex===profiles.length-1)?"last":"")'>
                <div :key="index" v-for="(p, index) in row" :class='"avatar-item " + (expandedItem===p?"expanded":"collapsed")' @click="toggleItem(p)">
                    <div :class="'avatar ' + p.id"></div>
                    <div class="introduce">
                        <div class="name">{{p.intro.name}}</div>
                        <div class="title">{{p.intro.title}}</div>
                        <div class="intro-content">{{p.intro.introduce}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expandedItem: undefined,
            profiles: [[{
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
            }], [{
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
            }], [{
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
            }], [{
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
            }], [{
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
            }], [{
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
            }]]
        };
    },
    mounted() {
        document.addEventListener('click', this.docClicked);
    },
    beforeDestroyed() {
        document.removeEventListener('click', this.docClicked);
    },
    methods: {
        toggleItem(i) {
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
    background-image: url('/assets/06-bg.png');
    height: 100%;
}
.margin-top-page .content-wrapper {
    color: #313e48;
}
.margin-top-page.profile .content.end {
    margin-bottom: .20rem;
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
    margin: .85% .22rem;
    cursor: pointer;
    position: relative;
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
.foot .avatar-ct .avatar-item .avatar.a01 {
    background-image: url('/assets/avatars/01.png');
}
.foot .avatar-ct .avatar-item .avatar.a02 {
    background-image: url('/assets/avatars/02.png');
}
.foot .avatar-ct .avatar-item .avatar.a03 {
    background-image: url('/assets/avatars/03.png');
}
.foot .avatar-ct .avatar-item .avatar.a04 {
    background-image: url('/assets/avatars/04.png');
}
.foot .avatar-ct .avatar-item .avatar.a05 {
    background-image: url('/assets/avatars/05.png');
}
.foot .avatar-ct .avatar-item .avatar.a06 {
    background-image: url('/assets/avatars/06.png');
}
.foot .avatar-ct .avatar-item .avatar.a07 {
    background-image: url('/assets/avatars/07.png');
}
.foot .avatar-ct .avatar-item .avatar.a08 {
    background-image: url('/assets/avatars/08.png');
}
.foot .avatar-ct .avatar-item .avatar.a09 {
    background-image: url('/assets/avatars/09.png');
}
.foot .avatar-ct .avatar-item .introduce {
    width: 324px;
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
    font-size: .15rem;
    margin-bottom: .3rem;
}
.foot .avatar-ct .avatar-item .introduce .intro-content {
    font-size: .15rem;
}
.foot .avatar-ct.last .avatar-item .introduce {
    transform: translateY(-100%);
    height: 100%;
}
</style>
