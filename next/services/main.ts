import axios from 'axios';
import { inDevelop } from '@helpers/inDevelop';

export default axios.create({
  baseURL: inDevelop() ? 'http://localhost:3000/api' : 'https://run.mocky.io/v3',
  headers: {
    'Content-Type': 'application/json'
  }
})
