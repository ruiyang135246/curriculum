<template>
	<view class='padding-top-normal'>
		<!-- <cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">头像</block></cu-custom> -->
		<view class='box-shadow-small  margin-auto wrapper border-radius-bottom margin-bottom-smaller' @click='courseDetail'>
			<view class='course-type margin-auto wrapper'>	
			</view>
			<view class='course-bottom-info box-sizing font-color-grey-light font-size-small to-flex bkg-white align-items-center space-between wrapper margin-auto'>
				<view class=''>
				    <img :src="otherStudentGray" class='tiny-icon-people' alt="">
					<text >30人已报名 | 开课中</text>
				</view>
				<view>Bonnie老师</view>
			</view>
		</view>
		<view class='box-shadow-small  margin-auto wrapper border-radius-bottom margin-bottom-smaller'>
			<view class='course-type margin-auto wrapper'>
				
			</view>
			<view class='course-bottom-info box-sizing font-color-grey-light font-size-small to-flex bkg-white align-items-center space-between wrapper margin-auto'>
				<view class=''>
				    <img :src="otherStudentGray" class='tiny-icon-people' alt="">
					<text >30人已报名 | 开课中</text>
				</view>
				<view>Bonnie老师</view>
			</view>
		</view>
		 	 <!-- <bottomBar></bottomBar> -->
	</view>
</template>

<script>
	import { IMG } from '@/static/imgs/img.js'
	import bottomBar from "@/components/tabbar/bottomtabbar.vue"
	export default {
		components:{
			bottomBar
		},
		data(){
			return {
				otherStudentGray:IMG.otherStudentGray
			}
		},
		methods:{
			courseDetail(){
				uni.redirectTo({
					url:'/pages/course/infoCoure'
				})
			}
		},
		onLoad:function(){
			var loginRes = this.checkLogin('/pages/course/openCourse','2')
			if(!loginRes){return false}
		}
	}
</script>

<style scoped>
.course-type{
	height:308upx;
	border-radius:30upx 30upx 0 0;
	background:red;
}
.course-bottom-info{
	border-radius:0upx 0upx 20upx 20upx;
	padding:0 27upx;
	height:102upx
}
.tiny-icon-people{
	width:15upx;
	height:20upx;
	margin-right:13upx;
}
</style>
