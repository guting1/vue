<template>
    <div class="big">
        <div class="up">
            <div>
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="horizontal" :router="true">
                    <el-menu-item index="/home/brand">品牌管理</el-menu-item>
                    <el-menu-item index="/home/advertis">广告管理</el-menu-item>
                    <el-menu-item index="/home/product">产品管理</el-menu-item>
                    <el-menu-item index="/home/subjecta">专题管理</el-menu-item>
                    <el-menu-item index="/home/subjecta">菜单五</el-menu-item>
                </el-menu>
                <el-button type="primary" plain @click="doShop()">
                    <el-icon><View /></el-icon>
                </el-button>
            </div>
        </div>

        <div class="down">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '/home/brand'
        }
    },
    methods: {
        doShop(){
            this.$router.push('/shop')
        }
    },
}
</script>
<style  scoped>
.up {
    width: 100%;
    height: 20%;
    display: flex;
    direction: rtl;
}

.down {
    width: 100%;
    height: 800%;
    overflow-y: auto;
}

.big {
    width: 100%;
    height: 100%;
    padding: 0px;
}
</style>
