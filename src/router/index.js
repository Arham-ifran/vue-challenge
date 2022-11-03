import { createRouter, createWebHistory } from 'vue-router'
import Bookings from '../views/Bookings'
// import EditBooking from '../views/EditBooking'
import Boats from '../views/Boats'

const routes = [
  {
    path: '/bookings',
    name: 'Bookings',
    component: Bookings,
  },
  // TODO
  // {
  //   path: '/edit-booking',
  //   name: 'EditBooking',
  //   component: EditBooking,
  // },
  {
    path: '/',
    name: 'Boats',
    component: Boats,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router