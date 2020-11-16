import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index'
import GoodsList from "../view/GoodsList";
import Order from "../view/Order";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'layout',
      component: layout
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path: '/a',
          name: 'order',
          component: Order
        },
        {
          path: '/b',
          name: 'GoodsList',
          component: GoodsList
        },
      ]
    },
  ]
})
