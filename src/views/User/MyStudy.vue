<script setup lang='ts'>
import { studylist } from '@/services';
import { ref } from 'vue';
const list = ref()
studylist().then(res => {
    console.log(res)
    list.value = res.data
})
</script>
<template>
    <div class='study'>
        <nav-bar title="我的学习" />
        <div class="item" v-for="item in list" :key="item.id">
            <div class="info">
                <h4>{{ item.title }}</h4>
                <div>
                    <p>已学{{ item.percent }}%</p>
                    <van-progress :percentage="item.percent" />
                </div>
            </div>
            <img :src="item.mainImage" alt="">
        </div>
    </div>
</template>
<style lang='scss' scoped>
.study {
    padding-top: 50px;

    .item {
        padding: 15px 10px;
        display: flex;
        align-items: center;

        .info {
            flex: 1;
            margin-right: 10px;

            :deep(.van-progress__pivot) {
                display: none;
            }

            h4 {
                height: 40px;
                font-size: 14px;
                font-weight: 700;
                line-height: 17px;
            }
            p{
                margin-bottom: 4px;
            }
        }

        img {
            width: 122px;
            height: 75px;
            border-radius: 5px;
        }
    }
}
</style>