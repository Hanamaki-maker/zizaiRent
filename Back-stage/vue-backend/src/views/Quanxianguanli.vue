<template>
  <el-card class="box-card" style="height: 890px">
    <div slot="header" class="clearfix">
      <el-row>
        <el-button type="text" @click="dialogFormVisible = true">创建角色</el-button>
      </el-row>
    </div>
    <el-table :data="tableData" border style="width: 750px">
      <el-table-column fixed prop="name" label="角色名称" width="120">
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="auth_time" label="授权时间" width="180">
      </el-table-column>
      <el-table-column prop="auth_name" label="授权人" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <el-row>
          <el-button>设置权限</el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="请输入角色名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;addQuanxianOne()">确 定</el-button>
      </div>
    </el-dialog>
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


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 700px;
  }
</style>

<script>
  import {
    getQuanxian
  } from '../api/user'
  import {
    addQuanxian
  } from '../api/user'

  export default {
    methods: {
      prev(data){
        getQuanxian({
        pageNum: data,
        pageSize: 8
      }).then(({
        data
      }) => {
        this.tableData = data.data.list
      })
      },
      next(data){
        getQuanxian({
        pageNum: data,
        pageSize: 8
      }).then(({
        data
      }) => {
        this.tableData = data.data.list
      })
      },
      addQuanxianOne() {
        addQuanxian({
          roleName: this.form.name
        }).then(({
          data
        }) => {
          console.log(data)
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {
      getQuanxian({
        pageNum: 1,
        pageSize: 8
      }).then(({
        data
      }) => {
        this.tableData = data.data.list
      })
    },

    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        form: {
          name: '',
          delivery: false,
        },
        formLabelWidth: '120px',
        currentPage3: 5,
      }
    }
  }
</script>