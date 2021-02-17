import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/';

class DataService {

  getAllSujet() {
    return axios.get(API_URL + 'sujets');
  }

  getSujetBiId(id) {
    return axios.get(API_URL + 'sujets/' +id );
  }

  AddCommenterToSujet(id, data) {
    console.log(data);
    return axios.post(API_URL + 'sujets/' +id , data);
  }

  AddSujet(data) {
    return axios.post(API_URL + 'sujets', data, { headers: authHeader() });
  }
}

export default new DataService();
