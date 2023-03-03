var url ="https://api.valsoftware.cloud/AEF/MT2/v1.0/api/ping";


fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

