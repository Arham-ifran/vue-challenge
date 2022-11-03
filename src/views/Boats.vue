<template>
    <div>
        <h3>Boats</h3>
        <p>Boats Data</p>
        {{ getBoats }}
        <br>
    </div>
</template>
    
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'BoatsList',
    inheritAttrs: false, // disable 'non-props' warning
    data() {
        return {
            isLoader: false
        }
    },
    computed: {
        ...mapGetters([
            'getBoats',
            'getBoatTypes',
            'getUsers'
        ])
    },
    methods: {
        // group boats data
    },
    mounted() {
        console.log('getBoatTypes', this.getBoatTypes)
    }
};
</script>
<style copied>
/* style for component */
</style>