<script setup lang='ts'>
import { useCounterStore } from '@/stores/counter';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const store = useCounterStore()
const log = () => {
    if (store.token) {
        router.push('/personal')
    } else {
        router.push('/login')
    }
}
const rou = (a: string) => {
    if (store.token) {
        router.push(a)
    } else {
        router.push('/login')
    }
}
</script>
<template>
    <div class='user'>
        <div class="bg"></div>
        <div class="log" @click="log">
            <img :src="store.user.imageUrl" alt="" v-if="store.token">
            <img src="@/assets/logo.png" alt="" v-else>
            <div v-if="store.token">
                <h4>{{ store.user.nickName }}</h4>
                <p>用户名{{ store.user.username }}</p>
            </div>
            <div style="font-size: 19px;font-weight: 700;" v-else>请登录</div>
            <van-icon name="arrow" />
        </div>
        <van-cell-group>
            <van-cell title="我的订单" is-link @click="rou('/order')">
                <template #icon>
                    <svg-icon name="download" />
                </template>
            </van-cell>
            <van-cell title="我的余额" is-link @click="rou('/balance')">
                <template #icon>
                    <svg-icon name="lock" />
                </template>
            </van-cell>
            <van-cell title="我的学习" is-link @click="rou('/study')">
                <template #icon>
                    <svg-icon name="xx" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="设置" is-link @click="rou('/setting')">
                <template #icon>
                    <svg-icon name="setting" />
                </template>
            </van-cell>
            <van-cell title="意见反馈" is-link @click="rou('/feedback')">
                <template #icon>
                    <svg-icon name="yj" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="关于我们" is-link @click="rou('/we')">
                <template #icon>
                    <svg-icon name="gy" />
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>
<style lang='scss' scoped>
.bg {
    width: 100vw;
    height: 48px;
    background-color: #345dc2;
}

.log {
    margin-top: -2px;
    display: flex;
    align-items: center;
    border-radius: 15px 15px 0 0;
    padding: 25px 19px;
    z-index: 999999;

    div {
        flex: 1;

        h4 {
            font-size: 19px;
        }

        p {
            color: #959da5;
            font-size: 16px;
        }
    }

    img {
        width: 75px;
        height: 75px;
        margin-right: 15px;
        border-radius: 50%;
    }
}

:deep(.van-cell-group) {
    padding-top: 10px;

    .van-cell {
        padding: 13px 19px;
        height: 50.8px;

        .van-cell__title {
            font-size: 16px;
        }

        .icon {
            font-size: 24px;
            margin-right: 10px;
        }
    }
}
</style>