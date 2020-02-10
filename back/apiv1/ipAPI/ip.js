//Puede estar en un .env de dotenv, o process.env, o DB, etc...
const IP_APIKEY         = "85561329be2f034017e830b97193a5c4";
const fetchJSON         = require('../../../utils/fetchJSON');

function getCityByIp(ip){
    if( ip === "::1" || ip === "::ffff:127.0.0.1" ){ return "Buenos Aires" } // ::1 = localhost, la otra mocha test.
    const URL = `http://api.ipapi.com/api/${ip}?access_key=${IP_APIKEY}`;
    return fetchJSON(URL);
}

module.exports = { getCityByIp }