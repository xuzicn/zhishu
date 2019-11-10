<template>
    <div class="margin-top-page common">
        <v-touch tag='div' class='bd' @swipedown="$router.replace({path:'hangye'})" @swipeup="$router.replace({path:'team'})">
            <div class="content-wrapper fade-in-content">
                <div class="title">投资理念</div>
                <div class='content'>我们深知创业维艰，</div>
                <div class='content'>我们熟谙企业成长的客观规律，</div>
                <div class='content'>我们坚信创新的技术和</div>
                <div class='content'>商业模式带来的巨大价值，</div>
                <div class='content'>我们秉持“主动赋能式投资”；</div>
                <div class='content'>我们洞悉行业市场和细分应用；</div>
                <div class='content'>我们分享战略思考、传授管理技能；</div>
                <div class='content'>我们嫁接行业资源、帮助人才成长；</div>
                <div class='content'>我们和创业伙伴一同发现成长的机遇；</div>
                <div class='content'>并肩应对那些至关重要的选择</div>
            </div>
        </v-touch>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin-top-page.common {
    background-image: url('/assets/mobile/05-bg.png');
    position: relative;
}
.margin-top-page.common .content-wrapper {
    color: #fff;
    position: absolute;
    top: 15%;
    text-align: center;
    width: 100%;
}

.margin-top-page.common .content-wrapper .title {
    padding-bottom: .35rem;
}
.margin-top-page.common .content-wrapper .content {
    padding: .05rem 0;
}
.margin-top-page.common .content-wrapper .title,
.margin-top-page.common .content-wrapper .content {
    line-height: 1em;
    display: inline-block;
    text-align: left;
    width: 2.5rem;
    margin-left: 50%;
    transform: translateX(-50%);
}
/*@media screen and (min-device-aspect-ratio: 9/16) {
    .margin-top-page.common .content-wrapper .content {
        font-size: .14rem;
        padding: .1rem 0;
    }
    .margin-top-page.common .content-wrapper .title {
        font-size: .3rem;
    }
}*/
</style>
