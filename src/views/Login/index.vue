<script setup lang='ts'>
import { ref } from 'vue';
import img1 from '@/assets/agree.png'
import img2 from '@/assets/noagree.png'
import { login } from '@/services';
import { useCounterStore } from '@/stores/counter'
import { showToast } from 'vant';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const store = useCounterStore()
const phone = ref()
const code = ref()
const ban = ref(false)
const log = async () => {
    if (ban.value) {
        const res = await login({ mobile: phone.value, code: code.value })
        console.log(res);
        store.user = res.data.userInfo
        store.token = res.data.access_token
        router.push('/user')
    } else {
        showToast('请阅读并同意用户服务及隐私协议')
    }
}
</script>
<template>
    <div class='login'>
        <van-icon name="cross" class="cross" @click="$router.back()" />
        <div class="box">
            <p class="bg">LOGIN</p>
            <p class="wel">欢迎回来!</p>
            <van-cell-group inset>
                <van-field v-model="phone" label="手机号码" placeholder="请输入手机号码" label-align="top" />
                <van-field v-model="code" label="验证码" placeholder="请输入验证码" label-align="top">
                    <template #button>
                        <van-button size="small" type="primary">获取验证码</van-button>
                    </template>
                </van-field>
                <van-button type="primary" block style="font-size: 18px;" @click="log">登录</van-button>
            </van-cell-group>
        </div>
        <div class="footer">
            <img :src="ban ? img1 : img2" alt="" @click="ban = !ban">
            <p>请认真阅读并同意<span>《用户服务协议》《用户服务协议》</span></p>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.cross {
    position: absolute;
    left: 10px;
    top: calc(0px + 10px);
    z-index: 90;
    padding: 10px;
    font-size: 19px;
    color: #606266;
}

.box {
    padding-top: 100px;

    .bg {
        height: 79px;
        font-size: 60px;
        color: #f8f8f8;
    }

    .wel {
        margin-top: -45px;
        padding-left: 30px;
        font-size: 23px;
        color: #555;
    }

    .van-cell-group {
        padding: 0 10px;
        padding-top: 40px;

        .van-field {
            height: 60px;
            background-color: #f8f6fc;
            margin-bottom: 25px;
            padding: 0;
            padding-left: 15px;
            padding-top: 5px;

            .van-cell__title {
                font-size: 13px;
            }

            :deep(.van-field__label--top) {
                margin-bottom: 0;
            }
        }

        .van-button {
            background-color: #345dc2;
        }
    }
}

.footer {
    height: 45px;
    display: flex;
    font-size: 12px;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 31.5px;

    p {
        color: #999;

        span {
            color: #40a2ff;
        }
    }

    img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
}
</style>