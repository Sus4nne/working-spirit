import React from 'react';

function CountryDetail(props) {

    return (
        <>
            <h2>{props.country.name}</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <img src={props.country.flag} alt="" className="img-fluid"/>
                </li>
                <li className="list-group-item">
                    Capital: {props.country.capital}
                </li>
                <li className="list-group-item">
                    Population: {props.country.population}
                </li>
                <li className="list-group-item">
                    Region: {props.country.subregion}
                </li>
            </ul>
        </>
    );
}

export default CountryDetail;
