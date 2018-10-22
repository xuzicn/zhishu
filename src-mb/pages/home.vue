<template>
    <div class="margin-top-page home">
        <v-touch tag='div'class='bd' @swipeup="$router.replace({path:'hangye'})">
            <div class="content-wrapper fade-in-content">
                <div class="title">聚焦实业</div>
                <div class="title last">智数在握</div>
                <div class='content'>我们陪伴创业，</div>
                <div class='content'>我们培育创新，</div>
                <div class='content'>我们投资于产业“智能化”升级和</div>
                <div class='content'>“数字化”变革的成长型企业</div>
                <div class="detail" @click="$router.push('/hangye')">
                    <div class="btn down-arrow"></div>
                    <p>点击了解我们的投资领域</p>
                </div>
            </div>
        </v-touch>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         activeRow: this.random(3),
    //         activeColumn: this.random(3)
    //     };
    // },
    // mounted() {
    //     setInterval(() => {
    //         this.activeRow = this.random(3);
    //         this.activeColumn = this.random(3);
    //     }, 3000);
    // },
    // methods: {
    //     random(max) {
    //         let d = Math.random().toString();
    //         d = parseInt(d.substr(d.length - 1));
    //         return d % max + 1;
    //     }
    // }
}
</script>

<style scoped>
.home.margin-top-page {
    position: relative;
    background-image: url('/assets/mobile/home.png');
    color: #313e48;
    background-repeat: no-repeat;
    background-size: cover;
}
.home .content-wrapper {
    top: 50%;
    position: absolute;
    width: 100%;
    transform: translateY(-50%);
}
.home .content-wrapper .title {
    font-size: .40rem;
    font-weight: bold;
    margin-bottom: .1rem;
    text-align: center;
    line-height: 1em;
}
.home .content-wrapper .title.last {
    margin-bottom: .2rem;
}

.home .content-wrapper .content {
    font-size: .12rem;
    text-align: center;
    line-height: 1em;
    margin-bottom: .1rem;
}
.home .detail {
    cursor: pointer;
    line-height: .35rem;
    margin-top: .71rem;
}
.home .detail .btn {
    height: .14rem;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: .26rem;
}
.home .detail p {
    font-size: .11rem;
    font-weight: bold;
    margin: .1rem;
    line-height: 1em;
    text-align: center;
}
</style>
