<template>
    <div class="margin-top-page common">
        <div class='bd'>
            <div class="content-wrapper fade-in-content big">
                <div class="hangye-bd hangye01">
                    <div class="title">先进制造</div>
                    <p class='content'>全球3C和汽车产能向中国转移，催生一批细分行业</p>
                    <p class='content'>独角兽。生产智能化技术、管理数字化手段推动中</p>
                    <p class='content'>国制造向“高精”、“高速”、“高效”转型升级</p>
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
.margin-top-page.common {
    background-image: url('/assets/01-hangye.png');
    position: relative;
    min-height: 6rem;
}
.hangye-bd {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}
.hangye01 .content-wrapper,
.hangye02 .content-wrapper,
.hangye03 .content-wrapper {
    color: #fff;
    margin: 1.05rem 0 0 1.61rem;
}
.hangye01 .content-wrapper .content,
.hangye02 .content-wrapper .content,
.hangye03 .content-wrapper .content {
    font-size: .16rem;
}
.hangye01 {
    background-image: url('/assets/01-hangye.png');
}
.hangye02 {
    background-image: url('/assets/02-hangye.png');
    transform: translateY(100%);
}
.hangye03 {
    background-image: url('/assets/03-hangye.png');
    transform: translateY(200%);
}
@media screen and (max-width:1024px) {
    .hangye01 .content-wrapper,
    .hangye02 .content-wrapper,
    .hangye03 .content-wrapper {
        margin: .6rem 0 0 .8rem;
    }
    .hangye01 .content-wrapper .content,
    .hangye02 .content-wrapper .content,
    .hangye03 .content-wrapper .content {
        font-size: .12rem;
    }
    .hangye01 .content-wrapper .title,
    .hangye02 .content-wrapper .title,
    .hangye03 .content-wrapper .title {
        font-size: .28rem;
    }
}
@media screen and (max-width:800px) {
    .wrapper.big,
    .progress.big {
        display: none;
    }
    .wrapper.small {
        display: block;
    }
    .hangye01 .content-wrapper,
    .hangye02 .content-wrapper,
    .hangye03 .content-wrapper {
        margin: .8rem 0 .3rem;
        width: 100%;
    }
    .hangye01 .content-wrapper .content,
    .hangye02 .content-wrapper .content,
    .hangye03 .content-wrapper .content {
        font-size: .08rem;
        margin: .02rem;
        text-align: center;
    }
    .hangye01 .content-wrapper .title,
    .hangye02 .content-wrapper .title,
    .hangye03 .content-wrapper .title {
        font-size: .2rem;
        margin-bottom: .08rem;
        text-align: center;
    }
    .wrapper.small .content-wrapper,
    .wrapper.small .progress {
        position: static;
    }
    
    .wrapper.small .progress {
        font-size: .1rem;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}
</style>
