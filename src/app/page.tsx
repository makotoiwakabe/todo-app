import { prisma } from "@/lib/prisma";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Todo App</h1>
      <TodoForm />
      <TodoList todos={todos} />
      <TodoFooter total={todos.length} remaining={remaining} />
    </div>
  );
}
