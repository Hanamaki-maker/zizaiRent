<template>
  <el-card class="box-card" style="height: 940px">
    <div slot="header" class="clearfix" >
      <span style="color:blue" @click="backPinlei">省级房源分类列表</span>
      <el-button type="text" @click="dialogFormVisible = true">添加分类</el-button>
    </div>
    <el-table :data="tableData" border style="width: 700px">
      <el-table-column fixed prop="name" label="省级房源分类" width="580">
      </el-table-column>
      <el-table-column fixed="right" label="操作选项" width="100" >
        <template slot-scope="scope">
          <el-button @click="getPinleiOne(scope.row)" type="text" size="small">查看子分类</el-button>
          <el-button type="text" @click="dialogFormVisible_2 = true">修改分类</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50"
      @prev-click="prev"
      @next-click="next">
      </el-pagination>
    </div>
    <el-dialog title="在当前类添加分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;addPinleiOne()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改分类" :visible.sync="dialogFormVisible_2">
  <el-form :model="form_2">
    <el-form-item label="请输入新的分类" :label-width="formLabelWidth">
      <el-input v-model="form_2.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible_2 = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible_2 = false;changePinleiOne()">确 定</el-button>
  </div>
</el-dialog>
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
    height: 1000px;
  }
</style>

<script>
  import {
    getPinlei
  } from '../api/user'
  import {
    addPinlei
  } from '../api/user'
    import {
    changePinlei
  } from '../api/user'

  export default {
    methods: {
      prev(data){
        getPinlei({
          parentId: this.nowList._id,
          pageNum: data,
          pageSize: 5
        }).then(({
          data
        }) => {
          console.log(data)
          this.tableData = data.data.list;
          this.tableData.map((item) => {
            return {
              name: item.name
            }
          })
        })
      },
      next(data){
        getPinlei({
          parentId: this.nowList._id,
          pageNum: data,
          pageSize: 5
        }).then(({
          data
        }) => {
          console.log(data)
          this.tableData = data.data.list;
          this.tableData.map((item) => {
            return {
              name: item.name
            }
          })
        })
      },
      getPinleiOne(row) {
        this.nowList=row;
        getPinlei({
          parentId: row._id,
          pageNum: 1,
          pageSize: 5
        }).then(({
          data
        }) => {
          console.log(data)
          this.tableData = data.data.list;
          this.tableData.map((item) => {
            return {
              name: item.name
            }
          })
        })
      },
      backPinlei() {
        getPinlei({
          parentId: 0,
          pageNum: 1,
          pageSize: 5
        }).then(({
          data
        }) => {
          console.log(data)
          this.tableData = data.data.list;
          this.tableData.map((item) => {
            return {
              name: item.name
            }
          })
        })
      },
      addPinleiOne() {
        if(this.nowList.parentId){
          addPinlei({
            parentId:this.nowList._id,
            categoryName:this.form.name
        }).then(({data}) => {
          console.log(data)
        })
        }else{
          addPinlei({
            parentId:0,
            categoryName:this.form.name
        }).then(({data}) => {
          console.log(data)
        })
        }
      },
      changePinleiOne(){
        changePinlei({
          categoryId:this.nowList._id,
          categoryName:this.form_2.name
        }).then(({data}) => {
          console.log(data)
        })
      }


    },

    data() {
      return {
        tableData: [],
        nowList:{},
        dialogFormVisible: false,
        dialogFormVisible_2: false,
        form: {
          name: '',
          delivery: false,
        },
        form_2: {
          name: '',
          delivery: false,
        },
        formLabelWidth: '120px'
      }
    },

    mounted() {
      getPinlei({
        parentId: 0,
        pageNum: 1,
        pageSize: 5
      }).then(({
        data
      }) => {
        console.log(data)
        this.tableData = data.data.list;
        this.tableData.map((item) => {
          return {
            name: item.name
          }
        })
      })
    },
  }
</script>