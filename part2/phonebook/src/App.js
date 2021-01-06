import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    console.log(e)
    if (newName.length > 0 && !nameIsInPhonebook(newName)) {
      setPersons(persons.concat({ name: newName }))
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

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const Person = ({ person }) => {
    return (
      <>
        {person.name}<br />
      </>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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