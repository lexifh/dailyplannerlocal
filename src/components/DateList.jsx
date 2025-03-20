import React, { useState } from "react";
import ListItem from "./ListItem";
import TimePicker from "./TimePicker";
import "./css/DateList.css";

//ToDo: Add function to change back done status

function DateList() {
    const [list, setList] = useState([]);
    const [listItem, setListItem] = useState({ value: "", time: "00:00" });

    function handleChangeNewItem(event) {
        let itemValue = event.target.value;
        setListItem({ value: itemValue, time: listItem.time });
    }

    function addListItem() {
        //only add items, if there is an entry in the input field
        listItem.value !== "" &&
            setList((prevItem) => {
                return [...prevItem, listItem];
            });
        setListItem({ value: "", time: listItem.time });
    }

    function deleteListItem(index) {
        const filterdList = list.filter(
            (listItem, listIndex) => listIndex !== index
        );

        setList(filterdList);
    }

    function changeListItem(changedItem, index) {
        if (changedItem.substring(6) === "") {
            return;
        }

        //split changedItem to get single values for the listItem
        const changedItemValues = changedItem.split(".");
        const changedList = list.map((currentItem, listIndex) =>
            listIndex === index
                ? { value: changedItemValues[1], time: changedItemValues[0] }
                : currentItem
        );

        setList(changedList);
    }

    function setNewTime(hour, minute) {
        setListItem({ value: listItem.value, time: hour + ":" + minute });
    }

    return (
        <div>
            <h2>Termine</h2>
            <div className="flex-container-dateList">
                <div>
                    <TimePicker onChoose={setNewTime} value={listItem.time} />
                </div>
                <input
                    type="text"
                    onChange={handleChangeNewItem}
                    placeholder="Terminbeschreibung..."
                    value={listItem.value}
                />
                <button onClick={addListItem}>
                    <img
                        src="./src/assets/plusGrey.svg"
                        alt="Plus symbol for add button"
                    />
                </button>
            </div>
            <ul className="no-bullets">
                {list.map((item, index) => {
                    return (
                        <ListItem
                            id={"datelist" + index}
                            key={index}
                            indexValue={index}
                            itemValue={item.time + " " + item.value}
                            hasTime
                            onDelete={deleteListItem}
                            onChangeItem={changeListItem}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default DateList;
