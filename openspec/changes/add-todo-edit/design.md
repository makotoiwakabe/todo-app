## Context

TODOアプリにインライン編集機能を追加する。既存のTodoItemコンポーネントに編集モードのstate管理を追加し、Server Actionで保存する。また、Addボタンの色を赤に変更する。

## Goals / Non-Goals

**Goals:**
- TodoItemにインライン編集機能を追加する
- editTodo Server Actionを追加する
- Escでキャンセル、Enter/blur で保存する
- Addボタンを赤色にする

**Non-Goals:**
- ドラッグ＆ドロップによる並び替え
- リッチテキスト編集

## Decisions

### Decision: TodoItem内でstateを管理
- `isEditing` と `editTitle` のstateをTodoItem内に持つ
- 別コンポーネントに分離する必要がない程度の複雑さ

### Decision: Server Actionで保存
- 既存のaddTodo, toggleTodo, deleteTodoと同じパターン
- `editTodo(id, title)` を追加

## File Changes
- `src/app/actions.ts` — editTodo Server Action を追加
- `src/components/TodoItem.tsx` — 編集モードのUI・state管理を追加
- `src/components/TodoItem.module.css` — 編集モードのスタイルを追加
- `src/components/TodoForm.module.css` — Addボタンの色を赤に変更

## Risks / Trade-offs

- TodoItemのコードが少し複雑になるが、別コンポーネントに分離するほどではない
