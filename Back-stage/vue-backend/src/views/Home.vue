<template>
    <div id="home">
        <el-container style="height: 1050px">
            <el-aside width="200px" style="background: gray;color: white;height: 1050px">
                <div class="logo"></div>
                <div class="shouye" >首页</div>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="商品" name="1">
                        <div class="item"><router-link to="/home/pinleiguanli">房源种类管理</router-link></div>
                        <div class="item"><router-link to="/home/shangpinguanli">房屋信息管理</router-link> </div>
                    </el-collapse-item>
                    <el-collapse-item title="用户" name="2">
                        <div class="item"><router-link to="/home/yonghuguanli">客户信息管理</router-link></div>
                        <div class="item"><router-link to="/home/quanxianguanli">客户权限管理</router-link></div>
                    </el-collapse-item>
                    <el-collapse-item title="订单" name="3">
                        <div class="item"><router-link to="/home/dingdanguanli">客户订单管理</router-link></div>
                    </el-collapse-item>
                </el-collapse>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="demo-type">
                        <div style="float: right;">
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                            </el-avatar>
                        </div>
                    </div>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="less">
    #home {
        height: 1000px;
        .logo {
            height: 60px;
            background: #333;
        }

        .shouye {
            height: 60px;
            line-height: 60px;
            text-align: center;
        }

        .item {
            line-height: 50px;
        }

        .el-header,
        .el-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }

        .el-aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
            height: 800px;
        }

        .el-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
        }

        body>.el-container {
            margin-bottom: 40px;
        }

        .el-container:nth-child(5) .el-aside,
        .el-container:nth-child(6) .el-aside {
            line-height: 260px;
        }

        .el-container:nth-child(7) .el-aside {
            line-height: 320px;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                activeNames: ['1']
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>