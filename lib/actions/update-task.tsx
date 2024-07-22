"use server";
import { redirect } from "next/navigation";
import prisma from "../prisma";

export async function updateTask(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priority = formData.get("priority")?.toString();
  // const completion = formData.get("completion")?.toString();
  const completion = formData.get("completion") === "on" ? "true" : "false";

  if (!id || !name || !description || !priority) {
    return;
  }

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      name: name,
      description: description,
      priority: priority,
      completion: completion,
    },
  });

  redirect("/");
}
