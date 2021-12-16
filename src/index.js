import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const H2 = (props) =>
  <h2>{props.text}</h2>

const Button = (props) =>
  <button onClick={props.handler}>
    {props.text}
  </button>

const Stat = (props) => 
  <p>{props.opinion}: <strong>{props.number}</strong></p>

const Total = (props) =>
  <p>all: <strong>{props.all}</strong></p>

const Average = (props) =>
  <p>average: <strong>{props.avg}</strong></p>

const Positive = (props) =>
  <p>positive: <strong>{props.rate}%</strong></p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHanlder = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1);
  const badHandler = () => setBad(bad + 1);

  const total = good+neutral+bad; 

  let goodRate = 0;
  (total === 0) ? goodRate = 0 : goodRate = good * 100 / total;
  let badRate = 0;
  (total === 0) ? badRate = 0 : badRate = bad * 100 / total;

  let avg;
  if (good === 0 && neutral === 0 && bad === 0) {
    avg = 0;
  } else if (good > bad) {
    avg = ((goodRate - ((neutral * 100 / total) / 2)) / 100);
  } else {
    avg = ((-badRate + ((neutral * 100 / total) / 2)) / 100);
  }

  return (
    <div>
      <H2 text='Give feedback' />
      <Button handler={goodHanlder} text='good' />
      <Button handler={neutralHandler} text='neutral' />
      <Button handler={badHandler} text='bad' />
      
      <H2 text='Statistics' />
      <Stat opinion='good' number={good} />
      <Stat opinion='neutral' number={neutral} />
      <Stat opinion='bad' number={bad} />
      <Total all={total} />
      <Average avg={avg} />
      <Positive rate={goodRate} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)