const url = window.location.pathname + '/courseInfo';
console.log(url);

fetch(url, {
  method: 'GET',
  mode: 'no-cors',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
})
  .then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((response) => console.log('Success:', response));
