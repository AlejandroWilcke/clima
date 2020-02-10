const fetch = require('node-fetch');

function fetchJSON(url){
    return fetch(url)
    .then( response => response.json() )
    .then( data => data )
    .catch( error => error );
}

module.exports = fetchJSON;