import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
}

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.part1}
        exercises={props.exercises1}
      />
      <Part
        name={props.part2}
        exercises={props.exercises2}
      />
      <Part
        name={props.part3}
        exercises={props.exercises3}
      />
    </div>
  );
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  );
}

const App = () => {
  const data = {
    course: 'Half Stack application development',
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component',
    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  };

  return (
    <div>
      <Header course={data.course} />
      <Content
        part1={data.part1}
        part2={data.part2}
        part3={data.part3}
        exercises1={data.exercises1}
        exercises2={data.exercises2}
        exercises3={data.exercises3}
      />
      <Total
        exercises1={data.exercises1}
        exercises2={data.exercises2}
        exercises3={data.exercises3}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));