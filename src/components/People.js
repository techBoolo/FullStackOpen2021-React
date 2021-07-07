import { remove } from '../services/phonebook';

const People = ({ people, setPeople }) => {
  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you user?");
    if(confirmation){
      remove(id)
        .then(() => {
          setPeople(people.filter(person => person.id !== id)) 
        })
    }else {
      return
    }
  }
  return (
    <ul>
      {
        people.map(person => <li key={person.name}>{person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>delete</button>
            </li>)
      } 
    </ul>
  );
};
export default People;
