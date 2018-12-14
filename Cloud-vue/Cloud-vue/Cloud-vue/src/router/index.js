import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import CloudHeader from '@/components/CloudHeader'
// import MainLeft from '@/components/MainLeft'
import EnterpriseInformation from '@/components/EnterpriseInformation'
import administrator from '@/components/administrator'
import Management from '@/components/Management'
Vue.use(Router)
// 需要展示的页面
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Management' // 路由默认展示页
    },
    {
      path : '/EnterpriseInformation',
      name : 'EnterpriseInformation',
      component: EnterpriseInformation
    },
    {
      path : '/administrator',
      name : 'administrator',
      component: administrator
    },
    {
      path : '/Management',
      name : 'Management',
     component: Management
    }
  ]
})
