import React from 'react';
import fetchJSON from '../../../../utils/fetchJSON';

import WeatherDay from './WeatherDay';
import SelectCity from './SelectCity';
import './style.css';

class WeatherContainer extends React.Component {

    state = {
        currentCityWeather  : {},
        forecastCityWeather : {},
    }

    componentDidMount(){
        this.getCurrentCityWeather();
        this.getForecastCityWeather();
    }

    getCurrentCityWeather(city = ""){
        const URL = `http://localhost:3000/api/v1/current?city=${city}`;
        fetchJSON(URL).then( currentCityWeather => this.setState( { currentCityWeather } ) );
    }

    getForecastCityWeather(city = ""){
        const URL = `http://localhost:3000/api/v1/forecast?city=${city}`;
        fetchJSON(URL).then( forecastCityWeather => this.setState( { forecastCityWeather } ) );
    }

    refreshWeatherData = city => {
        this.getCurrentCityWeather(city);
        this.getForecastCityWeather(city);
    }

    render(){
        return(
            <div className="WeatherContainer">

                <WeatherDay 
                    day={"Hoy"}
                    temp={this.state.currentCityWeather.temp}
                    temp_min={this.state.currentCityWeather.minTemp}
                    temp_max={this.state.currentCityWeather.maxTemp}
                    humidity={this.state.currentCityWeather.humidity}
                />

                {Object.keys(this.state.forecastCityWeather).map( day => {
                    return(
                        <WeatherDay
                             key={day}
                             day={day}
                             temp_min={this.state.forecastCityWeather[day].minTemp}
                             temp_max={this.state.forecastCityWeather[day].maxTemp}
                        />
                    )
                })}

                <SelectCity 
                    cities={["Buenos Aires", "Mar del Plata", "Miramar", "Pinamar", "San Bernardo"]}
                    handleChange={this.refreshWeatherData}
                />

            </div>
        )
    }

}

export default WeatherContainer;