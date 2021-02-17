import axios from 'axios';

const API_URL = 'http://localhost:3000/users/login';

class AuthService {
  login(login) {
     
    return axios
      .post(API_URL, {
        username: login,
        password: "alioune"
      }).then((response) => {
        if (response.data.access_token) {
          localStorage.setItem('accessToken', response.data.access_token);
        }
        return response.data.access_token;
      },
      (errr) =>{
        console.log(errr);
      }
      );
  }

  logout() {
    localStorage.removeItem('accessToken');
  }

}

export default new AuthService();
