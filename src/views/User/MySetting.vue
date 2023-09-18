<script setup lang='ts'>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()
</script>
<template>
    <div class='setting'>
        <nav-bar title="设置" />
        <van-cell-group>
            <van-cell title="允许非WIFI网络播放" value="内容">
                <template #value>
                    <van-switch v-model="store.settingbool.wifiPlay" />
                </template>
            </van-cell>
            <van-cell title="允许非WIFI网络缓存" value="内容">
                <template #value>
                    <van-switch v-model="store.settingbool.wifiDownload" />
                </template>
            </van-cell>
            <van-cell title="视频自动连续播放" value="内容">
                <template #value>
                    <van-switch v-model="store.settingbool.autoPlay" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell title="清除应用缓存" value="1KB" />
    </div>
</template>
<style lang='scss' scoped>
.setting {
    height: 100vh;
    padding-top: 50px;
    background-color: #f8f9fb;
}

.van-cell-group {
    margin: 10px 0;
}
</style>