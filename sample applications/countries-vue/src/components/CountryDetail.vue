<template>
    <div>
        <h2>{{country.name }}</h2>
        <ul class="list-group">
            <li class="list-group-item"><img :src="country.flag" class="img-fluid" alt=""></li>
            <li class="list-group-item">{{ country.name}}</li>
            <li class="list-group-item">capital: {{ country.capital}}</li>
            <li class="list-group-item">population: {{ country.population}}</li>
            <li class="list-group-item">region: {{ country.subregion}}</li>
        </ul>
    </div>
</template>

<script>
    // This is a display component. It has no logic. It only displays the current country
    // that is passed in. We use extende notation on props here.
    export default {
        name: "CountryDetail",
        props: {
            country:{
                type: Object,
                required: true
            }
        }
    }
</script>
