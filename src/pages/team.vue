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
<!--             <div class="content-wrapper fade-in-content">
                <div class="title">投资团队</div>
                <p class='content'>我们专注于数字化，对细分跑道、业务模式、创业团队有独特</p>
                <p class='content end'>理解，我们是“懂”创业伙伴的投资人</p>
                <p class='content'>我们帮助创业伙伴进行战略重构，人才提升，资源嫁接，我们</p>
                <p class='content end'>创造我们和创业伙伴之间、创业伙伴相互之间的协同效应</p>
                <p class='content'>我们专注于规模化以及高增长的细分市场，我们优化资源配置</p>
                <p class='content'>和规划多种退出机制，提高投资成功率和回报率</p>
            </div> -->
            <div class="next" @click="scrollToMember">
                <div class="arrow">
                    <div class="a1"></div>
                    <div class="a2"></div>
                    <div class="a3"></div>
                </div>
                <div>团队成员</div>
            </div>
        </div>
        <div class='foot' ref="ft">
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
            intros: [{
                text: '我们是专业化的创业投资团队。我们深入调查细分行业，确定细分跑道和价值空间。我们拥有企业变革和领导力的独立视角和判断力，赋能被投企业额价值成长。'
            }, {
                text: '我们深入理解数字化和智能化对于传统产业带来的影响和变革路径。我们拥有丰富的企业数字化升级和转型的管理经验，坚信数字化对于传统行业的价值提升。'
            }, {
                text: '我们帮助被投企业进行战略梳理，商业模式的更新迭代，企业运营至关重要的选择，人才和团队提升。我们创造我们和创业伙伴之间、创业伙伴相互之间的协同效应。'
            }, {
                text: '我们谙熟楼宇科技、智能电力、智慧物流。我们熟悉细分行业发展规律和创新价值。我们在垂直领域拥有广泛的资源。'
            }],
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
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAWCAYAAAB+F+RbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA35pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiOTQ5MGI0Ni03NTcwLTRhNmUtOTFlZi1jN2RjNGMyNWU5MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNEMEJBN0E5OTkyMTFFODk2RDNGQzM1MkQ1QjBEM0QiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNEMEJBNzk5OTkyMTFFODk2RDNGQzM1MkQ1QjBEM0QiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0ODAxMTc0MDcyMDY4MTE4MjJBRTJBRTU3MjRGN0NDIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ODIyMDlhZjMtNTQzNi0xMTdhLWE4NmUtYzQxZDk3MDc1YzNmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+X1YSIwAAAmBJREFUeNrc2EtIVFEcx/HrcYxwIVFEWGIubBX0sLKHYBYqBpqQEC1yVUZEKEGLIGjRpkWLoIULFwWpZUGLbJGWFhOVjx4k5CKYRSiWEJGJiyC1vid+i0Gcx525d5yZP3ycce69c8//nnP/59zJ2VlZF3Ic5yruONkbp3DB8KcRF9GFgixLcg0e4ByabLLjKMdPfMDeLEm0Ah8xiQP4nFu4udRumMcTfFEPr8Ib/M3AJHNxBddwBu1YsBvMkh17sRvVeIZNGZZoMV5gv/LoC99oljngK2owgLc4miGJNmEEj3AE00t3CEQ4cFHDYBB3Uasi9jsNk8zHDVShHu8j7WhifNEoylTV7PutaZbodrxTp+2Klmg8ydqYxUlcx3OcTYMkc9CKfq0R7Dw6F+uggIsTdGIobFi34McKJLoet7AO+zSDxBXG5YlCmr9CGjIHU5xotdYCY6h0k+j/OUnzrJtY1LT0SUtMe4Vf6nO/Ik8F8zKacTuR85kkGjCg4rUDQZT4lKjtjdfYovMFE/0ik2RDvqMB9zXHnfA40WYlau/RY8nWiIAHDbJLypu64ve0IGmLpzpGiQIt87bhsNbvSYfxsBfGtERbUPEqS/B7ynX8L70f96qBiRSoaPEHj/EN3fps2MWFv6TVUKte571snPGpqDzUo2KjnqY2xNh/I55qatmjBxLPw69kbUzgkBYidljWRdivQdsHdb9P+fbs5/EwXq54BbWuthW1SP/b+3q1hup5HEeP38/PfvZseLzSfFysHwXqdQHWqpCNpKIRASd1MaMePI0OFaOU/sj3T4ABAEb3eyFPZLaNAAAAAElFTkSuQmCC);
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
    margin: .85% .32rem;
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
    font-size: .16rem;
    margin-bottom: .3rem;
}
.foot .avatar-ct .avatar-item .introduce .intro-content {
    font-size: .16rem;
}
.foot .avatar-ct.last .avatar-item .introduce {
    transform: translateY(-100%);
    height: 100%;
}
</style>
