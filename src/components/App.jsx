import React from "react";
import "./css/App.css";
import ToDoList from "./ToDoList";
import DateList from "./DateList";
import HydrationScale from "./HydrationScale";
import DateView from "./DateView";
import WeatherPicker from "./WeatherPicker";

function App() {
    return (
        <div>
            <div className="container-date-weather">
                <div className="dateView">
                    <DateView />
                </div>
                <div className="weatherPicker">
                    <WeatherPicker />
                </div>
            </div>
            <div className="container-lists">
                <div className="dateList">
                    <DateList />
                </div>
                <div className="todoList">
                    <ToDoList />
                </div>
            </div>
            <HydrationScale />
        </div>
    );
}

export default App;
