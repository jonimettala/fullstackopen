import React from 'react'

const Person = ({ person }) => {
  return (
    <>
      {person.name} {person.number}<br />
    </>
  )
}

const Persons = ({ persons }) => {
  return persons.map((person) => <Person person={person} key={person.name} />)
}

export default Persons
