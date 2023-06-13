<template>
    <div>
        <!-- form表单形式显示数据-->
        <el-form :model="entity" label-width="120px">
            <el-form-item label="创建时间">
                <el-date-picker v-model="entity.createTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="推荐状态">
                <el-select v-model="entity.recommendStatus" placeholder="请选择">
                    <el-option v-for="item in recommendStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="展示状态">
                <el-select v-model="entity.showStatus" placeholder="请选择">
                    <el-option v-for="item in showStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="分类">
                <el-select v-model="entity.categoryId" placeholder="请选择" @change="change">
                    <el-option v-for="item in categoryArr" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="分类名称">
                <el-input v-model="entity.categoryName"/>
            </el-form-item>

            <el-form-item label="收藏数">
                <el-input v-model="entity.collectCount"/>
            </el-form-item>

            <el-form-item label="评论数">
                <el-input v-model="entity.commentCount" />
            </el-form-item>

            <el-form-item label="内容">
                <el-input v-model="entity.content" />
            </el-form-item>

            <el-form-item label="描述">
                <el-input v-model="entity.description" />
            </el-form-item>

            <el-form-item label="图片">
                
                <el-input v-model="entity.pic" />
            </el-form-item>

            <el-form-item label="转发数">
                <el-input v-model="entity.forwardCount" />
            </el-form-item>

            <el-form-item label="阅读数">
                <el-input v-model="entity.readCount" />
            </el-form-item>

            <el-form-item label="管理产品数">
                <el-input v-model="entity.productCount" />
            </el-form-item>

            <el-form-item label="标题">
                <el-input v-model="entity.title" />
            </el-form-item>
        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, add, edit,allCategory } from "@/http/cms/subjectApi/subjectApi"
import Msg from "@/utils/msg/msg"
export default {
    //父组件将id传参给子组件，id = 0 新建   id不为0 编辑
    props: { id: Number },
    mounted() {
        console.log('mounted' + this.id)
        this.get()
    },
    data() {
        return {
            entity: {
                id: 0,
                albumPics: '',
                categoryId: '',
                categoryName: '',
                collectCount: 0,
                commentCount: 0,
                content: '',
                createTime: 0,
                description: '',
                forwardCount: 0,
                pic: 0,
                productCount: 0,
                readCount:0,
                recommendStatus:0,
                showStatus:0,
                title:'',
            },
            showStatusArr: [
                { value: 0, label: '不显示' },
                { value: 1, label: '显示' }
            ],
            recommendStatusArr: [
                { value: 0, label: '不推荐' },
                { value: 1, label: '推荐' }
            ],
            categoryArr:[]
        }
    },
    methods: {
        change(a){
            this.categoryArr.forEach(item=>{
                if(item.id == a){
                    this.entity.categoryName = item.name
                }
            })
        },
        //点击确认按钮，根据id来执行新建/编辑操作
        sure() {
            this.id == 0 ? this.add() : this.edit()
        },
        //新建
        add() {
            console.log('添加的:' + JSON.stringify(this.entity))
            add(this.entity).then(resp => {
                Msg.success('新建成功')
                this.doCancel()
            })
        },
        //编辑
        edit() {
            edit(this.entity).then(resp => {
                Msg.success('已保存')
                this.doCancel()
            })
        },
        //点击取消按钮，给父组件提交'doCancel'事件，父组件触发该事件时关闭弹窗
        doCancel() {
            this.$emit('doCancel')
        },
        //编辑时获取单个的数据
        get() {
            console.log('触发了get方法')
            if (this.id != 0) {
                one({ id: this.id }).then(resp => {
                    console.log('编辑收到的:' + JSON.stringify(resp))
                    this.entity = resp.data.help
                })
            }

            allCategory().then(resp=>{
                console.log('所有分类：' + JSON.stringify(resp))
                this.categoryArr = resp.data.page.records
            })
        },
    },
}
</script>
<style  scoped>
.btnDiv {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

.img{
    width: 200px;
    height: 150px;
}
</style>
