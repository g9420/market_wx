import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

Vue.prototype.ideaURL = 'http://192.168.1.104:8088/'

var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
//  配置请求基地址
fly.config.baseURL = 'http://192.168.1.104:8088/'
Vue.prototype.$http = fly
