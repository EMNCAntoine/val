var url ="https://api.valsoftware.cloud/AEF/MT2/v1.0/api/init/BD735972-C4B8-4DD6-9C40-8D4F66BD1176/Ammon?languageCode=FR";


const data = {
  "username": 'emnc_admin',
  "password":"M8*k2^Z33qBG!4Bh%wx9d^X7^tir",
};

fetch("https://api.valsoftware.cloud/AEF/MT2/v1.0/api/init/BD735972-C4B8-4DD6-9C40-8D4F66BD1176/Ammon?languageCode=FR", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

