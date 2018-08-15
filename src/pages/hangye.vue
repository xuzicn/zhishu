<template>
    <div class="margin-top-page">
        <div :class="['wrapper', 'page' + page]">
            <div class="hangye-bd hangye01">
                <div class="content-wrapper fade-in-content">
                    <div class="title">先进制造</div>
                    <p class='content'>全球3C和汽车产能向中国转移，催生一批细分行业</p>
                    <p class='content'>独角兽。生产智能化技术、管理数字化手段推动中</p>
                    <p class='content'>国制造向“高精”、“高速”、“高效”转型升级</p>
                    <svg v-if="page===1" :class='noCircleAni?"no-ani progress":"progress"' width="440" height="440" viewbox="0 0 440 440">
                        <circle cx="220" cy="220" r="170" stroke-width="15" stroke="rgba(255,255,255,0.06)" fill="none"></circle>
                        <circle cx="220" cy="220" r="170" stroke-width="15" stroke="#fff" fill="none" transform="matrix(0,-1,1,0,0,440)" :stroke-dasharray="circleProgress"></circle>
                        <circle cx="220" cy="220" r="148" stroke="none" fill="rgba(255,255,255,.06)" transform="matrix(0,-1,1,0,0,440)" :stroke-dasharray="circleProgress"></circle>
                        <text x="50%" y="57%" text-anchor="middle" fill="rgba(255,255,255,0.28)">{{'0' + page}}</text>
                    </svg>
                </div>
            </div>
            <div class="hangye-bd hangye02">
                <div class="content-wrapper fade-in-content">
                    <div class="title">楼宇科技</div>
                    <p class='content'>中国是全球最大的新建建筑市场和存量市场，数字</p>
                    <p class='content'>化技术推动建筑设计手段、施工管理、安防技术、</p>
                    <p class='content'>物业运营发生重大变化，让建筑和管理“更聪明”</p>
                    <p class='content'>是不可阻挡的趋势</p>
                    <svg v-if="page===2" :class='noCircleAni?"no-ani progress":"progress"' width="440" height="440" viewbox="0 0 440 440">
                        <circle cx="220" cy="220" r="170" stroke-width="20" stroke="rgba(255,255,255,0.06)" fill="none"></circle>
                        <circle cx="220" cy="220" r="170" stroke-width="20" stroke="#fff" fill="none" transform="matrix(0,-1,1,0,0,440)" :stroke-dasharray="circleProgress"></circle>
                        <circle cx="220" cy="220" r="148" stroke="none" fill="rgba(255,255,255,.06)" transform="matrix(0,-1,1,0,0,440)" :stroke-dasharray="circleProgress"></circle>
                        <text x="50%" y="57%" text-anchor="middle" fill="rgba(255,255,255,0.28)">{{'0' + page}}</text>
                    </svg>
                </div>
            </div>
            <div class="hangye-bd hangye03">
                <div class="content-wrapper fade-in-content">
                    <div class="title">智能能源</div>
                    <p class='content'>随着电力负荷的高速增长，能源产供用体系将发生</p>
                    <p class='content'>重大变化。电力输配和管理将更柔性、更智能。储</p>
                    <p class='content'>能、电力电子、微网以及电力可靠性管理将带来巨</p>
                    <p class='content'>大技术升级和管理变革</p>
                    <svg v-if="page===3" :class='noCircleAni?"no-ani progress":"progress"' width="440" height="440" viewbox="0 0 440 440">
                        <circle cx="220" cy="220" r="170" stroke-width="20" stroke="rgba(255,255,255,0.06)" fill="none"></circle>
                        <circle cx="220" cy="220" r="170" stroke-width="20" stroke="#fff" fill="none" transform="matrix(0,-1,1,0,0,440)" :stroke-dasharray="circleProgress"></circle>
                        <circle cx="220" cy="220" r="148" stroke="none" fill="rgba(255,255,255,.06)" transform="matrix(0,-1,1,0,0,440)" :stroke-dasharray="circleProgress"></circle>
                        <text x="50%" y="57%" text-anchor="middle" fill="rgba(255,255,255,0.28)">{{page}}</text>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const countdown = 10;
export default {
    data() {
        return {
            page: 1,
            ani: undefined,
            countdown: countdown,
            circleProgress: '1069 1069',
            noCircleAni: false
        };
    },
    mounted() {
        this.moveNextPage();
    },
    methods: {
        moveNextPage() {
            const me = this;

            me.circleProgress = '1069 1069';
            // me.ani = now;
            new Promise(function (resolve) {
                // me.circleProgress = '0 1069';
                const cirf = setInterval(function () {
                    const c = me.countdown,
                        cd = countdown;
                    me.circleProgress = (1069 / cd * c) + ' 1069';
                    if (me.countdown === 0) {
                        clearInterval(cirf);
                    }
                });
                const f = setInterval(function () {
                    if (me.countdown === 0) {
                        resolve();
                        clearInterval(f);
                    } else {
                        me.countdown--;
                    }
                }, 1000);
            }).then(function () {
                // me.noCircleAni = true;
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve();
                        // me.noCircleAni = false;
                    }, 500);
                });
            }).then(function () {
                if (me.page === 3) {
                    me.page = 1;
                } else {
                    me.page++;
                }
                me.moveNextPage();
                me.countdown = countdown;
                me.circleProgress = '1069 1069';
            });
        }
    }
};
</script>

<style scoped> 
.progress {
    transform: scale(0.12926) translate(-10%, 60%);
    transform-origin: top left;
    font-size: .98rem;
}
.progress circle {
    transition: stroke-dasharray 1s;
}
.progress.no-ani circle {
    transition: none;
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
    margin: 1.05rem 0 0 1.61rem;
}
.hangye01 .content-wrapper .content,
.hangye02 .content-wrapper .content,
.hangye03 .content-wrapper .content {
    font-size: .15rem;
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
</style>