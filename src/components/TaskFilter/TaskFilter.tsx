import React from "react";
import type { TaskFilterProps } from "../../types";

export const Taskfilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  return (
    <div style={{ marginTop: "20px", marginBottom: "30px" }}>
      {/* Status filter  */}
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
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      {/* Priority filter */}
      <label style={{ marginLeft: "20px" }}>
        Priority{" "}
        <select
          onChange={(e) =>
            onFilterChange({
              priority:
                e.target.value === "all" ? undefined : (e.target.value as any),
            })
          }
        >
          <option value="all">All priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>
    </div>
  );
};
