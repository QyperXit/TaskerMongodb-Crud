import Box from "@/components/box";
import TaskCard from "@/components/cards";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div className=" py-6">
      <Box>
        <div className="flex items-center w-full justify-between">
          <div>
            <h1 className=" text-xl font-medium  text-gray-800">Tasks</h1>
            <p className=" font-light text-gray-400 text-sm">
              Please find the list of tasks provided
            </p>
          </div>
          <Link href={"/new"}>Create Task</Link>
        </div>

        <Suspense fallback={"Loading..."}>
          <TaskList />
        </Suspense>
      </Box>
    </div>
  );
}

async function TaskList() {
  const tasks = await prisma.task.findMany({});
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 border p-2 mt-6">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
