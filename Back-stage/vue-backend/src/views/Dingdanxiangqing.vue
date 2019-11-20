<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <el-button style="float: left; padding: 3px 0" type="text">
              <router-link to="/home/dingdanguanli">后退</router-link>
            </el-button>
            <span style="float:left;margin-left:30px;font-size:20px">订单详情</span>
        </div>
        <div class="box1" style="height:200px">
            <div class="box2">
                <el-tag style="float:left">支付方式</el-tag>
                <span>烧纸</span>
            </div>
            <div class="box2">
                <el-tag style="float:left">商品价格</el-tag>
                <span>8888元</span>
            </div>
            <div class="box2">
                <el-tag style="float:left">订单状态</el-tag>
                <span>已支付</span>
            </div>
            <div class="box2">
                <el-tag style="float:left">创建时间</el-tag>
                <span>2019年10月28日19:31:54</span>
            </div>
            <div class="box2">
                <el-tag style="float:left">订单人</el-tag>
                <span>太上老君</span>
            </div>
            <div class="box2">
                <el-tag style="float:left">订单号</el-tag>
                <span>13408488996</span>
            </div>
        </div>
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="商品名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品图片"
      width="180">
    </el-table-column>
     
    <el-table-column
      prop="address"
      label="商品信息">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价">
    </el-table-column>
    <el-table-column
      prop="number"
      label="数量">
    </el-table-column>
  </el-table>
    </el-card>
</template>
<style>
    img {
        height: 200px;
        float: left;
    }
    span{
        float: left;
        line-height: 35px;
        margin-left: 20px;
    }
    .box1 {
        width: 100%;
        height: 60px;
        border-bottom: gainsboro solid 1px;
        display: flex;
        flex-direction: column-reverse
    }
    .box2{
        width: 100%;
        height: 35px;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 300px;
        height: 700px;
    }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '笔记本本',
          name: '我是一个图片',
          address: '荣耀MagicBook 2019',
          price: '8888元',
          number: '1'
        }]
      }
    }
  }
</script>