import React, { useState } from "react";
import "./css/HydrationScale.css";

function HydrationScale() {
    const [scale, setScale] = useState([false, false, false, false, false]);
    const [clickState, setClickState] = useState(false);

    function handleMouseEnter(event) {
        if (!clickState) {
            const enteredDrop = event.target;
            const dropKey = enteredDrop.id;
            const newScaleState = [];

            scale.forEach((element, index) => {
                newScaleState.push(dropKey < index ? false : true);
            });

            setScale(newScaleState);
        }
    }

    function handleMouseLeave() {
        const newScaleState = [false, false, false, false, false];
        !clickState && setScale(newScaleState);
    }

    function handleClick() {
        clickState ? setClickState(false) : setClickState(true);
    }

    return (
        <>
            <div>
                <h3>Heute schon etwas Wasser getrunken?</h3>
            </div>
            <div className="container-hydration">
                {scale.map((state, index) => {
                    return state ? (
                        <img
                            id={index} // ToDo: id should be something unique for the html
                            key={index}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={handleClick}
                            src="./src/assets/drop.svg"
                            className="logo"
                            alt="Drop of water button"
                        />
                    ) : (
                        <img
                            id={index} // ToDo: id should be something unique for the html
                            key={index}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={handleClick}
                            src="./src/assets/dropGrey.svg"
                            className="logo"
                            alt="Drop of water button"
                        />
                    );
                })}
            </div>
        </>
    );
}

export default HydrationScale;
