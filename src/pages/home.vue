<template>
    <div class="container">
        <var-button class="circle-button" round @click="$router.push('/storage')">存储</var-button>
        <var-button class="circle-button" round @click="$router.push('/extract')">提取</var-button>
        <var-divider>任何人都可以在这里寄存负面情绪，也可随机带走一份他人的情绪。</var-divider>
    </div>
</template>

<style scoped>
    .circle-button {
        width: 100px;
        height: 100px;
        margin: 10px;
    }
</style>