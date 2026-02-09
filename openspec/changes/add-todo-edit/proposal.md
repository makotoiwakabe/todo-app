## Why

現在のTODOアプリではタスクのタイトルを作成後に変更できない。誤字の修正や内容の更新をするには、一度削除して再作成する必要がある。インライン編集機能を追加することで、ユーザー体験を改善する。

## What Changes

TODOアイテムのタイトルをクリックするとインライン編集モードに切り替わり、テキストを修正して保存できるようにする。

- TODOアイテムにインライン編集機能を追加
- 編集用のServer Actionを追加
- 編集時のUIインタラクションを実装
- Addボタンを赤色に実装

## Capabilities

### New Capabilities
(なし)

### Modified Capabilities
- `todo-management`: TODOの編集機能を追加
- `todo-ui`: TODOアイテムにインライン編集UIを追加

## Impact

- `src/app/actions.ts` に editTodo Server Actionを追加
- `src/components/TodoItem.tsx` にインライン編集UIを追加
- `src/components/TodoItem.module.css` にスタイルを追加
