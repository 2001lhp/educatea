<script setup lang='ts'>
import { getList } from '@/services/index'
import type { List } from '@/types';
import { ref } from 'vue';
const list = ref<List[]>([])
const active = ref(0)
getList().then(res => {
    console.log(res.data)
    list.value = res.data.data
})
const change = (e: number) => {
}
</script>
<template>
    <div class='cate'>
        <van-nav-bar title="标题">
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <div class="box">
            <van-sidebar v-model="active" @change="change">
                <van-sidebar-item v-for="item in list" :key="item.id" :title="item.name" />
            </van-sidebar>
            <div class="right">
                <span v-for="item in list[active]?.labelList" :key="item.id">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
:deep(.van-nav-bar) {
    background-color: rgb(52, 93, 194);
    height: 44px;

    .van-nav-bar__title {
        color: rgb(255, 255, 255);
    }

    .van-icon {
        color: rgb(255, 255, 255);
        font-size: 22px !important;
        font-weight: 700;
    }
}

.box {
    display: flex;
    height: calc(100vh - 94px);

    :deep(.van-sidebar) {
        width: 100px;
        height: 100%;

        .van-sidebar-item {
            text-align: center;
            padding: 27px 15px;
            font-size: 15px;
            color: #919192;
        }

        .van-sidebar-item--select,
        .van-sidebar-item--select:active {
            color: #345dc2;
            font-size: 16px;
            background-color: #f8f9fb;
        }

        .van-sidebar-item--select:before {
            background-color: #345dc2;
            width: 2px;
            height: 25px;
        }
    }

    .right {
        height: 100%;
        flex: 1;
        padding-top: 17px;
        padding-left: 10px;

        span {
            display: block;
            font-size: 12px;
            line-height: 30px;
            border: 1px solid #999;
            border-radius: 15px;
            width: 80px;
            text-align: center;
            padding: 0 2px;
            margin: 7px 2px;
            float: left;
        }
    }
}
</style>