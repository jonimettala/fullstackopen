import React from 'react'

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts.reduce((prevValue, currentValue) => prevValue + currentValue.exercises, 0)
    
    return(
      <p><strong>total of {sum} exercises</strong></p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {
          course.parts.map((part) => <Part part={part} key={part.id} />)
        }
      </div>
    )
  }

const Course = ({ course }) => {
  
    return (
      <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </>
    )
  }

export default Course