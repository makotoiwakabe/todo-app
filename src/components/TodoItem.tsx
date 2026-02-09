"use client";

import { useState, useRef } from "react";
import { toggleTodo, deleteTodo, editTodo } from "@/app/actions";
import styles from "./TodoItem.module.css";

type Props = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoItem({ id, title, completed }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  function startEditing() {
    if (completed) return;
    setEditTitle(title);
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  }

  async function saveEdit() {
    if (!editTitle.trim()) {
      setEditTitle(title);
      setIsEditing(false);
      return;
    }
    if (editTitle.trim() !== title) {
      await editTodo(id, editTitle.trim());
    }
    setIsEditing(false);
  }

  function cancelEdit() {
    setEditTitle(title);
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      saveEdit();
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  }

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
        className={styles.checkbox}
      />
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleKeyDown}
          className={styles.editInput}
        />
      ) : (
        <span
          className={completed ? styles.completed : styles.title}
          onClick={startEditing}
        >
          {title}
        </span>
      )}
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
