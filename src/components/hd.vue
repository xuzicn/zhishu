<template>
    <div class="hd">
        <div class="menu-wrapper">
            <div class="btn"></div>
        </div>
        <!-- <img src="../assets/logo.png"> -->
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.hd {
    background-image: url('../assets/logo.png');
    height: 100px;
    background-repeat: no-repeat;
    background-position: 111px 21px;
    position: relative;
}
.menu-wrapper {
    position: absolute;
    top: 21px;
    right: 111px;
}
.menu-wrapper .btn {
    display: inline-block;
    width: 33px;
    height: 33px;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 2px;
    position: relative;
}
.menu-wrapper .btn:hover {
    background-color: #c9c9c0;
}
.menu-wrapper .btn:before {
    transition: all 0.2s ease;
    content: ' ';
    width: 5px;
    height: 5px;
    background-color: #313e48;
    border-radius: 50%;
    display: inline-block;
    top: 14px;
    position: absolute;
    left: 3px;
    box-shadow: 11px 0 0 0 #313e48, 22px 0 0 0 #313e48;
}
.menu-wrapper .btn:hover:before {
    background-color: #fff;
    box-shadow: 11px 0 0 0 #fff, 22px 0 0 0 #fff;
}
</style>