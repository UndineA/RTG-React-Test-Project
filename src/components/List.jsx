"use client";

import React from "react";
import { useRef } from "react";
import listStyles from "./List.module.css";
import { v4 as uuidv4 } from "uuid";

const List = ({ tasks, setTask }) => {
  // ADDING TASK

  const inputRef = useRef(null);

  const addTask = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      alert("You must write something!");
    } else {
      setTask([
        ...tasks,
        <div key={uuidv4()} className="task">
          <input type="checkbox" />
          <li>{inputRef.current.value}</li>
          <button className="deleteButton" onClick={deleteTask}>
            Delete
          </button>
        </div>,
      ]);
      inputRef.current.value = "";
    }
    console.log(tasks);
  };

  //DELETING TASK
  const deleteTask = (event) => {
    const dataAtribute = event.target.parentElement.key;
    setTask(() => tasks.filter((item) => item.key != dataAtribute));
  };

  return (
    <main>
      <h2 className={listStyles.elemn}>To-do list</h2>
      <form
        name="inputField"
        className={listStyles.elemn}
        onSubmit={(e) => addTask(e)}
      >
        <input type="text" placeholder="New task" ref={inputRef} />
        <button type="submit">Add</button>
      </form>

      <ul className={listStyles.elemn}>
        {tasks.length > 0 && tasks.map((task) => task)}
      </ul>
    </main>
  );
};

export default List;
