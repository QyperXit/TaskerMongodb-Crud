import Box from "@/components/box";
import FormTask from "@/components/form-task";
import React from "react";

const TaskPage = () => {
  return (
    <section className="py-6">
      <Box>
        <div className=" w-full flex flex-col">
          <h1 className=" text-xl font-medium text-gray-800">New Tasks</h1>
          <p className=" font-light text-gray-400 text-md">Add new Task</p>
          <FormTask />
        </div>
      </Box>
    </section>
  );
};

export default TaskPage;
