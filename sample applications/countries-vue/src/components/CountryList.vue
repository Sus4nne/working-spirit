<template>
    <div>
        <h2>Results</h2>
        <ul class="list-group">
            <li class="list-group-item"
                :key="country.name"
                @click="setCountry(country)"
                v-for="country in countries">
                <img :src="country.flag" alt="" width="80">
                {{ country.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    // This is a display component. It displays a list of passed in countries.
    // It has almost no logic, other than sending an event
    // with the currently selected/clicked country.
    export default {
        name: "CountryList",
        props: {
            countries: {
                type: Array,
                required: true
            }
        },
        methods: {
            setCountry(country){
                this.$emit('setCountry', country)
            }
        }
    }
</script>
