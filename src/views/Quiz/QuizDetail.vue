<script setup lang='ts'>
import { questiondetail, questionlist } from '@/services';
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const detail = ref()
const list = ref()
onMounted(async () => {
    const info = await questiondetail(route.query.id as string)
    const arr = await questionlist(route.query.id as string)
    console.log(info);
    console.log(arr);
    detail.value = info.data
    list.value = arr.data
})
</script>
<template>
    <div class='detail'>
        <nav-bar />
        <div class="cate">
            <div v-for="item in detail?.labelList" :key="item.id">{{ item.name }}</div>
        </div>
        <div class="info">
            <h2>{{ detail?.title }}</h2>
            <p>
                <img :src="detail?.userImage" alt="">
                <span>{{ detail?.nickName }} · {{ detail?.updateDate }}</span>
            </p>
            <div>{{ detail?.mdContent }}</div>
        </div>
        <div style="height: 10px;background-color: #f1f1f1;"></div>
        <div class="answer">
            <div class="top">
                <div style="width: 3px;height: 20px;background-color: #345dc2;margin-right: 12px;"></div>{{ detail?.reply
                }}个回答
            </div>
            <div class="item" v-for="item in list" :key="item.id">
                <img :src="item.userImage" alt="">
                <div style="flex: 1;">
                    <p style="width: 100%;display: flex;justify-content: space-between;font-size: 12px;color: #959da5;;">
                        <span>{{ item.nickName }}</span>
                        <span>{{ item.createDate }}</span>
                    </p>
                    <p v-html="item.htmlContent"></p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.detail {
    padding-top: 44px;
    padding-bottom: 50px;

    .cate {
        display: flex;
        flex-wrap: wrap;
        padding: 5px 12px;
        font-size: 14px;
        background-color: #fff;

        div {
            color: #007aff;
            background-color: #fff;
            border: 0.5px solid #007aff;
            border-radius: 15px;
            margin-top: 7px;
            margin-right: 10px;
            height: 20px;
            padding: 0 8px;
            line-height: 20px;
            font-size: 12px;
        }
    }

    .info {
        padding: 12px;

        h2 {
            font-size: 22px;
            line-height: 27px;
            font-weight: 700;
        }

        p {
            margin: 15px 0;
            display: flex;
            align-items: center;

            img {
                width: 22px;
                height: 22px;
                border-radius: 50%;
                margin-right: 5px;
            }
        }

        div {
            line-height: 1.5;
            color: #222;
            font-size: 17px;
            word-wrap: break-word;
        }
    }

    .answer {
        .top {
            display: flex;
            font-size: 15px;
            color: #303133;
            font-weight: 700;
            padding: 12px;
        }

        .item {
            display: flex;
            padding: 10px 12px;

            img {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }
    }

    .footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        border-top: .5px solid #efeff4;
        background-color: #f8f9fb;
    }
}
</style>