<template>
    <div class="big">
        <div>
            <a href="http://localhost:5173/#/cart1"><img class="img" :src="sub.pic"/></a>
        </div>
        <div class="text">
            <span>{{ sub.title }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: { sub: {} },
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
.text{
    display: flex;
    padding: 5px 15px;
}
.img{
    width: 300px;
    height: 200px;
}
.big{
    width: 300px;
    height: 260px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
}
</style>
