# todo-ui Specification

## Purpose
TBD - created by archiving change todo-app. Update Purpose after archive.
## Requirements
### Requirement: レスポンシブレイアウト
アプリはデスクトップとモバイルの両方で使いやすいレイアウトを提供する。

#### Scenario: モバイルでの表示
- **GIVEN** モバイルデバイスからアクセスする
- **WHEN** アプリを開く
- **THEN** 画面幅に合わせてレイアウトが調整される

### Requirement: 入力フォーム
画面上部に常にTODO入力フォームが表示される。

#### Scenario: 入力フォームの表示
- **GIVEN** ユーザーがアプリを開く
- **WHEN** ページが表示される
- **THEN** テキスト入力フィールドと追加ボタンが表示される

### Requirement: TODOアイテムの表示
各TODOアイテムはチェックボックス、テキスト、削除ボタンで構成される。

#### Scenario: TODOアイテムの構成
- **GIVEN** TODOが1件以上存在する
- **WHEN** リストが表示される
- **THEN** 各アイテムにチェックボックス、テキスト、削除ボタンが表示される

### Requirement: 残タスク数の表示
未完了のTODO数を表示する。

#### Scenario: 残タスク数の表示
- **GIVEN** TODOが存在する
- **WHEN** リストが表示される
- **THEN** 未完了のTODO数がフッター部分に表示される

