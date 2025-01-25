const http = require('http');
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherstack.com/current';

const getWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}?access_key=${API_KEY}&query=${city}`);
        const weatherData = response.data;
        console.log(`Погода в ${weatherData.location.name}, ${weatherData.location.country}:`);
        console.log(`Температура: ${weatherData.current.temperature}°C`);
        console.log(`Состояние: ${weatherData.current.weather_descriptions[0]}`);
    } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error.message);
    }
};

const city = process.argv[2];
if (city) {
    getWeather(city);
} else {
    console.log('Пожалуйста, укажите название города.');
}
