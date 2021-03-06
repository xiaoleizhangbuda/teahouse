import Vue from 'vue'
import Router from 'vue-router'
import index from "../components/page/index"
import BindingPhone from "../components/index/BindingPhone"
import ShopList from "../components/index/ShopList"
import MailInvoice from "../components/index/MailInvoice"
import TeaArtist from "../components/index/TeaArtist"
import MakeAppointment from "../components/index/MakeAppointment"
import my from "../components/my/my"
import Shopping from "../components/shopping/Shopping";
import AboutUs from "../components/my/AboutUs"
import Agreement from "../components/my/Agreement"
import MyOrder from "../components/my/MyOrder"
import NoOrder from "../components/my/NoOrder"
import CompleteOrder from "../components/my/CompleteOrder"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
      {
          path: '/',
          name: 'index',
          component: index,
          children:[
              {
                  path: "",
                  name: ShopList,
                  component: ShopList
              },
              {
                path:"/my",
                name:my,
                component:my
              },
              {
                path:"/Shopping",
                name:Shopping,
                component:Shopping
              }
          ]
      },
      {
          path: "/BindingPhone",
          name: BindingPhone,
          component: BindingPhone
      },
      {
        path: "/MakeAppointment",
        name: MakeAppointment,
        component: MakeAppointment
      },
      {
        path:"/MailInvoice",
        name:MailInvoice,
        component:MailInvoice
      },
      {
        path:"/TeaArtist",
        name:TeaArtist,
        component:TeaArtist
      },
      {
        path:"/Agreement",
        name:Agreement,
        component:Agreement
      },
      {
        path:"/AboutUs",
        name:AboutUs,
        component:AboutUs
      },
      {
        path:"/MyOrder",
        name:MyOrder,
        component:MyOrder,
        children: [
          {
            path:"",
            name:NoOrder,
            component:NoOrder
          },
          {
            path:"/CompleteOrder",
            name:CompleteOrder,
            component:CompleteOrder
          }
        ]
      }
  ]
})
