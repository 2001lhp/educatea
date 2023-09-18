<script setup lang='ts'>
import img1 from '@/static/images/banner1.jpg'
import img2 from '@/static/images/banner2.jpg'
import img3 from '@/static/images/banner3.jpg'
import { banner, getList, homeSearch } from '@/services/index';
import type { HomePageConfig } from '@/types';
import { ref, onMounted } from 'vue';
const val = ref()
const swipe = ref()
banner().then(res => {
    // console.log(res)
    swipe.value = res.data
})
const tab = ref()
getList().then(res => {
    // console.log(res)
    tab.value = res.data.slice(0, 7)
})
const getdata = async (page: HomePageConfig) => {
    const res = await homeSearch(page)
    return res.data.records
}
const page = { current: 1, size: 10 }
const hotList = ref()
const newList = ref()
const freeList = ref()
const payList = ref()
onMounted(async () => {
    hotList.value = await getdata({ ...page, sort: 'hot' })
    newList.value = await getdata({ ...page, sort: 'new' })
    freeList.value = await getdata({ ...page, isFree: 1 })
    payList.value = await getdata({ ...page, isFree: 0 })
    // console.log(payList.value);
})
const loading = ref(false);
const finished = ref(false);

const onLoad = async () => {
    page.current++
    const res = await homeSearch({ ...page, isFree: 0 })
    console.log(res);
    payList.value.push(...res.data.records)
    if (payList.value.length < res.data.total) {
        page.current++
    } else {
        finished.value = true
    }
    loading.value = false
};
</script>
<template>
    <div class='home'>
        <!-- <van-search v-model="val" shape="round" input-align="center" :background="bgcolor" placeholder="请输入搜索关键词" /> -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item style="background-image: linear-gradient(rgb(0, 108, 0) 50%, rgb(255, 255, 255));">
                <van-search v-model="val" shape="round" input-align="center" background="#006C00" placeholder="请输入搜索关键词" />
                <img :src="img2" alt=""></van-swipe-item>
            <van-swipe-item style="background-image: linear-gradient(rgb(69, 50, 140) 50%, rgb(255, 255, 255));">
                <van-search v-model="val" shape="round" input-align="center" background="#45328c" placeholder="请输入搜索关键词" />
                <img :src="img1" alt=""></van-swipe-item>
            <van-swipe-item style="background-image: linear-gradient(rgb(0, 114, 183) 50%, rgb(255, 255, 255));">
                <van-search v-model="val" shape="round" input-align="center" background="#0072B7" placeholder="请输入搜索关键词" />
                <img :src="img3" alt=""></van-swipe-item>
        </van-swipe>
        <div class="tab">
            <span v-for="item in tab" :key="item.id">{{ item.name }}</span>
            <span>全部分类</span>
        </div>
        <div class="hot">
            <div class="title">
                <div class="left">
                    <span class="name">热门推荐</span>
                    <span class="word">HOT</span>
                </div>
                <div class="right">
                    全部<van-icon name="arrow" />
                </div>
            </div>
            <div style="width: 100%;overflow: auto;">
                <div class="hotlist">
                    <div class="item" v-for="item in hotList" :key="item.id">
                        <img class="img" :src="item.mainImage" alt="">
                        <div class="info">
                            <h4>{{ item.title }}</h4>
                            <p style="color: #999;"><img style="width: 11px;height: 11px;" src="@/assets/老师.png" alt="">{{
                                item.nickName }}</p>
                            <p>
                                <span style="color: #fb6932;"><img style="width: 14px;height: 14px;" src="@/assets/钱袋.png"
                                        alt="">{{ item.priceDiscount }}</span>
                                <span><img style="width: 11px;height: 11px;" src="@/assets/暂停.png" alt="">{{ item.studyTotal
                                }}在学</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="new">
            <div class="title">
                <div class="left">
                    <span class="name">近期上新</span>
                    <span class="word">HOT</span>
                </div>
                <div class="right">
                    全部<van-icon name="arrow" />
                </div>
            </div>
            <div class="newlist">
                <div class="item" v-for="item in newList" :key="item.id">
                    <img class="img" :src="item.mainImage" alt="">
                    <h4>{{ item.title }}</h4>
                    <p style="color: #999;"><img style="width: 11px;height: 11px;" src="@/assets/老师.png" alt="">{{
                        item.nickName }}</p>
                    <p style="display: flex;justify-content: space-between;">
                        <span style="color: #fb6932;"><img style="width: 14px;height: 14px;" src="@/assets/钱袋.png" alt="">{{
                            item.priceDiscount }}</span>
                        <span><img style="width: 11px;height: 11px;" src="@/assets/暂停.png" alt="">{{ item.studyTotal
                        }}在学</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="free">
            <div class="title">
                <div class="left">
                    <span class="name">免费精选</span>
                    <span class="word">HOT</span>
                </div>
                <div class="right">
                    全部<van-icon name="arrow" />
                </div>
            </div>
            <div style="width: 100%;overflow: auto;">
                <div class="hotlist">
                    <div class="item" v-for="item in freeList" :key="item.id">
                        <img class="img" :src="item.mainImage" alt="">
                        <div class="info">
                            <h4>{{ item.title }}</h4>
                            <p style="color: #999;"><img style="width: 11px;height: 11px;" src="@/assets/老师.png" alt="">{{
                                item.nickName }}</p>
                            <p>
                                <span style="color: #fb6932;"><img style="width: 14px;height: 14px;" src="@/assets/钱袋.png"
                                        alt="">{{ item.priceDiscount }}</span>
                                <span><img style="width: 11px;height: 11px;" src="@/assets/暂停.png" alt="">{{ item.studyTotal
                                }}在学</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pay">
            <div class="title">
                <div class="left">
                    <span class="name">付费精品</span>
                    <span class="word">HOT</span>
                </div>
                <div class="right">
                    全部<van-icon name="arrow" />
                </div>
            </div>
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="paylist" v-for="item in payList" :key="item.id">
                    <img class="img" :src="item.mainImage" alt="">
                    <div class="info">
                        <h4>{{ item.title }}</h4>
                        <p style="color: #999;"><img style="width: 11px;height: 11px;" src="@/assets/老师.png" alt="">{{
                            item.nickName }}</p>
                        <p>
                            <span style="color: #fb6932;"><img style="width: 14px;height: 14px;" src="@/assets/钱袋.png"
                                    alt="">{{ item.priceDiscount }}</span>
                            <span><img style="width: 11px;height: 11px;" src="@/assets/暂停.png" alt="">{{ item.studyTotal
                            }}在学</span>
                        </p>
                    </div>
                </div>
            </van-list>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.home {
    padding-bottom: 60px;
}

:deep(.van-search) {
    height: 44px;
    padding: 5px;

    .van-search__content {
        height: 30px;
        background-color: #f0f1f2;
    }
}

.van-swipe {
    width: 100vw;
    /* height: 175px; */

    img {
        width: 345px;
        height: 175px;
        margin: 0 15px;
        margin-top: 15px;
        border-radius: 5px;
    }
}

.tab {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px 15px 0 15px;
    margin-bottom: 30px;

    span {
        width: 80px;
        height: 35px;
        background-color: #f8f9fb;
        text-align: center;
        line-height: 35px;
        font-size: 13px;
        border-radius: 10px;
        overflow: hidden;
        margin-top: 7px;
    }
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .name {
        font-size: 19px;
        font-weight: 500;
        color: #303133;
        margin-right: 5px;
    }

    .word {
        font-size: 10px;
        background-image: linear-gradient(90deg, #fb6932, #fa140e);
        color: #fff;
        padding: 0 5px;
        border-radius: 15px 15px 15px 0;
    }

    .right {
        font-weight: 400;
        color: #959da5;
        font-size: 14px;
    }
}

.hot,
.free {
    width: 100vw;
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;

    .hotlist {
        width: 200%;
        height: 500px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .item {
            width: 50%;
            display: flex;
        }

        .img {
            margin-right: 10px;
        }

        h4 {
            height: 35px;
            margin-bottom: 5px;
        }

        span {
            margin-right: 5px;
        }
    }
}

.new {
    width: 100vw;
    padding: 15px;

    .newlist {
        display: flex;
        margin-top: 10px;
        width: 100%;
        overflow: auto;

        .item {
            width: 155px;
            height: 180px;
            padding: 0 5px;
            border-radius: 5px;
            box-shadow: 1px 1px 3px #ddd;
            margin: 0 4px;
        }

        h4 {
            height: 35px;
            margin-bottom: 5px;
        }
    }
}

.img {
    width: 145px;
    height: 80px;
    border-radius: 5px;
}

.pay {
    width: 100vw;
    padding: 15px;

    .paylist {
        display: flex;
        padding: 10px 0;

        .img {
            margin-right: 5px;
        }

        h4 {
            height: 35px;
            margin-bottom: 5px;
        }

        span {
            margin-right: 10px;
        }
    }
}
</style>