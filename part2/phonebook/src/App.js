import React, { useEffect, useState } from 'react'

import personService from './services/persons'
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
    personService
      .getAll()
      .then(initPersons => {
        setPersons(initPersons)
      })
  }
  useEffect(fetchPersons, [])

  const addPerson = (e) => {
    e.preventDefault()
    if (newName.length > 0 && !nameIsInPhonebook(newName, newNumber)) {
      personService
        .create({ name: newName, number: newNumber })
        .then(response => {
      setPersons(persons.concat(response))
      })
    }
  }

  const nameIsInPhonebook = (name, newNumber) => {
    for (let person of persons) {
      if (person.name === name) {
        let wantsUpdate = window.confirm(`${newName} is already added to phonebook, would you like to replace their number with the new one?`)
        if (wantsUpdate) {
          personService
            .update(person.id, person.name, newNumber)
            .then(updatedPerson => {
              const newPersons = persons
              let personIndex = 0
              for (let p of newPersons) {
                if (p.id === person.id) {
                  newPersons.splice(personIndex, 1, updatedPerson)
                }
                personIndex++
              }
              setPersons([...newPersons])
            })
        }
        return true
      }
    }
    return false
  }

  const handleDelete = (name, id) => {
    let wantsDelete = window.confirm(`Want to delete ${name}?`);
    if (wantsDelete) {
      personService
        .remove(id)
        .then(() => {
          const newPersons = persons
          let personIndex = 0
          for (let person of newPersons) {
            if (person.id === id) {
              newPersons.splice(personIndex, 1)
            }
            personIndex++
          }
          setPersons([...newPersons])
        })
    }
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
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App