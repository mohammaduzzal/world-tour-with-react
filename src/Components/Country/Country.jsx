import { useState } from 'react';
import './Country.css'
import First from '../First/First';



const Country = ({country, handleVisitedCountries,handleFlags}) => {
    // console.log(country);
    const {name,flags,population,area,cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }

    // const handleHandle = () =>handleVisitedCountries(country)


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h4 style={{color : visited? 'purple' : 'white'}}>{name.common}</h4>
            <img src={flags.png} alt="" />
            <p>population : {population}</p>
            <p>area : {area}</p>
            <p><small>code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountries(country)}>mark the country as visited</button>
            <br />
            <button onClick={()=>handleFlags(country.flags.png)}>Add visited flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'I have visited this country' : 'I have not visited this country'}
            
            <hr />
           <First 
           country={country}
           handleVisitedCountries={ handleVisitedCountries}
           handleFlags={handleFlags}

           ></First>
            
        </div>
    );
};

export default Country;