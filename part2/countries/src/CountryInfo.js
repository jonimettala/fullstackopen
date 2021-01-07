import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { WEATHER_KEY } from './config'

const CountryInfo = ({ country }) => {

  const [ weather, setWeather ] = useState({})
  const [ hasWeather, setHasWeather ] = useState(false)
 
  const fetchWeather = () => {
    axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${WEATHER_KEY}`)
    .then(response => {
      // console.log(response.data)
      setWeather(response.data)
      setHasWeather(true)
    })
  }
  useEffect(fetchWeather, [])

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
        <h2>Weather in {country.capital}</h2>
        { hasWeather ?
        <p>temperature: {Math.round((weather.main.temp - 273) * 10) / 10} C<br/>
        {weather.weather[0].main}<br />
        wind: {weather.wind.speed}, {weather.wind.deg} deg</p>
        : <p>Loading</p>
        }
      </>
  )
}

export default CountryInfo
