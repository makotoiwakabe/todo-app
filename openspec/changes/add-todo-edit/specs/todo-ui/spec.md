# Delta for Todo UI

## MODIFIED Requirements

### Requirement: TODOアイテムの表示
各TODOアイテムはチェックボックス、編集可能なテキスト、削除ボタンで構成されなければならない(MUST)。

#### Scenario: 通常表示モード
- **GIVEN** TODOが通常表示モードである
- **WHEN** リストが表示される
- **THEN** タイトルはクリック可能なテキストとして表示される

#### Scenario: 編集モード
- **GIVEN** ユーザーがタイトルをクリックした
- **WHEN** 編集モードに切り替わる
- **THEN** テキスト入力フィールドが表示される
- **AND** 現在のタイトルが入力フィールドに設定される
- **AND** 入力フィールドにフォーカスが当たる

## ADDED Requirements

### Requirement: Addボタンのスタイル
TODOの追加ボタンは赤色で表示されなければならない(MUST)。

#### Scenario: Addボタンの色
- **GIVEN** ユーザーがTODOアプリを開いている
- **WHEN** 入力フォームが表示される
- **THEN** Addボタンが赤色で表示される
