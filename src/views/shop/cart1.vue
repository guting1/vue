<template>
 <div class="new">
<h2>化妆品专区</h2>
<ul>
<li><img src="https://img13.360buyimg.com/n7/jfs/t1/217373/36/28881/105101/64830602F1e1a00aa/c82489f8ed7f0d7a.jpg" width="150" height="180" />
<p><span class="f1">&yen;1100.00元</span><span class="f2">324人购买</span><br />
<span class="f3">兰蔻小黑瓶50ml </span></p></li>
<li><img src="https://img11.360buyimg.com/n7/jfs/t1/47042/12/22473/97080/6482da04Fd38bd7a7/9e9cc12cd75f769e.jpg" width="150" height="180" />
<p><span class="f1">&yen;699.00元</span><span class="f2">534人购买</span><br />
<span class="f3">SK-II神仙水75ml精华液 </span></p></li>
<li><img src="https://img11.360buyimg.com/n7/jfs/t1/112970/33/38588/116491/64854160Fedeb8569/ad65f26464cb9044.jpg" width="150" height="180" />
<p><span class="f1">&yen;219.00元</span><span class="f2">643人购买</span><br />
<span class="f3"> 欧诗漫（OSM）珍珠白洁水乳</span></p></li>
<li><img src="https://img13.360buyimg.com/n7/jfs/t1/81243/23/24318/149913/647db3c3F37b6881a/c12ca071ed81252d.jpg" width="150" height="180" />
<p><span class="f1">&yen;329.00元</span><span class="f2">678人购买</span><br />
<span class="f3">欧莱雅（L'OREAL）欧莱雅套装抗皱紧致护肤礼盒</span></p></li>
<li><img src="https://img14.360buyimg.com/n7/jfs/t1/107330/5/36562/82693/64818dfaF1e6f6411/385da226ef67d8e0.jpg" width="150" height="180" />
<p><span class="f1">&yen;209.00元</span><span class="f2">567人购买</span><br />
<span class="f3">珀莱雅补水护肤品套装 </span></p></li>
<li><img src="https://img14.360buyimg.com/n7/jfs/t1/223801/37/25767/85760/64817e66F016933b9/3d681804ec39b5e7.jpg" width="150" height="180" />
<p><span class="f1">&yen;399.00元</span><span class="f2">4567人购买</span><br />
<span class="f3">玉兰油（OLAY）大红瓶水乳套装</span></p></li>

</ul>
</div>
 
</template>

<script>
export default {
  data () {
    return {
    };
  },

}

</script>
<style lang='scss' scoped>
.new{
	margin:2px auto;
	// width:660px;
	height:620px;
	border:1px solid white;}
.new h2{
	background-color:#F93;
	color:white;
	padding:10px;
	height:30px;}
.new ul{
	// width:660px;
	height:520px;
	border:1px;
	list-style:none;
    margin-left: 120px;
	padding:0px;}
.new ul li{
	// width:150px;
    width: 430px;
	float:left;
	margin-left:10px;
	text-align:left;}
.f1{
	color:red;
	margin-right:20px;
	font-size:12px;
	font-weight:bolder;}
.f2{
	color:grey;
	font-size:12px;}
.f3{
	color:black;
	font-size:13px}
.active{
	margin:2px auto;
	width:700px;
	height:400px;
	border:1px solid white;}
.active h2{
	background-color:#F93;
	color:white;
	padding:8px;
	height:30px;}
.active ul{
	width:700px;
	height:400px;
	border:1px;
	list-style:none;
	padding:0px;}
.active ul li{
	width:160px;
	float:left;
	margin-left:12px;
	text-align:left;
	font-size:13px}
</style>