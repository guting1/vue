<template>
    <div class="big">
        <a href="http://localhost:5173/#/shoping"><img :src="product.pic" class="img"/></a>
        <div class="text name">
            <span>{{ product.name }}</span>
        </div>
        <div class="text tit">
            <span>{{ product.subTitle }}</span>
        </div>
        <div class="text price">
            <span>￥{{ product.price }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: { product: {} },
    mounted(){
        // console.log('拿到的商品:' + JSON.stringify(this.product))
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>
<style scoped>
.img{
    width: 400px;
    height: 350px;
}
.name{
    font-size: 20px;
}

.tit{
    font-size: 15px;
    color: gray;
}

.price{
    color: red;
}

.text{
    display: flex;
    padding: 5px 15px;
}

.big{
    width: 500px;
    height: 500px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
}
</style>
