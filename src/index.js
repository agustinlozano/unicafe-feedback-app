import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const H2 = (props) =>
  <h2>{props.text}</h2>

const Button = (props) =>
  <button onClick={props.handler}>
    {props.text}
  </button>

const Stat = (props) => {
  return(
    <tr>
      <td>{props.opinion}</td>
      <td><strong>{props.number}</strong></td>
    </tr>
  );
}

const Statistics = (props) => {
  return (
    <table>
        <tbody>
        <Stat opinion='good' number={props.goodOp} />
        <Stat opinion='neutral' number={props.neutralOp} />
        <Stat opinion='bad' number={props.badOp} />
        <Stat opinion='all' number={props.all} />
        <Stat opinion='average' number={props.avg} />
        <Stat opinion='positive' number={`${props.rate}%`} />
      </tbody>
    </table>
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

  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <H2 text='Give feedback' />
        <Button handler={goodHanlder} text='good' />
        <Button handler={neutralHandler} text='neutral' />
        <Button handler={badHandler} text='bad' />

        <H2 text='Statistics' />
        <Statistics 
          goodOp={good}
          neutralOp={neutral}
          badOp={bad}
          all={total}
          avg={avg}
          rate={goodRate}  
        />

      </div>
    );

  } else {
    return (
      <div>
        <H2 text='Give feedback' />
        <Button handler={goodHanlder} text='good' />
        <Button handler={neutralHandler} text='neutral' />
        <Button handler={badHandler} text='bad' />
        <H2 text='No feedback given' />
      </div>
    )
  }
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
);