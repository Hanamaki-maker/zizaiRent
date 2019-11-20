<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <el-button style="float: left; padding: 3px 0" type="text">
                <router-link to="/home/shangpinguanli">后退</router-link>
            </el-button>
            <span>添加新的房源信息</span>
        </div>
        <el-form ref="form" v-model="form" label-width="80px">
            <el-form-item label="房屋名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="房屋描述">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="月租价格">
                <el-input placeholder="请输入内容" v-model="form.price">
                    <template slot="append">元</template>
                </el-input>
            </el-form-item>
            <el-form-item label="地区分类">
                <el-select v-model="form.categoryId" placeholder="请选择">
                    <el-option v-for="item in kind" :key="item._id" :label="item.name" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="房屋图片">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" v-model="form.imgs"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addShangpinOne()">
                    <router-link to="/home/shangpinguanli">确认提交</router-link>
                </el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    import {
        getPinlei
    } from "../api/user";
    import {
        addShangpin
    } from "../api/user";

    export default {
        data() {
            return {
                form: {
                    name: "",
                    delivery: false,
                    desc: "",
                    price: "",
                    categoryId: "",
                },
                kind: [],
                imageUrl: ''
            };
        },
        methods: {
            addShangpinOne(){
                addShangpin({
                    categoryId:this.form.categoryId,
                    pCategoryId:0,
                    name:this.form.name,
                    desc:this.form.desc,
                    price:this.form.price,
                    detail:"",
                    imgs:this.form.imgs
                }).then(({data})=>{
                    console.log(data)
                })
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },
        mounted() {
            getPinlei({
                parentId: 0,
                pageNum: 1,
                pageSize: 15
            }).then(({
                data
            }) => {
                this.kind = data.data.list
            });
        }
    };
</script>


<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }

    .box-card {
        width: 480px;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>