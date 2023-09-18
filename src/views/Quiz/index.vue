<script setup lang='ts'>
import { question } from '@/services/index';
import { ref } from 'vue';

const val = ref()
const active = ref('hot')
const list = ref()
const current = ref(1)
const tabs = [
    { name: '热门问答', tab: 'hot' },
    { name: '最新问题', tab: 'new' },
    { name: '等待回答', tab: 'wait' },
]
const getdata = () => {
    question(active.value, { current: 1, size: 10 }).then(res => {
        console.log(res.data)
        list.value = res.data.records
    })
}
getdata()

const change = (e: string) => {
    console.log(active.value);
    active.value = e
    getdata()
}

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const onLoad = async () => {
    const res = await question(active.value, { current: current.value, size: 10, })
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
}
</script>
<template>
    <div class='quiz'>
        <van-search v-model="val" shape="round" input-align="center" background="#345dc2" placeholder="请输入搜索关键词" />
        <van-tabs @change="change" v-model:active="active">
            <van-tab v-for="item in tabs" :key="item.tab" :name="item.tab" :title="item.name">
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                        <div class="box" v-for="item in list" :key="item.id"
                            @click="$router.push({ path: '/quizdetail', query: { id: item.id } })">
                            <h3>{{ item.title }}</h3>
                            <div>
                                <span>{{ item.reply }} 回答 · {{ item.viewCount }} 浏览</span>
                                <span>{{ item.nickName }} · {{ item.updateDate }}</span>
                            </div>
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
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #f1f1f1;

    div {
        display: flex;
        justify-content: space-between;
        color: #b8b8b8;
    }
}
</style>