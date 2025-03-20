import React, { useState } from "react";
import TimePicker from "./TimePicker";
import "./css/ListItem.css";

function ListItem(props) {
    const [getsChanged, setGetsChanged] = useState(false);
    const [changedItem, setChangedItem] = useState("");
    const [changedTime, setChangedTime] = useState("00:00");
    const [doneState, setDoneState] = useState(false);

    //line-through done items on click
    function itemDone(event) {
        let item = event.target;

        if (doneState) {
            event.target.style = "text-decoration-line: none";
            setDoneState(false);
        } else {
            event.target.style = "text-decoration-line: line-through";
            setDoneState(true);
        }
    }

    function handleChangeNewItem(event) {
        let item = event.target.value;
        setChangedItem(item);
    }

    function changeItem() {
        setGetsChanged(true);
    }

    function cancelChange() {
        setGetsChanged(false);
        setChangedItem("");
    }

    function setNewTime(hour, minute) {
        setChangedTime(hour + ":" + minute);
    }

    return (
        <li>
            <div className="listItemStyle">
                <div className="container-buttons">
                    {getsChanged ? (
                        <>
                            <button
                                className="listButtonStyle"
                                onClick={() => {
                                    // check if list item has a time value and add it to the item string
                                    props.onChangeItem(
                                        props.hasTime
                                            ? changedTime + "." + changedItem
                                            : changedItem,
                                        props.indexValue
                                    );
                                    setGetsChanged(false);
                                    setChangedItem("");
                                }}
                            >
                                <img
                                    src="./src/assets/plusGrey.svg"
                                    alt="Plus symbol for add button"
                                    className="listButtonImg"
                                />
                            </button>
                            <button
                                className="listButtonStyle"
                                onClick={cancelChange}
                            >
                                <img
                                    src="./src/assets/arrowLeftGrey.svg"
                                    alt="Arrow left symbol for cancel button"
                                    className="listButtonImg"
                                />
                            </button>
                        </>
                    ) : (
                        <button
                            className="listButtonStyle"
                            onClick={changeItem}
                        >
                            <img
                                src="./src/assets/penGrey.svg"
                                alt="Pen symbol for change button"
                                className="listButtonImg"
                            />
                        </button>
                    )}
                    <button
                        onClick={() => {
                            props.onDelete(props.indexValue);
                        }}
                    >
                        <img
                            src="./src/assets/deleteGrey.svg"
                            alt="Delete symbol for delete button"
                            className="listButtonImg"
                        />
                    </button>
                </div>
                {getsChanged ? (
                    <div className="flex-container-listItem">
                        {props.hasTime ? (
                            <div>
                                <TimePicker
                                    onChoose={setNewTime}
                                    idprefix="li"
                                />
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <input
                            type="text"
                            onChange={handleChangeNewItem}
                            value={changedItem}
                        />
                    </div>
                ) : (
                    <div className="flex-container-listItem">
                        <div onClick={itemDone} className="listItem">
                            {props.itemValue}
                        </div>
                    </div>
                )}
            </div>
        </li>
    );
}

export default ListItem;
