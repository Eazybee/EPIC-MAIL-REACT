class Utility {
  static async request(method = 'GET', path, data, auth) {
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
      return result;
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        throw Error('ERROR: Check your internet connection and try again');
      }
      throw error;
    }
  }
}
export default Utility;
