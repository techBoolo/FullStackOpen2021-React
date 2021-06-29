import './App.css';

function App() {
  const course = 'Half stack application development'
  const parts = [
    { name: 'Fundamental of React', exercises: 10 },
    { name:  'using proops to pass data', exercises:  7 },
    { name:  'state of a component', exercises: 14 }
  ]

  const Header = (props) => {
    return  <h1>{ props.course }</h1>
  }
  const Content = (props) => {
    return (
        <div>
          <p>{ props.parts[0].name } { props.parts[0].exercises }</p>      
          <p>{ props.parts[1].name } { props.parts[1].exercises }</p>      
          <p>{ props.parts[2].name } { props.parts[2].exercises }</p>      
        </div>
        ) 
  }
  const Total = (props) => {
    const { parts } = props
    return <p>Number of exercises { parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  }

  return (
    <div className="App">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
