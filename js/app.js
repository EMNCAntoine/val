var url ="https://api.valsoftware.cloud/AEF/MT2/v1.0/api/ping";


fetch("https://api.valsoftware.cloud/AEF/MT2/v1.0/api/init/BD735972-C4B8-4DD6-9C40-8D4F66BD1176/Ammon?languageCode=FR", {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

