"use server";
import { redirect } from "next/navigation";
import prisma from "../prisma";

export async function createTask(formData: FormData) {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priority = formData.get("priority")?.toString();
  // const completion = formData.get("completion")?.toString();
  const completion = formData.get("completion") === "on" ? "true" : "false";

  if (!name || !description || !priority) {
    return;
  }

  const newTask = await prisma.task.create({
    data: {
      name: name,
      description: description,
      priority: priority,
      completion: completion,
    },
  });

  redirect("/");
}
