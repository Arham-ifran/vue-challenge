<template>
  <footer>
    <a v-show="bookingsPage" href='javascript:void(0)' @click="onBookings()">Bookings</a>&nbsp;
    <a v-show="boatsPage" href='javascript:void(0)' @click="onBoats()">Boats</a>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      route: this.$router,
    }
  },
  methods: {
    onBookings() {
      this.route.push({ path: '/' });
    },
    onBoats() {
      this.route.push({ path: '/ships' });
    }
  },
  computed: {
    bookingsPage() {
      return this.$route.path === '/'
    },
    boatsPage() {
      return this.$route.path === '/ships'
    },
  },
};
</script>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>