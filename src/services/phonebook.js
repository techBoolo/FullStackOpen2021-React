import axios from 'axios';

const url = 'http://localhost:3001/api/people'

export const getAll = () => {
  return axios.get(url)
    .then(response => {
      return response.data
    })
}

export const create = (newPerson) => {
  return axios.post(url, newPerson)
    .then(response => {
      return response.data
    })
}

export const remove = (id) => {
  return axios.delete(`${url}/${id}`)
    .then(response => {
      return response.data
    })
}

export const update = (person) => {
  const id = person.id
  return axios.put(`${url}/${id}`, person)
    .then(response => {
      return response.data
    })
}
