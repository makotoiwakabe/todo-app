"use client";

import { toggleTodo, deleteTodo } from "@/app/actions";
import styles from "./TodoItem.module.css";

type Props = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoItem({ id, title, completed }: Props) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className={styles.checkbox}
        />
        <span className={completed ? styles.completed : styles.title}>
          {title}
        </span>
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className={styles.deleteButton}
        aria-label="Delete"
      >
        &times;
      </button>
    </li>
  );
}
