<template>
  <view>  
  <view>
     <view class='to-relative'>
	  		<view class='bkg-cornflower-blue padding-top-big-big user-msg-box'>
	  			  <view class='to-flex margin-left-big-big-sub align-items-center'>
	  				  <view class='avatar-img-box'>
	  					 <img :src="avatar"  class='restrict-img-width' alt=""> 
	  				  </view>
	  				  <view class='margin-left-middle font-color'>
	  					   <view>{{nickname}}</view>
	  					   <view class='margin-top-small font-size-small'>
	  						    <text class='' >
	  								188****9022
	  						   </text>
	  					   </view>
	  				  </view>
	  				  <view class='to-absolute settings-style' style=''>
	  					  <img :src="otherChange" class='tiny-icon-change' alt="">
	  				  </view>
	  			  </view>
	  		</view>
	  		 <view style='width:100%;height:300upx;border-radius:80upx 80upx 0 0;top:380upx;' class='wrap-width margin-auto to-absolute z-index2 bkg-white'>
	  			<view style='height:270upx;top:-140upx;padding-top:75upx' class='transformx margin-auto wrapper to-absolute border-radius-small z-index3 box-shadow-small box-sizing  bkg-white'>
	  				<view style='height:132upx;' class='to-flex   font-size-middle'>
						<navigator url="/pages/course/openCourse" class='text-center border-right classification' >
	  						<img :src="otherStudying" class='tiny-icon margin-bottom-small' alt="">
	  						 <view>开课中</view>
						</navigator>
	  					<view  class='text-center classification' @click='qrCode'>
	  						  <img :src="otherScanning" class='tiny-icon margin-bottom-small' alt="">
	  						  <view> 扫码签到</view>
	  					</view>
	  				</view>
	  			</view>
				<view class='wrapper margin-auto ' style='margin-top:160upx;'>
					 <view class='font-size-big margin-top-big-bigger padding-left-super-small font-weight-bold'>课程列表</view>
					 	<view class='margin-top-normal to-flex align-items-center course-bkg' @click='numberCourse' >
					 		<view style='' class='course-img'>
					 			<img :src="numberNumber" class='restrict-img-width' alt="">
					 		</view>
					 		<view class='margin-left-big' >
					 			<view class='font-weight-bold font-size-big margin-bottom-small'>2019数字精品课程</view>
					 			<view class='font-size-smaller '>2019.03.02，剩余2个名额</view>
					 		</view>
					 	</view>
					 	<view class='margin-top-normal to-flex align-items-center course-bkg'>
					 		<view  class='course-img'>
					 			<img :src="personalPersonal" class='restrict-img-width' alt="">
					 		</view>
					 		<view class='margin-left-big'>
					 			<view class='font-weight-bold font-size-big margin-bottom-small'>2019个案咨询</view>
					 			<view class='font-size-smaller '>可预约</view>
					 		</view>
					 	</view>
					 </view>	
				</view>
	  	   </view>
	  	 <!-- <bottomBar></bottomBar> -->
	</view>
</view>
</template>
 
<script>
	// import { mapState } from 'vuex';  
	import bottomBar from "@/components/tabbar/bottomtabbar.vue"
	import { IMG } from '@/static/imgs/img.js'
	export default {
		components:{
			bottomBar
		},
		data() {
			return {
				TabCur:0,
				scrollLeft: 0,
				titleInfo:[
					'学员信息',
					'课程信息',
				],
				avatar:'',
				nickname:'小胖子就是我',
				tabarShow:true,
				otherStudying:IMG.otherStudying,
				otherChange:IMG.otherChange,
				otherScanning:IMG.otherScanning,
				otherHome:IMG.otherHome,
				otherIncomesmall:IMG.otherIncomesmall,
				personalPersonal:IMG.personalPersonal,
				otherMore:IMG.otherMore,
				numberNumber:IMG.numberNumber,
			}
		},
	  onLoad(options){
	   var loginRes = this.checkLogin('/pages/index/index','2')
	   if(!loginRes){return false}
	   // console.log(options)
	  },
	methods: {
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
		},
		numberCourse(){
			uni.redirectTo({
				url:'/pages/course/numberCourse'
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
     }
	}
</script>

<style scped>

.user-msg-box{
 height:400upx;
}
 .course-img{
	 width:255upx;
	 height:170upx;
 }
 .settings-style{
	 right:56upx;
	 top:86upx;
	 width:30upx;
	 height:34upx;
 }
 .course-bkg{
	 height:170upx;
 }
 .bottom-tabar{
	 width:568upx;
	 height:90upx;
	 right:0;
	 bottom:90upx;
 }
 .bottom-nav{
     height:90upx;
 }
 .more-btn{
	 right:0;
	 bottom:90upx;
 }
 .student-width{
	 width:60upx;
 }
</style>
