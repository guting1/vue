<template>
		<div id="all">
			<div id="content">
					<div class="a1">
						<img class="big" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5b19403eN9f0b3cb8.jpg">

					</div>									
				<div class="a2">
					<h2>耐克NIKE 男子 气垫 休闲鞋 AIR MAX 90 ESSENTIAL 运动鞋 </h2>
					<div class="a21">
						<div class="a211">
							<span class="color">售价</span>
							<span class="prices">￥649</span>
							<span class="shic">市场价<span class="prices2">￥1260</span></span>
							<span class="yis">已售6264件</span>
						</div>
						<div class="a22">
							<p></p>
							<span class="color">假一赔十</span>
							<span class="neir">正品保障，假一赔十</span>
							<p></p>
							<span class="color">极速退货</span>
							<span class="neir">满足相应条件时，享受极速退款到账</span>
							<p></p>
							<span class="color">7天无理由换货</span>
							<span class="neir">满足相应条件时，享受极速退款到账</span>
						</div>
						<div class="a23">
							<p></p>
							<span class="color">配送说明</span>
							<p>北京、上海、广州、深圳、天津、重庆、南京、长沙</p>
							<span class="color">配送至</span>
							<p>郑州</p>
							<span class="color">说明</span>
							<p>偏远地区暂不配送</p>
						</div>
						<div class="a24">
							<span class="color">选择</span>
							<p></p>
							<span class="bang">银色</span>
							<span class="bang">黑色</span>
							<span class="bang">白色</span>
						</div>
						<div class="a25">
							<a href="#"><button class="a25color1">加入购物车</button></a>
							<a href="#"><button class="a25color2">加入购物车</button></a>
						</div>
					</div>
				</div>
			</div>
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
iframe{
	width: 1200px;
	margin: auto;
}
.all{
	width: 100%;
	height: 810px;
	padding-bottom: 50px;
	margin-top: -80px;
	margin-bottom: 1px;
}
.all .content{
	margin-top: 0px;
	float: left;
}
#content{
/* 	border: 1px solid red; */
	width: 1200px;
	margin-top: -80px;
	margin: auto;
}
#content .a1{
	float: left;
	margin-left: 10px;
}
#content .a1 .big{
	/* float: left; */
	width: 450px;
	height: 400px;
}
#content .a11 ul li{
	list-style: none;
	float: left;
	margin: 20px 15px;
}
.a11 ul li img{
	border: 3px white solid;
	width: 80px;
	height: 80px;
}
.a11 ul li img:hover{
	border: 3px #FF4F0D solid;
}
.a2{
	float: left;
	margin-left: 90px;	
}
.a21 .color{
	color: #758188;
}
.a21 .a211{
	background-color: #F2F5F8;
	color: #758188;
}
.a21 .a211 .prices,.shic{
	margin-left: 40px;
}
.a21 .a211 .prices{
	color: #FF4F0D;
	font-size: 35px;
	font-weight: bold;
}
.a21 .a211 .prices2{
	text-decoration: line-through;
}
.a21 .a211 .yis{
	margin-left: 230px;
}
.a22{
	background-color: #F6F9FB;
}
.a22 span,p{
	margin-top: 10px;
}
.a22 .neir{
	margin-left: 50px;
}
.a23{
	margin-top: 10px;
}
.a24{
	margin-top: 10px;
}
.a24 .bang{
	display: inline-block;
	border: 3px #EDF0F5 solid;
	width: 50px;
	line-height: 40px;
	margin-left: 30px;
	text-align: center;
}
.a24 .bang:hover{
	border: 3px #FF4F0D solid;
}
.a25{
	margin-top: 30px;
}
.a25 button{
	display: inline-block;
	width: 200px;
	height: 60px;
	border-radius: 30px;
	margin-left: 30px;
}
.a25 .a25color1{
	background-color: #FFEEE8;
	color: #FF4F0D;
	font-size: 20px;
	font-weight: bolder;
	border: 1px #FF4F0D solid;
}
.a25 .a25color2{
	background-color: #FF4F0D;
	color: white;
	font-size: 20px;
	font-weight: bolder;
	border: 1px #FF4F0D solid;
}
/* .all .iheader{
	margin: auto;
} */
</style>