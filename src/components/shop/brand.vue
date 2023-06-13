<template>
    <div class="big">
        {{ entity }}
      <img :src="entity.logo" class="img"/>
        <div class="text">
            <span>{{ entity.name }}</span>
        </div>

        <div class="text">
            <span>{{ entity.brandStory }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: { entity: Object },
    mounted(){
        // console.log('拿到的品牌:' + JSON.stringify(entity))
    },
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.text{
    display: flex;
    padding: 5px 10px;
}
.img{
    width: 500px;
    height: 200px;
}

.big{
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
}
</style>
