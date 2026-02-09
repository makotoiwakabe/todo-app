## 1. プロジェクトセットアップ

- [x] 1.1 Next.jsプロジェクトを作成する (create-next-app --typescript)
- [x] 1.2 不要なボイラープレートを削除する

## 2. データベースセットアップ

- [x] 2.1 Prismaをインストール・初期化する
- [x] 2.2 Todoモデルのスキーマを定義する (prisma/schema.prisma)
- [x] 2.3 Prismaクライアントの初期化ファイルを作成する (lib/prisma.ts)

## 3. Server Actions

- [x] 3.1 TODO追加のServer Actionを作成する
- [x] 3.2 TODO完了切替のServer Actionを作成する
- [x] 3.3 TODO削除のServer Actionを作成する

## 4. UIコンポーネント

- [x] 4.1 TodoForm コンポーネントを作成する（入力フィールド + 追加ボタン）
- [x] 4.2 TodoItem コンポーネントを作成する（チェックボックス + テキスト + 削除ボタン）
- [x] 4.3 TodoList コンポーネントを作成する（TodoItemのリスト表示）
- [x] 4.4 TodoFooter コンポーネントを作成する（残タスク数表示）

## 5. ページ統合

- [x] 5.1 メインページ (page.tsx) でDBからTODOを取得して表示する
- [x] 5.2 レイアウト (layout.tsx) にメタデータを設定する

## 6. スタイリング

- [x] 6.1 グローバルスタイルを設定する (globals.css)
- [x] 6.2 各コンポーネントにCSS Modulesでスタイルを適用する
- [x] 6.3 レスポンシブデザインを適用する

## 7. 動作確認・デプロイ準備

- [x] 7.1 ローカルでビルド・動作確認する
- [ ] 7.2 Vercelデプロイ用の設定を確認する
