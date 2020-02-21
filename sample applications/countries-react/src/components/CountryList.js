import React from 'react';

function CountryList(props) {

    return (
        // react Fragment
        <>
            <ul className="list-group">
                {
                    props.countries.map(country => (
                            <li className="list-group-item"
                                key={country.name}
                                onClick={() => props.updateCountry(country)}
                            >
                                <img src={country.flag} width={80} alt=""/>
                                {country.name}
                            </li>
                        )
                    )
                }
            </ul>

        </>
    );
}

export default CountryList;
