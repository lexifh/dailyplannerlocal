import React, { useState } from "react";
import "./css/ToDoList.css";
import ListItem from "./ListItem";

//ToDo: Add function to change back done status

function ToDoList() {
    const [list, setList] = useState([]);
    const [listItem, setListItem] = useState("");

    function handleChangeNewItem(event) {
        let item = event.target.value;
        setListItem(item);
    }

    function addListItem() {
        //only add items, if there is an entry in the input field
        listItem !== "" &&
            setList((prevItem) => {
                return [...prevItem, listItem];
            });
        setListItem("");
    }

    function deleteListItem(index) {
        const filterdList = list.filter(
            (listItem, listIndex) => listIndex !== index
        );

        setList(filterdList);
    }

    function changeListItem(changedItem, index) {
        if (changedItem === "") {
            return;
        }
        const changedList = list.map((currentItem, listIndex) =>
            listIndex === index ? changedItem : currentItem
        );

        setList(changedList);
    }

    return (
        <>
            <h2>ToDo-Liste</h2>
            <div className="flex-container-todo">
                <input
                    type="text"
                    onChange={handleChangeNewItem}
                    placeholder="Todo..."
                    value={listItem}
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
                            id={"todolist" + index}
                            key={index}
                            indexValue={index}
                            itemValue={item}
                            onDelete={deleteListItem}
                            onChangeItem={changeListItem}
                        />
                    );
                })}
            </ul>
        </>
    );
}
export default ToDoList;
