import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5001' })

export const fetchShoes = () => API.get(`/shoes`)
export const fetchShoe = (id) => API.get(`/shoes/${id}`)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
