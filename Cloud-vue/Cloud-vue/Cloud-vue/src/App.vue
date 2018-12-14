<template id="vue-all">
    <div class="vue-parent">     
      <CloudHeader></CloudHeader>
      <MainLeft></MainLeft>
      <!-- <component v-bind:is="currentView"></component> -->
      <router-view/>
      <!-- <EnterpriseInformation></EnterpriseInformation> -->
    </div>
</template>

<script>
import CloudHeader from '@/components/CloudHeader' // 组件引入
import MainLeft from '@/components/MainLeft'
import EnterpriseInformation from '@/components/EnterpriseInformation'
import administrator from '@/components/administrator'
import Management from '@/components/Management'

export default {
  components: {
    MainLeft: MainLeft,
    EnterpriseInformation: EnterpriseInformation,
    CloudHeader,
    administrator,
    Management
  },
  //组件用法
  // name: 'App', //页面名称
  // data () {
  //   return {
  //     currentView:'Management' // 定义默认展示页
  //   }
  // },
  // methods:{ //左侧点击切换页面的方法
  //   toggleTabs (tabText) {
  //     this.currentView = tabText;
  //   }
  // }
}
</script>
<style scoped>
.vue-parent{
  width: 100%;
}
</style>
