const WEATHER_APIKEY            = "c33b251111c02783fc703a9d229e71c4";
const fetchJSON                 = require('../../../utils/fetchJSON');
const WeatherFunctions          = require('../../../utils/weatherFunctions');

function getCurrentCityData(city){
    const CITY      = encodeURI(city)
    const URL       = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${WEATHER_APIKEY}`
    return fetchJSON(URL).then( data => formatCurrentData(data) );
}

function getForecastCityData(city){
    const CITY      = encodeURI(city)
    const URL       = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${WEATHER_APIKEY}`
    return fetchJSON(URL).then( data => formatForecastData(data) );
}

function formatCurrentData(currentData){
    return {
        temp    : WeatherFunctions.kelvinToCelsius(currentData.main.temp),
        maxTemp : WeatherFunctions.kelvinToCelsius(currentData.main.temp_max),
        minTemp : WeatherFunctions.kelvinToCelsius(currentData.main.temp_min),
        humidity: currentData.main.humidity
    }
}

function formatForecastData(forecastData){

    var days = {};

    forecastData.list.forEach( weatherDay => {
        
        const dayNumber   = new Date( weatherDay.dt * 1000 ).getDay();
        const dayName     = WeatherFunctions.dayNumberToDayName(dayNumber);

        const maxTemp     = WeatherFunctions.kelvinToCelsius( weatherDay.main.temp_max );
        const minTemp     = WeatherFunctions.kelvinToCelsius( weatherDay.main.temp_min );

        const todayDayNumber = new Date().getDay();

        //El pronóstico también concede las horas siguientes del día actual, no las quiero.
        if( dayNumber != todayDayNumber ){
            //Si el objeto days no tiene el día, lo inicializo.
            !days.hasOwnProperty( dayName ) ? days[dayName] = { maxTemp, minTemp } : null;

            if( days[dayName].maxTemp < maxTemp ){
                days[dayName].maxTemp = maxTemp;
            }

            if( days[dayName].minTemp > minTemp ){
                days[dayName].minTemp = minTemp;
            }
        }
        
    });
    return days;
}

module.exports = { getForecastCityData, getCurrentCityData }