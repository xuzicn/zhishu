<template>
    <div class="margin-top-page">
        <v-touch tag="div" :class="['wrapper', 'page' + page, 'big']" @swipeup="onSwipeup" @swipedown="onSwipedown">
            <div class="hangye-bd hangye01">
                <div class="content-wrapper fade-in-content">
                    <div class="title">先进制造</div>
                    <div class='content'>全球3C和汽车产能向中国转移，</div>
                    <div class='content'>催生一批细分行业独角兽。</div>
                    <div class='content'>生产智能化技术、管理数字化手段推动</div>
                    <div class='content'>中国制造向“高精”、“高速”、“高效”</div>
                    <div class='content'>转型升级</div>
                </div>
            </div>
            <div class="hangye-bd hangye02">
                <div class="content-wrapper fade-in-content">
                    <div class="title">楼宇科技</div>
                    <div class='content'>中国是全球最大的新建建筑市场和存量</div>
                    <div class='content'>市场，数字化技术推动建筑设计手段、</div>
                    <div class='content'>施工管理、安防技术、物业运营发生重</div>
                    <div class='content'>大变化，让建筑和管理“更聪明”是不</div>
                    <div class='content'>可阻挡的趋势</div>
                </div>
            </div>
            <div class="hangye-bd hangye03">
                <div class="content-wrapper fade-in-content">
                    <div class="title">智能能源</div>
                    <div class='content'>随着电力负荷的高速增长，能源产供用</div>
                    <div class='content'>体系将发生重大变化。电力输配和管理</div>
                    <div class='content'>将更柔性、更智能。储能、电力电子、</div>
                    <div class='content'>微网以及电力可靠性管理将带来巨大技</div>
                    <div class='content'>术升级和管理变革</div>
                </div>
            </div>
        </v-touch>
        <svg class="progress big" width="58" height="58" viewbox="0 0 58 58">
            <circle cx="29" cy="29" r="26" stroke-width="3" stroke="rgba(255,255,255,0.06)" fill="none"></circle>
            <circle cx="29" cy="29" r="26" stroke-width="3" stroke="#fff" fill="none" transform="matrix(0,-1,1,0,0,58)" :stroke-dasharray="circleProgress"></circle>
            <circle cx="29" cy="29" r="22" stroke="none" fill="rgba(255,255,255,.06)" transform="matrix(0,-1,1,0,0,58)" :stroke-dasharray="circleProgress"></circle>
            <text x="50%" y="57%" text-anchor="middle" fill="rgba(255,255,255,0.28)">{{'0' + page}}</text>
        </svg>
    </div>
</template>

<script>
const countdown = 10;
export default {
    data() {
        return {
            page: 1,
            countdown: countdown,
            circleProgress: '169 169',
            // circleProgressSmall: '94 94'
        };
    },
    mounted() {
        this.moveNextPage();
    },
    methods: {
        onSwipedown() {
            if (this.page > 0) {
                this.page--;
                this.moveNextPage();
                this.countdown = countdown;
            } else {
                this.$router.push({
                    path: 'home'
                });
            }
        },
        onSwipeup() {
            if (this.page < 3) {
                this.page++;
                this.moveNextPage();
                this.countdown = countdown;
            } else {
                this.$router.push({
                    path: 'linian'
                });
            }
        },
        moveNextPage() {
            const me = this;
            const pageV = this.page;

            me.circleProgress = '169 169';

            new Promise(function (resolve, reject) {
                const cirf = setInterval(function () {
                    if (pageV !== me.page) {
                        clearInterval(cirf);
                        return;
                    } else {
                        const c = me.countdown,
                            cd = countdown;

                        me.circleProgress = (169 / cd * c) + ' 169';
                        if (me.countdown === 0) {
                            clearInterval(cirf);
                        }
                    }
                }, 1000);
                const f = setInterval(function () {
                    if (pageV !== me.page) {
                        clearInterval(f);
                        reject();
                    } else {
                        if (me.countdown === 0) {
                            setTimeout(resolve, 500);
                            clearInterval(f);
                        } else {
                            me.countdown--;
                        }
                    }
                }, 1000);
            }).then(function () {
                if (me.page === 3) {
                    me.page = 1;
                } else {
                    me.page++;
                }
                me.moveNextPage();
                me.countdown = countdown;
                me.circleProgress = '169 169'
            });
        }
    }
};
</script>

<style scoped> 
.progress.big {
    font-size: .16rem;
    position: absolute;
    left: 50%;
    bottom: .25rem;
    transform: translateX(-50%) scale(.8);
    transform-origin: bottom center;
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
/*.wrapper.small {
    display: none;
}*/
.wrapper.page1 {
    transform: translateY(0%);
}
.wrapper.page2 {
    transform: translateY(-100%);
}
.wrapper.page3 {
    transform: translateY(-200%);
}
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
    display: inline-block;
    width: 2.5rem;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
}
.hangye01 .content-wrapper .content,
.hangye02 .content-wrapper .content,
.hangye03 .content-wrapper .content {
    line-height: 1em;
    margin-bottom: .1rem;
}
.hangye01 .content-wrapper .title,
.hangye02 .content-wrapper .title,
.hangye03 .content-wrapper .title {
    line-height: 1em;
    margin-bottom: .25rem;
}
.hangye01 {
    background-image: url('/assets/mobile/hangye01.png');
}
.hangye02 {
    background-image: url('/assets/mobile/hangye02.png');
    transform: translateY(100%);
}
.hangye03 {
    background-image: url('/assets/mobile/hangye03.png');
    transform: translateY(200%);
}
</style>
