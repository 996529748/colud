<template>
  <div class="account">
    <div class="account-item1">
      <h1>账号信息</h1>
      <a v-on:click="changeClass()">修改</a>
    </div>
    <form class="user_submit" novalidate="novalidate">
      <div class="account-item2">
        <ul class="account-item2-2">
          <li class="item-2-1 item-2-1-id">ID：
            <input class="input1" type="text" disabled="disabled" :value="dataob.userId">
          </li>
          <li class="item-2-2">账号：
            <input class="input2" type="text" disabled="disabled" :value="dataob.userName">
          </li>
          <li class="item-2-3">姓名：
            <input ref="nickname" class="input-3 admin-input admin-input1" v-bind:class="[change?'border':'']" id="name" name="name" type="text" :value="dataob.nickName">
          </li>
          <li class="item-2-4">邮箱：
            <input ref="email" class="input-4 admin-input admin-input2" v-bind:class="[change?'border':'']" id="email" name="email" type="text" :value="dataob.email">
          </li>
          <li class="item-2-5">手机：
            <input ref="tel" class="input-5 admin-input admin-input3" v-bind:class="[change?'border':'']" id="tel" name="tel" type="text" :value="dataob.tel">
          </li>
          <li class="account-item2-6" v-bind:class="[change?'':'none']">
            <div class="Preservation-1" v-on:click="save()">保存</div>
            <div class="cancel-1" v-on:click="cancel()">取消</div>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      change: false,
      dataob:{ },
      a:{}
    };
  },
  created() {
    var that = this;
    this.$http.jsonp('http://vip.foxitreader.cn/enterprise/getEnterpriseUser',{jsonp:"jsonpcallback"}).then(function(response){
        that.dataob= response.data.data;
        console.log(that.dataob);
    },function(){
        console.log('请求失败处理');
    })    
  },
  methods: {
    changeClass() {
      this.change = true;
      //获取新数据
      var nickname=this.$refs.nickname.value;
      var email=this.$refs.email.value;
      var tel=this.$refs.tel.value;
    }, 
    save(username,nickname,email,tel) {
      var that = this;
      this.change = false;
      //获取input修改后的值
      var nickname=this.$refs.nickname.value;
      var email=this.$refs.email.value;
      var tel=this.$refs.tel.value;
      // 修改数据的ajax
      var sendDate={"nickName":nickname,"email":email,"tel":tel};//传参
      this.$http.jsonp('http://vip.foxitreader.cn/enterprise/updateEnterpriseUser',{jsonp:"jsonpcallback",params:sendDate}).then(function(response){
          that.a= response.data;
          console.log(response.data);
          this.$refs.nickname.value=nickname;
          this.$refs.email.value=email;
          this.$refs.tel.value=tel;
      },function(){
          console.log('请求失败处理');
      })
    },
    cancel() {
      this.change = false;
    }
  }
};
</script>
<style scoped src="../css/globals.css"></style>
<style scoped>
.none {
  display: none;
}
/*管理员账号*/
.account {
  padding-left: 245px;
}
.account-item1 {
  margin-top: 75px;
  height: 50px;
  border-bottom: 1px solid #d7d7d7;
  font-family: "微软雅黑";
}
.account-item1 > h1,
.account-item1 > a {
  float: left;
}
.account-item1 > h1 {
  font-size: 16px;
}
.account-item1 > a {
  line-height: 23px;
  font-size: 12px;
  margin-left: 20px;
  cursor: pointer;
}
.item-2-1-id {
  text-indent: 15px;
}
.account-item1 > a:hover,
.information-item1 > a:hover {
  color: #06c;
  text-decoration: underline;
}
.account-item2-6 > div {
  float: left;
  width: 90px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin-left: 42px;
  margin-top: 30px;
  text-align: center;
}
.Preservation-1 {
  color: #ffffff;
  background-color: #06c;
  font-size: 13px;
  font-family: "微软雅黑";
}
.Preservation-1:hover {
  background: #0081e8;
}
.cancel-1 {
  background-color: #ffffff;
  color: #333;
  border: 1px solid #d3d3d3;
  font-size: 13px;
  font-family: "微软雅黑";
}
.cancel-1:hover {
  border: 1px solid #0081e8;
  color: #0081e8;
}
.item-2-1-id {
  text-indent: 15px;
}
.item-2-1,
.item-2-2,
.item-2-3,
.item-2-4,
.item-2-5 {
  margin-top: 10px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  font-family: 微软雅黑;
}
.border {
  border: 1px solid #ccc !important;
}
.input-1,
.input1,
.input2,
.input-3,
.input-4,
.input-5 {
  width: 346px;
  height: 38px;
  line-height: 38px;
  box-sizing: border-box;
  border: 0px solid #ccc;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #333;
  outline: 0;
  text-indent: 10px;
  border-radius: 2px;
  font-family: "微软雅黑";
}
.input1,
.input2,
.input3,
.input4,
.input5 {
  outline: none;
  border: none;
  background: #fefefe;
  width: 300px;
  font-family: "微软雅黑";
}
</style>
