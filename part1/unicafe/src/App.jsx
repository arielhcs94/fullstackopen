import { useState } from 'react'

const Statistics = (props) => {
  if( (props.good != 0 ) || (props.bad != 0) || (props.neutral != 0) ){
    return(
      <>
        <StatisticLine text="Good" value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad" value={props.bad}/>
        <StatisticLine text="All" value={props.all}/>
        <StatisticLine text="Average" value={props.average}/>
        <StatisticLine text="Positive" value={props.positive} symbol="%"/>
      </>
    )
  }
    return(
      <p>No feedback given</p>
    )
}
const StatisticLine = (props) => {
  return(
    <>
    <p>{props.text} : {props.value} {props.symbol}</p>
    </>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => {
        setGood(good + 1)
        setAll(all + 1) 
        setAverage((good/all) - (bad/all))
        setPositive((good/all)*100)
          }
        }
      >
        good
      </button>
      <button onClick={() => {
        setNeutral(neutral + 1)
        setAll(all + 1) 
        setAverage((good/all) - (bad/all))
        setPositive((good/all)*100)
          }
        }
      >
        neutral
      </button>
      <button onClick={() => {
        setBad(bad + 1)
        setAll(all + 1) 
        setAverage((good/all) - (bad/all))
        setPositive((good/all)*100)
          }
        }
      >
        bad
      </button>
      <hr/>
        <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} positive={positive} average={average} all={all}/>
    </div>
  )
}

export default App