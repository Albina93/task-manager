import React, { useState } from "react";
import type { TaskListProps, TaskStatus } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
// import { Taskfilter } from "../TaskFilter/TaskFilter";

export const TaskList: React.FC<TaskListProps> = ({ sampleTasks }) => {
  // store all tasks in state
  const [tasks, setTasks] = useState(sampleTasks);
  // Handle status change, find one task, update its status, keep everyting else the same
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };
  // Hadle delete, keep all tasks EXCEPT the one being deleted
  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    // console.log(taskId);
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <h1>Task Manager</h1>
      {tasks.length === 0 && <p>No tasks found...</p>}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
