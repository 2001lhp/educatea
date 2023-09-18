<script setup lang='ts'>
import { logout } from '@/services';
import { useCounterStore } from '@/stores/counter'
import { showConfirmDialog } from 'vant';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const store = useCounterStore()
const out = () => {
    showConfirmDialog({
        title: '确定退出登录?',
        message: '退出后不会删除任何历史数据',
    }).then(() => {
        // on confirm
        logout({ accessToken: store.token })
        store.token = ''
        router.back()
    }).catch(() => {
        // on cancel
    });
}
</script>
<template>
    <div class='personal' style="background-color: #f8f9fb;height: 100vh;">
        <nav-bar title="个人资料" />
        <van-cell-group>
            <van-cell title="头像" value="内容" is-link>
                <template #value>
                    <img :src="store.user.imageUrl" alt="">
                </template>
            </van-cell>
            <van-cell title="用户名" :value="store.user.username" is-link />
            <van-cell title="手机号" :value="store.user.mobile" is-link />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="昵称" :value="store.user.nickName" is-link />
            <van-cell title="性别" :value="store.user.sex == 1 ? '女' : '男'" is-link />
        </van-cell-group>
        <div class="btn" @click="out">退出登录</div>
    </div>
</template>
<style lang='scss' scoped>
.van-cell-group {
    margin-top: 10px;

    .van-cell {
        align-items: center;
        font-size: 16px;
        min-height: 50px;

        :deep(.van-cell__value) {
            font-size: 17px;
        }
    }
}

img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.btn {
    margin-top: 20px;
    line-height: 46px;
    background-color: #fff;
    font-size: 18px;
    text-align: center;
}
</style>