import React from "react";
// import { ReactDOM } from "react-dom";
import listStyles from "./List.module.css";

const List = () => {
  return (
    <main>
      <h2 className={listStyles.elemn}>To-do list</h2>
      <div className={listStyles.elemn}>
        <input type="text" id="input-box" placeholder="New task" />
        <button onClick="addTask()">Add</button>
      </div>

      <ul className={listStyles.elemn} id="tasks"></ul>
    </main>
  );
};

export default List;
