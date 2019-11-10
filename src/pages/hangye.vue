<template>
    <div class="margin-top-page">
        <link rel="preload" as="image" href="/assets/02-hangye.png">
        <link rel="preload" as="image" href="/assets/03-hangye.png">
        <div class="wrapper big" ref="bigContent">
            <div class="hangye-bd hangye01">
                <div class="content-wrapper fade-in-content">
                    <div class="title">先进制造</div>
                    <p class='content'>全球3C和汽车产能向中国转移，催生一批细分行业</p>
                    <p class='content'>独角兽。生产智能化技术、管理数字化手段推动中</p>
                    <p class='content'>国制造向“高精”、“高速”、“高效”转型升级</p>
                </div>
                <div class="next" @click="scrollToMemberBig(2)">
                    <div class="arrow">
                        <div class="a1 down-arrow-white"></div>
                        <div class="a2 down-arrow-white"></div>
                        <div class="a3 down-arrow-white"></div>
                    </div>
                </div>
            </div>
            <div class="hangye-bd hangye02">
                <div class="content-wrapper fade-in-content">
                    <div class="title">楼宇科技</div>
                    <p class='content'>中国是全球最大的新建建筑市场和存量市场，数字</p>
                    <p class='content'>化技术推动建筑设计手段、施工管理、安防技术、</p>
                    <p class='content'>物业运营发生重大变化，让建筑和管理“更聪明”</p>
                    <p class='content'>是不可阻挡的趋势</p>
                </div>
                <div class="next" @click="scrollToMemberBig(3)">
                    <div class="arrow">
                        <div class="a1 down-arrow-white"></div>
                        <div class="a2 down-arrow-white"></div>
                        <div class="a3 down-arrow-white"></div>
                    </div>
                </div>
            </div>
            <div class="hangye-bd hangye03">
                <div class="content-wrapper fade-in-content">
                    <div class="title">智能能源</div>
                    <p class='content'>随着电力负荷的高速增长，能源产供用体系将发生</p>
                    <p class='content'>重大变化。电力输配和管理将更柔性、更智能。储</p>
                    <p class='content'>能、电力电子、微网以及电力可靠性管理将带来巨</p>
                    <p class='content'>大技术升级和管理变革</p>
                </div>
                <div class="next" @click="scrollToMemberBig(1)">
                    <div class="arrow">
                        <div class="a1 down-arrow-white"></div>
                        <div class="a2 down-arrow-white"></div>
                        <div class="a3 down-arrow-white"></div>
                    </div>
                </div>
            </div>
        </div>
<!--         <svg class="progress big" width="58" height="58" viewbox="0 0 58 58">
            <circle cx="29" cy="29" r="26" stroke-width="3" stroke="rgba(255,255,255,0.06)" fill="none"></circle>
            <circle cx="29" cy="29" r="26" stroke-width="3" stroke="#fff" fill="none" transform="matrix(0,-1,1,0,0,58)" :stroke-dasharray="circleProgress"></circle>
            <circle cx="29" cy="29" r="22" stroke="none" fill="rgba(255,255,255,.06)" transform="matrix(0,-1,1,0,0,58)" :stroke-dasharray="circleProgress"></circle>
            <text x="50%" y="57%" text-anchor="middle" fill="rgba(255,255,255,0.28)">{{'0' + page}}</text>
        </svg> -->
        <div class='wrapper small' ref="smallContent">
            <div class="hangye-bd hangye01">
                <div class="content-wrapper fade-in-content">
                    <div class="title">先进制造</div>
                    <p class='content'>全球3C和汽车产能向中国转移，</p>
                    <p class='content'>催生一批细分行业独角兽。生产智能化技术、</p>
                    <p class='content'>管理数字化手段推动中国制造</p>
                    <p class='content'>向“高精”、“高速”、“高效”转型升级</p>
                </div>
                <div class="next" @click="scrollToMemberSmall(2)">
                    <div class="arrow">
                        <div class="a1 down-arrow-white"></div>
                        <div class="a2 down-arrow-white"></div>
                        <div class="a3 down-arrow-white"></div>
                    </div>
                </div>
<!--                 <svg class="progress" width="32" height="32" viewbox="0 0 32 32">
                    <circle cx="16" cy="16" r="15" stroke-width="2" stroke="rgba(255,255,255,0.06)" fill="none"></circle>
                    <circle cx="16" cy="16" r="15" stroke-width="2" stroke="#fff" fill="none" transform="matrix(0,-1,1,0,0,32)" :stroke-dasharray="circleProgressSmall"></circle>
                    <circle cx="16" cy="16" r="13" stroke="none" fill="rgba(255,255,255,.06)" transform="matrix(0,-1,1,0,0,32)" :stroke-dasharray="circleProgressSmall"></circle>
                    <text x="50%" y="57%" text-anchor="middle" fill="rgba(255,255,255,0.28)">{{'0' + page}}</text>
                </svg> -->
            </div>
            <div class="hangye-bd hangye02">
                <div class="content-wrapper fade-in-content">
                    <div class="title">楼宇科技</div>
                    <p class='content'>中国是全球最大的新建建筑市场和存量市场，</p>
                    <p class='content'>数字化技术推动建筑设计手段、施工管理、安防技术、</p>
                    <p class='content'>物业运营发生重大变化，</p>
                    <p class='content'>让建筑和管理“更聪明”是不可阻挡的趋势</p>
                </div>
                <div class="next" @click="scrollToMemberSmall(3)">
                    <div class="arrow">
                        <div class="a1 down-arrow-white"></div>
                        <div class="a2 down-arrow-white"></div>
                        <div class="a3 down-arrow-white"></div>
                    </div>
                </div>
<!--                 <svg class="progress" width="32" height="32" viewbox="0 0 32 32">
                    <circle cx="16" cy="16" r="15" stroke-width="2" stroke="rgba(255,255,255,0.06)" fill="none"></circle>
                    <circle cx="16" cy="16" r="15" stroke-width="2" stroke="#fff" fill="none" transform="matrix(0,-1,1,0,0,32)" :stroke-dasharray="circleProgressSmall"></circle>
                    <circle cx="16" cy="16" r="13" stroke="none" fill="rgba(255,255,255,.06)" transform="matrix(0,-1,1,0,0,32)" :stroke-dasharray="circleProgressSmall"></circle>
                    <text x="50%" y="57%" text-anchor="middle" fill="rgba(255,255,255,0.28)">{{'0' + page}}</text>
                </svg> -->
            </div>
            <div class="hangye-bd hangye03">
                <div class="content-wrapper fade-in-content">
                    <div class="title">智能能源</div>
                    <p class='content'>随着电力负荷的高速增长，</p>
                    <p class='content'>能源产供用体系将发生重大变化。电力输配和管理将更</p>
                    <p class='content'>柔性、更智能。储能、电力电子、微网以及电力可靠性</p>
                    <p class='content'>管理将带来巨大技术升级和管理变革</p>
                </div>
                <div class="next" @click="scrollToMemberSmall(1)">
                    <div class="arrow">
                        <div class="a1 down-arrow-white"></div>
                        <div class="a2 down-arrow-white"></div>
                        <div class="a3 down-arrow-white"></div>
                    </div>
                </div>
<!--                 <svg class="progress" width="32" height="32" viewbox="0 0 32 32">
                    <circle cx="16" cy="16" r="15" stroke-width="2" stroke="rgba(255,255,255,0.06)" fill="none"></circle>
                    <circle cx="16" cy="16" r="15" stroke-width="2" stroke="#fff" fill="none" transform="matrix(0,-1,1,0,0,32)" :stroke-dasharray="circleProgressSmall"></circle>
                    <circle cx="16" cy="16" r="13" stroke="none" fill="rgba(255,255,255,.06)" transform="matrix(0,-1,1,0,0,32)" :stroke-dasharray="circleProgressSmall"></circle>
                    <text x="50%" y="57%" text-anchor="middle" fill="rgba(255,255,255,0.28)">{{'0' + page}}</text>
                </svg> -->
            </div>
        </div>
    </div>
</template>

<script>
// const countdown = 10;
export default {
    methods: {
        scrollToMemberBig(page) {
            let scrollTo = 0;

            if (page === 2) {
                scrollTo = this.$refs.bigContent.clientHeight;
            } else if (page === 3) {
                scrollTo = this.$refs.bigContent.clientHeight * 2;
            }

            let willBe = this.$refs.bigContent.scrollTop;
            if (willBe === scrollTo) return;

            if (willBe < scrollTo) {
                const d = setInterval(() => {
                    willBe += 40;
                    if (willBe > scrollTo) {
                        this.$refs.bigContent.scrollTo(0, scrollTo);
                        clearInterval(d);
                    } else {
                        this.$refs.bigContent.scrollTo(0, willBe);
                    }
                }, 10);
            } else {
                const d = setInterval(() => {
                    willBe -= 40;
                    if (willBe < scrollTo) {
                        this.$refs.bigContent.scrollTo(0, scrollTo);
                        clearInterval(d);
                    } else {
                        this.$refs.bigContent.scrollTo(0, willBe);
                    }
                }, 10);
            }
        },
        scrollToMemberSmall(page) {

            let scrollTo = 0;

            if (page === 2) {
                scrollTo = this.$refs.smallContent.clientHeight;
            } else if (page === 3) {
                scrollTo = this.$refs.smallContent.clientHeight * 2;
            }

            let willBe = this.$refs.smallContent.scrollTop;
            if (willBe === scrollTo) return;

            if (willBe < scrollTo) {
                const d = setInterval(() => {
                    willBe += 40;
                    if (willBe > scrollTo) {
                        this.$refs.smallContent.scrollTo(0, scrollTo);
                        clearInterval(d);
                    } else {
                        this.$refs.smallContent.scrollTo(0, willBe);
                    }
                }, 10);
            } else {
                const d = setInterval(() => {
                    willBe -= 40;
                    if (willBe < scrollTo) {
                        this.$refs.smallContent.scrollTo(0, scrollTo);
                        clearInterval(d);
                    } else {
                        this.$refs.smallContent.scrollTo(0, willBe);
                    }
                }, 10);
            }
        }
    }
    // data() {
    //     return {
    //         page: 1,
    //         countdown: countdown,
    //         circleProgress: '169 169',
    //         circleProgressSmall: '94 94'
    //     };
    // },
    // mounted() {
    //     // this.moveNextPage();
    // },
    // methods: {
    //     moveNextPage() {
    //         const me = this;

    //         me.circleProgress = '169 169';
    //         me.circleProgressSmall = '94 94';
    //         new Promise(function (resolve) {
    //             // me.circleProgress = '0 1069';
    //             const cirf = setInterval(function () {
    //                 const c = me.countdown,
    //                     cd = countdown;
    //                 me.circleProgress = (169 / cd * c) + ' 169';
    //                 me.circleProgressSmall = (94 / cd * c) + ' 94';
    //                 if (me.countdown === 0) {
    //                     clearInterval(cirf);
    //                 }
    //             });
    //             const f = setInterval(function () {
    //                 if (me.countdown === 0) {
    //                     resolve();
    //                     clearInterval(f);
    //                 } else {
    //                     me.countdown--;
    //                 }
    //             }, 1000);
    //         }).then(function () {
    //             // me.noCircleAni = true;
    //             return new Promise(function (resolve) {
    //                 setTimeout(function () {
    //                     resolve();
    //                     // me.noCircleAni = false;
    //                 }, 500);
    //             });
    //         }).then(function () {
    //             if (me.page === 3) {
    //                 me.page = 1;
    //             } else {
    //                 me.page++;
    //             }
    //             me.moveNextPage();
    //             me.countdown = countdown;
    //             me.circleProgress = '169 169';
    //             me.circleProgressSmall = '94 94';
    //         });
    //     }
    // }
};
</script>

<style scoped> 
.next {
    font-size: .14rem;
    position: absolute;
    bottom: .2rem;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    width: .56rem;
}
.next .arrow {
    position: relative;
    margin-bottom: .08rem;
    cursor: pointer;
}
.next .a1,
.next .a2,
.next .a3 {
    height: .22rem;
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
.progress.big {
    font-size: .16rem;
    position: absolute;
    right: .2rem;
    bottom: .2rem;
}
.progress circle {
    transition: stroke-dasharray 1s;
}
.margin-top-page {
    position: relative;
    overflow-y: hidden;
}
.wrapper {
    position: relative;
    height: 100%;
    transition: all .5s linear;
}
.wrapper.small {
    display: none;
}
/*.wrapper.page1 {
    transform: translateY(0%);
}
.wrapper.page2 {
    transform: translateY(-100%);
}
.wrapper.page3 {
    transform: translateY(-200%);
}*/
.hangye-bd {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}
.hangye01 .content-wrapper,
.hangye02 .content-wrapper,
.hangye03 .content-wrapper {
    color: #fff;
    margin: 1.05rem 0 0 1.61rem;
}
.hangye01 .content-wrapper .content,
.hangye02 .content-wrapper .content,
.hangye03 .content-wrapper .content {
    font-size: .16rem;
}
.hangye01 {
    background-image: url('/assets/01-hangye.png');
}
.hangye02 {
    background-image: url('/assets/02-hangye.png');
    transform: translateY(100%);
}
.hangye03 {
    background-image: url('/assets/03-hangye.png');
    transform: translateY(200%);
}
@media screen and (max-width:1024px) {
    .hangye01 .content-wrapper,
    .hangye02 .content-wrapper,
    .hangye03 .content-wrapper {
        margin: .6rem 0 0 .8rem;
    }
    .hangye01 .content-wrapper .content,
    .hangye02 .content-wrapper .content,
    .hangye03 .content-wrapper .content {
        font-size: .12rem;
    }
    .hangye01 .content-wrapper .title,
    .hangye02 .content-wrapper .title,
    .hangye03 .content-wrapper .title {
        font-size: .28rem;
    }
}
@media screen and (max-width:800px) {
    .wrapper.big,
    .progress.big {
        display: none;
    }
    .wrapper.small {
        display: block;
    }
    .hangye01 {
        background-image: url('/assets/01-hangye-small.png');
    }
    .hangye02 {
        background-image: url('/assets/02-hangye-small.png');
    }
    .hangye03 {
        background-image: url('/assets/03-hangye-small.png');
    }
    .hangye01 .content-wrapper,
    .hangye02 .content-wrapper,
    .hangye03 .content-wrapper {
        margin: .8rem 0 .3rem;
        width: 100%;
    }
    .hangye01 .content-wrapper .content,
    .hangye02 .content-wrapper .content,
    .hangye03 .content-wrapper .content {
        font-size: .08rem;
        margin: .02rem;
        text-align: center;
    }
    .hangye01 .content-wrapper .title,
    .hangye02 .content-wrapper .title,
    .hangye03 .content-wrapper .title {
        font-size: .2rem;
        margin-bottom: .08rem;
        text-align: center;
    }
    .wrapper.small .content-wrapper,
    .wrapper.small .progress {
        position: static;
    }
    
    .wrapper.small .progress {
        font-size: .1rem;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    .next {
        transform: scale(.5);
    }
}
/*@media screen and (min-width:1920px) {
    
}
@media screen and (min-width:3000px) {

}
@media screen and (min-width:5000px) {

}*/
svg {
    display: none;
}
.wrapper {
    overflow: auto;
}
</style>