<template>
    <div class="margin-top-page common">
        <div class='bd'>
            <div class="content-wrapper fade-in-content">
                <div class="title">投资理念</div>
                <p class='content'>我们深知创业维艰</p>
                <p class='content'>我们熟谙企业成长的客观规律</p>
                <p class='content'>我们坚信创新的技术和商业模式带来的巨大价值</p>
                <p class='content'>我们秉持“主动赋能式投资”</p>
                <p class='content'>我们洞悉行业市场和细分应用</p>
                <p class='content'>我们分享战略思考、传授管理技能</p>
                <p class='content'>我们嫁接行业资源、帮助人才成长</p>
                <p class='content'>我们和创业伙伴一同发现成长的机遇，并肩应对那些至关重要的选择</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin-top-page.common {
    background-image: url('/assets/05-bg.png');
    position: relative;
    min-height: 6rem;
}
.margin-top-page.common .content-wrapper {
    color: #313e48;
    right: 1.11rem;
    bottom: 1.50rem;
}
@media screen and (max-width:1024px) {
    .common.margin-top-page {
        min-height: 4rem;
    }
    .common.margin-top-page .content-wrapper {
        left: 1rem;
        top: 0.4rem;
    }
    .common.margin-top-page .content-wrapper .content {
        font-size: .1rem;
        margin: .03rem 0;
    }
    .common.margin-top-page .content-wrapper .title {
        font-size: .24rem;
        margin-bottom: .1rem;
    }
}
@media screen and (max-width:800px) {
    .common.margin-top-page {
        min-height: 3rem;
        background-image: url('/assets/05-bg-small.png');
    }
    .common.margin-top-page .content-wrapper {
        width: 100%;
        position: absolute;
        left: 0%;
        top: 50%;
        margin: 0rem;
        padding: 0rem;
        transform: translateY(-.8rem);
    }
    .common.margin-top-page .content-wrapper .content {
        font-size: .08rem;
        margin: .02rem;
        text-align: center;
    }
    .common.margin-top-page .content-wrapper .title {
        font-size: .2rem;
        margin-bottom: .08rem;
        text-align: center;
    }
}
@media screen and (min-width:1920px) {
    
}
@media screen and (min-width:3000px) {

}
@media screen and (min-width:5000px) {

}
</style>
