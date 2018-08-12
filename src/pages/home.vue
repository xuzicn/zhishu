<template>
    <div class="margin-top-page home">
        <div class='bd'>
            <div class="content-wrapper fade-in-content">
                <div class="title">聚焦实业 智数在握</div>
                <p class='content'>我们陪伴创业，</p>
                <p class='content'>我们培育创新，</p>
                <p class='content'>我们投资于产业“智能化”升级</p>
                <p class='content'>和“数字化”变革的成长型企业。</p>
                <div class="detail" @click="$router.replace('/hangye')">
                    <div class="btn icon iconfont icon-xia"></div>
                    <p>点击了解我们的投资领域</p>
                </div>
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
.home.margin-top-page {
    background-image: url('../assets/home.png');
    position: relative;
    min-height: 6rem;
}
.home .content-wrapper {
    width: 3.30rem;
    right: 1.11rem;
    bottom: 1.50rem;
}
.home .content-wrapper .title {
    font-size: .39rem;
    color: #ee8061;
    font-size: .39rem;
    font-weight: bold;
    margin-bottom: .16rem;
}

.home .content {
    font-size: .23rem;
    color: #313e48;
    display: inline-block;
    width: 100%;
    margin: .05rem 0rem;
}
.home .detail {
    color: #313e48;
    cursor: pointer;
}
.home .detail .icon {
    transition: all .1s ease;
}
.home .detail:hover .icon {
    color: #ee8061;
    border-color: #ee8061;
}
</style>
