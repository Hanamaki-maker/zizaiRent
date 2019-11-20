<template>
    <el-card class="box-card" >
        <div slot="header" class="clearfix">
            <el-button style="float: left; padding: 3px 0" type="text">
                <router-link to="/home/shangpinguanli">后退</router-link>
            </el-button>
            <span style="float:left;margin-left:30px;font-size:20px">商品详情</span>
        </div>
        <div class="box1">
            <el-tag style="float:left">商品名称</el-tag>
            <span style="float:left;margin-left:30px">荣耀MagicBook 2019</span>
        </div>
        <div class="box1">
            <el-tag style="float:left">商品描述</el-tag>
            <span style="float:left;margin-left:30px">14英寸轻薄窄边框笔记本电脑（AMD锐龙5 3500U 8G 512G FHD IPS 指纹解锁）冰河银
                2019版性能新升级</span>
        </div>
        <div class="box1">
            <el-tag style="float:left">商品价格</el-tag>
            <span style="float:left;margin-left:30px">8888元</span>
        </div>
        <div class="box1">
            <el-tag style="float:left">所属分类</el-tag>
            <span style="float:left;margin-left:30px">你买不起的那一类</span>
        </div>
        <div class="box1" style="height:200px">
            <el-tag style="float:left">商品图片</el-tag>
            <img src="http://118.24.25.7:5000/upload/image-1565159368065.jpg">
        </div>
        <el-tag style="float:left">商品详情</el-tag>
        <div style="height:500px;width:700px">
            品牌： 华为（HUAWEI）
            商品名称：华为荣耀MagicBook 2019
            商品编号：100002928171
            商品毛重：2.1kg
            商品产地：中国大陆
            系统：Windows 10
            厚度：15.1mm—18.0mm
            内存容量：8GB
            游戏性能：入门级
            待机时长：9小时以上
            系列：华为-荣耀MagicBook
            裸机重量：1-1.5KG
            显卡类别：集成显卡
            屏幕尺寸：14.0英寸
            显卡型号：其他
            色系：银色系
            特性：背光键盘，指纹识别，PCIE高速固态硬盘，快充，Type-c接口
            处理器：锐龙 5
            分辨率：全高清屏（1920×1080）
            优选服务：两年质保
            分类：轻薄本
            机身材质：金属材质
            硬盘容量：512G PCIe 
        </div>
    </el-card>
</template>
<style>
    img {
        height: 150px;
        width: 200px;
    }

    .box1 {
        width: 100%;
        height: 60px;
        border-bottom: gainsboro solid 1px;
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