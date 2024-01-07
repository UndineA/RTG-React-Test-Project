"use client";

import { useState, useEffect } from "react";
import List from "../components/List.jsx";

export default function ToDoApp() {
  const itemsArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTask] = useState(itemsArray);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return <List tasks={tasks} setTask={setTask}></List>;
}
