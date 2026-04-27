import React from "react";
import type { TaskItemProps, TaskStatus } from "../../types";

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {
  // Color logic for priority
  const priorityColor =
    task.priority === "high"
      ? "red"
      : task.priority === "medium"
        ? "orange"
        : "green";
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span style={{ color: priorityColor }}>Priority: {task.priority}</span>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      {/* Status dropdown... */}
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Delete button... */}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};
