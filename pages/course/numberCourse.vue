<template>
	<view>
		   <view class='to-absolute course-jx-bkg wrap-width'>
			   <view class='course-top-img to-relative'>
				   <!-- <img :src="numberNumber" alt="" class='restrict-img-width'> -->
			   </view>
			   <view class='to-relative bkg-white  course-info box-sizing'>
				   <view class='to-flex align-items-center'>
					   <view class="capsule"></view>
                       <view class="circular rounded-circle"></view>
				   </view>
				   <view class='font-weight-bold font-size-bigger margin-top-bigger'>2019精品数字课程</view>
				   <view class='font-size-small margin-top-normal font-color-hui'>2019</view>
				   <view class='margin-top-normal to-flex '>
					   <view class='bkg-skyblue-light not-know border-radius-small margin-right-normal font-size-small font-color text-center'>#遇见未知的自己</view>
					   <view class=' border-radius-small  font-size-small font-color bkg-grey-light number-study text-center'>#数字学</view>
				   </view>
				    <view class='margin-top-normal to-flex align-items-center padding-bottom-middle border-bottom-grey'>
				  		 <view class='font-size-bigger font-color-orange font-weight-bold margin-right-small'>￥1888</view>
				  		 <view class='  font-size-small-small  font-color-slight-grey'>剩余2个名额</view>
				  </view>
				  <view class='margin-top-litter-big'>
					  <view class='font-weight-bold font-size-big-light '>授课老师</view>
					  <view class='to-flex align-items-center margin-top-middle'>
						  <view class='student-img-box-middle'>
							  <img :src="numberTeacher" alt="" class='restrict-img-width'>
						  </view>
						  <view class='margin-left-big '>
							  <view class='font-weight-bold font-size-big margin-bottom-small'>小胖</view>
							  <view class='font-size-middle font-color-black-light'>15年数字学经验...</view>
						  </view>
					  </view>
				  </view>
			   </view>
			   <view class='padding-top-middle bkg-grey-dark' ></view>
			  <view class='bkg-white course-detail box-sizing'>
				  <view class='padding-left-small font-size-big-light font-weight-bold'>课程介绍</view>
				  <view class='img-wrapper-middle' >
					 <img :src="numberInstruction" alt="" class='restrict-img-width'>
				  </view>
				  <view class='wrapper-middle border-radius-small box-sizing  padding-bottom-bigger font-color-dark-grey font-size-litter-big padding-left-right-big padding-top-normal box-shadow-grey' >
					 <view class='paragraph-line-height'>
						  百度翻译是百度发布的在线翻译服务，依托互联
						 网数据资源和自然语言处理技术优势，
						 致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务
						 。百度翻译支持全球28种热门语言互译，包括中文（简体
						 ）、英语、日语、韩语、西班
					 </view>
				  </view>
				  <view class='font-size-middle  font-color-black-light bkg-white text-center padding-top-middle'>--口袋里的性格分析师--</view>
			   </view>
			   <view class='padding-top-middle bkg-grey-dark' ></view>
			   <view class='bkg-white course-notice box-sizing'>
			   	 <view class='padding-left-small font-size-big-light font-weight-bold'>报课需知</view>
			   	   <view class='to-flex margin-top-litter-big '>
						<view class=' margin-right-small to-relative'>
							<img :src="homeHow" class='icon-how' alt="">
						</view>
						<view>
						  <view class='font-size-litter-big font-weight-bold font-color-dark-grey'>怎么上课</view>
							<view class='margin-top-small'>
								<view class='font-color-black-light font-size-litter-big white-space'>支付成功后,在开课日点击我的课程-签</view>
								<view class='font-color-black-light font-size-litter-big white-space margin-top-smaller'>到。生成签到二维码，<text class='font-color-light-blue' @click='qrCode'>刷二维码入场</text></view>
						  </view>
						</view>
					</view>
					 <view class='to-flex margin-topper '>
						<view class='icon-time to-relative margin-right-small'>
							<img :src="homeTime" class='icon-time' alt="">
						</view>
						 <view>
						  <view class='font-size-litter-big font-weight-bold font-color-dark-grey'>上课时间</view>
							<view class='margin-top-small'>
								<view class='font-color-black-light font-size-litter-big'>2019.10.12 13:00-15:00</view>
								<view class='font-color-black-light font-size-litter-big margin-top-smaller'>2019.10.14 13:00-15:00</view>
						  </view>
						</view>
				   </view>
				    <view class='to-flex margin-topper '>
				   		<view class=' to-relative margin-right-small'>
							<img :src="homePlace" class='icon-place' alt="">
						</view>
				   		<view>
				   		  <view class='font-size-litter-big font-weight-bold font-color-dark-grey'>上课地点</view>
				   			<view class='margin-top-small'>
				   				<view class='font-color-black-light font-size-litter-big white-space'>杭州市</view>
				   		   </view>
				   		</view>
				   </view>
				    <view class='to-flex margin-topper '>
				   		<view class=' to-relative margin-right-small'>
							<img :src="homePeople" class='icon-people' alt="">
						</view>
				   		<view>
				   		  <view class='font-size-litter-big font-weight-bold font-color-dark-grey white-space'>请添加工作人员联系方式</view>
				   			<view class='margin-top-small'>
				   				<view class='font-color-black-light font-size-litter-big white-space'>沐沐老师微信:</view>
				   				<view class='font-color-black-light font-size-litter-big white-space'>公众号：数哥在线</view>
				   		   </view>
				   		</view>
				   </view>
			  </view>
			   <view class='bkg-white padding-bottom-litter-big' >  
                     <view class='sign-up-btn wrapper margin-auto font-color  letter-spacing text-center font-size-big' @click='signUp'>立即报名</view>		 
			   </view>
		   </view>
		   
		<!-- <bottomBar></bottomBar> -->
      
	</view>
</template>

<script>
	import bottomBar from "@/components/tabbar/bottomtabbar.vue"
	import { IMG } from '@/static/imgs/img.js'
	export default {
    components: {
		bottomBar
		},
	data(){
		return {
	      homeHow:IMG.homeHow,
		  homePeople:IMG.homePeople,
		  homePlace:IMG.homePlace,
		  homeTime:IMG.homeTime,
		  numberTeacher:IMG.numberTeacher,
		  numberInstruction:IMG.numberInstruction,
		  numberNumber:IMG.numberNumber
		  
		}
	},
	methods:{
		signUp(){
			 uni.redirectTo({
			 	url:'/pages/course/signUpSuc'
			 })
		},
       qrCode(){
		   uni.scanCode({
          success: function (res) {
           console.log('条码类型：' + res.scanType);
           console.log('条码内容：' + res.result);
           }
         });
	   }
	},
	onShow(){
   
	}
}
</script>

<style>
	.course-jx-bkg{
		top:0;
		z-index:1;
		background:#0078FF;
	}
	.course-top-img{
		width:309upx;
		margin-left:328upx;
		height:213upx;
		top:40upx;
		background:red;
	}
	.course-info{
		z-index:2;
		border-radius:30upx 30upx 0 0;
		/* height:679upx; */
		padding:65upx 31upx 49upx 56upx;
	}
	.capsule {
       background-color: #316ED5;
       width: 45upx;
       height:20upx;
       border-radius: 20upx;
       margin-right: 0.4rem;
}
.circular {
 background:rgba(39,103,209,0.6);
  width:20upx;
  height: 20upx;
}
.not-know{
	width:219upx;
	height:42upx;
	line-height:42upx;
}
.number-study{
	width:127upx;
	height:42upx;
	line-height:42upx;
}
.course-detail{
  padding:35upx 45upx 35upx 45upx;	
}
.course-notice{
  padding:35upx 65upx 100upx 65upx;	
}
.icon-how{
	width:29upx;
	height:25upx;
	top:4upx;
}
.icon-time{
	width:29upx;
	height:29upx;
	top:4upx;
}
.icon-place{
	width:26upx;
	height:32upx;
	top:4upx;
	}
.icon-people{
	width:33upx;
	height:28upx;
	top:4upx;
	}
.sign-up-btn{
   height:100upx;
   background:linear-gradient(90deg,rgba(253,195,74,1) 0%,rgba(253,169,75,1) 54%,rgba(255,170,69,1) 100%);
    border-radius:50upx;
	line-height:100upx;
 }
 .img-wrapper-middle{
	 margin:30upx auto;
	 width:700upx;
	 height:340upx;
 }
</style>
