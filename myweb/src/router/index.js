import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import About from "@/components/About";
import Player from "@/components/Player";
import Profile from "@/components/Profile";
import Status from "@/components/Status";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/player/:uid',
      name: 'Player',
      component: Player,
      children: [{path: 'profile', component: Profile}, {path: 'status', component: Status}]
    }

  ]
})
