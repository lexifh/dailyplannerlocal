import React from "react";
import "./css/DateView.css";

function DateView() {
    const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    const currentDate = new Date();
    const formattedDate =
        currentDate.getDate() +
        "." +
        (currentDate.getMonth() + 1 < 10
            ? "0" + (currentDate.getMonth() + 1)
            : currentDate.getMonth() + 1) +
        "." +
        currentDate.getFullYear();

    return (
        <>
            <div className="flex-container-dateView">
                <span className="date font-xx-large">{formattedDate}</span>
                {days.map((element, index) => {
                    return (
                        <div
                            id={"weekday" + element}
                            key={element}
                            className={
                                (index === currentDate.getDay()
                                    ? "dayActive"
                                    : "dayInactive") + " font-xx-large"
                            }
                        >
                            {element}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default DateView;
