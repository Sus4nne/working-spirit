<template>
    <div class="container">
        <h1><img src="./assets/logo.png" height="100"/>Vue Vacation Picker</h1>
        <p>I want to visit:</p>
        <input class="form-control-lg"
               v-model="countryName"
               type="text"
               @keyup.enter="searchCountry"
               placeholder="country name...">
        <button @click="searchCountry"
                class="btn btn-primary">Search
        </button>
        <button class="btn btn-warning" @click="clear()">Clear</button>
        <hr>
        <div class="row">
            <div class="col-6">
                <!-- 1. Pass in the list of countries as a prop. Capture the setCountry event and fire local event handler -->
                <CountryList :countries="countries" @setCountry="setCountry($event)"/>
            </div>
            <div class="col-6">
                <!-- 2. Only show CountryDetail if a currentCountry is set-->
                <CountryDetail v-bind:country="currentCountry" v-if="currentCountry"/>
            </div>
        </div>
    </div>
</template>

<script>

    // 1. imports
    import axios from 'axios';
    import CountryList from "@/components/CountryList";
    import CountryDetail from "@/components/CountryDetail";

    // 2. constants
    const url = 'https://restcountries.eu/rest/v2/name/';

    // 3. App object
    export default {
        name: 'App',
        // 4. Data/state for this component. Must be a function that
        // returns an object.
        data() {
            return {
                countries: [],
                countryName: '',
                currentCountry: null
            }
        },
        components: {
            CountryDetail,
            CountryList
        },
        // 5. methods for this component. They are called from buttons and event handlers.
        methods: {
            // 5a. search for a list of countries
            searchCountry() {
                if (this.countryName.length < 2) {
                    return;
                }
                axios.get(url + this.countryName)
                    .then(response => {
                        console.log(response.data);
                        this.countries = response.data;
                    })
            },
            // 5b. Set the current country and pass to the detail component
            setCountry(country) {
                this.currentCountry = country;
            },
            // 6. Clear all data
            clear() {
                this.currentCountry = null;
                this.countries = [];
            }
        }
    }
</script>
