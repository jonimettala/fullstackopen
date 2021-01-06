import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  const fetchPersons = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(fetchPersons, [])

  const addPerson = (e) => {
    e.preventDefault()
    console.log(e)
    if (newName.length > 0 && !nameIsInPhonebook(newName)) {
      setPersons(persons.concat({ name: newName, number: newNumber }))
    }
  }

  const nameIsInPhonebook = (name) => {
    for (let person of persons) {
      if (person.name === name) {
        window.alert(`${newName} is already added to phonebook`)
        return true
      }
    }
    return false
  }

  const personsToShow = persons.filter((person) => person.name.includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App