<script setup lang='ts'>
defineProps<{
    title?: string
}>()
</script>
<template>
    <div class='nav'>
        <van-nav-bar :title="title" left-arrow @click="$router.back()" />
    </div>
</template>
<style lang='scss' scoped>
.nav{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
}
:deep(.van-nav-bar__arrow) {
    font-size: 24px;
    color: black;
}
</style>