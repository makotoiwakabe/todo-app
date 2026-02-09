## Context

新規プロジェクトとしてTODOアプリを構築する。Next.js (App Router) + TypeScriptを使用し、Vercelにデプロイする。データの永続化にはVercel Postgres + Prisma ORMを使用する。

## Goals / Non-Goals

**Goals:**
- Next.js App RouterでTODOアプリを構築する
- TypeScriptで型安全に実装する
- Vercel Postgres + Prismaでデータを永続化する
- Server ActionsでDB操作を行う
- Vercelにデプロイ可能な構成にする
- レスポンシブデザインでモバイル対応する

**Non-Goals:**
- ユーザー認証（将来対応）
- TODOの編集機能（将来対応）
- カテゴリ・タグ機能（将来対応）

## Decisions

### Decision: Vercel Postgres + Prisma を使用
- Vercelデプロイとのネイティブ統合
- Prismaで型安全なDB操作
- マイグレーション管理が容易

### Decision: Server Actions でDB操作
- API Routeを別途作る必要がない
- フォーム送信と自然に統合できる
- Next.js App Routerの推奨パターン

### Decision: CSS Modules を使用
- Next.jsのビルトインサポート
- 外部ライブラリ不要
- コンポーネントスコープのスタイリング

### Decision: プロジェクト構成
```
todo-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # メインページ (Server Component)
│   │   ├── actions.ts          # Server Actions (CRUD操作)
│   │   └── globals.css         # グローバルスタイル
│   ├── components/
│   │   ├── TodoForm.tsx        # 入力フォーム (Client Component)
│   │   ├── TodoList.tsx        # リスト表示
│   │   ├── TodoItem.tsx        # 個別アイテム (Client Component)
│   │   └── TodoFooter.tsx      # フッター（残タスク数）
│   └── lib/
│       └── prisma.ts           # Prismaクライアント初期化
├── prisma/
│   └── schema.prisma           # DBスキーマ定義
├── package.json
├── tsconfig.json
├── next.config.ts
└── openspec/
```

### Decision: DBスキーマ
```prisma
model Todo {
  id          String   @id @default(cuid())
  title       String
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Risks / Trade-offs

- **Vercel Postgres無料枠**: ストレージ256MB、コンピュート60時間/月。TODOアプリなら十分
- **認証なし**: 初期版は全ユーザーが同じデータを共有する。将来の認証追加で解決
- **Server Actions**: 比較的新しい機能だが、Next.js公式で安定している
