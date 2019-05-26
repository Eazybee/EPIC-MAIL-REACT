import types from './types';

const { LOGIN, LOGIN_ERROR } = types;
const postData = async (method = 'GET', path, data, auth) => {
  if (!path) {
    throw new Error('Path not defined!');
  }
  const url = `https://epic-mail-api.herokuapp.com/api/v1${path}`;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (auth) {
    headers.append('authorization', localStorage.getItem('auth'));
  }
  const init = {
    method,
    headers,
  };

  if (data) {
    init.body = JSON.stringify(data); // body data type must match "Content-Type" header
  }

  const result = await fetch(url, init)
    .then(response => response)
    .catch((err) => {
      if (err.message === 'Failed to fetch') {
        throw Error('ERROR: Check your internet connection and try again');
      }
      throw err;
    });

  return result;
};
export default () => (dispatch) => {
  const obj = {
    email: 'maryj@test.com',
    password: 'spiderman123',
  };
  postData('POST', '/auth/login', obj)
    .then(response => response.json())
    .then((res) => {
      if ('error' in res) {
        throw new Error(res.error);
      }
      if ('data' in res && 'token' in res.data[0]) {
        return dispatch({
          type: LOGIN,
          payload: res.data[0].token,
        });
      }
      return false;
    })
    .catch(error => dispatch({
      type: LOGIN_ERROR,
      payload: error.message,
    }));
};
