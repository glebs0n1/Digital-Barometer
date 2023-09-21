import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const weatherIcons = {
<<<<<<< HEAD
    stormy: '/images/stormy.png',
    rain: '/images/rain.png',
    change: '/images/change.png',
    fair: '/images/fair.png',
    verydry: '/images/verydry.png',
    sunny: '/images/sunny.png',
    cloudy: '/images/cloudy.png',
    clear: '/images/sunny.png',
    "light rain shower": '/images/rain.png',
=======
  stormy: '/images/stormy.png',
  rain: '/images/rain.png',
  change: '/images/change.png',
  fair: '/images/fair.png',
  verydry: '/images/verydry.png',
  sunny: '/images/sunny.png',
  cloudy: '/images/cloudy.png',
  clear: '/images/sunny.png',
  "light rain shower": '/images/lightrainshower.png',
>>>>>>> ac3bd1701ea33cc55bb1a074142e749169494fc7
};

function App() {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('Vilnius');
    const [loading, setLoading] = useState(false);

    const apiKey = 'c1cd92fabebd4a439db45730232009';

    useEffect(() => {
        setLoading(true);
        fetchWeatherData(location);
    }, [location]);

    const fetchWeatherData = async(location) => {
        try {
            const response = await axios.get(`http://localhost/Barometr-Backend/index.php?city=${location}`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        } finally {
            setLoading(false);
        }
    };

    return ( <
        div >
        <
        header className = "App-header" >
        <
        h1 > Digital Barometer < /h1> <
        p > Check the current weather conditions in Vilnius and Nida < /p> <
        div className = "HeaderInfo" >
        <
        div className = "HeaderText" >
        <
        p > Selected City: { location } < /p> <
        p > Temperature: { weatherData.current ? weatherData.current.temp_c : 'N/A' }°
        C < /p> <
        /div> <
        /div> <
        select value = { location }
        onChange = {
            (e) => setLocation(e.target.value) } >
        <
        option value = "Vilnius" > Vilnius < /option> <
        option value = "Nida" > Nida < /option> <
        /select> <
        /header> <
        div className = "App" >
        <
        h2 > Current Weather in { location } < /h2> {
            loading ? ( <
                p > Loading... < /p>
            ) : ( <
                div className = "WeatherInfo" >
                <
                div className = "WeatherIcon" >
                <
                img src = { weatherData.current ? weatherData.current.condition.icon : '/images/unknown.png' }
                alt = "Weather Icon" /
                >
                <
                /div> <
                div className = "WeatherDetails" >
                <
                p > Temperature: { weatherData.current ? weatherData.current.temp_c : 'N/A' }°
                C < /p> <
                p > Pressure: { weatherData.current ? weatherData.current.pressure_mb : 'N/A' }
                hPa < /p> <
                p > Humidity: { weatherData.current ? weatherData.current.humidity : 'N/A' } % < /p> <
                p > Wind Speed: { weatherData.current ? weatherData.current.wind_kph : 'N/A' }
                km / h < /p> <
                p > Weather Condition: { weatherData.current ? weatherData.current.condition.text : 'N/A' } < /p> <
                /div> <
                /div>
            )
        } <
        /div> <
        footer >
        <
        p > Created by Gleb Son < /p> <
        a href = "https://github.com/glebs0n1"
        style = {
            { color: 'white' } } > GitHub < /a> <
        /footer> <
        /div>
    );
}

export default App;