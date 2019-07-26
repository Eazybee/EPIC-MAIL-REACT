import Validator from 'validatorjs';

export const validate = (data, rules) => {
  let validation;
  let errorMessage;

  Object.keys(data).forEach((key) => {
    if (!errorMessage) {
      validation = new Validator(
        { [key]: data[key] },
        { [key]: rules[key] },
      );

      errorMessage = validation.fails() && validation.errors.first(key);
    }
    data[key].trim();
  });

  return validation.passes()
    ? [true, data]
    : [false, data, errorMessage];
};

export const dateFormatter = (date, type) => {
  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  if (type) {
    options.year = 'numeric';
  }

  return new Intl.DateTimeFormat('en-US', options).format(new Date(parseInt(date, 10)));
};

export default async (method = 'GET', path, data, auth) => {
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

  try {
    const result = await fetch(url, init);
    const res = await result.json();
    if (res.status === 401) {
      localStorage.removeItem('auth');
      localStorage.removeItem('userEmail');
    }
    return res;
  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw Error('ERROR: Check your internet connection and try again');
    }
    throw error;
  }
};
