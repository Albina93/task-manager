import { TaskList } from "./components/TaskList/TaskList";
import type { Task } from "./types";
import "./App.css";

function App() {
  const testTasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "Description 1",
      status: "pending",
      priority: "low",
      dueDate: "2026/01/01",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description 2",
      status: "in-progress",
      priority: "medium",
      dueDate: "2026/02/01",
    },
    {
      id: "3",
      title: "Task 3",
      description: "Description 3",
      status: "completed",
      priority: "high",
      dueDate: "2026/03/01",
    },
    {
      id: "4",
      title: "Task 4",
      description: "Description 4",
      status: "completed",
      priority: "medium",
      dueDate: "2026/04/01",
    },
  ];

  return (
    <div>
      <TaskList sampleTasks={testTasks} />
    </div>
  );
}

export default App;
