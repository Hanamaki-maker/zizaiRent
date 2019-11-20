<template>
  <el-card class="box-card" style="height: 890px">
    <div slot="header" class="clearfix">
      <el-select style="width:200px" v-model="value">
        <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="请输入内容" style="width:250px" v-model="text"></el-input>
      <el-button type="primary" icon="el-icon-search" style="width:100px" @click="searchShangpinOne()">搜索</el-button>
      <el-button style="float: right; padding: 3px 0" type="text">
        <router-link to="/home/tianjiashangpin">添加商品</router-link>
      </el-button>
    </div>
    <el-table :data="tableDate" border style="width: 770px">
      <el-table-column fixed prop="name" label="房屋名称" width="150">
      </el-table-column>
      <el-table-column prop="desc" label="房屋描述" width="300">
      </el-table-column>
      <el-table-column prop="price" label="月租价格" width="100">
      </el-table-column>
      <el-table-column label="出租状态" width="100">
        <el-button type="text" size="small">上架</el-button>
        <span>上架</span>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            <router-link to="/home/shangpinxiangqing">查看详情</router-link>
          </el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50" @prev-click="prev" @next-click="next">
      </el-pagination>
    </div>
  </el-card>
</template>

<style>
  .text {
    font-size: 14px;
  }

  .block {
    position: absolute;
    margin-top: 350px;
    margin-left: 200px;
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
    width: 800px;
    height: 500px;
  }
</style>


<script>
  import {
    getShangpin
  } from '../api/user'
  import {
    searchShangpin
  } from '../api/user'

  export default {

    data() {
      return {
        option: [{
          value: 1,
          label: '按照名称搜索'

        }, {
          value: 2,
          label: '按照描述搜索'
        }],
        text: "",
        value: 1,
        tableDate: []

      }
    },

    methods: {
      searchShangpinOne() {
        if (this.value == 1) {
          searchShangpin({
            pageNum: 1,
            pageSize: 5,
            productName: this.text
          }).then(({
            data
          }) => {
            console.log(data)
            this.tableDate = data.data.list
          })
        } else {
          searchShangpin({
            pageNum: 1,
            pageSize: 5,
            productDesc: this.text
          }).then(({
            data
          }) => {
            console.log(data)
            this.tableDate = data.data.list
          })
        }
      },
      prev(data) {
        getShangpin({
          pageNum: data,
          pageSize: 5
        }).then(({
          data
        }) => {
          this.tableDate = data.data.list
        })
      },
      next(data) {
        getShangpin({
          pageNum: data,
          pageSize: 5
        }).then(({
          data
        }) => {
          this.tableDate = data.data.list
        })
      },
    },

    mounted() {
      getShangpin({
        pageNum: 1,
        pageSize: 5
      }).then(({
        data
      }) => {
        this.tableDate = data.data.list
      })
    },


  }
</script>