import Vue from 'vue'
import Router from 'vue-router'
import Customers from '../components/Customers'
import About from '../components/About'
import CustomerDetails from '../components/CustomerDetails'
import Adduser from "../components/Adduser"
import UpdateUser from "../components/UpdateUser"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'customers',
      component: Customers
    },
    {
      path: '/about-us',
      name: 'about',
      component: About
    },
    {
      path: '/new-user',
      name: 'new',
      component: Adduser
    },
    {
      path: '/customer/:id',
      name: "customerdetails",
      component: CustomerDetails
    },
    {
      path: '/customer/update/:id',
      name: "update",
      component: UpdateUser
    }
  ]
})
