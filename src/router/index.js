import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index,
    //   redirect: '/wel/index',

    //   children: [
    //     {
    //       path: '/HelloWorld',
    //       name: 'HelloWorld',
    //       component: HelloWorld
    //     }
    //   ]
    // },
  ]
})
