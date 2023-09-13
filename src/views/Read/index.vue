<script setup lang='ts'>
import { getList, search } from '@/services/index'
import type { Data, List } from '@/types';
import { ref } from 'vue';

const val = ref()
const tab = ref<List[]>([])
const list = ref<Data[]>([])
const current = ref(1)
const id = ref(0)
getList().then(res => {
    console.log(res.data)
    tab.value = res.data
})
const getdata = async () => {
    const res = await search({ current: current.value, size: 10, categoryId: id.value })
    console.log(res.data.records)
    list.value = res.data.records
}
const change = (e: number) => {
    id.value = e
    getdata()
}
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = async () => {
    const res = await search({ current: current.value, size: 10, categoryId: id.value })
    list.value.push(...res.data.records)
    if (list.value.length >= res.data.total) {
        finished.value = true
    } else {
        current.value++
        loading.value = false
        refreshing.value = false
    }
};

const onRefresh = () => {
    list.value = []
    finished.value = false;
    getdata()
    loading.value = true;
    onLoad();
};
</script>
<template>
    <div class='read' style="padding-bottom: 50px;">
        <van-search v-model="val" shape="round" input-align="center" background="#345dc2" placeholder="请输入搜索关键词" />
        <van-tabs @change="change">
            <van-tab v-for="item in tab" :key="item.id" :name="item.id" :title="item.name">
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                        <div class="box" v-for="item in list" :key="item.id">
                            <div>
                                <h3>{{ item.title }}</h3>
                                <p class="desc">{{ item.summary }}</p>
                                <p class="msg"><span>{{ item.nickName }}</span> · {{ item.updateDate }} · {{ item.thumhup
                                }}赞</p>
                            </div>
                            <img v-show="item.imageUrl" :src="(item.imageUrl as string)" alt="">
                        </div>
                    </van-list>
                </van-pull-refresh>
            </van-tab>
        </van-tabs>
    </div>
</template>
<style lang='scss' scoped>
:deep(.van-search) {
    height: 44px;
    padding: 5px;

    .van-search__content {
        height: 30px;
        background-color: #f0f1f2;
    }
}

:deep(.van-tab .van-tab--grow) {
    width: 75px;
    height: 40px;

    .van-tab__text {
        width: 100%;
    }

    .van-tabs__content {
        width: 100vw;
    }
}

:deep(.van-tab--active) {
    color: #007aff;
}

.box {
    width: 100vw;
    padding: 15px;
    display: flex;
    border-bottom: 1px solid #f1f1f1;

    img {
        width: 110px;
        height: 70px;
        border-radius: 5px;
    }

    div {
        width: calc(100vw - 140px);
        flex: 1;

        .desc {
            /* width: 100%; */
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #b8b8b8;
            margin-bottom: 8px;
            font-size: 13px;
        }

        .msg {
            color: #b8b8b8;
            font-size: 13px;

            span {
                color: #000;
            }
        }
    }
}
</style>