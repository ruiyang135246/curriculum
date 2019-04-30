<template>
	<view class='padding-top-litter-big wrapper margin-auto'>
		<view class='course-info-detail margin-bottom-normal'>
			
		</view>
		<view class='bkg-white margin-top-middle box-shadow-normal border-radius-light-small'>
			  <scroll-view scroll-x class="bg-white nav nav-size box-shadow-normal bkg-white border-radius-light-small" scroll-with-animation :scroll-left="scrollLeft">
					   	<view class="cu-item text-center " style='margin-right:50upx;' :class="index==TabCur?'text-light-blue cur':''" v-for="(item,index) in titleInfo" :key="index" @tap="tabSelect" :data-id="index">
					       {{item}}
					   </view>
			  </scroll-view>
			   <scroll-view scroll-y class="student-info nav wrapper box-shadow-normal border-radius-light-small" v-if='TabCur==0'>
			  				<view class='to-flex border-bottom-light-grey padding-bottom-litter-big box-sizing padding-right-sup-big padding-top-litter-big'>
								<view class='margin-right-big student-img-box-middle'>
									<img :src="numberTeacher" alt="" class='restrict-img-width'>
								</view>
								<view>
									<view class='font-color-light-black font-size-normal'>
										<text class='margin-right-small'>002</text>
										<text>张三</text>
									</view>
									<view class='font-size-smaller font-color-grey-light margin-top-small'>1886565645</view>
								</view>
								<view class='flex1 text-right'>
									<view class="">
										<img :src="otherUnsign" alt="" class='tiny-icon-unsign margin-right-small to-relative'>
										<text class='font-color-grey-light font-size-normal'>未签到</text>
									</view>
									<!-- <view v-if='isActive' class='font-size-smaller font-color-grey-light margin-top-small padding-right-sup-small'>14:22</view> -->
								</view>
							</view>
							<view class='to-flex border-bottom-light-grey padding-bottom-litter-big box-sizing padding-right-sup-big padding-top-litter-big'>
								<view class='margin-right-big student-img-box-middle'>
									<img :src="numberTeacher" alt="" class='restrict-img-width'>
								</view>
								<view>
									<view class='font-color-light-black font-size-normal'>
										<text class='margin-right-small'>002</text>
										<text>张三</text>
									</view>
									<view class='font-size-smaller font-color-grey-light margin-top-small'>1886565645</view>
								</view>
								<view class='flex1 text-right'>
									<view class="">
										<img :src="isActive?otherSign:otherUnsign" alt="" class='tiny-icon-unsign margin-right-small to-relative'>
										<text class='font-color-grey-light font-size-normal' :class='computedClassStr'>已签到</text>
									</view>
									<view v-if='isActive' class='font-size-smaller font-color-grey-light margin-top-small padding-right-sup-small'>14:22</view>
								</view>
							</view>
			  </scroll-view>
			   <scroll-view scroll-y class="course-info-del box-sizing nav wrapper box-shadow-normal border-radius-light-small" v-if='TabCur==1'>
			  			<view class='margin-bottom-much-bigger '>
							<view class='to-flex align-items-center course-title'>
								<img :src="homeTime" class='tiny-icon-time margin-right-small' alt="">
								<view class='font-color-dark-grey font-size-litter-big font-weight-bold'>上课时间</view>
							</view>
							<view class='font-size-litter-big course-time box-sizing margin-top-middle'>
								<view class='font-color-black-light '>2019-04-11-2019-04-12</view>
								<view class='font-color-black-light '>2019-04-11-2019-04-12</view>
							</view>
						</view>
						<view class='margin-bottom-much-bigger'>
							<view class='to-flex align-items-center course-title'>
								<img :src="homePlace" class='tiny-icon-place margin-right-small' alt="">
								<view class='font-color-dark-grey font-size-litter-big font-weight-bold'>上课地点</view>
							</view>
							<view class='font-size-litter-big course-time box-sizing margin-top-middle'>
								<view class='font-color-black-light white-space'>杭州市紫荆花北路121212112号</view>
							</view>
						</view>
			  </scroll-view>
		</view>
	   <!-- <bottomBar></bottomBar> -->
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
		computed:{
		    computedClassStr () {
                return this.isActive ? 'font-color-active' : ''
            },
		},
		data() {
			return {
				TabCur:0,
				scrollLeft: 0,
				titleInfo:[
					'学员信息',
					'课程信息',
				],
				tabarShow:true,
				homeTime:IMG.homeTime,
				homePlace:IMG.homePlace,
				otherUnsign:IMG.otherUnsign,
				numberTeacher:IMG.numberTeacher,
				otherSign:IMG.otherSign,
				isActive:true
		
			}
		},
	methods: {
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
		}
     }
}
</script>

<style scoped>
.nav-size{
	height:90upx;
	/* line-height: 70upx; */
}
.student-info{
	padding-bottom:73upx;
	padding-left:41upx;
	padding-top:13upx;
}
.course-info-detail{
 height:308upx;
 border-radius:30upx;
 background:red;
}
.text-light-blue{
 color:#0088FF;
}
.course-info-del{
	padding-left:18upx;
	padding-top:30upx;
	padding-bottom:250upx;
}
.course-title{
	height:57upx;
}
.course-time{
	padding-left:43upx;
	line-height:50upx;
}
.tiny-icon-time{
	width:29upx;
	height:29upx;
}
.tiny-icon-place{
	width:26upx;
	height:32upx;
}
.tiny-icon-unsign{
	width:26upx;
	height:26upx;
	top:4upx;
}
.font-color-active{
	color:#FFAE77;
}
</style>
