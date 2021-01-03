import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)

  const setToGood = (newGood) => {
    setGood(newGood)
    setScore(score + 1)
    setAll(all + 1)
  }

  const setToNeutral = (newNeutral) => {
    setNeutral(newNeutral)
    setAll(all + 1)
  }

  const setToBad = (newBad) => {
    setBad(newBad)
    setScore(score - 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={() => setToGood(good + 1)} />
      <Button text='neutral' handleClick={() => setToNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setToBad(bad + 1)} />
      <h1>statistics</h1>
      <p>
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}<br />
        all {all}<br />
        average {all > 0 ? score / all : 'N/A'}<br />
        positive {all > 0 ? `${100 * good / all} %` : `N/A`}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
