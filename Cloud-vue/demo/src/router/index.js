import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloLiu from '@/components/HelloLiu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloLiu',
      component: HelloLiu
    }
  ]
})
