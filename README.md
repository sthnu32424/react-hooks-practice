# React Hooks Practice

フィヨルドブートキャンプのプラクティス「React Hooks」で作成したアプリケーションです。

GitHub のユーザーIDを入力すると、GitHub API から取得したユーザー情報を表示します。

## 機能

- GitHub ユーザー情報の取得
- ローディング状態の表示
- エラーハンドリング
- 入力値が空の場合は送信を無効化

## 使用技術

- React
- Vite
- React Hooks
  - useState
  - useEffect

## カスタムフック

GitHub API との通信処理をカスタムフックとして実装しています。

```js
const { userInfo, loading, error } = useUserInfo(userId);
```

## 学習内容

このプラクティスでは以下を学習しました。

- useState を使った状態管理
- useEffect を使った副作用処理
- カスタムフックによるロジックの分離
- API 通信
- 条件レンダリング
- 制御コンポーネントによるフォーム管理

## セットアップ

```bash
npm install
npm run dev
```

## 使用した GitHub API

```txt
https://api.github.com/users/{username}
```

## 参考

以下を参考に、GitHub API を利用したユーザー情報取得アプリを実装しました。

- [JavaScript Primer - ユースケース: Ajax通信](https://jsprimer.net/use-case/ajaxapp/)
