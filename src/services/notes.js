import axios from 'axios';
const baseUrl = 'http://localhost:3001/notesData';

const getAll = () => {
  return axios.get(baseUrl)
}
const create = (newNote ) => {
  return axios.post(baseUrl, newNote)
}
const update = (id, newNote) => {
  return axios.put(`${baseUrl}/${id}`, newNote)
}

const noteService =  {
  getAll,
  create,
  update
 }

export default noteService;
