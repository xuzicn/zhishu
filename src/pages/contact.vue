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
                    <span class='t'>提交商业计划书：</span>
                    <a href='mailto:bp@stalacapital.com'>bp@stalacapital.com</a>
                </p>
                <p class='content mail'>
                    <span class='t'>提交简历：</span>
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
    width: 3.1rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.margin-top-page.common .title {
    margin-bottom: .56rem;
    text-align: center;
}
.margin-top-page.common .content {
    margin-bottom: .1rem;
}
.margin-top-page.common .city {
    display: inline-block;
    width: .5rem;
    margin-right: .3rem;
}
.margin-top-page.common .content-wrapper .content {
    display: inline-block;
}
.content.mail.first {
    margin-top: .25rem;
}
.content.mail .t {
    width: 1.35rem;
    display: inline-block;
}
</style>
