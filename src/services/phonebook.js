import axios from 'axios';

const url = 'http://localhost:3002/people'

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
