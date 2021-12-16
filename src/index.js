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

const Statistics = (props) => {
  return (
    <div id='statistics'>
      <H2 text='Statistics' />
      <Stat opinion='good' number={props.goodOp} />
      <Stat opinion='neutral' number={props.neutralOp} />
      <Stat opinion='bad' number={props.badOp} />
      <Total all={props.all} />
      <Average avg={props.avg} />
      <Positive rate={props.rate} />
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHanlder = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1);
  const badHandler = () => setBad(bad + 1);

  const total = good+neutral+bad;
  let avg = calculateAvg(good, neutral, bad, total);
  let goodRate = calculateGoodRate(good, total);

  return (
    <div>
      <H2 text='Give feedback' />
      <Button handler={goodHanlder} text='good' />
      <Button handler={neutralHandler} text='neutral' />
      <Button handler={badHandler} text='bad' />
      <Statistics 
        goodOp={good}
        neutralOp={neutral}
        badOp={bad}
        all={total}
        avg={avg}
        rate={goodRate}  
      />
    </div>
  )
}

function calculateAvg(good, neutral, bad, total) {
  let avg;
  if (good === 0 && neutral === 0 && bad === 0) {
    avg = 0;
  } else if (good > bad) {
    avg = ((2 * good - neutral) / (2 * total));
  } else {
    avg = ((neutral - 2 * bad) / (2 * total));
  }

  return avg;
}

function calculateGoodRate(good, total) {
  let rate;
  (total === 0) ? rate = 0 : rate = good * 100 / total;
  
  return rate;
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)