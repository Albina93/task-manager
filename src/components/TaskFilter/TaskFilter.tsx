import React from "react";
import type { TaskFilterProps } from "../../types";

export const Taskfilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  return (
    <div style={{ marginTop: "20px", marginBottom: "30px" }}>
      <label>
        Status{" "}
        <select
          onChange={(e) =>
            onFilterChange({
              status:
                e.target.value === "all" ? undefined : (e.target.value as any),
            })
          }
        >
          <option value="all">All statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
    </div>
  );
};
