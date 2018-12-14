<template>
  <ul id="ul">
    <li>
      <div class="header_div">
        <div class="all_checkbox">
          <h5>全选</h5>
        </div>
        <div class="firster_div">
          <input type="button" value="升序" class="Ascending">
          <input type="button" value="降序" class="Descending">
          <input type="button" value="全部删除" class="All_del">
          <input type="text" placeholder="请输入需要查找的姓名！" class="search"><input type="button" value="搜索" class="search_btn">
        </div>
      </div>
    </li>
    <li class="title_li">
      <div class="title_div">
        <div class="checkbox">
          <input type="checkbox" name="chebox" id="checkbox">
        </div>
        <div class="add_time">
          <h5>时间</h5>
        </div>
        <div class="add_div1 add_div">
          <h5>编号</h5>
        </div>
        <div class="add_div2 add_div">
          <h5>姓名</h5>
        </div>
        <div class="add_div3 add_div">
          <h5>密码</h5>
        </div>
        <div class="add_div4 add_div">
          <h5>生日</h5>
        </div>
        <div class="add_div5 add_div">
          <h5>地址</h5>
        </div>
        <div class="add_operation">
          <h5>操作</h5>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'HelloLiu',
  data() {
    return {
      msg: 'Welcome to HelloLiu'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

</style>
