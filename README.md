# Next.js + Next Auth + Amazon Cognito 認証サンプル

このプロジェクトは [Next.js](https://nextjs.org) を基盤とし、[Next Auth](https://next-auth.js.org) と [Amazon Cognito](https://aws.amazon.com/jp/cognito/) を使用した認証機能のサンプル実装です。

## 概要

このアプリケーションは以下の認証フローを実装しています：

- サインイン / サインアウト
- パスワードを忘れた場合のリセット
- パスワード変更
- トークンのリフレッシュ

## 前提条件

- Node.js@18.0.0
- pnpm@8.0.0
- Amazon Cognito

### 環境変数の設定

このアプリケーションを実行するには、以下の環境変数を設定する必要があります：

````bash
# .env.local ファイルに以下を設定
AWS_COGNITO_USER_POOL_ID=xxxxxxxxxxxx
AWS_COGNITO_CLIENT_ID=xxxxxxxxxxxx
# AWS_COGNITO_CLIENT_SECRET=xxxxxxxxxxxx // 今回はシークレットなしで設定済み
AWS_COGNITO_REGION=ap-northeast-1

NEXTAUTH_SECRET=xxxxxxxxxxxx
NEXTAUTH_URL=http://localhost:3000
```

#### NEXTAUTH_SECRET の生成方法

NEXTAUTH_SECRET は、JWT の署名やクッキーの暗号化に使用される重要な秘密鍵です。強力なランダム文字列を生成するには、以下のコマンドを使用してください：

```bash
pnpm dlx auth secret
````

このコマンドは、NextAuth.js の公式ツールを使用して安全なシークレットを生成し、自動的に `.env.local` ファイルに追加します。

## 起動方法

1. 依存パッケージのインストール：

```bash
pnpm install --frozen-lockfile
```

2. 開発サーバーの起動：

```bash
pnpm dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、アプリケーションが表示されます。

## 機能構成

- 公開ページ：`/auth/signin` - サインインページ
- 公開ページ：`/auth/forgot-password` - パスワードリセットページ
- 保護ページ：`/setting` - パスワード変更などの設定ページ

## 技術スタック

- [Next.js 15](https://nextjs.org/) - React フレームワーク
- [Next Auth 4](https://next-auth.js.org/) - 認証ライブラリ
- [AWS SDK for JavaScript](https://aws.amazon.com/jp/sdk-for-javascript/) - Amazon Cognito 連携
- [React 19](https://react.dev/) - UI ライブラリ
- [TailwindCSS 4](https://tailwindcss.com/) - スタイリング
- [TypeScript 5](https://www.typescriptlang.org/) - 型付け

## 詳細情報

Next.js の詳細は以下のリソースを参照してください：

- [Next.js ドキュメント](https://nextjs.org/docs/ja) - Next.js の機能と API
- [Next Auth ドキュメント](https://next-auth.js.org/getting-started/introduction) - 認証ライブラリの使い方
- [Amazon Cognito 開発者ガイド](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/what-is-amazon-cognito.html) - Amazon Cognito の使用方法
