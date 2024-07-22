import { Task } from "@prisma/client";
import React from "react";

const Priority = ({ task }: { task: Task }) => {
  const getColorClass = () => {
    switch (task.priority) {
      case "high":
        return "bg-red-200";
      case "medium":
        return "bg-amber-200";
      case "low":
        return "bg-green-200";
      default:
        return "bg-gray-200";
    }
  };
  return (
    <div
      className={`h-full p-1 flex flex-col sm:flex-row  justify-center items-center rounded-md ${getColorClass()}`}
    >
      <p className="text-sm font-bold text-center  text-gray-800">
        {task.priority[0]}
      </p>
      <p className="text-sm font-bold text-center  text-gray-800">
        {task.priority[1]}
      </p>
      <p className="text-sm font-bold text-center  text-gray-800">
        {task.priority[2]}
      </p>
      <p className="text-sm font-bold text-center  text-gray-800">
        {task?.priority[3]}
      </p>
      <p className="text-sm font-bold text-center  text-gray-800">
        {task?.priority[4]}
      </p>
      <p className="text-sm font-bold text-center  text-gray-800">
        {task.priority[5]}
      </p>
      <p className="text-sm font-bold text-center  text-gray-800">
        {task.priority[6]}
      </p>
    </div>
  );
};

export default Priority;
