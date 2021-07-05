import Course from './components/Course';
import './App.css';

function App() {
  const courses = [
    {
    id: 1,
    name: 'Half stack application development',
    parts: [
        { name: 'Fundamental of React', exercises: 10, id: 1 },
        { name:  'using proops to pass data', exercises:  7, id: 2 },
        { name:  'state of a component', exercises: 14, id: 3 }
      ]
    },
    {
    id: 2,
    name: 'Node.js',
    parts: [
      { name: 'Routing', exercises: 3, id: 1 },
      { name:  'Middlewares', exercises:  7, id: 2 }
    ]
  }

  ]
  return (
    <div className="App">
      { courses.map(course => (
        <Course key={course.id} course={course} />
      )) } 
    </div>
  );
}

export default App;
