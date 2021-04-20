import Service from '@ember/service';
import ENV from '../config/environment';

export default class AuthService extends Service {
  isAuthenticated = false;
  token = null;

  _sendLogin(username_or_email, password) {
    let status = 0;
    return new Promise(function (resolve, reject) {
      fetch(ENV.APP.endPointBackend + ENV.APP.AUTH_LOGIN, {
        method: 'POST',
        body: JSON.stringify({ username_or_email, password }),
        headers: new Headers({
          'Content-Type': 'application/json',
          CORS: 'Access-Control-Allow-Origin',
        }),
      })
        .then((response) => {
          status = response.status;
          return response.json();
        })
        .then((data) => resolve({ data, status }))
        .catch((error) => {
          reject(error);
        });
    });
  }

  login(email, password, remember, cb) {
    this._sendLogin(email, password)
      .then((res) => {
        if (res.status === 400) {
          cb(res.data.message, 'invalid login');
        } else if (res.status === 200) {
          if (remember === false) {
            localStorage.removeItem('login.isAuthenticated');
            localStorage.removeItem('login.token');
            this.token = res.data.data.token;
            this.isAuthenticated = true;
          } else {
            localStorage.setItem('login.isAuthenticated', true);
            localStorage.setItem(
              'login.token',
              `Bearer ${res.data.data.token}`
            );
          }
          localStorage.setItem('login.email', res.data.data.email);
          localStorage.setItem('login.username', res.data.data.username);
          localStorage.setItem('login.photo', res.data.data.photo);
          cb(res.data.message, null);
        } else {
          cb(res.data.message, 'unknows err');
        }
      })
      .catch((error) => cb(null, error));
  }

  logout() {
    this.isAuthenticated = false;
    this.token = null;
    localStorage.removeItem('login.isAuthenticated');
    localStorage.removeItem('login.token');
  }

  isAuth() {
    return this.isAuthenticated === true ||
      localStorage.getItem('login.isAuthenticated') === 'true'
      ? true
      : false;
  }

  getUsername() {
    return localStorage.getItem('login.username');
  }

  getPhoto() {
    const photo = localStorage.getItem('login.photo');
    if (
      photo === undefined ||
      photo === null ||
      photo === 'undefined' ||
      photo === 'null'
    ) {
      return ENV.APP.IMAGEN_NOT_FOUND;
    }
    return photo;
  }

  getToken() {
    const token = localStorage.getItem('login.token');

    if (token === undefined || token === null) {
      return this.token;
    }

    return token;
  }
}
