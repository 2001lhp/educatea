<script setup lang='ts'>
import { balance } from '@/services';
import { ref } from 'vue';
const price = ref()
balance().then(res => {
    console.log(res)
    price.value = res.data
})
const list = [0, 30, 60, 90, 120, 150]
const i = ref(0)
</script>
<template>
    <div class='balance'>
        <van-nav-bar title="我的余额" left-arrow @click-left="$router.back()" />
        <div class="price">
            <p>余额：</p>
            <span>{{ price }}币</span>
        </div>
        <div class="recharge">
            <p style="margin: 10px 0 0 10px;font-size: 15px;color: #999;">充值：</p>
            <div style="padding: 10px;">
                <div class="item" v-for="item, index in list" :key="item" :class="i == index ? 'active' : ''"
                    @click="i = index">
                    <p>{{ item }}币</p>
                    <span>￥{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="explain">
            <div>充值说明：</div>
            <p>1.在IOS设备的APP要进行充值后，使用虚拟币消费。</p>
            <p>2.充值后不能在非IOS设备使用，与安卓版和网站余额不通用。</p>
            <p>3.充值后没有使用期限，但不可提现、退换、转让和申请发票。</p>
            <p>4.如遇无法充值、充值失败等问题，可关注[梦学谷]公众号，联系我们解决。</p>
        </div>
        <van-button type="primary" block round >立即充值</van-button>
    </div>
</template>
<style lang='scss' scoped>
:deep(.van-nav-bar) {
    background-color: #345dc2;
    height: 44px;

    .van-nav-bar__arrow {
        font-size: 24px;
        color: #fff;
    }

    .van-nav-bar__title {
        color: #fff;
    }
}
.van-button{
    background-color: #345dc2;
    position: fixed;
    bottom: 10px;
    width: 95%;
    margin: 0 10px;
}
.price {
    background-color: #345dc2;
    height: 144px;
    color: #fff;
    text-align: center;
    padding: 30px 0;

    p {
        font-size: 15px;
    }

    span {
        font-size: 44px;
    }
}

.recharge {
    float: left;

    .item {
        float: left;
        width: 112px;
        height: 66px;
        border: 1px solid #f8f9fb;
        border-radius: 5px;
        background-color: #fff;
        margin-right: 5px;
        margin-bottom: 7px;
        padding: 10px 0;
        text-align: center;

        p {
            color: #fa140e;
            font-size: 18px;
        }

        span {
            font-size: 15px;
            color: #999;
        }
    }

    .active {
        box-shadow: 0 0 0 0.5px #fa140e;
    }
}

.explain {
    clear: both;
    margin: 0 10px;
    font-size: 15px;
    line-height: 22px;
    color: #6e6d70;

    div {
        font-weight: 700;
        padding-top: 25px;
        padding-bottom: 15px;
    }
}
</style>