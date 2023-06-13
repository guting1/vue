<template>
    <div>
        <div class="big">
            <div class="item">
                <span>账号</span>
                <el-input v-model="acc" />
            </div>
            <div class="item">
                <span>密码</span>
                <el-input v-model="pwd" />
            </div>
            <div class="item">
                <el-button type="primary" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import Msg from "@/utils/msg/msg"
export default {
   data() {
      return {
        acc:'',
        pwd:''
      }
   },
   methods:{
    login(){
        if(this.acc == 'admin' && this.pwd == 'admin'){
            Msg.success('登录成功')
            this.$router.push('/home')
        }else{
            Msg.fail('账号密码不正确！')
        }
    }
   },
}
</script>
<style  scoped>
.item{
    display: flex;
    justify-content: space-between;
}
.big{
    width: 500px;
}
</style>
