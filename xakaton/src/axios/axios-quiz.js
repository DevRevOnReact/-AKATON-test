import axios from 'axios'

export default axios.create({
  baseURL: 'https://reactdev-b8efe-default-rtdb.europe-west1.firebasedatabase.app'
})