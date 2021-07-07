import axios from 'axios';
const baseUrl = 'http://localhost:3001/notesData';

const getAll = () => {
  return axios.get(baseUrl)
    .then(response => {
      return response.data
    })
}
const create = (newNote ) => {
  return axios.post(baseUrl, newNote)
    .then(response => {
      return response.data
    })
}
const update = (id, newNote) => {
  return axios.put(`${baseUrl}/${id}`, newNote)
    .then(response => {
      return response.data
    })
}

const noteService =  {
  getAll,
  create,
  update
 }

export default noteService;
