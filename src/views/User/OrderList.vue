<script setup lang='ts'>
import { orderList, actionorder } from '@/services';
import { showConfirmDialog } from 'vant';
import { ref } from 'vue';

const order = ref()
orderList().then(res => {
    console.log(res)
    order.value = res.data
})
const Cancel = (id: string) => {
    showConfirmDialog({
        message: '确定取消该订单记录？',
    }).then(() => {
        // on confirm
        actionorder(id, 'put')
    }).catch(() => {
        // on cancel
    });
}
const del = (id: string) => {
    showConfirmDialog({
        message: '确定取消该订单记录？',
    }).then(() => {
        // on confirm
        actionorder(id, 'delete')
    }).catch(() => {
        // on cancel
    });
}

</script>
<template>
    <div class='order'>
        <nav-bar title="我的订单" />
        <div class="box" v-for="item in order" :key="item.id">
            <div class="top">
                <span>{{ item.updateDate }}</span>
                <span>订单号{{ item.orderId }}</span>
            </div>
            <div class="coures" v-for="ele in item.courseList" :key="ele.id">
                <img :src="ele.mainImage" alt="">
                <div class="info">
                    <h4>{{ ele.title }}</h4>
                    <p style="color: #999;"><img style="width: 11px;height: 11px;" src="@/assets/老师.png" alt="">{{
                        ele.nickName }}</p>
                    <p>
                        <span style="color: #fb6932;"><img style="width: 14px;height: 14px;" src="@/assets/钱袋.png" alt="">{{
                            ele.priceDiscount }}</span>
                        <span><img style="width: 11px;height: 11px;" src="@/assets/暂停.png" alt="">{{ ele.studyTotal
                        }}在学</span>
                    </p>
                </div>
            </div>
            <div class="price">实付：<span>￥{{ item.priceDiscount }}</span></div>
            <div class="btn">
                <span :class="item.status == 1 ? 'a' : ''" style="font-size: 12px;">{{ item.status == 1 ? '待支付' :
                    (item.status == 2 ? '交易成功' : '交易关闭') }}</span>
                <div v-if="item.status == 1">
                    <van-button type="default" size="small" @click="Cancel(item.orderId)">取消订单</van-button>
                    <van-button type="danger" size="small">立即支付</van-button>
                </div>
                <van-button type="default" v-if="item.status == 3" @click="del(item.orderId)">删除订单</van-button>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.box {
    padding: 10px;
    margin-bottom: 10px;

    .top {
        span {
            margin-right: 10px 15px;
            font-size: 12px;
            color: #333;
        }
    }

    .coures {
        display: flex;
        padding: 10px 0;

        img {
            width: 145px;
            height: 80px;
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

    .price {
        width: 100%;
        line-height: 35px;
        text-align: right;

        span {
            color: #fa140e;
            font-size: 17px;
        }
    }

    .btn {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .van-button {
            margin-right: 5px;
        }
    }

}

.a {
    color: #fa140e;
}
</style>