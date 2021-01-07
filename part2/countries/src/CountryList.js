import React from 'react'

const CountryList = ({ countries, handleShowButtonClick }) => {
  console.log(countries)
  if (countries.length === 0) {
    return <p>No matches, specify another filter</p>
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => <li key={country.name}>{country.name} <button onClick={(e) => handleShowButtonClick(country.name, e) }>show</button></li>)}<br />
      </ul>
    )
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else {
    const country = countries[0]

    return (
      <>
        <h1>{country.name}</h1>
        <p>
          capital {country.capital}<br />
          population {country.population}
        </p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={country.flag} alt={country.name} width='150' />
      </>
    )
  }
}

export default CountryList
