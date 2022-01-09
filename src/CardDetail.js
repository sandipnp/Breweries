import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const CardDetail = () => {

    const { id } = useParams();
    const [brewery, setBrewery] = useState();

    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries/' + id)
            .then(res => res.data)
            .then(data => setBrewery(data))
    }, [id])

    if (!brewery) {
        return <h1>Waiting</h1>
    }
    else {
        return (
            <div className="container">
                <div className="card-detail">
                    <h3>Showing details about each Brewery</h3>
                    <div>
                        <p>brewery name:"{brewery.name}"  </p>
                        <p>brewery_type:"{brewery.brewery_type}"  </p>
                        <p>street:"{brewery.street}"</p>
                        <p>address_2:"{brewery.address_2}"</p>
                        <p>address_3:"{brewery.address_3}"</p>
                        <p>city:"{brewery.city}"</p>
                        <p>state:"{brewery.state}"</p>
                        <p>county_province:"{brewery.county_province}"</p>
                        <p>postal_code:"{brewery.postal_code}"</p>
                    </div>
                    <Link to="/">
                        <button >Go back</button>
                    </Link>
                </div>
            </div>
        )
    }
}