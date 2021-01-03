import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad, all, score }) => {
  return (
    <>
      <h1>statistics</h1>
      {
        all > 0 ?
          <p>
            <Statistic name="good" value={good} />
            <Statistic name="neutral" value={neutral} />
            <Statistic name="bad" value={bad} />
            <Statistic name="all" value={all} />
            <Statistic name="average" value={all > 0 ? score / all : 'N/A'} />
            <Statistic name="positive" value={all > 0 ? `${100 * good / all} %` : `N/A`} />
          </p>
        : <p>No feedback given</p>
      }
    </>
  )
}

const Statistic = ({ name, value }) => <>{name} {value}<br /></>

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} score={score} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
