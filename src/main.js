import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { sortBy, groupBy } from 'lodash'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            bookings: [],
            boats: [],
            boatTypes: [],
            users: []
        }
    },
    mutations: {
        // set boats 
        setBoats(state, boats = []) {
            // state.boats = boats
            state.boats = groupBy(boats, 'type')
        },
        // set boat types
        setBoatTypes(state, data) {
            console.log("sortBy(boatTypes, 'title')", sortBy(data.boatTypes, 'title'))
            const { boatTypes, sort } = data
        
            // sort = 1 sets data in alphabetically
            // sort = 2 sets data in reverse alphabetic order
            if (sort === 1)
                state.boatTypes = sortBy(boatTypes, 'title')
            else
                state.boatTypes = sortBy(boatTypes, '-title')
        },
        // set users 
        setUsers(state, users = []) {
            state.users = users
        },
        // set bookings 
        setBookings(state, bookings = []) {
            state.bookings = bookings
        },
        // update booking details
        editBooking(state, id = -1) {
            // TODO
            if (id > -1)
                return true
        }
    },
    getters: {
        // getter to get booking by ID
        getBookingById: (state) => (bookingId) => {
            return state.bookings.find(booking => booking.bookingId === bookingId)
        },

        // get boats
        getBoats: (state) => {
            return state.boats
        },

        // get boat types
        getBoatTypes: (state) => {
            return state.boatTypes
        },

        // get users
        getUsers: (state) => {
            return state.users
        },

        // get bookings
        getBookings: (state) => {
            return state.bookings
        }
    }
})

createApp(App)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .use(VueLodash, lodash)
    .mount('#app')
