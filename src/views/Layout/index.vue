<script setup lang='ts'>
import img1 from '@/assets/tabbar/index.png'
import img2 from '@/assets/tabbar/index-active.png'
import img3 from '@/assets/tabbar/category.png'
import img4 from '@/assets/tabbar/category-active.png'
import img5 from '@/assets/tabbar/article.png'
import img6 from '@/assets/tabbar/article-active.png'
import img7 from '@/assets/tabbar/question.png'
import img8 from '@/assets/tabbar/question-active.png'
import img9 from '@/assets/tabbar/my.png'
import img10 from '@/assets/tabbar/my-active.png'
const tabbar = [
    { name: '首页', path: '/home', icon: img1, icon1: img2 },
    { name: '分类', path: '/cate', icon: img3, icon1: img4 },
    { name: '阅读', path: '/read', icon: img5, icon1: img6 },
    { name: '问答', path: '/quiz', icon: img7, icon1: img8 },
    { name: '我的', path: '/user', icon: img9, icon1: img10 },
]
</script>
<template>
    <div class='layout'>
        <router-view></router-view>
        <div class="tabbar">
            <div v-for="item in tabbar" :key="item.name" @click="$router.push(item.path)"
                :class="$route.path == item.path ? 'active' : 'active1'">
                <img :src="$route.path == item.path ? item.icon1 : item.icon" alt="">
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.layout{
    height: 100vh;
    /* overflow: hidden; */
}
.tabbar {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    align-items: center;
    background-color: rgb(248, 248, 248);

    div {
        text-align: center;

        img {
            width: 24px;
            height: 24px;
            margin-bottom: -1px;
        }

        p {
            font-size: 10px;
        }
    }

    .active {
        color: #345dc2;
    }
    .active1{
        color: #dbdbdb;
    }
}</style>