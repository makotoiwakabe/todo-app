## Why

TODOアプリを構築する。シンプルなタスク管理アプリとして、タスクの作成・表示・完了・削除ができるWebアプリケーションを提供する。Next.jsとVercelを使い、モダンなフルスタック構成で素早くデプロイ可能にする。

## What Changes

新規プロジェクトとしてTODOアプリを一から構築する。

- Next.js (App Router) でフロントエンドとAPIを構築
- Vercelにデプロイ
- データの永続化にはVercel Postgres + Prismaを使用

## Capabilities

### New Capabilities
- `todo-management`: TODOの作成・一覧表示・完了切り替え・削除
- `todo-ui`: レスポンシブなUIコンポーネント

### Modified Capabilities
(なし — 新規プロジェクト)

## Impact

- 新規Next.jsプロジェクトの作成
- Vercelへのデプロイ設定
- 依存パッケージ: next, react, react-dom, typescript, prisma, @prisma/client, @vercel/postgres
