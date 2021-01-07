import React from 'react'

import CountryInfo from './CountryInfo'

const CountryList = ({ countries, handleShowButtonClick }) => {
  console.log(countries)
  if (countries.length === 0) {
    return <p>No matches, specify another filter</p>
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (<li key={country.name}>{country.name}<button onClick={(e) => handleShowButtonClick(country.name, e) }>show</button></li>))}<br />
      </ul>
    )
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else {
    const country = countries[0]

    return (
      <CountryInfo country={country} />
    )
  }
}

export default CountryList
