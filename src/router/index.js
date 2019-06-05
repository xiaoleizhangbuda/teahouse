import Vue from 'vue'
import Router from 'vue-router'
import index from "../components/page/index"
import BindingPhone from "../components/index/BindingPhone"
import ShopList from "../components/index/ShopList"
import MailInvoice from "../components/index/MailInvoice"
import TeaArtist from "../components/index/TeaArtist"
import MakeAppointment from "../components/index/MakeAppointment"
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
      }
  ]
})
