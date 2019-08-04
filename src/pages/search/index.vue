    <template>
  <div class="search">
    <div>
      <van-search value=" " placeholder="请输入搜索关键词" use-action-slot bind:search="onSearch">
        <view slot="action" bind:tap="onSearch">搜索</view>
      </van-search>
    </div>
    <div class="but" @click="usetype">
      <van-button plain type="primary">常用分类</van-button>
    </div>

 
  </div>
</template>

<script>
export default {
  data: {
    show: false
  },
  onClose() {
    this.setData({ show: false })
  },
};
</script>



<style scoped>
.but {
  margin-left: 45px;
}
</style>
   