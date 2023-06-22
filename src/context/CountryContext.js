import React, { createContext, useEffect, useState } from "react";
import moment from 'moment-timezone';
export const CountryList = createContext()

export default function CountryContext({ children }) {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => {
        fetch('https://worldtimeapi.org/api/timezone')
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);
    return <CountryList.Provider value={{
        countries: countries,
        selectedCountry : (e)=>{
            setCountry(e.target.value);
        },
        instantDate : (timezone)=>{
            setDate(moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a'));
        },
        country,
        date
    }}>
        {children}
    </CountryList.Provider>
}