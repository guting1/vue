<template>
    <div>
        <div class="up">
            <div class="item">
                <el-button type="success" @click="doAdd()" circle >
                    <el-icon size="15px" :color="color">
                        <Plus />
                    </el-icon>
                </el-button>

            </div>

        </div>

        <div class="down">
            <div>
                <!--列表组件-->
                <ListView :data="data" :column="column" title="专题列表">
                    <slot>
                        <el-table-column label="推荐状态" width="120">
                            <template #default="scope">
                                <span>{{ scope.row.recommendStatus == 0 ? '不推荐' : '推荐' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="显示状态" width="120">
                            <template #default="scope">
                                <span>{{ scope.row.showStatus == 0 ? '不显示' : '显示' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="图片" width="130">
                            <template #default="scope">
                                <img :src="scope.row.pic" class="img" />
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="120">
                            <template #default="scope">
                                <el-button type="primary" plain @click="doEdit(scope.row.id)" circle size="large" >
                                    <el-icon size="15px" :color="color">
                                        <Edit />
                                    </el-icon>
                                    
                                </el-button>
                                <el-button type="danger" plain @click="doDelete(scope.row.id)" circle size="large">
                                    <el-icon size="15px" :color="color">
                                        <Delete />
                                    </el-icon>
                                </el-button>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>


        <!--新建/编辑的弹窗-->
        <el-dialog v-model="visible" v-if="visible" width="30%" title="专题信息">
            <SubjectEdit :id="choiceId" @doCancel="doCancel"></SubjectEdit>
        </el-dialog> 
    </div>
</template>
<script>
import ListView from '@/components/list-view/list-view.vue';
import { page, del } from "@/http/cms/subjectApi/subjectApi";
import Msg from "@/utils/msg/msg"
import Advertise from '../../../components/sms/advertise.vue';
import SubjectEdit from '../../../components/cms/subjectEdit.vue';
export default {
    mounted() {
        //初始化设定列表每列显示的属性和名称
        this.column = this.buildColumn()
        //获取数据
        this.all()
    },
    data() {
        return {
            data: [],
            column: [],
            visible: false,
            choiceId: 0,

            itemArr: [],
            queryEntity: {}
        };
    },
    methods: {
        //查询
        doQuery() {
        },
        //编辑
        doEdit(id) {
            this.choiceId = id
            this.visible = true
            console.log('编辑的id:' + this.choiceId + '  visible:' + this.visible)
        },
        //新建
        doAdd() {
            console.log('触发了添加方法')
            this.choiceId = 0
            this.visible = true
        },
        //关闭弹窗
        doCancel() {
            this.visible = false
            this.all()
        },
        //删除
        doDelete(id) {
            console.log('删除的id:' + id)
            del({ id: id }).then(resp => {
                Msg.success('删除成功')
                this.all()
            })
        },
        //查询所有
        all() {
            let pageDto = {
                current: 1,
                size: 100
            }
            page(pageDto).then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.page.records
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                // { prop: "id", label: "编号", width: 100 },
                { prop: "categoryName", label: "分类名称", width: 130 },
                { prop: "collectCount", label: "收藏数", width: 100 },
                { prop: "commentCount", label: "评论数", width: 100 },
                { prop: "createTime", label: "创建时间", width: 100 },
                { prop: "forwardCount", label: "转发数", width: 180 },
                { prop: "productCount", label: "关联产品数", width: 100 },
                { prop: "readCount", label: "阅读数", width: 100 },
                { prop: "title", label: "标题", width: 150 },
                
            ];
        }
    },
    components: { ListView, Advertise, SubjectEdit }
}
</script>
<style  scoped>
.imgDiv {
    width: 800px;
    height: 500px;
}

.ha {
    width: 800px;
    height: 500px;
}

.img {
    width: 120px;
    height: 90px;
    margin-left: -8px;
}

.el-input {
    width: 130px;
}


.item {
    /* width: 250px; */
    display: flex;
    justify-content: right;
    width: 1300px;
}

.up {
    /* width: 1200px; */
    display: flex;
    justify-content: center;
}

.down {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /* width: 100; */
    margin-left: 20px;
}
</style>
