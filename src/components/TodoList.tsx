import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  if (todos.length === 0) {
    return <p className={styles.empty}>No todos yet. Add one above!</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}
