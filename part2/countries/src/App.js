import React, { useEffect, useState } from 'react'
import axios from 'axios'

import CountryList from './CountryList'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const fetchCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(fetchCountries, [])

  const countriesToShow = countries.filter((country) => country.name.toLowerCase().includes(filter))

  return (
    <>
      filter shown with <input value={filter} onChange={handleFilterChange} /><br />
      <CountryList countries={countriesToShow} />
    </>
  )
}

export default App;
