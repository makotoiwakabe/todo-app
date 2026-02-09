# Delta for Todo Management

## ADDED Requirements

### Requirement: TODOの編集
ユーザーは既存のTODOのタイトルを編集できなければならない(MUST)。

#### Scenario: インライン編集を開始する
- **GIVEN** TODOがリストに存在する
- **WHEN** ユーザーがTODOのタイトルをクリックする
- **THEN** テキストが編集可能な入力フィールドに切り替わる

#### Scenario: 編集を保存する
- **GIVEN** TODOが編集モードになっている
- **WHEN** ユーザーがEnterキーを押す、またはフォーカスを外す
- **THEN** 変更がデータベースに保存される
- **AND** 表示モードに戻る

#### Scenario: 編集をキャンセルする
- **GIVEN** TODOが編集モードになっている
- **WHEN** ユーザーがEscキーを押す
- **THEN** 変更が破棄される
- **AND** 元のタイトルで表示モードに戻る

#### Scenario: 空のタイトルでは保存できない
- **GIVEN** TODOが編集モードになっている
- **WHEN** ユーザーがタイトルを空にして保存しようとする
- **THEN** 変更は保存されない
- **AND** 元のタイトルに戻る
