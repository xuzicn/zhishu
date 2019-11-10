<template>
    <div class="margin-top-page common">
        <div class='bd'>
            <div class="content-wrapper fade-in-content">
                <div class="title">联系我们</div>
                <p class='content site'>
                    <span class="city">北京</span>
                    <span class="address">朝阳区望京启阳路金辉大厦2901</span>
                </p>
                <p class='content site'>
                    <span class="city">深圳</span>
                    <span class="address">南山区侨香路4080号侨城坊一期五号楼802</span>
                </p>
                <p class='content site'>
                    <span class="city">上海</span>
                    <span class="address">长宁区仙霞路99号尚嘉中心18-118</span>
                </p>
                <p class="content site tel">
                    <span class="city"></span>
                    <span class="address">010-64788187</span>
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
    width: 4.2rem;
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
    margin-bottom: .2rem;
}
.margin-top-page.common .content.tel {
    margin-bottom: .4rem;
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
