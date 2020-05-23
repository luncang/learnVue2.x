import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import About from "@/components/About";
import Player from "@/components/Player";
import Profile from "@/components/Profile";
import Status from "@/components/Status";
import Header from "@/components/setting/Header";
import Detail from "../components/setting/Detail";
import Sidebar from "../components/setting/Sidebar";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: Header,
        sidebar: Sidebar,
        detail: Detail
      }
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/about',
      name: 'About',
      component: About,
      alias:'/aboutme'
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
    }, {
      path: 'player/:uid/profile',
      component: Profile,
      name: 'Profile'
    }, {
      path: 'player/:uid/status',
      component: Status,
      name: 'Status'
    },
    {
      //重定向
      path: '/curry',
      // redirect:'/player/1'
      redirect:{name:'About'}
    }

  ]
})
