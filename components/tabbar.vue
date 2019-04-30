<template>
	<view>  
	<view style='width:284px;height:45px;right:0;bottom:45px;' class='bkg-white border-radius-big box-shadow-normal margin-top-middle to-absolute' v-if='tabarShow'>
			 <view class='to-flex align-items-center font-size-small-small margin-left-big-big font-color-dark-grey' style='height:45px;' >
				 <view class='text-center' @tap='myStudent'>
					 <img :src="otherHome" class='tiny-icon-home' alt="">
					 <view>用户中心</view>
				 </view>
				  <view class='text-center margin-left-super-big' @tap='myStudent'>
				    <img :src="otherIncomesmall" class='tiny-icon-home' alt="">
				 	<view>我的学员</view>
				 </view>
				  <view class='text-center margin-left-super-big' @tap='myStudent'>
				    <img :src="otherIncomesmall" class='tiny-icon-home' alt="">
				 	<view>收益提现</view>
				 </view>
			 </view>
		</view>
		 <view class='to-fixed box-shadow-smaller tiny-icon-more' style='right:0;bottom:45px;' @tap='tabarMenu'>
				 <img :src="otherMore" class='tiny-icon-more' alt="">
		</view>
	</view>
</template>

<script>
	import { IMG } from '@/static/imgs/img.js'
	export default {
		data() {
			return {
				otherHome:IMG.otherHome,
				otherIncomesmall:IMG.otherIncomesmall,
				personalPersonal:IMG.personalPersonal,
				otherMore:IMG.otherMore,
			};
		},
		methods: {
		  tabarMenu(){
			  this.tabarShow = !this.tabarShow
		  },
		  myStudent(){
			uni.navigateTo({
		      url: '/pages/course/ucenter/students'
		     });
		  }
		},
		props:{
			tabarShow:{
				type:Boolean,
				default: true
			}
		}
	}
</script>

<style>

</style>
