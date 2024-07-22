import { Task } from "@prisma/client";
import React from "react";

const Completed = ({ task }: { task: Task }) => {
  const isCompleted = task.completion === "true";

  return (
    <span
      className={`p-1 rounded-xl text-gray-700 leading-tight text-sm cursor-pointer ${
        isCompleted ? "bg-green-200" : "bg-orange-200"
      }`}
    >
      {isCompleted ? "Completed" : "Open"}
    </span>
  );
};

export default Completed;
