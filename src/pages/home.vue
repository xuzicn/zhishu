<template>
    <div class="margin-top-page home">
        <div class='bd'>
            <div class='content-bg'>
                <div class="row" v-for="row in 3" :key="row">
                    <div :class='"item item-" + row + "-" + column + ((activeRow===row&&activeColumn===column)?" active":"")' v-for="column in 3" :key="column"></div>
                </div>
            </div>
            <div class="content-wrapper fade-in-content">
                <div class="title">聚焦实业 智数在握</div>
                <p class='content'>我们陪伴创业，我们培育创新，我们投资于产业“智能化”升级和“数字化”变革的成长型企业</p>
                <div class="detail" @click="$router.replace('/hangye')">
                    <div class="btn down-arrow"></div>
                    <p>点击了解我们的投资领域</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeRow: this.random(3),
            activeColumn: this.random(3)
        };
    },
    mounted() {
        setInterval(() => {
            this.activeRow = this.random(3);
            this.activeColumn = this.random(3);
        }, 3000);
    },
    methods: {
        random(max) {
            let d = Math.random().toString();
            d = parseInt(d.substr(d.length - 1));
            return d % max + 1;
        }
    }
}
</script>

<style scoped>
.home.margin-top-page {
    position: relative;
    min-height: 6rem;
}
.home.margin-top-page .content-bg {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
}
.home.margin-top-page .content-bg .row {
    flex: 1;
    display: flex;
    flex-direction: row;
}
.home.margin-top-page .content-bg .row .item {
    flex: 1;
}
.home.margin-top-page .content-bg .row .item::before {
    content: ' ';
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
.home.margin-top-page .content-bg .row .item::after {
    content: ' ';
    display: block;
    height: 100%;
    transition: all ease .3s;
    transform: translateY(-100%);
    opacity: .3;
}
.home.margin-top-page .content-bg .row .item-1-1::before {
    background-image: url('/assets/home/1.png');
}
.home.margin-top-page .content-bg .row .item-1-2::before {
    background-image: url('/assets/home/2.png');
}
.home.margin-top-page .content-bg .row .item-1-3::before {
    background-image: url('/assets/home/3.png');
}
.home.margin-top-page .content-bg .row .item-2-1::before {
    background-image: url('/assets/home/4.png');
}
.home.margin-top-page .content-bg .row .item-2-2::before {
    background-image: url('/assets/home/5.png');
}
.home.margin-top-page .content-bg .row .item-2-3::before {
    background-image: url('/assets/home/6.png');
}
.home.margin-top-page .content-bg .row .item-3-1::before {
    background-image: url('/assets/home/7.png');
}
.home.margin-top-page .content-bg .row .item-3-2::before {
    background-image: url('/assets/home/8.png');
}
.home.margin-top-page .content-bg .row .item-3-3::before {
    background-image: url('/assets/home/9.png');
}
.home.margin-top-page .content-bg .row .item-1-2.active::after,
.home.margin-top-page .content-bg .row .item-2-1.active::after,
.home.margin-top-page .content-bg .row .item-3-3.active::after {
    background-color: #5781c3;
}
.home.margin-top-page .content-bg .row .item-1-3.active::after,
.home.margin-top-page .content-bg .row .item-2-2.active::after,
.home.margin-top-page .content-bg .row .item-3-2.active::after {
    background-color: #00bdae;
}
.home.margin-top-page .content-bg .row .item-1-1.active::after,
.home.margin-top-page .content-bg .row .item-2-3.active::after,
.home.margin-top-page .content-bg .row .item-3-1.active::after {
    background-color: #ff8648;
}
.home .content-wrapper {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.home .content-wrapper .title {
    font-size: .71rem;
    color: #313e48;
    font-weight: bold;
    margin-bottom: .05rem;
    width: 6.2rem;
    display: block;
}

.home .content {
    font-size: .21rem;
    color: #313e48;
    display: inline-block;
    margin: .05rem 0rem;
    font-weight: bold;
    width: 6.2rem;
}
.home .detail {
    color: #313e48;
    cursor: pointer;
    line-height: .35rem;
    margin-top: .58rem;
}
.home .detail .btn {
    height: .22rem;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.home .detail p {
    font-size: .16rem;
    font-weight: bold;
    margin: 0 .10rem;
}
@media screen and (max-width:1024px) {
    .home.margin-top-page {
        position: relative;
        min-height: 4rem;
    }
    .home .content-wrapper {
        transform: translate(-50%, -50%) scale(0.8);
    }
}
@media screen and (max-width:800px) {
    .home.margin-top-page {
        position: relative;
        min-height: auto;
    }
    .home .content-wrapper {
        transform: translate(-50%, -50%) scale(0.4);
    }
}
@media screen and (min-width:1920px) {
    .home .content-wrapper {
        transform: translate(-50%, -50%) scale(1.4);
    }
}
@media screen and (min-width:3000px) {
    .home .content-wrapper {
        transform: translate(-50%, -50%) scale(1.8);
    }
}
@media screen and (min-width:5000px) {
    .home .content-wrapper {
        transform: translate(-50%, -50%) scale(3);
    }
}
</style>
