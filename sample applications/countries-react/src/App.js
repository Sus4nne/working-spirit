import React, {useEffect, useState} from 'react';
import axios from 'axios'
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import logo from './img/logo192.png';

// the URL to talk to. Should be in a separate 'globals.js' or the like
const url = 'https://restcountries.eu/rest/v2/name/';

function App() {
    // State hooks: set up hooks for the state of this application
    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [currentCountry, setCurrentCountry] = useState('');

    // Effect Hook: Log new countries to the console, every time the dependency changes
    useEffect(() => {
        console.log(countries);
    }, [countries]);

    // set the state to hold the current country (could have
    // done that inline, but this is a little cleaner).
    const setCountry = (name) => {
        setCountryName(name)
    };

    // search for the specific country in the textbox.
    // Might be a partial name.
    const searchCountry = () => {
        if (countryName.length < 2) {
            // countryName must be greater that 2 characters
            return;
        }
        // console.log(countryName); // demo
        // fire the http-call
        axios.get(url + countryName)
            .then(response => {
                // console.log(response.data); // demo
                // update the state with the found countries.
                setCountries(response.data);
                //   console.log({countries}); // returns [] or PREVIOUS state, due to the asynchrounous manner of setState() - use an effect hook to capture this.
                setCurrentCountry(''); // reset the current country
            })
    };

    // update the currentCountry, e.g. the country that is clicked on
    const updateCountry = (country) => {
        setCurrentCountry(country)
    };

    // Clear: reset all variables
    const clear = ()=>{
        setCurrentCountry('');
        setCountries([]);
    };

    // UI for the main (top-level) component)
    return (
        <div className="container">
            <h1><img src={logo} width={80} alt=""/>React Vacation Picker</h1>
            <p>I want to visit:</p>
            <input type="text"
                   className="form-control-lg"
                   placeholder="country name..."
                   value={countryName}
                   onKeyUp={(event) => event.key === 'Enter' ? searchCountry() : null}
                   onChange={(event) => setCountry(event.target.value)}
            />
            <button
                onClick={searchCountry}
                className="btn btn-primary">Search
            </button>
            <button
                onClick={clear}
                className="btn btn-warning">Clear
            </button>
            <hr/>
            <h2>Results</h2>
            <div className="row">
                <div className="col-6">
                    {/*Pass in the list of countries and the function to update a country as props */}
                    <CountryList
                        countries={countries}
                        updateCountry={(country) => updateCountry(country)}/>
                </div>
                <div className="col-6">
                    {/*Only show the component if a currentCountry is set*/}
                    { currentCountry && <CountryDetail country={currentCountry}/> }
                </div>
            </div>
        </div>
    );
}

export default App;
