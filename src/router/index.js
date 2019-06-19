import Vue from 'vue'
import Router from 'vue-router'
//import page1 from '@/pages/page1/index'

Vue.use(Router)
const page1 = r=> require.ensure([], ()=>r(require('@/pages/page1/index')), 'page1')
const page2 = r=> require.ensure([], ()=>r(require('@/pages/page2/index')), 'page2')

export default new Router({
  routes: [
    {
      path: '/', 
      redirect: '/page1' 
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      mode: 'history',
      path: '/page2',
      name: 'page2',
      component: page2
    }
    
  ]
})

// let mainRoute =  [
//   {
//     path: '/',
//     name: 'HelloWorld',
//     component: HelloWorld
//   },
//   {
//     path: '/lxMenu',
//     name: 'lxMenu',
//     component: HelloWorld
//   }
  
// ]

// export default mainRoute;