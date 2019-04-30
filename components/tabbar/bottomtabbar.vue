<template>
	<view>  
	<view class='tab-bar bkg-white border-radius-big box-shadow-normal margin-top-middle to-fixed' v-if='tabarShow'>
			<!-- <view class='to-flex align-items-center font-size-small-small margin-left-big-big font-color-dark-grey' style='height:90upx;'>
				 <navigator url="/pages/index/index" redirect class='text-center' hover-class="other-navigator-hover">
				 <view class='text-center' >
					 <img :src="otherHome" class='tiny-icon-home' alt="">
					 <view>用户中心</view>
				 </view>
				 </navigator>
				 <navigator url="/pages/course/openCourse" class='text-center margin-left-super-big' redirect  hover-class="other-navigator-hover">
				 <view class='text-center' >
				 		 <img :src="otherStudent" class='tiny-icon-kk' alt="">
				 		<view>开课中</view>
				 </view>
				 </navigator>
				 <view class='text-center margin-left-big' @click='qrCode'>
				 	 <img :src="otherScanningGrey" class='tiny-icon-sm' alt="">
				 	 <view>扫码</view>
				 </view>	  
			 </view> -->
		</view>
		 <view class='to-fixed box-shadow-smaller tiny-icon-more tar-more'  @tap='tabarMenu'>
				 <img :src="otherMore" class='tiny-icon-more' alt="">
		</view>
	</view>
</template>

<script>
	import { IMG } from '@/static/imgs/img.js'
	export default {
		data() {
			return {
				tabarShow:false,
				otherHome:IMG.otherHome,
				otherScanningGrey:IMG.otherScanningGrey,
				otherStudent:IMG.otherStudent,
				personalPersonal:IMG.personalPersonal,
				otherMore:IMG.otherMore,
			};
		},
		methods:{
			tabarMenu(){
		      this.tabarShow = !this.tabarShow
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

<style scoped>
.tab-bar{
	width:568upx;
	height:90upx;
	
	right:0;
	bottom:90upx;
	z-index:998
}
.tar-more{
right:0;
bottom:90upx;
z-index:999
}
.tiny-icon-kk{
		width:34upx;
		height:34upx;
}
 .tiny-icon-sm{
	 width:36upx;
	 height:36upx;
 }
 .margin-left-super-big{
	 margin-left:71upx;
 }
  .margin-left-big{
 	 margin-left:94upx;
 }
</style>
