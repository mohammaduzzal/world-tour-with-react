import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country);
    const {name,flags,population,area,cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }



    return (
        <div className='country'>
            <h4>{name.common}</h4>
            <img src={flags.png} alt="" />
            <p>population : {population}</p>
            <p>area : {area}</p>
            <p><small>code : {cca3}</small></p>

            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'I have visited this country' : 'I have not visited this country'}
        </div>
    );
};

export default Country;