<template>
    <div>
        <!-- form表单形式显示数据-->
        <el-form :model="entity" label-width="120px">
            <el-form-item label="开始时间">
                <el-date-picker v-model="entity.startTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="结束时间">
                <el-date-picker v-model="entity.endTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="上下线状态">
                <el-select v-model="entity.status" placeholder="请选择">
                    <el-option v-for="item in statusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="轮播位置">
                <el-select v-model="entity.type" placeholder="请选择">
                    <el-option v-for="item in typeArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="点击数">
                <el-input v-model="entity.clickCount"/>
            </el-form-item>

            <el-form-item label="名称">
                <el-input v-model="entity.name" />
            </el-form-item>

            <el-form-item label="备注">
                <el-input v-model="entity.note" />
            </el-form-item>

            <el-form-item label="下单数">
                <el-input v-model="entity.orderCount" />
            </el-form-item>

            <el-form-item label="图片">
                <el-input v-model="entity.pic" />
            </el-form-item>

            <el-form-item label="排序">
                <el-input v-model="entity.sort" />
            </el-form-item>

            <el-form-item label="链接地址">
                <el-input v-model="entity.url" />
            </el-form-item>
        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, add, edit } from "@/http/sms/home/advertiseApi"
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
                clickCount: '',
                endTime: '',
                name: 0,
                note: '',
                orderCount: '',
                pic: '',
                sort: 0,
                startTime: '',
                status: 0,
                type: 0,
                url: ''
            },
            statusArr: [
                { value: 0, label: '下线' },
                { value: 1, label: '上线' }
            ],
            typeArr: [
                { value: 0, label: 'PC首页轮播' },
                { value: 1, label: 'APP首页轮播' }
            ],
        }
    },
    methods: {
        //点击确认按钮，根据id来执行新建/编辑操作
        sure() {
            for(let a in this.entity){
                if(this.entity[a] === '' && a != 'pic' && a != 'id'){
                    console.log('空的属性:' + a)
                    Msg.fail('信息不能为空')
                    return
                }
            }
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
