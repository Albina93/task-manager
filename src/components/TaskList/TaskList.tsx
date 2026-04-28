import React, { useState } from "react";
import type { TaskListProps, TaskStatus } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
import { Taskfilter } from "../TaskFilter/TaskFilter";
export const TaskList: React.FC<TaskListProps> = ({ sampleTasks }) => {
  // store all tasks in state
  const [tasks, setTasks] = useState(sampleTasks);

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  // update filters when user selects a new status or priority
  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  // filter tasks based on selected status and priority
  let filteredTasks = tasks;
  if (filters.status) {
    filteredTasks = filteredTasks.filter(
      (task) => task.status === filters.status,
    );
  }
  if (filters.priority) {
    filteredTasks = filteredTasks.filter(
      (task) => task.priority === filters.priority,
    );
  }

  // Handle status change, find one task, update its status, keep everyting else the same
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };
  // Handle delete, keep all tasks EXCEPT the one being seleted
  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    // console.log(taskId);
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <h1>Task Manager</h1>
      <Taskfilter onFilterChange={handleFilterChange} />
      {tasks.length === 0 && <p>No tasks found...</p>}
      {filteredTasks.map((task) => (
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
