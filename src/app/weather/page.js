"use client";

import { useState } from "react";

const Weather = () => {
    const [cityVal, setCityVal] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const getInfo = async (event) => {
        event.preventDefault();
        if (cityVal === "") {
            setError("Please write the name before search");
            setWeatherData(null);
            return; 
        } else {
            try {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a472dd5b5d95ced42ea26f83e263774c`;
                const response = await fetch(url);
                // console.log('Response Status:', response.status);
                const data = await response.json();
                // console.log('API Data:', data);

                if (data.cod === 200) {
                    setWeatherData({
                        name: data.name,
                        country: data.sys.country,
                        temp: data.main.temp,
                        mood: data.weather[0].main,
                    });
                    setError("");
                } else {
                    setError("Please enter the proper city name");
                    setWeatherData(null);
                }
            } catch (error) {
                console.error('Fetch Error:', error); 
                setError("An error occurred. Please try again.");
                setWeatherData(null);
            }
        }
        setCityVal(""); 
    };

    const getCurrentDay = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const now = new Date();
        return days[now.getDay()];
    };

    const getCurrentDate = () => {
        const now = new Date();
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    };

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    return (
        <div className="main_content">
            <form onSubmit={getInfo}>
                <input
                    type="text"
                    value={cityVal}
                    onChange={(e) => setCityVal(e.target.value)}
                    placeholder="Enter your city name.."
                    autoComplete="off"
                />
                <br />
                <input type="submit" value="search" />
            </form>

            {error && <p className="error-message">{error}</p>}
            <br/>
            <br/>
            <div className="tempInformation">
                <div className="top_layer">
                    <p id="day">{getCurrentDay()}</p>
                    <p id="today_date">{getCurrentDate()}</p>
                    <p id="current_time">{getCurrentTime()}</p>
                </div>
                <div className="main_layer">
                    <p id="city_name">
                        {weatherData ? `${weatherData.name}, ${weatherData.country}` : "Get output here"}
                    </p>
                    {weatherData && (
                        <div className="middle_layer">
                            <p id="temp">
                                <span id="temp_real_val">{weatherData.temp}</span>
                                <sup>o</sup>C
                            </p>
                            <p id="temp_status">
                                {weatherData.mood === "Clear" && (
                                    <i className="fas fa-sun" style={{ color: "#eccc68" }}></i>
                                )}
                                {weatherData.mood === "Clouds" && (
                                    <i className="fas fa-cloud" style={{ color: "#f1f2f6" }}></i>
                                )}
                                {weatherData.mood === "Rain" && (
                                    <i className="fas fa-cloud-rain" style={{ color: "#a4b0be" }}></i>
                                )}
                                {["Clear", "Clouds", "Rain"].indexOf(weatherData.mood) === -1 && (
                                    <i className="fas fa-cloud" style={{ color: "#f1f2f6" }}></i>
                                )}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Weather;
