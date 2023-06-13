<template>
    <div>
        <el-page-header @back="goBack">
        </el-page-header>
        <div class="up" style="margin-top: 20px;">
            <div class="imgDiv">
                <el-carousel type="card" height="400px" width="800px">
                    <el-carousel-item v-for="item in advArr" :key="item">
                        <img :src="item.pic" class="ha" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <h1>品牌专区</h1>
        <div class="up">
            <div class="text">
                <span>品牌</span>
            </div>
            <div class="brandDiv">
                <template v-for="item in brandArr">
                    <ShopBrand :brand="item"></ShopBrand>
                </template>
            </div>
        </div>
<hr>
<h1>专题专区</h1>
        <div class="up">
            <!-- <div class="text">
                <span>专题</span>
            </div> -->
            <div class="subDiv">
                <template v-for="item in subArr">
                    <ShopSubject :sub="item"></ShopSubject>
                </template>
            </div>
        </div>
      <h1>新品专区</h1>
        <div class="up">
            <div class="text">
                <span>新品</span>
            </div>
            <div class="productDiv">
                <template v-for="item in newArr">
                    <Product :product="item"></Product>
                </template>
            </div>
        </div>
        <h1>热销专区</h1>
        <div class="up">
            <div class="text">
                <span>推荐</span>
            </div>
            <div class="productDiv">
                <template v-for="item in recommendArr">
                    <Product :product="item"></Product>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import {
    allAdv,
    allBrand,
    allProduct,
    allSub
} from "@/http/shop/shopApi"
import Brand from "../../components/shop/brand.vue"
import ShopBrand from "../../components/shop/shopBrand.vue"
import Product from "../../components/shop/product.vue"
import ShopSubject from "../../components/shop/shopSubject.vue"
export default {
    components: { Brand, ShopBrand, Product, ShopSubject },
    mounted() {
        this.all()
    },
    data() {
        return {
            advArr: [],
            brandArr: [],
            productArr: [],
            recommendArr: [],
            newArr: [],
            subArr:[]
        }
    },
    methods: {
        goBack() {
            this.$router.push('/adminLogin')
        },
        all() {
            allAdv().then(resp => {
                this.advArr = resp.data.page.records
                console.log('第一个广告:' + JSON.stringify(this.advArr[0]))
            })

            allBrand().then(resp => {
                this.brandArr = resp.data.page.records
                console.log('第一个品牌:' + JSON.stringify(this.brandArr[0]))
            })

            allProduct().then(resp => {
                this.productArr = resp.data.page.records
                this.getRecommend()
                this.getNew()
            })

            allSub().then(resp => {
                this.subArr = resp.data.page.records
                console.log('第一个专题:' + JSON.stringify(this.subArr[0]))
            })
        },
        getRecommend() {
            this.productArr.forEach(item => {
                if (item.recommandStatus == 1) {
                    this.recommendArr.push(item)
                }
            })
        },
        getNew() {
            this.productArr.forEach(item => {
                if (item.newStatus == 1) {
                    this.newArr.push(item)
                }
            })
        }
    },
}
</script>
<style  scoped>
.subDiv{
    width: 1800px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 50px;
    margin: 20px 0px;
}
.productDiv {
    width: 2600px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 50px;
    margin-top: 50px;
}

.text {
    display: flex;
    padding: 5px 10px;
    font-size: 30px;
}

.brandDiv {
    /* margin-left: 100px; */
    width: 1800px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 50px;

}

.imgDiv {
    width: 1700px;
    height: 400px;
}

.img {
    width: 150px;
    height: 90px;
    margin-left: -8px;
}

.up {
    display: flex;
    justify-content: center;
}
h1{
	background-color:#F93;
	color:white;
	padding:10px;
	height:30px;}

</style>
