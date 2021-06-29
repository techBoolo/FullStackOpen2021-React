import './App.css';

function App() {
  const course = {
    name: 'Half stack application development',
    parts: [
      { name: 'Fundamental of React', exercises: 10 },
      { name:  'using proops to pass data', exercises:  7 },
      { name:  'state of a component', exercises: 14 }
    ]
  }

  const Header = (props) => {
    return  <h1>{ props.course }</h1>
  }
  const Content = (props) => {
    return (
        <div>
          <Part part={props.parts[0]} />
          <Part part={props.parts[1]} />
          <Part part={props.parts[2]} />
        </div>
        ) 
  }
  const Total = (props) => {
    const { parts } = props
    return <p>Number of exercises { parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  }
  const Part = (props) => {
    const { part } = props
    return <p>{ part.name } { part.exercise }</p>
  }

  return (
    <div className="App">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
