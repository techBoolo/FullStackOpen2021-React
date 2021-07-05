import Course from './components/Course';
import './App.css';

function App() {
  const course = {
    id: 1,
    name: 'Half stack application development',
    parts: [
      { name: 'Fundamental of React', exercises: 10, id: 1 },
      { name:  'using proops to pass data', exercises:  7, id: 2 },
      { name:  'state of a component', exercises: 14, id: 3 }
    ]
  }

  return (
    <div className="App">
      <Course course={course} />
    </div>
  );
}

export default App;
