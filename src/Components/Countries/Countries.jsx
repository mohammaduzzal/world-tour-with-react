import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

console.log(visitedFlags);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])


    const handleVisitedCountries = (country) =>{
        console.log('added this country');
       const newVisitedCountries = [...visitedCountries, country]
       setVisitedCountries(newVisitedCountries)
    }

    const handleFlags = flag =>{
        // console.log('chl au ko re flag de');
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }




    return (
        <div>
            <h3>country : {countries.length}</h3>
            {/* visiting country */}
            <div>
                <h4>countries i visited : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }

            </div>

            
            {/* displaying all countries */}
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    handleVisitedCountries ={handleVisitedCountries}
                    handleFlags={handleFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;