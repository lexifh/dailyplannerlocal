import React, { useState } from "react";
import "./css/TimePicker.css";

function TimePicker(props) {
    const hours = [];
    const minutes = [];
    const [time, setTime] = useState({ hour: "00", minute: "00" });

    for (let i = 0; i <= 24; i++) {
        hours.push(i);
    }

    for (let i = 0; i <= 59; i++) {
        minutes.push(i);
    }

    function handleTimeChange(event) {
        const timeSelector = event.target;
        let timeValue = "00";

        timeValue =
            timeSelector.value < 10
                ? "0" + timeSelector.value.toString()
                : "" + timeSelector.value.toString();

        if (timeSelector.name === "hours") {
            setTime({ hour: timeValue, minute: time.minute }); // remember last entries
            props.onChoose(timeValue, time.minute); // send time entries back to DateList
        } else if (timeSelector.name === "minutes") {
            setTime({ hour: time.hour, minute: timeValue });
            props.onChoose(time.hour, timeValue);
        } else {
            setTime({ hour: "00", minute: "00" });
            props.onChoose(time.hour, time.minute);
        }
    }

    return (
        <>
            <div className="container-timePicker">
                <label htmlFor="hoursId"></label>
                <select
                    onChange={handleTimeChange}
                    aria-label="Auswahl Stunden"
                    name="hours"
                    id={
                        // check for idprefix to prevent same ids in multiple places
                        // Todo: maybe search for a better solution
                        props.idprefix ? props.idprefix + "hoursId" : "hoursId"
                    }
                >
                    {hours.map((hour) => {
                        return (
                            <option key={"hour" + hour} value={hour}>
                                {hour < 10 ? "0" + hour : hour}
                            </option>
                        );
                    })}
                </select>
                <div>:</div>
                <label htmlFor="minutesId"></label>
                <select
                    onChange={handleTimeChange}
                    aria-label="Auswahl Minuten"
                    name="minutes"
                    id={
                        // check for idprefix to prevent same ids in multiple places
                        // Todo: maybe search for a better solution
                        props.idprefix
                            ? props.idprefix + "minutesId"
                            : "minutesId"
                    }
                >
                    {minutes.map((minute) => {
                        return (
                            <option key={"minute" + minute} value={minute}>
                                {minute < 10 ? "0" + minute : minute}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
}

export default TimePicker;
