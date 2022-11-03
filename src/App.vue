<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import config from './config/config'
const { boatsAPI, boatTypesAPI, usersAPI, bookingsAPI } = config

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isFetching: true // flag to show fetching data state
    }
  },
  methods: {
    // fetch boats data from API
    fetchBoatsData() {
      this.axios.get(boatsAPI).then((response) => {
        const boats = response.data
        this.$store.commit('setBoats', boats)
      })
    },

    // fetch boat types data from API
    fetchBoatTypesData() {
      this.axios.get(boatTypesAPI).then((response) => {
        const boatTypes = response.data
        this.$store.commit('setBoatTypes', { boatTypes, sort: 1 })
      })
    },

    // fetch users data from API
    fetchUsersData() {
      this.axios.get(usersAPI).then((response) => {
        const users = response.data
        this.$store.commit('setUsers', users)
      })
    },

    // fetch bookings data from API
    fetchBookingsData() {
      this.axios.get(bookingsAPI).then((response) => {
        const bookings = response.data
        this.$store.commit('setBookings', bookings)
      })
    },
  },
  created() {
    this.fetchBoatsData()
    this.fetchBoatTypesData()
    this.fetchUsersData()
    this.fetchBookingsData()
    this.isFetching = false
  }
}
</script>
<style>
/* styles for app here */
</style>
