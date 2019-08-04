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
    <div class="stuff">
      <div class="stuff_item" v-for="(item, index) in stuff" :key="index">
        <img class="item_img" :src="item.file[0].url" alt="">
        <p>{{item.stuffName}}</p>
        <p>{{item.stuffPrice}}</p>
      </div>
  </div>
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
      goods_class: [],
      banner: [],
      stuff: [],
      limit: 10,
      tp: '',
      page: 1,
      load: true,
      loading: true
    }
  },

  components: {
    Swiper, card
  },

  onReachBottom () {
    console.log('11111111111111111')
  },

  methods: {
    getData () {
      this.$http.get('/banner/getBanner', {}).then((d) => {
        if (d.data.success) {
          for (var i = 0; i < d.data.result.data.length; i++) {
            this.banner[i] = this.ideaURL + d.data.result.data[i].imgUrl
          }
          console.log(this.banner)
        }
      }).catch(err => {
        console.log(err.status, err.message)
      })

      //  获取分类
      this.$http.get('/category/getCategory', {}).then((d) => {
        if (d.data.success) {
          this.goods_class = d.data.result.data
        }
      }).catch(err => {
        console.log(err.status, err.message)
      })
      //  获取表单
      this.$http.get('/stuff/getStuff', {'sp': this.page}).then((d) => {
        console.log(d.data.result.data)
        if (d.data.success) {
          this.stuff = d.data.result.data
        }
        console.log(this.stuff)
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
  background-color: #ededed;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.search{
  margin: 0.2rem;
  width: 7.1rem;
  height: 0.7rem;
  background-color:white;
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
  overflow: auto;
  margin-top: 0.2rem;
  width: 7.5rem;
  padding-bottom: 0.2rem; 
  background-color:white;
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

.for_goods{
  margin-top: 0.3rem;
  text-align: center;
}
.stuff{
  margin-top: -0.25rem;
  width: 7.5rem;
}
.stuff_item{
  background-color:white;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  float: left;
  width: 3.45rem;
}
.item_img{
  padding-top: 0.2rem;
  padding-left: 0.15rem;
  width: 3rem;
  height: 3rem;
}
</style>
