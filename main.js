import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false
Vue.prototype.checkLogin = function(backpage,backtype){
	var SUID = uni.getStorageInfoSync('SUID')
	var SRAND = uni.getStorageInfoSync('SRAND')
	var SNAME = uni.getStorageInfoSync('SNAME')
	var SFACE = uni.getStorageInfoSync('SFACE')
	if(SUID.keys == ''|| SRAND == '' || SFACE == ''){
		uni.redirectTo({
			url:'/pages/login/login?backpage='+backpage+'&backtype='+backtype
		})
		return false
	}
	return [SUID , SRAND , SNAME , SFACE ]
}
var APITOKEN = 'api2018';
Vue.prototype.apiServer = 'http://192.168.31.188/index.php?token='+APITOKEN+'&c=';
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
