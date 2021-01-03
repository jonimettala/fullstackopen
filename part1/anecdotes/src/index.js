import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(6).fill(0))
  const [largest, setLargest] = useState({ index: 0, votes: 0})
  
  const vote = (selected) => {
      const newPoints = [...points]
      newPoints[selected] += 1
      
      if (newPoints[selected] > largest.votes) {
          setLargest({ index: selected, votes: newPoints[selected] })
          console.log(largest)
      }

      setPoints(newPoints)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br />
      {`has ${points[selected]} votes`}<br />
      <Button handleClick={() => vote(selected)} text='vote' />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[largest.index]}<br />
      {`has ${largest.votes} votes`}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)