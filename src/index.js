import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const H2 = (props) =>
  <h2>{props.text}</h2>

const Button = (props) =>
  <button onClick={props.handler}>
    {props.text}
  </button>

const Stat = (props) => 
  <p>{props.opinion}:{props.number}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHanlder = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1);
  const badHandler = () => setBad(bad + 1);

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
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)