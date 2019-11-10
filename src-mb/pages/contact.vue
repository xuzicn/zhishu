<template>
    <div class="margin-top-page common">
        <v-touch tag='div' class='bd' @swipedown="$router.replace({path:'team'})">
            <div class="content-wrapper fade-in-content">
                <div class="title">联系我们</div>
                <div class='content'>北京市朝阳区望京方恒时代B座1203</div>
                <div class='content'>深圳市南山区侨香路4080号侨城坊一期五号楼802</div>
                <div class='content'>上海市长宁区仙霞路99号尚嘉中心18-118</div>
                <div class="content">电话 010-64788187</div>
                <div class='content'>提交BP<a href='mailto:bp@stalacapital.com'>bp@stalacapital.com</a></div>
                <div class='content'>提交简历 <a href='mailto:hr@stalacapital.com'>hr@stalacapital.com</a></div>
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
    background: #f4f4f4;
    position: relative;
}
.margin-top-page.common .content-wrapper {
    position: absolute;
    color: #313e48;
    width: 100%;
    top: 20%;
}
.margin-top-page.common .title {
    margin-bottom: .26rem;
    text-align: center;
    line-height: 1em;
    font-weight: bold;
}
.margin-top-page.common .content {
    margin-bottom: .18rem;
    text-align: center;
    line-height: 1em;
}
</style>
