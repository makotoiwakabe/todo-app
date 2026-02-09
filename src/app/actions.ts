"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function addTodo(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title || title.trim() === "") {
    return;
  }

  await prisma.todo.create({
    data: { title: title.trim() },
  });

  revalidatePath("/");
}

export async function toggleTodo(id: string) {
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) return;

  await prisma.todo.update({
    where: { id },
    data: { completed: !todo.completed },
  });

  revalidatePath("/");
}

export async function editTodo(id: string, title: string) {
  if (!title || title.trim() === "") {
    return;
  }

  await prisma.todo.update({
    where: { id },
    data: { title: title.trim() },
  });

  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}
