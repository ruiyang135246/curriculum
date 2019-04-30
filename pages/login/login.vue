<template>
	<view>
		 <view class='text-center login-compont to-fixed' >
			 <view style='margin-top:50%;'>
						 <view class='font-size-middle font-color-dark-grey '>如需正常使用小程序，请点击授权按钮</view>
				<button class="margin-auto margin-top-big" type="default" size="mini" open-type="getUserInfo" @getuserinfo="getUserinfo" withCredentials="true">授权登录</button>
			 </view>
		</view>
	</view>
</template>

<script>
	var _self,session_key,openid,pageOptions;
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getUserinfo:function(info){
				info = info.mp.detail.userInfo;
				console.log(info)
					uni.showToast({title: '登录成功',});
					uni.setStorageSync('SUID',info)
					// uni.setStorageSync('SRAND',res.data.u_radom + '')
					// uni.setStorageSync('SNAME',res.data.u_name + '')
					// uni.setStorageSync('SFACE',res.data.u_face + '')
					   // 跳转
				     	if(pageOptions.backtype == 1){
						uni.redirectTo({url: pageOptions.backpage+'?nickName='+info.nickName+'&avatarUrl'+info.avatarUrl});
					   }else{
						// uni.switchTab({url:pageOptions.backpage})
						uni.switchTab({url: pageOptions.backpage});
					   }
				// uni.request({
				// 	url:_self.apiServer+'member&m=login',
				// 	method:'POST',
				// 	header:{'content-type':'application/x-www-form-urlencoded'},
				// 	data:{
				// 		openid : openid,
				// 		name : info.nickName,
				// 		face : info.avatarUrl
				// 	},
				//     success : res =>{
				// 	uni.showToast({title: '登陆成功',});
				// 	uni.setStorageSync('SUID',res.data.u_id + '')
				// 	uni.setStorageSync('SRAND',res.data.u_radom + '')
				// 	uni.setStorageSync('SNAME',res.data.u_name + '')
				// 	uni.setStorageSync('SFACE',res.data.u_face + '')
				// 	   // 跳转
				//      	if(pageOptions.backtype == 1){
				// 		uni.redirectTo({url: pageOptions.backpage});
				// 	   }else{
				// 		uni.switchTab({url:pageOptions.backpage})
				// 	   }
				// 	}
				//    fail:(e)=>{
				//      	console.log(e)
				//     }
				// })
			}
		},
		onLoad:function (options) {
			pageOptions = options
			console.log(options)
			_self = this
			// #ifdef MP-WEIXIN
			 //   uni.login({
			 //   	success:function(res){
				// 	console.log(res)
				// 	uni.request({
				// 		url:_self.apiServer+'member&codeToSession&code='+res.code,
				// 		method:'GET',
				// 		success:res =>{
				// 			session_key = res.data.session_key,
				// 			openid = res.data.openid
				// 		}
				// 	})
				// }
			 //   })
			// #endif
		}
	}
</script>

<style scoped>
 .login-compont{
	 width:100%;
	 height:100%;
	 /* background:rgba(0,0,0,.6); */
	 z-index:2;
 }
</style>
