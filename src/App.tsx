import { useState } from "react";
import { TaskItem } from "./components/TaskItem/TaskItem";
import { Taskfilter } from "./components/TaskFilter/TaskFilter";
import "./App.css";

function App() {
  const taskTest = {
    id: "1",
    title: "Test Task",
    description: "Hello, it is just a test",
    status: "pending",
    priority: "high",
    dueDate: "2026-01-01",
  };
  return (
    <div>
      <Taskfilter onFilterChange={(filters) => console.log(filters)} />
      <TaskItem
        task={taskTest}
        onStatusChange={(id, status) => console.log(id, status)}
        onDelete={(id) => console.log("delete", id)}
      />
    </div>
  );
}

export default App;
