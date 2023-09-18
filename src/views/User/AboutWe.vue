<script setup lang='ts'></script>
<template>
    <div class='we'>
        <nav-bar title="关于梦学谷" />
        <div class="title">
            <img src="@/assets/logo-black.png" alt="">
            <p>Version 1.0.0</p>
        </div>
        <div class="content">
            <p>梦学谷是专注于在线教育平台，聚合了优秀教师的海量精品课程。在这里，您可以在线观看视频教程；您可以随时随地向名师请教；您可以与大量志同道合的同学进行交流。</p>
            <p>打破地域的限制，让每个立志学习，有梦想的人，都能接受优秀教师的指导和教学；同时希望给优秀的教师一个展示的平台。</p>
            <p>梦学谷——陪你学习，伴你梦想！</p>
        </div>
        <div class="a">Copyright © 2022 mengxuegu.com All rights reserved</div>
    </div>
</template>
<style lang='scss' scoped>
.we {
    padding-top: 44px;
    /* text-align: center; */
    background-color: #f8f9fb;
    height: 100vh;

    .title {
        text-align: center;

        img {
            width: 140px;
            margin-top: 30px;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            color: #345dc2;
            font-weight: 500;
        }
    }

    .content {
        font-size: 15px;
        color: #333;
        margin-top: 25px;
        padding: 0 15px;

        p {
            text-indent: 2em;
            margin-bottom: 10px;
        }
    }

    .a {
        width: 100%;
        position: fixed;
        bottom: 10px;
        text-align: center;
        font-style: 10px;
        color: #959da5;
    }
}
</style>