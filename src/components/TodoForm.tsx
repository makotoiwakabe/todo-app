"use client";

import { useRef } from "react";
import { addTodo } from "@/app/actions";
import styles from "./TodoForm.module.css";

export default function TodoForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    await addTodo(formData);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="title"
        placeholder="What needs to be done?"
        className={styles.input}
        autoFocus
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
}
