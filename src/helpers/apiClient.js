const rootURL = 'https://api.github.com';

function get(path) {
  return fetch(`${rootURL}${path}`)
    .then((response) => {
      if (response.status >= 200 && response.status <= 300) {
        return response.json();
      } else {
        return response.json(json => Promise.reject(json));
      }
    });
}

export default { get };
