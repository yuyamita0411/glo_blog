# ベースイメージ
FROM node:14-alpine

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係のコピーとインストール
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# アプリケーションのコピー
COPY . .

# 環境変数の設定
ENV PORT=4444

# 開発サーバーの起動
CMD ["npm", "start"]