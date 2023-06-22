import React, { useEffect } from 'react';
import { useContext } from 'react';
import { CountryList } from '../context/CountryContext';
import '../styles/Country.css'

export default function Country() {
    const { countries, selectedCountry, instantDate, country, date } = useContext(CountryList);
    useEffect(() => {
        if (country) {
            // console.log(country);
            const interval = setInterval(() => {
                instantDate(country);
            }, 1000);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line
    }, [country])
    const handleChange = (event) => {
        selectedCountry(event);
    };

    return (
        <div className='main'>
            <div className='container'>
                <div className='content'>
                    <h1>Select a TimeZone</h1>
                    <input list="countries" value={country} onChange={handleChange} />
                    <datalist id="countries">
                        <option value={""}>Select a country for respective time zone</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </datalist>
                    {/* <h1>Select a Country</h1>
                    <select value={country} onChange={handleChange}>
                        <option value={""}>Select a country for respective time zone</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select> */}
                    {country && (
                        <div>
                            <h1>Date and Time in {country}</h1>
                            <p>{date}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};