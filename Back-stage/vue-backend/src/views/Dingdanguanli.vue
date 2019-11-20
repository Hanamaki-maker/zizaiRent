<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix" >
      <el-select v-model="value" placeholder="请选择" style="width:200px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="input" placeholder="订单号" style="width:250px"></el-input>
      <el-button type="primary" icon="el-icon-search" style="width:100px" @click="searchDingdanOne">搜索</el-button>
    </div>
    <el-table
    :data="tableData"
    border
    style="width: 900px">
    <el-table-column
      fixed
      prop="orderId"
      label="订单号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="recipient"
      label="租房用户"
      width="250">
    </el-table-column>
    <el-table-column
      prop="status"
      label="订单状态"
      width="100">
    </el-table-column>
    <el-table-column
      prop="allPrice"  
      label="支付总价"
      width="100">
    </el-table-column>
    <el-table-column
      prop="create_time"  
      label="创建时间"
      width="130">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">
            <router-link to="/home/dingdanxiangqing">查看详情</router-link>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
      <el-pagination layout="prev, pager, next" :total="50"
      @prev-click="prev"
      @next-click="next">
      </el-pagination>
  </div>
  </el-card>
</template>

<style>
  .text {
    font-size: 14px;
  }
  .block{
    margin-left: 0;
    margin-top: 0;
    position: relative;
    background: tomato;
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
    width: 900px !important;
    height: 500px;
  }
</style>


<script>
  import {getDingdan} from '../api/user'
  import {searchDingdan} from '../api/user'

  export default {
    methods: {
      searchDingdanOne(){
        console.log(this.value);
        console.log(this.input);
        
        if(this.value == 1){
          searchDingdan({
            type:"orderId",
            value:this.input,
            pageNum:1,
            pageSize:5
          }).then(({
            data
          }) => {
            console.log(data)
            this.tableData = data.data.list
          })
        }else{
          searchDingdan({
            type:"recipient",
            value:this.input,
            pageNum:1,
            pageSize:5
          }).then(({
            data
          }) => {
            console.log(data)
            this.tableData = data.data.list
          })
        }
      },
      prev(data){
         getDingdan({
        pageNum: data,
        pageSize: 6
      }).then(({
        data
      }) => {
        this.tableData = data.data.list
        console.log(data)
      })
      },
      next(data){
         getDingdan({
        pageNum: data,
        pageSize: 6
      }).then(({
        data
      }) => {
        this.tableData = data.data.list
        console.log(data)
      })
      },
    },
    
    mounted(){
      getDingdan({
        pageNum: 1,
        pageSize: 6
      }).then(({
        data
      }) => {
        this.tableData = data.data.list
        console.log(data)
      })
    },

    data() {
      return {
        options: [{
          value: 1,
          label: '按照订单号搜索'
        }, {
          value: 2,
          label: '按照租房用户搜索'
        }],
        value: 1,
        input: '',
        tableData: []
      }
      
    }
  }
</script>