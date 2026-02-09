import styles from "./TodoFooter.module.css";

type Props = {
  total: number;
  remaining: number;
};

export default function TodoFooter({ total, remaining }: Props) {
  if (total === 0) return null;

  return (
    <footer className={styles.footer}>
      <span>
        {remaining} item{remaining !== 1 ? "s" : ""} left
      </span>
    </footer>
  );
}
