<template>
    <div class="margin-top-page home">
        <v-touch tag='div' class='bd' @swipeup="$router.replace({path:'hangye'})">
            <div class="content-wrapper fade-in-content">
                <div class="title">聚焦实业</div>
                <div class="title last">智数在握</div>
                <div class='content'>我们陪伴创业，我们培育创新，我们投资于产业的<br>“智能化”升级和“数字化”<br>变革的成长型企业</div>
                <div class="detail" @click="$router.push('/hangye')">
                点击了解我们的投资领域
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
    left: 50%;
    position: absolute;
    width: 70%;
    min-width: 2.3rem;
    background: #fff;
    padding: .4rem 0 .3rem;
    transform: translate(-50%, -50%);
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
    width: 1.52rem;
    font-size: .13rem;
    line-height: 2em;
    margin-bottom: .1rem;
    transform: translateX(-50%);
    margin-left: 50%;
    font-weight: bold;
}
.home .detail {
    cursor: pointer;
    line-height: .225rem;
    height: .225rem;
    background: #f0805c;
    color: #fff;
    margin-top: .15rem;
    text-align: center;
    font-size: .11rem;
    display: inline-block;
    transform: translateX(-50%);
    margin-left: 50%;
    padding: 0 .12rem;
}
</style>
