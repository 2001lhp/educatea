<script setup lang='ts'>
import img1 from '@/assets/banner/banner1.jpg'
import img2 from '@/assets/banner/banner2.jpg'
import img3 from '@/assets/banner/banner3.jpg'
import { banner } from '@/services';
import { ref, computed, watch } from 'vue';
const val = ref()
const swipe = ref()
banner().then(res => {
    console.log(res)
    swipe.value = res.data
})
let colorarr = ["#006C00", "#45328c", "#0072B7"]
let a = ref(0)
setInterval(() => {
    if (a.value == 2) {
        a.value = -1
    }
    a.value++
}, 3000)
const bgcolor = computed(() => colorarr[a.value])
</script>
<template>
    <div class='home'>
        <van-search v-model="val" shape="round" input-align="center" :background="bgcolor" placeholder="请输入搜索关键词" />
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item style="background-image: linear-gradient(rgb(0, 108, 0) 50%, rgb(255, 255, 255));">
                <img :src="img2" alt=""></van-swipe-item>
            <van-swipe-item style="background-image: linear-gradient(rgb(69, 50, 140) 50%, rgb(255, 255, 255));">
                <img :src="img1" alt=""></van-swipe-item>
            <van-swipe-item style="background-image: linear-gradient(rgb(0, 114, 183) 50%, rgb(255, 255, 255));">
                <img :src="img3" alt=""></van-swipe-item>
        </van-swipe>
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

.van-swipe {
    width: 100vw;

    img {
        width: 345px;
        margin: 15px;
    }
}
</style>