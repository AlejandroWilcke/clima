function fahrenheitToCelsius(fahren){
    let celsius = fahren ? Math.round( ( parseInt(fahren) - 32 ) * 5/9 ) : "";
    return celsius;
}

function kelvinToCelsius(kelvin){
    let celsius = kelvin ? Math.round( parseInt(kelvin) - 273.15 ) : "";
    return celsius;
}

function dayNumberToDayName(dayNumber){
    let dayName = "Hoy";
    switch( parseInt(dayNumber) ){
        case 0:     dayName = "Domingo";    break;
        case 1:     dayName = "Lunes";      break;
        case 2:     dayName = "Martes";     break;
        case 3:     dayName = "Miercoles";  break;
        case 4:     dayName = "Jueves";     break;
        case 5:     dayName = "Viernes";    break;
        case 6:     dayName = "Sabado";     break;
    }
    return dayName;
}

module.exports = { fahrenheitToCelsius, kelvinToCelsius, dayNumberToDayName };