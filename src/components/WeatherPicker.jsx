import React, { useState } from "react";
import "./css/WeatherPicker.css";

function WeatherPicker() {
    const weatherObjects = [
        {
            description: "sun",
            imgSrcActive: "./src/assets/sun.svg",
            imgSrcInactive: "./src/assets/sunGrey.svg",
            state: false,
        },
        {
            description: "cloudy",
            imgSrcActive: "./src/assets/cloudy.svg",
            imgSrcInactive: "./src/assets/cloudyGrey.svg",
            state: false,
        },
        {
            description: "very cloudy",
            imgSrcActive: "./src/assets/veryCloudy.svg",
            imgSrcInactive: "./src/assets/veryCloudyGrey.svg",
            state: false,
        },
        {
            description: "stormy",
            imgSrcActive: "./src/assets/stormy.svg",
            imgSrcInactive: "./src/assets/stormyGrey.svg",
            state: false,
        },
        {
            description: "rain",
            imgSrcActive: "./src/assets/rain.svg",
            imgSrcInactive: "./src/assets/rainGrey.svg",
            state: false,
        },
        {
            description: "snow",
            imgSrcActive: "./src/assets/snow.svg",
            imgSrcInactive: "./src/assets/snowGrey.svg",
            state: false,
        },
    ];
    const [weather, setWeather] = useState(weatherObjects);

    function handleClick(event) {
        const selectedImg = event.target;
        const changedWeatherObjects = weatherObjects;

        changedWeatherObjects[selectedImg.id].state = true;

        setWeather(changedWeatherObjects);
    }

    return (
        <>
            <div>
                <h3>Welches Wetter haben wir heute?</h3>
            </div>
            <div className="flex-container-weather">
                {weather.map((weatherObject, index) => {
                    return (
                        <img
                            id={index} // ToDo: id should be something unique for the html
                            key={index}
                            onClick={handleClick}
                            src={
                                weatherObject.state
                                    ? weatherObject.imgSrcActive
                                    : weatherObject.imgSrcInactive
                            }
                            alt={
                                "Weather picker " +
                                weatherObject.description +
                                " button"
                            }
                        />
                    );
                })}
            </div>
        </>
    );
}

export default WeatherPicker;
