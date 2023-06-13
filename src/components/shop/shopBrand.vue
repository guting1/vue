<template>
    <div class="big">
        <a href="http://localhost:5173/#/cart"><img :src="brand.logo" class="img" /></a>
        <div class="text">
            <span>{{ brand.name }}</span>
        </div>

        <div class="text">
            <span>{{ brand.brandStory }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: { brand: {} },
    mounted() {
        // console.log('拿到的品牌:' + JSON.stringify(this.brand))
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>
<style  scoped>
.text {
    display: flex;
    padding: 5px 10px;
}

.img {
    width: 500px;
    height: 200px;
}

.big {
    width: 500px;
    height: 420px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}
</style>
