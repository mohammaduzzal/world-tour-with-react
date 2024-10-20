import Second from "./Second/Second";


const First = (props) => {
    // const {country, handleVisitedCountries,handleFlags} = props
    return (
        <div>
          
            <h5>country details :</h5>

            {/* <Second
            country={country}
            handleVisitedCountries={ handleVisitedCountries}
            handleFlags={handleFlags}
            ></Second> */}
            <Second {...props}></Second>
        </div>
    );
};

export default First;