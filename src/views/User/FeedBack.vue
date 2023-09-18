<script setup lang='ts'>
import { ref } from 'vue';

const checked = ref()
</script>
<template>
    <div class='feedback'>
        <nav-bar title="意见反馈" />
        <van-radio-group v-model="checked" direction="horizontal">
            <van-radio name="1">内容意见</van-radio>
            <van-radio name="2">产品建议</van-radio>
            <van-radio name="3">其他</van-radio>
        </van-radio-group>
        <textarea name="" id="" cols="30" rows="10" placeholder="请填写具体内容帮助我们了解您的意见和建议"></textarea>
        <input type="text" placeholder="填写您的QQ">
        <input type="text" placeholder="填写您的微信">
        <van-button type="primary" block>提交</van-button>
    </div>
</template>
<style lang='scss' scoped>
.feedback {
    height: 100vh;
    padding: 15px;
    padding-top: 50px;
    background-color: #f8f9fb;

    .van-radio-group {
        justify-content: center;
        margin: 15px 0;

        .van-radio {
            margin-right: 15px;
        }
    }

    textarea {
        width: 345px;
        height: 150px;
        border: 1px solid #e9e9e9;
        line-height: 30px;
    }

    input {
        width: 100%;
        border: 1px solid #e9e9e9;
        margin-top: 15px;
        padding: 5px;
        height: 35px;
    }

    .van-button {
        width: 100%;
        margin-top: 25px;
        background-color: #007aff !important;
        font-size: large;
    }
}
</style>