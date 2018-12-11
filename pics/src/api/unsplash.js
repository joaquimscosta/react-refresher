import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID db44bf9aa6be612170532fefc7548d9221ed7dc37fea3dc4947cba528a693bb0'
  }
})
