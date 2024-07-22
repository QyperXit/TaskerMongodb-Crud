"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export async function toggleCompletion(formData: FormData) {
  const id = formData.get("id")?.toString();
  const currentStatus = formData.get("currentStatus")?.toString();

  if (!id) return;

  const newStatus = currentStatus === "true" ? "false" : "true";

  await prisma.task.update({
    where: { id: id },
    data: { completion: newStatus },
  });

  revalidatePath("/"); // Revalidate the path where this task is displayed
}
