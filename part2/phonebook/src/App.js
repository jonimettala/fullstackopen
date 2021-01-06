import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

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

  const Person = ({ person }) => {
    return (
      <>
        {person.name} {person.number}<br />
      </>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /><br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <Person person={person} key={person.name} />)}
    </div>
  )
}

export default App