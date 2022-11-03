<template>
    <div>
        <h3>Bookings</h3>
        <p>List All bookings here.........</p>
        <p v-if="error" class="error text-red">
            {{ error }}
        </p>
        <br>
    </div>
</template>
    
<script>
export default {
    name: 'BookingsList',
    inheritAttrs: false, // disable 'non-props' warning
    data() {
        return {
            bookings: [],
            isLoader: false
        }
    },
    computed: {
        error() {
            return false
        },
    },
    methods: {
    }
};
</script>
<style copied>
/* style for component */
</style>