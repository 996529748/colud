<template>
    <div class="vue-main-right">
            <!--添加成员按钮-->
            <div class="vue-main-right-item1">
                <div class="vue-add">
                    <span class="vue-add-btn" href="">添加成员</span>
                    <i class="vue-add-img">
                        <div class="vue-main-right-hover hover">
                            <h3>添加成员</h3>
                            <p>添加成员成功后，该成员</p>
                            <p>会收到福昕云办公下发的</p>
                            <p>激活邮件和激活短信，根</p>
                            <p>据指引完成激活后，可以</p>
                            <p>使用;</p>
                        </div>
                    </i>                    
                    <!--搜索-->
                    <div class="vue-search">
                        <input class="vue-search-input" placeholder="搜索账号" type="text" />
                        <span class="vue-search-btn">搜索</span>
                    </div>
                </div>
            </div>
        </div>
</template>
<style scoped>
i{ font-style:normal}
.vue-add{
    margin-top: 75px;
    position: relative;
    font-family: '微软雅黑';
    padding-left: 245px;
}
.vue-add-btn{
    display: block;
    width: 90px;
    height: 36px;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    cursor: pointer;
    float: left;
    background-color: #06c;
    line-height: 36px;
    color: #FFFFFF;
}
.vue-add-btn:hover{
    background: #0081e8;
}
.vue-add-img{
    background-image: url(../assets/u2.png);
    margin-left: 7px;
    cursor: pointer;
    left: 41px;
    padding-left: 21px;
    line-height: 35px;
    cursor: pointer;
}
.hover{
    display: none;
    width: 200px;
    height: 220px;
    border: 1px solid #bbb;
    box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    position: absolute;
    top: 30px;
    z-index: 99999;
    background-color: #FFFFFF;
    left: 355px;
}
.vue-add-img:hover .hover{
    display: block;
    width: 200px;
    height: 220px;
    border: 1px solid #bbb;
    box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    position: absolute;
    left: 355px;
    top: 30px;
    z-index: 99999;
    background-color: #FFFFFF;
}
.vue-add .vue-main-right-hover h3{
    margin: 10px 0px 0px 15px;
    font-size: 16px;
    font-family: '微软雅黑';
    font-weight: 500;
}
.vue-main-right-hover p{
    font-size: 14px;
    color: #666;
    text-indent: 15px;
    font-family: '微软雅黑';
    margin: 0px 0px;
    height: 28px;
}
/*搜索*/
.vue-search{
    float: right;
    border: 1px solid #d3d3d3;
    width: 250px;
}
.vue-search-input{
    width: 172px;
    height: 36px;
    line-height: 36px;
    border: none;
    border-radius: 3px;
    outline: 0;
    text-indent: 10px;
    font-size: 14px;
    font-family: "微软雅黑";
}
.vue-search-btn{
    display: inline-block;
    width: 70px;
    height: 36px;
    font-size: 13px;
    text-align: center;
    line-height: 36px;
    background: #f5f5f5;
    cursor: pointer;
    color: #333;
    font-family: '微软雅黑';
}
</style>
