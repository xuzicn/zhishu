<template>
    <div class="margin-top-page common">
        <div class='bd'>
            <div class="content-wrapper fade-in-content">
                <div class="title">联系我们</div>
                <p class='content site'>
                    <span class="city">北京市</span>
                    <span class="address">朝阳区望京方恒时代B座1203</span>
                </p>
                <p class="content site tel">
                    <span class="city"></span>
                    <span class="address">电话：</span>
                </p>
                <p class='content site'>
                    <span class="city">深圳市</span>
                    <span class="address">南山区中国储能大厦42CD室</span>
                </p>
                <p class="content site tel">
                    <span class="city"></span>
                    <span class="address">电话：</span>
                </p>
                <p class='content site'>
                    <span class="city">上海市</span>
                    <span class="address">浦东新区东泰路200弄8号</span>
                </p>
                <p class="content site tel">
                    <span class="city"></span>
                    <span class="address">电话：</span>
                </p>
                <p class='content mail first'>
                    <span class='city'>提交BP：</span>
                    <a href='mailto:bp@stalacapital.com'>bp@stalacapital.com</a>
                </p>
                <p class='content mail'>
                    <span class='city'>提交简历：</span>
                    <a href='mailto:hr@stalacapital.com'>hr@stalacapital.com</a>
                </p>
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
    background: #f4f4f4;
    position: relative;
    min-height: 6rem;
}
.margin-top-page.common .content-wrapper {
    position: absolute;
    color: #313e48;
    width: 3.3rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.margin-top-page.common .title {
    margin-bottom: .56rem;
    text-align: center;
}
.margin-top-page.common .content {
    margin-bottom: .09rem;
    line-height: 1em;
}
.margin-top-page.common .content.tel {
    margin-bottom: .21rem;
}
.margin-top-page.common .city {
    display: inline-block;
    width: .9rem;
    margin-right: 0rem;
}
.margin-top-page.common .content-wrapper .content {
    display: inline-block;
}
.content.mail.first {
    margin-top: .08rem;
    margin-bottom: .24rem;
}
.content.mail .t {
    width: 1.45rem;
    display: inline-block;
}
</style>
