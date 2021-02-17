export default function authHeader() {
    let accessTk = localStorage.getItem('accessToken');
    if (accessTk) {
      return { Authorization: 'Bearer ' + accessTk };
    } else {
      return {};
    }
  }
  