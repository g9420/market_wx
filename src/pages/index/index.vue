<template>
  <div class="index">
    <div class="search" @click="clickSearch">
    <span class="top-span"></span>
    <input class="top-input" type="text" placeholder="请输入关键字" />
    </div>
    <div class="swiper">
    <Swiper :images="banner"></Swiper>
    </div>
    <div class="goods_class">
      <div class="class_item" v-for="(item, index) in goods_class" :key="index">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="hr_top"></div>
    <div class="div_hr">
    </div>
    <div class="for_goods">为你推荐</div>
  </div>
</template>

<script>
import Swiper from '@/components/swiper'
import card from '@/components/card'

export default {

  mounted () {
    this.getData()
  },

  data () {
    return {
      motto: 'Hello miniprograme',
      goods_class: [],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      banner: []
    }
  },

  components: {
    Swiper, card
  },

  methods: {
    getData () {
      this.$http.get('/banner/getBanner', {}).then((d) => {
        if (d.data.success) {
          for (var i = 0; i < d.data.result.data.length; i++) {
            this.banner[i] = this.ideaURL + d.data.result.data[i].url
          }
          console.log(this.banner)
        }
      }).catch(err => {
        console.log(err.status, err.message)
      })
      this.$http.get('/goodsClass/getGoodsClass', {}).then((d) => {
        if (d.data.success) {
          this.goods_class = d.data.result.data
        }
      }).catch(err => {
        console.log(err.status, err.message)
      })
    },
     
     clickSearch () {
      wx.navigateTo({
        url: '/pages/search/main'
      })
    }

  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

.index{
  width: 100%;
  overflow: hidden;
  position: relative;
}

.search{
  margin: 0.2rem;
  width: 7.1rem;
  height: 0.7rem;
  background-color: #ededed;
  border-radius:35rpx;
}

.top-span{
  display: inline-block;
  margin-left: 15rpx;
  margin-bottom: 11rpx;
  width: 50rpx;
  height: 50rpx;
  background: url("../../../static/images/search.png");
  background-size: 100%
}

.top-input {
  height: 0.7rem;
  line-height: 0.35rem;
  display: inline-block;
  margin-left: 0.1rem;
  width: 6.1rem;
}

.swiper{
  width: 7.5rem;
  height: 4.21rem;
}

.goods_class{
  margin-top: 0.2rem;
  width: 7.5rem;
}

.class_item{
  text-align: center;
  float: left;
  width: 2.5rem;
  margin-top: 0.2rem;
}

.hr_top{
  clear: both;
  width: 7.5rem;
  height: 0.4rem;
}

.div_hr{
  clear: both;
  width: 7.5rem;
  height: 0.5rem;
  background-color: #ededed;
}

.for_goods{
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  text-align: center;
}

</style>
