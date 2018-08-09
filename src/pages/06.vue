<template>
    <div class="margin-top-page common profile">
        <div class='bd'>
            <div class="content-wrapper fade-in-content">
                <div class="title">投资团队</div>
                <p class='content'>我们也是创业者，我们专注于数字化，对细分跑道、业务模式、创</p>
                <p class='content end'>业团队有独特理解，是“懂”创业伙伴的投资人；</p>
                <p class='content'>我们帮助创业伙伴进行战略重构，人才提升，资源嫁接，创造我们</p>
                <p class='content end'>和创业伙伴之间、创业伙伴相互之间的协同效应。</p>
                <p class='content'>我们专注于规模化以及高增长的细分市场，优化资源配置和多种退</p>
                <p class='content'>出机制，提高投资成功率和回报率。</p>
            </div>
        </div>
        <div class='foot'>
            <div class="avatar-ct">
                <div class="avatar-item">
                    <div class="avatar a01"></div>
                </div>
                <div class="avatar-item">
                    <div class="avatar a01"></div>
                </div>
            </div>
            <div class="avatar-ct">
                <div class="avatar-item">
                    <div class="avatar a02"></div>
                </div>
                <div class="avatar-item">
                    <div class="avatar a06"></div>
                </div>
            </div>
            <div class="avatar-ct">
                <div class="avatar-item">
                    <div class="avatar a03"></div>
                </div>
                <div class="avatar-item">
                    <div class="avatar a03"></div>
                </div>
            </div>
            <div class="avatar-ct">
                <div class="avatar-item">
                    <div class="avatar a05"></div>
                </div>
                <div class="avatar-item">
                    <div class="avatar a08"></div>
                </div>
            </div>
            <div class="avatar-ct">
                <div class="avatar-item">
                    <div class="avatar a04"></div>
                </div>
                <div class="avatar-item">
                    <div class="avatar a04"></div>
                </div>
            </div>
            <div class="avatar-ct">
                <div class="avatar-item">
                    <div class="avatar a07"></div>
                </div>
                <div class="avatar-item">
                    <div class="avatar a09"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.margin-top-page {
    background-image: url('../assets/06-bg.png');
}
.margin-top-page .content-wrapper {
    color: #313e48;
}
.margin-top-page.profile .content.end {
    margin-bottom: 20px;
}
.foot {
    position: absolute;
    top: 100%;
    color: black;
    display: block;
    width: 100%;
    margin: 68px 0px;
}
.foot .avatar-ct {
    display: flex;
    width: 100%;
    justify-content: center;
}
.foot .avatar-ct .avatar-item {
    width: 324px;
    margin: 8px 22px;
}
.foot .avatar-ct .avatar-item .avatar {
    display: inline-block;
    height: 335px;
    width: 324px;
}
.foot .avatar-ct .avatar-item .avatar.a01 {
    background-image: url('../assets/avatars/01.png');
}
.foot .avatar-ct .avatar-item .avatar.a02 {
    background-image: url('../assets/avatars/02.png');
}
.foot .avatar-ct .avatar-item .avatar.a03 {
    background-image: url('../assets/avatars/03.png');
}
.foot .avatar-ct .avatar-item .avatar.a04 {
    background-image: url('../assets/avatars/04.png');
}
.foot .avatar-ct .avatar-item .avatar.a05 {
    background-image: url('../assets/avatars/05.png');
}
.foot .avatar-ct .avatar-item .avatar.a06 {
    background-image: url('../assets/avatars/06.png');
}
.foot .avatar-ct .avatar-item .avatar.a07 {
    background-image: url('../assets/avatars/07.png');
}
.foot .avatar-ct .avatar-item .avatar.a08 {
    background-image: url('../assets/avatars/08.png');
}
.foot .avatar-ct .avatar-item .avatar.a09 {
    background-image: url('../assets/avatars/09.png');
}
</style>
