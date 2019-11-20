<template>
  <el-card class="box-card" style="height: 940px">
    <div slot="header" class="clearfix">
      <el-button type="text" @click="dialogFormVisible = true">添加用户</el-button>

    </div>
    <el-table :data="tableData" border style="width: 750px">
      <el-table-column fixed prop="username" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="150">
      </el-table-column>
      <el-table-column prop="phone" label="电话" width="150">
      </el-table-column>
      <el-table-column prop="create_time" label="注册时间" width="120">
      </el-table-column>
      <el-table-column prop="role_id" label="权限角色" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="button" size="small" @click="delOne(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名：" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" :label-width="formLabelWidth">
          <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="手机号：" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item._id" :label="item.name" :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;addOne()">确 定</el-button>
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
    float: left;
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
    width: 800px !important;
  }
</style>

<script>
  import {
    del
  } from '../api/user'
  import {
    getAll
  } from '../api/user'
  import {
    addYonghu
  } from '../api/user'

  export default {
    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        form: {
          username: '',
          password: '',
          phone: '',
          email: '',
          role_id: '',
          type: [],
        },
        formLabelWidth: '120px',
        options: [],
        value: ''
      }

    },

    mounted() {
      getAll({
        pageNum: 1,
        pageSize: 5
      }).then(({
        data
      }) => {
        console.log(data)
        let roles = data.data.roles;
        this.tableData = data.data.list;
       this.options = roles.map((item) => {
          return {name:item.name,id:item._id}
        })

      })
    },

    methods: {
      prev(data){
        getAll({
        pageNum: data,
        pageSize: 5
      }).then(({
        data
      }) => {
        console.log(data)
        let roles = data.data.roles;
        this.tableData = data.data.list;
       this.options = roles.map((item) => {
          return {name:item.name,id:item._id}
        })
      })
      },
      next(data){
        getAll({
        pageNum: data,
        pageSize: 5
      }).then(({
        data
      }) => {
        console.log(data)
        let roles = data.data.roles;
        this.tableData = data.data.list;
       this.options = roles.map((item) => {
          return {name:item.name,id:item._id}
        })
      })
      },
      delOne(row) {
        del({
          userId: row._id,
        }).then(({
          data
        }) => {
          console.log(data);
          this.tableData = this.tableData.filter(itme => {
            return itme._id != row._id
          })
        })
      },
      addOne() {
        addYonghu({
          username: this.form.username,
          password: this.form.password,
          phone: this.form.phone,
          email: this.form.email,
          role_id: this.form.role_id,
        }).then((data) => {
          console.log(data)
        })
      }
    }

  }
</script>